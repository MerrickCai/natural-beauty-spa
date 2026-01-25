import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a glimpse into Natural Beauty Spa's serene sanctuary. View our beautiful exterior, relaxing lounge, and professional treatment rooms in Bellevue, WA.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Take a glimpse into our serene spa sanctuary and the transformative
            experiences that await you.
          </p>
        </div>
      </section>

      <GalleryClient />
    </div>
  );
}
