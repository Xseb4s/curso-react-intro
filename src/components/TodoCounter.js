import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

function TodoCounter(){
    const {
        completedTodo,
        totalTodo,
    } = useContext(TodoContext);
    return(
        <>
            <h1>Has completado {completedTodo} TO-DOs de {totalTodo}</h1>
        </>
    )
}
export {TodoCounter}