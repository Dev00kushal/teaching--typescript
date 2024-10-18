/**
 Karan, Now in this code also hover and see the function sum it's of type any.
 Remember what i said you shall write tight code 
 fix this dont use any
 */

// In the case of variable it is normal typescript will know 
// In the case of parameter it doesnot know the type, so assign it 

function sum(num1, num2) {
  return num1 + num2;
}

let answer = sum(1, 2);
console.log(answer)


function loginForm(name: string,email:string,zipCode:number,isAdmin:boolean = false){
}

// So admin is becomes optional here you write if you like if not because of the false assigment there
// That is called default assigment within the function itself you can keep optional too by providing isAdmin?:boolean your wisdom when to use what karan
let repsonse = loginForm("Karan Sunar","k@k.sunar",8808);


