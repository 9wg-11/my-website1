import { Clock, Smartphone, MessageSquare, Zap, ShieldCheck, Globe } from "lucide-react";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "تسليم سريع",
    subtitle: "72 ساعة",
    description: "وقتك ثمين. موقعك يكون جاهز خلال 3 أيام بس، مع تصميم احترافي يليق بعملك.",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-purple-400" />,
    title: "متجاوب 100%",
    subtitle: "كل الأجهزة",
    description: "عملاءك يتصفحون من الجوال؟ موقعك يشتغل بشكل مثالي على كل شاشة.",
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-green-400" />,
    title: "جاهز لجذب العملاء",
    subtitle: "نماذج تواصل",
    description: "أزرار واتساب، نماذج طلبات، وكل اللي تحتاجه عشان تحول الزوار لعملاء.",
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    title: "سريع التحميل",
    subtitle: "أداء عالي",
    description: "موقع بطيء = عملاء ضايعين. نبني مواقع سريعة تحافظ على اهتمام زوارك.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-blue-400" />,
    title: "آمن وموثوق",
    subtitle: "SSL مجاني",
    description: "شهادة أمان مجانية تحمي بيانات عملاءك وتعزز ثقتهم فيك.",
  },
  {
    icon: <Globe className="w-8 h-8 text-pink-400" />,
    title: "عربي وإنجليزي",
    subtitle: "لغتين",
    description: "وصّل لعملاء أكثر بموقع يدعم العربية والإنجليزية.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent -z-10"></div>
      
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">يشتغل بشكل مثالي مع أعمالك</span>
          <h2 className="text-4xl md:text-5xl font-bold">ليش تختار واجهة ؟</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نوفر عليك تكاليف الوكالات وصداع التعامل مع المطورين
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-primary/30">
                  {feature.icon}
                </div>
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <span className="text-xs font-bold px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/10">
                  {feature.subtitle}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
