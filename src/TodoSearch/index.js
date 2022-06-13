import React from "react";
import { TodoContext } from '../TodoContext';
import "./TodoSearch.css";

function TodoSearch() {
  // ya no ocupo props si no todoContext
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  // const [searchValue, setSearchValue] = React.useState(''); se pasaron por medios de props
  
  // En react, los estados los manera de como un array, donde el primer elemento es el valor 
  //y el segundo es la funcion para actualizar el valor
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };
  // no puede renderizar varias etiquetas en un mismo componente, por eso se usa un fragment
  //o se puede ocupar un array de elementos
  return (
    <input 
      className="TodoSearch" 
      placeholder="Cebolla" 
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export {TodoSearch};