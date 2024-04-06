import React,{useState} from 'react'
import axios from 'axios';



function Registration() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [invaliddetail, setInvaliddetail] = useState(false)
    // const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Replace the URL with your authentication API endpoint
            const response = await axios.post('/SignUp', { name:name,email:email, phone:phone,password:password });}
          catch{}
          }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className=' p-8 bg-white rounded drop-shadow-xl shadow-slate-900 w-96'>
        <form>
          <div className='mb-5'>
            <input type='text' placeholder='Name' className='border-2 rounded-md p-2 w-full' onChange={(e)=>{setName(e.target.value)}} />
          </div>
          <div className='mb-5'>
            <input type='email' placeholder='Email' className='border-2 rounded-md p-2 w-full' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div className='mb-5'>
            <input type='tel' placeholder='Phone Number' className='border-2 rounded-md p-2 w-full' onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
          <div className='mb-5'>
            <input type='password' placeholder='Create Password' className='border-2 rounded-md p-2 w-full' onChange={(e)=>{setPassword()}}/>
          </div>
          <button type='submit' className='bg-red-400 w-full p-2 rounded text-white'>SignUp</button>
        </form>
    </div>
    </div>
  )
}

export default Registration