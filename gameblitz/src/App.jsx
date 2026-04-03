import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/shared/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import { Dashboard } from "./components/dashboard/Dashboard";
import Profile from "./components/dashboard/Profile";
import Teams from "./components/dashboard/Teams";
import Teams from "./components/dashboard/Teams";
import ContactUs from "./components/contact/ContactUs";
import Chat from "./components/dashboard/Chat";
import Match from "./components/dashboard/Match";
import Login from "./components/Authentication/login/Login";
import Signup from "./components/Authentication/signup/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chat from "./components/dashboard/Chat";
import Notification from "./components/dashboard/Notification";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        theme="dark"
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Profile />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="teams" element={<Teams/>}></Route>
          <Route path="chat" element={<Chat/>}></Route>
          <Route path="matches" element={<Match/>}></Route>
          <Route path="chat" element={<Chat/>}></Route>
          <Route path="notification" element={<Notification/>}></Route>
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<ContactUs/>}></Route>
      </Routes>
    </>
  );
}

export default App;
