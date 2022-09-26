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

  //getting the information that was clicked on and saving it in a variable
  let deletedEmployee = ($(this).parent().parent().text());
  console.log(($(this).parent().parent().text()));

  /*creating a new array with that information, using split method 
  to only get the words from the string since there are a lot of spaces in it.
  Setting the limit to 6 since we only need the first 5 indices.
  found this syntax on StackOverflow */
  deletedEmployeeArray = deletedEmployee.split(/\s+/, 6);
  console.log(deletedEmployeeArray);

  //removing the first index of the array since it is a blank space every time, not sure why

  deletedEmployeeArray.shift();
  console.log(deletedEmployeeArray);

  //Looping through the employee array to see if the employee id is a match

  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
    if (deletedEmployeeArray[2] == employees[i].id) {
      console.log(i);


      //removing object that matches from employees array at index where match is
      employees.splice(i,1);
      console.log(employees);
    }
  }

  //call getMonthlyCost function and save it in a variable totalMonthlyCost

  totalMonthlyCost = getMonthlyCost();

<<<<<<< HEAD
=======
     //removing object that matches from employees array at index where match is
     employees.splice(i, 1);
     console.log(employees);
     }
    }
    
   
>>>>>>> 5c3a4f65af5e7b386de8263c28dd9da49951606d
  //Remove employee info from the DOM
  $(this).parent().parent().remove();

  //update the DOM with totalMonthlyCost
  render(totalMonthlyCost);

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
<<<<<<< HEAD
  totalMonthlyCost = getMonthlyCost();

  //calling the render function
  render(totalMonthlyCost);
=======
  getMonthlyCost();
>>>>>>> 5c3a4f65af5e7b386de8263c28dd9da49951606d

}

function getMonthlyCost() {
<<<<<<< HEAD
  console.log('getMonthlyCost');
=======
  console.log('in getMonthlyCost');
>>>>>>> 5c3a4f65af5e7b386de8263c28dd9da49951606d

  let totalMonthlyCost = 0;
  let totalAnnualCost = 0;

  //Calculates the total monthly cost
  for (let newEmployee of employees) {

    totalAnnualCost = parseFloat(totalAnnualCost) + parseFloat(newEmployee.salary);
    console.log(totalAnnualCost);

  }

  totalMonthlyCost = totalAnnualCost / 12;
  console.log(totalMonthlyCost);

  return totalMonthlyCost;

}


function render(totalMonthlyCost) {
  console.log('in render');

  //updating the DOM
  $('#employeeTable').empty();

  //appending table column titles to the DOM
  $('#employeeTable').append(`
    <tr id ="firstRow">
        <td>First Name</td>
        <td>Last Name</td>
        <td>Employee ID</td>
        <td>Title</td>
        <td>Annual Salary</td>
        <td></td>
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
     <td id ="deleteButtonColumn">
        <button id ="deleteButton">Delete</button>
    </td>
    </tr>
 `);

  }

  //appending extra row to the bottom of the table
  $('#employeeTable').append(`
      <tr id ="lastRow">
        <td style="border:0;"></td>
        <td style="border:0;"></td>
        <td style="border:0;"></td>
        <td style="border:0;"></td>
        <td style="border:0;"></td>
        <td></td>
      </tr>
 `);

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
