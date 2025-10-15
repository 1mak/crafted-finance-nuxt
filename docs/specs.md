# Crafted Finance Website Specification

## Project Overview
A modern, professional landing page for Crafted Finance, an Australian finance brokerage specializing in various lending categories including vehicles, marine, travel, equipment, aviation, business, and insurance.

**Final URL:** https://crafted-finance.com.au/

## Tech Stack
- **Framework:** Nuxt 4
- **Styling:** Tailwind CSS 4
- **Email:** Nuxt email plugin (for form submissions)
- **Deployment:** Cloudflare (configured separately)

## Design System

### Color Palette
Based on the Crafted Finance logo:
- **Primary Navy:** `#1e2757` (dark navy from logo)
- **Primary Blue:** `#00a3e0` (bright cyan/blue from logo)
- **Light Blue:** `#5db3d4` (lighter accent)
- **White:** `#ffffff`
- **Light Gray:** `#f8f9fa` (backgrounds)
- **Dark Gray:** `#333333` (text)
- **Medium Gray:** `#6c757d` (secondary text)

### Typography
- **Headings:** Bold, modern sans-serif (use Tailwind's default or Inter/Poppins)
- **Body:** Clean, readable sans-serif
- **Accent:** "CRAFTED" in navy, "FINANCE" in cyan (matching logo)

### Design Inspiration
Reference: https://jade.finance/ - clean, modern, professional aesthetic with:
- Large hero sections
- Clear category cards
- Smooth animations
- Professional form design
- Trust indicators (social proof)

## Page Structure

### 1. Landing Page (/)

#### Hero Section
- **Background:** Navy gradient with subtle pattern or overlay
- **Content:**
  - Logo (use provided image assets)
  - Headline: "Financing Solutions for Every Journey"
  - Subheadline: "Trusted Australian finance brokers helping you secure the right funding for vehicles, marine, travel, equipment, aviation, business, and insurance."
  - Primary CTA button: "Get Started" (scrolls to form)
  - Secondary CTA: "Explore Solutions" (scrolls to categories)
- **Visual:** Consider abstract financial/journey imagery or keep clean with geometric shapes

#### Solutions Categories Section
- **Title:** "Solutions for Every Journey"
- **Layout:** Grid of 7 category cards (responsive: 1 col mobile, 2 cols tablet, 3-4 cols desktop)
- **Categories:**
  1. **Vehicles** - Cars, trucks, motorcycles
  2. **Marine** - Boats, watercraft
  3. **Travel** - Caravans, motorhomes
  4. **Equipment** - Business and industrial equipment
  5. **Aviation** - Aircraft financing
  6. **Business** - Business loans and commercial finance
  7. **Insurance** - Comprehensive insurance solutions

- **Card Design:**
  - Icon (use lucide-react icons or similar)
  - Category name
  - Brief description (1-2 lines)
  - Hover effect: slight lift and color accent
  - Each card is clickable and scrolls to the contact form with the category pre-selected

#### Trust/Social Proof Section
- **Title:** "Meet Our Expert Team"
- **Content:**
  - Brief intro about expertise and commitment
  - Team member cards with:
    - Professional headshot (placeholder or extracted from LinkedIn)
    - Name
    - Title/Role
    - LinkedIn profile link button
    - Key credentials or experience highlight

- **Team Members:**
  1. Olan O'Mahony - https://www.linkedin.com/in/olan-o-mahony-a614587a/
  2. Robert Sunderland - https://www.linkedin.com/in/robert-sunderland-062274301/

- **Additional Trust Elements:**
  - Australian Credit Licence badge/mention
  - Years of experience
  - Customer satisfaction indicator (if available)
  - Industry affiliations/certifications

#### Contact Form Section
- **Title:** "Start Your Finance Journey Today"
- **Form Fields:**
  - First Name (required)
  - Last Name (required)
  - Email Address (required, validated)
  - Phone Number (required, Australian format)
  - Finance Category (dropdown, required) - pre-populated if user clicked a category card
    - Options: Vehicles, Marine, Travel, Equipment, Aviation, Business, Insurance, Other
  - Loan Amount (optional, number input with currency formatting)
  - Message/Details (textarea, required, min 20 characters)
  - Consent checkbox (required): "I agree to the Privacy Policy and consent to being contacted by Crafted Finance"

- **Form Behavior:**
  - Client-side validation with clear error messages
  - Submit button: "Submit Enquiry"
  - Loading state during submission
  - Success message: "Thank you! We'll be in touch within 24 hours."
  - Error handling with user-friendly messages
  - Email sent to: [specify email address - placeholder: info@crafted-finance.com.au]
  - Email format: Professional HTML template with all form data

#### Footer
- **Layout:** Multi-column responsive footer (dark navy background)
- **Columns:**
  1. **Company Info:**
    - Logo
    - Tagline: "Financing Solutions for Every Journey"

  2. **Quick Links:**
    - Home
    - Privacy Policy
    - Complaints and Compliments

  3. **Contact:**
    - Email: info@crafted-finance.com.au (placeholder)
    - Phone: (placeholder - add if available)
    - Address: (if applicable)

  4. **Social Media:**
    - LinkedIn (link to company page if available)

- **Footer Bottom (Full Width):**
  - Legal text (as per Website Guide document):
    ```
    Crafted Finance Pty Ltd | ACN: 690 892 409 Credit Representative 572894 is authorised to provide credit assistance by Viking Asset Aggregation Pty Ltd Australian Credit Licence 543046

    This website is designed to provide you with factual information only. We do not provide financial or investment advice. Information on this site does not take into account your needs, objectives or financial situation. To understand whether a credit product is right for you, speak to one of our accredited Finance Brokers. Credit provider terms, conditions, interest rates, fees, charges and minimum loan amounts apply. Credit is subject to approval by the relevant credit provider.
    ```
  - Copyright: © 2025 Crafted Finance. All rights reserved.

### 2. Privacy Policy Page (/privacy-policy)

#### Layout
- **Header:** Same as landing page (logo + simple nav)
- **Content:**
  - Full privacy policy text from the provided document
  - Well-formatted with proper headings, sections, and spacing
  - Table of contents at the top for easy navigation (sticky sidebar on desktop)
  - Readable typography (larger font size, good line height)
  - Sections properly separated with spacing

#### Sections (from document):
- Introduction
- Collection and use of personal information
- Personal information obtained and held
- We will collect, hold, disclose, and use your personal and credit information to:
- Sensitive information
- Purposes for collection
- How personal information is collected, used, and disclosed
- Cookies
- How we hold personal information
- Access and correction of information
- Disclosing information overseas
- Marketing
- Changes to Privacy Policy
- Contact Us

**Contact Details (from document):**
- Addressee: The Privacy Officer
- Viking Asset Aggregation Pty Ltd
- Address: Level 3, 12 Waterloo Road, Macquarie Park NSW 2113, Australia
- Phone: 1800 861 004
- Email: privacy@vikingaggregation.com.au

### 3. Complaints and Compliments Page (/complaints-and-compliments)

#### Layout
- **Header:** Same as other pages
- **Content:**
  - Full complaints handling policy from the provided document
  - Clear, scannable formatting
  - Contact information prominently displayed
  - CTA box: "Lodge a Complaint" with contact methods

#### Sections (from document):
- Internal Dispute Resolution (IDR) Process
- How to lodge a complaint or make a compliment
- Dealing with complaints
- Response timeframes
- External dispute resolution - AFCA

**Contact Details (from document):**
- Addressee: The Complaints Officer
- Viking Asset Aggregation Pty Ltd
- Address: Level 3, 12 Waterloo Road, Macquarie Park NSW 2113, Australia
- Phone: 1800 861 004
- Email: complimentsandcomplaints@vikingaggregation.com.au

**AFCA Details:**
- Phone: 1800 931 678
- Email: info@afca.org.au
- Address: GPO Box 3, Melbourne VIC 3001

## Component Architecture

### Suggested Nuxt Components

```
components/
├── layout/
│   ├── Header.vue          # Navigation header
│   ├── Footer.vue          # Footer with legal text
│   └── PageHeader.vue      # Reusable page title section
├── sections/
│   ├── Hero.vue            # Landing page hero
│   ├── SolutionsGrid.vue   # Category cards grid
│   ├── TeamSection.vue     # Team member showcase
│   ├── ContactForm.vue     # Main contact form
│   └── TrustBadges.vue     # Credentials/licensing badges
├── ui/
│   ├── CategoryCard.vue    # Individual solution category card
│   ├── TeamCard.vue        # Team member profile card
│   ├── Button.vue          # Reusable button component
│   ├── FormInput.vue       # Form input wrapper
│   ├── FormSelect.vue      # Form dropdown
│   └── FormTextarea.vue    # Form textarea
└── content/
    └── PolicySection.vue   # Privacy/complaints content wrapper
```

## Technical Requirements

### Nuxt Configuration
- **SEO:** Properly configured meta tags, Open Graph, Twitter cards
- **Sitemap:** Auto-generated XML sitemap
- **Robots.txt:** Configured for search engines
- **Performance:** Optimized images, lazy loading, code splitting

### Form Handling
- **Email Plugin:** Configure Nuxt email module
- **Validation:** Client-side using Vuelidate or similar
- **Spam Protection:** Consider honeypot field or simple CAPTCHA
- **Email Template:** HTML email with company branding
- **Recipient:** Configure email destination
- **Confirmation:** Optional confirmation email to user

### Responsive Design
- **Mobile First:** Design and develop mobile-first
- **Breakpoints:** Follow Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Touch Targets:** Ensure adequate size for mobile interactions
- **Forms:** Stack vertically on mobile, optimize for thumb typing

### Accessibility
- **ARIA Labels:** Proper labeling for screen readers
- **Keyboard Navigation:** Full keyboard accessibility
- **Color Contrast:** Meet WCAG AA standards minimum
- **Focus States:** Clear focus indicators
- **Alt Text:** All images have descriptive alt text
- **Semantic HTML:** Use proper heading hierarchy

### Performance Targets
- **Lighthouse Score:** Aim for 90+ in all categories
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Images:** Optimized and served in modern formats (WebP)

## Content Guidelines

### Tone of Voice
- Professional yet approachable
- Trustworthy and transparent
- Australian context and terminology
- Avoid overly technical jargon
- Focus on benefits and outcomes

### Key Messaging
- Expertise in diverse financing solutions
- Personalized service and guidance
- Authorized and licensed broker
- Wide network of lenders
- Streamlined application process

## Assets Needed

### Images
- ✅ Logo (provided in 3 variations)
- Hero background image or pattern
- Team member photos (2 provided via LinkedIn)
- Category icons (can use icon library)
- Trust/certification badges

### Copy
- Category descriptions (7 categories)
- Team member bios (expand from LinkedIn)
- About section copy
- Meta descriptions for SEO

## Development Phases

### Phase 1: Setup & Structure
1. Initialize Nuxt 4 project with Tailwind 4
2. Create component structure
3. Configure email plugin
4. Set up routing for 3 pages

### Phase 2: Landing Page
1. Build Hero section
2. Create Solutions Grid
3. Develop Team Section
4. Implement Contact Form
5. Build Footer

### Phase 3: Content Pages
1. Privacy Policy page
2. Complaints page
3. Proper content formatting

### Phase 4: Polish & Testing
1. Responsive testing across devices
2. Form validation and submission testing
3. Email delivery testing
4. Accessibility audit
5. Performance optimization
6. SEO optimization

### Phase 5: Deployment
1. Cloudflare configuration
2. DNS setup
3. SSL certificate
4. Final testing on production

## Legal & Compliance

### Required Elements (per Website Guide)
✅ Footer legal text (mandatory)
✅ Privacy Policy page (mandatory)
✅ Complaints Handling page (mandatory)
✅ Credit Representative Number displayed
✅ Australian Credit Licence information
✅ Disclaimer about financial advice

### Data Handling
- Form data collection with consent
- Privacy-compliant email storage
- No cookies except essential (or cookie banner if tracking added)

## Notes for Development

1. **Email Configuration:** Ensure email plugin is properly configured with SMTP settings or service (e.g., Resend, SendGrid)

2. **Environment Variables:** Set up for:
  - Email credentials
  - Recipient email addresses
  - Site URL for canonical links

3. **Content Management:** Currently hard-coded. Consider headless CMS integration for future updates if needed.

4. **Analytics:** Add Google Analytics or similar if required (with cookie consent).

5. **Forms:** Consider adding file upload capability for supporting documents in future iterations.

6. **LinkedIn Integration:** Links to profiles are manual. Could enhance with LinkedIn API for dynamic profiles (future enhancement).

7. **Testing:** Test form submissions thoroughly, including error scenarios and email delivery.

## Launch Checklist

- [ ] All content reviewed and approved
- [ ] Legal text verified with Viking Asset Aggregation
- [ ] Email delivery tested
- [ ] Mobile responsiveness verified
- [ ] Accessibility tested
- [ ] Performance optimized
- [ ] SEO meta tags configured
- [ ] SSL certificate active
- [ ] DNS properly configured
- [ ] 404 page created
- [ ] Favicon added
- [ ] Social media preview images set
- [ ] Google Search Console configured
- [ ] Analytics tracking (if applicable)

## Future Enhancements (Post-Launch)

1. Blog/resources section
2. Finance calculator tools
3. Customer testimonials
4. Case studies
5. FAQ section
6. Live chat integration
7. Loan application portal
8. Multi-language support
9. Video content/testimonials
10. Partner/lender logos section