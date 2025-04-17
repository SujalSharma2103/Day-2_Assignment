import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';

const Navbar = () => {
  const { isAdmin } = useAuth();

  return (
    <nav className={`p-4 ${isAdmin ? 'bg-white text-black' : 'bg-blue-600 text-black'}`}>
      <ul className="flex gap-4">
        {!isAdmin ? (
          <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/admin-login">Admin Login</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/analytics">Analytics</Link></li>
            <li><Link to="/admin/logout">Admin Logout</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;  