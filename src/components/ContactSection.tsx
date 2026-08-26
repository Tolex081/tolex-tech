import { Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { mailtoLink, site, whatsappLink } from "@/data/site";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      /* Extra bottom padding on mobile so the floating nav never covers content. */
      className="py-20 md:py-32 pb-32 md:pb-32 px-4 bg-card/30"
    >
      <div
        ref={ref}
        className={`container mx-auto max-w-4xl text-center motion-safe:transition-all motion-safe:duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionHeading index="04." title="Get In Touch" align="center" />

        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always open. Whether you
          have a question, want to collaborate, or just want to say hi — send a message below
          and I'll get back to you.
        </p>

        <div className="grid lg:grid-cols-5 gap-8 text-left">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <ul className="lg:col-span-2 grid sm:grid-cols-3 lg:grid-cols-1 gap-4 content-start">
            <li>
              <a
                href={mailtoLink}
                className="glass rounded-xl p-5 flex flex-col gap-1 h-full transition-colors duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <Mail className="w-6 h-6 text-primary-strong mb-1 motion-safe:transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">Email</span>
                <span className="text-foreground font-medium text-sm break-all">{site.email}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-xl p-5 flex flex-col gap-1 h-full transition-colors duration-300 hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring group"
              >
                <MessageCircle className="w-6 h-6 text-primary-strong mb-1 motion-safe:transition-transform group-hover:scale-110" aria-hidden="true" />
                <span className="text-xs text-muted-foreground">WhatsApp</span>
                <span className="text-foreground font-medium text-sm">{site.whatsappDisplay}</span>
              </a>
            </li>
            <li className="glass rounded-xl p-5 flex flex-col gap-1 h-full">
              <MapPin className="w-6 h-6 text-primary-strong mb-1" aria-hidden="true" />
              <span className="text-xs text-muted-foreground">Location</span>
              <span className="text-foreground font-medium text-sm">{site.location}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
