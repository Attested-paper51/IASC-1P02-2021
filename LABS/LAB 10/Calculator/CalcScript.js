function Addition()
{
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var output = num1 + num2;
  document.getElementById("num").innerHTML = output;
}

function Subtraction()
{
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var output = num1 - num2;
  document.getElementById("num").innerHTML = output;
}

function Multiplication()
{
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var output = num1 * num2;
  document.getElementById("num").innerHTML = output;
}

function Division()
{
  var num1 = Number(document.getElementById("num1").value);
  var num2 = Number(document.getElementById("num2").value);
  var output = num1 / num2;
  document.getElementById("num").innerHTML = output;
}
