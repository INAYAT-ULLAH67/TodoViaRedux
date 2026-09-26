import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[{id:1,text:"HelloWorld"}]

}

export const todoSlice = createSlice({
    // this name will be shown in redux extension on chrome!
    name:"todo",
    initialState,
    reducers:{
        // it has property and funtion
        // state has access all the values which todo has 
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload.text

            }
            state.todos.push(todo)


        },
        // when we get values so we would take that value using that we would take an action
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },

        updateTodo: (state, action) => {
            // extract id and text from an action payload 
            const { id, text } = action.payload;

            const todo = state.todos.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})
// this we would use in componets later on !
export const {addTodo,removeTodo,updateTodo}= todoSlice.actions

// this is used to register it in store configuration
export default todoSlice.reducer