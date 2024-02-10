// src/AppProvider.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from './userSlice'; // Adjusted import path
import { setUser } from './auth/authSlice'; // Adjusted import path
import axios from 'axios';

const AppProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/v1/users/showMe');
        dispatch(setUser(response.data.user));
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <AppContext.Provider
      value={{
        // Provide necessary values
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
