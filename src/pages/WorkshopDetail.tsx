import { useParams, Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, ArrowLeft, Clock, Calendar, UserCheck, Award, Hash,
  ExternalLink, MapPin, Briefcase, Flag, Camera,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, Briefcase, Flag,
};

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

  const sharedDetails = [
    { icon: Calendar, label: "Data", value: workshop.data },
    { icon: MapPin, label: "Local", value: workshop.location },
    { icon: Award, label: "Carga Horária", value: workshop.cargaHoraria },
    { icon: Users, label: "Público-alvo", value: workshop.publicoAlvo },
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
            {/* Description and Info */}
            <div className="lg:col-span-2">
              <div className="mb-10">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                  Sobre o Workshop
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{workshop.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-card p-6 rounded-xl border border-border">
                  {sharedDetails.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <d.icon size={20} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs text-muted-foreground block uppercase tracking-wider font-semibold">{d.label}</span>
                        <span className="text-foreground text-sm font-medium">{d.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sessions/Shifts */}
              <h2 className="font-heading font-semibold text-xl text-foreground mb-6">
                Formações Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {workshop.sessions.map((session) => (
                  <div key={session.id} className="bg-card rounded-xl border border-border p-6 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        session.shift === "Manhã" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                      }`}>
                        Turno {session.shift}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Hash size={14} /> {session.vagas} vagas
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-bold text-lg mb-4 text-foreground">
                      {workshop.name} - {session.shift}
                    </h3>
                    
                    {session.title && (
                      <div className="mb-4 p-3 bg-accent/5 rounded-lg border-l-4 border-accent">
                        <p className="text-sm font-semibold text-foreground leading-tight">
                          {session.title}
                        </p>
                      </div>
                    )}
                    
                    <div className="space-y-3 mb-8 flex-grow">
                      <div className="flex items-center gap-3 text-sm">
                        <UserCheck size={18} className="text-accent" />
                        <span className="text-muted-foreground">Professor: <strong className="text-foreground">{session.professor}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock size={18} className="text-accent" />
                        <span className="text-muted-foreground">Horário: <strong className="text-foreground">{session.horario}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin size={18} className="text-accent" />
                        <span className="text-muted-foreground">Local: <strong className="text-foreground">{workshop.location}</strong></span>
                      </div>
                    </div>

                    <a
                      href={session.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full flex items-center justify-center gap-2 py-3"
                    >
                      <ExternalLink size={18} />
                      Inscrever-se ({session.shift})
                    </a>
                  </div>
                ))}
              </div>

              {/* Map */}
              <h2 className="font-heading font-semibold text-xl text-foreground mb-4">
                Localização
              </h2>
              <div className="rounded-lg overflow-hidden border border-border mb-4">
                <iframe
                  title="Localização do evento"
                  src={workshop.mapUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-muted-foreground text-sm flex items-center gap-2">
                <MapPin size={16} className="text-accent" /> {workshop.location}
              </p>
            </div>

            {/* Sidebar - Quick info */}
            <div className="hidden lg:block">
              <div className="bg-card rounded-lg border border-border p-6 sticky top-24">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-5">
                  Resumo do Evento
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Este workshop oferece duas opções de horários. Você pode se inscrever em um ou em ambos, conforme sua disponibilidade.
                </p>
                <div className="space-y-4">
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/10 text-sm">
                    <p className="font-semibold text-accent mb-1">Local das Formações</p>
                    <p className="text-muted-foreground mb-2">{workshop.location}</p>
                    <p className="text-xs text-muted-foreground italic">Todas as sessões deste workshop serão realizadas no mesmo local.</p>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg border border-accent/10 text-sm">
                    <p className="font-semibold text-accent mb-1">Importante</p>
                    <p className="text-muted-foreground">As vagas são limitadas por turno. Garanta a sua realizando a inscrição no link correspondente ao horário desejado.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopDetail;
