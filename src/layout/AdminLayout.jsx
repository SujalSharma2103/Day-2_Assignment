import { Outlet } from 'react-router-dom';
import Navbar from '../utils/Navbar';
import Footer from '../utils/Footer';

const AdminLayout = () => (
    <div className="flex flex-col min-h-screen w-full bg-black">
      <Navbar />
      <main className="flex-grow w-full px-6 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
export default AdminLayout;