export const portfolioData = {
    personal: {
        name: "Sanith A",
        title: "Senior Software Engineer",
        subtitle: "Programmer",
        greeting: "👋 Hello, I'm",
        description: "Passionate Developer with 14+ years of extensive experience in Backend Development (70%) and Frontend Development (30%). Skilled in building scalable web applications, API development, and leading technical teams to deliver impactful solutions.",
        location: "Kozhikode, Kerala, India",
        phone: "+91 9746715222",
        email: "sanithaish@gmail.com"
    },

    stats: [
        { number: "14+", label: "Years Experience" },
        { number: "15+", label: "Major Projects" },
        { number: "70%", label: "Backend Focus" },
        { number: "30%", label: "Frontend Focus" }
    ],

    about: [
        "I'm a passionate developer with over 14 years of extensive experience in both backend and frontend development. My expertise lies in creating scalable, high-performance web applications using modern technologies.",
        "Throughout my career, I've worked across diverse domains including e-commerce, OTT platforms, social media, and big data analytics. I'm adept at leading technical teams, architecting robust systems, and delivering solutions that drive business value.",
        "Currently based in Kozhikode, Kerala, India, I'm eager to expand my expertise and master modern web application development while contributing to innovative projects."
    ],

    skills: [
        {
            category: "Front End",
            icon: "🎨",
            items: ["React JS", "Redux", "JavaScript", "CSS", "HTML", "JSON"]
        },
        {
            category: "Back End",
            icon: "⚙️",
            items: ["PHP", "Laravel", "Node JS", "MVC Architecture", "Micro Services", "API Development", "Backend Architecture", "Big Data Analytics"]
        },
        {
            category: "Databases",
            icon: "💾",
            items: ["MySQL", "MongoDB", "PostgreSQL", "BigQuery", "NoSQL", "ORM"]
        },
        {
            category: "Cloud Platforms",
            icon: "☁️",
            items: ["AWS EC2", "AWS Lambda", "AWS API Gateway", "AWS S3", "AWS RDS", "AWS SES & SNS", "Google Cloud Platform"]
        },
        {
            category: "Version Control",
            icon: "🔧",
            items: ["GitHub", "GitLab", "Bitbucket"]
        }
    ],

    experience: [
        {
            date: "Oct 2020 – Present",
            title: "Senior Software Engineer",
            company: "Confyans | Kozhikode",
            description: "Designed and maintained scalable backend systems and APIs. Implemented cloud-native solutions using AWS & Google Cloud. Mentored developers and drove technical decision-making."
        },
        {
            date: "May 2019 – Oct 2020",
            title: "Technical Architect",
            company: "SignOn | Kozhikode",
            description: "Architected performance-driven systems. Designed database architecture & integration for enterprise projects. Collaborated with cross-functional teams for optimized workflows."
        },
        {
            date: "Nov 2018 – May 2019",
            title: "Team Lead",
            company: "Hubspire | Ernakulam",
            description: "Directed development of web & mobile applications. Established technical strategies to align with business goals."
        },
        {
            date: "Jun 2016 – Nov 2018",
            title: "Team Lead",
            company: "Norjimm | Kozhikode",
            description: "Designed scalable architectures for client projects. Streamlined team processes to improve delivery efficiency."
        },
        {
            date: "Jun 2011 – May 2016",
            title: "Senior Developer",
            company: "Techwyse | Kochi",
            description: "Developed lead tracking and analytics systems. Delivered modular and performance-focused solutions."
        },
        {
            date: "Dec 2007 – Dec 2010",
            title: "IT Support",
            company: "Falcon | Sharjah",
            description: "Provided comprehensive IT support and technical assistance."
        },
        {
            date: "Dec 2006 – Nov 2007",
            title: "Tech Support",
            company: "Sutherland | Chennai",
            description: "Delivered technical support services and customer assistance."
        }
    ],

    education: {
        degree: "Bachelor of Science in Information Technology",
        institution: "University of Calicut",
        year: "2006",
        description: "Completed comprehensive coursework in computer science fundamentals, programming, database management, and software engineering principles."
    },

    projects: [
        {
            id: 1,
            name: "T8Notch",
            shortName: "T8N",
            description: "BigData Analytics & Delivery optimization platform designed to handle large-scale data processing and provide actionable insights.",
            technologies: ["Laravel", "PHP", "MongoDB", "BigQuery", "Node JS", "React JS"],
            role: "DB Design, Data Architect"
        },
        {
            id: 2,
            name: "Guru Club",
            shortName: "GC",
            description: "Comprehensive social media marketing tool enabling businesses to manage their social presence and engage with audiences effectively.",
            technologies: ["Laravel", "PHP", "MongoDB", "Node JS", "React JS"],
            role: "DB Design, Team Lead, Technical Architect"
        },
        {
            id: 3,
            name: "Pivott",
            shortName: "PVT",
            description: "Full-featured OTT platform for streaming video content with user management, content delivery, and analytics capabilities.",
            technologies: ["Laravel", "PHP", "MySQL", "Bootstrap4", "AWS", "Redis"],
            role: "DB Design, Team Lead, Technical Architect"
        },
        {
            id: 4,
            name: "Whosup",
            shortName: "WU",
            description: "Dating and social media platform creating real-life connections. A lifestyle and well-being community that leads to great friendships.",
            technologies: ["NodeJS", "MongoDB", "Laravel", "Loopback2", "Angular5", "AWS Lambda", "IBM Watson"],
            role: "DB Design, Team Lead, Technical Design"
        },
        {
            id: 5,
            name: "Elmach",
            shortName: "ELM",
            description: "Automation system for machine parts production process, streamlining manufacturing workflows and improving efficiency.",
            technologies: ["MySQL", "Laravel", "PHP", "Bootstrap4", "AWS", "Redis"],
            role: "DB Design, Team Lead, Technical Architect"
        },
        {
            id: 6,
            name: "ClubOxygen",
            shortName: "CO",
            description: "Lead & Member management system with capabilities for tracking leads from landing pages and managing member relationships.",
            technologies: ["MongoDB", "Laravel", "PHP", "Bootstrap4", "AWS", "Mongo Atlas"],
            role: "DB Design, Team Lead, Technical Architect"
        },
        {
            id: 7,
            name: "Aqqe",
            shortName: "AQ",
            description: "E-commerce shopping platform with comprehensive product management, cart functionality, and payment integration.",
            technologies: ["Laravel 5.5", "HMVC", "MySQL", "MongoDB", "AWS S3"],
            role: "DB Design, Team Lead"
        },
        {
            id: 8,
            name: "Yourdux",
            shortName: "YD",
            description: "Hotel hourly & daily booking system enabling flexible accommodation reservations with real-time availability.",
            technologies: ["Laravel 5.4", "HMVC", "REST APIs", "MySQL", "AWS"],
            role: "DB Design, Team Lead"
        },
        {
            id: 9,
            name: "Issufy (IPO)",
            shortName: "IPO",
            description: "Initial Public Offering management platform for handling IPO processes, investor management, and compliance.",
            technologies: ["Laravel 5.2", "HMVC", "PostgreSQL", "AWS S3"],
            role: "DB Design, Team Lead"
        },
        {
            id: 10,
            name: "The Food Basket",
            shortName: "TFB",
            description: "Online vegetable ordering platform with schedule recurring orders functionality for convenient grocery shopping.",
            technologies: ["Laravel 5.3", "HMVC", "REST APIs", "MySQL", "AWS"],
            role: "DB Design, Team Lead"
        },
        {
            id: 11,
            name: "Lead Tracking System (Adluge)",
            shortName: "ADL",
            description: "Comprehensive lead tracking and analytics system allowing businesses to monitor client trends, performance, meetings, and sales opportunities.",
            technologies: ["Yii Framework", "MySQL", "MongoDB", "REST API", "Google APIs"],
            role: "DB Design, Module Lead"
        }
    ]
};
