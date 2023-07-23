import { createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct: (state, action)=>{
            state.products.push(action.payload);
            state.quantity += 1;// here its car quantity
            state.total += action.payload.price * action.payload.quantity;// this is price * product quantity
        },
    },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer; 