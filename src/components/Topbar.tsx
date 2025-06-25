import { Phone, Mail, MessageCircle } from "lucide-react";

const phone = "+54 264 511-7015";
const whatsapp = "https://wa.me/542645117015?text=Hola%20Baro%20Construcciones%2C%20quisiera%20hacer%20una%20consulta";
const email = "info@baroconstrucciones.com";

const Topbar = () => (
  <div className="w-full bg-white text-primary text-sm py-2 px-4 flex items-center justify-center gap-6 fixed top-0 left-0 z-[110] shadow-sm md:justify-between md:px-12 border-b border-muted">
    <div className="flex items-center gap-4">
      <a href={`tel:${phone.replace(/\s+/g, '')}`} className="flex items-center gap-1 hover:text-secondary transition-colors">
        <Phone className="h-4 w-4" />
        <span className="hidden sm:inline">{phone}</span>
      </a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-secondary transition-colors">
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
      <a href={`mailto:${email}`} className="flex items-center gap-1 hover:text-secondary transition-colors">
        <Mail className="h-4 w-4" />
        <span className="hidden sm:inline">{email}</span>
      </a>
    </div>
    <div className="block md:hidden text-xs ml-2">
      <span className="font-semibold">Baro Construcciones</span>
    </div>
  </div>
);

export default Topbar;
