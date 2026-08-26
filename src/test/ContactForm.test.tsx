import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "@/components/ContactForm";
import { ThemeProvider } from "@/contexts/ThemeContext";

const renderForm = () =>
  render(
    <ThemeProvider>
      <ContactForm />
    </ThemeProvider>
  );

describe("ContactForm", () => {
  it("labels every field so screen readers can announce them", () => {
    renderForm();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
  });

  it("reports validation errors instead of submitting empty", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.click(screen.getByRole("button", { name: /send message/i }));

    const alerts = await screen.findAllByRole("alert");
    expect(alerts.length).toBeGreaterThanOrEqual(3);
    expect(screen.getByLabelText("Name")).toHaveAttribute("aria-invalid", "true");
  });

  it("rejects a malformed email address", async () => {
    const user = userEvent.setup();
    renderForm();

    await user.type(screen.getByLabelText("Name"), "Ada Lovelace");
    await user.type(screen.getByLabelText("Email"), "not-an-email");
    await user.type(screen.getByLabelText("Message"), "This is a long enough message.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
  });
});
