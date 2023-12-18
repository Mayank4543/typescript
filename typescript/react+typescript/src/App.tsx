import { useState } from "react";
import Todo from "./component/todo";
import { Todos } from "./model";

// let name: string;
// let age: number;
// let isstudent: boolean;
// let hobbies: string[];
// let role: [number, string];
// role = [1, "mayank"]
// type Person = {
//   name: string;
//   age: number;
// }
// let person: Person = {
//   name: "mayank",
//   age: 12
// }
const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])
  const handleadd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setTodo("")
    }
  }
  return (
    <>
      <div>
        <Todo todo={todo} setTodo={setTodo}
          todos={todos} setTodos={setTodos} handleadd={handleadd} />
      </div>
    </>
  )
}

export default App
