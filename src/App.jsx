import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import Aboutpage from './components/Aboutpage';
import Eyes from './components/Eyes';
function App() {
  return (
    <div className='w-full min-h-screen bg-slate-50 '>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <Aboutpage/>
      <Eyes/>
    </div>
  )
}

export default App