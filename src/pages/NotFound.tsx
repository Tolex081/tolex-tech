import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-background px-4">
    <div className="text-center">
      <p className="mb-2 font-mono text-primary-strong">404</p>
      <h1 className="mb-4 text-3xl md:text-4xl font-bold text-foreground">Page not found</h1>
      <p className="mb-8 text-muted-foreground">
        That page doesn't exist — it may have moved or never been here at all.
      </p>
      {/* Client-side navigation, so returning home doesn't reload the whole app. */}
      <Link
        to="/"
        className="inline-block px-6 py-3 rounded-lg font-medium bg-primary-strong text-primary-foreground transition-colors hover:bg-primary-strong/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        Back to home
      </Link>
    </div>
  </div>
);

export default NotFound;
