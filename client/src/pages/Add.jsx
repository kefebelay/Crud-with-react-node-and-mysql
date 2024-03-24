import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Add() {
    const [info, setInfo] = useState({
        title:'',
        desc:'',
        price:null,
        cover:"",
    });

    const navigate = useNavigate();

    function change(event){
        const {name, value} = event.target;
        setInfo((prev)=>{
            return{...prev, [name]:value}
        })
    }

    async function applyInfo(){
        try{
            await axios.post('/books', info); 
            navigate('/Books')           
        }
        catch(err){
            console.log(err)
        }


    }


  return (
    <div>
      <h1 className='text-3xl text-center mt-10'>Add New Book</h1>
      <div className='flex flex-col m-9 gap-5 border'>
      <input onChange={change} type='text' placeholder='Title' name='title'/>
      <input onChange={change} type='text' placeholder='Description' name='desc' />
      <input onChange={change} type='number' placeholder='Price' name='price'/>
      <input onChange={change} type='text' placeholder='Cover' name='cover' />
      <button onClick={applyInfo} className='bg-blue-400 h-9 w-36 rounded-md hover:bg-blue-500 active:bg-blue-600' >Add</button>
    </div>
    </div>
  )
}
