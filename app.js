var express = require("express");
var app = express();
const port = 3000;

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit-values", function(req, res) {
  const inputString = req.body.inputValues;
  let response = "FizzBuzz output is: <br><br>";
  let splitValues;
  try {
    splitValues = inputString.split(",");
    console.log(splitValues);
  } catch (e) {
    response = "Invalid Input. Please enter comma separated values.";
  }
  splitValues.forEach(element => {
    console.log(element);
    const integer = parseInt(element);
    if (isNaN(integer)) {
      response += "Invalid Item <br>";
    } else {
      response +=
        integer % 15 === 0
          ? "Fizzbuzz <br>"
          : integer % 3 === 0
          ? "Fizz <br>"
          : integer % 5 === 0
          ? "Buzz <br>"
          : `Divided ${integer} by 3 <br>Divided ${integer} by 5 <br>`;
    }
  });
  response += `<form action="/" method="get"><input type="Submit" value="Try Again" /></form>`;
  res.send(response);
});

var server = app.listen(port, function() {
  console.log(`Node server is running on port ${port}`);
});
