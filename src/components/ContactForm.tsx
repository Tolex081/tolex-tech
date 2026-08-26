import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
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

  const fieldClass = (hasError: boolean) =>
    cn("bg-background/60", hasError && "border-destructive focus-visible:ring-destructive");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="glass rounded-2xl p-6 text-left space-y-4" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-2">
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
            <p id="name-error" role="alert" className="text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
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
            <p id="email-error" role="alert" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2">
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
          <p id="message-error" role="alert" className="text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input id="company" type="text" tabIndex={-1} autoComplete="off" {...register("company")} />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 rounded-lg font-medium bg-primary-strong text-primary-foreground transition-colors duration-300 hover:bg-primary-strong/90 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="w-4 h-4" aria-hidden="true" /> Send message
          </>
        )}
      </button>

      <p role="status" aria-live="polite" className="text-xs text-muted-foreground text-center">
        {sent ? "Thanks — your message is on its way." : "I usually reply within a day or two."}
      </p>
    </form>
  );
};

export default ContactForm;
