import {configureStore} from "@reduxjs/toolkit"
import userReducer from "../Slices/UserSlice"
import fruits from "../Slices/FruitsSlice"
const Stores=configureStore({
    reducer:{
        UserInfo:userReducer,
        Fruitss: fruits
    }
})
console.log(Stores)
export default Stores;