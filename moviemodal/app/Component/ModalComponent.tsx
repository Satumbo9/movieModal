import React from 'react';


interface ModalProps {

    isOpen?: boolean,
    onClose?: ()=>void,
    children?: React.ReactNode,
    className?: string, 
}



export const ModalComponent: React.FC<ModalProps>  = ({isOpen, onClose, children, className, ...props}) => {

    if(!isOpen) return null;


    return(
        <div className={`bg-[yellow]  ${className}`} {...props}>
        
        {children}
          <button onClick={onClose}>Close</button>
        </div>
    )
    }