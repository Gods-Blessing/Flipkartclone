import React, {useEffect} from "react";

import { Box, styled } from "@mui/material";
import { fetchProducts, getProducts } from "../../redux/reducers/reducer";
import { useDispatch, useSelector } from "react-redux";
import productSlice from "../../redux/reducers/reducer";

// Component imports
import HeaderBar from "./HeaderBar";
import Banner from "./Banner";
import Slide from "./Slide";
import Midslide from "./Midslide";
import Midsection from "./Midsection";


const Component = styled(Box)`
    padding: 10px;
    background-color: #f2f2f2;
`;


function Home(){
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
// console.log(products);

    useEffect(()=>{
        document.title = "FlipKart";
    }, [])

    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    return(
        <>
            <HeaderBar/>

            <Component>
                <Banner/>
                <Midslide products={products} title="Deal of the Day" timer={true}/>
                <Midsection/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggested Items" timer={false}/>
                <Slide products={products} title="Top Selections" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Seasons top Pick" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>

            </Component>
        </>
    )
}


export default Home;