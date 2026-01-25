export interface Review {
  id: string;
  name: string;
  rating: number;
  createdAt: Date;
  priceAssessment?: string;
  content: string;
  services?: string[];
}

export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return "today";
  if (diffDays === 1) return "yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 14) return "a week ago";
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 60) return "a month ago";
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

export const reviews: Review[] = [
  {
    id: "lin-nicole",
    name: "Lin Nicole",
    rating: 5,
    createdAt: new Date("2026-01-18"),
    priceAssessment: "Great price",
    content:
      "I had an amazing scalp treatment experience yesterday at Salon, and what truly stood out was the technique. After spending the entire day working in front of a computer, getting a scalp treatment was truly the perfect choice. The treatment instantly helped release the tension and fatigue built up from long hours of screen time. The techniques were professional and extremely effective—each movement felt intentional and well-executed. By the end of the session, I felt noticeably more relaxed, refreshed, and mentally clear. It was exactly the kind of reset my body and mind needed. Highly recommended for anyone who works long hours at a desk.",
    services: ["Skin treatments"],
  },
  {
    id: "peter-mceldowney",
    name: "Peter McEldowney",
    rating: 5,
    createdAt: new Date("2026-01-19"),
    content:
      "This is my second time visiting and this place is awesome. All of the staff there is very friendly and sweet. Sarah has become a staple for me as she is thorough, friendly, and makes me beautiful. My hair has never been stronger and healthier. I especially love her tasteful gua-sha and scalp massage. If you want beautiful hair and to feel like you are floating on a cloud, go here.",
  },
  {
    id: "shi-chen",
    name: "Shi Chen",
    rating: 5,
    createdAt: new Date("2026-01-17"),
    content:
      "Left feeling totally relaxed and refreshed. Will definitely be back.",
  },
  {
    id: "holden-he",
    name: "Holden He",
    rating: 5,
    createdAt: new Date("2026-01-18"),
    priceAssessment: "Great price",
    content:
      "The scalp therapist was super professional. They checked my scalp with advanced equipment first, then washed my hair and gave me a really relaxing scalp massage. The techniques were great, and I loved the whole experience.",
  },
  {
    id: "clio",
    name: "Clio",
    rating: 5,
    createdAt: new Date("2026-01-19"),
    priceAssessment: "Reasonable price",
    content:
      "I went to this new spa with my friends yesterday, and it was such a lovely experience. The esthetician was very professional and had amazing technique — I felt completely taken care of. The space is beautiful, cozy, and so relaxing. It felt like the perfect spot to spend an afternoon with my girls, chatting, unwinding, and pampering ourselves together. It was my first time trying a Japanese cypress lifting treatment, and it honestly felt magical. The experience was unique and relaxing, and my skin felt tighter and refreshed afterward. Spending time here felt just like a spa version of an afternoon tea with friends — relaxing, joyful, and a little self-care moment we all needed. I'll definitely be back and highly recommend it if you're looking for a place to relax and glow up together.",
    services: ["Skin treatments"],
  },
  {
    id: "carol-xu",
    name: "Carol Xu",
    rating: 5,
    createdAt: new Date("2026-01-17"),
    priceAssessment: "Great price",
    content:
      "I recently visited for body waxing and skincare treatments with Sarah, and I am beyond impressed! From the moment I walked in, the clinic was clean, professional, and welcoming. Sarah is an absolute expert—she took the time to understand my skin concerns and tailored the treatments accordingly. Her technique for hair removal was precise and virtually painless, and my skin feels smoother than ever. For skincare, she recommended a gentle, effective routine that has already made a noticeable difference in my complexion. What stands out most is Sarah's professionalism, patience, and genuine care for her clients. She made sure I was comfortable throughout each session and provided clear aftercare instructions. If you're in the Bellevue area and looking for top-notch hair removal or skincare services, I highly recommend booking with Sarah. Five stars without a doubt!",
    services: ["Skin treatments", "Body waxing"],
  },
  {
    id: "jing",
    name: "Jing",
    rating: 5,
    createdAt: new Date("2026-01-18"),
    content:
      "An incredibly calming experience. The head spa helped me release stress and brought me a deep sense of relaxation. It felt like all the stress in my head simply disappeared.",
  },
];
