import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorksSection from "@/components/HowItWorksSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import BonusSection from "@/components/BonusSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationData, setNotificationData] = useState({ name: "", city: "", time: "" });

  // Simulate live notifications
  useEffect(() => {
    const names = ["سارة", "محمد", "نورة", "عبدالله", "فاطمة", "خالد"];
    const cities = ["الرياض", "جدة", "الدمام", "مكة", "المدينة", "الخبر"];
    
    const interval = setInterval(() => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      const randomTime = Math.floor(Math.random() * 59) + 1;
      
      setNotificationData({
        name: randomName,
        city: randomCity,
        time: `منذ ${randomTime} دقيقة`
      });
      
      setShowNotification(true);
      
      setTimeout(() => {
        setShowNotification(false);
      }, 5000);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
      <AnnouncementBar />
      <Navbar />
      
      <main>
        <Hero />
        <QuizSection />
        <PricingSection />
        <PortfolioSection />
        <FeaturesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <BonusSection />
      </main>

      <Footer />

      {/* Live Notification Toast */}
      <AnimatePresence>
        {showNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: -50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: -50 }}
            className="fixed bottom-4 left-4 z-50 bg-card/80 backdrop-blur-md border border-primary/20 p-4 rounded-xl shadow-2xl flex items-center gap-4 max-w-xs"
          >
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-lg border border-primary/30">
              👤
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                {notificationData.name} <span className="text-muted-foreground font-normal text-xs">• {notificationData.city}</span>
              </p>
              <p className="text-xs text-primary">حجزت الباقة الاحترافية</p>
              <p className="text-[10px] text-muted-foreground mt-1">{notificationData.time}</p>
            </div>
            <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
