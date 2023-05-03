import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { removeFromcart } from "../../redux/reducers/cartReducer";

// components
import GroupedButton from "./GroupedButton";

// utils
import { addElipsis } from "../../utils/commonUtil";
import { useDispatch } from "react-redux";


// styling
const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display:flex;
    background-color: #fff;
`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const SmallText = styled(Typography)`
    color:#878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;




function CartItem({item}){
    const dispatch = useDispatch();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    function removeFrmCart(itm){
        // console.log(itm);
        dispatch(removeFromcart(itm));
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="item" style={{height:110, width:110}}/>
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin:10}}>
                <Typography>{addElipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: Retailerrr
                    <Box component='span'><img src={fassured} alt="flipkart" style={{width:50, marginLeft:10}}/></Box>
                </SmallText>
                <Typography style={{margin:'20px 0px'}}>
                    <Box component="span" style={{fontWeight:600, fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{color:'#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={()=>removeFrmCart(item)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItem;