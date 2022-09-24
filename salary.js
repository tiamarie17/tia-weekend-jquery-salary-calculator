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
    console.log('in monthlyCost');

    let totalMonthlyCost = 0;
    let totalAnnualCost = 0;

    //Adding conditional if cost > $20,000

     if (totalMonthlyCost > 20000) {
       changeColor();
     }
     //Adding function to change color of monthlyCost text background

   //calculates the total monthly cost
   for(let newEmployee of employees){
     
     totalAnnualCost = parseFloat(totalAnnualCost) + parseFloat(newEmployee.salary);

     //Found a piece of code that adds commas to numbers that log as strings on Google
     totalMonthlyCost = (totalAnnualCost / 12).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
     

     console.log(typeof (totalAnnualCost / 12).toFixed(2));
     
     //Testing to see data types
      console.log(totalAnnualCost);
      console.log(typeof totalAnnualCost);
      console.log(parseFloat(newEmployee.salary));
      console.log(typeof parseFloat(newEmployee.salary));
      console.log(totalMonthlyCost);
      console.log(typeof totalMonthlyCost);

      //emptying the footer
      $('.monthlyCost').empty();

       //appending totalMonthlyCost to the DOM
       $('.monthlyCost').append(`
       
        <h2>Total Monthly Cost: $${totalMonthlyCost}</h2>
       
       `)
   }
   //calling the render function
   render();
}

function changeColor(){
  let background = $('.monthlyCost')
  background.style.backgroundColor = 'red';

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
     <td> $${(newEmployee.salary).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
     <td>
        <button id ="deleteButton">Delete</button>
    </td>
    </tr>
 `);
 
   }


}