import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

// const estilos = {
//     color: '#fff',
//     backgroundColor: 'red',
// };

//podemos meter los parametros al objeto y decir que queremos llamar a las propiedades
// function TodoCounter({ total, completed }) { por medio de props
function TodoCounter() {
    const { totalTodos, completedTodos} = React.useContext(TodoContext);
    //const {total, completed} = props; es una alternativa de la linea de arriba
    return (
        // <h2 style={estilos}>Has completado 2 de 3 TODOs</h2>
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

//puede hacer que se cofunda porque en js el import lo podemos
//nombrar como querramos y equivocarnos más sin encambio 

// export default TodoCounter;

//para ello mejor nos obligamos a nombrarlo
export { TodoCounter };