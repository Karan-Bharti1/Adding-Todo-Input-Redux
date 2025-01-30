const initialState={todos:[]}
const todosReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Add_Todo":
            return{
...state,todos:[...state.todos,action.payload]
        }
        default: 
        return state;
    }
}
export default todosReducer;