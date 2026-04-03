import { useState } from "react";
import "../signup/Signup.css";
import { NavLink, useNavigate } from "react-router-dom";
import "./Login.css";
import bgImage from "/bgAuth.png";
import { checkAuthentication, loginPlayer, authenticatePlayer } from "../APIs/authentication.api";
import { toast } from "react-toastify"; 
import { useEffect } from "react";

export default function Login({ switchToSignup }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate()

  const handleChange = async(e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login data:", formData);

    // later → API call
    try {
      const res = await loginPlayer(formData);
      
      const player_has_team = await authenticatePlayer(formData)
      console.log(player_has_team);

      toast.success("Login successful!");
      if (player_has_team.status == true){
        
        navigation("/dashboard")
      }else{
        navigation("/no-team")
      }

      
     
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please check your credentials.");
    }
  };

  useEffect(async ()=>{
    // Check if user is already authenticated
    try {
      const res = await checkAuthentication()
      if(res.authenticated){
        toast.info("You are already logged in.");
        navigation("/dashboard")
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      
    }
  },[])

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="login-section">
        <div className="auth-box ">
          <h2>Login</h2>

          <form onSubmit={handleSubmit}>
            <input name="email" placeholder="Email" onChange={handleChange} />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />

            <button type="submit">Login</button>
          </form>

          <NavLink to={"/signup"}>
            <p onClick={switchToSignup} className="link">
              Don't have an account? Sign up
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
