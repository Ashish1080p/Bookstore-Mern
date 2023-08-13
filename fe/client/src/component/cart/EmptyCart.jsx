
import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Maincontainer = styled(Box)(({theme})=> ({
    backgroundColor : '#fff' ,
    margin : '3rem 5rem 5rem 5rem' ,
    padding  : '2rem' ,
    [theme.breakpoints.down('md')] : {
        margin : '0.2rem' ,
        padding  : '0.5rem' ,
       
    }
}))

const ImageConatiner = styled(Box)(({theme})=> ({
    textAlign : 'center'
}))  

const MyCart  =styled(Typography)(({theme})=> ({
    fontFamily : 'Roboto Condensed, sans-serif' ,
    fontWeight : '750' , 
    fontSize : '1.3rem' ,
     borderBottom : '1px solid grey' ,
    padding : '1rem'
 }))
 


const EmptyCart = () => {
    
    const emptycartImg = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90'

  return (

      <Maincontainer>
        <Box>
            <MyCart>My Cart</MyCart>
        </Box>

        <ImageConatiner>
            <img src={emptycartImg}  alt="img" style={{ height : '17rem' , width : '17rem' , marginTop : '1rem'}}  />
            <Typography variant={'h5'} style={{fontWeight : '550'}} >Nothings Here</Typography>
            <Typography>Explore our wide selection and find something you like</Typography>
        </ImageConatiner>
      </Maincontainer>

  )
}

export default EmptyCart
