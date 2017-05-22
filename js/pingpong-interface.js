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
