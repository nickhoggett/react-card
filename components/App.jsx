import React from 'react'
import Profile from './Profile'
import Contact from './Contact'
import About from './About'
import Social from './Social'

export default function App() {
    return (
        <div className='container-main'>
            <Profile /> 
            <Contact />
            <About />
            <Social />
        </div>
        
    )
}