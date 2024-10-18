/**
 Karan, Now in this code also hover and see the function sum it's of type any.
 Remember what i said you shall write tight code 
 fix this dont use any
 */
function sum(num1: number, num2: number): number {
  return num1 + num2;
}

function loginForm(
  name: string,
  email: string,
  zipCode: number,
  isAdmin: boolean = false
) {}






// So admin is becomes optional here you write if you like if not because of the false assigment there
// That is called default assigment within the function itself you can keep optional too by providing isAdmin?:boolean your wisdom when to use what karan
let res = loginForm("Karan Sunar", "k@k.sunar", 8808);

// void and never

// because it doesnot return so void
function printName(naam: string = "karan"): void {
  console.log(naam);
}

// because its is neither void nor it is returning any thing
function ThrowError(errorMsg: string): never {
  throw new Error(errorMsg);
}
