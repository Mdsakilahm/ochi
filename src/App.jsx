import React from 'react';
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marquee from './components/Marquee';
import Aboutpage from './components/Aboutpage';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
function App() {
  return (
    <div className='w-full min-h-screen bg-slate-50 overflow-hidden'>
      <Navbar/>
      <Landingpage/>
      <Marquee/>
      <Aboutpage/>
      <Eyes/>
      <Featured/>
    </div>
  )
}

export default App