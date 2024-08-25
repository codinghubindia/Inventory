import { Link } from 'react-router-dom';
import '../styles/Login.css';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome Back</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn submit-btn">Login</button>
        </form>
        <p className="signup-link">
          Don&apos;t have an account? <Link to="/register">Sign up here</Link>
        </p>
        <p className="home-link  signup-link">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
