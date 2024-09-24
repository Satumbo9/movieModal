'use client'

import {ModalComponent} from '../Component/ModalComponent';
import {MOVIE_LIST} from '../Component/const/MOVIE_LIST';
import React, {useState} from 'react';





export const ModalPage: React.FC = () =>{

    const [isModalOpened, setModalOpened] = useState(false);
    const [MovieSelected,setMovieselected ] = useState("null");

    // const openModal = () => setModalOpened(true);
    // const clseModal = () => setModalOpened(true); 

//Handling Modal on Click
const OnclickModal = (movie)=>{
    setModalOpened(true)
    setMovieselected(movie);
}

//Closing Modal
const closeModal = () =>{
    setModalOpened(false); 
    setMovieselected(null);
}

return(
<section className='h-[100vh] bg-red-500'>
 
        {MOVIE_LIST.map((item)=>(
        
        <div onClick={()=> OnclickModal(item)}>
            <div key={item.name} className=''>
                <p className='text-[white]'>{item.name}</p>
            </div>
            

            </div>
        ))}

        {isModalOpened && MovieSelected &&( 
            <ModalComponent isOpen={isModalOpened} onClose={() => closeModal()}>
            <p>{MovieSelected.name}</p>
            {MovieSelected.description}
            </ModalComponent>)}



</section>

)
}