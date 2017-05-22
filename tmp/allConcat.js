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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function(){
 $("#form1").submit(function(event){
   event.preventDefault();

   var result = [];
   var reverseResult = [];
   var userInput = parseInt($("#input").val());
   var simpleCalculator = new Calculator("hot pink");
   result = simpleCalculator.pingPong(userInput);

   $("#result, #normal-result, #reverse-result").text("");

   for (var j=0;j<result.length;j++)
    {
     if(result[j] === 'ping')
     {
        $("#result").append('<li class="bg-ping"><marquee direction="down" width="40" height="30" behavior="alternate">'+result[j]+'</marquee></li>');
     }
     else if(result[j] === 'pong')
     {
        $("#result").append('<li class="bg-pong"><marquee direction="right" width="40" height="20" behavior="alternate">'+result[j]+'</marquee></li>');
     }
     else if(result[j] === 'ping-pong')
     {
        $("#result").append('<li class="bg-ping-pong"><marquee direction="left" width="80" height="20" behavior="alternate">'+result[j]+'</li>');
     }
     else
     {
        $("#result").append('<li>'+result[j]+'</li>');
     }
   }

   for (j=0;j<result.length;j++)
   {
      $("#normal-result").append('<li>'+result[j]+'</li>');
   }

   reverseResult = result.reverse();
   for (j=0;j<reverseResult.length;j++)
   {
      $("#reverse-result").append('<li>'+reverseResult[j]+'</li>');
   }

   $("#result-div").show();

  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
