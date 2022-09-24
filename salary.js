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

    

    //calling the monthlyCost function
    monthlyCost();
    
}

function monthlyCost(){
   //calculates the monthly cost

   //calling the render function
   render();
}

function render(){
   
    //updating the DOM
   $('#employeeTable').empty();
   
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
        <button type ="submit" id ="delete">Delete</button>
    </td>
    </tr>
 `);
   }
}