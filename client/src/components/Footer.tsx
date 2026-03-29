import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-primary">
              <span className="text-3xl">واجهة</span>
              <span className="w-2 h-2 rounded-full bg-primary"></span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed">
              واجهة : منصة لإنشاء مواقع احترافية خلال 72 ساعة. ونساعد المستقلين
              وأصحاب الأعمال الصغيرة على التواجد الرقمي بأفضل صورة.
            </p>

            {/* أيقونات السوشيال */}
            <div className="flex gap-4">
              <a
                href="https://x.com/tq7z_?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>

              <a
                href="https://www.instagram.com/b7_ub?igsh=MW1rNGh2bHhtamNm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href="https://www.linkedin.com/in/bassam-%E2%80%8E-a1873534b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-primary transition-colors"
                >
                  أعمالنا
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-primary transition-colors"
                >
                  الباقات
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-primary transition-colors"
                >
                  المميزات
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">الدعم والمساعدة</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  مركز المساعدة
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  الشروط والأحكام
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  سياسة الخصوصية
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-6">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>المدينة المنورة ، المملكة العربية السعودية</li>
              <li>
                <a
                  href="mailto:Bassamas101@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  Bassamas101@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/966564295871"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  +966 56 429 5871
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} واجهة. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
