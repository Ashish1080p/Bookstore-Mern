import React , { useContext , useState} from 'react'
import { useSelector } from 'react-redux'
import { Box, Grid, Typography , Button } from '@mui/material'


// importing component
import CartItemComp from './CartItemComp' 
import CartTotalPrice from './CartTotalPrice'
import {styled }from '@mui/material'
import EmptyCart from './EmptyCart'


// import usecontext data 
import { DataContextVariable } from '../context/DataContext.jsx';
import LoginDialog from '../Login/LoginDialog'

// styling
const GridConatiner = styled(Grid)(({theme})=> ({
   padding : '3rem 10rem' , 

   [theme.breakpoints.down('md')] : {
      padding : '1rem 0.5rem'
   }
}))

const MyCart  =styled(Typography)(({theme})=> ({
   fontFamily : 'Roboto Condensed, sans-serif' ,
   fontWeight : '750' , 
   fontSize : '1.3rem' ,

   padding : '1rem'
}))


const Cart = () => {
   const { cart } = useSelector(state => state.cartItem);
  
     // staes
  const [openLoginDialog, setLoginDialog] = useState(false)

    // useContext 
  const {showUserName , setUserName  }  = useContext(DataContextVariable)
  
   return (
      <>

      
         <div style={{ marginTop: '5rem' , backgroundColor : '#f9f9f9' }}>
            {
              showUserName === '' ?  <LoginDialog open={true} setClose={setLoginDialog} /> :  cart.length !== 0 ? 
              
              <GridConatiner container >
                 <Grid item lg={8} md={9} sm={12} xs={12} style={{  backgroundColor : '#fff', }} >

                    <Box >
                      {}
                       <MyCart> My Cart ({cart.length})  </MyCart>
                    </Box>
                    {
                 
                       cart.map((item , i)=> (
                          <CartItemComp key={i}  item={item} />
                       ))
                    }

            

                 </Grid>

                    <Grid item lg={4} md={3} sm={12} xs={12} >
                    <CartTotalPrice cart={cart} />

                 </Grid>


              </GridConatiner>

                 :
                 <EmptyCart />
            }
         </div>
      </>
   )
}

export default Cart
