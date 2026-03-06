import { Link } from "react-router-dom";
import { BookOpen, Brain, GraduationCap, Lightbulb, Rocket, Target, Sparkles } from "lucide-react";
import heroBg from "@/assets/fundoHero.png";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import logo from "@/assets/branco.png";   

const objectives = [
  { icon: BookOpen, text: "Promover formação interdisciplinar de qualidade" },
  { icon: Brain, text: "Estimular o pensamento crítico e reflexivo" },
  { icon: GraduationCap, text: "Desenvolver competências acadêmicas essenciais" },
  { icon: Rocket, text: "Incentivar inovação e uso de tecnologia na educação" },
];

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
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
      {/* Hero Section - Com Imagem de Fundo Restaurada */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Workshop Formativo CGEMP"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[0.9]"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-16">
          <AnimatedSection>
            <div className="mb-8">
              <img
                src={logo}
                alt="1º Workshop Formativo da CGEMP"
                className="w-64 sm:w-80 md:w-[700px] lg:w-[850px] mx-auto object-contain drop-shadow-2xl animate-fade-in"
              />
            </div>

               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-accent/60 hidden sm:block"></div>
                <p className="font-heading font-bold text-base md:text-xl uppercase tracking-[0.3em] text-primary-foreground">
                  <span className="text-accent">16 a 31</span> de Março de 2026
                </p>
                <div className="h-px w-8 bg-accent/60 hidden sm:block"></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
              <Link to="/inscricao" className="btn-gold text-lg px-12 py-4 shadow-2xl hover:scale-105 transition-all duration-300">
                Quero me inscrever
              </Link>
              <Link to="/sobre" className="text-primary-foreground hover:text-accent transition-all font-heading font-bold text-sm md:text-base border-b-2 border-transparent hover:border-accent pb-1">
                Saiba mais sobre o evento
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* O que é o Workshop? */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground">
                O que é o Workshop?
              </h2>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
              <div className="space-y-4 text-muted-foreground text-lg md:text-xl leading-relaxed">
                <p>
                  O Workshop Formativo CGEMP é um evento de formação continuada de excelência, voltado para
                  educadores, gestores e profissionais da educação jurisdicionados à GRE Metropolitana Norte.
                </p>
                <p className="font-medium text-foreground">
                  Oferecemos oficinas práticas em diversas áreas do conhecimento, focadas na inovação e na qualidade do ensino.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Objetivo Geral */}
      <section className="section-padding bg-secondary/50">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center bg-card p-10 md:p-16 rounded-[3rem] shadow-sm border border-border">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-accent/15 mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                <Target className="text-accent" size={40} />
              </div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
                Objetivo Geral
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
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
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Objetivos Específicos
            </h2>
            <p className="text-muted-foreground">Pilares estratégicos da nossa jornada formativa</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {objectives.map((obj, i) => (
              <AnimatedSection key={i}>
                <div className="flex items-start gap-5 p-8 bg-card rounded-2xl border border-border hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full group">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-all">
                    <obj.icon className="text-accent group-hover:text-inherit" size={28} />
                  </div>
                  <p className="text-foreground font-heading font-semibold text-lg leading-snug">
                    {obj.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <img
          src={heroBg}
          alt="Fundo Final"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4] contrast-[0.9]"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 section-container text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-8 border border-accent/30 backdrop-blur-sm">
              <Lightbulb className="text-accent" size={32} />
            </div>

            <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6 drop-shadow-md">
              Não perca essa oportunidade!
            </h2>

            <p className="text-primary-foreground/80 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Inscreva-se agora e faça parte desta transformação histórica na educação da nossa regional.
            </p>

            <Link to="/inscricao" className="btn-gold text-xl px-12 py-5 shadow-2xl">
              Inscreva-se agora
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;