import React from "react";
import { InkButton } from "@/components/Ink";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

/** Keeps a single broken section from blanking the whole page. */
class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    if (import.meta.env.DEV) console.error("Unhandled error:", error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <main className="flex min-h-screen items-center bg-background px-4 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-[78rem] border-t border-border pt-10">
          <h1 className="text-[clamp(2rem,1rem+4vw,3.5rem)] font-light leading-none stretch-wide">
            Something went wrong
          </h1>
          <p className="mt-6 max-w-measure text-[1.125rem] text-muted-foreground">
            Sorry about that. Reloading the page usually sorts it out.
          </p>
          <div className="mt-10 font-sans">
            <InkButton tone="accent" arrow="right" onClick={() => window.location.reload()}>
              Reload page
            </InkButton>
          </div>
        </div>
      </main>
    );
  }
}

export default ErrorBoundary;
