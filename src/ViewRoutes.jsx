import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './Layout/DefaultLayout'

import ErrorPage from './pages/ErrorPage.jsx/index.jsx'
import Home from './pages/Home/index.jsx'
import Tokencrypto from './pages/Tokencrypto/index.jsx'
import Devblog from './pages/Devblog/Index.jsx'
import Roadmap from './pages/Roadmap/index.jsx'
import Coming from './pages/Coming/'
import Founder from './pages/Founder'
import About from './pages/About'
import Register from './pages/Register'
import Dashboard from './Dashboard'

import Slider from './components/Slider.jsx'
import WallletDashboard from './Dashboard/WallletDashboard.jsx'
import PreRegister from './pages/PreRegister/index.jsx'


const ViewRoutes = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={
          <DefaultLayout fullscreen={false}>
            <Slider />
          </DefaultLayout>
        }
        />
        <Route path='/preregister' element={
          <DefaultLayout fullscreen={false}>
            <PreRegister />
          </DefaultLayout>
        }
        />
        <Route path='/home' element={
          <DefaultLayout fullscreen={true}>
             <Home />
          </DefaultLayout>
        }
        />
        <Route path='/Dashboard' element={
          <DefaultLayout fullscreen={true}>
            <Dashboard />
          </DefaultLayout>
        }
        />
        <Route path='/walllet' element={
          <DefaultLayout fullscreen={true}>
            <WallletDashboard />
          </DefaultLayout>
        }
        />
        <Route path='/stoa' element={
          <DefaultLayout fullscreen={true}>
            <Tokencrypto />
          </DefaultLayout>
        }
        />
        <Route path='/devblog' element={
          <DefaultLayout fullscreen={true}>
            <Devblog />
          </DefaultLayout>
        }
        />
        <Route path='/roadmap' element={
          <DefaultLayout fullscreen={true}>
            <Roadmap />
          </DefaultLayout>
        }
        />
        <Route path='/coming' element={
          <DefaultLayout fullscreen={true}>
            <Coming />
          </DefaultLayout>
        }
        />
        <Route path='/mint' element={
          <DefaultLayout fullscreen={true}>
            <Founder />
          </DefaultLayout>
        }
        />
        <Route path='/about' element={
          <DefaultLayout fullscreen={true}>
            <About />
          </DefaultLayout>
        }
        />
        <Route path='/register' element={
          <DefaultLayout fullscreen={false}>
            <Register />
          </DefaultLayout>
        }
        />
        <Route path='*' element={
          <DefaultLayout fullscreen={false}>
            <ErrorPage />
          </DefaultLayout>
        }
        />
      </Routes>
    </React.Fragment>
  )
}

export default ViewRoutes