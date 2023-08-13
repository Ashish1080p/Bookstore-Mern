

import { Box, Typography, styled , Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { payment } from '../../services/paymentApi'

const MainContainer = styled('div')(({ theme }) => ({
  backgroundColor: 'black',

  marginLeft: '10px',
  [theme.breakpoints.down('md')]: {
    marginTop: '0.5rem',
    marginLeft: '0',
    padding: '0'
  }
}))

const Header = styled(Box)(({ theme }) => ({
  color: 'var(--font-grey)',
  padding: '1rem',
  borderBottom: '1px solid grey'
}))

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: 'black',
  padding: '1rem',

}))

const Text = styled(Typography)(({ theme }) => ({
  fontSize: '1rem',
  marginBottom: '0.5rem',
  color: 'var(--font-grey)'
}))


const Price = styled(Box)(({ theme }) => ({
  float: 'right'
}))

const TotalBoxStyle = styled(Typography)(({ theme }) => ({
  padding: '0.5rem',
  marginBottom: '0.5rem',
  color: 'var(--font-grey)',
  fontWeight: '700',
  fontSize: '1.4rem',
  borderBottom: '1px dotted grey',
  borderTop: '1px dotted grey'
}))

const Discount = styled(Typography)(({ theme }) => ({
  color: 'blue',
  fontWeight: '550'
}))

const ButtonStyle = styled(Button)(({theme})=> ({
  color : 'black' ,
   display : 'flex' ,
   marginLeft : 'auto' ,
   backgroundColor : 'cyan' ,
   width  : '10rem' ,
   height : '2rem' , 
   [theme.breakpoints.down('md')] : {
      width  : '8rem' ,
      height : '2rem' , 
   }, 
  
}))


const ButtonWrapper = styled(Box)(({theme})=>({
  borderTop  : '1px solid #f0f0f0' ,
 boxShadow: '0px -2px 10px 0px rgba(0 0 0 / 10%)' ,
 color : 'black' ,
 padding : '1rem'
}))



const CartTotalPrice = ({ cart }) => {

  const [bookPrice, setBookPrice] = useState(0);

  useEffect(() => {
    totalPrice()
  }, [cart])

  const totalPrice = () => {
    let price = 0;
    cart.map((item) => {
      price += item?.result?.price
    })
    setBookPrice(price)
  }


  const buyNow = async(bookPrice)=> {
    const resp =  await payment({ price : bookPrice})
  }

  return (
    <MainContainer>
      <Header>
        <Typography>PRICE DETAILS</Typography>
      </Header>

      <Container>
        <Text>
          Price : ({cart.length}) item
          <Price component='span' > ₹ {bookPrice}</Price>
        </Text>
        <Text>
          Discount :
          <Price component='span' > ₹ 00</Price>
        </Text>
        <Text>
          Delivery Charges:
          <Price component='span' style={{ color: 'red', fontWeight: '550' }}  > Free </Price>
        </Text>
        <TotalBoxStyle >
          Total :
          <Price component='span' > ₹ {bookPrice} </Price>
        </TotalBoxStyle>
        <Discount>you will save 49₹ on this order of delivery charges</Discount>
      </Container>


      <ButtonWrapper>
        <ButtonStyle  onClick={()=> buyNow(bookPrice)} > Place Order</ButtonStyle>
      </ButtonWrapper>

    </MainContainer>
  )
}

export default CartTotalPrice
