//window.status = "<TYPE YOUR MESSAGE>";
var bool = true;
var error = false;

function show()
{
   var password = document.getElementById('password');
   if(bool == true)
   {
     password.type = 'text';
     bool = false;
   }
   else {
     password.type = 'password';
     bool = true;
   }
   //document.write(password);
}

function login()
{
  var username = document.getElementById("username");
  var password = document.getElementById('password');

  // checks if any special case is detected in username
  for(var i=0; i<username.value.length; i++)
  {
    if(username.value[i] == '!' || username.value[i] == '@' || username.value[i] == '#' || username.value[i] == '$' || username.value[i] == '%' || username.value[i] == '^' || username.value[i] == '&' || username.value[i] == '*' || username.value[i] == '(' || username.value[i] == ')')
    {
      error = true;
      break;
    }
  }

  // if error is detected in username
  if(error == true)
  {
    console.log("There is at least 1 special case letter");
    document.getElementById("usernameError").innerHTML = "*Username must not contain special case letters*";
    document.getElementById("usernameError").style.color = "red";
  }
  else
  {
    document.getElementById("usernameError").innerHTML = "";
    // Logs in only if both username and password fields are not empty
    if(username.value && password.value != "")
    {
      location.href = "https://attested-paper51.github.io/IASC-1P02-2021/ASSIGNMENTS/FINAL ASSIGNMENT/Explore_Page/explore.html";
    }
  }

  // checks if username field is empty
  if(username.value == "")
  {
    document.getElementById("usernameError2").innerHTML = "*Type in your username*";
    document.getElementById("usernameError2").style.color = "red";
  }
  else {
    document.getElementById("usernameError2").innerHTML = "";
  }

  // checks if password field is empty
  if(password.value == "")
  {
    document.getElementById("passwordError").innerHTML = "*Type in your password*";
    document.getElementById("passwordError").style.color = "red";
  }
  else {
    document.getElementById("passwordError").innerHTML = "";
  }

  error = false;
}

function goBack()
{
  history.back(1);
}
