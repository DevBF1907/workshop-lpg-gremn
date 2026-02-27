import { useParams, Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, ArrowLeft, Clock, Calendar, UserCheck, Award, Hash,
  ExternalLink,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu,
};

const GOOGLE_FORMS_LINK = "https://forms.gle/SEU_LINK_AQUI";

const WorkshopDetail = () => {
  const { id } = useParams();
  const workshop = workshops.find((w) => w.id === id);

  if (!workshop) {
    return (
      <div className="pt-20 section-padding section-container text-center">
        <h1 className="font-heading font-bold text-2xl text-foreground mb-4">Workshop não encontrado</h1>
        <Link to="/inscricao" className="text-accent hover:underline">
          ← Voltar aos workshops
        </Link>
      </div>
    );
  }

  const Icon = iconMap[workshop.icon] || BookOpen;

  const details = [
    { icon: Calendar, label: "Data", value: workshop.data },
    { icon: Clock, label: "Horário", value: workshop.horario },
    { icon: Award, label: "Carga Horária", value: workshop.cargaHoraria },
    { icon: UserCheck, label: "Professor", value: workshop.professor },
    { icon: Users, label: "Público-alvo", value: workshop.publicoAlvo },
    { icon: Hash, label: "Vagas", value: `${workshop.vagas} vagas disponíveis` },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="relative py-16 md:py-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="section-container">
          <Link
            to="/inscricao"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6 text-sm"
          >
            <ArrowLeft size={16} /> Voltar aos workshops
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-lg bg-accent/20 flex items-center justify-center">
              <Icon size={28} className="text-accent" />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground">
              {workshop.name}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                Sobre o Workshop
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{workshop.description}</p>

              {/* Map */}
              <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                Localização
              </h2>
              <div className="rounded-lg overflow-hidden border border-border mb-4">
                <iframe
                  title="Localização do evento"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0!2d-60.02!3d-3.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMDYnMDAuMCJTIDYwwrAwMScxMi4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-muted-foreground text-sm">
                📍 Olinda, PE
              </p>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-5">
                  Informações
                </h3>
                <ul className="space-y-4">
                  {details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <d.icon size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground block">{d.label}</span>
                        <span className="text-foreground text-sm font-medium">{d.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                <a
                  href={GOOGLE_FORMS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full mt-6 flex items-center justify-center gap-2"
                >
                  <ExternalLink size={18} />
                  Inscreva-se pelo formulário
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopDetail;
