
export default function Navbar(){
    return(
    <>
        <div className="flex justify-between pl-3 pr-3 bg-red-400 items-center cursor-pointer shadow-lg shadow-red-300">
            <div>GoEasyLive</div>
            <div className="flex">
                <div className="p-3">Login</div>
                <div className="p-3">SignUp</div>
                <div className="p-3">Menu</div>
            </div>
        </div>
    </>
    )
}