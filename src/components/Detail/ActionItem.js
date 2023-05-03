import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BoltIcon from '@mui/icons-material/Bolt';
import { useDispatch, useSelector } from "react-redux";
import { addTocart, removeFromcart } from "../../redux/reducers/cartReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LeftContainer = styled(Box)(({theme})=>({
    minWidth:'40%',
    padding:'40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
})); 


const Image = styled('img')({
    padding:15
});

const StyledButton = styled(Button)(({theme})=>({
    width: '48%',
    height: 50,
    borderRadius: 2,
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}));

function ActionItem({product}){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [qty, setQty] = useState(1);

    function HandleaddingtoCart(){
        dispatch(addTocart({qty,...product}));
        navigate('/cart');
    }

    return(
        <LeftContainer>
            <Box style={{padding:'15px 20px',width:'90%',border: '1px solid #f0f0f0',}}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' style={{marginRight:10, backgroundColor:'#ff9f00'}} onClick={HandleaddingtoCart}>
                <ShoppingCartIcon/>    Add to cart
            </StyledButton>
            <StyledButton variant='contained' style={{backgroundColor:'#fb541b'}}>
                <BoltIcon/>    Buy Now
            </StyledButton>
        </LeftContainer>
    )
}


export default ActionItem;