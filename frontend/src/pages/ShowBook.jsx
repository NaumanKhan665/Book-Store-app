import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Spinner from '../components/spinner'
import BackButton from '../components/BackButton'

const ShowBook = () => {
  const [book, setoBook] = useState([])
  const [loading, setLoading] = useState([])
  const { id } = useParams()


  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5000/books/${id} `)
      .then((response) => {

        setoBook(response.data)
        setLoading(false)

      })
      .catch((error) => {

        console.error(error)

      })
  }, [])













  return (
    <div className='p-4'>
      <h1 className='text-3xl my-4'> Show Book</h1>
      <BackButton/>

      {loading ? (
        <Spinner />
      )
        : (
          <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>

            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>id</span>

              <span>{book._id}</span>
            </div>
            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>Title</span>

              <span>{book.title}</span>
            </div>
            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>Author</span>

              <span>{book.author}</span>
            </div>
            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>Publish Year</span>

              <span>{book.publishyear}</span>
            </div>
            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>Created At</span>

              <span>{new Date(book.createdAt).toString()}</span>
            </div>

            <div className='my-4'>

              <span className='text-xl mr-4 text-grey-400'>Update At</span>

              <span>{new Date(book.createdAt).toString()}</span>
            </div>
          </div>
        )
      }





    </div>
  )
}

export default ShowBook