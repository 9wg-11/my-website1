import { Users, Smartphone, Clock, Globe, Shield, Zap } from "lucide-react";

const reasons = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "دعم احترافي للعملاء",
    subtitle: "مساعدة دائمة",
    description: "الوصول لطلبات وحجوزات عملاءك بسهولة. واتساب وطلبات وكل اللي تحتاجه للتواصل المباشر.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "متجاوب 100%",
    subtitle: "على الأجهزة",
    description: "عملاؤك يتصفحون من الجوال؟ موقعك يشتغل بشكل مثالي على كل شاشة وجهاز.",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "تسليم سريع",
    subtitle: "72 ساعة",
    description: "موقعك يكون جاهز خلال 3 أيام بس. نعمل بسرعة عالية مع تصميم احترافي بالكامل.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "عربي والإنجليزي",
    subtitle: "لغتين",
    description: "وصّل لعملاء أكثر بموقع يدعم العربية والإنجليزية. شامل ودعم كامل لكلا اللغتين.",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "آمن وموثوق",
    subtitle: "SSL مجاني",
    description: "شهادة أمان مجانية تحمي بيانات عملاءك. موقعك آمن تماماً وموثوق من اليوم الأول.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "سريع التحميل",
    subtitle: "أداء عالي",
    description: "موقع بطيء = عملاء ضايعين. نبني مواقع سريعة تحافظ على اهتمام زوارك دائماً.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-24 relative" id="why-choose">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            اختيار ذكي لعملك
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            ليش <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">تختار موقع؟</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            توفر عليك تكاليف الوكالات وصداع التعامل مع المطورين
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-8 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary group-hover:from-primary/50 group-hover:to-primary/20 transition-all duration-300 border border-primary/20 group-hover:border-primary/40">
                  {reason.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                  <span className="text-xs font-bold text-primary/70">{reason.subtitle}</span>
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
