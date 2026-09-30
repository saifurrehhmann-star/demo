import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingModal from './components/BookingModal';
import MotionEffects from './components/MotionEffects';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HolidayHomesPage from './pages/HolidayHomesPage';
import PricingPage from './pages/PricingPage';
import TransformationsPage from './pages/TransformationsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import FaqPage from './pages/FaqPage';
import AreasPage from './pages/AreasPage';
import BlogArticlePage from './pages/BlogArticlePage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefillBookingData, setPrefillBookingData] = useState(null);
  const [bookingInstance, setBookingInstance] = useState(0);

  const handleOpenBooking = (data = null) => {
    setPrefillBookingData(data);
    setBookingInstance((instance) => instance + 1);
    setIsBookingOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <MotionEffects />
      <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-[#29945a] selection:text-white">
        {/* Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services/:slug" element={<ServiceDetailPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/holiday-homes" element={<HolidayHomesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/calculator" element={<PricingPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/transformations" element={<TransformationsPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/areas" element={<AreasPage onOpenBooking={handleOpenBooking} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenBooking={handleOpenBooking} />

        {/* 24/7 Floating WhatsApp Concierge Widget */}
        <FloatingWhatsApp />

        {/* VIP Booking Modal */}
        <BookingModal 
          key={bookingInstance}
          isOpen={isBookingOpen} 
          onClose={() => setIsBookingOpen(false)} 
          prefillData={prefillBookingData} 
        />
      </div>
    </BrowserRouter>
  );
}
