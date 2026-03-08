import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';
import { cn } from '@/lib/utils';


export const projects = [
  {
    id: 'berwick-transformation',
    title: 'Berwick Property Transformation',
    suburb: 'Berwick',
    type: 'Strategic Pre-Sale Renovation',
    roi: '433%',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfter12Duffy__1e75abc2.jpg?alt=media&token=ea56624a-6c5f-4031-bc9f-5acb8fe38463',
    description: 'This project involved a complete pre-sale transformation designed to reposition the property for the market.',
    overview: 'This project involved a complete pre-sale transformation designed to reposition the property for the market. The renovation included major improvements to the interior and exterior of the home, creating a modern presentation that significantly increased buyer appeal.',
    challenge: 'The project was delivered during a period of market slowdown caused by rising interest rates which reduced buyer confidence. Despite these challenging conditions the final result significantly exceeded expectations.',
    strategy: 'Strategic renovations designed to increase property value and improve buyer appeal.',
    scope: [
      'Interior modernization',
      'Exterior aesthetic improvements',
      'Major presentation upgrades',
      'Market repositioning'
    ],
    duration: '14 Weeks',
    projectDuration: 'The renovation was completed over a 14 week period.',
    result: 'Despite challenging market conditions, the final result significantly exceeded expectations.',
    metrics: [
      { label: 'Estimated value before renovation', value: '$1,650,000' },
      { label: 'Renovation investment', value: '$105,000' },
      { label: 'Sale price achieved', value: '$2,105,000' },
      { label: 'Value increase', value: '$455,000', highlight: true }
    ],
    gallery: [
      {
        before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FBefor__99df5e08.jpg?alt=media&token=42512108-8e68-45ec-9c44-59364998797f',
        after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfter12Duffy__1e75abc2.jpg?alt=media&token=ea56624a-6c5f-4031-bc9f-5acb8fe38463',
        label: 'Berwick Transformation'
      }
    ]
  },
  {
    id: 'devon-meadows-transformation',
    title: 'Devon Meadows Property Transformation',
    suburb: 'Devon Meadows',
    type: 'Risk Recovery Renovation',
    roi: 'N/A',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterDevonMeadows__827c3949.jpg?alt=media&token=778f3c7b-6ac1-497b-814d-db3966ea1e39',
    description: 'Specialist renovation management to assess, correct, and complete an unfinished project abandoned by another party.',
    overview: 'This project involved a partially completed property that had previously been started by another contractor but left unfinished. Our role was to assess the existing construction, correct previous issues, and complete the renovation while protecting the client from further loss.',
    strategy: 'Renovation requires specialised expertise. It involves solving existing problems and anticipating hidden issues through strategic intervention.',
    scope: [
      'Existing construction assessment',
      'Structural issue correction',
      'Project completion',
      'Risk mitigation'
    ],
    duration: 'Multi-Phase',
    projectDuration: 'Complex intervention to recover and complete a stalled project.',
    result: 'Loss significantly reduced through strategic intervention.',
    metrics: [
      { label: 'Purchase price', value: '$945,000' },
      { label: 'Renovation and government costs', value: '$450,000' },
      { label: 'Outcome', value: 'Loss Significantly Reduced', highlight: true }
    ],
    gallery: [
      {
        before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2F5FisherisBefore__30f81d11.jpg?alt=media&token=6e440628-9844-469b-980b-9685387a2069',
        after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterDevonMeadows__827c3949.jpg?alt=media&token=778f3c7b-6ac1-497b-814d-db3966ea1e39',
        label: 'Devon Meadows Recovery'
      }
    ]
  },
  {
    id: 'beaconsfield-transformation',
    title: 'Beaconsfield Property Transformation',
    suburb: 'Beaconsfield',
    type: 'Auction Purchase Renovation',
    roi: '210%',
    image: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterBeaconsfieldUpper__cb2bb43f.jpg?alt=media&token=1492bec1-31d9-4a20-baaa-16d4688d4d71',
    description: 'Significant upgrades to modernise a home purchased at auction, improving buyer appeal and market alignment.',
    overview: 'This property was purchased at auction and required significant upgrades to modernise the home and improve presentation. The renovation focused on improving buyer appeal and aligning the property with market expectations.',
    strategy: 'Strategic upgrades focusing on modern presentation and buyer appeal alignment.',
    scope: [
      'Auction purchase modernisaton',
      'Interior upgrades',
      'Market alignment strategy',
      'Presentation improvements'
    ],
    duration: '10 Weeks',
    projectDuration: 'Intensive modernization period following auction acquisition.',
    result: 'Successful market alignment and improved buyer appeal.',
    metrics: [
      { label: 'Purchase price', value: '$570,000' },
      { label: 'Renovation investment', value: '$110,000' },
      { label: 'Sale price achieved', value: '$800,000', highlight: true }
    ],
    gallery: [
      {
        before: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FBeforBeaconsfiledupper__a6826761.jpg?alt=media&token=7593da9a-c960-4d7d-972c-03fd820c8158',
        after: 'https://firebasestorage.googleapis.com/v0/b/blink-451505.firebasestorage.app/o/user-uploads%2FdWabIcrKixSdwUX9S0tZ3qjwI0M2%2FAfterBeaconsfieldUpper__cb2bb43f.jpg?alt=media&token=1492bec1-31d9-4a20-baaa-16d4688d4d71',
        label: 'Beaconsfield Modernization'
      }
    ]
  }
];

