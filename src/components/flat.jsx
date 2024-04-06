import React from 'react'
import data from './data'

function Flat({id}) {
  return (
    <div className='p-16'>
        <center>
       <div className='flex border border-gray-600 w-9/12 justify-between '>
        <div className='border-r border-gray-600 p-5'>{data[id-1].heading}</div>
        <div className='flex'>
        <div className='border-x border-gray-600 p-3'>
            <div>{data[id-1].rent}</div>
            <div>Negotiable</div>
        </div>
        <div className='border-r border-gray-600 p-3'>
            <div>{data[id-1].deposit}</div>
            <div>Deposite</div>
        </div>
        <div className='p-3'>
            <div>{data[id-1].builtup}</div>
        </div>
       </div></div>
       <div className='pt-3'>
        <div>
            <img src={data[id-1].image} className='w-1/2'/>
        </div>
        <div>
            <div></div>
        </div>
       </div>
       </center>
    </div>
  )
}
function Card(){
    return(
        <div>
            <div></div>
        </div>
    )
}

export default Flat