import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import founderImage from "@assets/generated_images/Founder_professional_headshot_c3ef6fd6.png";

export default function TeamSection() {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      bio: "15+ years in tech, former Engineering Director at major SaaS companies",
      image: founderImage,
      linkedin: "#",
    },
    {
      name: "Sarah Johnson",
      role: "Co-Founder & CTO",
      bio: "Tech lead with expertise in building distributed systems at scale",
      image: null,
      linkedin: "#",
    },
    {
      name: "Raj Patel",
      role: "VP of Engineering",
      bio: "10+ years managing offshore teams, passionate about quality code",
      image: null,
      linkedin: "#",
    },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-team-heading">
            Meet Our Leadership
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-team-description">
            Experienced tech leaders committed to delivering exceptional engineering talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-team-${index}`}>
              <CardContent className="pt-8 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  {member.image ? (
                    <AvatarImage src={member.image} alt={member.name} />
                  ) : null}
                  <AvatarFallback className="text-lg bg-primary/10 text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1" data-testid={`text-team-name-${index}`}>{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3" data-testid={`text-team-role-${index}`}>{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid={`text-team-bio-${index}`}>
                  {member.bio}
                </p>
                <a
                  href={member.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid={`link-team-linkedin-${index}`}
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
