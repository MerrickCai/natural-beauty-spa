import { ArrowLeftIcon, HouseIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center justify-center bg-linear-to-br from-primary/5 via-accent/10 to-background">
      <div className="text-center px-6">
        <div className="mb-8">
          <span className="text-9xl font-bold gradient-text">404</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-muted text-lg max-w-md mx-auto mb-10">
          Oops! The page you're looking for seems to have wandered off for a spa
          day. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-primary-light transition-all hover-lift"
          >
            <HouseIcon size={20} />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-primary hover:text-white transition-all"
          >
            <ArrowLeftIcon size={20} />
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
