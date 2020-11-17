* Golf Code
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line    
    switch(true)
    {
        case (strokes === 1):
          return names[0]; 
          break;
        case (strokes <= (par - 2)):
          return names[1]; 
          break;
        case (strokes === (par - 1)):
          return names[2]; 
          break;
        case (strokes === par):
          return names[3]; 
          break;
        case (strokes === par + 1):
          return names[4]; 
          break;          
        case (strokes === par + 2):
          return names[5]; 
          break;          
        default:
          return names[6]; 
          break;          
    }
  // Only change code above this line
}

golfScore(5, 4);

* Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  // Only change code above this line
  return answer;
}

caseInSwitch(1);

* Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
  // Only change code above this line
  return answer;
}

switchOfStuff(1);


* Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

* Replacing If Else Chains with Switch
function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}
chainToSwitch(7);


* Returning Boolean Values from Functions





* Return Early Pattern for Functions
* Counting Cards
* Build JavaScript Objects
* Accessing Object Properties with Dot Notation
