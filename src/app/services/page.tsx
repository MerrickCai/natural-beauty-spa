import {
  BrainIcon,
  DropIcon,
  FlowerIcon,
  ScissorsIcon,
  SparkleIcon,
} from "@phosphor-icons/react/dist/ssr";
import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { serviceCategories } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive menu of spa treatments including HydraFacial, facial cleansing, body massage, head therapy, and waxing services in Bellevue, WA.",
};

const categoryIcons = {
  hydrafacial: DropIcon,
  "facial-cleansing": SparkleIcon,
  "body-massage": FlowerIcon,
  "head-therapy": BrainIcon,
  waxing: ScissorsIcon,
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24 bg-linear-to-br from-primary/5 via-accent/10 to-background">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Discover our comprehensive menu of spa treatments designed to
            nurture your body and elevate your spirit.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          {serviceCategories.map((category) => {
            const IconComponent =
              categoryIcons[category.slug as keyof typeof categoryIcons];
            return (
              <div key={category.slug} className="mb-20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <IconComponent
                      size={28}
                      weight="duotone"
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {category.title}
                    </h2>
                    <p className="text-muted text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {category.note && (
                  <div className="mb-6 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm inline-block">
                    {category.note}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, index) => (
                    <ServiceCard
                      key={`${item.name}-${index}`}
                      service={item}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
