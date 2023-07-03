// Import Internal modules

import "./Login.scss";

// Import external Modules
import { Link } from "react-router-dom";

const Login = () => {



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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;