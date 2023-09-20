import React from 'react'
import Home from './main/Home'
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    
  } from "react-router-dom";
import Landing from './Landing';
import { Experience } from './components/Experience';

export default function App() {
  return (
    <BrowserRouter>
    
    <header className='flex flex-row bg-gradient-to-r from-yellow-100/70 via-blue-300 to-pink-400 px-2 py-2'>
        <Link to="/home">
    <button className="text-sm animate-bounce font-medium rounded-xl border-slate-600 bg-gradient-to-r from-pink-300 to-blue-300 px-3 py-2" >AI project</button>  
        </Link>
    </header>
    <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        
    </Routes>

    </BrowserRouter>
    


  )
}
