import { Box , styled} from "@mui/material";
import Slide from "./Slide";


const Component = styled(Box)`
    display: flex;
    align-items: center;
`;

const LeftComponent = styled(Box)(({theme})=>({
        width: '82.5%',
        [theme.breakpoints.down('lg')]:{
            width:'100%'
        }

}))


const RightComponent = styled(Box)(({theme})=>({
        backgroundColor: '#FFFFFF',
        padding: '16px 5px',
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 5,
        [theme.breakpoints.down('lg')]:{
            display:'none'
        }
}));

function Midslide(props){
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return(
        <Component>
            <LeftComponent>
                <Slide products={props.products} title={props.title} timer={props.timer}/>
            </LeftComponent>

            <RightComponent>
                <img src={adURL} alt="ad" style={{width:217}}/>
            </RightComponent>
        </Component>
    )
}

export default Midslide;