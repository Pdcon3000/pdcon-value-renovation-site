import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Building2, UserPlus, Zap, BarChart3, Clock } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';

export function AgentsPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="For Real Estate Agents" 
        description="PDCON partners with Melbourne real estate agents to prepare properties for market, ensuring maximum sale results for vendors."
      />
      {/* Page Header */}
      <section className="bg-primary pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
        <Container className="relative z-10 flex flex-col gap-8 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Partnership</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight">
            Pre-Sale Renovation Partner for <span className="text-gold italic">Real Estate Agents</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Empower your vendors with the professional edge they need to compete at the top of the market. We handle the transformation, you handle the premium sale.
          </p>
          <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-16 px-12 mt-4">
            <Link to="/consultation">Refer a Vendor</Link>
          </Button>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <Container className="flex flex-col gap-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="flex flex-col gap-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">
                Why Top Melbourne Agents <span className="text-gold italic">Partner with PDCON</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                As an agent, your goal is to achieve the best possible result for your client in the shortest timeframe. PDCON provides the construction infrastructure to make that happen.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: BarChart3, title: "Increased Price Potential", desc: "Our strategic upgrades consistently add 10-20% to listing appraisals." },
                  { icon: Clock, title: "Faster Buyer Interest", desc: "Move-in ready homes attract more enquiries and shorter days-on-market." },
                  { icon: Zap, title: "Vendor Support", desc: "We take the stress off your vendors, providing a clear path to market readiness." },
                  { icon: UserPlus, title: "Competitive Edge", desc: "Offer your clients a comprehensive value-add service that other agents can't match." }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col gap-4 p-8 bg-muted border border-border rounded-sm hover:border-secondary transition-all">
                    <item.icon className="w-8 h-8 text-secondary" />
                    <h4 className="font-bold font-heading text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop" 
                alt="Real Estate Professional" 
                className="w-full aspect-[4/5] object-cover shadow-2xl rounded-sm"
              />
              <div className="absolute -bottom-10 -left-10 bg-primary p-12 text-white shadow-2xl border border-white/10 max-w-xs">
                <p className="text-lg font-display italic leading-relaxed">
                  "PDCON transformed our listing in just two weeks. The result was a record sale for the street and an extremely happy vendor."
                </p>
                <div className="mt-6 flex flex-col">
                  <span className="font-bold text-secondary tracking-widest text-[10px] uppercase">Senior Agent</span>
                  <span className="text-sm font-heading">Ray White Berwick</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Referral Process */}
      <section className="py-32 bg-muted border-y border-border">
        <Container className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Simplified Workflow</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">How We Work Together</h2>
            <p className="text-muted-foreground text-lg">A seamless referral process designed to integrate with your listing timeline.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 z-0" />
            
            {[
              { step: "01", title: "Agent Referral", desc: "Refer your vendor for a property improvement consultation during the pre-listing phase." },
              { step: "02", title: "Rapid Strategy", desc: "We provide an onsite assessment and ROI strategy within 48 hours." },
              { step: "03", title: "Execution & Listing", desc: "We execute the renovation swiftly, delivering a market-ready home for your photography." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-8 relative z-10">
                <div className="w-20 h-24 bg-primary text-white flex items-center justify-center font-display font-bold text-3xl shadow-xl">
                  {item.step}
                </div>
                <div className="flex flex-col gap-4 px-6">
                  <h4 className="text-xl font-bold font-heading text-primary">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Integration Section */}
      <section className="py-32 bg-white">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="aspect-video bg-muted relative overflow-hidden rounded-sm shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Office Presentation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                <Button className="w-20 h-20 rounded-full bg-secondary text-primary flex items-center justify-center p-0 shadow-gold">
                  <Zap className="w-8 h-8 fill-current" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10 order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-secondary">Expert Presentations</span>
            <h2 className="text-4xl font-display font-bold text-primary leading-tight">In-Office Training & Value Sessions</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide agents with insights into property value improvement. Our team can attend your office meetings to explain renovation trends, ROI metrics, and how to position renovations to your vendors.
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Current market-proven color palettes",
                "High-impact vs Low-impact renovation areas",
                "How to pitch pre-sale improvements to vendors",
                "Managing listing timelines with construction"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 text-primary font-semibold">
                  <CheckCircle2 className="w-5 h-5 text-secondary" /> {text}
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="bg-primary rounded-none h-16 px-12 w-fit">
              <Link to="/consultation">Book Office Briefing</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Agent Portal CTA */}
      <section className="bg-secondary py-24 text-primary">
        <Container className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h2 className="text-4xl font-display font-bold">Become a PDCON Partner Agent</h2>
            <p className="text-xl font-medium opacity-80 leading-relaxed">
              Unlock the full potential of your listings and provide your vendors with a premium construction infrastructure.
            </p>
          </div>
          <Button asChild className="bg-primary text-white hover:bg-primary/90 rounded-none h-16 px-12 text-lg font-bold">
            <Link to="/consultation">Contact Agency Team</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
