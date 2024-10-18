/**
 Karan, Now in this code also hover and see the function sum it's of type any.
 Remember what i said you shall write tight code
 fix this dont use any
 */
// In the case of variable it is normal typescript will know 
// In the case of parameter it doesnot know the type, so assign it 
function sum(num1, num2) {
    num1 = 10;
    return num1 + num2;
}
var answer = sum(1, 2);
console.log(answer);
