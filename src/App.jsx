import React from 'react'
import './App.css'
import ViewRoutes from './ViewRoutes'
import { MenuProvider } from './ContextApi/MenuProvider'

function App() {
  return (

    <React.Fragment>
      <MenuProvider>
        <ViewRoutes />
      </MenuProvider>
    </React.Fragment>

  )
}

export default App
