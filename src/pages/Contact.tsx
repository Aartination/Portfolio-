import Navigation from '../components/Navigation';
import CustomCursor from '../components/CustomCursor';
import { useEffect, useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    document.body.classList.add('cursor-glow');
    return () => document.body.classList.remove('cursor-glow');
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-display font-serif font-bold mb-8 animate-fade-in-up">
              Get In Touch
            </h1>
            <p className="text-subtitle text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Ready to bring your vision to life? Let's start a conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-serif font-bold mb-8">Send a Message</h2>
              
              <form action="https://formspree.io/f/mkgboonj" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-foreground text-background px-8 py-4 rounded-lg font-medium hover:bg-muted-foreground transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-serif font-bold mb-8">Let's Connect</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Direct Contact</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-muted-foreground">Email</span>
                      <p className="text-lg">nk88563317@gmail.com</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Phone</span>
                      <p className="text-lg">+91 9205244464</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Location</span>
                      <p className="text-lg">India</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Social Links</h3>
                  <div className="space-y-3">
                    <a 
                      href="https://www.linkedin.com/in/nitin-kumar-2512332a8" 
                      className="block text-lg hover:text-muted-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://github.com/Aartination" 
                      className="block text-lg hover:text-muted-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://x.com/Aartination" 
                      className="block text-lg hover:text-muted-foreground transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm currently available for new projects and collaborations. 
                    Whether you're a startup looking to build your first product 
                    or an established company seeking to refresh your digital presence, 
                    I'd love to hear about your project.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Response Time</h3>
                  <p className="text-muted-foreground">
                    I typically respond to all inquiries within 24 hours. 
                    For urgent matters, feel free to call or connect on LinkedIn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
