import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function CountrySelector() {
  const [, setLocation] = useLocation();

  const handleCountrySelect = (country: string) => {
    // Store selected country in localStorage
    localStorage.setItem("selectedCountry", country);
    // Navigate to home page
    setLocation("/home");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <motion.div
        className="container px-4 mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Header */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">
              اختر <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-pink-500">دولتك</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              اختر الدولة لتحصل على أفضل خدمة مخصصة لك
            </p>
          </motion.div>

          {/* Country Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* Saudi Arabia Card */}
            <motion.button
              onClick={() => handleCountrySelect("sa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/sa.svg" alt="Saudi Arabia" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">السعودية</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>

            {/* Kuwait Card */}
            <motion.button
              onClick={() => handleCountrySelect("kw")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/kw.svg" alt="Kuwait" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">الكويت</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>

            {/* UAE Card */}
            <motion.button
              onClick={() => handleCountrySelect("ae")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/ae.svg" alt="UAE" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">الإمارات</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>

            {/* Bahrain Card */}
            <motion.button
              onClick={() => handleCountrySelect("bh")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/bh.svg" alt="Bahrain" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">البحرين</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>

            {/* Qatar Card */}
            <motion.button
              onClick={() => handleCountrySelect("qa")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/qa.svg" alt="Qatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">قطر</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>

            {/* Oman Card */}
            <motion.button
              onClick={() => handleCountrySelect("om")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="group relative p-6 rounded-2xl bg-card/30 border border-white/10 hover:bg-card/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Glow Background */}
              <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              <div className="space-y-3">
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden border border-white/20">
                  <img src="/flags/om.svg" alt="Oman" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">عمان</h3>
                  <p className="text-xs text-muted-foreground">
                    خدمات مخصصة
                  </p>
                </div>
              </div>
            </motion.button>
          </motion.div>

          {/* Footer Text */}
          <motion.p variants={itemVariants} className="text-sm text-muted-foreground">
            يمكنك تغيير اختيارك في أي وقت من إعدادات الموقع
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}
