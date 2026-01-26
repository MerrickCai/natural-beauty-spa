"use client";

import {
  ArrowRightIcon,
  CheckCircleIcon,
  FlowerIcon,
  HeartIcon,
  SparkleIcon,
  StarIcon,
} from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { promotions } from "@/data/promotions";
import { formatRelativeDate, reviews } from "@/data/reviews";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/site";
import { blurDataURL } from "@/lib/placeholder";

const features = [
  {
    icon: SparkleIcon,
    title: "Premium Products",
    description:
      "We use only the finest skincare products from renowned brands like Cellcosmet and Janssen.",
  },
  {
    icon: FlowerIcon,
    title: "Expert Therapists",
    description:
      "Our certified professionals bring years of experience and genuine care to every treatment.",
  },
  {
    icon: HeartIcon,
    title: "Personalized Care",
    description:
      "Every treatment is customized to your unique skin type and wellness goals.",
  },
  {
    icon: StarIcon,
    title: "Serene Environment",
    description:
      "Escape the everyday in our tranquil, beautifully designed spa sanctuary.",
  },
];

const popularServices = serviceCategories
  .flatMap((cat) => cat.items)
  .slice(0, 4);
const featuredProducts = products.slice(0, 3);

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-var(--header-height))] flex items-center justify-center overflow-hidden bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={120}
              height={120}
              className="mx-auto mb-6"
              priority
            />
            <span className="inline-block mb-6 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Welcome to Natural Beauty Spa
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="gradient-text">Discover Your</span>
              <br />
              <span className="text-foreground">Natural Radiance</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted mb-10 leading-relaxed">
              Indulge in transformative spa experiences that nurture your body,
              refresh your mind, and reveal your natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-primary-light transition-all hover-lift"
              >
                Book Your Experience
                <ArrowRightIcon size={20} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-base font-medium hover:bg-primary hover:text-white transition-all"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Promotions Section */}
      {promotions.length > 0 && (
        <section className="py-12 bg-accent/10">
          <div className="mx-auto max-w-5xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              Special Offers
            </motion.h2>

            <div
              className={`grid gap-4 ${promotions.length === 1 ? "max-w-lg mx-auto" : promotions.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}`}
            >
              {promotions.map((promo, i) => (
                <motion.div
                  key={promo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group overflow-hidden rounded-xl bg-white border border-border hover-lift"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={promo.image}
                      alt={promo.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              At Natural Beauty Spa, we combine expertise with elegance to
              deliver unparalleled spa experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-linear-to-br from-primary/5 to-transparent border border-border hover-lift"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon
                    size={28}
                    weight="duotone"
                    className="text-primary"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24 bg-linear-to-b from-background to-primary/5">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Treatments
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our most loved services, trusted by hundreds of clients for their
              transformative results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularServices.map((service, i) => (
              <motion.div
                key={`${service.name}-${service.duration}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-border hover-lift"
              >
                <div className="flex items-center gap-2 text-primary mb-4">
                  <CheckCircleIcon size={20} weight="fill" />
                  <span className="text-sm font-medium">
                    {service.duration}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-primary">
                  {service.price}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Services
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Products
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Professional-grade products used in our treatments, available for
              your home care routine.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.productName}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.productName}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2">
                      {product.heroOneLiner}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              View All Products
              <ArrowRightIcon size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-4 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              What Our Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real Reviews, Real Results
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Don't just take our word for it — hear from our valued clients
              about their experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 6).map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border hover-lift"
              >
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <StarIcon
                      key={`star-${review.id}-${idx}`}
                      size={18}
                      weight="fill"
                      className="text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                  "{review.content}"
                </p>
                {review.services && review.services.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {review.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs bg-accent/20 text-primary px-2 py-0.5 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-muted text-xs">
                      {formatRelativeDate(review.createdAt)}
                    </p>
                  </div>
                  {review.priceAssessment && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {review.priceAssessment}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Read More Reviews on Google
              <ArrowRightIcon size={20} />
            </a>
            <a
              href={siteConfig.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              <StarIcon size={20} weight="fill" />
              Write a Review
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Day?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and step into a world of relaxation,
              rejuvenation, and natural beauty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-accent transition-colors"
              >
                Book Now
                <ArrowRightIcon size={20} />
              </Link>
              <Link
                href="/gift-cards"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white hover:text-primary transition-colors"
              >
                Gift Cards
                <ArrowRightIcon size={20} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
