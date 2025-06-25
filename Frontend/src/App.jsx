import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import AdminDashboard from './pages/AdminDashboard';


// You will add admin later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        {/* Add admin routes later */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



