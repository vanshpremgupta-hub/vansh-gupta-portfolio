import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Instagram, Mail, MapPin, CheckCircle2, ChevronRight, Play, ExternalLink, PenTool, Video, Cpu, Smartphone, Layout } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Tools", href: "#tools" },
    { name: "Work", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-display font-bold tracking-tighter text-glow">
          VANSH<span className="text-gold">GUPTA</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-gold transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="gold-button-primary px-6 py-2 text-sm rounded-full">
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden flex flex-col space-y-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-white/90"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="gold-button-primary text-center py-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with cinematic visual */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000"
          alt="Cinematic Workspace"
          className="w-full h-full object-cover grayscale opacity-40 scale-110 animate-pulse-slow"
          referrerPolicy="no-referrer"
        />
        {/* Modern Glowing Accents */}
        <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-1/4 w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-display font-semibold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-gold/50" />
              Video Editor
            </h2>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8">
              VANSH <span className="gold-gradient">GUPTA</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-2xl leading-relaxed mb-6">
              I create modern short-form videos and edits that help creators, brands, and businesses capture attention, stand out on social media, and build a stronger online presence.
            </p>
            <p className="text-gold italic font-medium text-lg mb-12 border-l-2 border-gold/40 pl-4">
              “Editing that keeps viewers engaged and content memorable.”
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#portfolio" className="gold-button gold-button-primary flex items-center justify-center gap-2">
                View My Work <ChevronRight size={20} />
              </a>
              <a href="#contact" className="gold-button gold-button-outline flex items-center justify-center gap-2">
                Hire Me
              </a>
            </div>

            {/* Quick Contact Info */}
            <div className="flex flex-wrap gap-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Instagram size={18} className="text-gold" />
                <span>@unfoldvanshh</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-gold" />
                <span>vanshpremgupta178@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-gold" />
                <span>Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-white/80">Open For Collaborations</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "PROJECTS COMPLETED", value: "100+" },
    { label: "HAPPY CLIENTS", value: "30+" },
    { label: "YEARS EXPERIENCE", value: "1+" },
  ];

  const skillTags = [
    "Short-form Editing",
    "Personal Brand Content",
    "Business Content",
    "Flashy Edits",
    "Documentary Style",
    "UGC Ads",
    "AI-assisted Content",
  ];

  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">
              CRAFTING VISUAL <span className="text-gold">STORIES</span>
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8 mx-auto max-w-3xl">
              I’m Vansh Gupta, a video editor focused on creating engaging short-form content for creators, brands, and businesses. From personal brand edits to modern social media content, I create videos designed to attract attention, increase engagement, and make content stand out online.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {skillTags.map((tag) => (
                <span key={tag} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-white/80 hover:border-gold/30 hover:bg-gold/5 transition-all cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-6 rounded-2xl group hover:border-gold/30 transition-all">
                  <div className="text-3xl font-display font-bold text-gold mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-widest font-bold text-white/40 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Instagram Reels & Short-form Content",
      description: "High-retention edits built for Instagram Reels, TikTok, and YouTube Shorts.",
      icon: <Smartphone className="text-gold" size={32} />,
    },
    {
      title: "Personal Brand & Business Content",
      description: "Professional edits that help creators, brands, and businesses build a stronger social media presence.",
      icon: <Video className="text-gold" size={32} />,
    },
    {
      title: "AI-assisted Video Creation",
      description: "AI-powered visuals, UGC-style ads, and modern content designed to capture attention and increase engagement.",
      icon: <Cpu className="text-gold" size={32} />,
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold">What I <span className="text-gold">Create</span></h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="glass-card p-10 rounded-3xl group hover:bg-gold/5 hover:border-gold/20 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="mb-8 p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-gold/10 transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-display font-bold mb-4">{service.title}</h4>
              <p className="text-white/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Tools = () => {
  const tools = [
    { name: "Adobe Premiere Pro", icon: <Layout size={24} /> },
    { name: "After Effects", icon: <PenTool size={24} /> },
    { name: "DaVinci Resolve", icon: <Video size={24} /> },
    { name: "CapCut", icon: <Smartphone size={24} /> },
    { name: "Higgsfield AI", icon: <Cpu size={24} /> },
  ];

  return (
    <section id="tools" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-display font-bold">What I <span className="text-gold">Use</span></h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              whileHover={{ scale: 1.05 }}
              className="px-8 py-6 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4 group hover:border-gold/30 hover:bg-gold/5 transition-all"
            >
              <span className="text-gold opacity-50 group-hover:opacity-100 transition-opacity">
                {tool.icon}
              </span>
              <span className="text-lg font-medium text-white/80 group-hover:text-white transition-colors">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    {
    
  title: "Flashy Reels Edit",
  category: "Short-form Editing",
  video: "/4.mp4"

    }
    {
      title: "Documentary Edit",
      category: "Storytelling Content",
      image: "https://images.unsplash.com/photo-1485846234645-a62644ef7467?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "Personal Brand Video",
      category: "Creator Content",
      image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "UGC Ad Campaign",
      category: "AI-assisted Content",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "5. Podcast",
      category: "Clipping from podcast",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=600",
    },
    {
      title: "6. Reels",
      category: "Creator Content",
      image: "https://images.unsplash.com/photo-1611162618071-b39a2ad0f7ef?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Featured <span className="text-gold">Work</span></h3>
          </div>
          <p className="text-white/50 max-w-sm mb-2">
            A selection of recent projects focused on high-energy engagement and modern storytelling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10"
          <video
   src={project.video}
  autoPlay
  muted
  loop
  controls
  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
/>
</video>
    
           
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-gold text-xs font-bold tracking-widest uppercase mb-2">
                  {project.category}
                </span>
                <h4 className="text-2xl font-display font-bold text-white mb-4">
                  {project.title}
                </h4>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="gold-button-primary p-3 rounded-full">
                    <Play size={20} fill="currentColor" />
                  </button>
                  <span className="text-sm font-medium">Watch Preview</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-gold uppercase mb-4">Let's Talk</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
              Let’s Create Content That <span className="text-gold">Stands Out</span>
            </h3>
            <p className="text-xl text-white/60 mb-12 max-w-lg">
              Looking for engaging short-form content or modern edits for your brand or personal content? Let’s work together.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Instagram />, label: "Instagram", value: "@unfoldvanshh" },
                { icon: <Mail />, label: "Email", value: "vanshpremgupta178@gmail.com" },
                { icon: <MapPin />, label: "Location", value: "Uttar Pradesh, India" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs text-white/40 font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-lg font-medium text-white/80">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-10 rounded-[32px]"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Email</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Mobile Number</label>
                  <input type="tel" placeholder="+91 000 000 0000" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Budget</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors appearance-none">
                    <option className="bg-black">Select Budget</option>
                    <option className="bg-black">$500 - $1,000</option>
                    <option className="bg-black">$1,000 - $3,000</option>
                    <option className="bg-black">$3,000+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Project Type</label>
                <input type="text" placeholder="e.g. Instagram Reels, Documentary" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white/50 px-2">Message</label>
                <textarea rows={4} placeholder="Describe your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 focus:border-gold/50 focus:outline-none transition-colors resize-none" />
              </div>
              <button type="submit" className="w-full gold-button gold-button-primary py-5 rounded-2xl text-lg flex items-center justify-center gap-2">
                Send Message <ExternalLink size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-display font-bold tracking-tighter">
          VANSH<span className="text-gold">GUPTA</span>
        </div>
        <div className="text-white/40 text-sm text-center">
          © {new Date().getFullYear()} Vansh Gupta. All rights reserved. 
          <span className="mx-2 font-display">|</span>
          Premium Video Editing
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-white/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-white/60 hover:text-gold transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function PortfolioApp() {
  return (
    <div className="bg-black font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tools />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
