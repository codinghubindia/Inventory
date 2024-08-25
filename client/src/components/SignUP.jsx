import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUP = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select id="role" required>
              <option value="" disabled selected>Select your Role</option>
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="Confirm your password" />
          </div>
          <button type="submit" className="btn submit-btn">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p className="home-link signup-link">
         <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUP
