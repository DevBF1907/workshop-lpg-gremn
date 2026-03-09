import { GraduationCap, Network, BarChart3, LifeBuoy, Users, BookOpen, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import heroBg from "@/assets/fundoHero.png";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}

const attributions = [
  {
    icon: GraduationCap,
    title: "Gestão Pedagógica",
    description: "Acompanhamento e fortalecimento das práticas pedagógicas no Ensino Médio e na Educação Profissional, garantindo a qualidade social."
  },
  {
    icon: Network,
    title: "Integração Curricular",
    description: "Articulação entre o Ensino Médio propedêutico e os cursos técnicos, voltados para o mundo do trabalho."
  },
  {
    icon: BarChart3,
    title: "Monitoramento",
    description: "Acompanhamento de indicadores educacionais e execução de programas voltados à melhoria da aprendizagem."
  },
  {
    icon: LifeBuoy,
    title: "Suporte Escolar",
    description: "Apoio técnico às escolas e à Gerência Regional sobre diretrizes curriculares e normativas educacionais."
  },
  {
    icon: Users,
    title: "Fortalecimento da Rede",
    description: "Promoção da equidade, diversity e protagonismo juvenil nas escolas de Ensino Médio."
  }
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Header / Apresentação - Agora com fundoHero.png */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Workshop Formativo CGEMP"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[0.9]"
        />
        <div className="hero-overlay absolute inset-0" />
        
        <div className="relative z-10 section-container text-center px-6 max-w-5xl mx-auto py-16">
          <AnimatedSection>
      
            <h1 className="font-heading font-bold text-4xl md:text-6xl text-primary-foreground mb-8 drop-shadow-lg">
              I Workshop Formativo – CGEMP 2026
            </h1>

            <div className="space-y-6 max-w-4xl mx-auto">
              <p className="text-primary-foreground/90 text-lg md:text-xl leading-relaxed font-medium">
                A Gerência Regional de Educação Metropolitana Norte tem o prazer de convidá-lo(a) para participar do 
                <span className="text-accent font-bold"> I Workshop Formativo – CGEMP de 2026</span>, com o tema: 
                <strong> “Educar para o Digital: Cidadania, Ética e Pensamento Crítico na Escola Contemporânea”.</strong>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Informativo / Convite */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                Este evento foi pensado especialmente para promover a formação continuada dos professores 
                do Ensino Médio das escolas jurisdicionadas à GRE Metropolitana Norte, fortalecendo práticas pedagógicas 
                integradas à Educação para a Cidadania Digital e Midiática.
              </p>
              <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
              <p className="text-foreground font-heading font-bold text-xl md:text-2xl mt-8 leading-tight">
                Venha fazer parte deste encontro potente de valorização, formação e inspiração!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Sobre a CGEMP */}
      <section className="section-padding bg-secondary">
        <div className="section-container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Sobre a CGEMP
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-lg">
             A Coordenação Geral de Ensino Médio e Profissional da Gerência Regional Metropolitana Norte corresponde à equipe responsável pelo acompanhamento pedagógico de 57 escolas jurisdicionadas à GRE Metropolitana Norte, incluindo escolas regulares, integrais e de ensino Técnico. 
            </p>
          </AnimatedSection>

          {/* CARDS ALINHADOS E CENTRALIZADOS */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {attributions.map((attr, index) => (
              <AnimatedSection key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                <div className="flex items-start gap-4 p-6 bg-card rounded-lg border border-border hover:border-accent transition-all duration-300 h-full group">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/15 flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                    <attr.icon className="text-accent group-hover:text-inherit" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">
                      {attr.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {attr.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                      <BookOpen className="text-accent" size={24} />
                    </div>
                    Nossa História
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      O <span className="text-foreground font-semibold">WORKSHOP FORMATIVO DA CGEMP</span> foi criado em 2025 com o objetivo de fortalecer a prática docente por meio de oficinas formativas que dialogam com saberes pedagógicos e estratégias avaliativas.
                    </p>
                    
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      No primeiro ano de sua realização, contemplou mais de 700 docentes participantes, com propostas que valorizam a reflexão crítica e a inovação, com foco na equidade e transformação social.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex justify-center">
                   <div className="relative">
                      <div className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl"></div>
                      <BookOpen className="w-32 h-32 text-accent relative z-10" />
                   </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;