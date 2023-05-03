import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios';
const URL = "https://flipkart-server-yfmn.onrender.com";

export const fetchProducts = createAsyncThunk('getProducts', async () => {
    try{
        let response = await axios.get(`${URL}/getproduct`);
        // console.log(response.data.data);
            return response.data.data
    }catch(error){
       console.log("error:", error)
    }
  })

  


const productSlice = createSlice({
    name:'products',
    initialState:[],
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            // console.log("here: ", action.payload);
          return action.payload
        })
        .addCase(fetchProducts.rejected, (state, action)=>{
            return [];
        })
    }
});




export default productSlice;
// export const {getProducts} = productSlice.actions;


