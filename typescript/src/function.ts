// const isplaindrom = (plain: string): boolean => {
//     let myplain = plain.split("").reverse().join(" ");
//     return myplain === plain;

// }
// // let palin = isplaindrom('121')
// console.log(isplaindrom('121'));
// const Avg = (arr: number[]): number => {
//     const sum = arr.reduce((accumulator: number, val: number) => accumulator + val)
//     const avg = sum / arr.length;
//     return avg;

// }
// console.log(Avg([1, 2, 3]))
const greet = (name: string, id?: number): string => {
    if (id) {
        return `welcome ${name} and his id ${id}`
    }
    else {
        return `welcome ${name}`
    }

}
console.log(greet("mayank"))
console.log(greet("mayank", 2))