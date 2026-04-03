import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from './components/home/Home';
import Footer from "./components/shared/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;

