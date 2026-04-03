import { useState } from "react";
import PasswordStrengthMeter from "./PasswordStrengthMeter";
import "./Signup.css";
import SportsSelector from "./PrefferedSports";
import { NavLink, useNavigate } from "react-router-dom";
import { getPasswordStrength } from "../utilities/passwordStrength";
import bgImage from '/bgAuth.png'
import { getRegisteredSports, registerPlayer } from "../APIs/authentication.api";
import { toast } from "react-toastify";
import SpinLoader from "../utilities/helper components/SpinLoader/SpinLoader";
import { useEffect } from "react";

export default function Signup({ switchToLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [selectedSports, setSelectedSports] = useState([]);
  const [loading,setLoading] = useState(false);
  const navigation = useNavigate()

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [phase, setPhase] = useState(1);
  const [registeredSports, setRegisteredSports] = useState([]); 

  useEffect(()=>{
    // Fetch sports from server on component mount
    async function fetchSports() {
      setLoading(true);
      try {
        const sports = await getRegisteredSports();
        setRegisteredSports(sports);
      } catch (error) {
        console.error("Failed to fetch sports:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchSports();
  },[])

  // Handle typing
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // validate live
    validateField(name, value);
  };

  // Track blur (user interaction)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Field-level validation
  const validateField = (name, value) => {
    let error = "";

    if (name === "email") {
      if (!value.includes("@")) error = "Enter a valid email";
    }

    if (name === "username") {
      if (value.length < 3) error = "Username must be at least 3 characters";
    }

    if (name === "password") {
      if (value.length < 6) error = "Password must be at least 6 characters";
    }

    if (name === "confirmPassword") {
      if (value !== formData.password) error = "Passwords do not match";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  // Full form validation on submit
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";

    if (formData.username.length < 3) newErrors.username = "Username too short";

    if (formData.password.length < 6) newErrors.password = "Password too short";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (getPasswordStrength(formData.password).score < 2) {
      setErrors((prev) => ({ ...prev, password: "Password too weak" }));
    }

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      const temp = {};
      temp.email = formData.email;
      temp.username = formData.username;
      temp.password = formData.password;
      temp.selectedSports = selectedSports;
      // console.log(temp);
      // submit to server
      try {
        const res=  await registerPlayer(temp);
        toast.success("Registration successful!");
        navigation("/login")
        
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  if(loading){
    return (
      <section className="signup-section">
        <SpinLoader/>
      </section>)
  }

  if (phase == 1) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="signup-section">
          <div className="auth-box">
            <h2>Create Account</h2>

            <form>
              {/* EMAnSubmit={handleSubmit}IL */}
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}

              {/* USERNAME */}
              <input
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.username && errors.username && (
                <p className="error">{errors.username}</p>
              )}

              {/* PASSWORD */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}

              {/* CONFIRM PASSWORD */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
              <PasswordStrengthMeter password={formData.password} />

              <button
                type="button"
                onClick={(e) => {
                  // handleSubmit(e)
                  setPhase(2);
                }}
              >
                Next
              </button>
            </form>

            <NavLink to={"/login"}>
              <p onClick={switchToLogin} className="link">
                Already have an account? Login
              </p>
            </NavLink>
          </div>
        </section>
      </div>
    );
  }

  if (phase === 2) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="signup-section">
          <SportsSelector
            registeredSports={registeredSports}
            selectedSports={selectedSports}
            setSelectedSports={setSelectedSports}
          />
          <button
            className="create-acc-btn"
            onClick={handleSubmit}
            disabled={selectedSports.length === 0}
          >
            Done
          </button>
        </section>
      </div>
    );
  }
}
