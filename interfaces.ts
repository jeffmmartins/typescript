// interface relacionada 
interface iPet {
    type: string;
    name: string;
}

interface iPerson {
    name: string;
    idade: number;
    pet?: iPet; // ? é quando se usa valor opcional , caso tenha outra pessoa porem noa tem um pet segue o exemplo
}

const person: iPerson = {
    name: "Alex",
    idade: 34,
    pet: {
        type: "cachorro",
        name: "jake"
    }
}

const personA: iPerson = {
    name: "Maria", 
    idade: 24
}