"use client";

import { ArrowRightIcon, CheckCircleIcon, FlowerIcon, HeartIcon, SparkleIcon, StarIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { serviceCategories } from "@/data/services";

const features = [
  {
    icon: SparkleIcon,
    title: "Premium Products",
    description: "We use only the finest skincare products from renowned brands like Cellcosmet and Janssen.",
  },
  {
    icon: FlowerIcon,
    title: "Expert Therapists",
    description: "Our certified professionals bring years of experience and genuine care to every treatment.",
  },
  {
    icon: HeartIcon,
    title: "Personalized Care",
    description: "Every treatment is customized to your unique skin type and wellness goals.",
  },
  {
    icon: StarIcon,
    title: "Serene Environment",
    description: "Escape the everyday in our tranquil, beautifully designed spa sanctuary.",
  },
];

const popularServices = serviceCategories.flatMap((cat) => cat.items).slice(0, 4);
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
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Image
              src="/logos/Natural Beauty Spa Logo.svg"
              alt="Natural Beauty Spa"
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
              Indulge in transformative spa experiences that nurture your body, refresh your mind, and reveal your
              natural beauty.
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

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-muted max-w-2xl mx-auto">
              At Natural Beauty Spa, we combine expertise with elegance to deliver unparalleled spa experiences.
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
                  <feature.icon size={28} weight="duotone" className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Treatments</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our most loved services, trusted by hundreds of clients for their transformative results.
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
                  <span className="text-sm font-medium">{service.duration}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Professional-grade products used in our treatments, available for your home care routine.
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
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {product.productName}
                    </h3>
                    <p className="text-muted text-sm line-clamp-2">{product.heroOneLiner}</p>
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

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Day?</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Book your appointment today and step into a world of relaxation, rejuvenation, and natural beauty.
            </p>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full text-base font-semibold hover:bg-accent transition-colors"
            >
              Book Now
              <ArrowRightIcon size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
