import { Route,Routes,Link } from "react-router-dom"
export default function Hero(){
    return(
        <div className=" h-screen pt-8">
            
                <div className=" p-2 text-5xl text-gray-700 flow-root mb-9 ">Find Your Next Home With Us</div>
                <div className="box-border mb-2 ">
                 <Link to='/' className="p-2   border-b-2  border-red-600" >Buy</Link>
                 <Link to='/Rent' className="p-2  border-b-2  border-red-600" >Rent</Link>
                 <Link to='/Commercial' className="p-2   border-b-2  border-red-600">Commercial</Link>
                </div>
                
                <div>
                <Routes>
                    <Route path="/Rent" element={<Rent/>}/>  
                    <Route path="/" element={<Buy/>}/>  
                    <Route path="/Commercial" element={<Commercial/>}/>  
                </Routes> 
                </div>
                <div className="align-bottom">
            ----Are you the owner----<br/>
            <button className="p-2 pr-4 pl-4 text-xs bg-green-700 text-pink-100 mt-3">Post Free Property Ad</button>
        </div> 
                            
        </div>
    )
}
function Search(){
    return(
        <div className="grid grid-cols-12 h-10 border-2 rounded-lg">
                <select name="city" id="" className="col-span-3 text-center text-lg">
                    <option value="city" >Bangalore</option>
                </select>
                <input type="text" name="landmark" id="" placeholder="Enter any Landmark or Locality" className="col-span-7 pl-3 border-l-2 border-gray-200"/>
                <button type="submit" className="text-center text-red-100 bg-red-400 col-span-2">Search</button>
            </div>
    )
}
function Rent(){
    return(
        // <div className="  text-xl box-border h-20 w-30 border-radi" >    
            <Search/>
            
        // {/* </div> */}
    )
}
function Buy(){
    return(
        // <div className="bg-gray-400 border-black border-2 text-xl box-border h-20 w-30 border-radi" >    
            <Search/>
            
        // </div>
    )
}function Commercial(){
    return(    
            <Search/>
            
        
   )
}