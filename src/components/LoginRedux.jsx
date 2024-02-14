import React, { useState , useEffect} from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { login } from '../redux/AuthSlice';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function LoginRedux() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector(state => state.auth)


  useEffect(() => {
  
  }, [user])
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    
      // const response = await axios.post('http://localhost:4000/auth/login', { email, password });
      // const token = response.data.token;
      // Dispatch the login action with the token
      dispatch(login({email, password}));
      navigate('/Dashboard');
    
  };

  return (
    <form className="login p-8 rounded-lg shadow-md bg-violet-300" >
      <h3 className="text-white text-2xl mb-4">Login</h3>
      <div className="mb-4">
        <label htmlFor="email" className="block text-white mb-1">Email:</label>
        <input 
          type="email"
          className="w-full px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-white mb-1">Password:</label>
        <input 
          type="password"
          className="w-full px-4 py-2 rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      {/* Use Link instead of button to navigate to the Dashboard */}
      <Link to="/dashboard" className="dashboard">
        <button onClick={handleSubmit} className="bg-pink-500 text-white border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
          <span className="bg-purple-500 shadow-purple-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          Log In
        </button>
      </Link>
      <p>
        Don't have an account?
        <a
          className="font-semibold text-white hover:text-blue-500 transition-all duration-200"
          href="/SignUp"
        ><br/>Sign up</a>
      </p>
    </form>
  );
}

export default LoginRedux;
