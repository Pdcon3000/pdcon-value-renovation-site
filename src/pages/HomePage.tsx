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
            alt="Property Value Improvement Specialists" 
            className="w-full h-full object-cover brightness-[0.3] scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-transparent to-primary" />
        </div>

        <Container className="relative z-10 text-center flex flex-col items-center">
          <span className="text-secondary font-bold uppercase tracking-[0.4em] text-xs mb-8 animate-reveal stagger-1">
            Melbourne's Property Value Improvement Specialists
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white mb-8 max-w-6xl leading-[1.05] animate-reveal stagger-2">
            Strategic Property <span className="text-gold italic">Value Improvement.</span>
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
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary italic">Positioning Your Asset for Maximum Value</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Vendors Preparing to Sell",
                  desc: "We specialise in strategic pre-sale renovations that significantly increase buyer appeal and maximise final sale price through professional presentation."
                },
                {
                  title: "Buyers Improving a New Purchase",
                  desc: "Strategic improvements for newly purchased properties, focusing on modernising the home and increasing immediate equity and lifestyle value."
                },
                {
                  title: "Real Estate Agents",
                  desc: "We partner with agents to solve presentation challenges for their clients, ensuring properties are listing-ready and positioned for top-tier results."
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
                  { label: "Estimated value before renovation", value: "$1,650,000" },
                  { label: "Renovation investment", value: "$105,000" },
                  { label: "Sale price achieved", value: "$2,105,000" },
                  { label: "Value increase", value: "$455,000", highlight: true }
                ].map((stat, i) => (
                  <div key={i} className="bg-primary p-10 flex flex-col gap-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">{stat.label}</span>
                    <span className={cn("text-4xl md:text-5xl font-display font-bold", stat.highlight ? "text-secondary" : "text-white")}>{stat.value}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-6 items-start">
                <p className="text-5xl md:text-7xl font-display font-bold text-secondary tracking-tight">
                  $455,000 <span className="text-2xl md:text-3xl uppercase tracking-widest ml-2">Value Increase</span>
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
                    src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfter12Duffy__1e75abc2.jpg?alt=media&token=ea56624a-6c5f-4031-bc9f-5acb8fe38463" 
                    alt="Berwick Transformation - After" 
                    className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                <div className="col-span-4 flex flex-col gap-6 mt-20">
                  <div className="overflow-hidden shadow-2xl">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfter12Duffy__1e75abc2.jpg?alt=media&token=ea56624a-6c5f-4031-bc9f-5acb8fe38463" 
                      alt="Berwick Living Space" 
                      className="w-full aspect-square object-cover"
                    />
                  </div>
                  <div className="overflow-hidden shadow-2xl relative">
                    <img 
                      src="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FBefor__99df5e08.jpg?alt=media&token=42512108-8e68-45ec-9c44-59364998797f" 
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

      {/* 4. REAL PROPERTY TRANSFORMATIONS */}
      <section className="bg-white py-40">
        <Container clean className="flex flex-col gap-32">
          <div className="text-center max-w-4xl mx-auto flex flex-col gap-8">
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Value Optimisation</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-primary italic">Real Property Transformations</h2>
            <p className="text-xl font-heading font-medium text-secondary italic">Strategic renovations designed to increase property value and improve buyer appeal.</p>
            <p className="text-muted-foreground text-xl font-light leading-relaxed max-w-3xl mx-auto">
              Every property presents a unique opportunity. Our renovation strategy focuses on improving presentation, solving complex renovation challenges, and maximising market potential.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-48">
            {/* Project 1: Berwick */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <BeforeAfterSlider 
                  beforeImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FBefor__99df5e08.jpg?alt=media&token=42512108-8e68-45ec-9c44-59364998797f"
                  afterImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfter12Duffy__1e75abc2.jpg?alt=media&token=ea56624a-6c5f-4031-bc9f-5acb8fe38463"
                  beforeLabel="Original Presentation"
                  afterLabel="Strategic Transformation"
                  className="h-[450px] md:h-[700px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-muted"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Berwick Property Transformation</span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-primary italic leading-tight">Strategic Pre-Sale Renovation</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  This project involved a complete pre-sale transformation designed to reposition the property for the market. The renovation included major improvements to the interior and exterior of the home, creating a modern presentation that significantly increased buyer appeal.
                </p>
                
                <div className="grid grid-cols-1 gap-6 py-8 border-y border-muted">
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Estimated value before renovation</span>
                    <span className="text-2xl font-display font-bold text-primary">$1,650,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Renovation investment</span>
                    <span className="text-2xl font-display font-bold text-primary">$105,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Sale price achieved</span>
                    <span className="text-2xl font-display font-bold text-primary">$2,105,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">Value increase</span>
                    <span className="text-4xl font-display font-bold text-secondary">$455,000</span>
                  </div>
                </div>

                <div className="bg-secondary/10 p-8 border-l-4 border-secondary">
                  <p className="text-secondary font-display font-bold text-3xl italic">$455,000 VALUE INCREASE</p>
                </div>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 px-12 text-sm font-bold tracking-widest uppercase transition-all duration-300 w-fit">
                  <Link to="/projects/berwick-transformation">View Full Case Study</Link>
                </Button>
              </div>
            </div>

            {/* Project 2: Devon Meadows */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center lg:flex-row-reverse">
              <div className="lg:col-span-7 lg:order-2">
                <BeforeAfterSlider 
                  beforeImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2F5FisherisBefore__30f81d11.jpg?alt=media&token=6e440628-9844-469b-980b-9685387a2069"
                  afterImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterDevonMeadows__827c3949.jpg?alt=media&token=778f3c7b-6ac1-497b-814d-db3966ea1e39"
                  beforeLabel="Unfinished Condition"
                  afterLabel="Strategic Completion"
                  className="h-[450px] md:h-[700px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-muted"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-10 lg:order-1 lg:text-right lg:items-end">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Devon Meadows Property Transformation</span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-primary italic leading-tight">Risk Recovery Renovation</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  This project involved a partially completed property that had previously been started by another contractor but left unfinished. Our role was to assess the existing construction, correct previous issues, and complete the renovation while protecting the client from further loss.
                </p>
                
                <div className="grid grid-cols-1 gap-6 py-8 border-y border-muted w-full">
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Purchase price</span>
                    <span className="text-2xl font-display font-bold text-primary">$945,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Renovation and government costs</span>
                    <span className="text-2xl font-display font-bold text-primary">$450,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">Outcome</span>
                    <span className="text-xl font-display font-bold text-secondary">Loss significantly reduced through strategic intervention.</span>
                  </div>
                </div>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 px-12 text-sm font-bold tracking-widest uppercase transition-all duration-300 w-fit">
                  <Link to="/projects/devon-meadows-transformation">View Full Case Study</Link>
                </Button>
              </div>
            </div>

            {/* Project 3: Beaconsfield */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7">
                <BeforeAfterSlider 
                  beforeImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FBeforBeaconsfiledupper__a6826761.jpg?alt=media&token=7593da9a-c960-4d7d-972c-03fd820c8158"
                  afterImage="https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterBeaconsfieldUpper__cb2bb43f.jpg?alt=media&token=1492bec1-31d9-4a20-baaa-16d4688d4d71"
                  beforeLabel="Auction Purchase Condition"
                  afterLabel="Modernised Presentation"
                  className="h-[450px] md:h-[700px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-muted"
                />
              </div>
              <div className="lg:col-span-5 flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-secondary">Beaconsfield Property Transformation</span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-primary italic leading-tight">Auction Purchase Renovation</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  This property was purchased at auction and required significant upgrades to modernise the home and improve presentation. The renovation focused on improving buyer appeal and aligning the property with market expectations.
                </p>
                
                <div className="grid grid-cols-1 gap-6 py-8 border-y border-muted">
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Purchase price</span>
                    <span className="text-2xl font-display font-bold text-primary">$570,000</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-muted pb-4">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">Renovation investment</span>
                    <span className="text-2xl font-display font-bold text-primary">$110,000</span>
                  </div>
                  <div className="flex justify-between items-end pt-4">
                    <span className="text-xs uppercase tracking-widest text-secondary font-bold">Sale price achieved</span>
                    <span className="text-4xl font-display font-bold text-secondary">$800,000</span>
                  </div>
                </div>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-none h-16 px-12 text-sm font-bold tracking-widest uppercase transition-all duration-300 w-fit">
                  <Link to="/projects/beaconsfield-transformation">View Full Case Study</Link>
                </Button>
              </div>
            </div>
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
                subtitle: "(Strategy & Development Group)", 
                icon: Building2,
                desc: "Strategic identification of property potential and market positioning within the Ghan Group ecosystem."
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
                subtitle: "(Strategic Funding Partners)", 
                icon: BadgeDollarSign,
                desc: "Strategic capital solutions for property improvement projects, enabling vendors to renovate now and pay at settlement."
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

      {/* 9. FREE GUIDE LEAD CAPTURE */}
      <section className="bg-muted py-32 border-y border-border">
        <Container clean>
          <div className="max-w-5xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-8">
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Expert Resource</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary italic leading-tight">
                Free Guide for Melbourne Homeowners Preparing to Sell
              </h2>
              <div className="p-8 bg-primary text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 -translate-y-1/2 translate-x-1/2 blur-2xl" />
                <h3 className="text-2xl font-display font-bold mb-4 italic">How to Increase Property Value Before Selling</h3>
                <p className="text-white/60 mb-6 font-light">Discover the strategic improvements that deliver the highest return on investment in the current Melbourne market.</p>
                <div className="w-12 h-1 bg-secondary" />
              </div>
            </div>

            <div className="bg-white p-12 shadow-2xl border border-border w-full">
              <form onSubmit={handleAssessmentSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Full Name</label>
                  <Input name="name" required placeholder="Name" className="rounded-none border-muted h-12" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</label>
                  <Input name="email" type="email" required placeholder="email@address.com" className="rounded-none border-muted h-12" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Suburb</label>
                    <Input name="suburb" required placeholder="Suburb" className="rounded-none border-muted h-12" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Estimated property value</label>
                    <Input name="value" placeholder="e.g. $1.5M" className="rounded-none border-muted h-12" />
                  </div>
                </div>
                <Button type="submit" disabled={isSubmitting} className="bg-primary text-white hover:bg-secondary hover:text-primary h-16 text-sm font-bold uppercase tracking-widest transition-all duration-500 rounded-none mt-4">
                  {isSubmitting ? 'Processing...' : 'Download Guide'}
                </Button>
              </form>
            </div>
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
            <p className="text-2xl text-muted-foreground font-medium max-w-2xl leading-relaxed italic">
              A strategic renovation may significantly increase your property's market value and buyer appeal.
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
