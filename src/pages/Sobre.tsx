import { Target, Eye, Heart, Star } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import logosobre from "@/assets/fundoSobre.png";


function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}




const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section
        className="relative py-16 md:py-24 min-h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${logosobre})` }}
      >
        {/* Conteúdo */}
        <div className="relative z-10 section-container text-center">
          <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
            I Workshop Formativo – CGEMP 2026
          </h1>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A Gerência Regional de Educação Metropolitana Norte tem o prazer de convidá-lo(a) para participar do 
            <strong> I Workshop Formativo – CGEMP de 2026</strong>, com o tema: 
            <strong> “Educar para o Digital: Cidadania, Ética e Pensamento Crítico na Escola Contemporânea”.</strong>
          </p>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Este evento foi pensado especialmente com o objetivo de promover a formação continuada dos professores 
            do Ensino Médio das escolas jurisdicionadas à GRE Metropolitana Norte, fortalecendo práticas pedagógicas 
            integradas à Educação para a Cidadania Digital e Midiática, de modo a subsidiar o desenvolvimento de 
            competências críticas, éticas e responsáveis no uso das tecnologias e das mídias, em consonância com 
            a BNCC, o Currículo de Pernambuco e a formação integral das estudantes e dos estudantes.
          </p>

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed mt-4">
            Contamos com sua presença para juntos trilharmos caminhos que tornem a aprendizagem mais significativa, 
            emancipadora e alinhada aos desafios do nosso tempo. Venha fazer parte deste encontro potente de 
            valorização, formação e inspiração!
          </p>
        </div>
      </section>

  {/* Sobre a CGEMP */}
<section className="section-padding bg-background">
  <div className="section-container max-w-6xl mx-auto">
    <AnimatedSection>
      <h2 className="font-heading font-bold text-3xl text-foreground mb-6 text-center">
        Sobre a CGEMP
      </h2>

      <p className="text-muted-foreground leading-relaxed mb-10 text-center max-w-3xl mx-auto">
        A Coordenação Geral de Ensino Médio e Profissional da Gerência Regional Metropolitana Norte
        corresponde à equipe responsável pelo acompanhamento pedagógico das escolas de Ensino Médio
        e Técnico. Atualmente, no ano de 2026, a coordenação acompanha 57 escolas jurisdicionadas
        à referida Regional.
      </p>

      {/* GRID DE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-3 text-foreground">
            Gestão Pedagógica
          </h3>
          <p className="text-muted-foreground">
            Acompanhamento e fortalecimento das práticas pedagógicas no Ensino Médio
            e na Educação Profissional, garantindo a qualidade social e o
            desenvolvimento integral dos alunos.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-3 text-foreground">
            Integração Curricular
          </h3>
          <p className="text-muted-foreground">
            Articulação entre o Ensino Médio propedêutico e os cursos técnicos,
            voltados para o mundo do trabalho e demandas do território.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-3 text-foreground">
            Monitoramento
          </h3>
          <p className="text-muted-foreground">
            Acompanhamento de indicadores educacionais e execução de programas
            voltados à melhoria da aprendizagem e da qualidade educacional.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-3 text-foreground">
            Suporte Escolar
          </h3>
          <p className="text-muted-foreground">
            Apoio técnico às escolas e à Gerência Regional sobre diretrizes
            curriculares, orientações pedagógicas e normativas educacionais.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-card p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <h3 className="font-semibold text-xl mb-3 text-foreground">
            Fortalecimento da Rede
          </h3>
          <p className="text-muted-foreground">
            Promoção da equidade, diversidade e protagonismo juvenil nas escolas
            de Ensino Médio, fortalecendo a rede educacional.
          </p>
        </div>

      </div>
    </AnimatedSection>
  </div>
</section>

      {/* História */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">
              Nossa História
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-4">
              O WORKSHOP FORMATIVO DA CGEMP foi criado em 2025 com o objetivo de fortalecer a prática docente
              por meio de oficinas formativas que dialogam com saberes pedagógicos, estratégias avaliativas e
              temas contemporâneos, sempre alinhadas ao tema do ano letivo da Secretaria de Educação de Pernambuco.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              No primeiro ano de sua realização, contemplou mais de 700 docentes participantes, com propostas
              formativas que valorizam a reflexão crítica e a inovação, com foco na equidade, transformação
              social e desenvolvimento interdimensional dos nossos estudantes da Rede.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Sobre;