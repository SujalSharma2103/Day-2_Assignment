import { Routes, Route } from 'react-router-dom';
import VisitorLayout from '../layout/VisitorLayout';
import AdminLayout from '../layout/AdminLayout';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import AdminLogin from '../views/AdminLogin';
import Dashboard from '../views/Dashboard';
import Analytics from '../views/Analytics';
import AdminLogout from '../views/AdminLogout';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<VisitorLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="admin-login" element={<AdminLogin />} />
    </Route>
    <Route
      path="/admin"
      element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}
    >
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="analytics" element={<Analytics />} />
      <Route path="logout" element={<AdminLogout />} />
    </Route>
  </Routes>
);

export default AppRoutes;