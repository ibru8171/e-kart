import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:"wishlist",
    initialState:[],
    reducers:{
        // actions
        // functio logic to add item into wishlist
        addToWishlist:(state,action)=>{
            console.log("=======");
            console.log(state);
            console.log(action.payload)
            state.push(action.payload);
            console.log(state)
        },
        removeFromWishlist:(state, action)=>state.filter(item =>item.id!=action.payload)
    }
})
export const {addToWishlist,removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;