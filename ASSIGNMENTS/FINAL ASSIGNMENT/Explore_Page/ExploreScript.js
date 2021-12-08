var smash2 = 6;
var smash3 = new Array(smash2).fill(false);
//console.log(smash3);
function toggle1(btn)
{
  for(var i=1; i<=smash3.length; i++)
  {
  if(btn.id == i && smash3[i-1] == false)
  {
    btn.innerHTML = "UnSmash";
    console.log("button1:" + smash3[0]);
    smash3[i-1] = true;
  }
  else if(btn.id == i && smash3[i-1] == true)
  {
    document.getElementById(i).innerHTML = "Smash";
    smash3[i-1] = false;
  }
  }
}

function Login()
{
  location.href = "/C:/Users/Admin/Desktop/IASC 1P02/GitHub/IASC-1P02-2021/ASSIGNMENTS/FINAL ASSIGNMENT/Log_In_Page/Login.html";
}

function search()
{
  var maleBox = document.getElementById("M");
  var male = "male";
  var femaleBox = document.getElementById("F");
  var female = "female";
  var otherBox = document.getElementById("O");
  var other = "other";

  if(maleBox.checked == true)
  {
    console.log("male box is checked");
    //document.getElementsByClassName("male").style.display = "none";
    //https://stackoverflow.com/questions/4644673/hide-all-elements-with-class-using-plain-javascript
    display(male);
  }
  else
  {
    hide(male);
  }

  if(femaleBox.checked == true)
  {
    console.log("female box is checked");
    display(female);
  }
  else
  {
    hide(female);
  }

  if(otherBox.checked == true)
  {
    console.log("other box is checked");
    display(other);
  }
  else
  {
    hide(other);
  }
}

function display(gender)
{
  for (let element of document.getElementsByClassName(gender))
  {
    element.style.display="block";
  }
}
function hide(gender)
{
  for (let element of document.getElementsByClassName(gender))
  {
    element.style.display="none";
  }
}

function goBack()
{
  history.back(1);
}
