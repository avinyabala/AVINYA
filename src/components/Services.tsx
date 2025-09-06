import { 
  Code2, 
  Smartphone, 
  Globe, 
  Database, 
  Shield, 
  Cloud,
  Palette,
  BarChart3,
  Wrench
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements and workflows.",
      features: ["Enterprise Applications", "API Development", "System Integration", "Legacy Modernization"],
      gradient: "from-purple to-blue"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
      features: ["React/Angular Apps", "E-commerce Platforms", "CMS Solutions", "Progressive Web Apps"],
      gradient: "from-blue to-orange"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      features: ["Native iOS/Android", "React Native", "Flutter", "App Store Optimization"],
      gradient: "from-orange to-purple"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for improved performance and cost efficiency.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Serverless Architecture"],
      gradient: "from-purple to-blue"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence.",
      features: ["Data Visualization", "Machine Learning", "Predictive Analytics", "Data Warehousing"],
      gradient: "from-blue to-orange"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Risk Assessment"],
      gradient: "from-orange to-purple"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions to help your business thrive in the digital age. 
            From custom development to cloud solutions, we've got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.gradient} text-white group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  className="w-full mt-4 border-primary text-primary hover:bg-primary hover:text-white group-hover:bg-gradient-primary group-hover:border-transparent transition-all"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-8">Additional Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg bg-gradient-to-r from-card to-transparent border border-border">
              <Palette className="w-8 h-8 text-primary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">UI/UX Design</h4>
              <p className="text-muted-foreground text-sm">User-centered design solutions that enhance engagement and conversion rates.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-card to-transparent border border-border">
              <BarChart3 className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">Digital Marketing</h4>
              <p className="text-muted-foreground text-sm">Strategic digital marketing campaigns to grow your online presence.</p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-r from-card to-transparent border border-border">
              <Wrench className="w-8 h-8 text-accent mx-auto mb-3" />
              <h4 className="font-semibold text-foreground mb-2">IT Consulting</h4>
              <p className="text-muted-foreground text-sm">Expert guidance on technology strategy and digital transformation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;