import React,{useState} from 'react'
import Spinner from '../components/spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'

import { useSnackbar } from 'notistack'




const DeleteBook = () => {
  const[loading,setLoading]=useState('')
  const navigate=useNavigate()
  const{enqueueSnackbar}=useSnackbar();
  const {id}=useParams()

  const handleDeleteBook=()=>{
 setLoading(true)
 axios
     .delete(`http://localhost:5000/books/${id}`)
     .then(()=>{
       setLoading(false);
       enqueueSnackbar('Book Deleted Successfully')
       navigate('/');

     })
     .catch((error)=>{
      setLoading(false)
     
      enqueueSnackbar('Error',{variant:'error'});
      console.log(error)


     })



  }

  return (



    <div className='p-4'>

    <h1 className='text-3xl my-4'>Delete Book</h1>
    <BackButton/>
    {loading?<Spinner/>:''}
    <div className=' flex flex-col items-center border-2 border-sky-400 rounded-xl w--[600px] p-8 mx-auto'>
     <h3 className='text-2xl'> Are your sure You want to delete this</h3>

     <button className='p-4 bg-red-400 text-white m-8 w-full' onClick={handleDeleteBook}>
      Yes,Delete it
      
     </button>

    </div>


    </div>
  )
}

export default DeleteBook