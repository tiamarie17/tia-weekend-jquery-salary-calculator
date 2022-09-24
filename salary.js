//an array to store all of the employee objects
let employees = [];
let totalMonthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  //click listener for submit button
  $('#submitButton').on('click', getInfo)
}

function getInfo(event){

    event.preventDefault();

    //storing input from form into objects
    let newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#jobTitleInput').val(),
        salary: $('#annualSalaryInput').val()
      };

    console.log(newEmployee);

    //pushing objects into employee array
    employees.push(newEmployee);
    console.log(employees);

    //clearing input fields
    $('input').val('');

    //appending employee info to the DOM
    $('').append(``)

    //running the monthlyCost function
    monthlyCost();
    
}

function monthlyCost(){
   //calculates the monthly cost
}