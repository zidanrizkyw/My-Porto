import { Mail, Phone, Linkedin, Instagram, Gamepad2 } from "lucide-react";
import SectionTag from "./SectionTag";
import ContactCard from "./ContactCard";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-background/40 relative">
      <div className="max-w-3xl mx-auto text-center">
        <SectionTag icon={<Mail className="w-4 h-4" />} label="04 // CONNECT" center />

        <h2 className="font-display font-black text-4xl md:text-6xl mb-6">
          Ready Player <span className="text-gradient-neon">Two?</span>
        </h2>

        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Punya project gila, ide eksperimental, atau cuma mau ngobrol soal game?
          Drop a message — gue selalu online.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left">
          <ContactCard
            icon={<Mail className="w-5 h-5" />}
            label="EMAIL"
            value="zidane.indo1235@gmail.com"
            href="mailto:zidane.indo1235@gmail.com"
          />
          <ContactCard
            icon={<Phone className="w-5 h-5" />}
            label="PHONE"
            value="+62 813-8490-8682"
            href="tel:+6281384908682"
          />
          <ContactCard
            icon={<Linkedin className="w-5 h-5" />}
            label="LINKEDIN"
            value="zidanrizkyw"
            href="https://linkedin.com/in/zidanrizkyw"
          />
          <ContactCard
            icon={<Instagram className="w-5 h-5" />}
            label="INSTAGRAM"
            value="@zidanrzkyy"
            href="https://instagram.com/zidanrzkyy"
          />
        </div>

        <a
          href="mailto:zidane.indo1235@gmail.com"
          className="clip-cyber inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-display font-black uppercase tracking-widest glow-pink hover:brightness-110 transition"
        >
          <Gamepad2 className="w-5 h-5" /> Start Co-op
        </a>
      </div>
    </section>
  );
}
