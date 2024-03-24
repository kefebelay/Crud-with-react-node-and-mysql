import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, redirect } from 'react-router-dom';

export default function Books() {
    const [book, setBook] = useState([]);

    useEffect(()=>{
        async function getBook(){
            try{
               const res = await axios.get('/books');
               setBook(res.data)
               console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }
        getBook();
    },[])

    async function handleDelete(id){
        try{
            await axios.delete('/books/'+ id)
            window.location.reload();
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div>
        <h1 className=" text-3xl text-center mt-10">Book shop</h1>
        <div className=" text-center mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {book.map((b)=>{
        return <div className=" m-5 bg-gray-400 w-fit"  key={b.id}>
                    <div className=" h-60 w-60 bg-slate-700">{b.cover && <img src={b.cover} alt="bookImage"/> }</div>
                        <h2 className="p-3 ">{b.title}</h2>
                        <p className='p-3'>{b.desc}</p>
                        <p className=' text-blue-600'>{b.price} Birr</p>

                         <div className='m-3'>
                            <button className='mr-6 bg-green-500 h-9 w-20 rounded-md hover:bg-green-600 active:bg-green-700' ><Link to={`/update/${b.id}`}>Update</Link></button>
                            <button className='bg-red-500 h-9 w-20 rounded-md hover:bg-red-600 active:bg-red-700' onClick={()=>handleDelete(b.id)}>Delete</button>
                        </div>

        </div>
      })}      
        </div>
        <div className='text-center m-5'>
        <button className='bg-blue-400 h-9 w-36 rounded-md hover:bg-blue-500 active:bg-blue-600 '>
        <Link to={'/Add'}>Add New Book</Link></button></div>
    </div>
  )
}
