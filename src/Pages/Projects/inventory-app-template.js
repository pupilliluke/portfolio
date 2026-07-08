// Warehousing (Phantom Warehouse) Project Template Data
export const inventoryAppTemplate = {
  overview: "Warehousing is a production, cross-platform (iOS / Android / web) real-time inventory and logistics app built from a single React Native + Expo codebase and shipped to the App Store (ASC App ID 6785360339). Purpose-built for a warehouse crew that moves real product (originally a multi-location fireworks retailer), it replaces spreadsheets with one live source of truth: live inventory across showroom and warehouse, a separate container staging model (C1–C4) with per-container rollups, shareable pull lists, truck/load tracking, to-dos with assignees, and full accountability via an append-only audit log surfaced as a live activity feed and a 7-day analytics dashboard. It pairs a two-layer auth architecture (Clerk identity + Firebase database access), role-based access control with a live approval workflow, and multi-device sync — carried end-to-end from product to architecture to App Store review by a single developer.",

  keyFeatures: [
    "Live Inventory + Container Staging - Real-time stock across showroom and warehouse plus a separate C1–C4 container model with per-container rollups, all synced across every device.",
    "Pull Lists - Build a pick list, share it, and check items off; pulling depletes stock and remembers how much was pulled so an un-check restores it exactly.",
    "Full Accountability - Every mutation writes to an append-only audit log, surfaced as a live activity feed plus a 7-day analytics dashboard (units in/out/net, active items, per-user leaderboard).",
    "Team Management + Approval Workflow - Admins approve new members off a waitlist, grant/revoke roles, and rename users; all role and approval changes propagate live with no re-login.",
    "Cross-platform From One Codebase - iOS, Android, and web ship from a single Expo SDK 53 / React Native 0.79 codebase with the New Architecture enabled, forking only where the platforms genuinely differ."
  ],

  challenges: [
    "Two-layer identity - Clerk owns verified user identity (OAuth Google/Apple, sessions) while Firebase Anonymous Auth owns database access; bridging them into one stable operator identity across renames was the core design problem.",
    "Platform divergence in OAuth - The native in-app redirect flow created accounts but didn't reliably persist the web session (a COOP / cross-origin session-handshake issue).",
    "No Clerk Expo token cache - Clerk's Core 2 Expo package ships without a token cache, and corrupt keychain entries could wedge sign-in entirely.",
    "React context re-render trap - Client-side filtering across search + type + location + checked-state risked re-rendering every row on each keystroke.",
    "Client-side authorization - RBAC and approval gating currently live in the client atop permissive Firebase rules, coupling security to the app layer."
  ],

  solutions: [
    "Bridged Clerk → Firebase via AuthGate/userSync: the Clerk identity is synced into a Firebase users/{key} record keyed by sanitized email so it stays stable across renames, and handles the Sign-in-with-Apple 'name only on first auth' edge case.",
    "Deliberate platform fork: native uses Clerk's in-app browser OAuth; web uses Clerk's hosted Account Portal to sidestep the COOP session-handshake issue — diagnosed and documented inline.",
    "Hand-wrote a self-healing token cache (expo-secure-store on native, cookies/localStorage on web) that repairs corrupt keychain entries instead of wedging sign-in.",
    "Stabilized callback and context identities with useCallback/useMemo and a single memoized filter pass, so memoized rows don't re-render on every search keystroke.",
    "Guarded mutation layer: a TypeScript asserts guard makes 'no active user' unrepresentable, invariants are validated (can't move more stock than exists), and each write appends a sanitized audit entry; multi-item clears use one atomic update() batch."
  ],

  technicalDetails: {
    architecture: "Single Expo SDK 53 / React Native 0.79 codebase (New Architecture, React 19) targeting iOS/Android/web, with a two-layer auth split — Clerk for identity, Firebase Anonymous Auth for DB access — bridged through AuthGate → userSync. RBAC (admin.ts) with bootstrap + runtime-granted admins and a pending/approved waitlist workflow, all driven by live onValue subscriptions.",
    database: "Firebase Realtime Database with live onValue subscriptions, indexed nodes, and shape-validation rules. InventoryContext normalizes/coerces every record defensively on read and does client-side filtering in a single memoized pass. Analytics are event-log-derived: every mutation writes a human-readable OLD → NEW log line that analytics.ts parses via regex to reconstruct units in/out per user and item, windowed by 24h/7d/30d.",
    deployment: "EAS Build (dev/preview/prod profiles, auto-increment) for native; GitHub Actions → Firebase Hosting for web. Uses patch-package plus a custom Expo config plugin for a native build fix. Shipped through App Store review (ASC App ID 6785360339) with store listing, privacy policy, App Privacy answers, and a reviewer-account playbook all in-repo.",
    testing: "TypeScript 5.8 throughout with typed data models, asserts guards, and discriminated states that make invalid states unrepresentable. Input is sanitized (HTML-stripped, newline-collapsed, length-capped) before it reaches the audit log."
  },

  learnings: [
    "Designing a two-layer identity system (verified identity vs. database access) and bridging it into one stable operator across renames and OAuth provider quirks.",
    "Event-sourcing 'lite' — treating an append-only human-readable audit log as the single source of truth for both the activity feed and a derived analytics pipeline, and naming the tradeoff (log format becomes a schema contract).",
    "Knowing exactly where cross-platform code should diverge — OAuth flow, token persistence, and viewport handling — rather than pretending iOS, Android, and web are identical.",
    "Migration-safety instincts: grandfathering status-less records as approved so an auth/RBAC rollout never locks existing users out."
  ],

  futureImprovements: [
    "Move authorization server-side — Firebase custom claims via Clerk JWT, or Cloud Functions / rules keyed to verified identity — so RBAC and approval gating are enforced beyond the client.",
    "Emit a structured event alongside the human-readable log so the analytics pipeline is decoupled from a free-text format.",
    "Refresh the in-repo README, which predates the Clerk/RBAC rewrite and still describes the old hardcoded-password, Firebase-only flow (the code is the current source of truth)."
  ],

  metrics: {
    duration: "~12 months of iteration",
    teamSize: "Solo (product → architecture → App Store)",
    linesOfCode: "~12,300 lines of TypeScript, 46 modules, 88 commits",
    userBase: "Production warehouse crew — shipped to the App Store"
  }
};
