import React from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';

import { Link } from "react-router-dom";


import { Box, Typography, styled, Button, Divider } from "@mui/material";


const Component = styled(Box)`
    margin-top: 10px;
    background-color: #FFFFFF;
`;

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;
    align-items: center;
`;

const Timer = styled(Box)`
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const DealText = styled(Typography)`
    font-size: 22px;
    font-weight: 600;
    margin-right: 25px;
`;

const ViewAll = styled(Button)`
    margin-left: auto;
    background-color: #2874f0;
    border-radius: 2px;
    font-size: 13px;
    font-weight: 600;
`;

const Image = styled('img')({
    width:'auto',
    height:150
});

const Text = styled(Typography)`
    font-size: 14px;
    margin-top:5px
`;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  
  function Slide(props){
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds, completed }) => {
          // Render a countdown
          return <Box variant="span">{hours}:{minutes}:{seconds} Left</Box>;
      };


    return(

        <Component>
            <Deal>
                <DealText>{props.title}</DealText>
                {
                    props.timer && 
                            <Timer>
                                <img src={timerURL} alt="timer" style={{width:24}}/>
                                <Countdown date={Date.now()+ 5.04e+7} renderer={renderer}/>
                            </Timer>
                }
                
                <ViewAll variant="contained">View All</ViewAll>
            </Deal>
            <Divider/>
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                centerMode={true}
                >
                    {props.products.map((product)=>(
                        <Link to={`/detail/${product.id}`} style={{textDecoration:'none'}}>
                            <Box key={product.id} textAlign="center" style={{padding:'25px 15px'}}>
                                <Image src={product.url} alt="product"/>
                                <Text style={{fontWeight:600, color:'#212121'}}>{product.title.shortTitle}</Text>
                                <Text style={{color:'green'}}>{product.discount}</Text>
                                <Text style={{color:'#212121', opacity:'0.6'}}>{product.tagline}</Text>
                            </Box>
                        </Link>
                    ))}
            </Carousel>

        </Component>
        
    )
}

export default Slide;