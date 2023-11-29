let options: 'active' | 'inactive' = 'active';

type User = {
    name: string;
    age: number;
    course: string;
}


let ravi: User = {
    name: "ravi",
    age: 19,
    course: "bca"
}

function getData(key: keyof User): any {
    return ravi[key];
}

console.log(getData('name'))