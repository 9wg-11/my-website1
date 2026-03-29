import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, Check, Phone, Gift, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const questions = [
  {
    id: 1,
    question: "وش نوع نشاطك؟",
    subtitle: "اختر اللي يناسبك عشان نقدر نفهم احتياجاتك",
    options: [
      { id: "freelancer", label: "مستقل / فريلانسر", icon: "👨‍💻" },
      { id: "business", label: "صاحب عمل صغير", icon: "🏢" },
      { id: "service", label: "مقدم خدمات (استشارات، تدريب)", icon: "🤝" },
      { id: "clinic", label: "صالون / عيادة / مطعم", icon: "🏪" },
      { id: "other", label: "أخرى", icon: "✨" },
    ],
  },
  {
    id: 2,
    question: "وش هدفك الرئيسي من الموقع؟",
    subtitle: "عشان نركز على اللي يهمك",
    options: [
      { id: "sales", label: "زيادة المبيعات", icon: "💰" },
      { id: "booking", label: "حجز مواعيد", icon: "📅" },
      { id: "portfolio", label: "عرض أعمالي", icon: "🎨" },
      { id: "info", label: "تعريف بالخدمات", icon: "ℹ️" },
    ],
  },
  {
    id: 3,
    question: "عندك هوية بصرية (لوقو وألوان)؟",
    subtitle: "عشان نعرف من وين نبدأ",
    options: [
      { id: "yes", label: "ايه، جاهزة", icon: "✅" },
      { id: "partial", label: "عندي لوقو بس", icon: "⚠️" },
      { id: "no", label: "لا، أحتاج مساعدة فيها", icon: "❌" },
    ],
  },
  {
    id: 4,
    question: "متى تبي تبدأ؟",
    subtitle: "عشان نجدول العمل",
    options: [
      { id: "now", label: "الآن فوراً", icon: "🔥" },
      { id: "week", label: "خلال أسبوع", icon: "📅" },
      { id: "month", label: "خلال شهر", icon: "🗓️" },
    ],
  },
];

function buildQuizSummary(
  quizAnswers: Record<number, string>
): string {
  return questions
    .map((q, stepIndex) => {
      const optionId = quizAnswers[stepIndex];
      const option = q.options.find((o) => o.id === optionId);
      return `${q.question}: ${option?.label ?? optionId ?? "—"}`;
    })
    .join("\n");
}

/** نوع النشاط = نص الخيار المختار للسؤال الأول (وش نوع نشاطك؟) */
function getActivityLabel(quizAnswers: Record<number, string>): string {
  const q0 = questions[0];
  const selectedId = quizAnswers[0];
  if (!q0 || !selectedId) return "—";
  const option = q0.options.find((o) => o.id === selectedId);
  return option?.label ?? String(selectedId);
}

/** نص واحد فيه كل الطلب — يُعرض في القالب عبر {{message}} أو {{text}} */
function buildFullRequestBody(args: {
  name: string;
  email: string;
  phone: string;
  prefer_whatsapp: string;
  quiz_summary: string;
  activity: string;
}): string {
  return [
    "— طلب جديد من الموقع —",
    "",
    `الاسم: ${args.name}`,
    `البريد الإلكتروني: ${args.email}`,
    `رقم الواتساب: ${args.phone}`,
    `يفضل التواصل عبر واتساب: ${args.prefer_whatsapp}`,
    `نوع النشاط: ${args.activity}`,
    "",
    "تفاصيل الاستبيان:",
    args.quiz_summary,
  ].join("\n");
}

/**
 * حقول لـ EmailJS: أسماؤك المخصّصة + أسماء شائعة في القوالب الجاهزة (from_name, message).
 * إن كان القالب الافتراضي يعرض سطرًا واحدًا فقط، أضف في لوحة EmailJS داخل نص الرسالة: {{message}}
 */
function buildEmailJSTemplateParams(args: {
  name: string;
  email: string;
  phone: string;
  prefer_whatsapp: string;
  quiz_summary: string;
  activity: string;
  to_email: string;
}): Record<string, string> {
  const message = buildFullRequestBody(args);
  const fromEmail = args.email !== "—" && args.email.trim() !== "" ? args.email : "";

  return {
    name: args.name,
    email: args.email,
    phone: args.phone,
    prefer_whatsapp: args.prefer_whatsapp,
    quiz_summary: args.quiz_summary,
    activity: args.activity,
    message,
    text: message,
    user_message: message,
    content: message,
    body: message,
    from_name: args.name,
    from_email: fromEmail,
    reply_to: fromEmail || args.phone,
    to_email: args.to_email,
  };
}

function validateQuizContact(values: {
  name: string;
  whatsapp: string;
  email: string;
}): string | null {
  const name = values.name.trim();
  if (name.length < 2) {
    return "الرجاء إدخال الاسم (حرفين على الأقل).";
  }
  const digits = values.whatsapp.replace(/\D/g, "");
  if (digits.length < 8) {
    return "الرجاء إدخال رقم واتساب صحيح.";
  }
  const email = values.email.trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "الرجاء إدخال بريد إلكتروني صالح أو تركه فارغاً.";
  }
  return null;
}

