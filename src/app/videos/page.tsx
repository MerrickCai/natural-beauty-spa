import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Videos | Natural Beauty Spa",
  description:
    "Watch our spa treatment videos and get a preview of the relaxing, rejuvenating experiences we offer at Natural Beauty Spa.",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Treatment Videos
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Get a preview of our spa experiences through these short videos
            showcasing our treatments and environment.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <VideoCard key={video.src} video={video} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience It Yourself?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            These videos are just a glimpse. Book your appointment and enjoy the
            full spa experience.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-accent transition-colors"
          >
            Book Now
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
