"use client";

import { ArrowRightIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { blurDataURL } from "@/lib/placeholder";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL={blurDataURL}
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {product.productName}
          </h3>
          <p className="text-muted text-sm line-clamp-2 mb-4">
            {product.heroOneLiner}
          </p>
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
            View Details
            <ArrowRightIcon size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
