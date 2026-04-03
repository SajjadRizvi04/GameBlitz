import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from './components/home/Home';
import Footer from "./components/shared/footer/Footer";
import { Dashboard } from "./components/dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>

    </>
  );
}

export default App;

