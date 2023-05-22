import React from 'react';
import "../styles/styles.css"

export const PhotoFrame = ({url,title}) => {
   return(
      <div className='photoframe'>
           <div>{title}</div>
         <img src={url} />
      </div>
   )
}