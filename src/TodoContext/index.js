import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();
// React Context: Estado compartido
function TodoProvider(props) { //este es un atajo como un puente

    //vamos a consumier el hook
    //const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    //cuando sean usuarios nuevos se debera crear un localStorage vacio 
    //pero cuando ya sea un usuario que ya exista se debera leer el localStorage
    // const localStorageTodos = localStorage.getItem('TODOS_V1');
    // let parsedTodos;

    // if (!localStorageTodos) {
    //   localStorage.setItem('TODOS_V1', JSON.stringify([]));
    //   parsedTodos = [];
    // } else {
    //   parsedTodos = JSON.parse(localStorageTodos);
    // }


    //lo que sucede es que el todos(state) esta asignando un valor por defecto
    //pero se puede pasar como vacio en caso de no requerirlo 
    // const [todos, setTodos] = React.useState(parsedTodos);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    // un elemento se le llama a la sintaxis de jsx 

    //********************contar cuantos todos tenemos********************
    //!! doble falso es verdadero, ! es falso
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //********************buscar todos que cumplan con la busqueda********************
    //const filteredTodos = todos.filter(todo => searchValue ? todo.text.includes(searchValue) : true).length;
    let searchedTodos = [];

    //si la busqueda esta vacia
    if (!searchValue.length >= 1) {
        searchedTodos = todos;
    } else {
        searchedTodos = todos.filter(todo => {
        //convirtiendo a minusculas para que no sea case sensitive
        const todoTex = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();

        //si todoTex inluye alguna palabra en searchText, es verdadero
        return todoTex.includes(searchText);
        });
    }

    /*vamos a crear una funcion que sirva como puente entre completeTodos y deleteTodo
    * contra nuestro localStorage y nuestro estado 
    **/
    //  const saveTodos = (newTodos) => {
    //    //vamos a persistir nuerstro localStorage
    //    const stringifiedTodos = JSON.stringify(newTodos);
    //    localStorage.setItem('TODOS_V1', stringifiedTodos);  //guardamos en el localStorage
    //    setTodos(newTodos);//evitar recargar la pagina, para eso modificamos el estado

    //  };

     //********************cuando se modifica un todo, se actualiza el estado********************
     const addTodos = (text) => {
        const newTodos = [...todos]; 
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos);
    }

    //********************cuando se modifica un todo, se actualiza el estado********************
    const completeTodos = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        
        //spread operator, crea un nuevo array con los elementos del array original
        const newTodos = [...todos]; //clonando el array
        newTodos[todoIndex].completed = true;//Modificar el elemento del array
        saveTodos(newTodos);
        //setTodos(newTodos);//mandamos actualizar el estado


        //podemos trabajar de ambas maneras pasarle todo el objeto o solamente alterar el campo
        // Opcion 1:  todos[todoIndex].completed = true;
        // Opcion 2:  todos[todoIndex] = {
        //              text: todos[todoIndex].text,
        //              completed: true,
        //             }
    }


    //********************cuando se elimina un todo, se actualiza el estado********************
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);//la posicion del elemento = id
        
        //spread operator, crea un nuevo array con los elementos del array original
        const newTodos = [...todos]; //clonando el array
        newTodos.splice(todoIndex, 1);//Empezar a contar desde el indice 0, eliminar 1 elemento
        saveTodos(newTodos);
        //setTodos(newTodos);//mandamos actualizar el estado

    };

    return(
        //el provider es el que va a proveer el contexto, envolver todo el contenido
        //value es la propiedad para compartir nuestro contexto, le decimos cual es el estado que se va a compartir 
        //como value va ser un objeto por eso se pasa las dos llaves, value es para compartir varias propiedades
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodos,
            completeTodos,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
        {/* otros componentes pueden consumir nuetro Provider */}
            {props.children} 
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};