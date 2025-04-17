import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './utils/AuthContext';

const App = () => (
  <Router>
    <AuthProvider>
      <div className="text-base min-h-screen">
        <AppRoutes />
      </div>
    </AuthProvider>
  </Router>
);

export default App;
