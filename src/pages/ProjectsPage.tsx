import React from 'react';
import { Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Filter, TrendingUp } from 'lucide-react';
import { SEO } from '@/components/ui/SEO';


export const projects = [
  {
    id: 'berwick-transformation',
    title: 'Berwick Pre-Sale Renovation Transformation',
    suburb: 'Berwick',
    type: 'Strategic Pre-Sale Renovation',
    roi: '433%',
    image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop',
    description: 'A comprehensive pre-sale renovation that achieved a record sale price in Berwick despite market uncertainty.',
    overview: 'This project involved a full strategic renovation of a residential property located in Berwick, Victoria. The property had strong underlying value but required significant improvements to meet modern buyer expectations and maximise its market potential. The goal was to deliver a comprehensive renovation that would reposition the property in the market and significantly improve buyer appeal.',
    challenge: 'The renovation took place during a period of market uncertainty. Interest rate increases had recently reduced buyer confidence and the property market was experiencing a slowdown. This created additional pressure to ensure that the renovation strategy focused on improving presentation, desirability, and perceived value. The challenge was to deliver a renovation that would still achieve a strong market outcome despite these conditions.',
    strategy: 'The strategy focused on a full presentation transformation designed to modernise the home and align it with buyer expectations in the Berwick market. The renovation prioritised improvements that deliver the highest visual impact and buyer appeal.',
    scope: [
      'New flooring throughout the home',
      'New kitchen installation',
      'Full renovation of bathroom',
      'New electrical lighting upgrades',
      'Landscaping improvements',
      'External rendering',
      'Interior presentation upgrades'
    ],
    duration: '14 Weeks',
    result: 'Despite the challenging market conditions and reduced buyer confidence caused by interest rate increases, the final outcome exceeded expectations. The property achieved a significantly stronger sale result than originally anticipated. The transformation demonstrates the impact that strategic pre-sale renovation can have on property presentation and buyer demand.',
    metrics: [
      { label: 'Estimated value before renovation', value: '$1,650,000' },
      { label: 'Renovation investment', value: '$105,000' },
      { label: 'Sale price achieved', value: '$2,105,000' },
      { label: 'Value increase', value: '$455,000', highlight: true }
    ]
  },
  {
    id: 'devon-meadows-transformation',
    title: 'Devon Meadows Property Transformation',
    suburb: 'Devon Meadows',
    type: 'Property Improvement Project',
    roi: '350%',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    description: 'Transforming a rural property with modern coastal finishes to broaden buyer appeal.'
  },
  {
    id: 'beaconsfield-upgrade',
    title: 'Beaconsfield Upper Property Upgrade',
    suburb: 'Beaconsfield Upper',
    type: 'Lifestyle Property Presentation Upgrade',
    roi: '390%',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
    description: 'Elevating a hilltop residence with premium materials and custom architectural lighting.'
  },
  {
    id: 'berwick-refresh',
    title: 'Berwick Property Refresh',
    suburb: 'Berwick',
    type: 'Cosmetic Upgrade',
    roi: '310%',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    description: 'Targeted interior improvements focusing on light, volume, and modern flooring.'
  }
];

export function ProjectsPage() {
  return (
    <div className="flex flex-col w-full">
      <SEO 
        title="Project Portfolio" 
        description="Explore our portfolio of high-end property transformations across Melbourne, featuring before and after results."
      />
      {/* Page Header */}
      <section className="bg-primary pt-48 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        </div>
        <Container className="relative z-10 flex flex-col gap-8 text-center items-center py-0">
          <span className="text-xs font-bold uppercase tracking-[0.5em] text-secondary">Success Stories</span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white max-w-4xl leading-tight">
            Proven <span className="text-gold italic">Value Increases</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl leading-relaxed">
            Explore our portfolio of strategic renovations that have consistently delivered exceptional returns for Melbourne homeowners.
          </p>
        </Container>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-white">
        <Container clean className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-muted pb-8">
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-primary">
              <span className="text-secondary border-b-2 border-secondary pb-8 -mb-[34px] cursor-pointer">All Projects</span>
              <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Pre-Sale</span>
              <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Bathroom</span>
              <span className="opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Cosmetic</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground bg-muted px-4 py-2 rounded-sm cursor-pointer hover:bg-muted/80 transition-colors">
              <Filter className="w-3.5 h-3.5" /> Filter Results
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {projects.map((project, i) => (
              <Link 
                key={project.id} 
                to={`/projects/${project.id}`}
                className="group flex flex-col gap-8"
              >
                <div className="aspect-[16/10] overflow-hidden bg-muted relative rounded-sm shadow-elegant">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-6 left-6 flex flex-col gap-2">
                    <div className="bg-white/90 backdrop-blur-md px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-primary flex items-center gap-2">
                      <TrendingUp className="w-3 h-3 text-secondary" /> ROI: {project.roi}
                    </div>
                  </div>
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <Button className="bg-secondary text-primary font-bold rounded-none h-12 shadow-gold">
                      View Case Study
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">{project.type}</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{project.suburb}, VIC</span>
                  </div>
                  <h3 className="text-3xl font-display font-bold text-primary group-hover:text-secondary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
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
