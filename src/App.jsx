// import { Router } from "express";
import {BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import "./App.css";
import SignUp from "./pages/SignUp";
import Home from './pages/Home';
import store from './redux/store';
import { Provider } from 'react-redux';
import LoginRedux from './components/LoginRedux';
import Dashboard from './components/Dashboard';
// import PrivateRoute  , {isAuthenticated} from './components/PrivateRoute';


// import { Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          {/* <Route path='/Dashboard' element={<Dashboard/>}></Route> */}
          <Route  path="/Login" element={<LoginRedux />}></Route>
          {/* <PrivateRoute path="/dashboard" element={<Dashboard />} isAuthenticated={isAuthenticated} /> */}

          <Route path="/Signup" element={<SignUp/>}></Route>
          
        </Routes>
      </Router>
      </Provider>

  );
  }

export default App;
