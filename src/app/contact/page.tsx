import {
  ClockIcon,
  MapPinIcon,
  NavigationArrowIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Natural Beauty Spa in Bellevue, WA. Call 425-526-3777 or visit us at 1433 130th Ave NE. Open daily 9:30 AM – 8:00 PM.",
};

const contactInfo = [
  {
    icon: PhoneIcon,
    title: "Phone",
    content: "425-526-3777",
    href: "tel:425-526-3777",
    action: "Call Now",
  },
  {
    icon: MapPinIcon,
    title: "Address",
    content: "1433 130th Ave NE, Bellevue, WA 98005",
    href: "https://maps.google.com/?q=1433+130th+Ave+NE,+Bellevue,+WA+98005",
    action: "Get Directions",
  },
  {
    icon: ClockIcon,
    title: "Business Hours",
    content: "9:30 AM – 8:00 PM Daily",
    href: null,
    action: null,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out with any questions or to
            schedule your next visit.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-2xl border border-border text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <item.icon
                    size={32}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted mb-4">{item.content}</p>
                {item.href && (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    {item.action}
                    <NavigationArrowIcon size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Find Us
          </h2>

          <div className="rounded-2xl overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10756.905099105446!2d-122.18305072974243!3d47.621732650000105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906d65bd01c2d7%3A0xd67fcb221432b50f!2sNatural%20Beauty%20Spa!5e0!3m2!1sen!2sus!4v1769320078526!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Natural Beauty Spa Location"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Visit?
          </h2>
          <p className="text-muted mb-8">
            Book your appointment today and experience the Natural Beauty Spa
            difference.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-primary-light transition-all"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
