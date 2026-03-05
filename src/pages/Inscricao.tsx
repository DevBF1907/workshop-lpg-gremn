import { Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, Briefcase, Flag, Accessibility, Brain, HelpingHand, Newspaper,
  Sparkles
} from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";


const iconMap: Record<string, LucideIcon> = {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, Briefcase, Flag, Accessibility, Brain, HelpingHand, Newspaper
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}

const Inscricao = () => {
  return (
    <div className="pt-20">
      {/* Header / Hero - Sem Imagem de Fundo */}
      <section className="relative min-h-[350px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{ background: "var(--hero-gradient)" }} 
        />
        
        <div className="relative z-10 section-container text-center px-6 max-w-5xl mx-auto py-16">
          <AnimatedSection>
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary-foreground mb-6 drop-shadow-lg">
              Workshops Disponíveis
            </h1>
            <p className="text-primary-foreground/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Escolha o workshop que mais se encaixa no seu perfil e garanta sua participação neste encontro de inovação pedagógica.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl text-foreground">
              Nossa Programação
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((ws) => {
              const Icon = iconMap[ws.icon] || BookOpen;
              return (
                <AnimatedSection key={ws.id}>
                  <Link to={`/inscricao/${ws.id}`} className="group relative bg-card p-8 rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-accent transition-all duration-300 block h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-300">
                      <Icon size={28} className="text-accent group-hover:text-inherit" />
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                      {ws.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 leading-relaxed">
                      {ws.description}
                    </p>
                    
                    <div className="mt-auto space-y-3 pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                        <span className="p-1 rounded bg-secondary text-secondary-foreground text-[10px] uppercase">Data</span>
                        {ws.data}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                        <span className="p-1 rounded bg-secondary text-secondary-foreground text-[10px] uppercase">Turnos</span>
                        {ws.sessions.map(s => s.shift).join(" e ")}
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
                        <span className="p-1 rounded bg-secondary text-secondary-foreground text-[10px] uppercase">Local</span>
                        {ws.location}
                      </div>
                    </div>

                    <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-accent font-bold">
                      →
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inscricao;