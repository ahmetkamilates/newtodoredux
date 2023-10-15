import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions/todoActions'
import axios from 'axios'


const TodoCard = ({todo}) => {
    const dispatch = useDispatch()

    const handleEdit = () => {
       const updated = {...todo,is_done: !todo.is_done}
      axios.put( `/todos/${todo.id}`,updated).then(() => {
         dispatch(updateTodo(updated))
      })
     
     
    }

    const handleDelete = () => {
      axios.delete(`/todos/${todo.id}`).then(() => {
        dispatch(deleteTodo(todo.id))
      })
        
    }

  return (
    <div className='border shadow shadow-lg p-4 my-5'>
        <h4>{todo.text}</h4>
        
        <h6>{todo.is_done ? "Tamamdır" : "Devam eder"}</h6>
        <p>{new Date(todo.created_date).toLocaleDateString()}</p>
        
        <button onClick={handleEdit} className='btn btn-success'>{todo.is_done ? "Geri al" : "Tamamla"}</button>
        <button onClick={handleDelete} className='btn btn-danger mx-4'>Sil</button>
    </div>
  )
}

export default TodoCard