import { createContext, useContext } from "react";

export const Todocontext =createContext({
    todos:[],
    addTodo :(todo)=>{},
    deleteTodo:(id)=>{},
    updatetodo:(id,todo)=>{}
    togglecompleted:(id)=>{}

}

)

export const useTodo =()=>{
    return useContext(Todocontext)
}

export const TodoProvider = Todocontext.Provider