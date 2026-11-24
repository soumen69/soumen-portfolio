export const profile = {
  name: "Soumen Maiti",
  role: "Backend Software Developer",
  experience: "4+ years",
  location: "Kolkata, India",
  email: "soumenmaity295@gmail.com",
  github: "https://github.com/Soumen69",
  linkedin: "https://www.linkedin.com/in/soumen-maity-5061231a0",
  portrait: "/images/soumen-profile.jpg",
  introduction:
    "I'm a backend-focused software developer with 4+ years of experience building and improving business applications, internal platforms and APIs. My day-to-day work is mainly with PHP, Laravel, CodeIgniter and MySQL, with a focus on practical backend systems, data workflows and the administrative interfaces that support them.",
};

export const experience = [
  {
    company: "Delostyle Studio Pvt. Ltd.",
    role: "Backend Software Developer",
    period: "Dec 2024 – Present",
    summary:
      "Developing internal business systems and client-facing applications, with work spanning backend features, database workflows, API integrations and the administrative interfaces used by teams.",
    highlights: [
      "Developed features across CuddlyDuddly, a multi-vendor e-commerce platform, including catalog, inventory, pricing, seller, customer and order workflows.",
      "Built a Laravel bulk catalog ingestion pipeline using queues and jobs, supporting runs of up to 10,000 products.",
      "Developed the CrayonLyf admin CMS for website pages and structured feature content, with APIs consumed by a Next.js frontend.",
      "Built internal business tools covering proposal and lead management, revenue tracking, invoicing, employee compensation and appraisal workflows.",
    ],
    technologies: ["PHP", "Laravel", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap 5", "REST APIs"],
  },
  {
    company: "Ornaware Finesse Pvt. Ltd.",
    role: "PHP / CodeIgniter Developer",
    period: "Jan 2024 – Dec 2024",
    summary:
      "Worked on an existing business application for a jewellery-packaging manufacturer, extending its functionality across operational and manufacturing workflows.",
    highlights: [
      "Enhanced modules covering role-based access, product management, inventory, raw materials, orders and media workflows.",
      "Improved manufacturing and operational processes, including exhibition-related functionality and inventory coordination.",
      "Investigated issues in the existing application, fixed bugs and delivered new features based on business requirements.",
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap 5"],
  },
  {
    company: "Twiplo Web Services Pvt. Ltd.",
    role: "PHP / CodeIgniter Trainee",
    period: "Jan 2023 – Jun 2023",
    summary:
      "Moved into PHP development and learned CodeIgniter while contributing to an existing web application.",
    highlights: [
      "Worked on maintenance tasks, bug fixes, backend changes and feature updates.",
      "Implemented CRUD functionality and form validations while becoming familiar with an established application codebase.",
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "JavaScript"],
  },
  {
    company: "Technoms Pvt. Ltd.",
    role: "Trainee Developer",
    period: "Oct 2022 – Dec 2022",
    summary:
      "Started my professional development journey with foundational web development tasks and hands-on learning.",
    highlights: [
      "Worked on foundational HTML tasks, including form development.",
      "Built an initial understanding of web development and PHP fundamentals.",
    ],
    technologies: ["HTML", "PHP fundamentals"],
  },
];

export const projects = [
  {
    number: "01",
    name: "CuddlyDuddly",
    type: "Multi-vendor e-commerce",
    featured: true,
    description:
      "A multi-vendor commerce platform with Admin, Seller and Customer workflows across catalog, inventory, pricing, offers, vendors, customers and orders. The catalog workflow also includes bulk ingestion for large product batches.",
    contribution:
      "Backend features, product workflows, bulk catalog ingestion, queues and jobs, database work and REST APIs.",
    technologies: ["Laravel", "PHP", "MySQL", "Queues & Jobs", "REST APIs", "Razorpay", "Shiprocket"],
  },
  {
    number: "02",
    name: "CrayonLyf CMS",
    type: "Content management platform",
    featured: true,
    description:
      "An admin-side CMS for managing website pages and structured feature content, with APIs consumed by a Next.js frontend.",
    contribution:
      "CMS modules, content structures, feature management, API endpoints and administration UI.",
    technologies: ["CodeIgniter", "PHP", "MySQL", "REST APIs", "Next.js"],
  },
  {
    number: "03",
    name: "Manufacturing Operations Platform",
    type: "Business application",
    featured: true,
    description:
      "An operations platform supporting workflows across manufacturing, inventory, raw materials, products, orders and exhibitions.",
    contribution:
      "Extended existing modules, implemented permission workflows, resolved application issues and delivered additional functionality.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap 5"],
  },
  {
    number: "04",
    name: "PeopleDesk",
    type: "Employee compensation & payroll",
    featured: true,
    description:
      "An employee compensation platform covering salary annexures, CTC breakup, wage structures, payslips and payroll utilities.",
    contribution:
      "Backend modules and administrative workflows for employee compensation and payroll processes.",
    technologies: ["CodeIgniter", "PHP", "MySQL"],
  },
  {
    number: "05",
    name: "Unified Business Engine",
    type: "Internal business workspace",
    featured: false,
    description:
      "A collection of workflows for proposal generation, lead management, revenue tracking and business development evaluation.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript", "Bootstrap 5"],
  },
  {
    number: "06",
    name: "Evalon",
    type: "Employee performance evaluation",
    featured: false,
    description:
      "An employee evaluation platform supporting feedback and assessment workflows involving HR, peers, seniors and clients.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
  },
  {
    number: "07",
    name: "Invoice Generator",
    type: "Internal finance workflow",
    featured: false,
    description:
      "An internal tool for invoice creation and billing workflows.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "JavaScript"],
  },
  {
    number: "08",
    name: "Real Estate Application",
    type: "Independent HMVC practice project",
    featured: false,
    description:
      "An independently developed application concept exploring land and property listing and buying/selling workflows, structured using an HMVC approach.",
    technologies: ["PHP", "CodeIgniter", "MySQL", "HMVC"],
  },
];

