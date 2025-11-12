import { SiReact, SiAngular, SiVuedotjs, SiNodedotjs, SiPython, SiGo, SiPostgresql, SiMongodb, SiAmazonwebservices, SiDocker, SiKubernetes } from "react-icons/si";
import { Code2 } from "lucide-react";

export default function TechStack() {
  const technologies = [
    { category: "Frontend", items: [
      { name: "React", icon: SiReact },
      { name: "Angular", icon: SiAngular },
      { name: "Vue.js", icon: SiVuedotjs },
    ]},
    { category: "Backend", items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
      { name: "Java", icon: Code2 },
      { name: "Go", icon: SiGo },
    ]},
    { category: "Database", items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ]},
    { category: "Cloud & DevOps", items: [
      { name: "AWS", icon: SiAmazonwebservices },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ]},
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-tech-heading">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-tech-description">
            We work with modern, proven technologies to build scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((category, catIndex) => (
            <div key={catIndex}>
              <h3 className="text-sm font-mono font-semibold text-muted-foreground mb-4" data-testid={`text-tech-category-${catIndex}`}>
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-3 p-3 rounded-md hover-elevate transition-all duration-300"
                    data-testid={`item-tech-${catIndex}-${techIndex}`}
                  >
                    <tech.icon className="h-6 w-6 text-primary" />
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
