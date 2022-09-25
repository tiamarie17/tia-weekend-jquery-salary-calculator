//an array to store all of the employee objects
let employees = [];

$(document).ready(readyNow);

function readyNow() {
  console.log("DOM is loaded!");

  //click listener for submit button
  $('#submitButton').on('click', getInfo)
  //click listener for delete button
  $('#employeeTable').on('click', '#deleteButton', onDelete);
}

function onDelete() {
  console.log('in onDelete', $(this));
  $(this).parent().parent().remove();
}

function getInfo(event) {
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
  addUpCost();

}

function addUpCost() {
  console.log('in addUpCost');

  let totalMonthlyCost = 0;
  let totalAnnualCost = 0;

  //Calculates the total monthly cost
  for (let newEmployee of employees) {

    totalAnnualCost = parseFloat(totalAnnualCost) + parseFloat(newEmployee.salary);
    console.log(totalAnnualCost);

  }

  totalMonthlyCost = totalAnnualCost / 12;
  console.log(totalMonthlyCost);
 

  //calling the render function
  render(totalMonthlyCost);

}


function render(totalMonthlyCost) {
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
     <td> $${(newEmployee.salary).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
     <td>
        <button id ="deleteButton">Delete</button>
    </td>
    </tr>
 `);


  }
    //emptying the footer
    $('.monthlyCost').empty();

    //appending totalMonthlyCost to the DOM
    $('.monthlyCost').append(`
        
        <h2>Total Monthly Cost: $${totalMonthlyCost.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
      `)  
   // conditional to change the background color of monthly cost to red if total monthly cost is > $20,000   
  if (totalMonthlyCost >= 20000) {
    console.log('in if statement');

    //found code to change class atrribute using Google search
    $('.monthlyCost').attr("class", "monthlyCostRed");
    
  } else {
    $('.monthlyCost').attr("class", "monthlyCost");
  }
  
}
