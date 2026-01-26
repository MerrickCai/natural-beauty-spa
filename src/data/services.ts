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
      "Experience the power of HydraFacial — a patented skin resurfacing technology that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one treatment. Instantly reveals brighter, clearer, and more radiant skin with no downtime.",
    items: [
      {
        name: "Signature Hydrafacial",
        duration: "75 min",
        price: "$198",
        description:
          "Our foundational treatment featuring deep cleansing, gentle exfoliation, painless extractions, and intense hydration with nourishing serums. Perfect for first-timers seeking an instant glow.",
      },
      {
        name: "Deluxe Hydrafacial",
        duration: "90 min",
        price: "$268",
        description:
          "Elevate your experience with targeted booster serums for specific concerns (brightening, anti-aging, or acne), plus LED light therapy to stimulate collagen production and reduce inflammation.",
      },
      {
        name: "Platinum Hydrafacial",
        duration: "100 min",
        price: "$298",
        description:
          "The ultimate luxury facial experience. Includes lymphatic drainage massage to detoxify and reduce puffiness, premium specialized serums, and extended LED therapy for maximum anti-aging benefits.",
      },
      {
        name: "HydraFacial Back Treatment",
        duration: "60 min",
        price: "$368",
        description:
          "Bring the HydraFacial magic to hard-to-reach areas. This specialized treatment targets back acne, congestion, and uneven texture, leaving your skin smooth, clear, and refreshed.",
      },
      {
        name: "Hydrafacial Scalp",
        duration: "60 min",
        price: "$550",
        description:
          "A revolutionary scalp treatment using HydraFacial technology to deeply cleanse follicles, remove buildup, and infuse nourishing serums. Promotes healthier, stronger, and fuller-looking hair.",
      },
    ],
  },
  {
    slug: "facial-cleansing",
    title: "Facial Cleansing",
    description:
      "Personalized facial treatments tailored to your unique skin type and concerns. From deep cleansing to advanced anti-aging therapies, our expert estheticians use premium products and time-honored techniques to reveal your natural radiance.",
    items: [
      {
        name: "Deep Facial Cleansing",
        duration: "60 min",
        price: "$128",
        description:
          "A thorough deep-cleansing treatment that removes impurities, unclogs pores, and eliminates blackheads. Includes steam, manual extractions, and a calming mask to leave skin refreshed and balanced.",
      },
      {
        name: "Diamond Microdermabrasion",
        duration: "75 min",
        price: "$128",
        description:
          "Advanced exfoliation using diamond-tip technology to gently resurface skin, minimize fine lines, reduce hyperpigmentation, and improve overall texture. Reveals smoother, more youthful-looking skin.",
      },
      {
        name: "Classic Hydrating Facial",
        duration: "75 min",
        price: "$128",
        description:
          "Intensive moisture therapy designed for dry, dehydrated, or sensitive skin. Features hydrating serums, nourishing masks, and gentle massage to restore suppleness and a healthy, dewy glow.",
      },
      {
        name: "Japanese Cypress Lifting",
        duration: "75 min",
        price: "$168",
        description:
          "A traditional Japanese beauty ritual using hinoki cypress tools to naturally lift, sculpt, and tone facial muscles. Improves lymphatic flow, reduces puffiness, and creates a more defined, youthful contour.",
      },
      {
        name: "Chinese Guasha Lifting",
        duration: "75 min",
        price: "$198",
        description:
          "Ancient Chinese healing art meets modern skincare. Using specialized jade or rose quartz tools, this treatment improves circulation, releases muscle tension, sculpts facial contours, and promotes natural collagen production.",
      },
      {
        name: "Cellcosmet Anti-Aging",
        duration: "90 min",
        price: "$268",
        description:
          "Premium Swiss cellular therapy using Cellcosmet's renowned bio-cellular extracts. This luxurious treatment deeply nourishes, firms, and revitalizes mature skin, delivering visible anti-aging results and a luminous complexion.",
      },
    ],
  },
  {
    slug: "body-massage",
    title: "Body Massage",
    description:
      "Escape the stress of daily life with our therapeutic massage treatments. Our skilled therapists combine various techniques to relieve muscle tension, improve circulation, and restore physical and mental balance.",
    note: "Not eligible for in-store promotions",
    items: [
      {
        name: "Body Massage",
        duration: "30 min",
        price: "$50",
        description:
          "A focused express session targeting specific problem areas — perfect for neck, shoulders, or lower back. Ideal for those short on time but in need of quick tension relief.",
      },
      {
        name: "Body Massage",
        duration: "60 min",
        price: "$80",
        description:
          "Our signature full-body massage combining Swedish and deep tissue techniques. Releases muscle tension, promotes relaxation, and leaves you feeling completely renewed and stress-free.",
      },
      {
        name: "Body Massage",
        duration: "120 min",
        price: "$120",
        description:
          "The ultimate indulgence for complete body renewal. This extended session allows for thorough attention to every muscle group, deeper pressure work, and a truly transformative relaxation experience.",
      },
      {
        name: "Ear Candle Lymphatic Drainage",
        duration: "60 min",
        price: "$138",
        description:
          "A unique detoxifying treatment combining traditional ear candling with gentle lymphatic drainage massage. Helps clear sinus pressure, reduce water retention, and promote overall wellness and relaxation.",
      },
      {
        name: "Ovarian Care",
        duration: "75 min",
        price: "$198",
        description:
          "A specialized wellness treatment using warm herbal compresses and gentle abdominal massage to support hormonal balance, ease menstrual discomfort, and promote reproductive health and overall comfort.",
      },
    ],
  },
  {
    slug: "head-therapy",
    title: "Head Therapy",
    description:
      "Specialized scalp and head treatments designed to melt away stress, relieve tension headaches, and promote optimal scalp health for stronger, more beautiful hair. A deeply relaxing escape for mind and body.",
    items: [
      {
        name: "Head Therapy",
        duration: "60 min",
        price: "$88",
        description:
          "A soothing scalp treatment featuring deep cleansing, exfoliation, and relaxing massage techniques to release tension, improve circulation, and promote a healthy scalp environment.",
        note: "Recharge 10 Sessions, Get 1 Free Hydrafacial Scalp",
      },
      {
        name: "Head Therapy",
        duration: "90 min",
        price: "$128",
        description:
          "An extended healing journey for ultimate relaxation. Includes thorough scalp treatment, head and neck massage, and aromatherapy to deeply calm the mind and relieve accumulated stress.",
        note: "Recharge 10 Sessions, Get 2 Free Hydrafacial Scalp",
      },
      {
        name: "Ginger Heat Therapy",
        duration: "75 min",
        price: "$138",
        description:
          "A warming treatment using fresh ginger preparations to stimulate circulation, open blocked channels, and deeply relax tense muscles. Particularly beneficial for those with cold sensitivity or chronic tension.",
        note: "Advance Appointment Required",
      },
    ],
  },
  {
    slug: "waxing",
    title: "Waxing",
    description:
      "Professional hair removal services using premium, gentle wax formulas for smooth, long-lasting results. Our experienced estheticians ensure a comfortable experience with minimal irritation.",
    items: [
      {
        name: "Single-Area Hair Removal Annual Package",
        duration: "1 Year",
        price: "$599",
        description:
          "Unlimited waxing sessions for one year on your choice of ONE area: Arms, Lower Legs, Thighs, Underarms, or Face. The most cost-effective way to achieve consistently smooth, hair-free skin all year long.",
      },
    ],
  },
];
