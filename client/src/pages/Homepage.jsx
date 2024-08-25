// src/pages/Homepage.jsx

import { Link } from 'react-router-dom';
import Header from './components/Header'
import '../styles/Homepage.css';

const Homepage = () => {

  return (
    <div className="homepage-container">
      
      <Header />

      <header className="hero-section">
        <div className="hero-content">
          <h1>Streamline Your Inventory Management</h1>
            <p className="intro-text">
              InventoryPro is the ultimate solution to manage your stock, track sales, and optimize your inventory levels. Whether you&apos;re a small business or a large enterprise, we have the tools to help you succeed.
            </p>
          <div className="auth-buttons">
            <Link to="/register" className="btn register-btn">Get Started</Link>
            <Link to="/login" className="btn login-btn">Login</Link>
          </div>
        </div>
      </header>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <h3>Real-time Inventory Tracking</h3>
            <p>Keep track of your stock levels in real-time across multiple locations. Never run out of stock again.</p>
          </div>
          <div className="feature-item">
            <h3>Automated Stock Replenishment</h3>
            <p>Set up automatic reordering based on stock levels, sales velocity, and lead times.</p>
          </div>
          <div className="feature-item">
            <h3>Comprehensive Reporting</h3>
            <p>Generate detailed reports on sales, inventory levels, and financials to make informed decisions.</p>
          </div>
          <div className="feature-item">
            <h3>Multi-Channel Sales Integration</h3>
            <p>Integrate with popular e-commerce platforms and marketplaces to centralize your inventory management.</p>
          </div>
          <div className="feature-item">
            <h3>Mobile Access</h3>
            <p>Manage your inventory from anywhere with our mobile app, available for iOS and Android.</p>
          </div>
          <div className="feature-item">
            <h3>Customizable User Roles</h3>
            <p>Control access to your inventory system with customizable user roles and permissions.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonials">
          <div className="testimonial-item">
            <p>&quot;InventoryPro has revolutionized the way we manage our inventory. The real-time tracking feature has saved us countless hours.&quot;</p>
            <strong>— Jane Doe, ABC Corp</strong>
          </div>
          <div className="testimonial-item">
            <p>&quot;The automated stock replenishment feature is a game-changer. We never have to worry about running out of stock.&quot;</p>
            <strong>— John Smith, XYZ Enterprises</strong>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Start Managing Your Inventory Like a Pro</h2>
        <p>Sign up today and take control of your inventory with InventoryPro. Join thousands of businesses who trust us with their inventory management needs.</p>
        <Link to="/register" className="btn cta-btn">Sign Up Now</Link>
      </section>
    </div>
  );
};

export default Homepage;
