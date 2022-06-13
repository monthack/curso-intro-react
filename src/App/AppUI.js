import React from "react";
import { TodoContext} from '../TodoContext';
import { TodoCounter} from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";

//esta sintaxis es cuando paso props por medio de un objeto, pero como ocupamos
//Provider en el index.js, no es necesario pasarle props
// function AppUI({
//   loading,
//   error,
//   totalTodos,
//   completedTodo,
//   searchValue, 
//   setSearchValue, 
//   searchedTodos, 
//   completeTodos,
//   deleteTodo,
// }){
function AppUI(){
    //const value = React.useContext(TodoContext);
    const { 
      error, 
      loading, 
      searchedTodos, 
      completeTodos, 
      deleteTodo,
      openModal,
      setOpenModal,
      } = React.useContext(TodoContext);

    return(
        //con react solo nos permite mandar un componente por cada div entonces
    //vamos a opcupar una funcion para que nos deje mandar un componente por cada div
    //react quiere enviar una etiqueta por cada elemento que queremos renderizar
    <React.Fragment>
    <TodoCounter />
    <TodoSearch />
    {/* // Enviar cada todo que requiera el usuario */}
    {/* <TodoContext.Consumer> */}
      {/* sintaxis render props jsx no react */}
      {/* cuando creo la funcion como parametro se le puede poner el value del provider
      y como atajo en vez de retornar seria con (value) => {}
      pero para no poner value.error se puede espelar el value en el parametro de la funcion 
      */}
        <TodoList>
          
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}  
              // cuando se hace click en el todo, se llama a la funcion completeTodo, pero enviandole 
              //un argumento por eso el arrow function
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList> 

        {!!openModal && (
          <Modal>
          <TodoForm />
          {/* le esta preuntando si esxite searchedTodos antes de imprimir
          su propiedad {searchedTodos[0]?.text}
          */}
            {/* <p> {searchedTodos[0]?.text} </p> */}
          </Modal>
        )}

    {/* esta es otra manera de hacer un consumer pero es mejor la de arriba 
    <TodoContext.Consumer>
      {({
          error,
          loading,
          searchedTodos,
          completeTodos,
          deleteTodo,
        }) => (
        <TodoList>
          
          {error && <p>Desespérate, hubo un error...</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.lenght) && <p>¡Crea tu primer TODO!</p>}

          {searchedTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed}  
              // cuando se hace click en el todo, se llama a la funcion completeTodo, pero enviandole 
              //un argumento por eso el arrow function
              onComplete={() => completeTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              />
          ))}
        </TodoList> 
      )}
    </TodoContext.Consumer> */}
    <CreateTodoButton
      setOpenModal={setOpenModal}
     />


    {/* Pasar un props en nuestro componente propiedades*/}
    {/* {props.saludo} */}
    {/*props.children*/}
    
    </React.Fragment>
    );
}

export {AppUI};