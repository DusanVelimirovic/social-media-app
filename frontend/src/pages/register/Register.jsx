import "./Register.scss";

// Import external Modules
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";




const Register = () => {

// Keep track from user input in register form
const [inputs, setInputs] = useState({
  username: "",
  email: "",
  password: "",
  name: ""
});

// Handle errors during register
const [err, setError] = useState(null);

// Use navigate hook to after succesufull registration redirect to login page
const navigate = useNavigate();

// Handle changes in form input fields
// Pass data as callback to setInputs()
const handleChange = (e) => {
  setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
};

// Handle register request using axios
const handleClick = async e => {
  e.preventDefault();

  try {
    await axios.post("http://localhost:8800/api/auth/register", inputs);
    navigate("/login");
    
  }

  catch (err){
    setError(err.response.data);
  }

}

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media Application.</h1>
          <p>
            Feel free to descover my social media portfolio application
          </p>
          <span>Already have an account?</span>
            <Link to="/login">
                    <button>Login</button>
                </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username"  onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
                {err && err}
                <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;