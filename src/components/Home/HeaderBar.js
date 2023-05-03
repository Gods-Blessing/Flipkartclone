import React from "react"
// Components
import { navData } from "../../constants/Data";

import { Box, Typography, styled } from "@mui/material";

// ---------------------------------
// Styling here

const Component = styled(Box)(({theme})=>({
        display: 'flex',
        justifyContent: 'space-between',
        margin:'55px 130px 0px 130px',
        overflow:'hidden',
        [theme.breakpoints.down('md')]:{
            margin:0
        }
}))


const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
`;

// ---------------------------------
function HeaderBar(){
    return(
        <Box style={{background:'#fff'}}>

        <Component>
            {
                navData.map((data)=>(
                    <Container key={data.url}>
                        <img  src={data.url} alt="nav" style={{width: 64}}/>
                        <Text>{data.text}</Text>
                    </Container>
                ))
            }
        </Component>
        </Box>
    )
}

export default HeaderBar