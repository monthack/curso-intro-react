import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Cortar lechuga', completed: false },
//   { text: 'Cortar zanahoria', completed: false },
// ];

/**aqui iba el useLocalStoras osea el hook TodoContext/useLocalStorage.js */

// Antes se ocupaba las clases para crear los componentes, pero con la nueva version de react
// ya no se ocupa las clases, se ocupa la sintaxis de jsx que es por medio de funciones
function App() {

  /**Aqui iba lo que esta en TodoContext/index.js */

  //===================React.useEffect justo antes de renderizar 
  // 3 estados de cargar, error, todo esta bien  y ocurrio un error
  // a la funcion useEffect se le puede pasar un segundo argumento que es un array vacio
  // ese array nos permite saber cuando se debe ejecutar la funcion
  // console.log('render');
  // React.useEffect(() => {
  //   console.log('use effect');
  // }, [totalTodos]); // se va arenderizar cuando el estado cambie

  // console.log('Render luego de use effect');

  return (
    // <AppUI />
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
