let age: string | number = 24
let cardapio: "macarrao" | "risoto" | "bananada" = "macarrao"

function sum(a: number | string , b: number | string) {
    if (typeof a === "number"  && typeof b === "number") {
        return a + b
    } else {
        return Number(a) + Number(b)
    }
}

sum(3,4)
console.log(sum)