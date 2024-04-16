// import { data } from 'autoprefixer'
import React from 'react'
import data from './data'

function WatchList({watchLists}) {

  
  var watch = watchLists.map((fav)=><div>{fav}</div>)
  console.log(watchLists)
  
  return (
    <div className='flex justify-center flex-col items-center'>
      watchList
      {watchLists.map((fav)=><div className='flex mt-3'>
        <img src={data[fav].image} alt="" className='w-48'/>
        <div className='text-5xl'>
          <h1>{data[fav].heading}</h1>
          <h3>{data[fav].rent}</h3>
          <h2>{data[fav].propertyType}</h2>
        </div>
        
      </div>)}
    </div>
  )
}



export default WatchList