// All content below is sourced directly from Shubham Badhe's resume.
// Nothing here is invented.

export const profile = {
  name: "Shubham Madhav Badhe",
  role: "Software Developer",
  location: "Blossom Co-operative Society, Marol Maroshi, Mumbai - 400059",
  phone: "7755925935",
  email: "badheshubham197@gmail.com",
  linkedin: "https://www.linkedin.com/in/shubham-badhe-08010a192/",
  linkedinLabel: "linkedin.com/in/shubham-badhe-08010a192",
  objective:
    "Results-driven Software Developer with 2+ years of experience architecting and delivering scalable web applications using .NET Core, C#, ASP.NET MVC, and SQL Server. Proven track record building high-performance RESTful APIs and production-ready features across the full SDLC. Known for rapid ramp-up and shipping clean, maintainable code under deadline pressure.",
  resumeFile: "/Shubham_Badhe_Resume.docx",
  photo: "/profile.jpg",
};

export const skillGroups = [
  {
    label: "Languages",
    skills: ["C#", "JavaScript"],
  },
  {
    label: "Frameworks & Runtime",
    skills: [
      "ASP.NET MVC",
      "ASP.NET MVC5",
      ".NET Core",
      ".NET Core Web API",
      "Entity Framework",
      "Entity Framework Core",
      "ADO.NET",
    ],
  },
  {
    label: "Frontend & UI",
    skills: ["React JS", "Kendo UI", "Kendo jQuery", "JavaScript", "JSON"],
  },
  {
    label: "API & Architecture",
    skills: [
      "REST APIs",
      "Web API Design",
      "MVC Architecture",
      "JWT Authentication",
      "Error Handling",
      "Performance Tuning",
    ],
  },
  {
    label: "Database",
    skills: [
      "SQL Server 2019",
      "MySQL 8",
      "T-SQL Queries",
      "Stored Procedures",
      "Data Modeling",
    ],
  },
  {
    label: "Tools & DevOps",
    skills: ["Visual Studio 2022", "Docker", "Git"],
  },
  {
    label: "Practices",
    skills: [
      "SDLC",
      "Agile/Scrum",
      "Sprint Planning",
      "Unit Testing",
      "Code Reviews",
      "Debugging",
      "Code Optimization",
      "Clean Code",
    ],
  },
];

export const experience = [
  {
    role: "Software Developer",
    company: "EPCPROMAN Pvt. Ltd.",
    location: "Ghatkopar, Mumbai, India",
    start: "1 August 2024",
    end: "Present",
    bullets: [
      "Architected and delivered scalable web applications using ASP.NET Core, MVC, Entity Framework, and ADO.NET",
      "Engineered and integrated RESTful APIs with robust error handling and performance tuning to improve reliability",
      "Built interactive, responsive UI components using Kendo UI and JavaScript to streamline user workflows",
      "Designed SQL Server 2019 queries, stored procedures, and data models to support efficient data operations",
      "Collaborated closely with QA and DevOps teams to ensure smooth, reliable deployments",
      "Championed clean-code practices through code reviews and active participation in sprint planning",
    ],
  },
];

export const projects = [
  {
    slug: "spoolman",
    name: "PGOLD: SPOOLMAN",
    subtitle: "Spool Management System",
    description:
      "Engineered an end-to-end Piping Shop Fabrication and Erection Management platform covering activity-level construction planning, resource allocation (manpower, machines, materials), welding and NDT tracking, pressure testing, quality inspections, painting, laydown area management, and logistics planning. Delivered real-time progress tracking and dashboard analytics to support on-time milestone compliance.",
    stack: [
      ".NET Core",
      "C#",
      "Kendo jQuery",
      "MS SQL Server 2019",
      "Visual Studio 2022",
    ],
    features: [
      "Activity-level construction planning",
      "Resource allocation across manpower, machines, and materials",
      "Welding and NDT tracking",
      "Pressure testing & quality inspections",
      "Painting and laydown area management",
      "Logistics planning",
      "Real-time progress tracking and dashboard analytics",
    ],
    highlights: [
      "Analyzed requirements and delivered scalable, unit-tested, reusable features",
      "Owned bug fixing, code optimization, and adherence to company coding standards",
    ],
    github: null,
    demo: null,
  },
  {
    slug: "touropia",
    name: "Touropia",
    subtitle: "B2C Tour Booking Platform",
    description:
      "Built a B2C web application for a group tour operator managing international, domestic, and event-based tours. Enabled users to browse and search tours by category, view detailed itineraries, pricing, and departure dates, and book tours by adding passengers. Designed a fully database-driven architecture for flexibility and ease of maintenance, with JWT-based authentication and Docker-based deployment.",
    stack: [
      ".NET Core Web API",
      "C#",
      "Entity Framework Core",
      "SQL Server",
      "MySQL 8",
      "React JS",
      "REST API",
      "JWT",
      "Docker",
    ],
    features: [
      "Browse and search tours by category",
      "Detailed itineraries, pricing, and departure dates",
      "Passenger-based tour booking flow",
      "Fully database-driven architecture",
      "JWT-based authentication",
      "Docker-based deployment",
    ],
    highlights: [
      "Developed secure REST APIs with .NET Core Web API and Entity Framework Core, consumed by a React JS front end",
      "Implemented JWT authentication and containerized the application with Docker for consistent deployment",
    ],
    github: null,
    demo: null,
  },
];

export const education = [
  {
    program: "PG-DAC",
    institution: "CDAC, Mumbai",
    period: "2023 - 2024",
  },
];

export const achievements = [
  {
    title: "Rookie of the Year",
    description:
      "Awarded for outstanding performance and fast learning in the first year at ParasCadd",
  },
];

export const extraCurricular = [
  {
    title: "Winner, Maharashtra State Level Powerlifting Competition",
    period: "2019",
  },
];

export const languages = ["English", "Marathi", "Hindi"];

export const stats = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "", label: "Production Projects" },
  { value: 7, suffix: "", label: "Core Skill Domains" },
  { value: 3, suffix: "", label: "Languages Spoken" },
];
