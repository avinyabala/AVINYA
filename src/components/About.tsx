import { Users, Calendar, Trophy, Target } from 'lucide-react';
import { Card } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: <Calendar className="w-8 h-8" />,
      value: "2024",
      label: "Founded",
      description: "Years of Excellence"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "25+",
      label: "Team Members",
      description: "Expert Professionals"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      value: "50+",
      label: "Projects",
      description: "Successfully Delivered"
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "98%",
      label: "Success Rate",
      description: "Client Satisfaction"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give our clients competitive advantages."
    },
    {
      title: "Quality",
      description: "Our commitment to excellence ensures every project meets the highest standards of performance and reliability."
    },
    {
      title: "Partnership",
      description: "We build long-term relationships with our clients, working as strategic partners in their digital transformation journey."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About</span> Avinya TechnoSoft
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a dynamic technology company dedicated to transforming businesses through innovative digital solutions. 
            Our team of expert developers, designers, and strategists work together to deliver exceptional results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="p-6 text-center bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="font-semibold text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </Card>
          ))}
        </div>

        {/* Mission and Values */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Avinya TechnoSoft, we believe technology should be a catalyst for growth, not a barrier. 
              Our mission is to democratize access to enterprise-grade technology solutions, making them 
              accessible and affordable for businesses of all sizes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We combine technical expertise with business acumen to create solutions that not only work 
              flawlessly but also drive measurable business outcomes. Every project we undertake is an 
              opportunity to build lasting partnerships and contribute to our clients' success stories.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="p-4 rounded-lg bg-gradient-to-r from-card to-transparent border border-border hover:border-primary/30 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
