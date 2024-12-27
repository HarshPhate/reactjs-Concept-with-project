import { configureStore } from '@reduxjs/toolkit'
import todoreducer from '../feature/todoSlice'

const store = configureStore({
  reducer: todoreducer
})

export default store