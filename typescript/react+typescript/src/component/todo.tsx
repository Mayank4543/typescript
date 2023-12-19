import React, { useState } from 'react'

interface Props {

    id: number;
    text: string;
    complete: boolean;
}
const Todo: React.FC<Props> = () => {
    const [todos, setTodo] = useState<Props[]>([
        { id: 1, text: "hello maynk", complete: false },
        { id: 2, text: "hello", complete: false },

    ])
    const [value, setValue] = useState<string>("")
    const handleToggle = (id: number) => {
        setTodo(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo;
            })
        );
    };
    const handleClick = () => {
        const newItem: Props = { id: Date.now(), text: value, complete: false }
        setTodo([...todos, newItem]);
        // setValue('');
    };

    return (
        <>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans mt-20">
                <div className="bg-[#012254] rounded-[10px] shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
                    <div className="mb-4">
                        <h1 className="text-white font-semibold text-3xl  font-[robato]">Todo List</h1>
                        <form action="">
                            <div className="flex mt-4">

                                <input
                                    value={value}
                                    // onChange={(e) => setTodo(e.target.value)}
                                    className=" bg-white outline-none border rounded-[10px] w-full px-10   me-2 mb-2   mr-4 text-grey-darker text-xl"
                                    placeholder="Add Todo"
                                    onChange={(e) => setValue(e.target.value)}
                                />
                                <button type="button" className="text-white bg-[#145996] hover:bg-blue-800 font-semibold rounded-lg text-sm px-10 py-4 me-2 mb-2 inline-flex items-center "
                                    onClick={handleClick} >Add <svg className='x' xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" fill='white'><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg></button>


                            </div>
                        </form>
                    </div>
                    <div>
                        <div className="flex mb-4 items-center">
                            <ul>
                                {todos.map((todo) => (
                                    <li key={todo.id} onClick={() => handleToggle(todo.id)} style={{ textDecoration: todo.complete ? "line-through" : "none" }}>{todo.text}</li>
                                ))}

                            </ul>
                            {/* <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">
                                Done
                            </button>
                            <button className=" p-2 ml-2 outline-none border-2 rounded text-red border-red hover:text-white ">
                                Remove
                            </button> */}

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo