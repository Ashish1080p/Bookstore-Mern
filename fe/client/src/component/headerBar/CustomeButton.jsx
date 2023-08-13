import React, { useState, useContext } from 'react';
import { Button, styled, Box, Typography ,Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

// components
import LoginDialog from '../Login/LoginDialog';
import Profile from './Profile'

// import usecontext data 
import { DataContextVariable } from '../context/DataContext.jsx';

const ButtonWrap = styled(Box)(({theme})=> ({
  color : 'black' ,
  marginLeft : '1.2rem',
  marginTop : '0.16rem',
  [theme.breakpoints.down('md')] : {

  }
}) )

const MainContainer = styled(Box)(({theme})=> ({
  display: 'flex' ,
   [theme.breakpoints.down('md')] : {
    display : 'none', 
    
   }
}) )

const TestWrap = styled(Typography)`
 color :  #717a84;
 margin-left : 2.5rem;
 padding : 0.5rem;

`
const CartWrap = styled(Link)`
color :  #717a84;
margin-left : 2.5rem;
padding : 0.5rem;
text-decoration : 'none'
`


const CustomeButton = () => {

  // staes
  const [openLoginDialog, setLoginDialog] = useState(false)

  // useContext 
  const {showUserName , setUserName  }  = useContext(DataContextVariable)

  // use selctor for feching data from redux
  const { cart} = useSelector( state => state.cartItem)

  // function for login dialog 
  const openDialog = () => {
    setLoginDialog(true)
  }

  return (
    <MainContainer style={{}}>
      <ButtonWrap>

        {

           showUserName ?  <Profile accountHolder={showUserName} setUserName={setUserName}   />
           : <Button variant="text" style={{ color: '#4d4d4e' }} onClick={() => openDialog()} >Login</Button>
        }
       
      </ButtonWrap>

      <TestWrap >Seller's Point</TestWrap>
      <TestWrap >Profile</TestWrap>

      <CartWrap style={{ display: 'flex' }} to={'/cart'} >

        <Badge badgeContent={cart?.length} color='warning' >
        <ShoppingCartIcon style={{ color: '#717a84' }} />
        </Badge>

        <Typography style={{ marginLeft : '0.7rem'}} >Cart</Typography>
      </CartWrap>

      {/* login dialog */}
      <LoginDialog open={openLoginDialog} setClose={setLoginDialog} />

    </MainContainer>
  )
}

export default CustomeButton
