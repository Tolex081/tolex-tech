import ContactForm from "@/components/ContactForm";
import { InkLink } from "@/components/Ink";
import Section from "@/components/Section";
import { mailtoLink, site, whatsappLink } from "@/data/site";

const ContactSection = () => (
  <Section id="contact" title="Contact">
    <p className="max-w-[34ch] font-serif text-[clamp(1.375rem,1.1rem+1vw,1.875rem)] leading-snug">
      I'm currently looking for new opportunities and my inbox is always open.
    </p>
    <p className="mt-5 max-w-measure text-[1.125rem] leading-[1.65] text-muted-foreground">
      Whether you have a question, want to collaborate, or just want to say hi — send a message below
      and I'll get back to you.
    </p>

    <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-9">
      <dl className="font-sans text-[0.9375rem] md:col-span-3">
        <div className="border-t border-border py-4">
          <dt className="text-faint text-[0.8125rem]">Email</dt>
          <dd className="mt-1 break-all">
            <InkLink href={mailtoLink} tone="accent">
              {site.email}
            </InkLink>
          </dd>
        </div>
        <div className="border-t border-border py-4">
          <dt className="text-faint text-[0.8125rem]">WhatsApp</dt>
          <dd className="mt-1">
            <InkLink href={whatsappLink} target="_blank" rel="noopener noreferrer" tone="accent">
              {site.whatsappDisplay}
            </InkLink>
          </dd>
        </div>
        <div className="border-y border-border py-4">
          <dt className="text-faint text-[0.8125rem]">Location</dt>
          <dd className="mt-1">{site.location}</dd>
        </div>
      </dl>

      <div className="md:col-span-6">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default ContactSection;
