var pingpong = function(number)
{
  
  return number;
}




$(document).ready(function(){
 $("#form1").submit(function(event){
   event.preventDefault();
   var userInput = parseInt($("#input").val());

   var result = pingpong(userInput);
   console.log(result);
 });
});
