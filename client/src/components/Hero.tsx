import { Button } from "@/components/ui/button";
import { ArrowDown, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16 pb-32">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse delay-1000"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <Sparkles className="w-4 h-4" />
          <span>بدون وكالات مكلفة • بدون صداع المطورين</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          الموقع اللي <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-400 to-primary bg-[length:200%_auto] animate-gradient">تبيه</span>.<br />
          بدون وقت <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">التطوير</span>.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400 leading-relaxed">
          سواء كنت مستقل، صاحب عمل، أو مقدم خدمات — احصل على موقع احترافي خلال 
          <span className="text-primary font-bold mx-1">72 ساعة فقط</span>. 
          بالعربي والإنجليزي، وجاهز يجيب لك عملاء.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
          <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(0,242,255,0.4)] hover:shadow-[0_0_50px_rgba(0,242,255,0.6)] transition-all duration-300 transform hover:-translate-y-1">
            ابدأ موقعك الآن <ArrowDown className="mr-2 w-5 h-5 animate-bounce" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary backdrop-blur-sm">
            شوف أعمالنا
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-800">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>تسليم خلال 72 ساعة</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>دعم عربي كامل</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span>أسعار تنافسية</span>
          </div>
        </div>

        {/* Browser Mockup */}
        <div className="mt-16 relative w-full max-w-5xl mx-auto perspective-1000 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-1000">
          <div className="relative rounded-xl border border-white/10 bg-background/50 backdrop-blur-xl shadow-2xl overflow-hidden transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out group">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/40">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center">
                <div className="inline-block px-3 py-0.5 rounded-md bg-white/5 text-xs text-muted-foreground font-mono">
                  yourwebsite.com
                </div>
              </div>
            </div>
            <div className="aspect-video bg-black/80 relative overflow-hidden group-hover:bg-black/60 transition-colors">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 rounded-full bg-primary shadow-[0_0_20px_rgba(0,242,255,0.8)]"></div>
                  </div>
                  <div className="h-4 w-48 bg-white/10 rounded mx-auto"></div>
                  <div className="h-4 w-32 bg-white/10 rounded mx-auto"></div>
                </div>
              </div>
              
              {/* Floating Elements inside mockup */}
              <div className="absolute top-10 left-10 w-24 h-32 bg-white/5 rounded border border-white/10 backdrop-blur-md animate-float"></div>
              <div className="absolute bottom-10 right-10 w-48 h-24 bg-white/5 rounded border border-white/10 backdrop-blur-md animate-float delay-500"></div>
            </div>
          </div>
          
          {/* Glow behind mockup */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-[3rem] opacity-50"></div>
        </div>
      </div>
    </section>
  );
}
