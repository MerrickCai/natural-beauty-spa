import {
  ClockIcon,
  EnvelopeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  MapPinIcon,
  PhoneIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { href: "/services", label: "Our Services" },
  { href: "/products", label: "Products" },
  { href: "/gallery", label: "Gallery" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About Us" },
  { href: "/gift-cards", label: "Gift Cards" },
  { href: "/booking", label: "Book Appointment" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src={siteConfig.logo}
                alt={siteConfig.name}
                width={40}
                height={40}
                className="w-10 h-10 brightness-0 invert"
              />
              <span className="text-lg font-semibold">{siteConfig.name}</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Experience the art of relaxation and rejuvenation in the heart of
              Bellevue. Your journey to natural beauty starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-white/70">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <PhoneIcon size={18} className="text-accent" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <EnvelopeIcon size={18} className="text-accent" />
                <span>{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPinIcon size={18} className="text-accent shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </a>
              <div className="flex items-center gap-2">
                <ClockIcon size={18} className="text-accent" />
                <span>{siteConfig.hours}</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramLogoIcon size={20} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <FacebookLogoIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-white/50">
          <p>
            © {new Date().getFullYear()} Natural Beauty Spa. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
