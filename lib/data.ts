// ✏️ Edit this file to update your portfolio content.

export const profile = {
  name: "Parv Patel",
  role: "Full-Stack Software Engineer · AI Practitioner",
    location: "Melbourne, Australia · Open to relocation",
  email: "parvpatel2612@gmail.com",
  linkedin: "https://www.linkedin.com/in/parvpatel26/",
  github: "https://github.com/ParvPatel26",
  resume: "/Parv_Patel_Resume.pdf",
  tagline:
    "I build and ship end-to-end applications — from database schema and REST APIs to multi-agent LLM systems and containerised cloud deployments.",
    about: [
    "I recently completed my Master of Information Technology at RMIT University (2026)",
    "Most recently, I built, an agentic AI loan-origination platform for Mutualhub. I designed a multi-agent LangGraph pipeline that interviews applicants, verifies their documents with Google Gemini OCR and makes credit decisions against lending policy, all deployed live on Microsoft Azure with Next.js, FastAPI and Docker.",
    "Before that, I built a music subscription web app with a Node.js/Express REST API deployed across three AWS compute models: EC2, ECS Fargate and Lambda.",
    "My strengths are AI agents, cloud computing, AWS Lambda and DynamoDB data modelling, with a focus on scalable, efficient backend systems. I'm looking for graduate software engineer roles in Australia.",
  ],
};

export type Link = { label: string; href: string };

export const experience = [
  {
    company: "MutualHub",
    title: "Full-Stack Developer · Industry Capstone",
    period: "Aug 2026 – Oct 2026",
    location: "Melbourne, VIC",
    summary: "Agentic AI loan-origination and Credit Assessment platform",
    points: [
      "Architected a multi-service platform: Next.js customer/staff/admin portal, FastAPI platform API and a LangGraph conversational agent service, containerised with Docker Compose on PostgreSQL with per-service schema isolation.",
      "Built a multi-agent LangGraph pipeline for product discovery, structured interview slot-filling and a Five C's credit-assessment engine that automates approve/escalate decisions.",
      "Implemented document verification with Google Gemini multimodal OCR on ID, payslip and bank-statement uploads, plus a reconciliation engine using fuzzy-text and currency-tolerance matching.",
      "Deployed live on Microsoft Azure (Australia East) while working in a Scrum team with the client.",
    ],
    tech: ["Next.js", "FastAPI", "LangGraph", "Gemini", "PostgreSQL", "Docker", "Azure"],
    links: [
      { label: "Live", href: "https://loan-origination.australiaeast.cloudapp.azure.com/" },
    ] as Link[],
  },
  {
    company: "Maxgen Technologies",
    title: "Software Engineer Intern",
    period: "Jan 2024 – Jun 2024",
    location: "Ahmedabad, India",
    summary: "Eshopper e-commerce platform",
    points: [
      "Developed and deployed Eshopper, a full-stack e-commerce platform on Django, Django REST Framework and MySQL with admin and customer portals.",
      "Implemented session-based authentication with role-based access control and integrated the Razorpay payment gateway into checkout.",
      "Resolved 10+ production bugs across cart, checkout and product modules.",
      "Worked in an Agile team with Git and regular code reviews.",
    ],
    tech: ["Python", "Django", "DRF", "MySQL", "Razorpay", "Render"],
    links: [
      { label: "Live", href: "https://eshopper-opuj.onrender.com/" },
      { label: "Code", href: "https://github.com/ParvPatel26/E-shopper" },
    ] as Link[],
  },
];

export const projects = [
  {
    name: "MutualHub — Agentic AI Loan Origination & Credit Assessment",
    blurb:
      "Multi-agent LangGraph system that interviews applicants, verifies documents with Gemini OCR and makes credit decisions against lending policy.",
    tech: ["Next.js", "FastAPI", "LangGraph", "Gemini", "Azure"],
    links: [
      { label: "Live", href: "https://loan-origination.australiaeast.cloudapp.azure.com/" },
    ] as Link[],
    featured: true,
  },
  {
    name: "AWS Music Subscription App",
    blurb:
      "One Express backend deployed three ways — EC2 + Nginx, ECS Fargate behind an ALB, and Lambda + API Gateway — with a live switcher to compare them. DynamoDB composite keys, GSIs/LSI and S3 pre-signed URLs.",
    tech: ["Node.js", "Express", "DynamoDB", "Lambda", "ECS", "S3", "Docker"],
    links: [
      { label: "Code", href: "https://github.com/ParvPatel26/music-subscription-app" },
    ] as Link[],
    featured: true,
  },
  {
    name: "Eshopper E-Commerce",
    blurb:
      "Full-stack store with admin and customer portals, role-based access control and Razorpay checkout (test mode).",
    tech: ["Django", "DRF", "MySQL", "Razorpay"],
    links: [
      { label: "Live", href: "https://eshopper-opuj.onrender.com/" },
      { label: "Code", href: "https://github.com/ParvPatel26/E-shopper" },
    ] as Link[],
    featured: false,
  },
  {
    name: "CareHome Management System",
    blurb:
      "JavaFX desktop app for residents, beds, staff, prescriptions and shift scheduling. MVC + DAO architecture, audit logging, and staffing-compliance rules (1 doctor + 2 nurses per day).",
    tech: ["Java", "JavaFX", "MySQL", "JDBC", "MVC"],
    links: [
      {
        label: "Code",
        href: "https://github.com/COSC1295-advanced-programming-2025-s2/s4155367_ParvPatel_Assignment2",
      },
    ] as Link[],
    featured: false,
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages & Frameworks",
    items: ["Python", "Java", "JavaScript", "SQL", "PHP", "Django", "DRF", "FastAPI", "Node.js", "Express", "React", "Next.js", "JavaFX"],
  },
  {
    group: "AI & ML",
    items: ["LangGraph", "Multi-Agent Systems", "Google Gemini", "LLM APIs", "OCR / Document Extraction"],
  },
  {
    group: "Cloud & Databases",
    items: ["AWS (EC2, ECS, Lambda, S3, API Gateway, ALB)", "Microsoft Azure", "Render", "PostgreSQL", "MySQL", "DynamoDB"],
  },
  {
    group: "Testing & QA",
    items: ["JUnit 5", "Selenium", "Cucumber (BDD)", "JMeter", "SpotBugs", "Spira"],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "Nginx", "Git", "GitHub Actions", "Postman", "IntelliJ", "VS Code"],
  },
];

export const education = [
  {
    school: "RMIT University",
    degree: "Master of Information Technology",
    period: "Feb 2025 – Dec 2026",
    location: "Melbourne, VIC",
  },
  {
    school: "New L.J. Institute of Engineering & Technology (GTU)",
    degree: "B.E. Information Technology · CGPA 8.15/10",
    period: "Oct 2020 – Jul 2024",
    location: "Ahmedabad, India",
  },
];
