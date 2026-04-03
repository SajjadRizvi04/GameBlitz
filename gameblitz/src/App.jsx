<<<<<<< HEAD
import { Routes } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
=======
import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/home/Home';
>>>>>>> 41fbcc30f91c79c63c03102623e64af6788d3478

function App() {
  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <Routes></Routes>
    </>
=======
    
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
>>>>>>> 41fbcc30f91c79c63c03102623e64af6788d3478
  );
}

export default App;
