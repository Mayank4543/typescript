import Todo from "./component/todo";

let name: string;
let age: number;
let isstudent: boolean;
let hobbies: string[];
let role: [number, string];
role = [1, "mayank"]
// type Person = {
//   name: string;
//   age: number;
// }
// let person: Person = {
//   name: "mayank",
//   age: 12
// }
const App: React.FC = () => {


  return (
    <>
      <div>
        <Todo />
      </div>
    </>
  )
}

export default App
