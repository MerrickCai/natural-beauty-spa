"use client";

import { ClockIcon, TagIcon } from "@phosphor-icons/react";
import { motion } from "motion/react";
import type { ServiceItem } from "@/data/services";

export default function ServiceCard({
  service,
  index = 0,
}: {
  service: ServiceItem;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold flex-1 pr-4">{service.name}</h3>
        <span className="text-xl font-bold text-primary whitespace-nowrap">
          {service.price}
        </span>
      </div>
      <div className="flex items-center gap-4 text-sm text-muted mb-3">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary/5 rounded-md">
          <ClockIcon size={14} weight="bold" />
          {service.duration}
        </span>
      </div>
      {service.description && (
        <p className="text-sm text-muted leading-relaxed">
          {service.description}
        </p>
      )}
      {service.note && (
        <div className="mt-3 flex items-center gap-2 text-xs text-primary bg-primary/5 px-3 py-2 rounded-lg">
          <TagIcon size={14} weight="bold" />
          {service.note}
        </div>
      )}
    </motion.div>
  );
}
