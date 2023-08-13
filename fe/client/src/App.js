import React from 'react'
import { Outlet } from 'react-router-dom'

import { Box } from '@mui/material';

// components
import Header from './component/headerBar/Header';
import Home from './component/homeComponent/Home';
import DataContext from './component/context/DataContext';


const App = () => {
  return (
    <DataContext >
      <Header/>
    
          <Outlet />
    </DataContext>
  )
}

export default App



