import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Building2, TrendingUp, HandCoins, ArrowDown, Sparkles } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';

export function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="About PDCON" 
        description="Learn about PDCON and our mission to help Melbourne property owners maximise their property value through strategic renovation and construction."
      />
      {/* Page Header */}
      <section className="bg-primary pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
        <Container className="relative z-10 flex flex-col gap-8 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight">
            Melbourne's <span className="text-gold italic">Renovation Specialists</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Established in 2013, PDCON has spent over a decade perfecting the art of property value improvement through strategic construction and development.
          </p>
        </Container>
      </section>

      {/* History Section */}
      <section className="py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              13+ Years of <span className="text-gold italic">Industry Excellence</span>
            </h2>
            <div className="flex flex-col gap-6 text-xl text-muted-foreground leading-relaxed">
              <p>
                PDCON (Perfect Design & Construction) was founded with a singular focus: delivering architectural quality to every renovation project. What began as a boutique construction firm has evolved into a comprehensive property improvement arm.
              </p>
              <p>
                Our close partnership with **GHAN PROJECTS** allows us to provide more than just construction. We offer a holistic property strategy that integrates development expertise, market insights, and strategic financing.
              </p>
              <p>
                We position ourselves not just as contractors, but as partners in your property journey—dedicated to increasing value and presentation through precision and craftsmanship.
              </p>
            </div>
            <div className="flex gap-12 pt-8">
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-display font-bold text-primary">2013</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Year Established</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-5xl font-display font-bold text-primary">500+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Projects Completed</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=2070&auto=format&fit=crop" 
              alt="Construction Detail" 
              className="w-full aspect-square object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary flex flex-col items-center justify-center text-primary p-8 text-center gap-2">
              <Building2 className="w-12 h-12 mb-2" />
              <h4 className="text-lg font-bold font-heading uppercase tracking-widest text-xs">Architectural Integrity</h4>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Diagram Section */}
      <section className="py-32 bg-white">
        <Container className="flex flex-col gap-16">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Visualising the Strategy</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Strategic <span className="text-gold italic">Ecosystem Overview</span></h2>
          </div>
          <div className="bg-muted p-8 lg:p-20 rounded-sm shadow-elegant border border-border">
            <img 
              src="https://blink.new/attachments/Diragram for web.png" 
              alt="PDCON Strategy Diagram" 
              className="w-full h-auto max-w-5xl mx-auto shadow-2xl rounded-sm"
            />
          </div>
        </Container>
      </section>

      {/* Ecosystem Infographic Section */}
      <section className="py-32 bg-muted border-y border-border overflow-hidden">
        <Container className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Strategic Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">The PDCON <span className="text-gold">Ecosystem</span></h2>
            <p className="text-muted-foreground text-lg">Our unique integration of strategy, construction, and capital designed to flow towards owner profit.</p>
          </div>

          <div className="max-w-5xl mx-auto w-full">
            {/* Visual Ecosystem Representation */}
            <div className="flex flex-col items-center gap-12 relative">
              {/* GHAN PROJECTS (TOP) */}
              <div className="w-full max-w-sm bg-primary p-10 text-white shadow-2xl text-center relative z-10 border border-white/10 group hover:scale-105 transition-transform duration-500">
                <h4 className="text-2xl font-display font-bold mb-2">GHAN PROJECTS</h4>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Property Development & Strategy</p>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-secondary to-transparent" />
              </div>

              {/* BRANCHES (MIDDLE) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-24 w-full relative">
                {/* Connector Line */}
                <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-muted-foreground/20" />
                
                {/* PDCON (LEFT) */}
                <div className="flex flex-col items-center gap-8 relative">
                  <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-muted-foreground/20" />
                  <div className="w-full bg-white p-10 text-primary shadow-xl text-center border border-border group hover:border-secondary transition-all duration-300">
                    <h4 className="text-xl font-bold font-heading mb-2">PDCON</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Renovations & Construction</p>
                  </div>
                  <ArrowDown className="w-6 h-6 text-secondary animate-bounce" />
                </div>

                {/* FINANCE (RIGHT) */}
                <div className="flex flex-col items-center gap-8 relative">
                  <div className="hidden md:block absolute bottom-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-muted-foreground/20" />
                  <div className="w-full bg-white p-10 text-primary shadow-xl text-center border border-border group hover:border-secondary transition-all duration-300">
                    <h4 className="text-xl font-bold font-heading mb-2">RENOVATION CAPITAL</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Investor & Funding Partner</p>
                  </div>
                  <ArrowDown className="w-6 h-6 text-secondary animate-bounce" />
                </div>
              </div>

              {/* PROPERTY OWNER (BOTTOM) */}
              <div className="w-full max-w-xl bg-white p-12 text-primary shadow-2xl text-center border-2 border-secondary relative group hover:shadow-gold transition-all duration-500">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary mb-4 block">Central Focus</span>
                <h3 className="text-3xl font-display font-bold text-primary mb-6">Property Owner</h3>
                
                <div className="grid grid-cols-3 gap-4 items-center px-4">
                  <div className="flex flex-col gap-2 items-center">
                    <Sparkles className="w-8 h-8 text-secondary/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Renovation</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <TrendingUp className="w-10 h-10 text-secondary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Value Increase</span>
                  </div>
                  <div className="flex flex-col gap-2 items-center">
                    <HandCoins className="w-8 h-8 text-secondary/40" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Sale Profit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Legal Model Infographic */}
      <section className="py-32 bg-white">
        <Container className="flex flex-col gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Transparency & Trust</span>
              <h2 className="text-4xl font-display font-bold text-primary leading-tight">Lender-Builder Hybrid Model</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our unique legal structure ensures that the interests of the homeowner, the funding partner, and the builder are perfectly aligned. This tripartite agreement protects all parties and ensures the strategic renovation is funded and executed with total transparency.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Clear Tripartite Agreement",
                  "Direct Payments to Construction Milestones",
                  "Legal Protection for Homeowners",
                  "Aligned Strategy for Maximum Sale Result"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-secondary" /> {text}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative p-20 bg-muted border border-border flex items-center justify-center">
              {/* Triangle Infographic Representation */}
              <div className="relative w-80 h-80 flex items-center justify-center">
                {/* SVG Lines for Triangle */}
                <svg className="absolute inset-0 w-full h-full text-muted-foreground/30 pointer-events-none" viewBox="0 0 100 100">
                  <path d="M50 10 L10 90 L90 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2,2" />
                </svg>

                {/* Homeowner (TOP) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-primary text-white flex flex-col items-center justify-center shadow-lg border border-white/10 text-center p-2 rounded-sm group hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Homeowner</span>
                  </div>
                </div>

                {/* Lender (LEFT) */}
                <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-white border-2 border-primary text-primary flex flex-col items-center justify-center shadow-lg text-center p-2 rounded-sm group hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest">Lender Company</span>
                  </div>
                </div>

                {/* PDCON (RIGHT) */}
                <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 flex flex-col items-center gap-3">
                  <div className="w-24 h-24 bg-secondary text-primary flex flex-col items-center justify-center shadow-lg text-center p-2 rounded-sm group hover:scale-110 transition-transform">
                    <span className="text-[10px] font-bold uppercase tracking-widest">PDCON (Builder)</span>
                  </div>
                </div>

                {/* Connection Labels */}
                <div className="absolute top-1/2 left-[15%] text-[8px] font-bold uppercase tracking-widest text-muted-foreground -rotate-45">Loan Agreement</div>
                <div className="absolute top-1/2 right-[15%] text-[8px] font-bold uppercase tracking-widest text-muted-foreground rotate-45">Building Contract</div>
                <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[8px] font-bold uppercase tracking-widest text-secondary">Tripartite Agreement</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-primary text-white">
        <Container className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">The Pathway to Success</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Our Proven <span className="text-gold italic">Renovation Process</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { step: "01", title: "Property Assessment", desc: "A comprehensive onsite evaluation of your property's current market standing." },
              { step: "02", title: "Renovation Strategy", desc: "Developing a targeted plan focused exclusively on ROI and buyer appeal." },
              { step: "03", title: "Renovation Execution", desc: "Flawless construction delivery by our experienced PDCON building team." },
              { step: "04", title: "Market Ready Property", desc: "A high-impact listing ready to compete and win at the top of its range." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-8 relative p-10 bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
                <span className="text-6xl font-display font-bold text-secondary opacity-20 absolute top-4 right-8">{item.step}</span>
                <div className="flex flex-col gap-4 relative z-10">
                  <h4 className="text-xl font-bold font-heading">{item.title}</h4>
                  <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
                </div>
                <div className="w-0 group-hover:w-full h-1 bg-secondary transition-all duration-700" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-white">
        <Container className="flex flex-col items-center text-center gap-12">
          <h2 className="text-4xl font-display font-bold text-primary max-w-2xl leading-tight">Ready to leverage our strategic ecosystem for your property?</h2>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button asChild size="lg" className="bg-primary rounded-none h-16 px-12">
              <Link to="/consultation">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-muted rounded-none h-16 px-12">
              <Link to="/projects">View Success Stories</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
