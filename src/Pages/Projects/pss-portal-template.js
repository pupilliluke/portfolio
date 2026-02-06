// PSS Portal - Enterprise Lead Generation CRM Template Data
export const pssPortalTemplate = {
  overview: "A multi-tenant enterprise CRM platform designed for lead generation and client management. Built with a modern tech stack featuring ASP.NET Core 8 backend and React 19 frontend, the platform provides comprehensive lead management, Google Sheets integration for bulk imports, and Stripe-powered pay-per-service billing. The system supports multiple organizations with isolated data, JWT authentication with refresh tokens, and real-time activity logging.",

  keyFeatures: [
    "Multi-tenant Architecture - Secure organization isolation with role-based access control for owners, admins, and users",
    "Lead Management CRM - Full CRUD operations with status tracking (New, Contacted, Qualified, Converted, Lost) and source attribution",
    "Google Sheets Integration - OAuth2-powered import system with preview, column mapping, and batch history tracking",
    "Stripe Billing Integration - Pay-per-service model with checkout sessions, customer portal, subscription management, and webhook handling",
    "Activity Logging - Comprehensive audit trail tracking all user actions across the platform",
    "File Attachments - Secure file upload and management with attachment linking to entities"
  ],

  challenges: [
    "Multi-tenant Data Isolation - Ensuring complete data separation between organizations while maintaining query performance",
    "OAuth2 Token Management - Implementing secure Google OAuth flow with token refresh and revocation handling",
    "Stripe Webhook Reliability - Handling asynchronous payment events with idempotency and failure recovery",
    "JWT Security - Implementing secure token refresh flow to maintain sessions without compromising security"
  ],

  solutions: [
    "Implemented organization-scoped queries using EF Core global filters and middleware-injected tenant context",
    "Built token storage with encryption at rest and automatic refresh before expiration using background services",
    "Created idempotent webhook handlers with event deduplication and retry logic for failed processing",
    "Designed dual-token system with short-lived access tokens (30 min) and secure refresh tokens (7 days) with rotation"
  ],

  technicalDetails: {
    architecture: "Clean Architecture with ASP.NET Core 8 Web API, Domain/Application/Infrastructure layers, React 19 SPA with Vite 7",
    database: "PostgreSQL with Entity Framework Core, migrations, and JSONB for flexible data storage",
    deployment: "Render Web Services for API, Render PostgreSQL for database, with automatic deployments from GitHub",
    testing: "Backend unit tests with xUnit, frontend testing with Vitest and React Testing Library, API testing with Swagger"
  },

  learnings: [
    "Clean Architecture Patterns - Deep understanding of separation of concerns and dependency inversion in .NET applications",
    "Stripe Integration - Comprehensive knowledge of payment processing, subscription management, and webhook handling",
    "Multi-tenant SaaS Design - Experience designing systems that scale across multiple isolated customer environments",
    "Modern React Patterns - Mastery of React 19 features, TanStack Query for server state, and Zustand for client state"
  ],

  futureImprovements: [
    "Social Media Inbox - Integration with Meta Business API for Facebook, Instagram, and WhatsApp messaging",
    "Email Campaigns - SendGrid integration with templates, tracking, and automated sequences",
    "Workflow Automation - Event-based triggers and automated actions for lead nurturing",
    "Advanced Analytics - Pipeline reporting, conversion tracking, and revenue forecasting dashboards"
  ],

  metrics: {
    duration: "3+ months",
    teamSize: "Solo project",
    linesOfCode: "~15,000+ lines",
    userBase: "Beta testing"
  }
};
