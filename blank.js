// Essa função faz aparecer um alerta

window.alert('Hello');

// Essa função pega o elemento pelo id e faz aparecer um texto desejado

document.getElementById('myH').textContent= 'Welcome';

// primeiro tem que declarar a variavel antes de usar
// declaration let x;
// assigment x = 100;
// variaveis não podem ter o mesmo nome

// Aqui declarei uma variável x
let x;
// Aqui eu atribui um valor a x
x = 100;

// ou poder ser junto let y = 200;
let y = 200;

// função parecida com o print do python;
console.log(x);
// utilizar crase para colocar a variavel
// essa função parece com o print = (f""texto");
console.log(`O valor de y é ${y}`);

// para ver o tipo da variavel usa typeof
// estilo o type do python
console.log(typeof x);
// nesse caso irá retornar um numero

let nome = "Chai";
let usuario = "Chai2009"
console.log(typeof nome);
// nesse caso aqui irá retornar uma string
// essa função parece com o print = (f""texto");
console.log(`Seu nome é ${nome}`)
// As strings podem conter numeros;
// mas não podem ser utilizadas para fins de calculo
console.log(`Seu usuário é ${usuario}`);

// esses são as variávies primitivas booleanas;
let online = true;
let offline = false;
console.log(typeof online);
console.log(typeof offline);
// Pode mostrar questões se algo é verdadeiro ou não
console.log(`O usuário ${usuario} está online: ${online}`)

// Exercícios //
// Aqui irá mostrar o H2 como o texto que contem na variavel online//
//Lembrando que a a varíavel online é booleana //
document.getElementById('myH2').textContent = online;
document.getElementById('myH3').textContent = `O seu usuário é ${usuario}`;