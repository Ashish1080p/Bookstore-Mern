import { Box, Typography, styled, Button, Divider } from '@mui/material';


import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import '../../index.css'

// importing react countdown 
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

// for carousel responsiveness
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


// deal for data typograpgy styling
const Components = styled(Box)( ({theme}) => ({
    marginTop : '0.4rem',
    padding : '0.8rem',
    border : '1.5px solid #ddd' ,
    boxShadow:' 0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
    color : 'var(--font-grey)',
    [theme.breakpoints.down('md')] : {
        width : 'auto',
        height : '18.5rem'
    }
}))

const Dealtext = styled(Typography)(({theme})=> ({
    fontSize : '2rem' ,
    fontWeight : 600,
    color : 'black' ,
    [theme.breakpoints.down('md')] :{
      fontSize : '0.6rem'
    }
}))


const ViewAllButton = styled(Button) (({theme})=>({
    marginLeft : 'auto',
    fontWeight : 550,
    [theme.breakpoints.down('md')] : {
        fontWeight : 350,
        fontSize : '0.37rem' ,
        width : '3rem' ,
    }
}))

const ImageTag = styled('img')(({theme})=>({
    width: '10.5rem',
    height: '14rem',
    padding: '1.5rem',
    margin: '0.3rem 1.5rem 0 1.5rem',
    border: '1.5px solid #ddd',
    boxShadow : '0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)',
    color : 'var(--font-grey)',
    [theme.breakpoints.down('md')]: {
        width: '8rem',
        height: '12rem',
        padding: '0',
        margin: '0.1rem 0.5rem 0rem 0.5rem',
    }
}))

const CountdownStyle = styled(Box)( ({theme})=> ({
    [theme.breakpoints.down('md')] : {
        fontSize : '0.6rem'
    }
}))

const ClockImage = styled('img')( ({theme})=>({
    [theme.breakpoints.down('md')] : {
        height : '0.6rem' ,
        width :'0.7rem' ,
    }
}))


const BookSlide = ({ books , title , timer }) => {

    // const bookArray = [books.data]
    const clockImgUrl = 'https://png.pngtree.com/png-vector/20210407/ourmid/pngtree-table-clock-icon-png-image_3137093.png'


    // render function for showing time correctly
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span' > {hours} : {minutes} : {seconds} Left </Box>
    }




    return (!books) ? <p>Loading...</p> : (
        <Components>

            <Box style={{ display: 'flex', padding: '0.3rem', }} >

                <Dealtext> {title} </Dealtext>

                {
                    timer && <CountdownStyle style={{ display: 'flex', margin: '0.23rem 0 0 0.2rem' }} >

                    <ClockImage src={clockImgUrl} alt="clock" height='20rem' width='16rem' />
                    <Countdown  date={Date.now() + 5.04e+7} renderer={renderer} />

                   </CountdownStyle> 
                }

                <ViewAllButton variant='contained' >View All </ViewAllButton>

            </Box >
            <Divider />
            <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
          
                
                centerMode={true}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {

                    books && books.data.map(item => (
                        <div key={item._id} style={{ textAlign: 'center' ,  }} >
                          
                          <Link to={`/detail/${item._id}`} style={{ textDecoration : 'none' ,  color : 'black'}} >

                                <ImageTag src={item.imageLink} alt="image" />
                             <p><b > {item.title}</b> </p>   
                            </Link >
                        </div>
                    ))

                }

            </Carousel>
        </Components>
    )




}

export default BookSlide
