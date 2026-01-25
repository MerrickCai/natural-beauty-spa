import {
  ArrowLeftIcon,
  CheckCircleIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: product.metaTitle,
    description: product.metaDescription,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-6 pt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors"
        >
          <ArrowLeftIcon size={20} />
          Back to Products
        </Link>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-primary/5">
              <Image
                src={product.image}
                alt={product.productName}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {product.fullTitle}
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                {product.heroOneLiner}
              </p>
              <p className="text-muted leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <SparkleIcon
                    size={20}
                    weight="duotone"
                    className="text-primary"
                  />
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircleIcon
                        size={20}
                        weight="fill"
                        className="text-primary shrink-0 mt-0.5"
                      />
                      <span className="text-muted">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Best Used In */}
              <div className="p-6 bg-primary/5 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3">Best Used In</h3>
                <div className="flex flex-wrap gap-2">
                  {product.bestUsedIn.map((use) => (
                    <span
                      key={use}
                      className="px-3 py-1.5 bg-white text-sm text-muted rounded-full border border-border"
                    >
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/booking"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-primary-light transition-colors"
                >
                  Experience This Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
