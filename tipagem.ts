let number  =  20; // inferencia de tipo 

const pi = 3.1415;

let nome: string = "Jeff"

let correta: boolean;

correta = true

let resultado = number * pi

const dadosDoUsuario = prompt("qual seu nome?")

// ? - significa se o valor for valido faz um tolowercase , se for null ele nao vai aplicar.
// ajudando a evitar um bug no código.
console.log(dadosDoUsuario?.toLowerCase)


