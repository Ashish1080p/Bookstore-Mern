import React from "react"

import { Box , styled } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// importing constant data
import { carausalImg } from '../../constant/data.js'

const Image = styled('img')( ({theme})=>({
    width : "100%" ,
    [theme.breakpoints.down('md')] : {
      height : '13rem' 
    }
}))


const responsive = {

    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const CarausalBar = () => {
    return (
        <Carousel responsive={responsive}
        swipeable={false}
        draggable={false}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
         >
           {
            carausalImg.map((data)=>
                <Image src={data.url} alt="image" key={data.id}  />
            )
           }
        </Carousel>

    )
}
export default CarausalBar