$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  $('#submitButton').on('click', monthlyCost)
}

function monthlyCost(event){

    event.preventDefault();

    let newEmployee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#jobTitleInput').val(),
        salary: $('#annualSalaryInput').val()
      };

    console.log(newEmployee);
}