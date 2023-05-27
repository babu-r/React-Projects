import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div>
       <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/image-carousel">ImageCarousel</Link></li>
            <li><Link to="/quotes">Quotes</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/reducer">Reducer</Link></li>
            <li><Link to="/image-fetcher">Image Fetcher</Link></li>
            <li><Link to="/usetoggle">Custom Hook Toggler</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar;