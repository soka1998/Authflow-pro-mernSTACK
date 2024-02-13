
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useCookies } from 'react-cookie';

export const fetchUser = createAsyncThunk('auth/fetchUser', async () => {
  const [_,setCookies]=useCookies(['access_token']);
  // Fetch user data from API
  const response = await fetch('/api/user');
  const data = await response.json();
  return data;
});

export const login = createAsyncThunk('auth/login', async (userData) => {
  const response = await loginUser(userData);
  setCookies("access_token", data.accessToken)
  return response.data;
});

export const register = createAsyncThunk('auth/register', async (userData) => {
  const response = await register(userData);
  return response.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    // You can define regular reducers here
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
      .addCase(login.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
