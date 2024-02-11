import { Route,Routes,BrowserRouter } from "react-router-dom"
export default function Hero(){
    return(
        <div>
            
                <div className="mt-20 mb-6 p-2 text-5xl text-gray-700">Find Your Next Home With Us</div>
                <button className="p-4 m-2">Buy</button>
                <button className="p-4 m-2" >Rent</button>
                <button className="p-4 m-2">Commercial</button>
                
                <BrowserRouter>
                <Routes>
                    <Route path="/" />  
                </Routes> 
                </BrowserRouter>
                            
        </div>
    )
}
function Rent(){
    return(
        <div>    
            <div>
                <select name="city" id="">
                    <option value="city">city</option>
                </select>
                <input type="text" name="landmark" id="" />
                <button type="submit">Search</button>
            </div>
            <div>
                <input type="radio" name="rentType" id="" />
                <input type="radio" name="rentType" id="" />
            </div>
        </div>
    )
}
function Buy(){
    return(
        <div>    
            <div>
                <select name="city" id="">
                    <option value="city">city</option>
                </select>
                <input type="text" name="landmark" id="" />
                <button type="submit">Search</button>
            </div>
            <div>
                <input type="radio" name="rentType" id="" />
                <input type="radio" name="rentType" id="" />
            </div>
        </div>
    )
// }
// function Commercial(){
    return(
        <div>    
            <div>
                <select name="city" id="">
                    <option value="city">city</option>
                </select>
                <input type="text" name="landmark" id="" />
                <button type="submit">Search</button>
            </div>
            <div>
                <input type="radio" name="rentType" id="" />
                <input type="radio" name="rentType" id="" />
            </div>
        </div>
    )
}