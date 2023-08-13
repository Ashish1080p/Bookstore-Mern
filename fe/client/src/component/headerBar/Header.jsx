import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Drawer, styled, Box, List, ListItem } from '@mui/material'


// Icons 
import MenuIcon from '@mui/icons-material/Menu';

// component
import Search from './Search';
import CustomeButton from './CustomeButton';
import CustomeButtonCopy from './CustomeButtonCopy';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
 
   background-color : black;
   line-height : 0px;
`

const ImageLogo = styled('img')(({ theme }) => ({
   width: '11.5rem',
   marginTop: '0px',
   height: '4.4rem',
   [theme.breakpoints.down('md')]: {
      width: '5.5rem',
   }
}))

const ImageBox = styled(Box)(({ theme }) => ({
   marginLeft: '6rem',
   [theme.breakpoints.down('lg')]: {
      marginLeft: '0.5rem',
      paddingLeft: '0.5rem'
   }
}))

const MenuIcons = styled(MenuIcon)(({ theme }) => ({
   display: 'none',
   color: 'black',
   [theme.breakpoints.down('md')]: {
      display: 'block'

   }
}))


const Header = () => {

   // states
   const [open, setOpen] = useState(false)

   const handleOpen = () => {
      setOpen(true)
   }

   const handleClose = () => {
      setOpen(false)
   }

   // function for drawer items


   return (
      <div>
         < StyledHeader >
            <Toolbar>

               <MenuIcons size="small" onClick={handleOpen} >
                  <MenuIcon />
               </MenuIcons>

               <Drawer open={open} onClose={handleClose} >
                  <Box>
                     <List>
                        <ListItem  >
                           <CustomeButtonCopy />
                          
                        </ListItem>
                     </List>
                  </Box>
               </Drawer>

               <ImageBox  >
                  <div>
                     <Link to={'/'} >  <ImageLogo src="kindle-logo.png" alt="logo" /></Link>
                  </div>
               </ImageBox >

               <Search />

               <Box >
                  
                  <CustomeButton />
               </Box>

            </Toolbar>
         </StyledHeader>

      </div>
   )
}

export default Header
