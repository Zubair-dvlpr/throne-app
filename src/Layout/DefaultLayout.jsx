import React from 'react'
import Header from '../components/Shared/Header'
import Footer from '../components/Shared/Footer'

const DefaultLayout = ({ children , fullscreen}) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {children}
      </main>
      {fullscreen && <Footer />}
      
    </React.Fragment>
  )
}

export default DefaultLayout