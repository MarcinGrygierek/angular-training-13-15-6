function sum(a, b) {
  return a + b;
}

const sum2 = function(a, b) {
  return a + b;
}

const sum3 = (a, b) => {
  return a + b;
}

const sum4 = (a, b) => a + b;

const obj = {
  name: 'Marcin',
  sayHello: function() {
    console.log(this.name, this);
  }
}

const obj2 = {
  name: 'Marcin',
  sayHello: () => {
    console.log(this.name, this);
  }
}

obj.sayHello();
obj2.sayHello();