import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home/Home";
import UserProvider from "./context/dataProvider.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import DetailView from "./components/Detail/DetailView";
import Cart from "./components/cart/Cart";

import {Box} from "@mui/material"

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Box style={{marginTop: 54}}>
            <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/detail/:id" element={<DetailView/>} />
              <Route path="/cart" element={<Cart/>} />
              </Routes>
            </Box>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
