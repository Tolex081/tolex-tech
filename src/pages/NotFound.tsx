import { useNavigate } from "react-router-dom";
import { PillLink } from "@/components/Ink";
import Sky from "@/components/Sky";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="relative flex min-h-screen items-center px-4 sm:px-6 lg:px-10">
      <Sky />
      <div className="relative z-10 mx-auto w-full max-w-page">
        <p className="tnum text-[0.9375rem] text-muted-foreground">404</p>
        <h1 className="mt-4 text-[clamp(2.75rem,1.2rem+5vw,5rem)] leading-none tracking-[-0.02em]">
          Page not found
        </h1>
        <p className="mt-6 max-w-measure text-[1.125rem] text-muted-foreground">
          That page doesn't exist — it may have moved or never been here at all.
        </p>
        <div className="mt-10">
          {/* Client-side navigation, so returning home doesn't reload the whole app. */}
          <PillLink
            href="/"
            arrow="right"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            Back to home
          </PillLink>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
