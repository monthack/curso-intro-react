import React from "react";
import { TodoContext } from "./TodoContext";

function TodoForm(){
    //consumir el estado
    const {
        addTodo,

    } = React.useContext(TodoContext);

    const onCancel = () => {
        //TODO
    };

    const onSubmit = () => {
        
    };
    
    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea
                placeholder="Cortar la cebolla"
                onChange={e => {}
            />
            <div>
                <button
                   type="button"
                   onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                   type="submit"
                   onClick={onSubmit}
                >
                    Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};