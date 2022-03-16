var firstName = document.getElementById("name");
var number = document.getElementById("number");
var email = document.getElementById("email");
var address = document.getElementById("address");
var submit = document.getElementById("submit");
var form = document.getElementById("form");


document.addEventListener("DOMContentLoaded", function(e){
  form.addEventListener("submit", function(e){
    e.preventDefault
  console.log(Person.name);

  })
})

function Person(name,email,address,number){
  this.name = firstName.value,
  this.email = email,
  this.address = address,
  this.number = number
  console.log(name.value);

}
// var myPerson = new Person(name.value)
// console.log(myPerson.name);