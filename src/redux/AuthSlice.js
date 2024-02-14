// AuthSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useCookies } from 'react-cookie';
import axios from 'axios';


export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
 
  // Fetch user data from API
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    
   const response = await axios.post('http://localhost:4000/auth/login', user);
   if (response.data) {
    localStorage.setItem("token",JSON.stringify(response.data.token))
   console.log(response.data)
   }
   return response.data
  } catch (error) {
    const message = error.response.data.error
    thunkAPI.rejectWithValue(message);

  }
  const response = await loginUser(userData);
  useCookies("access_token", response.data.accessToken)
  return response.data;
});

export const signup= createAsyncThunk('auth/signup', async (userData) => {
  const response = await signup(userData);
  return response.data;
});

//Define the logout action
export const logout = () => async (dispatch) => {
  // Clear token from cookies or localStorage
  // For example, if using cookies:
  localStorage.removeItem("token")

  // Dispatch the logout action to update Redux state
  dispatch({ type: 'auth/logout' });
}

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(login.pending, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(action.payload.token)
      })
      .addCase(login.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
