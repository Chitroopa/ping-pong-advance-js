var pingpong = function(number)
{
  var output = [];
  if (!number || (number < 1))
  {
    alert("Please enter valid number");
  }
  for(var i=1;i<=number;i++)
  {
    if(i%3 === 0)
    {
      output += "ping";
    }
    else
    {
      output += i;
    }

  }
console.log(output);
return output;
}

$(document).ready(function(){
 $("#form1").submit(function(event){
   event.preventDefault();
   var userInput = parseInt($("#input").val());

   var result = pingpong(userInput);
   console.log(result);

 });
});
