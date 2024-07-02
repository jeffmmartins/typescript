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


// Exemplo de type aliases ( dando apelido)
type Criterio = "greater" | "lower"
function chooseNumber(number1: number, number2: number, criterio?: Criterio ): number {
    switch (criterio) {
        case "greater":
            return number1 > number2 ? number1 : number2
        case "lower":
            return number1 < number2 ? number2 : number1
        default:
            const numberAleatorio = Math.random()

            if(numberAleatorio >= 0.5) return number1
            return number2
}
}

const resultado = chooseNumber(10,20)
console.log(resultado)

// Utility Types criar novos tipos a partir de tipos já existentes

// 1 - Partial - isso faz com que todos os paramtros sao opcionais 
 type PersonPartial = Partial<Person>

 const outraPessoa: PersonPartial = {

 }

 // 2 - Required - faz com que os paramentros sejam obrigatorios 
type PersonRequired = Required<Person>

// 3- Pick - pegar alguns atributos 
type PersonPick = Pick<Person, "nome" | "idade" >

// 4 - omit - serve para esconder 
type PersonOmit = Omit<Person, "profissao" >

// 5- Exclude - consegue eliminar de dentro de uma union type um selecionado 
type CriterioEXclude = Exclude<Criterio, "lower" >

// 6 - Record 
type Pessoas = Record<string, Person>

const pessoas: Pessoas = {
    "123-456-789-00": {
        altura: 1.70,
        nome: "jeff",
    }
}

