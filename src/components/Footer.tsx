import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading font-bold text-2xl mb-3">CGEMP</h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Coordenação Geral de Ensino Médio e Profissional — promovendo a
              excelência na educação através de formação continuada e inovação
              pedagógica.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/inscricao" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Inscrição
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Mail size={16} className="text-accent shrink-0" />
                contato@cgemp.edu.br
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/70">
                <Phone size={16} className="text-accent shrink-0" />
                (92) 3456-7890
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                Av. Educação, 1000 — Manaus, AM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-xs font-body">
            © {new Date().getFullYear()} CGEMP — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
