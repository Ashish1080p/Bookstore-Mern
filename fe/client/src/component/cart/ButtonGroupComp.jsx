
import { Button, ButtonGroup, Box, styled } from '@mui/material'
import React from 'react'

const ButtonStyle = styled(Button)(({theme})=> ({
  borderRadius : '50%'
}))

const ButtonGroupComp = () => {
  return (
    <div style={{textAlign : 'center' , marginTop : '0.5rem' }}>
      <ButtonGroup>
        <ButtonStyle>-</ButtonStyle>
        <Button disabled >1</Button>
        <ButtonStyle>+</ButtonStyle>
      </ButtonGroup>
    </div>
  )
}

export default ButtonGroupComp
