import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Home, Sparkles, Layout, Palette, ArrowRight } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';

export function ImprovementsPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Strategic Property Improvements" 
        description="Targeted cosmetic and structural improvements designed to increase the market value of your Melbourne property."
      />
      {/* Page Header */}
      <section className="bg-primary pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1556912177-c54030639a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Interior Improvements" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <Container className="relative z-10 flex flex-col gap-8 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Aesthetic Excellence</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight">
            Property Value <span className="text-gold italic">Improvements</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Strategic cosmetic upgrades designed to refine your home's presentation, enhance interior flow, and drive a higher market value.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-16 px-12 mt-4">
            <Link to="/consultation">Book Property Strategy</Link>
          </Button>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern Living" 
              className="w-full aspect-[4/5] object-cover shadow-2xl rounded-sm"
            />
            <div className="absolute -top-10 -left-10 bg-secondary p-12 text-primary shadow-2xl animate-reveal">
              <span className="text-4xl font-display font-bold">100%</span>
              <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Cosmetic Focus for <br />Maximum Impact</p>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
              Refining Your Home for the <span className="text-gold italic">Modern Market</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Property improvement is about identifying the friction points in your home's presentation and eliminating them. We focus on the high-visibility elements that transform a "house" into a "home" in the minds of potential buyers.
            </p>
            <div className="flex flex-col gap-8 pt-4">
              {[
                { icon: Palette, title: "Curated Color Palettes", desc: "Expert selection of neutral tones that enhance space and light." },
                { icon: Layout, title: "Strategic Layout Refinements", desc: "Removing visual clutter and improving the 'flow' between key living zones." },
                { icon: Sparkles, title: "Premium Hardware & Fixtures", desc: "Small details that signal quality throughout the entire property." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-muted flex items-center justify-center shrink-0 rounded-sm">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h4 className="text-lg font-bold font-heading text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service Scope Grid */}
      <section className="py-32 bg-muted border-y border-border">
        <Container className="flex flex-col gap-20">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <h2 className="text-4xl font-display font-bold text-primary italic">Comprehensive Property Refinement</h2>
            <p className="text-muted-foreground text-lg">Our improvement services cover all key interior and exterior zones.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { title: "Kitchen Facelifts", desc: "Cabinet resurfacing, handle upgrades, and new stone benchtops." },
              { title: "Lighting Overhauls", desc: "Replacement of dated light fittings with modern LED and designer fixtures." },
              { title: "Flooring Replacement", desc: "Premium timber flooring and high-end wool carpets for ultimate comfort." },
              { title: "Interior Styling Advice", desc: "Guidance on furniture placement and décor to maximize spatial perception." },
              { title: "Window Treatment Updates", desc: "Replacing heavy curtains with sleek blinds or architectural sheers." },
              { title: "External Presentation", desc: "Repainting, rendering touch-ups, and street-appeal enhancement." }
            ].map((service, i) => (
              <div key={i} className="flex flex-col gap-4 border-l-2 border-secondary pl-8 py-2">
                <h4 className="text-xl font-bold font-heading text-primary">{service.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Highlight */}
      <section className="bg-primary py-32 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-secondary animate-marquee" />
        <Container clean className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Transformation Profile</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight italic">Devon Meadows Rural Modernisation</h2>
            <p className="text-xl text-white/60 leading-relaxed">
              A large rural property that lacked a clear architectural identity. Through strategic painting, custom joinery, and a complete lighting plan, we created a sophisticated "Modern Coastal" vibe that resonated with premium buyers.
            </p>
            <div className="flex gap-12">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">350%</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">ROI on Improvements</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-secondary">14 Days</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-white/40">Renovation Timeline</span>
              </div>
            </div>
            <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none h-14 w-fit">
              <Link to="/projects/fisheries-road">View Full Case Study</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop" 
                alt="Devon Meadows Project" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-32">
        <Container className="flex flex-col items-center text-center gap-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary max-w-3xl leading-tight italic">
            Small Strategic Changes. <span className="text-gold">Large Financial Outcomes.</span>
          </h2>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold rounded-none h-16 px-12 text-lg">
            <Link to="/consultation" className="flex items-center gap-3">
              Start Your Property Transformation <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
