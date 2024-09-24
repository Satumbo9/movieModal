'use client'

import {ModalComponent} from '../Component/ModalComponent';
import {MOVIE_LIST} from '../Component/const/MOVIE_LIST';
import React, {useState} from 'react';


//Under modal description 


export const ModalPage: React.FC = () =>{

    const [isModalOpened, setModalOpened] = useState(false);
    const [MovieSelected,setMovieselected ] = useState("null");

    // const openModal = () => setModalOpened(true);
    // const clseModal = () => setModalOpened(true); 

//Handling Modal on Click
const OnclickModal = (movie)=>{

    if(isModalOpened && MovieSelected?.name=== movie.name){
        closeModal();
    }else{
        setModalOpened(true)
        setMovieselected(movie);
    }

}

//Closing Modal
const closeModal = () =>{
    setModalOpened(false); 
    setMovieselected(null);
}

return(
<section className='h-[100vh] bg-red-500'>
 
        {MOVIE_LIST.map((item)=>(
        
        <div onClick={()=> OnclickModal(item)} className='cursor-pointer'>
            <div key={item.name} className=''>
            <p className='text-[black] font-bold'>{item.name}</p>
            
           <p className='text-[black]'> {isModalOpened && (item.name === MovieSelected.name) &&( 
            <ModalComponent 
            className='flex'
            
            isOpen={isModalOpened} onClose={() => closeModal()}>
            {MovieSelected.description}
            </ModalComponent>)}</p>



            </div>
            

            </div>
        ))}





</section>

)
}