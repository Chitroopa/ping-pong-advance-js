var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {

  $("form#add").submit(function(event){
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var simpleCalculator = new Calculator("test");
    var addresult = simpleCalculator.add(number1, number2);
    $("#output").text(addresult);
  });

  $("form#Sub").submit(function(event){
    event.preventDefault();
    var subNum1 = parseInt($("#sub1").val());
    var subNum2 = parseInt($("#sub2").val());
    var simpleCalculator = new Calculator("test");
    var subresult = simpleCalculator.subtract(subNum1, subNum2);
    $("#subout").text(subresult);
  });

  $("form#multi").submit(function(event){
    event.preventDefault();
    var multInput1 = parseInt($("#multi1").val());
    var multInput2 = parseInt($("#multi2").val());
    var simpleCalculator = new Calculator("test");
    var multiresult = simpleCalculator.multiply(multInput1, multInput2);
    $("#multiout").text(multiresult);
  });

  $("form#divide").submit(function(event){
    event.preventDefault();
    var divInput1 = parseInt($("#div1").val());
    var divInput2 = parseInt($("#div2").val());
    var simpleCalculator = new Calculator("test");
    var divresult = simpleCalculator.divide(divInput1, divInput2);
    $("#divout").text(divresult);
  });


});