async function sendQuizViaEmailJS(templateParams: Record<string, string>) {
  const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "").trim();
  const templateId = String(
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ""
  ).trim();
  const publicKey = String(
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ""
  ).trim();

  console.log("[EmailJS] import.meta.env (Vite)", {
    VITE_EMAILJS_SERVICE_ID: serviceId || undefined,
    VITE_EMAILJS_TEMPLATE_ID: templateId || undefined,
    VITE_EMAILJS_PUBLIC_KEY: publicKey ? "(مُعرّف)" : undefined,
  });
  console.log("[EmailJS] templateParams (قبل الإرسال)", templateParams);

  if (!serviceId || !templateId || !publicKey) {
    throw new Error(
      "إعدادات الإيميل غير مكتملة. أضف VITE_EMAILJS_SERVICE_ID و VITE_EMAILJS_TEMPLATE_ID و VITE_EMAILJS_PUBLIC_KEY في .env ثم أعد تشغيل التطبيق."
    );
  }

  await emailjs.send(serviceId, templateId, templateParams, {
    publicKey: publicKey,
  });
}

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    whatsapp: "",
    email: "",
    preferWhatsApp: true,
  });

  const handleOptionSelect = (optionId: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: optionId }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    const validationError = validateQuizContact(contactForm);
    if (validationError) {
      toast.error(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const name = contactForm.name.trim();
      const phone = contactForm.whatsapp.trim();
      const emailInput = contactForm.email.trim();
      const quiz_summary = buildQuizSummary(answers);
      const activity = getActivityLabel(answers);
      const prefer_whatsapp = contactForm.preferWhatsApp ? "نعم" : "لا";
      const email = emailInput.length > 0 ? emailInput : "—";
      const to_email =
        String(import.meta.env.VITE_CONTACT_EMAIL ?? "").trim() ||
        "Bassamas101@gmail.com";

      const templateParams = buildEmailJSTemplateParams({
        name,
        email,
        phone,
        prefer_whatsapp,
        quiz_summary,
        activity,
        to_email,
      });

      console.log("[QuizSection] state قبل الإرسال", {
        answers,
        contactForm,
        derived: { quiz_summary, activity },
      });
      console.log("[QuizSection] قيم إرسال EmailJS (نهائية)", templateParams);

      await sendQuizViaEmailJS(templateParams);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    } catch (e) {
      console.error("[QuizSection] فشل إرسال EmailJS", e);
      const message =
        e instanceof Error ? e.message : "تعذر إرسال النموذج. حاول مرة أخرى.";
      toast.error(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;
  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const isNextDisabled =
    isSubmitting ||
    (!isLastStep
      ? !answers[currentStep]
      : !contactForm.name || !contactForm.whatsapp);

  return (
    <section id="quiz-section" className="py-24 relative overflow-hidden">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="mb-8 flex items-center justify-between text-sm text-muted-foreground">
          <span>السؤال {currentStep + 1} من {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        
        <Progress value={progress} className="h-2 mb-12 bg-secondary" />

        <div className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>
          
          <div className="relative z-10">
            {!isLastStep ? (
              <>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center animate-in fade-in slide-in-from-bottom-4">
                  {currentQuestion.question}
                </h2>
                <p className="text-muted-foreground text-center mb-8 animate-in fade-in slide-in-from-bottom-4 delay-100">
                  {currentQuestion.subtitle}
                </p>

                <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-8 delay-200">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-right group/btn",
                        answers[currentStep] === option.id
                          ? "border-primary bg-primary/10 shadow-[0_0_15px_rgba(0,242,255,0.2)]"
                          : "border-white/10 hover:border-primary/50 hover:bg-white/5"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{option.icon}</span>
                        <span className={cn(
                          "font-medium text-lg transition-colors",
                          answers[currentStep] === option.id ? "text-primary" : "text-foreground"
                        )}>
                          {option.label}
                        </span>
                      </div>
                      <div className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                        answers[currentStep] === option.id
                          ? "border-primary bg-primary text-black"
                          : "border-muted-foreground/30 group-hover/btn:border-primary/50"
                      )}>
                        {answers[currentStep] === option.id && <Check className="w-4 h-4" />}
                      </div>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4" dir="rtl">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center gap-2 text-3xl md:text-4xl font-bold mb-2">
                    <Phone className="w-8 h-8 text-primary" />
                    <h2>خلنا نتواصل معك!</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">
                    أدخل معلوماتك وراح نتواصل معك خلال ساعات
                  </p>
                </div>

                {/* Discount Banner */}
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center gap-3 text-green-400">
                  <Gift className="w-5 h-5" />
                  <span className="font-medium">خصم ٥٠٪ ساري لأول ٢٤ ساعة</span>
                </div>

                {/* Contact Form */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-right">الاسم </Label>
                    <Input
                      id="name"
                      placeholder="اسمك الكريم"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="text-right"
                      dir="rtl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="whatsapp" className="text-right">رقم الواتساب </Label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="05XXXXXXXX"
                      value={contactForm.whatsapp}
                      onChange={(e) => setContactForm({ ...contactForm, whatsapp: e.target.value })}
                      className="text-right"
                      dir="rtl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-right">البريد الإلكتروني </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="text-right"
                      dir="rtl"
                    />
                  </div>

                  <button
                    onClick={() => setContactForm({ ...contactForm, preferWhatsApp: !contactForm.preferWhatsApp })}
                    className={cn(
                      "w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-200 text-right",
                      contactForm.preferWhatsApp
                        ? "border-green-500/50 bg-green-500/10"
                        : "border-white/10 hover:border-white/20"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💬</span>
                      <span className="font-medium">أفضل التواصل عبر واتساب</span>
                    </div>
                    {contactForm.preferWhatsApp && (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    )}
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-12 pt-8 border-t border-white/10">
              <Button
                variant="ghost"
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowRight className="ml-2 w-4 h-4" /> السابق
              </Button>
              
              <Button
                onClick={isLastStep ? handleSubmit : handleNext}
                disabled={isNextDisabled}
                className={cn(
                  "bg-primary text-primary-foreground hover:bg-primary/90 transition-all",
                  isNextDisabled && "opacity-50 cursor-not-allowed"
                )}
              >
                {isLastStep ? "إرسال" : "التالي"} <ArrowLeft className="mr-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
