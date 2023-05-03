import React, {useState} from "react";
import { Box, Typography, Menu, MenuItem , styled} from "@mui/material";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`



function Profile(props){

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        props.setAccount('');
    };

    return(
        <>
        <Box onClick={handleClick} style={{cursor:"pointer"}}>
            <Typography >{props.user}</Typography>
            <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
            >
            <MenuItem onClick={handleClose}>
                <PowerSettingsNewIcon color="primary" fontSize="small"/>
                <Logout> Logout</Logout> 
            </MenuItem>
      </Menu>

        </Box>
    
        </>
    )
}

export default Profile;