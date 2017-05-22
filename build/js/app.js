(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}


Calculator.prototype.pingPong = function(number) {
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
};

exports.calculatorModule = Calculator;

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
