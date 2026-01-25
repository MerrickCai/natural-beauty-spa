import {
  ArrowRightIcon,
  CalendarCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Appointment | Natural Beauty Spa",
  description:
    "Book your spa appointment online at Natural Beauty Spa in Bellevue, WA. Easy online scheduling for HydraFacial, massages, and skincare treatments.",
};

const bookingSteps = [
  {
    step: 1,
    title: "Choose Your Service",
    description:
      "Browse our menu and select the treatment that suits your needs.",
  },
  {
    step: 2,
    title: "Pick a Time",
    description:
      "Select your preferred date and time that works for your schedule.",
  },
  {
    step: 3,
    title: "Confirm & Relax",
    description:
      "Complete your booking and get ready for a rejuvenating experience.",
  },
];

const policies = [
  "Please arrive 10-15 minutes before your appointment",
  "24-hour cancellation notice required",
  "First-time clients receive a complimentary consultation",
  "Gift cards available for all services",
];

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Book Your Visit
          </h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Reserve your spot for a transformative spa experience. We can't wait
            to welcome you.
          </p>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white rounded-3xl shadow-xl border border-border overflow-hidden">
            <div className="bg-primary p-8 text-center">
              <CalendarCheckIcon
                size={48}
                weight="duotone"
                className="text-white mx-auto mb-4"
              />
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Ready to Book?
              </h2>
              <p className="text-white/80">
                Click the button below to schedule your appointment online
              </p>
            </div>

            <div className="p-8 md:p-12 text-center">
              <a
                href="https://www.fresha.com/a/natural-beauty-spa-bellevue-1433-130th-avenue-northeast-cfvhze0h/booking?allOffer=true&pId=2731175&cartId=b561da87-f6e0-443f-902f-670455d509ed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-primary text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-primary-light transition-all hover-lift"
              >
                Book Online Now
                <ArrowRightIcon size={24} />
              </a>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted">
                <div className="flex items-center gap-2">
                  <ClockIcon size={20} className="text-primary" />
                  <span>Open 9:30 AM – 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <PhoneIcon size={20} className="text-primary" />
                  <span>425-526-3777</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-muted">
                Prefer to book by phone? Give us a call and our friendly staff
                will assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bookingSteps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-bold flex items-center justify-center mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Booking Policies
          </h2>

          <div className="bg-primary/5 rounded-2xl p-8">
            <ul className="space-y-4">
              {policies.map((policy) => (
                <li key={policy} className="flex items-start gap-3">
                  <CheckCircleIcon
                    size={24}
                    weight="fill"
                    className="text-primary shrink-0 mt-0.5"
                  />
                  <span className="text-foreground">{policy}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="text-primary font-medium hover:underline"
            >
              View our full service menu →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
