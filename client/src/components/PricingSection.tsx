import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "البداية",
    subtitle: "مثالي للمستقلين والمشاريع الصغيرة",
    price: 500,
    originalPrice: 1000,
    features: [
      "صفحة هبوط احترافية",
      "تصميم متجاوب للجوال",
      "تواصل مباشر مع العملاء",
      "تسليم خلال 3 أيام",
      "دعم فني لمدة أسبوع",
    ],
    highlight: false,
    color: "blue",
  },
  {
    name: "الاحترافي",
    subtitle: "الأكثر طلباً للشركات الناشئة",
    price: 1000,
    originalPrice: 2000,
    features: [
      "موقع متعدد الصفحات",
      "تصميم يعكس هويتك",
      "نماذج تواصل ذكية",
      "سرعة تحميل عالية",
      "تسليم خلال 5 أيام",
      "دعم فني لمدة شهر",
    ],
    highlight: true,
    color: "cyan",
  },
  {
    name: "المتميز",
    subtitle: "للعلامات التجارية الطموحة",
    price: 2000,
    originalPrice: 4000,
    features: [
      "موقع شامل ومتكامل",
      "تصميم حصري لعلامتك",
      "دعم اللغتين العربية والإنجليزية",
      "تجربة مستخدم استثنائية",
      "تسليم خلال 7 أيام",
      "دعم فني لمدة 3 أشهر",
    ],
    highlight: false,
    color: "purple",
  },
];

export default function PricingSection() {
  return (
    <section className="py-24 relative" id="pricing">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">باقات مخفضة</span>
          <h2 className="text-4xl md:text-5xl font-bold">اختر الباقة المناسبة لك</h2>
          <div className="flex items-center justify-center gap-4 text-lg flex-wrap">
            <span className="text-muted-foreground line-through decoration-red-500/50">الأسعار العادية</span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
              خصم 50% لفترة محدودة
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-6 border transition-all duration-300 hover:transform hover:-translate-y-1 flex flex-col",
                plan.highlight
                  ? "bg-gradient-to-b from-primary/15 to-background border-primary shadow-[0_0_30px_rgba(188,19,254,0.2)] md:scale-105 md:z-10"
                  : "bg-card/40 border-white/10 hover:border-white/20 hover:bg-card/60"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-pink-500 text-black font-bold px-4 py-1 rounded-full text-xs flex items-center gap-1 shadow-lg whitespace-nowrap">
                  <Sparkles className="w-3 h-3" /> الأكثر طلباً
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-muted-foreground text-xs h-8 line-clamp-2">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className="text-muted-foreground line-through text-sm mb-1 decoration-red-500/50">
                  {plan.originalPrice} ر.س
                </div>
                <div className="text-4xl font-bold text-white flex items-baseline gap-1">
                  {plan.price}
                  <span className="text-sm font-normal text-muted-foreground">ر.س</span>
                </div>
                <div className="mt-2 text-green-400 text-xs font-bold animate-pulse">
                  وفرت {plan.originalPrice - plan.price} ر.س 🎉
                </div>
              </div>

              <ul className="space-y-2 mb-6 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-xs">
                    <div className={cn(
                      "w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                      plan.highlight ? "bg-primary text-black" : "bg-white/10 text-white"
                    )}>
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={cn(
                  "w-full py-5 text-sm font-bold transition-all",
                  plan.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(188,19,254,0.3)]"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                )}
              >
                ابدأ الآن
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-xs">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            جميع الباقات تشمل: استضافة مجانية لسنة + شهادة SSL + تدريب على إدارة الموقع
          </p>
        </div>
      </div>
    </section>
  );
}
