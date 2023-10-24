import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
    const {
        search,
        setSearchValue,
    } = useContext(TodoContext);

    return(
        <>
        <input placeholder="Comprar un mando"
        className="todo-search"
        value={search}
        onChange={(event)=>{
            setSearchValue(event.target.value);
        }}></input>
        </>
    )
}

export {TodoSearch}