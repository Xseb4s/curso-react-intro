import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TodoCounter } from './components/TodoCounter';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodosLoading } from './components/TodosLoading/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoContext } from './context/TodoContext';
import { useContext } from 'react';
import { Modal } from './components/Modal/Modal';
import { TodoForm } from './components/TodoForm/TodoForm';
/* separamos la lógica del html */
export function AppUI() {
  const {
    loading,
    error,
    serachedTodos,
    completarTodo,
    totalTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext);

    return (
      <div className="App">
              
                <TodoCounter />
                <TodoSearch />
                
                <TodoList>
                {loading && <TodosLoading/>}
                {error && <TodosError/>}
                {(!loading && serachedTodos.length === 0 ) && <EmptyTodos totalTodo={totalTodo}/>}

                {serachedTodos.map(todo => (
                  <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completedTodo}
                    onComplete={()=>{completarTodo(todo.text)}}
                    onDelete={()=>{deleteTodo(todo.text)}}
                    />
                ))}
                </TodoList>
                  
                <AiOutlinePlusCircle className='add-to-do' 
                  style={
                    { transform: openModal ? 'rotateZ(220deg)' : 'none',
                      fill: openModal ? 'white' : ''
                    }
                  }
                onClick={()=>{
                  setOpenModal(!openModal)
                }}/>
                
                {openModal && (
                  <Modal>
                    <TodoForm/>
                  </Modal>
                )}
             
        </div>
      );
}