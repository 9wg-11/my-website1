import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [, setLocation] = useLocation();

  const handleChangeCountry = () => {
    localStorage.removeItem("selectedCountry");
    setLocation("/");
  };

  const navLinks = [
    { name: "أعمالنا", href: "#portfolio" },
    { name: "لماذا واجهة", href: "#features" },
    { name: "كيف نعمل", href: "#how-it-works" },
    { name: "آراء العملاء", href: "#testimonials" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" asChild>
            <a className="flex items-center gap-2 font-bold text-2xl tracking-tighter text-primary hover:text-primary/80 transition-colors">
              <span className="text-3xl">واجهة</span>
            </a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-primary flex items-center gap-2"
            onClick={handleChangeCountry}
          >
            <Globe className="w-4 h-4" />
            تغيير الدولة
          </Button>
          <Button variant="ghost" className="text-muted-foreground hover:text-primary">
            تسجيل الدخول
          </Button>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_15px_rgba(0,242,255,0.3)] hover:shadow-[0_0_25px_rgba(0,242,255,0.5)] transition-all">
            ابدأ الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-muted-foreground hover:text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-background p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary py-2 border-b border-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-primary flex items-center gap-2"
              onClick={handleChangeCountry}
            >
              <Globe className="w-4 h-4" />
              تغيير الدولة
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              تسجيل الدخول
            </Button>
            <Button className="w-full bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,242,255,0.3)]">
              ابدأ الآن
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
