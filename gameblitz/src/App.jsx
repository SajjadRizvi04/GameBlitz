import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Dashboard } from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import Teams from "./components/dashboard/teams/Teams";
import ContactUs from "./components/contact/ContactUs";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="teams" element={<Teams/>}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
