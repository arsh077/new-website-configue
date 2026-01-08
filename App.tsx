import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { StoreProvider } from './context/StoreContext';
import Layout from './components/Layout';
import AdminLayout from './pages/admin/AdminLayout';

// Pages
import Home from './pages/Home';
import Animals from './pages/Animals';
import Shop from './pages/Shop';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Donate from './pages/Donate';

// Admin Pages
import Dashboard from './pages/admin/Dashboard';
import Leads from './pages/admin/Leads';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/animals" element={<Animals />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-involved" element={<Donate />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/events" element={<div className="p-20 text-center text-stone-500">Events Calendar Coming Soon</div>} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="leads" element={<Leads />} />
              <Route path="*" element={<div className="p-8">Page under construction</div>} />
            </Route>
          </Routes>
        </Layout>
      </Router>
    </StoreProvider>
  );
};

export default App;