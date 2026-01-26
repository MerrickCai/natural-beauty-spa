import {
  ArrowRightIcon,
  GiftIcon,
  HeartIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of relaxation and rejuvenation. Purchase a Natural Beauty Spa gift card for your loved ones in Bellevue, WA.",
};

const giftFeatures = [
  {
    icon: HeartIcon,
    title: "Perfect for Any Occasion",
    description:
      "Birthdays, anniversaries, holidays, or just because — a spa gift is always appreciated.",
  },
  {
    icon: SparkleIcon,
    title: "Flexible & Easy to Use",
    description:
      "Recipients can choose any service or combine their gift card with other offers.",
  },
  {
    icon: GiftIcon,
    title: "Instant Digital Delivery",
    description:
      "Send a beautiful digital gift card directly to their inbox — no waiting required.",
  },
];

export default function GiftCardsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gift Cards</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Share the gift of relaxation and self-care. Our gift cards make the
            perfect present for anyone who deserves a moment of tranquility.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <feature.icon
                    size={28}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Card */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <GiftIcon
                size={48}
                weight="duotone"
                className="text-white mx-auto mb-4"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Purchase a Gift Card
              </h2>
              <p className="text-white/80">
                Choose any amount and send it instantly
              </p>
            </div>

            <div className="p-8 md:p-12 text-center">
              <p className="text-muted mb-8 max-w-md mx-auto">
                Our gift cards can be used for any service at Natural Beauty
                Spa. The recipient will receive a beautiful digital card via
                email.
              </p>

              <a
                href={siteConfig.giftCard}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-primary-light transition-all hover-lift"
              >
                Buy Gift Card
                <ArrowRightIcon size={24} />
              </a>

              <p className="mt-8 text-sm text-muted">
                Have questions? Call us at{" "}
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-primary hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prefer to Book a Service?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Treat yourself or book a spa experience for someone special today.
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
