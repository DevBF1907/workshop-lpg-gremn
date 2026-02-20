import { Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu,
} from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu,
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}

const Inscricao = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="section-padding bg-secondary">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
            Workshops Disponíveis
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o workshop que mais se encaixa no seu perfil e faça sua inscrição.
          </p>
        </div>
      </section>

      {/* Workshop cards */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshops.map((ws, i) => {
              const Icon = iconMap[ws.icon] || BookOpen;
              return (
                <AnimatedSection key={ws.id}>
                  <Link to={`/inscricao/${ws.id}`} className="card-workshop block h-full group">
                    <div className="w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center mb-4 group-hover:bg-accent/25 transition-colors">
                      <Icon size={24} className="text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {ws.name}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{ws.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span>📅 {ws.data}</span>
                      <span>•</span>
                      <span>🕐 {ws.horario}</span>
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
