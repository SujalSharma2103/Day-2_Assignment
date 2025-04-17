import { useAuth } from '../utils/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const { setIsAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAdmin(false);
    navigate('/');
  }, [setIsAdmin, navigate]);

  return null;
};

export default AdminLogout;