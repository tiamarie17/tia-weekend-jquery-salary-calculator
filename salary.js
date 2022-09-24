//an array to store all of the employee objects
let employees = [];
let totalMonthlyCost = 0;

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  //click listener for submit button
  $('#submitButton').on('click', getInfo)
  //click listener for delete button
  $('#employeeTable').on('click', '#deleteButton', onDelete);
}

function onDelete(){
    console.log('in onDelete', $(this));
    $(this).parent().parent().remove();
}

function getInfo(event){
    console.log('in getInfo');

    event.preventDefault();

    //getting input from form and storing it in objects
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

    //calling the monthlyCost function
    monthlyCost();
    
}

function monthlyCost(){
    console.log('in Monthly cost');
   //calculates the monthly cost

   //calling the render function
   render();
}

function render(){
    console.log('in render');
   
    //updating the DOM
   $('#employeeTable').empty();

   //appending table column titles to the DOM
   $('#employeeTable').append(`
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Employee ID</td>
        <td>Title</td>
        <td>Annual Salary</td>
    </tr>
   `);
   
    //appending form input to the DOM
   
   for (let newEmployee of employees) {
   $('#employeeTable').append(`
   <tr>
     <td>${newEmployee.firstName}</td>
     <td>${newEmployee.lastName}</td>
     <td>${newEmployee.id}</td>
     <td>${newEmployee.title}</td>
     <td>${newEmployee.salary}</td>
     <td>
        <button id ="deleteButton">Delete</button>
    </td>
    </tr>
 `);
   }
}