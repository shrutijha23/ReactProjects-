import React, { useState } from 'react'

function Card({id,image,info,price,name,removeHandler}) {
     const [readmore,setReadmore] = useState(false);
     const description = readmore ? info: `${info.substring(0,200)}....` 
     function readmoreHandler(){
        setReadmore(!readmore);
     }
    
  return (
    <div className='card'>
        <img src={image} alt='' className='image'/>
       <div className='tour-info'>
       <div className='tour-details'>
            <h4 className='tour-price'>{price}</h4>
            <div className='tour-name'>{name}</div>
         </div>
         <div className='description'>
            {description}
            <span className='read-more' onClick={readmoreHandler}>
                {
                    readmore ? 'Show less' :'Read more' 
                }
            </span>
         </div>
       </div>
         <button onClick={()=>removeHandler(id)} className='btn-red'>
            Not interested
         </button>
    </div>
  )
}

export default Card
