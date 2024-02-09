
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { Route , Routes } from 'react-router-dom'
import SignUp from './pages/SignUp.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  

  return (
    <Router>
     <Routes>
      <Route path='/' element={<SignUp />}/>
     </Routes>
     </Router>
    
  )
}

export default App
