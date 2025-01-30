const initialState={todos:[]}
const todosReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Add_Todo":
            return{
...state,todos:[...state.todos,action.payload]
        }
        case "REMOVE_TODO":
            return {...state,todos:state.todos.filter((todo,index)=>index!== action.payload)}
        default: 
        return state;
    }
}
export default todosReducer;