import { Link } from "react-router-dom"
import App from "../App"
export default function Navbar({verified, setVerified}){
    return(
    <>
        <div className="fixed h-14 z-50 flex justify-between pl-3 pr-3 bg-red-400 items-center cursor-pointer shadow-sm shadow-black text-black w-full">
            <div>
                <Link to='/'>GoEasyLive</Link>
            </div>
            {!verified && <div className={" items-center p-2 flex"} >
                <Link to="/watchList">WatchList</Link>
                <Link to='/Login' className={"px-3 py-2 hover:bg-red-300 rounded"}>Login</Link>
                <Link to='/Registration' className="px-3 py-2 hover:bg-red-300 rounded">SignUp</Link>
            </div>}
            {verified && <div className={'items-center p-2 flex'}>
                <Link to="/watchList">WatchList</Link>
                <div onClick={()=>{setVerified(false)}}>Logout</div>
            </div>}
        </div>
    </>
    )
}