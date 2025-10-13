# MyBizKit - Project Specifications

## Project Overview

**Business Name:** MyBizKit  
**Domain:** mybizkit.com.au  
**Tagline:** Outstanding Branding  
**Location:** Brisbane, Australia

**Tech Stack:**
- Nuxt 4 (Vue 3)
- Tailwind CSS 4
- TypeScript (recommended)

## Brand Identity

### Visual Theme
- **Style:** Modern, slick, friendly, professional
- **Primary Colors:**
    - Navy: `#1e3a5f` (or similar navy tone)
    - Mint: `#a7f3d0` (or similar mint/turquoise)
- **Typography:** Clean, modern sans-serif (consider Inter, Plus Jakarta Sans, or Outfit)
- **Design Philosophy:** Mobile-first, minimalist, high-quality imagery

### Target Audience
1. **Business Owners** seeking branded merchandise for their own companies
2. **B2B Sales Professionals** wanting custom-branded gifts to win new clients (using target company logos)

## Product Catalog

### 1. Key Tags with NFC Chips
- Physical key tags/keychains
- Optional NFC chip integration
- Customization options:
    - Colors (multiple)
    - Shapes (various designs)
    - NFC chip inclusion (yes/no)
    - NFC chip data (URL, contact info, etc.)
    - Logo upload
    - Text engraving options

### 2. 3D Business Cards
- Three-dimensional printed business cards
- Customization options:
    - Dimensions/size
    - Color schemes
    - Logo upload
    - Text fields (name, title, contact)
    - QR code integration
    - Material finish (matte/glossy)

### 3. Customized License Plate Frames
- Frame with interchangeable top/bottom badges
- Customization options:
    - **Frame color** (body of the frame)
    - **Primary badge color** (foreground/text color)
    - **Secondary badge color** (background color)
    - **Logo upload** (for badges)
    - **Text input** (for URL or custom text on badges)
    - **Gift box option** (premium packaging)

### 4. Stationary Items
- Pencil boxes
- Phone holders with built-in Qi wireless chargers
- Customization options:
    - Colors
    - Logo upload
    - Engraving/printing options
    - Qi charger inclusion (for phone holders)

## Site Structure

### Pages Required

#### 1. Homepage (`/`)
Structure components in this order:

**a) Hero Banner**
- Full-width, high-impact section
- Main headline: "Outstanding Branding for Your Business"
- Subheadline highlighting unique value proposition
- CTA buttons: "Shop Products" and "Custom Quote"
- Background: High-quality product image or video placeholder
- Mobile-optimized with smaller hero on mobile

**b) Bento Grid - Product Showcase**
- 4-cell asymmetric grid layout (larger cells for key products)
- Products featured:
    1. Key Tags with NFC
    2. 3D Business Cards
    3. License Plate Frames
    4. Stationary (Pencil Boxes & Phone Holders)
- Each cell includes:
    - Product image
    - Product name
    - Brief description (1 line)
    - "Explore" CTA button
- Responsive: 2x2 grid on desktop, single column on mobile

**c) Product Examples Carousel**
- Horizontal scrolling carousel
- Real-world product examples
- High-quality photos of completed projects
- Caption with project type
- Infinite loop, auto-play (pausable)
- Touch/swipe enabled for mobile

**d) Instagram Feed - Masonry Grid**
- Masonry/Pinterest-style layout
- Pull recent Instagram posts (use placeholder images initially)
- Overlay with Instagram icon on hover
- Links to Instagram profile
- 3-4 columns on desktop, 2 on tablet, 1 on mobile

**e) Why Choose Us Section**
- Grid layout (2 columns desktop, 1 column mobile)
- Key selling points:
    1. **Local Brisbane Business** - Personal service with local pickup/drop-off options
    2. **Australia & NZ Shipping** - Fast, reliable delivery across the region
    3. **Swift Turnaround** - Quick production times without compromising quality
    4. **Quality Over Price** - Premium materials and attention to detail
    5. **Hands-On Design** - Collaborative design process with direct communication
    6. **Easy Communication** - Responsive, friendly customer service
- Each point with icon, heading, and brief description

**f) Footer**
- Contact information
- Social media links
- Quick links (Products, About, FAQ, Contact)
- Newsletter signup
- Business hours and location
- Payment methods accepted

