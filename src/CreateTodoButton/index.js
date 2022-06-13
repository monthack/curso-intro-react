import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  // Es un metodo que se ejecuta cuando el usuario hace click en el boton
  const onClickButton = () => {

    //Todos los actualizadores de estados nos permite hace dos cosas, mandarles el valor
    //o mandarles una funcion
    //no va  a regresar el estado anterior
     props.setOpenModal(prevState => !prevState);
    
  };

  return (
    // cuando se quiera hacer un boton reutilizable osea pasar el mensaje de forma dinamica
    // se debera envolver mi funcion onClickButton en una funcion anonima(arrow function)
      <button 
        className="CreateTodoButton"
        onClick={onClickButton}
      >
        +
      </button>
  );
}
export {CreateTodoButton};