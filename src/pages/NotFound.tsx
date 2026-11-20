import { useNavigate } from "react-router-dom";
import { InkLink } from "@/components/Ink";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center bg-background px-4 sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-[78rem] border-t border-border pt-10">
        <p className="tnum font-sans text-[0.875rem] text-faint">404</p>
        <h1 className="mt-4 text-[clamp(2.25rem,1rem+5vw,4.5rem)] font-light leading-none tracking-[-0.02em] stretch-wide">
          Page not found
        </h1>
        <p className="mt-6 max-w-measure text-[1.125rem] text-muted-foreground">
          That page doesn't exist — it may have moved or never been here at all.
        </p>
        <div className="mt-10 font-sans">
          {/* Client-side navigation, so returning home doesn't reload the whole app. */}
          <InkLink
            href="/"
            tone="accent"
            arrow="right"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            Back to home
          </InkLink>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
