// Juice Shop Business Site Template Data
export const juiceShopTemplate = {
  overview: "A modern, responsive website built with React for a local juice and smoothie business. The site serves as a digital point of contact for customers to explore the product menu, learn about the brand, and inquire about services. While not a full e-commerce site, it offers an engaging user interface and clear navigation to support in-person or phone-based ordering.",

  keyFeatures: [
    "Product Menu Display - Dynamic and categorized menu showcasing juices, with descriptions and ingredients",
    "Contact & Inquiry - Embedded contact form, location map, and business hours to facilitate customer communication",
    "Responsive Design - Mobile-first layout for seamless browsing on phones, tablets, and desktops",
    "Brand Storytelling - Sections dedicated to the business mission, values, and customer experience focus"
  ],

  challenges: [
    "Content Organization - Structuring the site to highlight the product offerings without overwhelming the user",
    "Mobile Optimization - Ensuring a clean and intuitive design on small screens where most users browse",
    "Engagement Without Checkout - Encouraging conversions through contact or in-person visits instead of online sales"
  ],

  solutions: [
    "Designed a clean, card-based product grid with hover effects for better user interaction",
    "Used Tailwind CSS and React responsive hooks to ensure layout consistency across devices",
    "Implemented a contact-first call to action strategy with easily accessible communication tools"
  ],

  technicalDetails: {
    architecture: "React single-page application with modular components and React Router for navigation",
    database: "Static product data managed via JSON or CMS integration; no persistent backend required",
    deployment: "Hosted via static site provider (e.g. Vercel or Netlify) with CDN for asset delivery",
    testing: "Small user testing for usability and responsiveness, with focus on mobile interactions"
  },

  learnings: [
    "Small Business UX - Designing for businesses that rely on local foot traffic and contact-driven engagement",
    "React Component Design - Built reusable UI blocks for products, contact forms, and layout sections",
    "Responsive Strategy - Gained experience in optimizing layout and interaction for all device types"
  ],

  futureImprovements: [
    "Order Inquiry System - Add form with pre-selected items to facilitate pickup orders",
    "CMS Integration - Enable non-technical staff to update product offerings and announcements",
    "SEO Enhancements - Improve local discoverability through structured data and metadata optimization"
  ],

  metrics: {
    duration: "1 week",
    teamSize: "Solo project",
    linesOfCode: "~1,000 lines",
    userBase: "Local juice customers, clients, and b2b partners browsing on mobile or desktop"
  }
};
