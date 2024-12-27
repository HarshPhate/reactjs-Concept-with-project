import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../feature/todoslice'

const Todo = () => {
   const todos = useSelector(state => {
    return state.todos
   }) // Adjust based on your state structure
   const dispatch = useDispatch(); // Call the hook correctly

   return (
     <div>
       <h3>Todos</h3>
       <ul>
         {todos.map((todo) => (
           <li key={todo.id}>
             {todo.text}
             <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
           </li>
         ))}
       </ul>
     </div>
   )
}

export default Todo
