var employeeArray = [];
var $totalSalary = 0;

$(document).ready(init);

function init() {
  enable()
};

function enable() {
  $(".employeeInfo").on("submit", storeEmployee);
  $(".calcResults").on("click", displayCalc);
  $(".formDisplay").on("click", ".remove", removeEmployee);
};

function storeEmployee(event) {
  event.preventDefault();
  var employees = {};
  $.each($(".employeeInfo").serializeArray(), function(i, field) {
    employees[field.name] = field.value;
  })
  $(".employeeInfo").find("input[type=text]").val("");
  displayInput(employees);
  employeeArray.push(employees);
  $totalSalary += parseInt((employees.employeeSalary));
};

function removeEmployee(event) {
  event.preventDefault;

  $(this).closest(".employeeDisplay").remove();
  $(".results").children(".averageSalary").remove();
};

function displayInput(input) {
  $(".formDisplay").append("<div class='employeeDisplay'></div>");
  var $el = $(".formDisplay").children().last();
  $el.append("<p class='employeeLine'>" + input.employeeFirstName + "</p>");
  $el.append("<p class='employeeLine'>" + input.employeeLastName + "</p>");
  $el.append("<p class='employeeLine'>" + input.employeeID + "</p>");
  $el.append("<p class='employeeLine'>" + input.employeeTitle + "</p>");
  $el.append("<p class='employeeLine'>$" + input.employeeSalary + "</p>");
  $el.append("<button class='remove'>Remove</button>")
};

function displayCalc() {
  $(".results").append("<div class='average'></div>");
  var $average = $(".results").children().last();
  $average.append("<p class='averageSalary'>Your company's monthly salary paid out is $" + ($totalSalary / 12) + "</p>");
};
