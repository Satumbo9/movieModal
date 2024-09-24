import React from 'react';


interface ModalProps {

    isOpen?: boolean,
    onClose?: ()=>void,
    children?: React.ReactNode, 
}



export const ModalComponent: React.FC<ModalProps>  = ({isOpen, onClose, children, ...props}) => {

    if(!isOpen) return null;


    return(
        <div className='bg-red-' {...props}>
            <div>
          {children}
          <button onClick={onClose}>Close</button>

          </div>
        </div>
    )
    }