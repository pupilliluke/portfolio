const projects = [
    {
        
        title: "Flash Stats Website",
        date: "July 20, 2024",
        description: "A frontend platform providing information about Flash-Stats Co. Flash-Stats serves real-time statistics, interactive data visualizations, advanced analytics, and expert driven projections to the MLB. Built with modern web technologies to deliver seamless user experience across devices.",
        tags: ["React", "Typescript", "Tailwind", "Vercel", "Node.js", "Tailwind CSS"],
        type: "WEB",
        image: "/images/projects/fs.png",
        link: "https://flashstats.net"
    },
    {
        title: "Fusion Help Desk Ticketing System",
        date: "February 1, 2025",
        description: "Enterprise-grade IT ticketing system designed to serve the employees of Fusion Technology LLC with role-based access control, microsoft authentication, real-time analytics, extensive logging, architected scalable backend services and intuitive admin dashboard.",
        tags: ["Spring Boot", "Java", "Python", "Azure DB & Hosting", "HTML", "CSS"],
        type: "WEBAPP",
        image: "/images/projects/HelpDeskImage.jpg",
        link: "unauthorized"
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
        date: "July 1, 2025",
        description: "Real-time inventory management system with automated stock tracking. Implemented lightweight cloud-based architecture with Firebase integration. Currently serves 50+ users.",
        tags: ["TypeScript", "Node.js", "Firebase DB & Hosting", "React"],
        type: "WEBAPP",
        image: "/images/projects/crackingandstacking.png",
        link: "https://crackingandstacking.com"
    },
      {
        title: "Oliver Projections Website",
        date: "Current",
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
        date: "July 7, 2025",
        description: "Community gaming league platform with admin dashboard, tournament management, and real-time leaderboards. Features responsive design, and dynamic content updates. Currently serves 20+ users.",
        tags: ["React", "Node.js", "Vercel Hosting", "Firebase DB", "Tailwind CSS"],
        type: "WEBAPP",
        image: "/images/projects/rlbl.png",
        link: "https://rlbl-website.vercel.app/"
    },
    {
        title: "Rantr Social Media Webapp",
        date: "April 10, 2023",
        description: "Social media web application with real-time messaging, user-generated content, and interactive engagement features. Implemented secure authentication and scalable cloud infrastructure. Built to serve 100+ users concurrently.",
        tags: ["React", "Node.js", "Firebase DB & Hosting"],
        type: "WEBAPP",
        image: "/images/projects/rantr.png",
        link: "https://rantr-8c5dc.web.app/"
    },
    {
        title: "PICARD - Platform for Intelligent Computer Algorithm Research and Development",
        date: "December 20, 2024",
        description: "Research platform for algorithm development featuring containerized deployment and self-regulating backend optimization with apache spark and hadoop. Built with enterprise-grade scalability and performance considerations. Created to serve WVU machine learning researchers to input and test algorithms on extremely large datasets.",
        tags: ["C#", ".NET", "Docker", "Spark", "Hadoop", "Vite", "MySQL"],
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
