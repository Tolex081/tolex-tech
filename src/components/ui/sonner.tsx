import { Toaster as Sonner, type ToasterProps } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

/*
 * This shipped importing useTheme from `next-themes`, which the app never
 * provides — toasts silently ignored the selected theme. Wired to the real
 * ThemeContext instead.
 */
const Toaster = ({ ...props }: ToasterProps) => {
  const { mode } = useTheme();

  return (
    <Sonner
      theme={mode}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-plate group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:rounded-2xl group-[.toaster]:font-sans group-[.toaster]:shadow-plate",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
