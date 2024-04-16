import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Route, Routes } from 'react-router-dom';
import Registration from './components/Registration';
import Login from './components/Login';
import Main from './components/Main';
import { useState } from 'react';
import Flat from './components/flat';
import WatchList from './components/WatchList';

function App() {
  const [verified , setVerified] = useState(false)
  const [ids, setIds] = useState(0)
  const [watchLists , setWatchLists] = useState([])

  return (
    <div className="text-center bg-red-100">
        <Navbar verified={verified} setVerified={setVerified}/>
      <Routes>
        <Route path='/Login' element={<Login verified={verified} setVerified={setVerified}/>} />
        <Route path='/Registration' element={<Registration/>} />
        <Route path='/' element={<Hero />} />
        <Route path='/Main' element={<Main ids={ids} setIds={setIds} watchLists={watchLists} setWatchLists={setWatchLists}/>} />
        <Route path='/Main/flat' element={<Flat id={ids}/>}/>
        <Route path='/watchList' element={<WatchList watchLists={watchLists}/>}/>
      </Routes>

    </div>
  );
}

export default App;
