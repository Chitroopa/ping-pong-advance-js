var pingPong = function(number)
{
  var output = [];
  if (!number || (number < 1))
  {
    alert("Please enter valid number");
  }
  for(var i=1;i<=number;i++)
  {
    if((i%3 === 0) && (i%5 === 0))
    {
      output.push("ping-pong");
    }
    else if(i%3 === 0)
    {
      output.push("ping");
    }
    else if(i%5 === 0)
    {
      output.push("pong");
    }
    else
    {
      output.push(i);
    }
  }
return output;
}

$(document).ready(function(){
 $("#form1").submit(function(event){
   event.preventDefault();

   var result = [];
   var reverseResult = [];
   var userInput = parseInt($("#input").val());

   result = pingPong(userInput);

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
