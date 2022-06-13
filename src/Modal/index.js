import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

/**
 * Portales: teletrasportación  de componentes
 *  los portales nos permite teletransportar nuestros componentes a otros nodos de nuestro DOM
 * un ejemplo podria ser modales, se puede comunicar aun cuando no este en el mismo nodo, podre seguir
 * hablando con el y pasarle el estado 
*/

/**
 * Ser reutilizado para reenviar informacion
 * @returns Portal
 */


function Modal({ children }) { //vamos ernviar un hijo
    return  ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };