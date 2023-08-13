import React, { useState } from 'react'
import { createContext } from "react";

export const DataContextVariable = createContext(null);

const DataContext = ({children }) => {
    const [ showUserName , setUserName ] = useState('')
  return (
     <DataContextVariable.Provider 
      value={{ showUserName , setUserName }}
     > 
     {children}
     </DataContextVariable.Provider>
  )
}

export default DataContext
