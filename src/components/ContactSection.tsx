import ContactForm from "@/components/ContactForm";
import { InkLink } from "@/components/Ink";
import Section from "@/components/Section";
import { mailtoLink, site, whatsappLink } from "@/data/site";

/** Down at the horizon in the golden dusk: one wide plate, edged in amber,
 * holding every way to reach him. */
const ContactSection = () => (
  <Section id="contact" title="Contact">
    <div className="grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-12 rounded-plate bg-plate p-6 shadow-plate ring-1 ring-inset ring-tint/30 sm:p-10 md:grid-cols-12 md:p-12">
      <div className="md:col-span-5">
        <p className="font-serif text-[clamp(1.625rem,1.3rem+1.1vw,2.25rem)] leading-[1.2] text-tint">
          I'm currently looking for new opportunities and my inbox is always open.
        </p>
        <p className="mt-5 text-[1.0625rem] leading-[1.65] text-muted-foreground">
          Whether you have a question, want to collaborate, or just want to say hi — send a message below
          and I'll get back to you.
        </p>

        <dl className="mt-10 space-y-5 text-[0.9375rem]">
          <div>
            <dt className="text-[0.8125rem] text-tint">Email</dt>
            <dd className="mt-1 break-all font-medium">
              <InkLink href={mailtoLink} tone="accent">
                {site.email}
              </InkLink>
            </dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-tint">WhatsApp</dt>
            <dd className="mt-1 font-medium">
              <InkLink href={whatsappLink} target="_blank" rel="noopener noreferrer" tone="accent">
                {site.whatsappDisplay}
              </InkLink>
            </dd>
          </div>
          <div>
            <dt className="text-[0.8125rem] text-tint">Location</dt>
            <dd className="mt-1">{site.location}</dd>
          </div>
        </dl>
      </div>

      <div className="md:col-span-7">
        <ContactForm />
      </div>
    </div>
  </Section>
);

export default ContactSection;
