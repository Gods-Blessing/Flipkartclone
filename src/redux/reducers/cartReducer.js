import {createSlice} from "@reduxjs/toolkit";


const CartSlice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addTocart(state,payload){
            // console.log(payload.payload)
            // console.log(state);
            const exist = state.find(product => product.id === payload.payload.id);

            if(exist){
                return state;
            }else{
                // state.push({qty:1,...payload.payload});
                return [...state, {...payload.payload}];
            }
        },
        removeFromcart(state, payload){
            // console.log(payload.payload);
            return state.filter(product => product.id !== payload.payload.id);
        }
    }
})

export const {addTocart, removeFromcart} = CartSlice.actions;
export default CartSlice;