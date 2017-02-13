//allow active suedoclass to work on mobile
document.addEventListener("touchstart", function() {},false);

var pushButton = function(button) {
    if (button.charAt(0) === "#") {
        return document.querySelector(button);  // if it gets an id return that button
    }
        return document.querySelectorAll(button);   // Otherwise, return a list (???)
    };

var display = pushButton("#screen"),
    equals = pushButton("#equals"),
    percent = pushButton("#percent"),
    plusMinus = pushButton("#plusMinus"),
    numbers = pushButton(".button"),
    operators = pushButton(".operations"),
    clearScreen = pushButton("#clear"),
    currentNumber = "",
    previousNumber = "",
    answer,
    negativeNumber,
    percentNumber,
    doMath;
  
    
//Clear the display
var clearEntry = function() {
    currentNumber = "";
    previousNumber = "";
    display.innerHTML = "0";
};

clearScreen.onclick = clearEntry;
    

//Enter the first number 
var setNumber = function() {
    if (answer) {
        currentNumber = this.getAttribute("data-number");
        answer = "";
    } else {
        currentNumber += this.getAttribute("data-number");
    }
    
    display.innerHTML = currentNumber.substr(0, 14);
};

//Click button to enter number
for (var i = 0, j = numbers.length; i < j; i++) {
    numbers[i].onclick = setNumber;
}


// Save number when you click operator
var saveNumber = function() {
    previousNumber = currentNumber;
    currentNumber = "";
    doMath = this.getAttribute("data-operations");
    
    equals.setAttribute("data-answer","");
};


//Click operator button to do math
for (var i = 0, j = operators.length; i < j; i++) {
    operators[i].onclick = saveNumber;
}


//Allow positive and negative numbers
var oppositeSign = function() {
    negativeNumber = currentNumber * -1;
    currentNumber = negativeNumber;
    answer = currentNumber;
    var stringAnswer;
    stringAnswer = answer.toString();
    display.innerHTML = stringAnswer.substr(0, 14);
};

plusMinus.onclick = oppositeSign;


// Display percentage 
var percentage = function() {
    percentNumber = currentNumber / 100; 
    currentNumber = percentNumber;
    answer = percentNumber;
    display.innerHTML = answer;
};  

percent.onclick = percentage;


// Calculate answer when equals is entered
var mathAnswer = function() {
    previousNumber = parseFloat(previousNumber);
    currentNumber = parseFloat(currentNumber);
    
    switch(doMath) {
        case "add":
            answer = previousNumber + currentNumber;
            break;
            
        case "subtract":
            answer = previousNumber - currentNumber;
            break;
            
        case "divide":
            answer = previousNumber / currentNumber;
            break;
            
        case "multiply":
            answer = previousNumber * currentNumber;
            break;
            
        //case "percentage":
        //    answer = previousNumber / 100;
        //    break;
            
        default:
            answer = currentNumber;
    }
    
    if (!isFinite(answer)) {
      if (isNaN(answer)) { 
        answer = "No, Try Again!";
      } else { 
        answer = "Can't Divide 0";
      }
    }
    
    var stringAnswer;
    stringAnswer = answer.toString();
    display.innerHTML = stringAnswer.substr(0, 14);
    equals.setAttribute("data-answer", answer);

    previousNumber = 0;
    currentNumber = answer;  
};

equals.onclick = mathAnswer;
