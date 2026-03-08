import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Bath, Droplets, Grid3X3, Sparkles, ArrowRight } from 'lucide-react';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { SEO } from '@/components/ui/SEO';

export function BathroomPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Premium Bathroom Renovations" 
        description="Bespoke bathroom makeovers and high-end property improvements designed for Melbourne homes."
      />
      {/* Page Header */}
      <section className="bg-primary pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=1974&auto=format&fit=crop" 
            alt="Luxury Bathroom" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <Container className="relative z-10 flex flex-col gap-8 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Expertise</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight">
            Modern <span className="text-gold italic">Bathroom</span> Renovations
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            High-impact bathroom transformations that improve buyer perception and add immediate value to your property's market appraisal.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-16 px-12 mt-4">
            <Link to="/consultation">Book Project Estimate</Link>
          </Button>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Design Meets <span className="text-gold italic">Durability</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A bathroom is more than a functional space; it's a sanctuary. In the property market, a modern, clean, and architecturally designed bathroom is a primary driver of buyer interest. PDCON specialises in delivering high-end finishes with industry-leading waterproofing and structural integrity.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {[
                { icon: Droplets, title: "Waterproofing", desc: "Licensed specialists ensuring your investment is protected for decades." },
                { icon: Grid3X3, title: "Designer Tiling", desc: "Precision tiling patterns using premium materials and finishes." },
                { icon: Bath, title: "Custom Vanities", desc: "Bespoke joinery solutions tailored to your space and style." },
                { icon: Sparkles, title: "Premium Fixtures", desc: "High-end taps, mixers, and hardware from leading designers." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-secondary/10 flex items-center justify-center text-secondary">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold font-heading text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <BeforeAfterSlider 
              beforeImage="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
              afterImage="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" 
              beforeLabel="Dated Bathroom"
              afterLabel="Modern Masterpiece"
              className="h-[500px] lg:h-[600px] shadow-2xl"
            />
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-muted border-y border-border">
        <Container className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-4xl font-display font-bold text-primary italic">Our Technical Scope</h2>
            <p className="text-muted-foreground text-lg">Every PDCON bathroom renovation includes a comprehensive scope of works managed by our expert team.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Demolition & Strip-out",
              "Structural Plumbing & Electrical",
              "Wall Lining & Sheeting",
              "Advanced Waterproofing System",
              "Screeding & Leveling",
              "Floor-to-Ceiling Tiling",
              "Cabinetry & Joinery Install",
              "Final Fit-off & Sealing"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4 p-6 bg-white border border-border rounded-sm shadow-sm hover:border-secondary transition-all">
                <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                <span className="font-bold font-heading text-primary text-sm uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project CTA */}
      <section className="bg-primary py-32 text-white overflow-hidden relative">
        <Container className="flex flex-col items-center text-center gap-12 relative z-10">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Ready to Transform?</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-3xl leading-tight">
            Upgrade Your Bathroom and <span className="text-gold italic">Elevate Your Home</span>
          </h2>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-16 px-12 text-lg">
            <Link to="/consultation" className="flex items-center gap-3">
              Book Onsite Inspection <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
