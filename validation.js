// JavaScript Document

//using the constraint validation API to customize an error message

var email = document.getElementById("mail");

  email.addEventListener("input", function(event){
  if(email.validity.typeMismatch) {
    email.setCustomValidity("Woah stop! I asked for an email");
  }
  else {
    email.setCustomValidity("");
  }
});

var name = document.getElementById("mail");

  name.addEventListener("input", function(event){
  if(name.validity.typeMismatch) {
    name.setCustomValidity("Woah stop! I asked for an email");
  }
  else {
    name.setCustomValidity("");
  }
});
