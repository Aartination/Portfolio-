import { useEffect } from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="px-6 lg:px-12 py-12 lg:py-24 border-b-4 border-black bg-primary">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-sans text-display font-black uppercase mb-6 leading-none tracking-tighter">
              Nitin<br />Kumar.
            </h1>
            <p className="text-2xl font-bold bg-white inline-block px-4 py-2 border-2 border-black mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              Creative Developer & Designer
            </p>
            <p className="text-xl font-medium max-w-lg mb-8">
              Crafting digital experiences that blend aesthetic beauty with functional innovation. Not afraid to make a statement.
            </p>
            <a href="/work" className="inline-block bg-accent text-white text-xl font-bold px-8 py-4 border-[3px] border-black brutalist-shadow hover:-translate-y-1 transition-transform">
              SEE MY WORK
            </a>
          </div>
          
          <div className="relative justify-self-center lg:justify-self-end w-full max-w-md">
            {/* Image Container with brutalist styling */}
            <div className="bg-white border-4 border-black brutalist-shadow overflow-hidden p-2 aspect-square relative z-10">
              <img src="/nitin.jpg" alt="Nitin Kumar" className="w-full h-full object-cover filter grayscale contrast-125" />
            </div>
            {/* Decorative background blocks */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary border-4 border-black z-0"></div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6 lg:px-12 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16 border-b-4 border-black pb-4">
            <h2 className="text-6xl font-black uppercase tracking-tighter">
              Featured Work
            </h2>
            <a href="/work" className="hidden md:inline-block font-bold text-xl hover:bg-primary px-4 py-2 border-2 border-transparent hover:border-black transition-colors">
              VIEW ALL (→)
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Project 1 */}
            <a href="https://fmc.ipec.org.in/" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-white border-4 border-black p-4 brutalist-shadow mb-6">
                <div className="aspect-[4/3] bg-primary border-2 border-black overflow-hidden relative">
                    <img src="/FMC1.png" alt="FMC1" className="w-full h-full object-cover mix-blend-multiply filter contrast-125 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">FMC Logo Revamp</h3>
              <p className="text-lg font-medium mb-4">
                Modern retail experience with bold identity.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-bold px-3 py-1 bg-secondary text-white border-2 border-black">Photoshop</span>
                <span className="text-sm font-bold px-3 py-1 bg-secondary text-white border-2 border-black">Illustrator</span>
              </div>
            </a>

            {/* Project 2 */}
            <a href="https://www.youtube.com/watch?v=gEkrDJQOuuU&ab_channel=FMCIPEC" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-white border-4 border-black p-4 brutalist-shadow mb-6">
                <div className="aspect-[4/3] bg-accent border-2 border-black overflow-hidden relative">
                    <img src="/mvv.png" alt="Music Video Scene" className="w-full h-full object-cover mix-blend-multiply filter contrast-125 group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="text-3xl font-black uppercase mb-3">Music Video Acting</h3>
              <p className="text-lg font-medium mb-4">
                Featured performance, bringing creative vision to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-bold px-3 py-1 bg-primary border-2 border-black">Acting</span>
                <span className="text-sm font-bold px-3 py-1 bg-primary border-2 border-black">Performance</span>
              </div>
            </a>
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <a href="/work" className="inline-block bg-primary font-bold text-xl px-6 py-3 border-4 border-black brutalist-shadow">
              VIEW ALL PROJECTS
            </a>
          </div>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full bg-black text-primary py-4 overflow-hidden border-b-4 border-black whitespace-nowrap flex">
        <div className="animate-marquee inline-block text-3xl font-black uppercase tracking-widest">
           Let's build something crazy • No boring designs • Let's build something crazy • No boring designs • Let's build something crazy • No boring designs • Let's build something crazy • No boring designs • 
        </div>
      </div>

      {/* About Preview & Contact */}
      <section className="py-24 px-6 lg:px-12 bg-secondary">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* About */}
          <div className="bg-white p-8 md:p-12 border-4 border-black brutalist-shadow">
            <h2 className="text-5xl font-black uppercase mb-6">About Me</h2>
            <p className="text-xl font-medium leading-relaxed mb-8">
              I'm a creative developer passionate about building digital experiences that matter. With expertise in modern web technologies and a keen eye for bold design, I help brands stand out.
            </p>
            <a href="/about" className="inline-block border-b-4 border-black text-2xl font-black uppercase hover:bg-black hover:text-white transition-colors px-2">
              Read Story
            </a>
          </div>
          
          {/* Contact */}
          <div className="bg-accent text-white p-8 md:p-12 border-4 border-black brutalist-shadow flex flex-col justify-center">
            <h2 className="text-5xl font-black uppercase mb-6">Let's Talk</h2>
            <p className="text-xl font-medium mb-8">
              Ready to bring your next project to life? Let's make it loud.
            </p>
            <a href="/contact" className="inline-block bg-white text-black text-2xl font-black text-center px-8 py-4 border-4 border-black hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
              SAY HELLO
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
