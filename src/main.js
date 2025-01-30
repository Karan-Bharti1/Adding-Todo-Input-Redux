
import './style.css'
import { createStore } from 'redux'
import todosReducer from './todosReducer'
const todoInput=document.getElementById("todoInput")
const todoList=document.getElementById("todoList")
const addTodo=document.getElementById("addTodo")
const store=createStore(todosReducer)
store.subscribe(()=>{
    updateTodoList()
})
const addTodoHandler=()=>{
    const todoValue=todoInput.value
    if(todoValue){
        store.dispatch({type:"Add_Todo",payload:todoValue})
    }
}
addTodo.addEventListener("click",addTodoHandler)
const updateTodoList=()=>{
    const state=store.getState()
    todoList.innerHTML=state.todos.map(todo=>{
    return `<li> ${todo} </li>`
}).join("")
}
updateTodoList()