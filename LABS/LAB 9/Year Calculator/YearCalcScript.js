var age = prompt("What is your age?");
var date = new Date();
var year = date.getFullYear();
var birthDate = year - age;
document.write(birthDate);
