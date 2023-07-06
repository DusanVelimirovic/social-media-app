// Import external Modules
import { Link } from "react-router-dom";
import { useContext } from "react";

// Import Internal modules
import "./Login.scss";
import { AuthContext } from "../../context/authContext";



const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
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
                <button>Register</button>
            </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;