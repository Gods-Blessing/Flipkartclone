import { useEffect } from "react";

import {useSelector} from "react-redux";
import {Box, Grid, Typography, styled, Button} from "@mui/material";

// component
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";


// styling
const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('sm')]:{
        padding:'15px 0px',
    }

}))


const Header = styled(Box)`
    padding: 15px 24px;
    background-color: #fff;
`;

const ButtonWrapper = styled(Box)`
    padding: 16px 22px;
    background-color: #fff;
    border-top: 1px solid #f0f0f0;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0/ 10%);
`;

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background-color: #fb641b;
    font-weight: 600;
    color: #fff;
    border-radius: 2px;
    width: 250px;
    height: 51px;
`;

const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight: 15,
    [theme.breakpoints.down('md')]:{
        marginBottom:15,
        paddingRight: 0,
    }
    
}));

function Cart(){
    const cartItems = useSelector(state=>state.cart)
    // console.log(cartItems);
    useEffect(()=>{
        document.title = "FlipKart | Cart";
    }, [])

    return(
        <>
            {
                cartItems.length > 0 ?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header>
                            <Typography>My Cart ({cartItems.length})</Typography>
                        </Header>
                        {
                            cartItems.map(item =>(
                                <CartItem key={item.id} item={item}/>
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton>Place Order</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView items={cartItems}/>
                    </Grid>

                </Container>
                :
                <EmptyCart/>
            
            
            }
        </>
    )
}

export default Cart;