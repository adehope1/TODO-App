

import { useState } from "react";



const Listing = ()=> {
    const [todo, setTodo] = useState([])
    const [inputTask, setInputTask] = useState(" ")

    const changeListener = (event)=> {
        setInputTask(event.target.value)
    }

    const SummitTodo = ()=> {
        if (inputTask.trim() !== " ") {
            setTodo([...todo, inputTask])
            setInputTask(" ")
            
        }
    }

    const deleteTodo = (index)=> {
        const arrayTodo = [...todo]
        arrayTodo.splice(index, 1)
        setTodo(arrayTodo)

    }

    const editTodo = (index)=> {
        const newTodo = window.prompt("Edit Your Task:", todo[index])
        if (newTodo !== null && newTodo.trim() !== " "){
            const arrayTodo = [...todo]
            arrayTodo[index] = newTodo
            setTodo(arrayTodo)
        }
    }




    return(
        <>
            <input type="text"  value={inputTask} onChange={changeListener} placeholder='Enter your task...' />
            <button onClick={SummitTodo}>Summit</button>

            <ul>
                {todo.map((task, index) => (
                    <li>{task}<button onClick={()=> editTodo(index)}>EDIT TASK</button><button onClick={()=> deleteTodo(index)}>DELETE TASK</button></li>

                ))}
            </ul>
        
        </>
    )

}


export default Listing