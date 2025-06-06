import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import { useEffect, useState } from 'react';
import FMC1 from '../images used/FMC1.png';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    document.body.classList.add('cursor-glow');
    return () => document.body.classList.remove('cursor-glow');
  }, []);

  const projects = [
    {
      id: 1,
      title: "FMC Logo rewamp",
      category: "Logo Designing",
      year: "2024-25",
      description: "A fresh logo redesign for FMC, the Film Media & Club—our college's photography and media club—capturing its creative spirit and passion for visual storytelling.",
      longDescription: "This project involved creating a complete logo redesign for FMC (Film Media & Club), our college's photography and media club. The challenge was to create a logo that represents the club's creative spirit and passion for visual storytelling while maintaining a professional and modern look. The redesign reflects the club's commitment to excellence in photography and media production.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Figma"],
      features: ["Logo rewamp", "Branding", "Visual identity", "Website Integration"],
      image: "FMC1.png",
      behanceLink: "https://fmc.ipec.org.in/"
    },
    {
      id: 2,
      title: "Photography",
      category: "Photography & Editing",
      year: "2024",
      description: "Captured portraits and moments from my college's Dandiya event for the FMC club, showcasing my skills in photography and editing.",
      longDescription: "In this project, I photographed and edited portraits and candid moments during the college Dandiya evening for my club, FMC (Film Media & Club). This collection highlights my ability to capture vibrant event moments and demonstrates my expertise in both photography and post-processing. The images reflect my creative approach to documenting special occasions and my proficiency in editing to enhance the final visuals.",
      technologies: ["DSLR Photography", "Adobe Lightroom", "Adobe Photoshop"],
      features: ["Event photography", "Portrait editing", "Color grading", "Club documentation"],
      image: "DEC.png",
      behanceLink: "https://www.behance.net/gallery/214537635/PORTRAIT-PHOTOGRAPHY-LIGHTROOM-EDITS"
    },
    {
      id: 3,
      title: "Product Photography",
      category: "Photography & Editing",
      year: "2024",
      description: "A personal project showcasing product photography skills through capturing Dot&Key skincare products, demonstrating expertise in lighting and composition.",
      longDescription: "This personal project involved photographing Dot&Key skincare products to enhance my portfolio. The challenge was to create compelling product shots that highlight the products' features while maintaining professional quality. Through careful lighting setup and composition, I created a series of images that showcase my ability to capture product details and create engaging visual content.",
      technologies: ["DSLR Photography", "Adobe Lightroom", "Adobe Photoshop", "Product Lighting"],
      features: ["Product photography", "Lighting setup", "Color grading", "Portfolio enhancement"],
      image: "Dot&key.png",
      behanceLink: "https://www.behance.net/gallery/212776401/Product-Photography" 
    },
    {
      id: 4,
      title: "Graphic Designing",
      category: "Designing",
      year: "2021-25",
      description: "A collection of creative graphic designs showcasing versatility in visual communication and brand identity development.",
      longDescription: "This portfolio showcases my journey in graphic design, featuring diverse projects from brand identities to social media content. Each design reflects a deep understanding of visual hierarchy, color theory, and typography, demonstrating the ability to create compelling visual narratives that effectively communicate brand messages.",
      technologies: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Lightroom", "Figma"],
      features: ["Brand Identity", "Social Media Graphics", "Print Design", "Digital Illustrations"],
      image: "Obscure.png",
      behanceLink: "https://www.behance.net/gallery/226916633/Graphic-Designs"
    },
    // {
    //   id: 5,
    //   title: "Photography & Editing",
    //   category: "Car Photography",
    //   year: "2025",
    //   description: "An augmented reality platform for retail brands to create immersive product experiences.",
    //   longDescription: "This cutting-edge platform allows retailers to create AR experiences for their products without technical expertise. I built the web-based editor and viewer, focusing on performance and ease of use while handling complex 3D rendering.",
    //   technologies: ["WebXR", "Three.js", "WebGL", "AR.js", "Node.js"],
    //   features: ["AR product visualization", "Cross-platform compatibility", "No-code editor", "Analytics dashboard"],
    //   image: "project5"
    // }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-display font-serif font-bold mb-8 animate-fade-in-up">
              Work
            </h1>
            <p className="text-subtitle text-muted-foreground max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              A collection of projects where creativity meets functionality, 
              showcasing innovative solutions for diverse challenges.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div 
                    className="relative w-[500px] h-[400px] bg-black rounded-lg overflow-hidden cursor-pointer group"
                  >
                    <a 
                      href={project.behanceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img 
                        src={project.image === "FMC1.png" ? FMC1 : project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                    <span className="text-sm px-3 py-1 bg-muted rounded-full">{project.category}</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-4">
                    {project.title}
                  </h2>

                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                    className="inline-flex items-center text-lg font-medium hover:text-muted-foreground transition-colors group"
                  >
                    {selectedProject === project.id ? 'Show Less' : 'View Details'}
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
                      {selectedProject === project.id ? '↑' : '→'}
                    </span>
                  </button>

                  {/* Expanded Details */}
                  {selectedProject === project.id && (
                    <div className="mt-8 pt-8 border-t border-border animate-fade-in">
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>
                      
                      <h4 className="text-lg font-semibold mb-4">Key Features</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-foreground rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-24 pt-16 border-t border-border">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 animate-fade-in-up">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's collaborate and create something extraordinary together.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Start a Project
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Work;
