import { ButtonGroup, Button, styled } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;

function GroupedButton(){
    return(
        <Component>
            <StyledButton>-</StyledButton>
            <Button disabled>1</Button>
            <StyledButton>+</StyledButton>
        </Component>

    )
}

export default GroupedButton;