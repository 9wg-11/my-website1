import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "سارة المنصور",
    role: "مصممة مستقلة",
    content: "كنت أدفع مبالغ كبيرة للوكالات بدون نتيجة. موقع سووا لي موقع احترافي بسعر معقول وخلال ٣ أيام بس. الآن عندي عملاء جدد كل أسبوع!",
    avatar: "👩‍💻",
  },
  {
    name: "عبدالله الراشد",
    role: "مستشار أعمال",
    content: "تعبت من التعامل مع المطورين والتأخير. فريق موقع فهموا احتياجاتي من أول مرة والموقع طلع أحسن من توقعاتي.",
    avatar: "👨‍💼",
  },
  {
    name: "نورة السلمان",
    role: "صاحبة صالون",
    content: "الحين عميلاتي يقدرون يحجزون مواعيد أونلاين. وفر علي وقت كثير وزادت حجوزاتي ٥٠٪ خلال شهر واحد.",
    avatar: "💇‍♀️",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative" id="testimonials">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">آراء عملائنا</span>
          <h2 className="text-4xl md:text-5xl font-bold">اللي جربوا يحكون</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            قصص نجاح حقيقية من عملاء راضين
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="p-8 rounded-2xl bg-card/30 border border-white/5 relative group hover:bg-card/50 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6 group-hover:text-primary/40 transition-colors" />
              
              <p className="text-lg leading-relaxed mb-8 relative z-10 text-right direction-rtl" dir="rtl">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4" dir="rtl">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl border border-white/10">
                  {testimonial.avatar}
                </div>
                <div className="text-right flex-1">
                  <div className="flex items-center gap-2 justify-end mb-1">
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex gap-1 text-yellow-400">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-white">100+</div>
            <div className="text-muted-foreground text-sm">موقع مُسلَّم</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-white">72h</div>
            <div className="text-muted-foreground text-sm">متوسط التسليم</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-white">98%</div>
            <div className="text-muted-foreground text-sm">رضا العملاء</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-white">24/7</div>
            <div className="text-muted-foreground text-sm">دعم فني</div>
          </div>
        </div>
      </div>
    </section>
  );
}