#### 2. Product Listing Page (`/products`)
- Grid of all products (3 columns desktop, 2 tablet, 1 mobile)
- Filter options:
    - Category (Key Tags, Cards, Frames, Stationary)
    - Price range
    - Features (NFC, Qi charging, etc.)
- Sort options: Featured, Price (low-high), Newest
- Product cards showing:
    - Primary image
    - Product name
    - Starting price
    - Key features badges
    - "Customize" CTA

#### 3. Product Detail Page (PDP) (`/products/[slug]`)
- Left side: Image gallery (main + thumbnails, zoomable)
- Right side: Product information
    - Product name
    - Price (starting from...)
    - Short description
    - Star rating placeholder
    - Customization form (see Customization Options section below)
    - Add to cart button
    - Add to wishlist
- Below fold:
    - Detailed description tabs (Description, Specifications, Reviews)
    - Related products carousel
    - FAQ section specific to product

#### 4. Cart Page (`/cart`)
- Line items with:
    - Product image
    - Product name + customizations summary
    - Quantity selector
    - Price
    - Remove button
- Order summary sidebar:
    - Subtotal
    - Shipping (calculated or TBD)
    - Total
    - Promo code field
    - Checkout button
- Empty cart state with "Continue Shopping" CTA

#### 5. About Page (`/about`)
- Company story
- Team section (optional)
- Brisbane location highlight
- Mission/values
- Behind-the-scenes photos of 3D printing process

#### 6. Contact Page (`/contact`)
- Contact form (name, email, phone, message)
- Business address and map embed
- Phone and email
- Business hours
- Social media links
- FAQ link

#### 7. Custom Quote Page (`/quote`)
- Multi-step form for custom projects
- Fields for:
    - Project type
    - Quantity
    - Timeline requirements
    - Budget range
    - File uploads (logos, designs)
    - Contact information
    - Additional notes

## Customization Options System

### PDP Customization Interface

Create a dynamic, multi-step customization form on each PDP:

**Step 1: Basic Options**
- Product variant selector (if applicable)
- Quantity selector
- Size/dimensions (where relevant)

**Step 2: Colors**
- For frames: Frame color, Primary badge color, Secondary badge color
- For other products: Primary color, Secondary color (if applicable)
- Use color picker or predefined swatches
- Visual preview updates in real-time

**Step 3: Features**
- NFC chip inclusion (checkbox) for key tags
- Qi charger inclusion (checkbox) for phone holders
- Gift box packaging (checkbox) for frames
- Material/finish options

**Step 4: Personalization**
- Logo upload field (drag-and-drop + browse)
    - Accepted formats: PNG, SVG, AI, PDF
    - Size guidelines displayed
- Text input fields:
    - For frames: URL or custom text for badges
    - For cards: Name, title, contact info
    - Character limits displayed
- For NFC chips: URL or contact data input

**Step 5: Review & Add to Cart**
- Summary of all selections
- Visual preview/mockup
- Price breakdown
- Add to cart button
- Save design option (for future reordering)

### Data Structure for Customizations

Store customization data as JSON in cart/order:

```json
{
  "productId": "frame-001",
  "customizations": {
    "frameColor": "#1e3a5f",
    "primaryBadgeColor": "#ffffff",
    "secondaryBadgeColor": "#a7f3d0",
    "logoFile": "uploaded-logo-uuid.png",
    "badgeText": "mybizkit.com.au",
    "giftBox": true
  },
  "quantity": 2,
  "price": 89.99
}
```

## Technical Requirements

### Nuxt 4 Configuration

**Required Modules:**
- `@nuxtjs/tailwindcss` - Styling
- `@nuxt/image` - Image optimization
- `@pinia/nuxt` - State management (cart, wishlist)
- `@vueuse/nuxt` - Composition utilities
- `nuxt-icon` - Icon system

**Recommended Modules:**
- `@nuxtjs/seo` - SEO optimization
- `@formkit/nuxt` - Form handling
- `@nuxt/content` - Blog/content management (future)

### Tailwind 4 Configuration

