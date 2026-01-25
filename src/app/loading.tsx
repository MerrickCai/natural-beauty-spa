import Image from "next/image";

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-var(--header-height))] flex items-center justify-center bg-linear-to-br from-primary/5 via-accent/10 to-background">
      <div className="flex flex-col items-center gap-10">
        {/* Animated Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <Image
            src="/logos/Natural Beauty Spa Logo.svg"
            alt="Loading"
            width={120}
            height={120}
            className="relative animate-pulse"
          />
        </div>

        {/* Animated Dots */}
        <div className="flex items-center gap-3">
          <span className="w-4 h-4 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
          <span className="w-4 h-4 bg-primary/70 rounded-full animate-bounce [animation-delay:-0.15s]" />
          <span className="w-4 h-4 bg-primary/40 rounded-full animate-bounce" />
        </div>

        {/* Loading Text */}
        <p className="text-muted text-base tracking-widest uppercase">
          Preparing your experience
        </p>
      </div>
    </div>
  );
}
