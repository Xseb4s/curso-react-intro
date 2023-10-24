import './TodoForm.css'
import { useContext, useState } from 'react';
import {TodoContext} from '../../context/TodoContext'

export function TodoForm() {
    const {
        addTodo,
        setOpenModal
    } = useContext(TodoContext);

    const [newTodo, setNewTodo] = useState('');

    const onSubmit = (e)=>{
        e.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    } 
    const onCancel = ()=>{
        setOpenModal(false);
    }
    const onChange = (e) => {
        setNewTodo(e.target.value);
    }

    return(
        <>
            <form onSubmit={onSubmit}>
                <h1>Nuevo To Do ✍🏻</h1>
                <textarea 
                    value={newTodo}
                    onChange={onChange}
                    placeholder="Agrega un nuevo To Do..."/>

                <div className="todoform-button-container">
                    <button 
                        onClick={onCancel}
                        type="button"
                        className="todo-button todo-button-cancelar">Cancelar
                    </button>

                    <button 
                        type="submit"
                        className="todo-button todo-button-aceptar">Agregar
                    </button>       
                </div>
            </form>
        </>
    )
}