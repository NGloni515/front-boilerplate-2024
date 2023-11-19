import AppProvider from '@/providers/AppProvider';
import { AppRoutes } from '@/routes';
import './App.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
