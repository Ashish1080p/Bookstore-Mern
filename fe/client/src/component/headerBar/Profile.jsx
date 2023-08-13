import React, { useState } from 'react'
import { Button, styled, Box, Typography , Menu , MenuItem } from '@mui/material'

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const UserNameBox = styled(Typography)`
color: #e94d1c;  
margin-top : 0.24rem ;
 font-weight : 550 ;
  font-size : 1.15rem;
  cursor : pointer ;
`

const Profile = ({accountHolder , setUserName  }) => {

    const [open , setOpen] = useState(false)

    // function for set open menu
    const handleClick = (e) => {
         setOpen(e.currentTarget) // geting current value of menu 
    }

    // function for close menu 
    const handleClose = () => {
        setOpen(false)
    }

    // /logout function
    const logout = () => {
        setUserName('')
    }

  return (
    <>
      <Box>
      <UserNameBox onClick={handleClick} > {accountHolder } </ UserNameBox> 
      <Menu
        id="basic-menu"
        anchorEl={open}
        open={ Boolean(open) }
        onClose={handleClose}
        style={{ marginTop : '0.28rem'}}
      >
        <MenuItem onClick={()=>{ logout(); handleClose() }}  style={{fontSize : '0.85rem'}}>
           <PowerSettingsNewIcon fontSize='small' color='primary' sx={{marginRight : '0.35rem'  }} />
            Logout</MenuItem>
      </Menu>
      </Box>
    </>
  )
}

export default Profile
