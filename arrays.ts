let fruitList: string[] = ["maca", "banana", "mamao"];
let listaDeFrutas = [] as string[];
fruitList =[...fruitList]

//sintaxe 
const numeros: number[] = [1,2,3,4,6]

// mix de tipos de dados dentro do array nao é recomendavel 
const mix: (number | string )[] = ["jeff", 2, 2.12]

// sintaxe mais antiga 
const number: Array<number> = [1,2,3,4]

// exemplo de tupla :conjunto de valores que vc sabe que vai  ter dentro de um array.

const pessoaTupla: [string, number]= ["jeff", 35]

// ja vem uma tipagem implicita
const pessoa = {
    nome: "Jeff",
    idade: 35, 
    profissão: "Estudante",
    altura: 1.77
}

//object Types
// utilizando o interface ( associado a orientação objeto) e type é uma coisa mais generica.
// criando uma modelagem de que é uma pessoa, o nome do atributo vai ser sempre a chave que queremos passar e o valor vai ser o tipo
interface Person {
    nome: string,
    idade: number,
    profissao?: string, // quando coloco o ? significa que não é obrigatório é opcional 
    altura:number
}

type Person = {
    nome: string,
    idade: number,
    profissao: string,
    altura: number
}

const pessoaP: Person = {
    nome: "Jeff",
    idade: 35, 
    profissao: "Estudante",
    altura: 1.77
}

