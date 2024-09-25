import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Fruits:[]
}
const FruitsSlice= createSlice({
    name:"Fruits",
    initialState,
    reducers:{
      setFruits:(state,actions)=>{
        state.Fruits=[...state.Fruits,actions.payload]
      }
    }
})


export const {setFruits} = FruitsSlice.actions;

export default FruitsSlice.reducer