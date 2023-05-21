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
          </ul>
        </nav>
    </div>
  )
}

export default Navbar