// import styled from '@emotion/styled'
import { Box, Typography, styled, Button, Divider } from '@mui/material';

import React from 'react'



const Conatiner = styled('div')({
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Roboto Condensed , sans-serif',
    color: 'var(--font-grey)',
    padding: '1.3rem'
})

const ImageOne = styled('img')( ({theme}) =>({
    margin: '0.8rem 0 0 0' ,
     [theme.breakpoints.down('md')] : {
        width : '12rem' ,
        height : '7rem'
     }
})
)

const AdvertiseImage = styled('img')( ({theme})=> ({
    height: '25rem',
    margin: '0.7rem 0 0 0' ,
    [theme.breakpoints.down('md')] : {
        height : "15rem"
    }
}))

const QualityTest = () => {

    const imageUrl = 'https://www.buybooksindia.com/assets/images/banner/home/horizontal-banner-indian-language.jpeg'

    return (
        <>

            <Conatiner>
                <span style={{ fontSize: '2.6rem', color: '#454d5c' }}>Kindle By Amazon</span>
                <h3>The Kindle books difference is not just low prices on used books; It’s a Quality Guarantee.</h3>
                <p style={{ fontSize: '0.85rem' }}>Between saving books and shipping, a Kindle staff member personally handles each and every volume.</p>
                <p style={{ fontSize: '0.85rem' }} >Like you, our team has very high standards. You should know exactly what to expect when your purchase arrives.</p>

                <ImageOne src={imageUrl} alt="image" style={{ margin: '0.8rem 0 0 0' }} />
            </Conatiner>
        </>
    )
}

export default QualityTest
