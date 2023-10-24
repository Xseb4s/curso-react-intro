import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);
      const [search, setSearchValue] = useState('');
      const [openModal, setOpenModal] = useState(false)
    
      const completedTodo = todos.filter(todo => !!todo.completedTodo).length;
      const totalTodo = todos.length;
    
      const serachedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = search.toLocaleLowerCase();
        
        return todoText.includes(searchText);
        }
      )
      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        })
        saveTodos(newTodos)
      };

      const completarTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos[todoIndex].completedTodo = true
        saveTodos(newTodos)
      };
      const deleteTodo = (text) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text === text
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
      }
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodo,
            totalTodo,
            search,
            setSearchValue,
            serachedTodos,
            addTodo,
            completarTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>

            {children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider};