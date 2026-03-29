import { useEffect, useState } from "react";
import { Timer, Zap } from "lucide-react";

export default function AnnouncementBar() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="bg-gradient-to-r from-purple-600 via-primary to-purple-700 text-white py-2 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm font-medium relative z-10">
        <div className="flex items-center gap-2 animate-pulse">
          <Zap className="w-4 h-4 text-yellow-300 fill-yellow-300" />
          <span className="font-bold text-yellow-300">عرض الإطلاق</span>
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs backdrop-blur-sm">خصم 50%</span>
        </div>
        
        <div className="hidden sm:block w-px h-4 bg-white/30"></div>
        
        <div className="flex items-center gap-2 font-mono tracking-wider" dir="ltr">
          <Timer className="w-4 h-4" />
          <span>
            {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
          </span>
        </div>
        
        <div className="hidden sm:block w-px h-4 bg-white/30"></div>
        
        <button className="hover:underline font-bold text-white transition-all hover:text-yellow-200">
          احجز الآن &larr;
        </button>
      </div>
    </div>
  );
}
