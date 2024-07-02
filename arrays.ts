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

const pessoa: [string, number]= ["jeff", 35]