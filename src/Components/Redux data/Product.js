import { createSlice } from "@reduxjs/toolkit";

 const initialState={
    showModal:false,
    Products:[],
    Category:[],

}
const Productlist=createSlice(
    {
        initialState,
        name:"products",
        reducers:{
            setProduct:(state,action)=>{
              //  console.log(state,action)
                state.Products=[...state.Products,...action.payload]
            },
            setCategory:(state,action)=>
            {
                state.Category=action.payload;
            },
            setShowmodal:(state,action)=>
            {
                state.showModal=action.payload
            }
        }
    }
)
export const {setProduct,setCategory,setShowmodal}=Productlist.actions
export default Productlist