
//var awesomeThoughts
//awesomeThoughts = "I am Abhishek Jain !";	
//console.log(awesomeThoughts);

var awesomeThoughts = "I am Abhishek Jain and I am AWESOME!";	
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var email = "abhishek@csc.com";
var newmail = email.replace("csc","gmail");


var formattedName = HTMLheaderName.replace("%data%","Abhishek Jain");
var formattedRole = HTMLheaderRole.replace("%data%","Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);



console.log("Old Mail ID:" + email);
console.log("New Mail ID:" + newmail);