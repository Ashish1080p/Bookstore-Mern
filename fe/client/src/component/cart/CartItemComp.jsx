

import { Box, Button, styled } from '@mui/material'
import React from 'react'

import { useDispatch } from 'react-redux' 

// importing component 
import ButtonGroupComp from './ButtonGroupComp'
import { removeFromCart } from '../../redux/actions/cartAction'


const Images = styled('img')(({ theme }) => ({
  height: '11rem',
  width: '10rem',
  transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
}))

const Component = styled('div')(({ theme }) => ({
  margin: '0.5rem 0 0 0 ',
  borderTop: '0.5px solid #0f0f0f',
  display: 'flex',
  backgroundColor : '#fff' , padding : '0.5rem'
}))

const LeftComponent = styled('div')(({ theme }) => ({
  margin: '2rem'
}))

const SellerColor = styled('p')(({ theme }) => ({
  color: 'var(--font-grey)'
}))

const Title = styled('p')(({ theme }) => ({
  fontFamily : 'Roboto Condensed, sans-serif' ,
  fontSize : '1.2rem'
}))

const RemoveButton = styled(Button)(({theme})=> ({
  fontWeight : '700' ,
  color : '#000' ,
  backgroundColor : 'cyan'

}))


 
const AddEllipsis = (text)=> {
 if(text.length > 25) {
   return text.substring( 0 , 50) + '...' ;
 }else{
   return text
 } 

}

function CartItemComp({ item }) {

   const dispatch = useDispatch()

  const removeItem = (bookId)=> {
    console.log(item?.result?._id);
    dispatch(removeFromCart(bookId))
  }


  return (
    < Component >

      <LeftComponent>
        <Images src={item?.result?.imageLink} />
        <ButtonGroupComp />
      </LeftComponent>
 
      < Box style={{ lineHeight: '0.8rem', marginTop: '1.5rem' }}>
        <Title ><b>{item?.result?.title} </b></Title>

        <SellerColor> Seller : <b>Kindle  </b> </SellerColor>
        <p >
          <span style={{ fontSize: '1.7rem', fontWeight: '850' }}>
             ₹{item?.result?.price}   </span>
             
          <span style={{ color: 'var(--font-grey)', fontSize: '0.7rem', textDecoration: 'line-through' }} > 899 </span>  &nbsp;&nbsp;

          <span style={{ color: '#26a541', fontSize: '0.7rem', fontWeight: '750' }}>Special Offer  </span>
        </p>
        < RemoveButton varient={'contained'} onClick={()=> removeItem(item?.result?._id)}  > Remove </ RemoveButton>
      </Box>
    </ Component >
  )
}

export default CartItemComp
