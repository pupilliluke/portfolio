// Mobile Help Desk Project Template Data
export const FusionHelpDeskTemplate = {
  overview: "A comprehensive help desk ticketing system built with React and Node.js, designed to streamline customer support requests and improve response times. The system features user authentication, real-time chat support, and advanced ticket management capabilities.",
  
  keyFeatures: [
    "Real-time Ticket Updates - Instant notifications for ticket status changes and new messages",
    "Advanced Search and Filtering - Powerful search capabilities to quickly find tickets by various criteria",
    "User Authentication - Secure login and user management with role-based access control through company's microsoft azure account",
    "Excel Reports - All ticket data exportable into excel sheet for easy, portable analysis"
  ],
  
  challenges: [
    "Spring Security - Implementing robust security measures to protect user data and prevent unauthorized access",
    "Role Based Access - Implementing different functionality depending on a user's role within the organization (Admin, User)",
    "Complex Filtering Logic - Implementing multi-dimensional filtering system with user, item, and search capabilities",
    "Cross-platform UI Consistency - Maintaining consistent user experience across iOS, Android, and web platforms"
  ],
  
  solutions: [
    "Implemented Spring Security auth chain, including OAuth2 for secure front-end and API access",
    "Developed sophisticated filtering architecture using spring JPA and Hibernate with criteria queries",
    "Communication with company executives to gather requirements and ensure alignment with help desk goals",
    "Implemented comprehensive logging and monitoring using @SL4J for extensive user history"
  ],
  
  technicalDetails: {
    architecture: "Spring Boot on Java 21, complete MVC with RESTful API and standard .jsp frontend with minimal frameworks",
    database: "SQL Schema on SQL Server Management Studio",
    deployment: "Microsoft Azure Hosting and Database Deployment",
    testing: "Comprehensive JUnit testing with @Mockito for testing while in production. Analysis configured with Jacoco & SonarQube"
  },
  
  learnings: [
    "Spring Boot Mastery - Gained deep understanding of Spring Boot framework and its ecosystem",
    "Real-time Database Management - Gained experience with Azure integration",
    "Full SDLC - Gained experience in all phases of software development lifecycle from requirements gathering with executives, to demonstrations, to deployment",
    "Documentation & Logging - Experience in 'federal government grade' application logging, documentation, security, and compliance"
  ],
  
  futureImprovements: [
    "Mobile App - Develop a mobile application for on-the-go ticket management and support",
    "Analytics - Implement advanced analytics features to track ticket trends and user behavior",
    "Increased Dashboard Visuals - Create reporting and analytics features for trends and insights"
  ],
  
  metrics: {
    duration: "6 months",
    teamSize: "3 developers",
    linesOfCode: "~8,000 lines",
    userBase: "Fusion Technology LLC Staff"
  }
};