import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { useState } from 'react';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const { setIsAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      setIsAdmin(true);
      navigate('/admin/dashboard');
    } else {
      alert('Invalid password!');
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 text-lg">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <input
        type="password"
        placeholder="Enter Admin Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-3 w-full max-w-md"
      />
      <button type="submit" className="bg-blue-600 text-white p-3">Login</button>
    </form>
  );
};

export default AdminLogin;