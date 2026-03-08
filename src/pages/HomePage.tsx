import React from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, TrendingUp, Home, Bath, Sparkles, Building2, Wallet, Paintbrush, Lightbulb, Grid3X3, Hammer, ClipboardCheck, LayoutDashboard, BadgeDollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/Container';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { cn } from '@/lib/utils';
import { SEO } from '@/components/ui/SEO';
import { Input } from '@/components/ui/input';
import { toast } from 'react-hot-toast';
import { blink } from '@/lib/blink';

export function HomePage() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  async function handleAssessmentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await blink.db.consultations.create({
        ...data,
        type: 'assessment',
        status: 'new',
        createdAt: new Date().toISOString()
      });

      toast.success('Assessment request sent. We will contact you shortly.');
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Strategic Property Value Improvement Specialists | PDCON Melbourne" 
        description="Melbourne's premier property value improvement specialists. Strategic pre-sale renovations designed to increase buyer appeal and achieve stronger sale results."
      />
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
            alt="Strategic Property Transformation" 
            className="w-full h-full object-cover brightness-[0.3] scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-transparent to-primary" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center">
          <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 animate-reveal stagger-1">
            Melbourne's Strategic Renovation Specialists
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-8 max-w-6xl leading-[1.05] animate-reveal stagger-2">
            Strategic Property <span className="text-gold italic">Transformation.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 font-medium leading-relaxed animate-reveal stagger-3">
            Positioning your property for the market through strategic value improvement and premium presentation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 animate-reveal stagger-4 mb-20">
            <Button asChild size="lg" className="bg-secondary hover:bg-white text-primary px-12 py-8 text-lg font-bold rounded-none shadow-gold transition-all duration-300 group">
              <Link to="/consultation" className="flex items-center gap-3">
                Request Property Assessment <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-12 py-8 text-lg font-bold rounded-none backdrop-blur-sm transition-all duration-300">
              <Link to="/projects">View Featured Transformations</Link>
            </Button>
          </div>

          {/* Instant Credibility Bar */}
          <div className="w-full max-w-5xl border-t border-white/10 pt-12 animate-reveal stagger-5">
            <div className="flex flex-wrap justify-center gap-8 md:gap-20 text-white/40 font-bold uppercase tracking-[0.3em] text-[11px]">
              <div className="flex items-center gap-3 hover:text-secondary transition-colors cursor-default">
                <span className="text-secondary">13+</span> Years Experience
              </div>
              <div className="flex items-center gap-3 hover:text-secondary transition-colors cursor-default">
                Strategic Renovation Specialists
              </div>
              <div className="flex items-center gap-3 hover:text-secondary transition-colors cursor-default">
                Melbourne Property Improvement Experts
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. WHO WE HELP */}
      <section className="bg-white py-40 border-b border-muted">
        <Container clean>
          <div className="flex flex-col gap-24">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Strategic Partnership</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary italic">Who We Help</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Vendors Preparing to Sell",
                  desc: "We help homeowners prepare their property for sale through targeted renovations that increase buyer appeal and maximise sale price."
                },
                {
                  title: "Buyers Improving a New Purchase",
                  desc: "Many buyers purchase homes with renovation potential. PDCON helps transform newly purchased properties through strategic improvements."
                },
                {
                  title: "Property Investors",
                  desc: "Investors often purchase properties that require upgrades. PDCON helps increase resale value through fast, targeted renovations."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-8 p-12 bg-muted border border-border rounded-none hover:border-secondary transition-all duration-500 hover:shadow-elegant group">
                  <div className="w-12 h-1 bg-secondary group-hover:w-24 transition-all duration-500" />
                  <h3 className="text-2xl font-display font-bold text-primary leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. FEATURED PROPERTY TRANSFORMATION: Berwick */}
      <section className="bg-primary text-white py-40 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary/30" />
        <Container clean className="flex flex-col gap-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Featured Property Transformation</span>
                <h2 className="text-5xl md:text-7xl font-display font-bold leading-[1.1]">Berwick Property <br /><span className="text-gold italic">Transformation</span></h2>
              </div>
              
              <div className="flex flex-col gap-8 text-xl text-white/60 leading-relaxed max-w-xl font-light">
                <p>This Berwick property underwent a full strategic pre-sale renovation designed to reposition the home for the market and significantly improve buyer appeal.</p>
                <p>The project included a comprehensive transformation of the interior presentation, bathroom renovation, landscaping improvements, and exterior upgrades.</p>
                <p>The renovation was delivered over a 14-week period.</p>
                <div className="p-8 bg-white/5 border-l-2 border-secondary italic text-lg">
                  During the renovation phase the property market experienced a slowdown due to rising interest rates which reduced buyer confidence. Despite these challenging conditions, the final outcome exceeded expectations.
                </div>
                <p>Through strategic improvements and strong presentation the property achieved a significantly stronger result than originally anticipated.</p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10 overflow-hidden">
                {[
                  { label: "Before renovation value", value: "$1,600,000" },
                  { label: "Renovation investment", value: "$250,000" },
                  { label: "Sale price achieved", value: "$2,105,000" },
                  { label: "Value increase", value: "$355,000", highlight: true }
                ].map((stat, i) => (
                  <div key={i} className="bg-primary p-10 flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{stat.label}</span>
                    <span className={cn("text-4xl md:text-5xl font-display font-bold", stat.highlight ? "text-secondary" : "text-white")}>{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 items-start">
                <p className="text-5xl md:text-7xl font-display font-bold text-secondary tracking-tight">
                  $355,000 <span className="text-2xl md:text-3xl uppercase tracking-widest ml-2">Value Increase</span>
                </p>
                <Button asChild size="lg" className="bg-secondary text-primary hover:bg-white font-bold rounded-none h-20 px-16 text-lg transition-all duration-500">
                  <Link to="/projects/berwick-transformation">View Full Case Study</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative group">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-8 overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop" 
                    alt="Berwick Transformation - After" 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-6 mt-20">
                  <div className="overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" 
                      alt="Berwick Living Space" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
                      alt="Before Transformation" 
                      className="w-full aspect-square object-cover grayscale opacity-40"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white bg-primary/80 px-4 py-2">Before</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Architectural accent lines */}
              <div className="absolute -top-10 -right-10 w-40 h-[1px] bg-secondary/30" />
              <div className="absolute -top-10 -right-10 w-[1px] h-40 bg-secondary/30" />
            </div>
          </div>
        </Container>
      </section>

      {/* 4. BEFORE AND AFTER TRANSFORMATIONS - UPDATED WITH SUBURB REFERENCES */}
      <section className="bg-white py-40">
        <Container clean className="flex flex-col gap-32">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Strategic Portfolio</span>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-primary italic">Property Transformations</h2>
            <p className="text-muted-foreground text-xl font-light">Explore our methodology through visual evidence of pre-sale optimisation.</p>
          </div>

          <div className="grid grid-cols-1 gap-40">
            {[
              {
                title: "Berwick Property Transformation",
                subtitle: "Strategic Pre-Sale Renovation",
                before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
                after: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
              },
              {
                title: "5 Fisheries Road, Devon Meadows",
                subtitle: "Specialised Project Stabilisation",
                before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
                after: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
              },
              {
                title: "Beaconsfield Property Transformation",
                subtitle: "Market Repositioning Upgrade",
                before: "https://images.unsplash.com/photo-1556912177-c54030639a48?q=80&w=2070&auto=format&fit=crop",
                after: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop"
              }
            ].map((proj, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className={cn("lg:col-span-8", i % 2 === 1 && "lg:order-2")}>
                  <BeforeAfterSlider 
                    beforeImage={proj.before}
                    afterImage={proj.after}
                    beforeLabel="Original Presentation"
                    afterLabel="Strategic Transformation"
                    className="h-[450px] md:h-[700px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-muted"
                  />
                </div>
                <div className={cn("lg:col-span-4 flex flex-col gap-10", i % 2 === 1 && "lg:order-1 lg:text-right lg:items-end")}>
                  <div className="flex flex-col gap-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Case Study {i + 1}</span>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight">{proj.title}</h3>
                    <p className="text-xl font-heading font-medium text-muted-foreground italic">{proj.subtitle}</p>
                  </div>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 px-12 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                    <Link to="/projects">View Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. SMALL IMPROVEMENTS BIGGER SALE RESULTS - UPDATED */}
      <section className="bg-muted py-40 border-y border-border overflow-hidden">
        <Container clean>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-8">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Value Maximisation</span>
                <h2 className="text-5xl md:text-6xl font-display font-bold text-primary leading-[1.1] italic">
                  Small Improvements. <br />Bigger Sale Results.
                </h2>
              </div>
              
              <div className="prose prose-xl text-muted-foreground max-w-xl font-light leading-relaxed">
                <p>Many homes are listed for sale without the presentation expected by modern buyers.</p>
                <p>Strategic improvements before listing can significantly increase buyer appeal and strengthen the final sale result.</p>
                <p>Targeted upgrades such as painting, lighting, kitchen improvements, flooring and landscaping often create meaningful improvements in perceived value.</p>
                <p className="font-bold text-primary italic">Often, relatively small but strategic investments deliver the highest return on investment.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-10">
                {[
                  { icon: Paintbrush, label: "Painting" },
                  { icon: Lightbulb, label: "Lighting" },
                  { icon: Grid3X3, label: "Kitchens" },
                  { icon: Home, label: "Flooring" },
                  { icon: Sparkles, label: "Landscaping" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center gap-5 group">
                    <div className="w-20 h-20 bg-white border border-border flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-700 shadow-sm">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-primary p-1 flex items-center justify-center shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
                <div className="relative z-10 flex flex-col items-center text-center p-16">
                  <TrendingUp className="w-20 h-20 text-secondary mb-10 transition-transform duration-700 group-hover:scale-110" />
                  <h3 className="text-4xl font-display font-bold text-white mb-8 italic">Market Positioning</h3>
                  <p className="text-white/60 text-lg leading-relaxed italic font-light">
                    "When multiple buyers fall in love with a property's presentation, the emotional connection drives competition and strengthens the final sale outcome."
                  </p>
                </div>
              </div>
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary/5 -z-10 blur-3xl rounded-full" />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. QUICK PROPERTY IMPROVEMENT ASSESSMENT - UPDATED LABELS */}
      <section className="bg-white py-40">
        <Container clean>
          <div className="max-w-6xl mx-auto bg-primary text-white p-16 md:p-24 shadow-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 -translate-y-1/2 translate-x-1/2 blur-[100px] rounded-full" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Consultation Request</span>
                  <h2 className="text-5xl md:text-6xl font-display font-bold leading-tight italic">Quick Property <br /><span className="text-gold">Assessment</span></h2>
                </div>
                <p className="text-white/60 text-lg leading-relaxed font-light">
                  Identify the strategic improvements required to maximise your property's value. Our specialists provide expert analysis on buyer appeal and market positioning.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    "Strategic Value Analysis",
                    "Buyer Appeal Optimisation",
                    "ROI Focused Improvements"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-4 text-base font-medium">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary/30">
                        <CheckCircle2 className="w-4 h-4 text-secondary" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <form onSubmit={handleAssessmentSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Full Name</label>
                  <Input name="name" required placeholder="Name" className="bg-white/5 border-white/10 h-16 text-white focus:ring-secondary placeholder:text-white/20" />
                </div>
                <div className="flex flex-col gap-3">
                  <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Email Address</label>
                  <Input name="email" type="email" required placeholder="email@address.com" className="bg-white/5 border-white/10 h-16 text-white focus:ring-secondary placeholder:text-white/20" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Suburb</label>
                    <Input name="suburb" required placeholder="Property Suburb" className="bg-white/5 border-white/10 h-16 text-white focus:ring-secondary placeholder:text-white/20" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/50">Estimated property value</label>
                    <Input name="value" placeholder="e.g. $1.6M" className="bg-white/5 border-white/10 h-16 text-white focus:ring-secondary placeholder:text-white/20" />
                  </div>
                </div>
                <Button type="submit" disabled={isSubmitting} className="bg-secondary text-primary hover:bg-white h-20 text-xl font-bold transition-all duration-500 shadow-gold mt-4">
                  {isSubmitting ? 'Processing...' : 'Request Property Assessment'}
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* 7. THE PDCON STRATEGY */}
      <section className="bg-muted py-32 border-y border-border">
        <Container clean className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">The PDCON <span className="text-gold italic">Value Strategy</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-border -translate-y-1/2 -z-0" />
            
            {[
              { icon: ClipboardCheck, step: "01", title: "Property Assessment", desc: "We inspect the property and identify improvements that increase buyer appeal." },
              { icon: LayoutDashboard, step: "02", title: "Renovation Strategy", desc: "We recommend targeted upgrades designed to maximise value." },
              { icon: Hammer, step: "03", title: "Renovation Execution", desc: "Our professional team manages and completes the renovation with precision." },
              { icon: Home, step: "04", title: "Market Ready Property", desc: "Your home is ready for professional listing photography and high-end inspections." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-8 relative z-10 group">
                <div className="w-20 h-20 bg-white border border-border rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-elegant">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col gap-4 px-4">
                  <span className="text-secondary font-display font-bold text-lg">{item.step}</span>
                  <h4 className="text-xl font-bold font-heading text-primary leading-tight">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. THE PDCON ECOSYSTEM: Literal Diagram Structure */}
      <section className="bg-white py-32 overflow-hidden">
        <Container clean className="flex flex-col gap-24">
          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Integrated Infrastructure</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary italic">A Complete Property Value Ecosystem</h2>
            <p className="text-muted-foreground text-lg italic">Aligning strategy, execution, and capital to deliver maximum vendor profit.</p>
          </div>

          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            {[
              { 
                title: "Ghan Projects", 
                subtitle: "(Property Strategy)", 
                icon: Building2,
                desc: "Strategic identification of property potential and market positioning."
              },
              { 
                title: "PDCON", 
                subtitle: "(Renovation Execution)", 
                icon: Hammer,
                highlight: true,
                desc: "Precision construction and high-end aesthetic transformations."
              },
              { 
                title: "Renovation Capital", 
                subtitle: "(Funding Partners)", 
                icon: BadgeDollarSign,
                desc: "Upfront capital solutions for eligible property improvement projects."
              },
              { 
                title: "Property Owner", 
                subtitle: "Homeowner", 
                icon: Users,
                desc: "The vendor preparing their asset for a premium market entry."
              },
              { 
                title: "Strategic Renovation", 
                subtitle: "The Transformation", 
                icon: Sparkles,
                desc: "Swift execution of the value-add strategy."
              },
              { 
                title: "Property Sale", 
                subtitle: "The Result", 
                icon: TrendingUp,
                desc: "A record-breaking sale price delivered through superior presentation."
              }
            ].map((item, i, arr) => (
              <React.Fragment key={i}>
                <div className={cn(
                  "w-full max-w-2xl flex flex-col md:flex-row items-center gap-8 p-8 border transition-all duration-500",
                  item.highlight ? "bg-primary text-white border-secondary shadow-gold scale-105 z-10" : "bg-muted border-border hover:border-secondary"
                )}>
                  <div className={cn(
                    "w-16 h-16 shrink-0 flex items-center justify-center border",
                    item.highlight ? "bg-secondary text-primary border-secondary" : "bg-white text-primary border-border"
                  )}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="flex flex-col gap-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-baseline md:gap-3">
                      <h4 className={cn("text-xl font-display font-bold", item.highlight ? "text-white" : "text-primary")}>{item.title}</h4>
                      <span className={cn("text-[10px] font-bold uppercase tracking-widest", item.highlight ? "text-secondary" : "text-secondary")}>{item.subtitle}</span>
                    </div>
                    <p className={cn("text-sm leading-relaxed", item.highlight ? "text-white/60" : "text-muted-foreground")}>{item.desc}</p>
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <div className="py-6 flex flex-col items-center">
                    <div className="w-px h-12 bg-gradient-to-b from-secondary to-transparent" />
                    <ArrowRight className="w-5 h-5 text-secondary rotate-90" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. RENOVATE NOW PAY WHEN YOU SELL */}
      <section className="bg-white py-32 overflow-hidden relative">
        <Container clean>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2070&auto=format&fit=crop" 
                alt="Finance & Settlement" 
                className="w-full h-full object-cover shadow-2xl rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 bg-secondary p-12 text-primary shadow-2xl animate-reveal">
                <BadgeDollarSign className="w-12 h-12 mb-4" />
                <span className="text-4xl font-display font-bold">$0</span>
                <p className="text-[10px] font-bold uppercase tracking-widest leading-tight">Upfront Capital <br />Required for Eligible Projects</p>
              </div>
            </div>
            <div className="flex flex-col gap-10 order-1 lg:order-2">
              <div className="flex flex-col gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Financial Freedom</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-tight italic">
                  Renovate Now. <br /><span className="text-gold italic">Pay When You Sell.</span>
                </h2>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Some homeowners prefer not to fund improvements upfront. Eligible projects may access renovation funding and repay costs at settlement.
              </p>
              <div className="flex flex-col gap-6 pt-4">
                {[
                  "Preserve your savings during the listing process",
                  "Funding for projects from $20k to $250k+",
                  "Simple repayment at property settlement",
                  "Access to our complete strategy and execution"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-4 text-primary font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-secondary" /> {text}
                  </div>
                ))}
              </div>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-12 py-8 text-lg font-bold rounded-none shadow-elegant w-fit mt-4">
                <Link to="/consultation">Enquire About Funding</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. PROJECT PORTFOLIO */}
      <section className="bg-muted py-32 border-y border-border">
        <Container clean className="flex flex-col gap-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 text-center md:text-left">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Melbourne Excellence</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight italic">Project Portfolio</h2>
            </div>
            <Button asChild variant="link" className="text-secondary p-0 text-lg font-bold tracking-widest uppercase hover:text-primary transition-colors flex items-center gap-3">
              <Link to="/projects">View All Success Stories <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 'berwick-transformation',
                title: 'Berwick Property Transformation',
                suburb: 'Berwick',
                image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop',
                scope: 'Full Pre-Sale Renovation'
              },
              {
                id: 'devon-meadows-transformation',
                title: 'Devon Meadows Property Transformation',
                suburb: 'Devon Meadows',
                image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop',
                scope: 'Property Improvement Project'
              },
              {
                id: 'beaconsfield-upgrade',
                title: 'Beaconsfield Upper Property Upgrade',
                suburb: 'Beaconsfield Upper',
                image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
                scope: 'Lifestyle Presentation Upgrade'
              }
            ].map((p, i) => (
              <Link key={i} to={`/projects/${p.id}`} className="group flex flex-col gap-6">
                <div className="aspect-[4/3] overflow-hidden bg-white shadow-xl relative rounded-none">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-secondary text-primary font-bold px-6 py-3 shadow-gold">Explore Case Study</div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">{p.scope}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{p.suburb}</span>
                  </div>
                  <h4 className="text-2xl font-display font-bold text-primary group-hover:text-secondary transition-colors">{p.title}</h4>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. FINAL CONSULTATION CTA */}
      <section className="bg-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.05)_0%,transparent_70%)]" />
        <Container clean>
          <div className="flex flex-col items-center text-center gap-12 relative z-10 py-24 border-y border-muted">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">The Next Level of Property Sale</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-primary max-w-4xl leading-tight italic">
              Thinking of Selling Your <span className="text-gold underline decoration-secondary/20 underline-offset-[12px]">Property?</span>
            </h2>
            <p className="text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed">
              A strategic renovation could significantly increase your property's sale result.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white px-16 py-10 text-2xl font-bold rounded-none shadow-elegant group transition-all duration-500 hover:scale-105 active:scale-95">
              <Link to="/consultation" className="flex items-center gap-4">
                Book Property Improvement Consultation <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>

    </div>
  );
}
