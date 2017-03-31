var pingpong = function(number)
{
  if (!number || (number < 1))
  {
    alert("Please enter valid number");
  }
}

$(document).ready(function(){
 $("#form1").submit(function(event){
   event.preventDefault();
   var userInput = parseInt($("#input").val());

   var result = pingpong(userInput);
   console.log(result);
 });
});
