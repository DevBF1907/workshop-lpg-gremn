import { Link } from "react-router-dom";
import { BookOpen, Brain, GraduationCap, Lightbulb, Rocket, Target } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { useScrollAnimation } from "@/components/useScrollAnimation";

const objectives = [
  { icon: BookOpen, text: "Promover formação interdisciplinar de qualidade" },
  { icon: Brain, text: "Estimular o pensamento crítico e reflexivo" },
  { icon: GraduationCap, text: "Desenvolver competências acadêmicas essenciais" },
  { icon: Rocket, text: "Incentivar inovação e uso de tecnologia na educação" },
];

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return (
    <div ref={ref} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  );
}

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Workshop Formativo CGEMP"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 section-container text-center py-32">
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-7xl text-primary-foreground mb-6 animate-fade-in-up">
            Workshop Formativo
            <span className="block gradient-text mt-2">CGEMP</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-body animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Transformando a educação através da formação continuada e inovação pedagógica
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-6 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <span className="text-primary-foreground/60 text-sm font-body">📅 15 a 20 de Março de 2026</span>
            <span className="hidden sm:inline text-primary-foreground/30">•</span>
            <span className="text-primary-foreground/60 text-sm font-body">📍 Manaus, AM</span>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/inscricao" className="btn-gold text-lg px-10 py-4">
              Faça sua inscrição
            </Link>
          </div>
        </div>
      </section>

      {/* Apresentação */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                O que é o Workshop?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                O Workshop Formativo CGEMP é um evento de formação continuada voltado para
                educadores, gestores e profissionais da educação. Com uma programação diversificada
                e interdisciplinar, o evento busca atualizar práticas pedagógicas e promover a
                troca de experiências entre profissionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Destinado a professores do Ensino Fundamental e Médio, o workshop oferece
                oficinas práticas em diversas áreas do conhecimento, fortalecendo a formação
                docente e a qualidade do ensino.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Objetivo Geral */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Objetivo Geral
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Promover a formação continuada de educadores, proporcionando espaços de reflexão,
                inovação e desenvolvimento profissional que impactem positivamente a qualidade
                do ensino e a aprendizagem dos estudantes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Objetivos Específicos */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground text-center mb-12">
              Objetivos Específicos
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {objectives.map((obj, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-colors duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center">
                    <obj.icon className="text-accent" size={24} />
                  </div>
                  <p className="text-foreground font-body leading-relaxed">{obj.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
        <div className="relative z-10 section-container text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <Lightbulb className="text-accent" size={32} />
            </div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Não perca essa oportunidade!
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">
              Inscreva-se agora e faça parte dessa transformação na educação.
            </p>
            <Link to="/inscricao" className="btn-gold text-lg px-10 py-4">
              Inscreva-se agora
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
