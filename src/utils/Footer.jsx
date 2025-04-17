import { useAuth } from './AuthContext';

const Footer = () => {
  const { isAdmin } = useAuth();
  return (
      <footer className={`w-full p-6 text-lg text-center ${isAdmin ? 'bg-gray-200 text-black' : 'bg-blue-800 text-white'}`}>

      {isAdmin ? 'Admin Panel Footer' : 'Visitor Site Footer'}
    </footer>
  );
};

export default Footer;
