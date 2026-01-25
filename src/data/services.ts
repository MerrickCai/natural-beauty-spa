export interface ServiceItem {
  name: string;
  duration: string;
  price: string;
  description?: string;
  note?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  note?: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "hydrafacial",
    title: "HydraFacial",
    description:
      "Advanced skin resurfacing treatment that cleanses, extracts, and hydrates for instantly radiant skin.",
    items: [
      {
        name: "Signature Hydrafacial",
        duration: "75 min",
        price: "$198",
        description: "Our classic treatment for deep cleansing and hydration.",
      },
      {
        name: "Deluxe Hydrafacial",
        duration: "90 min",
        price: "$268",
        description:
          "Enhanced treatment with additional boosters and LED therapy.",
      },
      {
        name: "Platinum Hydrafacial",
        duration: "100 min",
        price: "$298",
        description:
          "The ultimate experience with lymphatic drainage and specialized serums.",
      },
      {
        name: "HydraFacial Back Treatment",
        duration: "60 min",
        price: "$368",
        description:
          "Target back acne and congestion with our specialized back facial.",
      },
      {
        name: "Hydrafacial Scalp",
        duration: "60 min",
        price: "$550",
        description:
          "Revitalize your scalp for healthier, fuller-looking hair.",
      },
    ],
  },
  {
    slug: "facial-cleansing",
    title: "Facial Cleansing",
    description:
      "Customized facial treatments to address your unique skin concerns and reveal your natural glow.",
    items: [
      {
        name: "Deep Facial Cleansing",
        duration: "60 min",
        price: "$128",
        description:
          "Thorough cleansing to remove impurities and refresh your complexion.",
      },
      {
        name: "Diamond Microdermabrasion",
        duration: "75 min",
        price: "$128",
        description:
          "Gentle exfoliation to smooth texture and reduce fine lines.",
      },
      {
        name: "Classic Hydrating Facial",
        duration: "75 min",
        price: "$128",
        description: "Intensive moisture therapy for dry, dehydrated skin.",
      },
      {
        name: "Japanese Cypress Lifting",
        duration: "75 min",
        price: "$168",
        description:
          "Traditional Japanese technique for natural face lifting and toning.",
      },
      {
        name: "Chinese Guasha Lifting",
        duration: "75 min",
        price: "$198",
        description:
          "Ancient healing art for improved circulation and facial contouring.",
      },
      {
        name: "Cellcosmet Anti-Aging",
        duration: "90 min",
        price: "$268",
        description: "Premium Swiss cellular therapy for age-defying results.",
      },
    ],
  },
  {
    slug: "body-massage",
    title: "Body Massage",
    description:
      "Therapeutic massage treatments to relieve tension, improve circulation, and restore balance.",
    note: "Not eligible for in-store promotions",
    items: [
      {
        name: "Body Massage",
        duration: "30 min",
        price: "$50",
        description: "Quick relief for targeted tension areas.",
      },
      {
        name: "Body Massage",
        duration: "60 min",
        price: "$80",
        description: "Full relaxation session for stress relief.",
      },
      {
        name: "Body Massage",
        duration: "120 min",
        price: "$120",
        description: "Extended session for complete body renewal.",
      },
      {
        name: "Ear Candle Lymphatic Drainage",
        duration: "60 min",
        price: "$138",
        description:
          "Detoxifying treatment combining ear candling with lymphatic massage.",
      },
      {
        name: "Ovarian Care",
        duration: "75 min",
        price: "$198",
        description:
          "Specialized wellness treatment for hormonal balance and comfort.",
      },
    ],
  },
  {
    slug: "head-therapy",
    title: "Head Therapy",
    description:
      "Specialized scalp and head treatments to relieve stress and promote hair health.",
    items: [
      {
        name: "Head Therapy",
        duration: "60 min",
        price: "$88",
        description: "Relaxing scalp massage to release tension.",
        note: "Recharge 10 Sessions, Get 1 Free Hydrafacial Scalp",
      },
      {
        name: "Head Therapy",
        duration: "90 min",
        price: "$128",
        description: "Extended treatment for deep relaxation.",
        note: "Recharge 10 Sessions, Get 2 Free Hydrafacial Scalp",
      },
      {
        name: "Ginger Heat Therapy",
        duration: "75 min",
        price: "$138",
        description: "Warming ginger treatment for scalp and head.",
        note: "Advance Appointment Required",
      },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    description:
      "Professional hair removal services for smooth, lasting results.",
    items: [
      {
        name: "Single-Area Hair Removal Annual Package",
        duration: "1 Year",
        price: "$599",
        description:
          "Choose ONE area: Arms, Lower Legs, Thighs, Underarms, or Face. Unlimited sessions for one year.",
      },
    ],
  },
];
