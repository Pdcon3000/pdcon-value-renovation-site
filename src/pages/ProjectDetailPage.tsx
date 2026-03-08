import React from 'react';
import { useParams, Link } from '@tanstack/react-router';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/button';
import { BeforeAfterSlider } from '@/components/ui/BeforeAfterSlider';
import { ArrowLeft, CheckCircle2, TrendingUp, Clock, Target, Home } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from './ProjectsPage';
import { SEO } from '@/components/ui/SEO';

export function ProjectDetailPage() {
  const { projectId } = useParams({ from: '/projects/$projectId' });
  const project = projects.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  const isBerwick = project.id === 'berwick-transformation';

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={`${project.title} | Case Study`} 
        description={`Detailed case study: ${project.title}. Strategic renovation in ${project.suburb}, Victoria.`}
      />
      {/* Back Button */}
      <div className="bg-white pt-32 pb-8 border-b border-muted">
        <Container clean className="flex items-center">
          <Link to="/projects" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-secondary transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Portfolio
          </Link>
        </Container>
      </div>

      {/* Project Header */}
      <section className="py-24 bg-white">
        <Container clean className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">{project.type}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{project.suburb}, VIC</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
                {project.title}
              </h1>
            </div>
            <p className="text-2xl text-muted-foreground leading-relaxed font-medium italic border-l-4 border-secondary pl-8 py-2">
              "{project.description}"
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 border-t border-muted pt-12">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Investment ROI</span>
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <TrendingUp className="w-5 h-5 text-secondary" /> {project.roi}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Renovation Duration</span>
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <Clock className="w-5 h-5 text-secondary" /> {project.duration || '2–3 Weeks'}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Market Result</span>
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <Target className="w-5 h-5 text-secondary" /> Sold Post-Renovation
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Before/After Section */}
      <section className="py-12 bg-white overflow-hidden">
        <Container clean>
          <div className="flex flex-col gap-24">
            {project.gallery ? (
              project.gallery.map((item, i) => (
                <div key={i} className="flex flex-col gap-8">
                  <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                    <h2 className="text-3xl font-display font-bold text-primary italic">{item.label}</h2>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Slide to compare transformation</p>
                  </div>
                  <BeforeAfterSlider 
                    beforeImage={item.before} 
                    afterImage={item.after} 
                    beforeLabel="Original State"
                    afterLabel="Strategic Transformation"
                    className="h-[500px] lg:h-[800px] shadow-2xl rounded-sm border border-muted"
                  />
                </div>
              ))
            ) : (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                  <h2 className="text-3xl font-display font-bold text-primary">The Visual Transformation</h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Slide to compare before and after</p>
                </div>
                <BeforeAfterSlider 
                  beforeImage={project.image.replace('crop', 'crop&brightness=0.6')} 
                  afterImage={project.image} 
                  beforeLabel="Original State"
                  afterLabel="PDCON Strategic Upgrade"
                  className="h-[500px] lg:h-[800px] shadow-2xl rounded-sm"
                />
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Detailed Content */}
      <section className="py-32 bg-white">
        <Container clean className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7 flex flex-col gap-16">
            {/* Overview */}
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-display font-bold text-primary italic">Overview</h3>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {isBerwick ? (
                  <>
                    <p>This project involved a full strategic renovation of a residential property located in Berwick, Victoria.</p>
                    <p>The property had strong underlying value but required significant improvements to meet modern buyer expectations and maximise its market potential.</p>
                    <p>The goal was to deliver a comprehensive renovation that would reposition the property in the market and significantly improve buyer appeal.</p>
                  </>
                ) : (
                  <p>{project.overview || project.description}</p>
                )}
              </div>
            </div>

            {/* The Challenge */}
            {(isBerwick || project.challenge) && (
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-display font-bold text-primary italic">The Challenge</h3>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  {isBerwick ? (
                    <>
                      <p>The renovation took place during a period of market uncertainty.</p>
                      <p>Interest rate increases had recently reduced buyer confidence and the property market was experiencing a slowdown.</p>
                      <p>This created additional pressure to ensure that the renovation strategy focused on improving presentation, desirability, and perceived value.</p>
                      <p>The challenge was to deliver a renovation that would still achieve a strong market outcome despite these conditions.</p>
                    </>
                  ) : (
                    <p>{project.challenge}</p>
                  )}
                </div>
              </div>
            )}

            {/* Renovation Strategy */}
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-display font-bold text-primary italic">Renovation Strategy</h3>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {isBerwick ? (
                  <>
                    <p>The strategy focused on a full presentation transformation designed to modernise the home and align it with buyer expectations in the Berwick market.</p>
                    <p>The renovation prioritised improvements that deliver the highest visual impact and buyer appeal.</p>
                  </>
                ) : (
                  <p>{project.strategy || `Our strategic renovation focused on the high-impact areas that drive buyer emotion and perceived value.`}</p>
                )}
              </div>
            </div>

            {/* Renovation Scope */}
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-display font-bold text-primary italic">Renovation Scope</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Array.isArray(project.scope) ? (
                  project.scope.map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-muted border border-border rounded-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="font-bold font-heading text-primary">{item}</span>
                    </div>
                  ))
                ) : (
                  [
                    'New flooring throughout the home',
                    'New kitchen installation',
                    'Full renovation of bathroom',
                    'New electrical lighting upgrades',
                    'Landscaping improvements',
                    'External rendering',
                    'Interior presentation upgrades'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-6 bg-muted border border-border rounded-sm">
                      <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                      <span className="font-bold font-heading text-primary">{item}</span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Project Duration */}
            {isBerwick && (
              <div className="flex flex-col gap-8">
                <h3 className="text-3xl font-display font-bold text-primary italic">Project Duration</h3>
                <div className="prose prose-lg text-muted-foreground max-w-none">
                  <p>The renovation was completed over a 14-week period including planning, renovation works, and final presentation improvements.</p>
                </div>
              </div>
            )}

            {/* The Result */}
            <div className="flex flex-col gap-8">
              <h3 className="text-3xl font-display font-bold text-primary italic">The Result</h3>
              <div className="prose prose-lg text-muted-foreground max-w-none">
                {isBerwick ? (
                  <>
                    <p>Despite the challenging market conditions and reduced buyer confidence caused by interest rate increases, the final outcome exceeded expectations.</p>
                    <p>The property achieved a significantly stronger sale result than originally anticipated.</p>
                    <p>The transformation demonstrates the impact that strategic pre-sale renovation can have on property presentation and buyer demand.</p>
                  </>
                ) : project.result ? (
                  <p>{project.result}</p>
                ) : (
                  <p>The renovation delivered a strong market outcome through strategic presentation improvements.</p>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar — Result Summary */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 flex flex-col gap-12 bg-primary p-12 text-white shadow-2xl rounded-sm">
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold uppercase tracking-widest text-secondary">Project Statistics</span>
                <h3 className="text-3xl font-display font-bold italic">Result Summary</h3>
              </div>

              <div className="flex flex-col gap-8">
                {project.metrics ? (
                  project.metrics.map((stat, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{stat.label}</span>
                      <span className={cn("text-4xl font-display font-bold", stat.highlight ? "text-secondary" : "text-white")}>{stat.value}</span>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Investment ROI</span>
                      <span className="text-4xl font-display font-bold text-secondary">{project.roi}</span>
                    </div>
                    <div className="flex items-start gap-4 text-sm font-semibold text-white/60 italic border-l-2 border-secondary pl-6">
                      Market-leading presentation and faster sales turnaround achieved through strategic upgrades.
                    </div>
                  </>
                )}
              </div>

              {isBerwick && (
                <div className="pt-8 border-t border-white/10">
                  <div className="text-5xl font-display font-bold text-secondary mb-2 animate-reveal">
                    $455,000
                  </div>
                  <div className="text-xl font-display font-bold">Value Increase</div>
                </div>
              )}

              <Button asChild className="w-full bg-secondary text-primary font-bold hover:bg-white rounded-none h-14">
                <Link to="/consultation">Book Similar Project Consultation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Other Projects */}
      <section className="py-32 bg-muted border-t border-border">
        <Container clean>
          <div className="flex flex-col gap-12">
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <h2 className="text-3xl font-display font-bold text-primary">Other Success Stories</h2>
              <Button asChild variant="link" className="text-secondary p-0 text-xs font-bold uppercase tracking-widest hover:text-primary">
                <Link to="/projects">View Full Portfolio <ArrowLeft className="w-4 h-4 ml-2 rotate-180" /></Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.filter(p => p.id !== projectId).slice(0, 3).map((p) => (
                <Link key={p.id} to={`/projects/${p.id}`} className="group flex flex-col gap-6">
                  <div className="aspect-video overflow-hidden rounded-sm bg-white border border-border shadow-sm group-hover:shadow-xl transition-all duration-500">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{p.suburb}</span>
                    <h4 className="text-xl font-display font-bold text-primary group-hover:text-secondary transition-colors">{p.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
