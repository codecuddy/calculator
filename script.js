var pushButton = function(button) {
    if (button.charAt(0) === "#") {
        return document.querySelector(button);  // if it gets an id return that button
    }
        return document.querySelectorAll(button);   // Otherwise, return a list (???)
    };

var display = pushButton("#screen"),
    equals = pushButton("#equals"),
    numbers = pushButton(".button"),
    operators = pushButton(".operations"),
    currentNumber = "",
    previousNumber = "",
    answer,
    magic;
    
//Enter the first number 

var setNumber = function() {
    if (answer) {
        currentNumber = this.getAttribute("data-number");
        answer = "";
    } else {
        currentNumber += this.getAttribute("data-number");
    }
    
    display.innerHTML = currentNumber.substr(0, 15);
};


//Click button to enter
for (var i = 0, j = numbers.length; i < j; i++) {
    numbers[i].onclick = setNumber;
}






/*
var numbers = {
    displayZero: function() {
    var button = document.getElementById("zero").value;
    var display = document.getElementById("screen").innerHTML = button;
    var entry = display.value;
        
    },
    
    displayOne: function() {
    var button = document.getElementById("one").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayTwo: function() {
    var button = document.getElementById("two").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayThree: function() {
    var button = document.getElementById("three").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayFour: function() {
    var button = document.getElementById("four").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayFive: function() {
    var button = document.getElementById("five").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displaySix: function() {
    var button = document.getElementById("six").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displaySeven: function() {
    var button = document.getElementById("seven").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayEight: function() {
    var button = document.getElementById("eight").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayNine: function() {
    var button = document.getElementById("nine").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    displayDecimal: function() {
    var button = document.getElementById("decimal").value;
    document.getElementById("screen").innerHTML = button;
    }
};


var operators = {
    clearAll: function() {
    var button = document.getElementById("clearAll").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    plusMinus: function() {
    var button = document.getElementById("plusMinus").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    percent: function() {
    var button = document.getElementById("percent").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    divide: function() {
    var button = document.getElementById("divide").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    multiply: function() {
    var button = document.getElementById("multiply").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    minus: function() {
    var button = document.getElementById("minus").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    add: function() {
    var button = document.getElementById("add").value;
    document.getElementById("screen").innerHTML = button;
    },
    
    equal: function() {
    var button = document.getElementById("equal").value;
    document.getElementById("screen").innerHTML = button;
    }
}



/*
var display = {
    displayScreen: function(buttons) {
    var button = document.getElementById().value;
    document.getElementById("screen").innerHTML = button;
    }
}

*/