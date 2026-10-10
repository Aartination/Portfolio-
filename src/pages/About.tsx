import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Add this import

const About = () => {
  useEffect(() => {
    document.body.classList.add('cursor-glow');
    return () => document.body.classList.remove('cursor-glow');
  }, []);

  const skills = {
    designTools: [
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Adobe Lightroom',
      'Canva',
      'Lens Distortion'
    ],
    webTechnologies: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Git & GitHub'
    ],
    photographyTools: [
      'Canon EOS 1500D',
      'Tripod',
      'Softbox',
      'Adobe Lightroom',
      'Photoshop'
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header and Image Section */}
          <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
            {/* About Me Text */}
            <div className="flex-1">
              <h1 className="text-display font-serif font-bold mb-4 animate-fade-in-up">
                About Me
              </h1>
              <p className="text-subtitle text-muted-foreground mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Creative Developer & Designer from India
              </p>
              
              <div className="prose prose-lg prose-invert max-w-none animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  I'm <span className="text-foreground font-medium">Nitin Kumar</span>, a creative professional from India, currently pursuing my Bachelor's in Computer Applications (BCA). I specialize in graphic design, product photography, and have a growing passion for frontend web development.
                </p>
                
                <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                  With expertise in Adobe Photoshop, Illustrator, Lightroom, Canva, and Lens Distortion, I create compelling visual designs. On the technical side, I'm skilled with HTML, CSS, JavaScript, Tailwind CSS, and Git, allowing me to blend creative visuals with functional design seamlessly.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  I believe in the power of visual storytelling and clean aesthetics. Whether it's through a photograph, graphic, or line of code, I strive to create digital experiences that leave a lasting impression. My approach combines technical precision with creative flair, always keeping the user experience at the forefront.
                </p>

                <a 
                  href="/Resume(Nitin).pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-muted-foreground transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image Section */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="relative w-74 h-96 rounded-lg overflow-hidden bg-muted/30">
                <img 
                  src="nitin.jpg" 
                  alt="Nitin - Creative Developer" 
                  className="w-full h-full object-contain bg-black"
                  style={{ display: '' }}
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Bio Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-xl leading-relaxed text-muted-foreground mb-6">

                </p>  
              </div>
            </section>

            {/* Skills Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-serif font-bold mb-8">Tools & Technologies</h2>
              
              {/* Design Tools */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🛠</span> Design Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {skills.designTools.map((tool, index) => (
                    <div 
                      key={tool}
                      className="p-4 bg-muted/30 rounded-lg text-center hover:bg-muted/50 transition-colors cursor-default"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Web Technologies */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">🌐</span> Web Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {skills.webTechnologies.map((tech, index) => (
                    <div 
                      key={tech}
                      className="p-4 bg-muted/30 rounded-lg text-center hover:bg-muted/50 transition-colors cursor-default"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <span className="text-sm font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photography Tools */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <span className="mr-2">📷</span> Photography Tools
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {skills.photographyTools.map((tool, index) => (
                    <div 
                      key={tool}
                      className="p-4 bg-muted/30 rounded-lg text-center hover:bg-muted/50 transition-colors cursor-default"
                      style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                    >
                      <span className="text-sm font-medium">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-3xl font-serif font-bold mb-8">Design Philosophy</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Simplicity</h3>
                  <p className="text-muted-foreground">
                    Great design is invisible. I believe in removing complexity 
                    and focusing on what truly matters to create intuitive, 
                    elegant solutions.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Functionality</h3>
                  <p className="text-muted-foreground">
                    Beautiful design means nothing without purpose. Every element 
                    serves a function and contributes to the overall user experience.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Innovation</h3>
                  <p className="text-muted-foreground">
                    I stay at the forefront of technology to push boundaries 
                    and create experiences that feel fresh and forward-thinking.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    The best projects come from great partnerships. I work closely 
                    with clients to understand their vision and bring it to life.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center pt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <h2 className="text-3xl font-serif font-bold mb-6">Ready to Create Something Amazing?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss your project and bring your vision to life.
              </p>
              <a 
                href="/contact"
                className="inline-block bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors"
              >
                Start a Conversation
              </a>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
