var pingpong = function(number)
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
   var userInput = parseInt($("#input").val());
   result = pingpong(userInput);
   $("#result").text("");
   for (var j=0;j<result.length;j++)
   {
     $("#result").append('<li>'+result[j]+'</li>');
   }
   $("#result-div").show();
  });
});
