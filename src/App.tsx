import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import SignupPage from './components/pages/SignupPage';
import Dashboard from './components/pages/Dashboard';
import DoctorPage from './components/pages/DoctorPage';
import SchedulePage from './components/pages/SchedulePage';
import HistoryPage from './components/pages/HistoryPage';
import ProfilePage from './components/pages/ProfilePage';
import HealthTipsPage from './components/pages/HealthTipsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-inter">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/doctors" element={<DoctorPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/health-tips" element={<HealthTipsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;