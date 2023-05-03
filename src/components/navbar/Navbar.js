import React, { useState } from "react";
import {AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer, List, ListItem} from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";
import {Link} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

const StyledNavbar = styled(AppBar)`
    background-color: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const Subheading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
    color: white;
`;

const PlusSign = styled("img")({
    width: 10,
    height: 10,
    marginLeft: 4,
})

const CustomButtonWrapper = styled(Box)(({theme})=>({
    margin:'0 0 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}));

const MenuButton = styled(MenuIcon)(({theme})=>({
    display:'none',
    color:'inherit',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))




function Navbar(){

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const [open, setOpen] = useState(false);

    function handleOpen(){
        setOpen(true);
    }

    function handleClose(){
        setOpen(false);
    }

    const Lisst = ()=>{
        <Box style={{width:100}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    }

    return(
        <>

        <StyledNavbar>
            <Toolbar style={{minHeight: 55}}>
                <MenuButton onClick={handleOpen}>
                    <MenuIcon color='white'/>
                </MenuButton>

                <Drawer open={open} onClose={handleClose}>
                    {Lisst()}
                </Drawer>

                <Component>
                    <Link to="/" style={{textDecoration:'none'}}>
                        <img src={logoURL} alt="logo" style={{width:75}}/>
                        <Box style={{display:'flex'}}>
                            <Subheading>
                                Explore &nbsp;
                                <Box component="span" style={{color: "#FFE500"}}> Plus </Box>
                            </Subheading>
                            <PlusSign src={subURL} alt="sublogo"></PlusSign>
                        </Box>
                    </Link>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons/>
                </CustomButtonWrapper>
            </Toolbar>
        </StyledNavbar>
        
        </>
    )
}

export default Navbar;