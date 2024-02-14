import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/AuthSlice';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const handleLogout = () => {
    // Clear token from localStorage
    localStorage.removeItem('token');
    // Dispatch logout action to update Redux state
    dispatch(logout());
    // Redirect to login page or any other desired route
    navigate('/'); 
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Welcome to the Dashboard!</h1>
      <button onClick={handleLogout} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
