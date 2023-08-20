import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home'

import './App.css';

function App() {
  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  );
}

export default App;
