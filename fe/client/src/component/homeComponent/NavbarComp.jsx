import { Box , styled } from '@mui/material'
import React from 'react'
// css
import '../../index.css'
// constant data
import { BookType } from '../../constant/data'

// styling
const NavComponant = styled(Box)(({theme})=> ({
  display : 'flex',
   justifyContent : 'space-between',
   padding : '0.5rem 1rem',
   margin : '0 5rem 0 6rem',
  fontFamily: 'Roboto Condensed , sans-serif',
  fontWeight : 750 ,
  fontSize : '1.1rem' ,
  color : "var(--font-grey)" ,
  overflowX : 'auto',
  [theme.breakpoints.down('md')] : {
    padding : '0.5rem 0.3rem',
    margin : '0 0.5rem 0 0.4rem',
    fontWeight : 750 ,
     fontSize : '.68rem' ,
  }
}))

const BookTypeBox = styled(Box)(({theme})=> ({


  [theme.breakpoints.down('md')] : {
    padding : '0.5rem 0.3rem',
    margin : '0 0.5rem 0 0.4rem',
    fontWeight : 750 ,
     fontSize : '.68rem' ,
 
  }
}))

const NavbarComp = () => {
  return (
    <div>
    <NavComponant >
 
         {
            BookType.map((data , i)=>(
                <BookTypeBox key={i} >
                    <p> {data.bookType} </p>
                </BookTypeBox>

            ))
         }
    </NavComponant>
    </div>
  )
}

export default NavbarComp
