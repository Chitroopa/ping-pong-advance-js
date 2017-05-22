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

Calculator.prototype.add = function(num1, num2) {
  return num1 + num2;
};

Calculator.prototype.subtract = function(num1, num2) {
  return num1 - num2;
};

Calculator.prototype.multiply = function(num1, num2) {
  return num1 * num2;
};

Calculator.prototype.divide = function(num1, num2) {
  return num1 / num2;
};
exports.calculatorModule = Calculator;
