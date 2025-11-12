import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import founderImage from "@assets/generated_images/Founder_professional_headshot_c3ef6fd6.png";

export default function TeamSection() {
  const team = [
    {
      name: "Shashank Kumar",
      role: "Founder & CEO",
      bio: "15+ years in AI/ML, former ML Director at Fortune 500. Built production systems serving millions.",
      image: founderImage,
      linkedin: "#",
    },
    {
      name: "Dr. Priya Sharma",
      role: "Head of Data Science",
      bio: "PhD in Machine Learning, 10+ years building predictive models and AI-driven analytics platforms.",
      image: null,
      linkedin: "#",
    },
    {
      name: "Arjun Patel",
      role: "VP of AI Engineering",
      bio: "12+ years deploying LLM systems and autonomous agents. Expert in RAG and agentic workflows.",
      image: null,
      linkedin: "#",
    },
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight" data-testid="text-team-heading">
            Meet Our Leadership
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            AI/ML veterans committed to delivering exceptional talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center card-3d shadow-3d-lg" data-testid={`card-team-${index}`}>
              <CardContent className="pt-12 pb-8">
                <Avatar className="w-32 h-32 mx-auto mb-6 shadow-3d grayscale">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : null}
                  <AvatarFallback className="text-2xl bg-black text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-2xl font-bold mb-2" data-testid={`text-team-name-${index}`}>{member.name}</h3>
                <p className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-4" data-testid={`text-team-role-${index}`}>{member.role}</p>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6" data-testid={`text-team-bio-${index}`}>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
                  data-testid={`link-team-linkedin-${index}`}
                >
                  <Linkedin className="h-4 w-4" />
                  <span>Connect</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
