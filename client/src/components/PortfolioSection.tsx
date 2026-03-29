import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { name: "الكل", icon: "🌟" },
  { name: "عقارات", icon: "🏠" },
  { name: "متجر", icon: "🛍️" },
  { name: "تسويق", icon: "📊" },
  { name: "مطاعم", icon: "🍽️" },
  { name: "خدمات", icon: "⚙️" },
];

const projects = [
  { name: "Luxury Real Estate", category: "عقارات", image: "/images/project1.jpg" },
  { name: "Style Boutique", category: "متجر", image: "/images/project2.jpg" },
  { name: "InnovateTech Solutions", category: "تسويق", image: "/images/project3.jpg" },
  { name: "Savory Bistro", category: "مطاعم", image: "/images/project4.jpg" },
  { name: "Analytics Pro", category: "خدمات", image: "/images/project5.jpg" },
];

const logos = [
  { name: "Logo 1", src: "/images/logos/Group 1171283133.png" },
  { name: "Logo 2", src: "/images/logos/Group 1171283145.png" },
  { name: "Logo 3", src: "/images/logos/Group 1171283146.png" },
  { name: "Logo 4", src: "/images/logos/Group 1171283147.png" },
  { name: "Logo 5", src: "/images/logos/Group 1171283149.png" },
  { name: "Logo 6", src: "/images/logos/Group 1171283150.png" },
  { name: "Logo 7", src: "/images/logos/Group 1171283151.png" },
  { name: "Logo 8", src: "/images/logos/Group 1171283152.png" },
  { name: "Logo 9", src: "/images/logos/Group 1171283154.png" },
  { name: "Logo 10", src: "/images/logos/Group 1171283155.png" },
  { name: "Logo 11", src: "/images/logos/Group 1171283156.png" },
  { name: "Logo 12", src: "/images/logos/Group 1171283170.png" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [selectedProject, setSelectedProject] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "الكل"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const currentProject = filteredProjects[selectedProject];

  useEffect(() => {
    const interval = setInterval(() => {
      const random = Math.floor(Math.random() * 9);
      setFlippedIndex(random);

      setTimeout(() => setFlippedIndex(null), 900);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-black/20" id="portfolio">
      <div className="container mx-auto px-4">

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant={activeCategory === cat.name ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(cat.name);
                setSelectedProject(0);
              }}
            >
              {cat.icon} {cat.name}
            </Button>
          ))}
        </div>

        {/* Project */}
        {currentProject && (
          <div className="relative max-w-5xl mx-auto mb-24">
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-[420px] object-cover rounded-2xl"
            />

            <div className="absolute inset-0 flex items-center justify-between px-4">
              <Button
                size="icon"
                variant="secondary"
                onClick={() =>
                  setSelectedProject((p) =>
                    p === 0 ? filteredProjects.length - 1 : p - 1
                  )
                }
              >
                <ChevronLeft />
              </Button>

              <Button
                size="icon"
                variant="secondary"
                onClick={() =>
                  setSelectedProject((p) =>
                    p === filteredProjects.length - 1 ? 0 : p + 1
                  )
                }
              >
                <ChevronRight />
              </Button>
            </div>

            <div className="absolute bottom-4 right-4">
              <Button>
                عرض المشروع <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        )}

        {/* ===== Logos Section ===== */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              شعارات عملائنا
            </h3>
            <p className="text-muted-foreground text-sm">
              شركات وثقت بنا
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {logos.slice(0, 9).map((logo, index) => {
              const backLogo = logos[index + 9] || logos[0];

              return (
                <div
                  key={index}
                  className={cn(
                    "logo-flip h-36 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10",
                    flippedIndex === index && "flipped"
                  )}
                >
                  <div className="logo-flip-inner">
                    <div className="logo-face">
                      <img src={logo.src} className="h-16 w-auto" />
                    </div>
                    <div className="logo-face logo-back">
                      <img src={backLogo.src} className="h-16 w-auto" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
