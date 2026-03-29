import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 -z-10"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10"></div>

      <div className="container px-4 mx-auto">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
            <span className="text-white text-sm font-medium">🚀 ابدأ الآن</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
            جاهز <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">تبدأ</span> موقعك الاحترافي؟
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            أجب على 5 أسئلة بسيطة وخذ عرض مخصص لك مباشرة
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <Button className="group px-8 py-6 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{ backgroundColor: '#8e1fc1', color: '#fafafa' }}>
              ابدأ الآن
              <ArrowLeft className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
