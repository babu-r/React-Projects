import React, { useEffect, useState } from 'react'
import { PhotoFrame } from '../ImageFetcher/PhotoFrame';
import { Loader } from '../ImageFetcher/Loader';


const fetchPosts = async (id) => {
     let url = `https://jsonplaceholder.typicode.com/photos/${id}`;
     return fetch(url);
}


function ImageFetcher() {
     const[data,setData]=useState([])
     const[id,setId]=useState(null)

     const handleChange=(e)=>{
          setId(e.target.value)
     }
     const loadData = async () => {
          fetchPosts(id)
          .then((res) => res.json())
          .then((jsonData) => {
               setData(jsonData);
          })
     }
    
     useEffect(() => {
          loadData();
     }, []);
    
     useEffect(() => {
          setData(null)
          loadData()
     }, [id])

     return (
          <div>
               <span>Id number</span>
               <input type="number" onChange={handleChange} />
               {data == null ? ( <Loader/> ) : <PhotoFrame url={data.url} title={data.title}/>}
          </div>
     )
}

export default ImageFetcher;