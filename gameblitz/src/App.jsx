import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </>
  );
}

export default App;
