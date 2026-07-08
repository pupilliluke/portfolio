// Full Stack User Management System — Project Template Data
// Sourced from the "Two front-ends, one Java & React stack" case study
export const fullStackUserTemplate = {
  overview: "A full-stack user management platform built during a software engineering internship at Fusion Technology: a Spring Boot backend that handles authentication and user management, consumed by two distinct front-ends from one shared API — a traditional server-rendered JSP application and a standalone React single-page client. The Spring Boot service is the single source of truth: it renders its own JSP views directly and also exposes a CORS-enabled JSON API that the separate React SPA calls over HTTP, so the same MySQL-backed service authenticates a user whether they arrive through the JSP app or the React client.",

  keyFeatures: [
    "Dual authentication - custom email/password form login and Google OAuth2 sign-in, both integrated through Spring Security.",
    "User registration with first-login detection and last-login tracking, plus in-memory active-session tracking that drives dynamic login/logout UI state.",
    "Admin console - view all users, promote to administrator, and delete accounts, rendered live via AJAX against JSON endpoints.",
    "Two front-ends, one backend - a server-rendered JSP/JSTL application and a decoupled React 18 SPA both consume the same Spring service and MySQL database.",
    "End-to-end React login flow - form → POST to Spring /Login → route to an authenticated view with the returned user record, with graceful error and loading states.",
    "Responsive React UI built with reactstrap/Bootstrap 5 — navbar, dropdowns, a 13-image carousel, and a contact panel with inline-SVG social icons."
  ],

  challenges: [
    "Serving two very different front-end paradigms — server-side rendering and a modern SPA — from a single backend without duplicating logic.",
    "Integrating third-party identity (Google OAuth2) alongside a custom form-login flow within Spring Security.",
    "Letting a separate React client (on a different origin) authenticate against the same service, which required a clean JSON contract and CORS.",
    "Keeping the data layer safe and maintainable with raw JDBC rather than a full ORM."
  ],

  solutions: [
    "Made the Spring Boot service the single source of truth: it serves JSP views directly and exposes a CORS-enabled JSON login endpoint that the React client calls over HTTP.",
    "Implemented clean four-tier separation (Controller → Service → DAO → Database) with interfaces at the service and DAO boundaries and a generic BasicDAO<T> CRUD contract for the User entity.",
    "Used parameterized SQL / prepared statements throughout the JDBC layer to guard against injection, backed by a custom-authored Users table schema (DDL).",
    "Centralised all backend calls in one React API module with input validation and normalised status/response handling, so the SPA and JSP app share one contract."
  ],

  technicalDetails: {
    architecture: "Four-tier layered Spring MVC application (Controller → Service → DAO → Database), WAR-packaged for Tomcat. It renders JSP/JSTL views and exposes 12+ HTTP endpoints; a standalone React 18 SPA (createRoot, StrictMode, React Router v6) consumes the JSON API over HTTP from :3000.",
    database: "MySQL 8 (schema dev_proj_1) with a custom SQL DDL for the Users table. Access is through a JDBC layer using parameterized prepared statements and a generic BasicDAO<T> CRUD contract implemented for the User entity.",
    deployment: "Maven build packaged as a WAR and deployed to Apache Tomcat; the React client runs via Create React App. Real team workflow — feature branches merged through Bitbucket pull requests (REST-controller conversion, Tomcat deployment, log4j2, OAuth antMatchers).",
    testing: "Client-side input validation and normalised status/response handling in the React API module, with graceful error and loading states surfaced to the user; server-side security enforced through Spring Security, OAuth2, and session tracking."
  },

  learnings: [
    "Full-stack range - working comfortably across the JVM backend, SQL persistence, and two front-end paradigms (server-rendered and SPA) against a single shared API.",
    "Real-world integrations - wiring up third-party identity (Google OAuth2), Spring Security, CORS, and a JSON contract consumed by an independent client.",
    "Sound fundamentals - layered architecture, interfaces at boundaries, parameterized queries, and a team Git/PR workflow — plus the judgment to critique the gaps honestly."
  ],

  futureImprovements: [
    "Password hashing - replace plaintext credential comparison with BCrypt via a Spring Security PasswordEncoder and a proper UserDetailsService.",
    "Secrets management - move DB and OAuth credentials out of committed config into environment variables or a secrets manager, and rotate them.",
    "Connection pooling - move raw DriverManager connections to a pooled DataSource (HikariCP) with disciplined try-with-resources cleanup.",
    "Constructor dependency injection over manual instantiation, controlled React components with persisted auth (token + guarded routes), and lifting Spring Boot 2.3 (EOL) to a supported release."
  ],

  metrics: {
    duration: "Internship @ Fusion Technology",
    teamSize: "Team project (Bitbucket PR workflow)",
    linesOfCode: "2 apps · 4-tier backend · 12+ endpoints",
    userBase: "Enterprise user & admin management"
  }
};
