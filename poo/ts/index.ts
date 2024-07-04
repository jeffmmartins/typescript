// Aula 19 - POO
// escopo da nossa classe - abstração 
// definindo abstração de uma pessoa. objeto literal é objeto unico 
// sempre que tiver um obeto que repete muito , fazer a class
// implements ela implemnta um contrato ela tem uma interface que é definição de tipos.
// as verificações de tipagem ficam mais  precisas, ideia do interface é quando olhar vai verificar o que tem dentro dessa classe  
// quando implemento o interface na hora da construcção da classe ele ja vai indicando o que devo colocar na classe

interface Ipessoa{
    nome: string,
    idade: number,
    altura: number,
    

    dormir: () => void;
}
class Pessoa implements Ipessoa {
    //toda classe tem atributos, sao as caracteristicas (variaveis)
    nome: string;
    idade: number;
    altura: number;
    private _cpf: string;
    // metodos : são ações como sendo uma função 

    //metodo construtor é obrigatório , e pode receber parametros 
    // esses argumentos tem que atribuir aos atributos criados acima 
    // this o atributo nome quero que receba o nome que esta sendo passado no momento da cosntrução do objeto
    constructor(nome: string, idade: number, altura: number, cpf: string ){
        this.nome = nome
        this.idade = idade
        this.altura = altura
        this._cpf =cpf

    }
    
    dormir(){
        console.log("dormindo ...")
    }

    
    // accessor : getter , e exige que faça a tipagem do retorno.
    // quando for acessar fora da classe nao precico colocar ()
    get cpf(): string  {
        return this._cpf
    }

    // accessor: setter
     set cpf(newCpf:string) {
        if(newCpf.length !== 14){
            // é uma forma de lançar erro 
            throw new Error("cpf is incorrect")
        }
        this._cpf = newCpf
     }
}
// criando uma pessoa (individuo /objeto) a partir das definições de classe Pessoa ou seja a partir da abstração 
// o () ao lado de Pessoa representa que estou chamando o constructor da class
// criar é a mesma coisa de instanciar bastante usado em programação
// o construtor define o que tenho que passar para a criação de uma nova pessoa  
//this - este objeto pessoa1 o nome dele seja o que foi passando como paramentro no construtor
const pessoa1 = new Pessoa("Jeff", 27, 1.70, "123456789")
const pessoa2 = new Pessoa("vera", 60, 1.70, "12345679")

console.log(pessoa1)
console.log(pessoa2.cpf)
console.log(pessoa1.dormir())
pessoa2.cpf = "123"
console.log(pessoa2.cpf)