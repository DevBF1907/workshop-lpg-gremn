import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { workshops } from "@/data/workshops";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, ArrowLeft, Clock, Calendar, UserCheck, Award, Hash,
  ExternalLink, MapPin, Briefcase, Flag, Accessibility, Brain, HelpingHand, Newspaper,
  ChevronDown, ChevronUp
} from "lucide-react";
import heroBg from "@/assets/fundoHero.png";

const iconMap: Record<string, LucideIcon> = {
  BookOpen, Leaf, Atom, FlaskConical, BrainCircuit, Calculator,
  Lightbulb, Globe, Landmark, Users, Languages, Dumbbell, Palette,
  Library, Cpu, Briefcase, Flag, Accessibility, Brain, HelpingHand, Newspaper
};

const ExpandableText = ({ text, maxLength = 250 }: { text: string; maxLength?: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = text.length > maxLength;

  const displayText = isExpanded ? text : text.slice(0, maxLength) + (shouldTruncate ? "..." : "");

  return (
    <div className="mb-8">
      <p className="text-muted-foreground leading-relaxed text-lg transition-all duration-300">
        {displayText}
      </p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent font-bold mt-3 hover:text-accent/80 flex items-center gap-1 transition-colors bg-accent/10 px-4 py-1.5 rounded-full text-sm"
        >
          {isExpanded ? (
            <>Ver menos <ChevronUp size={16} /></>
          ) : (
            <>Ver mais <ChevronDown size={16} /></>
          )}
        </button>
      )}
    </div>
  );
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
      {/* Header - Agora com fundoHero.png */}
      <section className="relative min-h-[300px] flex items-center overflow-hidden py-16 md:py-20">
        <img
          src={heroBg}
          alt={workshop.name}
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6] contrast-[0.9]"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 section-container">
          <Link
            to="/inscricao"
            className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors mb-6 text-sm font-semibold uppercase tracking-wider"
          >
            <ArrowLeft size={16} /> Voltar aos workshops
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl bg-accent/20 border border-accent/30 backdrop-blur-sm flex items-center justify-center">
              <Icon size={32} className="text-accent" />
            </div>
            <div>
              <span className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Workshop Detalhes</span>
              <h1 className="font-heading font-bold text-3xl md:text-5xl text-primary-foreground drop-shadow-md">
                {workshop.name}
              </h1>
            </div>
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
                <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                  Sobre o Workshop
                </h2>
                <ExpandableText text={workshop.description} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-card p-8 rounded-2xl border border-border shadow-sm">
                  {sharedDetails.map((d, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent/10">
                         <d.icon size={20} className="text-accent shrink-0" />
                      </div>
                      <div>
                        <span className="text-[10px] text-muted-foreground block uppercase tracking-[0.1em] font-bold mb-0.5">{d.label}</span>
                        <span className="text-foreground text-sm font-semibold leading-tight block">{d.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sessions/Shifts */}
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                Formações Disponíveis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {workshop.sessions.map((session) => (
                  <div key={session.id} className="bg-card rounded-2xl border border-border p-8 flex flex-col h-full shadow-sm hover:shadow-xl hover:border-accent transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                      <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                        session.shift === "Manhã" ? "bg-blue-100 text-blue-700" : "bg-orange-100 text-orange-700"
                      }`}>
                        Turno {session.shift}
                      </span>
                      <span className="text-xs text-muted-foreground font-bold flex items-center gap-1.5 bg-muted px-3 py-1.5 rounded-full">
                        <Hash size={14} className="text-accent" /> {session.vagas} vagas
                      </span>
                    </div>
                    
                    <h3 className="font-heading font-bold text-xl mb-4 text-foreground group-hover:text-accent transition-colors">
                      {workshop.name} - {session.shift}
                    </h3>
                    
                    {session.title && (
                      <div className="mb-4 p-4 bg-accent/5 rounded-xl border-l-4 border-accent">
                        <p className="text-sm font-bold text-foreground leading-snug italic">
                          "{session.title}"
                        </p>
                      </div>
                    )}

                    {session.description && (
                      <div className="mb-6">
                        <ExpandableText text={session.description} maxLength={150} />
                      </div>
                    )}
                    
                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                          <UserCheck size={18} className="text-accent" />
                        </div>
                        <span className="text-muted-foreground">Professor: <strong className="text-foreground">{session.professor}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                          <Clock size={18} className="text-accent" />
                        </div>
                        <span className="text-muted-foreground">Horário: <strong className="text-foreground">{session.horario}</strong></span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-medium">
                        <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                          <MapPin size={18} className="text-accent" />
                        </div>
                        <span className="text-muted-foreground">Local: <strong className="text-foreground">{workshop.location}</strong></span>
                      </div>
                    </div>

                    <a
                      href={session.formLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full flex items-center justify-center gap-3 py-4 text-sm font-bold shadow-lg"
                    >
                      <ExternalLink size={20} />
                      INSCREVER-SE ({session.shift})
                    </a>
                  </div>
                ))}
              </div>

              {/* Map */}
              <h2 className="font-heading font-bold text-2xl text-foreground mb-4 flex items-center gap-2">
                <div className="w-1.5 h-8 bg-accent rounded-full"></div>
                Localização
              </h2>
              <div className="rounded-2xl overflow-hidden border border-border mb-4 shadow-inner">
                <iframe
                  title="Localização do evento"
                  src={workshop.mapUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-secondary/50 rounded-xl flex items-center gap-3 border border-border/50">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center shadow-lg">
                  <MapPin size={20} className="text-accent-foreground" />
                </div>
                <p className="text-foreground font-bold text-sm leading-tight">
                  {workshop.location}
                </p>
              </div>
            </div>

            {/* Sidebar - Quick info */}
            <div className="hidden lg:block">
              <div className="bg-card rounded-2xl border border-border p-8 sticky top-24 shadow-sm">
                <h3 className="font-heading font-bold text-lg text-foreground mb-6 flex items-center gap-2">
                   <Award className="text-accent" size={24} />
                   Resumo do Evento
                </h3>
                <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                  Este workshop oferece duas opções de horários. Você pode se inscrever em um ou em ambos, conforme sua disponibilidade.
                </p>
                <div className="space-y-6">
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                    <p className="font-bold text-accent text-xs uppercase tracking-wider mb-2">Local das Formações</p>
                    <p className="text-foreground text-sm font-semibold mb-3">{workshop.location}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">Todas as sessões deste workshop serão realizadas no mesmo local.</p>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-xl border border-accent/10">
                    <p className="font-bold text-accent text-xs uppercase tracking-wider mb-2">Importante</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-medium">As vagas são limitadas por turno. Garanta a sua realizando a inscrição no link correspondente ao horário desejado.</p>
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