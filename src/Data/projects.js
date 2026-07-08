const projects = [
    {
        title: "Fusion Help Desk Ticketing Application",
        date: "Sept 2024 – April 2026",
        description: "Enterprise-grade internal IT support platform (FHDTA v1.1.0) built with Java 21 and Spring Boot 3.3, secured behind Microsoft Azure AD (Entra ID) OAuth2/OpenID Connect single sign-on. Delivers role-based employee and admin dashboards, full ticket lifecycle management (Open → Working → Closed → Reopen), IDOR-proof object-level authorization, and an Apache POI reporting engine that generates multi-sheet Excel workbooks. Deployed on Azure App Service with Azure SQL and Application Insights telemetry. Shipped by a 12-person team over 19 months (358 commits) with JUnit 5 / Mockito tests, JaCoCo coverage, and SonarQube quality gates.",
        tags: ["Java 21", "Spring Boot 3", "Spring Security", "Azure AD / OAuth2", "Azure SQL", "Hibernate / JPA", "Apache POI", "JSP", "JUnit 5", "SonarQube"],
        type: "WEBAPP",
        image: "/images/projects/HelpDeskImage.jpg",
        link: "unauthorized"
    },
    {
        title: "PSS Portal - Enterprise Lead Generation CRM",
        date: "2026",
        description: "Multi-tenant CRM platform with lead management, Google Sheets import, and Stripe pay-per-service billing. Features JWT authentication with refresh tokens, activity logging, file attachments, and a React 19 frontend with Vite and Tailwind CSS 4. Backend built with ASP.NET Core 8 and PostgreSQL deployed on Render.",
        tags: ["C#", "TypeScript", "React", "ASP.NET Core", "PostgreSQL", "Stripe", "Tailwind CSS"],
        type: "WEBAPP",
        image: "/images/projects/pss-portal/dashboard.png",
        link: "unauthorized"
    },
    {
        title: "MyEHP - Employee Health Benefits Platform",
        date: "2025",
        description: "SEO-optimized company information website for a pre-tax employee health benefits provider. Features responsive design, EmailJS contact form integration for client inquiries, and clear presentation of services helping businesses save up to 30% on employee health benefits.",
        tags: ["React", "Next.js", "Vercel", "Tailwind CSS", "Node.js"],
        type: "WEBAPP",
        image: "/images/projects/myehp.png",
        link: "https://my-ehp.vercel.app/"
    },
    {

        title: "Flash Stats - Baseball Scouting Research Platform",
        date: "January 2025",
        description: "Leading SDLC for scouting research platform using client/server architecture to replace current system serving active MLB clientele (NY Yankees, Pirates, more). Creator of public facing site. REST API & B2B Software platform built with Python, JavaScript, React, and SQL to serve professional baseball teams with critical scouting data.",
        tags: ["Python", "JavaScript", "React", "SQL", "REST API", "Jira", "Teams"],
        type: "WEB",
        image: "/images/projects/fs.png",
        link: "https://www.FlashStats.net"
    },
    {
        title: "PLNTD SIPS",
        date: "August 1, 2025",
        description: "Front-end platform for a client's small business. Features product listings, instagram integration, and responsive design. ",
        tags: ["React", "Node.js", "Vercel", "Tailwind CSS"],
        type: "WEB",
        image: "/images/projects/ps.png",
        link: "https://plntdsips.com",
    },
    {
        title: "Warehouse Inventory Management System",
        date: "June 2025 & 2026",
        description: "Real-time inventory management system with automated stock tracking. Implemented lightweight cloud-based architecture with Firebase integration. Currently serves 50+ users.",
        tags: ["TypeScript", "Node.js", "Firebase DB & Hosting", "React"],
        type: "WEBAPP",
        image: "/images/projects/crackingandstacking.png",
        gallery: [
            "/images/projects/crackingandstacking.png",
            "/images/projects/crackingandstacking1.png",
            "/images/projects/crackingandstacking2.png",
            "/images/projects/crackingandstacking3.png",
            "/images/projects/crackingandstacking4.png"
        ],
        link: "https://crackingandstacking.com"
    },
      {
        title: "Oliver Projections Website",
        date: "In Development",
        description: "An encyclopedia for statistics and portal for expert analysis and projections covering all leagues and ages in the baseball world. Created to serve 1000's of users, clients, and subscribers with real-time data and insights. The site will feature advanced search capabilities with RESTful API connected to a robust database of baseball players in every league and age group.",
        tags: ["Javascript", "Python", "SQL", "React", "HTML", "CSS", "AWS", ],
        type: "WEBAPP",
        image: "/images/projects/OP.png",
        link: "https://youtu.be/Uhk2b_zTPXI"
    },
        {
        title: "Collins Signatures",
        date: "1 day",
        description: "Interactive 3D baseball signature design studio with real-time customization and visualization. Features Three.js 3D rendering, texture and video export capabilities, project management gallery, and responsive design. Built with modern web technologies to provide a specialized creative tool for baseball signature design.",
        tags: ["React", "Three.js", "Tailwind CSS", "Firebase", "Vite", "Zustand"],
        type: "WEBAPP",
        image: "/images/projects/collins-signatures-thumbnail.png",
        video: "https://www.youtube.com/embed/YVJii0ypxs0",
        link: "https://baseball-sigs.web.app/"
    },
    {
        title: "Rocket League Beer League Site",
        date: "2025-2026",
        description: "Community gaming league platform with admin dashboard, tournament management, and real-time leaderboards. Features responsive design, and dynamic content updates. Currently serves 20+ users.",
        tags: ["React", "Node.js", "Vercel Hosting", "Firebase DB", "Tailwind CSS"],
        type: "WEBAPP",
        image: "/images/projects/rlbl.png",
        gallery: [
            "/images/projects/rlbl.png",
            "/images/projects/rlbl2.png",
            "/images/projects/rlbl3.png",
            "/images/projects/rlbl4.png"
        ],
        link: "https://rlbl-website.vercel.app/"
    },
    {
        title: "Rantr Social Media Webapp",
        date: "April 10, 2023",
        description: "My very first team project and first deployed app, built as a sophomore in college. Social media web application with real-time messaging, user-generated content, and interactive engagement features. Implemented secure authentication and scalable cloud infrastructure. Built to serve 100+ users concurrently.",
        tags: ["React", "Node.js", "Firebase DB & Hosting"],
        type: "WEBAPP",
        image: "/images/projects/rantr.png",
        link: "https://rantr-8c5dc.web.app/"
    },
    {
        title: "PICARD - Platform for Intelligent Computer Algorithm Research & Design",
        date: "2024",
        description: "Built a secure platform for ML researchers (Dr. Devine, WVU) to automate tests on 1M+ entry datasets. Used for finding images containing pulsars out of millions of radio telescope images (low false negative tolerance). Reduced turnaround time by 70-95%; decreased processor needs from ~20 to 1 via Hadoop cluster.",
        tags: ["C#", ".NET Core", "Linux", "Apache Spark", "Hadoop", "Docker", "SQL", "Google OAuth2.0"],
        type: "WEBAPP",
        image: "/images/projects/picard.png",
        link: "unauthorized"
    },
    // {
    //     title: "Champyinz Website",
    //     date: "January 1, 2024",
    //     description: "A website for a community-driven platform for sharing and discussing various topics.",
    //     tags: ["React", "Node.js", "Express", "MongoDB"],
    //     type: "WEBAPP",
    //     image: "/images/projects/champyinz.png",
    //     link: ""
    // },
    {
        title:"VR Class Lessons Demo",
        date: "November 23, 2023",
        description: "Immersive VR educational application developed for academic simulations, featuring 3D environment modeling, and class-specific interactive simulations through Oculus VR headset. Demonstrates expertise in Unity 3D development and C# programming.",
        tags: ["Unity 3D", "C#", "Oculus"],
        type: "Virtual Reality Unity3D App",
        image: "/images/projects/vr.png",
        link: "https://youtube.com/shorts/ckcaBy53GvA?feature=share"
    },
    {
        title: "FitTrackr fitness app",
        date: "October 10, 2023",
        description: "Mobile fitness tracking application. Developed using Spring Boot architecture with MySQL database integration. Allows users to create and manage fitness plans, track workouts, and monitor progress. Demonstrates expertise in backend development and user experience design.",
        tags: ["Spring Boot", "Java", "MySQL"],
        type: "WEBAPP",
        image: "/images/projects/ft.png",
        link: "n/a"
    },
    {
        title: "Linux Operating System",
        date: "April 5, 2024",
        description: "Custom Linux distribution developed from kernel-level programming, featuring system calls, memory management, and process scheduling. Demonstrates low-level programming expertise and systems architecture knowledge.",
        tags: ["C", "Assembly", "Linux"],
        type: "OS",
        image: "/images/projects/osImage.png",
        link: "n/a"
    },
    {
        title: "Compiler CS410",
        date: "December 15, 2024",
        description: "A 3-tier compiler implementation built in Java, featuring complete lexical analysis, parsing, semantic analysis, and code generation phases for academic coursework.",
        tags: ["Java", "Compiler Design", "Language Parsing", "Lexical Analysis", "Code Generation"],
        type: "COMPILER",
        image: "/images/projects/compiler.png",
        link: "https://youtu.be/WqTmFLIZOLU"
    },
    {
        title: "Full Stack User Management System",
        date: "December 1, 2024",
        description: "Enterprise user management system with role-based access control, OAuth2.0 authentication, and AWS cloud deployment. Features secure API endpoints and comprehensive admin functionality.",
        tags: ["Java", "Spring Boot", "MySQL", "AWS", "React", "OAuth2.0"],
        type: "WEBAPP",
        image: "/images/projects/fusionSpring.png",
        link: "n/a"
    }
];

export default projects;
