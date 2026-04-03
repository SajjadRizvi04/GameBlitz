import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from './components/home/Home';
import About from "./components/about/About"
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>

    </>
  );
}

export default App;

