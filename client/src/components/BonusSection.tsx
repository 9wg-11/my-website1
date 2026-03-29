import { Button } from "@/components/ui/button";
import { Zap, Calendar } from "lucide-react";

export default function BonusSection() {
  return (
    <section className="py-24 relative overflow-hidden" dir="rtl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-purple-600 via-indigo-600 to-teal-600 -z-10"></div>
      
      {/* Animated Background Glow Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/20 rounded-full blur-3xl -z-10"></div>
      
      {/* Additional Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl -z-10"></div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl -z-10"></div>

      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>عرض محدود</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              وهذا مو كل شي...{" "}
              <span className="text-pink-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.5)]">
                هدايا مجانية؟
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              الأول ٢٠ عميل هذا الشهر، مكافآت إضافية بقيمة ٥٠٠ ريال
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Professional Email Card */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="text-3xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">بريد إلكتروني احترافي</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    يعطي انطباع احترافي
                  </p>
                  <p className="text-pink-300 font-mono text-sm mt-2">email@yoursite.com</p>
                </div>
              </div>
            </div>

            {/* Free WhatsApp Button Card */}
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                  <span className="text-3xl">💬</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">زر واتساب مجاني</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    تواصل مباشر مع عملاءك بضغطة زر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center space-y-4">
            <Button 
              className="group px-8 py-6 text-lg font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto"
              style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
            >
              <Calendar className="w-5 h-5" />
              احجز مكانك الآن
            </Button>
            
            <p className="text-white/80 text-sm">
              متبقي ٨ أماكن فقط هذا الشهر
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

