import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InkButton } from "@/components/Ink";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please tell me your name."),
  email: z.string().trim().email("That doesn't look like a valid email."),
  message: z.string().trim().min(10, "A little more detail would help — 10 characters minimum."),
  /** Honeypot: bots fill it, humans never see it. */
  company: z.string().max(0).optional(),
});

type ContactValues = z.infer<typeof contactSchema>;

/**
 * Set VITE_WEB3FORMS_KEY in .env to receive submissions
 * (free key from https://web3forms.com — no backend needed).
 * Without it the form falls back to opening the visitor's mail client.
 */
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const onSubmit = async (values: ContactValues) => {
    if (values.company) return; // honeypot tripped

    if (!ACCESS_KEY) {
      const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`);
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Portfolio enquiry from ${values.name}`
      )}&body=${body}`;
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Portfolio enquiry from ${values.name}`,
          from_name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      if (!response.ok) throw new Error(`Request failed with ${response.status}`);

      setSent(true);
      reset();
      toast.success("Message sent — I'll get back to you soon.");
    } catch {
      toast.error("Something went wrong.", {
        description: `Please email me directly at ${site.email}.`,
      });
    }
  };

  const fieldClass = (hasError: boolean) => cn(hasError && "border-destructive");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-left" noValidate>
      <div className="grid gap-8 sm:grid-cols-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            autoComplete="name"
            placeholder="Ada Lovelace"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(!!errors.name)}
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="font-sans text-[0.8125rem] text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ada@example.com"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(!!errors.email)}
            {...register("email")}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="font-sans text-[0.8125rem] text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder="What are you building?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={fieldClass(!!errors.message)}
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="font-sans text-[0.8125rem] text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
        <InkButton
          type="submit"
          disabled={isSubmitting}
          tone="accent"
          arrow={isSubmitting ? "none" : "right"}
          className="font-sans text-[1.0625rem]"
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </InkButton>

        <p role="status" aria-live="polite" className="font-serif text-[0.9375rem] italic text-muted-foreground">
          {sent ? "Thanks — your message is on its way." : "I usually reply within a day or two."}
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
