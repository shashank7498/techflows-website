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
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-tech-heading">
            How We Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-description">
            Complete technology expertise across your entire stack
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((category, catIndex) => (
            <div key={catIndex} className="p-6 border rounded-lg">
              <h3 className="text-xs font-semibold uppercase tracking-wider mb-4 text-muted-foreground" data-testid={`text-tech-category-${catIndex}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2"
                    data-testid={`item-tech-${catIndex}-${techIndex}`}
                  >
                    <tech.icon className="h-5 w-5 text-foreground" />
                    <span className="text-sm">{tech.name}</span>
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
