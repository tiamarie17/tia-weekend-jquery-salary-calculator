//an array to store all of the employee objects
let employees = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  //click listener for submit button
  $('#submitButton').on('click', monthlyCost)
}

function monthlyCost(event){

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


}