export function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Featured Property Transformations | PDCON Melbourne" 
        description="Explore our portfolio of high-end property value improvements and strategic pre-sale renovations across Melbourne."
      />
      {/* Page Header */}
      <section className="bg-primary pt-60 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
        </div>
        <Container className="relative z-10 flex flex-col gap-10 text-center items-center">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Strategic Portfolio</span>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white max-w-5xl leading-[1.1] italic">
            Featured Property <br /><span className="text-gold underline decoration-secondary/20 underline-offset-[16px]">Transformations</span>
          </h1>
          <p className="text-2xl text-white/50 max-w-3xl leading-relaxed font-light">
            A selection of strategic property value improvement projects delivered across Melbourne's premium residential markets.
          </p>
        </Container>
      </section>

      {/* Grid */}
      <section className="py-40 bg-white">
        <Container clean className="flex flex-col gap-32">
          <div className="grid grid-cols-1 gap-32">
            {projects.map((project, i) => (
              <div 
                key={project.id} 
                className={cn(
                  "flex flex-col lg:grid lg:grid-cols-12 gap-16 items-center group",
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                )}
              >
                <div className={cn(
                  "lg:col-span-7 relative overflow-hidden",
                  i % 2 === 1 ? "lg:order-2" : ""
                )}>
                  <Link to={`/projects/${project.id}`} className="block overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full aspect-[16/9] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </Link>
                  {/* Case study indicator */}
                  <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-6 py-3 text-[10px] font-bold uppercase tracking-[0.4em] text-primary shadow-xl">
                    Transformation {String(i + 1).padStart(2, '0')}
                  </div>
                </div>

                <div className={cn(
                  "lg:col-span-5 flex flex-col gap-8",
                  i % 2 === 1 ? "lg:order-1 lg:text-right lg:items-end" : ""
                )}>
                  <div className="flex flex-col gap-4">
                    <div className={cn("flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-secondary", i % 2 === 1 ? "justify-end" : "")}>
                      <span>{project.type}</span>
                      <span className="w-8 h-px bg-secondary/30" />
                      <span>{project.suburb}, VIC</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display font-bold text-primary leading-tight italic">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed font-light italic">
                    {project.description}
                  </p>

                  <div className={cn("flex flex-wrap gap-12 py-8 border-y border-muted", i % 2 === 1 ? "justify-end" : "")}>
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">{metric.label}</span>
                        <span className="text-2xl font-display font-bold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="bg-primary text-white hover:bg-secondary hover:text-primary rounded-none h-16 px-12 text-sm font-bold tracking-widest uppercase transition-all duration-500 w-fit">
                    <Link to={`/projects/${project.id}`}>View Full Case Study</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-primary py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--secondary)/0.05)_0%,transparent_70%)]" />
        <Container clean>
          <div className="flex flex-col items-center text-center gap-12 relative z-10 py-24 border-y border-white/10">
            <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">The Pathway to Maximum Value</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight italic">
              Ready to Transform Your <span className="text-gold underline decoration-secondary/20 underline-offset-[12px]">Property?</span>
            </h2>
            <p className="text-2xl text-white/60 font-medium max-w-2xl leading-relaxed">
              Our strategic renovations consistently deliver exceptional returns for vendors.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-white text-primary px-16 py-10 text-2xl font-bold rounded-none shadow-gold transition-all duration-500 hover:scale-105 active:scale-95">
              <Link to="/consultation" className="flex items-center gap-4">
                Book Property Assessment <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-500" />
              </Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