export const skillGroups = [
  {
    label: "Backend & frameworks",
    items: ["PHP", "Laravel", "CodeIgniter", "CakePHP"],
  },
  {
    label: "Architecture & backend concepts",
    items: ["MVC", "HMVC", "OOP", "REST APIs", "Custom RBAC", "Queues & Jobs"],
  },
  {
    label: "Frontend & administration UI",
    items: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"],
  },
  {
    label: "Databases",
    items: ["MySQL", "MariaDB"],
  },
  {
    label: "Integrations & tools",
    items: ["Razorpay", "Shiprocket", "Git", "GitHub", "VS Code", "Plesk", "cPanel"],
  },
];

export const learningTopics = [
  {
    name: "Java",
    focus: "Revisiting core Java concepts, object-oriented programming and language fundamentals.",
    category: "Language",
  },
  {
    name: "Node.js & Express",
    focus: "Exploring asynchronous programming, the event loop, concurrency and backend development.",
    category: "Backend runtime",
  },
  {
    name: "MongoDB",
    focus: "Learning NoSQL concepts, document modelling and database operations.",
    category: "Database",
  },
  {
    name: "Python",
    focus: "Building programming fundamentals through regular practice.",
    category: "Language",
  },
];

export const highlights = [
  {
    title: "Bulk catalog ingestion",
    description:
      "Built a Laravel queues-and-jobs workflow designed to process large catalog imports of up to 10,000 products per run.",
    metric: "10,000",
    metricLabel: "products per run",
  },
  {
    title: "Custom permission workflows",
    description:
      "Implemented role-based access control and custom permission workflows across multiple business applications.",
  },
  {
    title: "Database query optimization",
    description:
      "Improved product-listing performance through query optimization, indexing, joins, filtering and pagination work.",
  },
  {
    title: "Production issue ownership",
    description:
      "Took ownership of a difficult account-recovery issue in an existing application, traced the underlying flow and implemented a fix.",
  },
];

export const education = [
  {
    qualification: "B.Tech — Computer Science & Engineering",
    institution: "Maharshi Dayanand University",
    detail: "Graduated 2022 · 73%",
  },
];

export const languages = ["English", "Hindi", "Bengali"];
