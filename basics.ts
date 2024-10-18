// let ____ : ____ = ""
let welcomeMessage: string = "hello Karan how are you! Your pin code is ";
let PinCode: number = 9909;
let isTrue: true = true;
console.log(welcomeMessage, PinCode + "which is" + isTrue);

// Dont use ANY Karan
// Any is a escape for type checking

/***
  In this code below if there was a api call and you have kept the value returnBackValue to any now it's no use you'll get errors in the future. Keep it strict use string instead there so that you can get the data from the api call 
 */

let returnBackValue;

function backToBack() {
  return "LOL";
}

returnBackValue = backToBack();

