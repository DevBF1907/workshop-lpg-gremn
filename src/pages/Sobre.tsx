import { Target, Eye, Heart, Star } from "lucide-react";
import { useScrollAnimation } from "@/components/useScrollAnimation";
import logosobre from "@/assets/fundoSobre.png";


function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useScrollAnimation();
  return <div ref={ref} className={`animate-on-scroll ${className}`}>{children}</div>;
}

const values = [
  "Excelência acadêmica",
  "Compromisso com a educação pública",
  "Inovação pedagógica",
  "Inclusão e diversidade",
  "Colaboração e trabalho em equipe",
  "Ética e transparência",
];

const team = [
  { name: "Prof.ª Dra. Maria Helena", role: "Coordenadora Geral" },
  { name: "Prof. Dr. José Ricardo", role: "Vice-Coordenador" },
  { name: "Prof.ª Dra. Ana Paula", role: "Coordenação Pedagógica" },
  { name: "Prof. Dr. Carlos Eduardo", role: "Coordenação de Tecnologia" },
  { name: "Prof.ª Msc. Luciana Borges", role: "Secretaria Executiva" },
  { name: "Prof. Msc. Felipe Augusto", role: "Comunicação e Marketing" },
];

const Sobre = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section
  className="relative py-16 md:py-24 min-h-[400px] bg-cover bg-center"
  style={{ backgroundImage: `url(${logosobre})` }}
>
  

  {/* Conteúdo */}
  <div className="relative z-10 section-container text-center">
    <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">
      Sobre a CGEMP
    </h1>
    <p className="text-muted-foreground  text-lg max-w-2xl mx-auto">
      Conheça a história, missão e valores da Coordenação Geral de Ensino Médio e Profissional.
    </p>
  </div>
</section>

      {/* História */}
      <section className="section-padding bg-background">
        <div className="section-container max-w-3xl mx-auto">
          <AnimatedSection>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Nossa História</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A CGEMP — Coordenação Geral de Ensino Médio e Profissional — foi fundada com o
              propósito de promover a excelência na educação pública. Ao longo dos anos, tem se
              consolidado como referência em formação continuada para educadores, desenvolvendo
              programas e workshops que impactam diretamente a qualidade do ensino.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              O Workshop Formativo é uma das principais iniciativas da CGEMP, reunindo
              profissionais de diversas áreas do conhecimento para compartilhar experiências,
              metodologias inovadoras e boas práticas educacionais.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>  
  );
};

export default Sobre;
