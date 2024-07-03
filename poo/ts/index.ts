// Aula 19 - POO
// escopo da nossa classe - abstração 
// definindo abstração de uma pessoa. objeto literal é objeto unico 
// sempre que tiver um obeto que repete muito , fazer a class

class Pessoa {
    //toda classe tem atributos, sao as caracteristicas (variaveis)
    nome: string;
    idade: number;
    altura: number;
    // metodos : são ações como sendo uma função 

    //metodo construtor é obrigatório , e pode receber parametros 
    // esses argumentos tem que atribuir aos atributos criados acima 
    // this o atributo nome quero que receba o nome que esta sendo passado no momento da cosntrução do objeto
    constructor(nome: string, idade: number, altura: number ){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }
    
    dormir(){
        console.log("dormindo ...")
    }
}
// criando uma pessoa (individuo /objeto) a partir das definições de classe Pessoa ou seja a partir da abstração 
// o () ao lado de Pessoa representa que estou chamando o constructor da class
// criar é a mesma coisa de instanciar bastante usado em programação
// o construtor define o que tenho que passar para a criação de uma nova pessoa  
//this - este objeto pessoa1 o nome dele seja o que foi passando como paramentro no construtor
const pessoa1 = new Pessoa("Jeff", 27, 1.70)
const pessoa2 = new Pessoa("vera", 60, 1.70 )

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.dormir())
