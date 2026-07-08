// Fusion Help Desk Ticketing Application (FHDTA) — Project Detail Template Data
export const FusionHelpDeskTemplate = {
  overview: "Fusion Help Desk Ticketing Application (FHDTA v1.1.0) is a full-stack, enterprise-grade internal IT support platform built as a Java 21 / Spring Boot 3.3 web application, packaged as a WAR on Tomcat and deployed to Microsoft Azure App Service. Employees sign in through corporate Microsoft/Azure single sign-on to submit and track IT support tickets, browse a searchable FAQ knowledge base, and monitor their own requests. Administrators get a command center to triage, work, resolve, reopen, and report on every ticket in the system. It is not a toy CRUD app — it's a real, multi-developer product with delegated authentication, role-based authorization, cloud deployment, telemetry, automated testing, and code-quality gating, built and shipped by a 12-person team over roughly 19 months and 358 commits.",

  keyFeatures: [
    "Role-Based Dual Experience - An Auth Director inspects Azure AD roles at login and routes users to entirely different employee or administrator dashboards",
    "Full Ticket Lifecycle - Tickets flow through an Open → Working → Closed state machine (with reopen), numeric priority, and a lightweight audit trail stamping lastModified and the acting admin on every mutation",
    "Enterprise SSO via Azure AD / Entra ID - OAuth2 + OpenID Connect with no passwords ever stored by the app; a custom GrantedAuthoritiesMapper translates Azure role claims into Spring Security ROLE_* authorities",
    "Server-Side Pagination Done Right - Ticket tables speak the jQuery DataTables server-side protocol (draw/start/length → Spring Pageable), returning one page from the database so the UI scales to large ticket volumes",
    "Automated Excel Reporting - Apache POI populates a pre-designed 4-sheet workbook (Overview, Created, Closed, Total Open) with dynamic month headers, cell styling, and a streamed download",
    "Admin Reports & Analytics - Live operational widgets plus month-by-month aggregate metrics (counts by date, week, month, priority, and status)",
    "FAQ Knowledge Base - Searchable, category-organized self-service help with full admin CRUD control"
  ],

  challenges: [
    "Bridging Azure-managed identity into Spring Security so declarative @PreAuthorize('hasRole(Admin)') checks work against roles issued by Entra ID",
    "Preventing Insecure Direct Object Reference (IDOR) so non-admin users cannot read tickets they don't own",
    "Scaling the tickets table to large volumes without loading every row into memory",
    "Supporting sparse admin edits from a rich modal without wiping unrelated fields",
    "Generating a polished, professionally formatted multi-sheet Excel report without leaking file/stream resources"
  ],

  solutions: [
    "Wrote a custom GrantedAuthoritiesMapper bean that reads the OIDC roles claim and maps each to a ROLE_* authority, enabling method-level security across every admin endpoint",
    "Added object-level ownership checks in getTicketById that return 403 FORBIDDEN and log an 'Unauthorized ticket access attempt' for non-owners — defense in depth alongside URL- and method-level rules",
    "Translated DataTables parameters into Spring Pageable requests and returned a generic DataTableResponseDTO so only a single page is queried; exposed dual GET/POST mappings to handle long DataTables query strings",
    "Implemented partial updates via null-checks in the service layer using a dedicated TicketUpdateDTO, so the admin modal can send only changed fields",
    "Built a dedicated TicketMetricExportService using Apache POI that loads an .xlsx template from the classpath, rewrites dynamic month headers, streams a ByteArrayResource, and closes streams in a finally block",
    "Consolidated all authenticated-user logic into a UserContextService that extracts identity from the OIDC token and lazily provisions users on first login (getOrCreateUser)"
  ],

  technicalDetails: {
    architecture: "Classic cleanly-layered Spring MVC — thin controllers (Home, Ticket, Faq, About, CustomError) delegate to services (Ticket, Faq, UserContext, MetricExport) over Spring Data JPA repositories. DTOs separate the wire format from persistence; open-in-view is disabled and Jackson annotations break the bidirectional Ticket↔User serialization cycle.",
    database: "Microsoft SQL Server on Azure SQL via Hibernate/JPA. Three entities (Tickets ~30 fields, Users, FAQS) with Lombok; schema managed by Hibernate ddl-auto with hand-authored SQL scripts checked in for reference.",
    deployment: "Packaged as a deployable WAR on Tomcat and hosted on Microsoft Azure App Service with Azure SQL, plus an Azure Application Insights agent at 100% sampling and structured file + console logging.",
    testing: "JUnit 5 + Mockito, ~76 test methods across 7 classes (~1,640 lines). Repository tests run on in-memory H2; service tests mock persistence and stand up a realistic OIDC SecurityContext. JaCoCo coverage in the Maven verify phase feeds a SonarQube quality gate."
  },

  learnings: [
    "Enterprise Identity Integration - Delegating auth entirely to Azure AD / Entra ID and mapping OIDC role claims into Spring Security method and object security",
    "Security in Depth - Layering URL-, method-, and object-level authorization, and treating IDOR and audit logging as first-class concerns",
    "Cloud-Native Delivery - Deploying and observing a WAR on Azure App Service with SQL and Application Insights telemetry",
    "Real Team Process - Shipping through a Jira-tracked (FHDTA-###), Bitbucket pull-request workflow with feature/bugfix/hotfix branching and SonarQube + JaCoCo quality gates",
    "End-to-End Ownership - Owning a feature from a rich JPA data model through business services to server-rendered UI and a polished Apache POI reporting engine"
  ],

  futureImprovements: [
    "Secrets Hardening - Move committed credentials to environment variables / Azure Key Vault and rotate the exposed Azure client secret, Sonar token, and App Insights key",
    "CSRF Protection - Re-enable and properly scope CSRF handling (currently disabled globally) as a known follow-up",
    "Richer Analytics - Expand the reports page with trend charts and dashboards on top of the existing aggregate endpoints",
    "Notification Automation - Deepen email/notification workflows around ticket state changes"
  ],

  metrics: {
    duration: "~19 months (Sept 2024 – April 2026)",
    teamSize: "12 contributors",
    linesOfCode: "~9,000+ lines",
    userBase: "Fusion Technology LLC staff"
  }
};
