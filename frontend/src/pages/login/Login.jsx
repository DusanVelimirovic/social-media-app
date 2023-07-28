// Import external Modules
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

// Import Internal modules
import "./Login.scss";
import { AuthContext } from "../../context/authContext";



const Login = () => {

  // Keep track from user input in login form
  const [inputs, setInputs] = useState({
    username: "",
    password: ""

  });

  // Handle errors during login
  const [err, setError] = useState(null);

  // Use navigate hook to after succesufull login redirect to home page
  const navigate = useNavigate();

  // Handle changes in form input fields
  // Pass data as callback to setInputs()
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value}));
  };

// AuthContext return login()
const { login } = useContext(AuthContext);

const handleLogin = async (e) => {
  e.preventDefault();
  try{
    await login(inputs);
    // After succesufull login navigate to home page
    navigate("/");
  } catch (err){
    setError(err.response.data);
  }

  };


  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Social Media Portfolio Application</h1>
          <p>
            Social Media Portfolio Application built using React, SASS, NodeJS, ExpressJS and MySQL
          </p>
          <span>Don't you have an account?</span>
            <Link to="/register">
                <button >Register</button>
            </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange} />
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;