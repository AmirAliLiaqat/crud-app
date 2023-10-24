import { Routes, Route, } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/account/Register';
import Dashboard from './components/pages/Dashboard';
import Error from './components/pages/Error';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
