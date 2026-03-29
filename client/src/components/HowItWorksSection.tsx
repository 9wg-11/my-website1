import { Globe, Send, Monitor } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "أجب على أسئلة بسيطة",
    description: "كم سؤال سريع عن نشاطك وأهدافك. ما نحتاج منك خبرة تقنية.",
    icon: <Monitor className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "أرسل المحتوى",
    description: "شعارك، صورك، والنصوص اللي تبيها. نتكفل بالباقي كله.",
    icon: <Send className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "استلم موقعك",
    description: "خلال 72 ساعة، موقعك الاحترافي يكون جاهز ويستقبل عملاءك.",
    icon: <Globe className="w-8 h-8" />,
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-black/40 relative" id="how-it-works">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-medium tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            عملية بسيطة وسريعة
          </span>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            كيف <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">نشتغل؟</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            ثلاث خطوات بسيطة وموقعك يكون جاهز
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-primary to-transparent"></div>
              )}

              <div className="p-8 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all relative group">
                {/* Step Number */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-black font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-8 mt-4 w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary/30 transition-colors">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
