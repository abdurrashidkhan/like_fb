import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar/Navbar';
import RequireAuth from './Auth/RequireAuth/RequireAuth';
import Home from './Pages/Home/Home';
import SignUp from './Auth/SignUp/SignUp';
import Login from './Auth/Login/Login';

function App() {
  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
        <Route path="/home" element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
      </Routes>
    </>
  )
}

export default App;
