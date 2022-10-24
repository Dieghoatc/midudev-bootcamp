const list1 = [];
list1.push(67);
console.log(list1[0]);

const anhoterList = list1.concat(45);
console.log(anhoterList);

// objetos

const persona = {
  name: "Diego",
  age: 32,
  city: "Bogota",
  twitter: "@Dieghoatc",
};

const redSocial = "twitter";
console.log(persona[redSocial]);

// funntion expresion => se le asigna una funcion a una variable

const sumar = (operando1, operando2) => {
  return operando1 + operando2;
};

const a = 3;
const b = 4;

console.log(sumar(a, b));

// Foncion declaracions

function restar(operando1, operando2) {
  return operando1 - operando2;
}

console.log(restar(a, b));
