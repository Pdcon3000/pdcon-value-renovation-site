import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Home, Wallet, Hammer, Paintbrush, Ruler, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { SEO } from '@/components/ui/SEO';

export function PreSalePage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Pre-Sale Renovations" 
        description="Strategic pre-sale renovations designed to maximise your property's market value and buyer appeal in Melbourne."
      />
      {/* Page Header */}
      <section className="bg-primary pt-60 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        </div>
        <Container className="relative z-10 flex flex-col gap-10 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Strategic Infrastructure</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white max-w-5xl leading-[1.1] italic">
            Strategic <span className="text-gold underline decoration-secondary/20 underline-offset-[16px]">Pre-Sale</span> Transformations
          </h1>
          <p className="text-2xl text-white/50 max-w-3xl leading-relaxed font-light">
            Targeted upgrades designed to reposition your asset for the market, increase buyer appeal and strengthen final sale results.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-20 px-16 mt-8 transition-all duration-500 shadow-gold">
            <Link to="/consultation">Book Property Assessment</Link>
          </Button>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-40 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div className="flex flex-col gap-12">
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary leading-tight italic">
              Our Methodology: <span className="text-gold">Value Creation</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed font-light">
              We don't just renovate; we strategize. Our pre-sale transformation model focuses exclusively on improvements that deliver the highest return on investment. We identify the high-impact areas that buyers care about most and address them with professional precision.
            </p>
            <div className="flex flex-col gap-8">
              {[
                { title: "Strategic Market Repositioning", desc: "Aligning your property's presentation with high-end buyer expectations." },
                { title: "Neutral Architectural Palettes", desc: "Appealing to the broadest possible buyer demographic through sophisticated design." },
                { title: "Buyer Appeal Optimisation", desc: "Creating space, light and mood that moves buyers emotionally." }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-14 h-14 bg-muted flex items-center justify-center shrink-0 border border-border group-hover:border-secondary transition-all duration-500 shadow-sm">
                    <CheckCircle2 className="w-7 h-7 text-secondary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xl font-bold font-heading text-primary italic">{item.title}</h4>
                    <p className="text-base text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop" 
              alt="Luxury Interior" 
              className="w-full aspect-square object-cover shadow-2xl"
            />
            <div className="absolute inset-0 border-[20px] border-secondary/10 -m-10 z-0 pointer-events-none" />
          </div>
        </Container>
      </section>

      {/* Service Scope Grid */}
      <section className="py-32 bg-muted border-y border-border">
        <Container className="flex flex-col gap-20">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-4xl font-display font-bold text-primary">Comprehensive Market Readiness</h2>
            <p className="text-muted-foreground text-lg">Typical improvements included in our pre-sale renovation packages.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Paintbrush, title: "Professional Painting", desc: "Full interior and exterior repainting with market-proven color schemes." },
              { icon: Ruler, title: "Flooring Upgrades", desc: "New engineered timber, premium carpets, or polished concrete." },
              { icon: Home, title: "Kitchen Refresh", desc: "Cabinetry resurfacing, new stone benchtops, and modern hardware." },
              { icon: Bath, title: "Bathroom Improvements", desc: "Grouting refresh, new vanities, and high-end fixture replacement." },
              { icon: Hammer, title: "Lighting & Hardware", desc: "Modern LED upgrades, architectural pendants, and sleek handles." },
              { icon: Sparkles, title: "Landscaping", desc: "Garden cleanup, new turf, and strategic planting for curb appeal." }
            ].map((service, i) => (
              <div key={i} className="bg-white p-10 border border-border shadow-sm hover:border-secondary hover:shadow-xl transition-all duration-300">
                <service.icon className="w-10 h-10 text-secondary mb-6" />
                <h4 className="text-xl font-bold font-heading mb-4">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Case Study Preview */}
      <section className="py-32 bg-white overflow-hidden">
        <Container className="flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">The Transformation</span>
            <h2 className="text-4xl font-display font-bold text-primary">Case Study: Berwick Property Transformation</h2>
          </div>
          <BeforeAfterSlider 
            beforeImage="https://images.unsplash.com/photo-1556912177-c54030639a48?q=80&w=2070&auto=format&fit=crop" 
            afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            beforeLabel="Dated Presentation"
            afterLabel="Architectural Ready"
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading">The Strategy</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Remove heavy window treatments, update flooring to light oak, and repaint the entire interior in a bright, neutral architectural white to enhance volume.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-lg font-bold font-heading">The Outcome</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Property sold in 11 days after the first open home. The final sale price exceeded the owner's original expectation by $85,000.
              </p>
            </div>
            <div className="flex flex-col gap-6 justify-center">
              <Button asChild size="lg" className="bg-primary rounded-none">
                <Link to="/projects">View More Transformations</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-secondary py-24 text-primary">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl font-display font-bold">Ready to Prepare Your Property?</h2>
            <p className="text-xl font-medium opacity-80 leading-relaxed">
              Book a property assessment today and find out exactly where your renovation capital should be spent for maximum impact.
            </p>
          </div>
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-none h-16 px-12 text-lg font-bold">
            <Link to="/consultation">Book Consultation</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
