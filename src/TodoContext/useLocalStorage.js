import React from "react";

//Regla de nuestros custom react hooks debe de nombrarse al pirncipio use
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    //vamos a simular que es una llamada a una api y que se va a ejecutar cada vez que se renderiza
    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem('itemName');
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem('itemName', JSON.stringify(initialValue));//initialValue es un array vacio para evitar informacion que no necesite un array vacio
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          
        } catch (error) {
          setError(true);
        }
      }, 1000);
    });
  
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('itemName', stringifiedItem);  
        setItem(newItem);
        
      } catch (error) {
        setError(true);
      }
    };
  
    //cuando tenemos más estados en un hooks lo recomendable es mandarlo como un objeto y no como array
    return {
      item, 
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };