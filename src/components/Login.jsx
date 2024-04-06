import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({verified ,setVerified}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [invaliddetail, setInvaliddetail] = useState()
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            // Replace the URL with your authentication API endpoint
            const response = await axios.post('/login', { email:email, password:password });
            console.log(response.data);
             if (response.data.success){
              setInvaliddetail(false)
              navigate('/Main')
              setVerified(true)
             }
             else{
              setInvaliddetail(true)
              setVerified(false)
             }
            
        } catch (error) {
          setInvaliddetail(true)
            console.error('Login Nhi hua',error);
        }
      
    };

    return (
        <div className="bg-red-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>

                {invaliddetail && (
                  <div className="bg-red-100 mb-4 p-2 rounded" >Invalid credentials. Please try again.</div>
                )}
                {!(invaliddetail) && (
                  <div className="bg-green-100 mb-4 p-2 rounded">Login successful.</div>

                )}

                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <button type="submit"  className="w-full bg-red-400 text-white p-2 rounded-md hover:bg-red-700">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