**Custom Theme Extensions:**
```js
theme: {
  extend: {
    colors: {
      navy: {
        50: '#e6eef5',
        500: '#1e3a5f',
        900: '#0a1829'
      },
      mint: {
        50: '#f0fdf7',
        400: '#a7f3d0',
        600: '#4ade80'
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif']
    }
  }
}
```

### Component Architecture

**Atomic Design Structure:**
```
components/
├── base/
│   ├── Button.vue
│   ├── Input.vue
│   ├── Card.vue
│   └── Badge.vue
├── product/
│   ├── ProductCard.vue
│   ├── ProductGallery.vue
│   ├── CustomizationForm.vue
│   └── PriceDisplay.vue
├── cart/
│   ├── CartItem.vue
│   ├── CartSummary.vue
│   └── CartDrawer.vue
├── home/
│   ├── HeroBanner.vue
│   ├── BentoGrid.vue
│   ├── ProductCarousel.vue
│   ├── InstagramFeed.vue
│   └── WhyUs.vue
└── layout/
    ├── Header.vue
    ├── Footer.vue
    └── Navigation.vue
```

### State Management (Pinia)

**Stores Required:**
- `useCartStore()` - Cart items, total, quantities
- `useProductStore()` - Product catalog, filters
- `useCustomizationStore()` - Current customization state
- `useUserStore()` - User preferences, saved designs

### Responsive Breakpoints

Follow mobile-first approach:
- Mobile: 0-640px (sm)
- Tablet: 641-1024px (md-lg)
- Desktop: 1025px+ (xl-2xl)

## Content Guidelines

### Product Photography
- High resolution (minimum 2000px width)
- Multiple angles (front, side, detail shots)
- Lifestyle photos showing products in use
- Consistent lighting and background
- White or light gray background for product shots
- Context photos for carousel/examples

### Copywriting Tone
- Professional yet approachable
- Focus on business benefits
- Clear, concise product descriptions
- Call-out unique features (local, quality, customization)
- Action-oriented CTAs

### SEO Requirements
- Unique meta titles and descriptions per page
- Alt text for all images
- Structured data for products (Schema.org)
- Mobile-friendly (required)
- Fast loading times (< 3s)

## Implementation Phases

### Phase 1: Foundation (MVP)
- Setup Nuxt 4 + Tailwind 4 project
- Create basic layout (header, footer, navigation)
- Homepage with hero and bento grid
- Basic product listing page
- Simple product detail pages (no customization yet)

### Phase 2: Core Features
- Complete PDP with customization interface
- Cart functionality
- Product filtering and search
- Image galleries and carousels
- Instagram feed integration

### Phase 3: Enhanced UX
- Custom quote form
- Wishlist functionality
- Saved customizations
- Product preview/mockup generator
- Mobile menu optimization

### Phase 4: Content & Polish
- About and Contact pages
- Why Us section completion
- Product examples carousel
- SEO optimization
- Performance tuning

### Phase 5: Future Enhancements
- User accounts/login
- Order tracking
- Design templates library
- Blog/content section
- Payment integration (Stripe/PayPal)
- Email notifications

## Success Metrics

Track these KPIs:
- Mobile conversion rate (primary focus)
- Average customization completion rate
- Cart abandonment rate
- Time on product pages
- Custom quote form submissions
- Brisbane local pickup selection rate

## Notes for Implementation

1. **Mobile-First Priority:** Design and test on mobile devices first, then scale up
2. **Performance:** Use lazy loading for images, code splitting for routes
3. **Accessibility:** Ensure WCAG 2.1 AA compliance
4. **Loading States:** Implement skeleton screens for better perceived performance
5. **Error Handling:** Graceful error messages, especially for file uploads
6. **File Uploads:** Validate file types and sizes, provide clear feedback
7. **Price Display:** Always show "starting from" for customizable products
8. **Real-time Preview:** Consider 2D preview for color selections initially, 3D preview in later phase

## Contact & Shipping Information

**Business Details:**
- Location: Brisbane, Queensland, Australia
- Shipping: Australia and New Zealand
- Local option: Drop-off/pickup in Brisbane area
- Turnaround time: Emphasis on swift delivery

Include this information prominently in footer, contact page, and checkout process.

---

**Document Version:** 1.0  
**Last Updated:** October 2025  
**Status:** Ready for Development