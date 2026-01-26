import {
  ArrowRightIcon,
  HeartIcon,
  LeafIcon,
  ShieldCheckIcon,
  SparkleIcon,
  StarIcon,
  UsersIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blurDataURL } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Natural Beauty Spa in Bellevue, WA. Our story, philosophy, expert team, and commitment to providing exceptional spa experiences.",
};

const values = [
  {
    icon: HeartIcon,
    title: "Personalized Care",
    description:
      "Every treatment is tailored to your unique needs. We take the time to understand your goals and customize our approach for optimal results.",
  },
  {
    icon: LeafIcon,
    title: "Natural Approach",
    description:
      "We believe in enhancing your natural beauty. Our treatments work with your body's own processes to reveal radiant, healthy skin.",
  },
  {
    icon: SparkleIcon,
    title: "Premium Quality",
    description:
      "From Cellcosmet to Janssen, we use only professional-grade products trusted by leading spas worldwide.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Expert Excellence",
    description:
      "Our licensed estheticians undergo continuous training to master the latest techniques and technologies.",
  },
];

const highlights = [
  { number: "5+", label: "Years of Experience" },
  { number: "500+", label: "Happy Clients" },
  { number: "20+", label: "Signature Treatments" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Natural Beauty Spa
          </h1>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            A sanctuary of tranquility in the heart of Bellevue, where ancient
            wellness traditions meet modern skincare innovation.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
              <Image
                src="/gallery/lounge/1.jpg"
                alt="Natural Beauty Spa Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where Wellness Meets Artistry
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Natural Beauty Spa was founded with a simple vision: to create
                  a space where everyone can experience the transformative power
                  of professional skincare in a warm, welcoming environment.
                </p>
                <p>
                  Located in Bellevue, Washington, our spa combines the
                  precision of Swiss skincare science with the wisdom of Eastern
                  wellness traditions. Every treatment is designed to nurture
                  both body and spirit.
                </p>
                <p>
                  We believe that true beauty radiates from within. Our approach
                  focuses on restoring balance, enhancing your natural features,
                  and helping you feel confident in your own skin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {highlights.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {item.number}
                </div>
                <div className="text-white/70 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our commitment to excellence is reflected in every aspect of your
              spa experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 bg-white rounded-2xl border border-border hover-lift"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <value.icon
                    size={28}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Our Team
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Hands, Caring Hearts
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Our team of licensed estheticians and wellness professionals
                  brings together decades of combined experience in skincare,
                  massage therapy, and holistic wellness.
                </p>
                <p>
                  Each team member is carefully selected not only for their
                  technical expertise but also for their genuine passion for
                  helping clients look and feel their best.
                </p>
                <p>
                  We invest in continuous education, ensuring our team stays at
                  the forefront of the latest treatments, techniques, and
                  skincare innovations.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <UsersIcon
                    size={24}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <div>
                  <div className="font-semibold">Certified Professionals</div>
                  <div className="text-sm text-muted">
                    Licensed & continuously trained
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden">
              <Image
                src="/gallery/treatment-rooms/1.jpg"
                alt="Treatment Room"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Our Space
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              A Sanctuary Designed for You
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Step into a world of calm, where every detail is thoughtfully
              curated for your comfort and relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/gallery/exterior/1.jpg"
                alt="Spa Exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/gallery/lounge/2.jpg"
                alt="Spa Lounge"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/gallery/treatment-rooms/2.jpg"
                alt="Treatment Room"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
                placeholder="blur"
                blurDataURL={blurDataURL}
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View Full Gallery
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <StarIcon
            size={48}
            weight="duotone"
            className="text-white/80 mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and discover why our clients keep coming
            back.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-accent transition-colors"
          >
            Book Your Visit
            <ArrowRightIcon size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
