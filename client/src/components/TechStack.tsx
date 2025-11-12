import { SiReact, SiAngular, SiVuedotjs, SiNodedotjs, SiPython, SiJavascript, SiTypescript, SiGo, SiPytorch, SiTensorflow, SiPostgresql, SiMongodb, SiRedis, SiAmazonwebservices, SiGooglecloud, SiDocker, SiKubernetes } from "react-icons/si";
import { Cloud } from "lucide-react";

export default function TechStack() {
  const technologies = [
    { category: "Frontend", items: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "TypeScript", icon: SiTypescript },
    ]},
    { category: "Backend", items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Go", icon: SiGo },
    ]},
    { category: "AI/ML", items: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Python", icon: SiPython },
    ]},
    { category: "Databases", items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ]},
    { category: "Cloud Platforms", items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Azure", icon: Cloud },
    ]},
    { category: "DevOps", items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: SiAmazonwebservices },
    ]},
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-tech-heading">
            Technology Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-description">
            From AI/ML to cloud infrastructure - we master the complete tech ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {technologies.map((category, catIndex) => (
            <div key={catIndex} className="glass-card p-6 rounded-lg">
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest mb-6 text-muted-foreground" data-testid={`text-tech-category-${catIndex}`}>
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-all duration-300 group"
                    data-testid={`item-tech-${catIndex}-${techIndex}`}
                  >
                    <tech.icon className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
