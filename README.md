# Natural Beauty Spa

A modern, responsive website for Natural Beauty Spa — Bellevue's premier spa experience.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS 4
- **Icons**: Phosphor Icons
- **Animations**: Motion (Framer Motion)
- **Analytics**: Vercel Analytics
- **Language**: TypeScript

## Features

- 🏠 **Home** - Hero, promotions, features, services preview, products, testimonials
- 💆 **Services** - HydraFacial, facial cleansing, body massage, head therapy, waxing
- 🛍️ **Products** - Skincare products with detailed pages
- 🖼️ **Gallery** - Photo gallery with lightbox
- 🎬 **Videos** - Video gallery
- 📅 **Booking** - Square appointment integration
- 🎁 **Gift Cards** - Square gift card integration
- 📞 **Contact** - Contact info with Google Maps
- ℹ️ **About** - Spa story and team

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/           # Pages (App Router)
├── components/    # Reusable components
├── data/          # Data files (services, products, reviews, etc.)
└── lib/           # Utilities

public/
├── gallery/       # Gallery images
├── logos/         # Logo files
├── products/      # Product images
├── promotions/    # Promotion banners
└── videos/        # Video thumbnails
```

## Data Files

- `site.ts` - Site configuration (contact, social, booking links)
- `services.ts` - Service categories and items
- `products.ts` - Product listings
- `reviews.ts` - Customer reviews
- `promotions.ts` - Current promotions
- `gallery.ts` - Gallery images
- `videos.ts` - Video listings

## Deployment

Deploy on [Vercel](https://vercel.com) for best performance with Next.js.
