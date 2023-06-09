import React, {useEffect} from "react";

import {Box, styled, Grid} from "@mui/material"

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getProductDetail } from "../../redux/reducers/detailreducer";

// components
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";


const Component = styled(Box)`
    background: #F2F2F2;
`;

const Container = styled(Grid)(({theme})=>({
    background:'#FFFFFF',
    marginRight: 20,
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }
})) ;


const RightContainer = styled(Grid)`
    margin-top: 50px;
    padding-left: 15px;
`;


function DetailView(){
    const dispatch = useDispatch();
    const product = useSelector(state => state.detail);
    // console.log(product);
    const {id} = useParams();
    useEffect(()=>{
        document.title = "FlipKart | Detail";
    }, [])

    useEffect(()=>{
        dispatch(getProductDetail(id));
    },[dispatch, id])

    return(
        <Component>
            {   product && Object.keys(product).length &&
                <Container container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>

                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        
                        
                        <ProductDetail product={product}></ProductDetail>
                    </RightContainer>
                </Container>
            
            }

        </Component>
    )
}


export default DetailView;