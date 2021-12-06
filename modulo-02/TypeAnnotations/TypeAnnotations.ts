// ==> Variáveis

const nome :string =  'Mateus Landim';
const idade: number = 30;
console.log(nome + ', ' + idade);

// ==> Arrays

const animais : string[] = [ 'Cachorro', 'Gato', 'Papagaio'];
console.log(animais);

// ==> Objetos

let carro : {
    nome: string,
    ano: number,
    preco: number
};

carro = { nome: 'Fiat Sienna', ano: 2002, preco: 15000 };

console.log(carro);

// ==> Functions

function multiplicar(num1: number, num2: number): number {
    return num1*num2;
}

console.log(multiplicar(4, 3));