import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Feed from '../feed/Feed'
import Favorites from '../favorites/Favorites'
import Trending from '../trending/Trending'
import Player from '../player/Player'
import Library from '../library/Library'
import './home.css'
import Sidebar from '../../Components/sidebar/Sidebar'
export default function Home() {
  return (
    <Router>
    <div className='main-body'>
    <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>} />
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/trending" element={<Trending/>}/>
            <Route path="/player" element={<Player/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
        </div>
    </Router>
  )
}
