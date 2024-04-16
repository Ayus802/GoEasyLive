import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import data from './data'


function Main({ids,setIds,setWatchLists, watchLists }) {
    const navigate = useNavigate()

function Card({id,heading, place,rent,deposit,builtup,propertyType,parking,furnishing,available,image}){
    

    return (  
        <div className=' bg-white box-border min-w-75 p-4 shadow-lg shadow-red-300 ' onClick={()=>{
            setIds(id)
            navigate('/Main/flat')
        }} >
            <div className='text-left border-b p-1 border-gray-500 flex justify-between'>
                <div>
                <div className='text-xl font-bold'>
                    {heading}
                </div>
                <div className='text-gray-400 text-sm'>
                    {place}
                </div>
                </div>
                <button onClick={()=>{alert("you are adding");
                                    setWatchLists([...watchLists,id]) ;
                                    console.log(watchLists);
            }}>Add to WatchList</button>
            </div>
            <div className='grid grid-cols-3 border-b p-2 border-gray-500'>
                <div className='border-r border-gray-500 p-1'>
                    <div className='text-xl'>{rent}</div>
                    <div className='text-xs'>Rent (Negotiable)</div>
                </div>
                <div className='border-r border-gray-500 p-1'>
                    <div className='text-xl'>{deposit}</div>
                    <div className='text-xs'>Deposite (Non-Negotiable)</div>
                </div>
                <div className='p-1'>
                    <div className='text-xl'>{builtup}</div>
                    <div className='text-xs'>Builtup</div>
                </div>
            </div>
            <div className='grid grid-cols-2 p-2'>
                <div className='flex items-center justify-center border w-96'>
                    <img src={image}/>
                </div>
                <div className=' p-2'> 
                    <div className='grid grid-cols-2 grid-rows-2 m-4 border border-gray-300 rounded'>
                        <div className='border border-gray-300'>
                            <div></div>
                            <div>
                                <div>{propertyType}</div>
                                <div>Property Type</div>
                            </div>
                        </div>
                        <div className='border'>
                            <div></div>
                            <div>
                                <div>{parking}</div>
                                <div>Parking</div>
                            </div>
                        </div>
                        <div className='border'>
                            <div></div>
                            <div>
                                <div>{furnishing}</div>
                                <div>Furnishing</div>
                            </div>
                        </div>
                        <div className='border'>
                            <div></div>
                            <div>
                                <div>{available}</div>
                                <div>Available from</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='w-full bg-red-400 p-2 rounded text-white' >Book Your Visit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

    const mapping = data.map((datas)=>
    
    <Card id={datas.id} heading={datas.heading} place={datas.place} rent={datas.rent} deposit={datas.deposit}
    builtup={datas.builtup} propertyType={datas.propertyType} parking={datas.parking} furnishing={datas.furnishing}
    available={datas.available} image={datas.image} 
      />
      
      )
  return (
    <div className='flex items-center justify-center gap-7 flex-wrap p-7 '>
        {mapping}
    </div>
  )
 
}


export default Main
