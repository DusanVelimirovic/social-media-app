import "./Register.scss";

// Import external Modules
import { Link } from "react-router-dom";

const Register = () => {
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
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="text" placeholder="Name" />
            <Link to="/login">
                <button>Login</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;