export function EmptyTodos({totalTodo}) {
    return(
        <>
        {totalTodo ? (
            <div className="empty-todos">
            <h1>No se encontraron resultados 😕</h1>
            </div>
            
        ) : (
            <div className="empty-todos">
            <h1>¡Crea tu primer To Do!</h1>
            </div>
        )}
        </>
    )
}