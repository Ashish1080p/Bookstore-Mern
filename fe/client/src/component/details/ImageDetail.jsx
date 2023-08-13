

import React, { useEffect, useState , useContext } from 'react'
import { Box, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartAction'

import { payment } from '../../services/paymentApi'

// import usecontext data 
import { DataContextVariable } from '../context/DataContext.jsx';
import LoginDialog from '../Login/LoginDialog'


const ImageTag = styled('img')(({ theme }) => ({
  height: '25rem',
  width: 'calc(100% - 2px)' ,

  [theme.breakpoints.down('md')]: {
    height: '15rem',
    justifyContent : 'space-between'  , 
    textAlign : 'center' , 
    alignItem : 'center'
  }

}))

const MainConatiner = styled(Box)(({ theme }) => ({
  padding: '2rem',
  [theme.breakpoints.down('md')]: {
    padding: '0.7rem'
  }

}))

const ButtonStyle = styled(Button)(({ theme }) => ({
  padding: '0.5rem 1.5rem ',
  fontSize : '0.7rem' ,
  backgroundColor: '#e94d1c',
  margin: '0.5rem 0 0 0',
  textAlign : 'center' ,
  width : 'calc(100% - 20px)' ,
  [theme.breakpoints.down('md')]: {
    padding: '0.5rem 0',
    margin: '0.5rem 0.2rem 0 0',
    fontSize : '0.4rem'
  }

}))




const ImageDetail = ({ bookData }) => {

  // using api
  const {showUserName  }  = useContext(DataContextVariable)


  const navigate = useNavigate();
  const dispatch = useDispatch();

  // initialising states
  const [ quantity , setQuantity ] = useState(1) ;
  const [ showLogin , setLogin ] = useState(false)
  
  const [openLoginDialog, setLoginDialog] = useState(true)
  
  
  
  const id = bookData?.result?._id
  const addItemToCart = ()=>{
    dispatch(addToCart(id , quantity))
   navigate('/cart')
  }

  

    const buyNow = async(result)=> {
      console.log('in');
    showUserName === '' ?  setLogin(true) :    await payment({ price : result?.price})
  }

  return (
    <>
       { showLogin ==  true && <LoginDialog open={openLoginDialog} setClose={setLoginDialog} />   }
      <MainConatiner>

        <ImageTag src={bookData?.result?.imageLink} alt="" />

        <Box style={{display : 'flex'  }} >
          <ButtonStyle variant='contained' style={{ backgroundColor : '#ff9f00' , marginRight : '0.3rem'}}
            onClick={()=> addItemToCart() } 
            >Add to Cart</ButtonStyle>
          <ButtonStyle variant='contained' onClick={()=> buyNow(bookData?.result)} >Buy Now</ButtonStyle>

        </Box>
        
      </MainConatiner>

    
    </>
  )
}

export default ImageDetail
