import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

import axios from 'axios';
const URL = "https://flipkart-server-yfmn.onrender.com";

export const getProductDetail = createAsyncThunk('getProductDetails', async (id) => {
    try{
        let response = await axios.get(`${URL}/detail/${id}`);
        // console.log(response.data.message);
            return response.data.message
    }catch(error){
       console.log("error:", error)
    }
  })


const DetailSlice = createSlice({
    name:'productdetail',
    initialState:{},
    reducers:{
        
    },
    extraReducers(builder) {
        builder.addCase(getProductDetail.fulfilled, (state, action) => {
            // console.log("here: ", action.payload);
          return action.payload
        })
        .addCase(getProductDetail.rejected, (state, action)=>{
            return {};
        })
        
    }
  });

  export default DetailSlice;