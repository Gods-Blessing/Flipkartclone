import { Grid, styled } from "@mui/material";
import { imageURL } from "../../constants/Data";

const Wrapper = styled(Grid)`
    margin-top: 10px;
`;

const Image = styled('img')(({theme})=>({
    marginTop:10,
    width:'100%',
    [theme.breakpoints.down('md')]:{
        objectFit:'cover',
        height:120
    }
}));

function Midsection(){

    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
        <>
            <Wrapper container lg={12} sm={12}>
                {
                    imageURL.map((data)=>(
                        <Grid key={data} item lg={4} md={4} sm={12}>
                            <img src={data} alt='adimage' style={{width:'100%'}}/>
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} alt="covid" />
        </>
    )
}

export default Midsection;