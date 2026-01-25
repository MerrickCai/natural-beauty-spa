export interface Product {
  slug: string;
  productName: string;
  fullTitle: string;
  heroOneLiner: string;
  description: string;
  features: string[];
  bestUsedIn: string[];
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const products: Product[] = [
  {
    slug: "milbon-reawaken-renewing-care-set",
    productName: "Milbon Reawaken Renewing Care Set",
    fullTitle: "Milbon Reawaken Renewing Hair Care Set",
    heroOneLiner:
      "A spa-grade hair renewal ritual that restores softness, balance, and natural shine.",
    description:
      "Designed for professional spa and salon environments, the Milbon Reawaken Renewing Hair Care Set delivers a complete restorative experience for tired, stressed hair. This curated set combines gentle cleansing, deep renewal, and targeted anti-frizz care to bring hair back to a smooth, healthy state. Lightweight yet effective, the formulas work together to hydrate without heaviness, improve manageability, and enhance hair's natural movement.",
    features: [
      "Professional-grade shampoo and renewing treatment",
      "Weekly anti-frizz booster for intensive smoothing",
      "Lightweight hydration that won't weigh hair down",
      "Enhances shine, softness, and overall hair balance",
      "Suitable for color-treated and chemically processed hair",
      "Clean, minimal packaging ideal for spa display",
    ],
    bestUsedIn: [
      "Hair spa & scalp treatment rooms",
      "Salon retail shelves",
      "Luxury spa back-bar use",
      "Home spa routines with professional products",
    ],
    metaTitle:
      "Milbon Reawaken Renewing Hair Care Set | Spa-Grade Hair Renewal",
    metaDescription:
      "A professional Milbon hair care set featuring renewing shampoo, treatment, and anti-frizz booster for smooth, hydrated, spa-quality results.",
    image: "/products/milbon-reawaken-renewing-care-set.jpg",
  },
  {
    slug: "spa-essential-oil-aromatherapy-set",
    productName: "Essential Oil Aromatherapy Set",
    fullTitle: "Spa Aromatherapy Essential Oil Collection",
    heroOneLiner:
      "A curated selection of pure essential oils to elevate the spa atmosphere.",
    description:
      "The Spa Aromatherapy Essential Oil Collection features a balanced range of classic botanical scents designed to enhance relaxation, focus, and emotional balance. Carefully selected for professional spa environments, each oil delivers a clean, natural aroma that integrates seamlessly into treatment rooms and relaxation spaces. From refreshing citrus notes to calming floral and grounding herbal tones, this set allows flexible scent layering and customization.",
    features: [
      "Curated multi-scent essential oil set",
      "Includes fresh, floral, citrus, and herbal profiles",
      "Ideal for aroma diffusion and ambient scenting",
      "Clean, natural fragrance character",
      "Professional spa-grade presentation",
      "Compact display box for organized storage",
    ],
    bestUsedIn: [
      "Treatment rooms",
      "Relaxation lounges",
      "Aroma diffusion stations",
      "Home spa environments",
    ],
    metaTitle: "Spa Essential Oil Aromatherapy Set | Premium Scent Collection",
    metaDescription:
      "A professional aromatherapy essential oil set featuring fresh, floral, citrus, and herbal scents for spa and relaxation spaces.",
    image: "/products/spa-essential-oil-aromatherapy-set.jpg",
  },
  {
    slug: "swissde-caviar-lifting-brightening-set",
    productName: "Swissdé Caviar Lifting & Brightening Set",
    fullTitle: "Swissdé O3 Caviar Lifting & Brightening Skincare Set",
    heroOneLiner:
      "Luxury caviar-infused skincare designed to firm, brighten, and refine.",
    description:
      "The Swissdé O3 Caviar Lifting & Brightening Skincare Set represents advanced luxury skincare rooted in Swiss formulation standards. Infused with caviar-based ingredients, this set focuses on improving skin firmness, radiance, and overall texture while delivering a visibly refined appearance. Designed for high-end spa and aesthetic environments, the rich yet elegant formulations support intensive skin renewal.",
    features: [
      "Caviar-infused lifting and brightening formulas",
      "Supports skin firmness and radiance",
      "Rich, refined texture suitable for professional use",
      "Luxury Swiss skincare presentation",
      "Ideal for intensive skin care routines",
      "Elegant packaging for premium display",
    ],
    bestUsedIn: [
      "Facial treatment rooms",
      "Luxury spa environments",
      "Skincare retail displays",
      "High-end home skincare routines",
    ],
    metaTitle: "Swissdé O3 Caviar Lifting & Brightening Set | Luxury Skincare",
    metaDescription:
      "A premium Swiss caviar skincare set designed to enhance firmness, brightness, and skin refinement in spa and luxury settings.",
    image: "/products/swissde-caviar-lifting-brightening-set.jpg",
  },
  {
    slug: "professional-hyaluronic-acid-aqua-serum-set",
    productName: "Hyaluronic Acid Aqua Serum Set",
    fullTitle: "Professional Hyaluronic Acid Aqua Serum Collection",
    heroOneLiner:
      "Intensive hydration powered by high-purity hyaluronic acid for visibly plumper skin.",
    description:
      "The Professional Hyaluronic Acid Aqua Serum Collection is designed to deliver deep, long-lasting hydration with a clean, lightweight feel. Formulated with high-quality hyaluronic acid, this serum helps replenish moisture, improve skin elasticity, and support a smooth, refreshed complexion. Packaged in individual dropper bottles for precision and hygiene.",
    features: [
      "High-purity hyaluronic acid formulation",
      "Deep hydration with a lightweight, non-sticky feel",
      "Helps improve skin plumpness and elasticity",
      "Individual dropper bottles for precise application",
      "Professional spa-grade presentation",
      "Suitable for all skin types, including dehydrated skin",
    ],
    bestUsedIn: [
      "Facial treatment rooms",
      "Hydration-focused skincare rituals",
      "Professional aesthetic settings",
      "Advanced home skincare routines",
    ],
    metaTitle:
      "Professional Hyaluronic Acid Aqua Serum Set | Deep Hydration Care",
    metaDescription:
      "A spa-grade hyaluronic acid serum set designed to deliver deep hydration, improved elasticity, and a smooth, refreshed skin appearance.",
    image: "/products/professional-hyaluronic-acid-aqua-serum-set.jpg",
  },
  {
    slug: "cellcosmet-professional-facial-care-system",
    productName: "Cellcosmet Professional Facial Care System",
    fullTitle: "Cellcosmet Swiss Professional Facial Care System",
    heroOneLiner:
      "A complete Swiss professional skincare system designed to restore balance, radiance, and calm.",
    description:
      "The Cellcosmet Swiss Professional Facial Care System is a comprehensive, spa-grade skincare collection developed for professional facial environments. This all-in-one system integrates cleansing, toning, activation, masking, and moisturizing steps to support skin vitality, hydration, and overall comfort. Formulated under Swiss quality standards, the products work synergistically to prepare, treat, and protect the skin.",
    features: [
      "Complete multi-step professional facial care system",
      "Includes cleansing, toning, activation, masking, and moisturizing",
      "Designed for skin balance, hydration, and radiance",
      "Calming and revitalizing formulations for stressed skin",
      "Swiss professional-grade quality and presentation",
      "Suitable for intensive spa and aesthetic environments",
    ],
    bestUsedIn: [
      "Professional facial treatment rooms",
      "Advanced skincare protocols",
      "Luxury spa environments",
      "Clinical-style aesthetic settings",
    ],
    metaTitle:
      "Cellcosmet Swiss Professional Facial Care System | Spa Skincare",
    metaDescription:
      "A comprehensive Swiss professional skincare system combining cleansing, activation, masks, and creams for balanced, radiant, spa-quality skin.",
    image: "/products/cellcosmet-professional-facial-care-system.jpg",
  },
  {
    slug: "janssen-professional-ampoule-treatment-system",
    productName: "Janssen Professional Ampoule System",
    fullTitle: "Janssen Cosmetics Professional Ampoule Treatment System",
    heroOneLiner:
      "Targeted ampoule care designed to calm, brighten, and instantly refresh the skin.",
    description:
      "The Janssen Cosmetics Professional Ampoule Treatment System is a precision-focused skincare solution developed for professional spa and aesthetic environments. This system combines fast-acting ampoules designed to soothe sensitive skin while delivering visible brightness and revitalization, particularly in delicate areas. Each ampoule is formulated for immediate absorption and controlled application.",
    features: [
      "Professional-grade ampoule treatment system",
      "Focused on soothing, brightening, and skin comfort",
      "Fast-absorbing fluid and oil-based formulations",
      "Single-use glass ampoules for hygiene and precision",
      "Clinical, minimalist Swiss–German skincare aesthetic",
      "Designed for advanced facial and eye-area care",
    ],
    bestUsedIn: [
      "Professional facial treatment rooms",
      "Eye and sensitive-skin protocols",
      "Clinical-style aesthetic environments",
      "High-performance skincare routines",
    ],
    metaTitle: "Janssen Professional Ampoule Treatment System | Spa Skincare",
    metaDescription:
      "A professional ampoule skincare system by Janssen Cosmetics designed to soothe, brighten, and refresh skin with precision-focused treatments.",
    image: "/products/janssen-professional-ampoule-treatment-system.jpg",
  },
  {
    slug: "oxygenceuticals-professional-skin-care-collection",
    productName: "OxygenCeuticals Professional Skin Care Collection",
    fullTitle:
      "OxygenCeuticals Professional Oxygen-Infused Skin Care Collection",
    heroOneLiner:
      "Advanced oxygen-infused skincare designed to hydrate, protect, and calm the skin.",
    description:
      "The OxygenCeuticals Professional Skin Care Collection is a comprehensive skincare system formulated to support skin vitality through oxygen-based technology. Designed for professional spa and aesthetic environments, this collection focuses on hydration, protection, soothing care, and overall skin balance. Featuring a range of lightweight fluids, nourishing toners, and daily protection essentials.",
    features: [
      "Oxygen-infused professional skincare formulations",
      "Focus on hydration, calming, and skin comfort",
      "Lightweight textures suitable for all skin types",
      "Includes daily protection and restorative care",
      "Clean, clinical presentation for spa environments",
      "Designed for consistent professional use",
    ],
    bestUsedIn: [
      "Professional facial treatment rooms",
      "Oxygen-based skincare protocols",
      "Advanced spa and aesthetic environments",
      "High-end skincare retail displays",
    ],
    metaTitle:
      "OxygenCeuticals Professional Skin Care Collection | Oxygen Skincare",
    metaDescription:
      "A professional oxygen-infused skincare collection designed to hydrate, soothe, and protect skin in spa and aesthetic environments.",
    image: "/products/oxygenceuticals-professional-skin-care-collection.jpg",
  },
  {
    slug: "herbal-fermented-scalp-cleansing-essence",
    productName: "Herbal Fermented Scalp Cleansing Essence",
    fullTitle: "Traditional Herbal Fermented Scalp Cleansing & Massage Essence",
    heroOneLiner:
      "An herbal-infused cleansing essence designed to refresh the scalp and restore balance.",
    description:
      "The Herbal Fermented Scalp Cleansing & Massage Essence is inspired by traditional East Asian herbal care philosophies, combining fermented botanical ingredients with modern scalp-cleansing practices. Designed for professional spa environments, this product supports scalp comfort, cleanliness, and overall balance while offering a grounding, ritual-like experience.",
    features: [
      "Herbal and fermented botanical formulation",
      "Supports scalp cleansing and balance",
      "Suitable for scalp massage and head spa rituals",
      "Lightweight texture with a clean finish",
      "Natural, calming herbal aroma",
      "Elegant packaging inspired by traditional design",
    ],
    bestUsedIn: [
      "Head spa and scalp therapy rooms",
      "Herbal wellness treatments",
      "Relaxation-focused spa environments",
      "Premium scalp care rituals",
    ],
    metaTitle: "Herbal Fermented Scalp Cleansing Essence | Scalp Care Ritual",
    metaDescription:
      "A traditional herbal fermented scalp cleansing essence designed for head spa rituals, supporting scalp balance, comfort, and relaxation.",
    image: "/products/herbal-fermented-scalp-cleansing-essence.jpg",
  },
  {
    slug: "ancient-tea-fermented-herbal-shampoo",
    productName: "Ancient Tea Fermented Herbal Shampoo",
    fullTitle: "Ancient Tree Tea Fermented Herbal Shampoo",
    heroOneLiner:
      "A traditional tea-based shampoo ritual that gently cleanses and restores scalp balance.",
    description:
      "The Ancient Tree Tea Fermented Herbal Shampoo is inspired by classical East Asian botanical care traditions, using fermented tea extracts to cleanse the scalp while maintaining natural balance. Designed for professional spa and head therapy environments, this shampoo offers a gentle yet effective cleansing experience without stripping moisture.",
    features: [
      "Fermented tea-based herbal formulation",
      "Gentle cleansing suitable for regular use",
      "Supports scalp balance and comfort",
      "Smooth texture with a calming herbal aroma",
      "Inspired by traditional botanical care rituals",
      "Elegant packaging with cultural heritage aesthetics",
    ],
    bestUsedIn: [
      "Head spa and scalp therapy treatments",
      "Herbal wellness rituals",
      "Professional hair and scalp care settings",
      "Premium home hair care routines",
    ],
    metaTitle: "Ancient Tea Fermented Herbal Shampoo | Herbal Scalp Care",
    metaDescription:
      "A traditional fermented tea herbal shampoo designed to gently cleanse, balance the scalp, and elevate head spa and herbal hair care rituals.",
    image: "/products/ancient-tea-fermented-herbal-shampoo.jpg",
  },
  {
    slug: "fermented-tea-rice-water-scalp-cleanser",
    productName: "Fermented Tea & Rice Water Scalp Cleanser",
    fullTitle: "Fermented Tea & Rice Water Herbal Scalp Cleansing Concentrate",
    heroOneLiner:
      "A traditional fermented rinse that deeply cleanses while restoring scalp balance.",
    description:
      "The Fermented Tea & Rice Water Herbal Scalp Cleansing Concentrate draws inspiration from traditional East Asian hair-care rituals that use fermented tea and rice water to purify and rebalance the scalp. Designed for professional head spa environments, this large-format cleanser delivers a thorough yet gentle cleanse, leaving the scalp refreshed without dryness.",
    features: [
      "Fermented tea and rice water–inspired formulation",
      "Deep yet gentle scalp cleansing",
      "Supports scalp balance and comfort",
      "Ideal for rinse and massage applications",
      "Large professional-size format",
      "Traditional aesthetic with modern spa use",
    ],
    bestUsedIn: [
      "Head spa and scalp cleansing rituals",
      "Pre-treatment scalp preparation",
      "Herbal wellness therapies",
      "Professional hair and scalp care rooms",
    ],
    metaTitle:
      "Fermented Tea & Rice Water Scalp Cleanser | Herbal Head Spa Care",
    metaDescription:
      "A professional fermented tea and rice water scalp cleansing concentrate designed for deep cleansing and balanced head spa rituals.",
    image: "/products/fermented-tea-rice-water-scalp-cleanser.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
