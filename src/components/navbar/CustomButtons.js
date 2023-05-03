import React, { useContext, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button, Box, Typography, styled, Badge} from "@mui/material";

import { UserContext } from "../../context/dataProvider";
import {Link} from "react-router-dom";

// components
import LoginDialog from "../Login/LoginDialog";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)(({theme})=>({
    display:'flex',
    alignItems:'center',
    margin:'0 3% 0 auto',
    '&>div, &>p, & > button':{
        marginRight:40
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }

}));

const Container = styled(Link)(({theme})=>({
    display:'flex',
    textDecoration:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))

const LoginButton = styled(Button)`
    background-color: white;
    color: #2874f0;
    text-transform: none;
    padding: 0px 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
`

function CustomButtons(){
    const cart = useSelector(state => state.cart);

    const {account, setAccount} = useContext(UserContext);

    const [open, setOpen] = useState(false);

    function HandleOpen(){
        // console.log("its opening");
        setOpen(()=> true);
    }



    return(
        <Wrapper>

            {
                account ? <Profile user={account} setAccount={setAccount}/>:
                    <LoginButton variant="contained" onClick={HandleOpen}>
                        Login
                    </LoginButton>

            }


            <Typography>Become a Seller</Typography>

            <Typography>More</Typography>

            <Container to='/cart' >
                <Badge badgeContent={cart?.length} color="secondary">
                    <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft:10}}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
}

export default CustomButtons;