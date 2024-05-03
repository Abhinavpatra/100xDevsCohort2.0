import React from 'react';
import { BrowserRouter, useNavigate, Routes, Route, Link } from 'react-router-dom';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Random from './components/Random'

export default function App2() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/randomstuff" element={<Random />} />

      </Routes>
    </BrowserRouter>
  );
};

function Navigation() {
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate('/dashboard');
  }

  function toRandomPage() {
    navigate('/randomstuff')
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button onClick={navigateToDashboard}>Go to Dashboard</button>
          <button onClick={toRandomPage}>Go to anything</button>

        </li>
      </ul>
    </nav>
  );
}
