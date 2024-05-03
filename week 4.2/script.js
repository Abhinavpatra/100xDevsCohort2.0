const bodyParser = require('body-parser');
const express = require('express');
const port = 3000;
const app = express();
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .num {
              font-family: cursive;
              background-color: cornsilk;
          }
          .buttons {
              backdrop-filter: blur(5.5px);
              -webkit-backdrop-filter: blur(5.5px);
              color: #000000;
              backdrop-filter: blur(4px);
              -webkit-backdrop-filter: blur(4px);
              background: rgba(155, 233, 132, 0.3);
              font-size: 13px;
              height: 28px;
              padding: 10px 5px;
          }
      </style>
      <script>
          const populateDiv = (operation) => {
              const element = document.getElementById("finalSum");
              const a = parseInt(document.getElementById("firstNum").value);
              const b = parseInt(document.getElementById("SecondNum").value);

              switch (operation) {
                  case 'sum':
                      element.innerHTML += \`Your Sum is \${a + b}\`;
                      break;
                  case 'quotient':
                      element.innerHTML += \`Your Quotient is \${a / b}\`;
                      break;
                  case 'product':
                      element.innerHTML += \`Your Product is \${a * b}\`;
                      break;
                  case 'difference':
                      element.innerHTML += \`Your Difference is \${a - b}\`;
                      break;
                  case 'mod':
                      element.innerHTML += \`Your Mod is \${a % b}\`;
                      break;
                  default:
                      break;
              }
          }
      </script>
  </head>
  <body>
      <input type="text" id="firstNum" class="num" placeholder="first number"><br><br>
      <input type="text" id="SecondNum" class="num" placeholder="second number"><br><br>
      <button class="buttons" onclick="populateDiv('quotient')">quotient</button>
      <button class="buttons" onclick="populateDiv('sum')">sum</button>
      <button class="buttons" onclick="populateDiv('product')">product</button>
      <button class="buttons" onclick="populateDiv('difference')">difference</button>
      <button class="buttons" onclick="populateDiv('mod')">mod</button>
      <br><br>
      <div id="finalSum"></div>
  </body>
  </html>`);
});

app.listen(port, '0.0.0.0', function () {
  console.log(`Example app listening on port ${port}`);
});
