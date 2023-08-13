import { Box, styled } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CallIcon from '@mui/icons-material/Call';
import React from 'react'

const MainContainer = styled('div')( ({theme}) => ({
    display: 'flex',
    margin: '0.5rem 0 0 0',
    justifyContent: 'space-evenly',
    backgroundColor: 'black',
    color: 'white',
    padding: '1.4rem',
    [theme.breakpoints.down('md')] :{
      width : 'auto'
    }
}))

const BoxParts = styled(Box)`
 display : flex ;
`
const Spantag = styled('span')( ({theme})=> ({
    fontFamily: 'Roboto Condensed , sans-serif',
   fontSize : '2.4rem',
    [theme.breakpoints.down('md')] : {
        fontSize : '0.6rem',
    }
}))

const LocalShipIcon = styled(LocalShippingIcon)( ({theme})=>({
    margin : '0.4rem 0.3rem 0  0' ,
     padding : '0.5rem',
     [theme.breakpoints.down('md')] : {
        fontSize : 'medium',
        padding : '0.2rem'
     }
}) )

const PhoneIcon = styled(CallIcon)( ({theme})=>({
    margin : '0.4rem 0.3rem 0  0' ,
     padding : '0.5rem',
     [theme.breakpoints.down('md')] : {
        fontSize : 'medium',
        padding : '0.2rem'
     }
}) )

const ArrowIcon = styled(ArrowBackIosNewIcon)( ({theme})=>({
    margin : '0.4rem 0.3rem 0  0' ,
     padding : '0.5rem',
     [theme.breakpoints.down('md')] : {
        fontSize : 'medium',
        padding : '0.2rem'
     }
}) )

const Ptag = styled('p')( ({theme}) => ({
    margin : '0',
    fontSize : '0.8rem',
    [theme.breakpoints.down('md')] : {
        fontSize : '0.4rem',
    }
}))


const ShippingOffer = () => {
    return (
        <MainContainer style={{ display: 'flex', margin: '0.5rem 0 0 0', justifyContent: 'space-evenly' }}>
            <BoxParts>
                
                <div>
                    <Spantag  > Bookbuy site by Ashish</Spantag>
                    
                </div>
            </BoxParts>



            

        </MainContainer>
    )
}

export default ShippingOffer
