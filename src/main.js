
import './style.css'
import { createStore } from 'redux'
import todosReducer from './todosReducer'
import { addTodo, removeTodo } from '../actions'
const todoInput=document.getElementById("todoInput")
const todoList=document.getElementById("todoList")
const addTodos=document.getElementById("addTodo")
const store=createStore(todosReducer)
store.subscribe(()=>{
    updateTodoList()
})
const addTodoHandler=()=>{
    const todoValue=todoInput.value
    if(todoValue){
        store.dispatch(addTodo(todoValue))
    }
}
window.removeTodoHandler=(index)=>{
    store.dispatch(removeTodo(index))
}
addTodos.addEventListener("click",addTodoHandler)
const updateTodoList=()=>{
    const state=store.getState()
    todoList.innerHTML=state.todos.map((todo,index)=>{
    return `<li> ${todo} <button class="btn btn-danger" onClick="removeTodoHandler(${index})">Delete </button></li>`
}).join("")
}
updateTodoList()