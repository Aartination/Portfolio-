import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import ScrollIndicator from '../components/ScrollIndicator';
import CustomCursor from '../components/CustomCursor';

const Index = () => {
  useEffect(() => {
    // Add cursor glow class to body
    document.body.classList.add('cursor-glow');
    
    return () => {
      document.body.classList.remove('cursor-glow');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 lg:px-12 overflow-hidden">
        {/* Background Image with Blur */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/nitin.jpg')`,
            filter: 'blur(8px)',
            transform: 'scale(1.1)',
          }}
        />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Content */}
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="font-serif text-display font-bold mb-6 animate-fade-in-up text-white">
            Nitin Kumar
          </h1>
          <p className="text-subtitle text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Creative Developer, Designer & Actor
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting digital experiences that blend aesthetic beauty with functional innovation.
            Specializing in modern web development and interactive design.
          </p>
        </div>
        <ScrollIndicator />
      </section>

      {/* Featured Work Preview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-hero font-serif font-bold mb-16 animate-fade-in-up">
            Featured Work
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Project 1 */}
            <a href="https://fmc.ipec.org.in/" target="_blank" rel="noopener noreferrer">
            <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <img src="/FMC1.png" alt="FMC1" className="w-50 h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                  FMC Logo Rewamp
              </h3>
              <p className="text-muted-foreground mb-4">
                Modern retail experience with seamless checkout and inventory management.
              </p>
              <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Adobe Photoshop</span>
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Adobe Illustrator</span>
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Figma</span>
                </div>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://www.youtube.com/watch?v=gEkrDJQOuuU&ab_channel=FMCIPEC" target="_blank" rel="noopener noreferrer">
            <div className="group cursor-pointer animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-muted rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                    <img src="/mvv.png" alt="Music Video Scene" className="w-full h-full object-cover" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-muted-foreground transition-colors">
                  Music Video Acting
              </h3>
              <p className="text-muted-foreground mb-4">
                  Featured as an actor in a music video, bringing creative vision to life through performance and storytelling.
              </p>
              <div className="flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Acting</span>
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Performance</span>
                  <span className="text-xs px-3 py-1 bg-muted rounded-full">Storytelling</span>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-16">
            <a 
              href="/work" 
              className="inline-flex items-center text-lg font-medium hover:text-muted-foreground transition-colors group"
            >
              View All Projects
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 px-6 lg:px-12 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-hero font-serif font-bold mb-8 animate-fade-in-up">
            About
          </h2>
          <p className="text-xl leading-relaxed text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            I'm a creative developer passionate about building digital experiences that matter. 
            With expertise in modern web technologies and a keen eye for design, I help brands 
            and startups bring their visions to life through thoughtful, user-centered solutions.
          </p>
          <div className="mt-12">
            <a 
              href="/about" 
              className="inline-flex items-center text-lg font-medium hover:text-muted-foreground transition-colors group"
            >
              Learn More
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-hero font-serif font-bold mb-8 animate-fade-in-up">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Ready to bring your next project to life? I'd love to hear about your vision.
          </p>
          <a 
            href="/contact"
            className="inline-block bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
