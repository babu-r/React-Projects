import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';

function Todos() {
     const [data, setData] = useState(null);

     useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json()).then((data) => setData(data));
     }, []);
     return (
          <div>
               <Navbar /><br /><br />
               {
                    data && data.map((item) => { 
                         return (
                              <>
                                   <p className='todo' key={item.id} id={item.id}>{item.title}</p>
                              </>
                              
                         )
                    })
               }
          </div>
     )
}

export default Todos;