import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    // const onComplete = () => {
    //     alert('Ya completaste el todo' + props.text); 
    // };
    // const onDelete = () => {
    //     alert('Ya eliminaste el todo' + props.text); 
    // };
    // cuando sea necesario mandarle parametros a un evento se debe hacerlo con una funcion anonima(arrow function)
    // pero cuando no se le pase nungun argumento no es necesario hacerlo

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
                √ 
            </span>
            {/* 
                * {`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
                * es una forma de escribir una clase con una condición
                * ternaria
             */}
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                X
            </span>
        </li>
    );
}

export {TodoItem};