import {configureStore} from "@reduxjs/toolkit";
import productSlice from "./reducers/reducer";
import DetailSlice from "./reducers/detailreducer";
import CartSlice from "./reducers/cartReducer";


// const allReducers = combineReducers({
//         product:productSlice.reducer,
//         detail:DetailSlice.reducer
// })

const store = configureStore({
    reducer:{
        product:productSlice.reducer,
        detail:DetailSlice.reducer,
        cart:CartSlice.reducer
    }
})

export default store;