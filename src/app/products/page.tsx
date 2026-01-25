import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products | Natural Beauty Spa",
  description:
    "Discover our professional-grade skincare and haircare products used in spa treatments, available for your home care routine.",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Professional-grade skincare and haircare products used in our spa
            treatments, carefully curated for exceptional results.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
