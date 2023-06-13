// nie uzywamy
// hoisting pozwala na odwolanie się do zmiennej/funkcji zanim faktycznie zostanie zdefiniowana
console.log(a);
foo();

function foo() {
  console.log('asda');
}
var a = 10;

//w ES6 uzywamy tylko let i const - a nawet dobrze się trzymać tylko const
console.log(c); // w tym miejscu wystąpi błąd
let c = 10;