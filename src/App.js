import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './common/Navbar/Navbar';
import RequireAuth from './Auth/RequireAuth/RequireAuth';

function App() {
  return (
    <>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventories" element={
          <RequireAuth>
            {/* <TotalProducts /> */}
          </RequireAuth>
        } />
        </Routes>
    </>
  )
}

export default App;
