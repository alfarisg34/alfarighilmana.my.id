// Master Portfolio Data for Alfari Sidnan Ghilmana (alfarighilmana.my.id)
window.PORTFOLIO_DATA = {
  profile: {
    name: "Alfari Sidnan Ghilmana",
    shortName: "Alfari",
    headline: "Full Stack Software Engineer & Systems Architect",
    tagline: "Specializing in High-Performance Enterprise Automation, Interactive Visual Computing, and Financial Intelligence Systems.",
    bio: "Informatics graduate from Universitas Padjadjaran (UNPAD) with a strong foundation in Web GIS, Agile software engineering, and fullstack cloud architectures. Experienced in building mission-critical public sector budget automation engines at Kemnaker RI, high-framerate interactive canvas platforms, and enterprise-grade financial dashboards.",
    status: "Available for High-Impact Software Engineering & Architecture Roles",
    location: "Indonesia",
    domain: "alfarighilmana.my.id",
    socials: {
      github: "https://github.com/alfarisg34",
      linkedin: "https://id.linkedin.com/in/alfari-ghilmana",
      email: "alfari.ghilmana@gmail.com",
      website: "https://alfarighilmana.my.id"
    },
    metrics: [
      { label: "Computational Accuracy", value: "100%", sub: "Hierarchical Budget Formulas" },
      { label: "Client Media Compression", value: ">90%", sub: "60 FPS Interactive Canvas" },
      { label: "Data Transformation Speed", value: "<1.2s", sub: "Multi-Sheet 41-Col Matrices" },
      { label: "System Uptime & Stability", value: "99.9%", sub: "Cloud & Supabase Architecture" }
    ]
  },

  education: [
    {
      institution: "Universitas Padjadjaran (UNPAD)",
      degree: "Bachelor of Computer Science / S1 Teknik Informatika",
      period: "Graduated Jan 2023",
      description: "Focused on Software Engineering, Web Geographic Information Systems (GIS), and Agile Methodologies. Authored research thesis on Web-based GIS for Traditional Arts Mapping in Indonesia.",
      badge: "Informatics (UNPAD)",
      icon: "graduation"
    },
    {
      institution: "SMAN 1 Bekasi",
      degree: "High School Diploma - Science",
      period: "2014 - 2017",
      description: "Elected Academic Achievement Coordinator (Sekbid 4) in OSIS SMAN 1 Bekasi, leading academic Olympiads and scientific extracurricular programs.",
      badge: "SMAN 1 Bekasi",
      icon: "building"
    }
  ],

  experience: [
    {
      role: "Software Engineer & Budget Systems Specialist",
      company: "Kementerian Ketenagakerjaan RI (Kemnaker)",
      department: "Direktorat Bina Perluasan Kesempatan Kerja",
      period: "2024 - Present",
      description: "Designed and engineered automated budget processing systems (Excel Processor V3) transforming legacy Satker budget documents into standard 20-column RAB matrices, reconciling multi-segment financial accounts, and ensuring zero-defect formula generation.",
      highlights: [
        "Architected Node.js/ExcelJS automation pipeline saving 95%+ of manual clerical auditing time.",
        "Engineered regex multiplier parser for complex volume matrices like `[24 org x 10 kl]`.",
        "Integrated automated Laporan FA Detail (16 Segmen) reconciliation."
      ]
    },
    {
      role: "Full Stack & Web Application Engineer",
      company: "Independent / Specialized Engineering Projects",
      period: "2022 - Present",
      description: "Architected modern web systems across interactive map exploration, cloud genealogy trees, and multi-wallet wealth management platforms using Next.js, React, TypeScript, Supabase, and Tailwind CSS.",
      highlights: [
        "Engineered Canvas Pan & Zoom engine with dynamic Level of Detail (LOD) and client-side canvas compression.",
        "Built multi-tenant financial OS with in-line math parsing, double-entry transfer bookkeeping, and Recharts analytics."
      ]
    }
  ],

  skills: {
    frontend: [
      { name: "React 18/19", level: 95, icon: "zap" },
      { name: "Next.js 16 (App Router)", level: 92, icon: "server" },
      { name: "TypeScript 5", level: 94, icon: "code" },
      { name: "HTML5 / Vanilla CSS3", level: 98, icon: "layers" },
      { name: "Tailwind CSS v4", level: 92, icon: "sparkles" },
      { name: "Canvas 2D API / Web GIS", level: 88, icon: "globe" }
    ],
    backend: [
      { name: "Node.js & Express", level: 95, icon: "server" },
      { name: "ExcelJS & Spreadsheet Engines", level: 98, icon: "spreadsheet" },
      { name: "REST API Design", level: 94, icon: "zap" },
      { name: "Python / Data Scripts", level: 85, icon: "code" },
      { name: "Authentication & RBAC", level: 90, icon: "shield" }
    ],
    databaseCloud: [
      { name: "Supabase & PostgreSQL", level: 92, icon: "database" },
      { name: "Row Level Security (RLS)", level: 90, icon: "shield" },
      { name: "Vercel Cloud Deployment", level: 95, icon: "globe" },
      { name: "DNS & Hostinger hPanel", level: 92, icon: "server" },
      { name: "Git & GitHub CI/CD", level: 94, icon: "code" }
    ],
    testingQA: [
      { name: "Playwright E2E Automation", level: 96, icon: "cpu" },
      { name: "Page Object Model (POM)", level: 95, icon: "layers" },
      { name: "Security Testing (SQLi / XSS)", level: 90, icon: "shield" },
      { name: "Data-Driven Stress Testing", level: 92, icon: "zap" },
      { name: "MD5 Checksum & File Validation", level: 94, icon: "check" }
    ],
    architecture: [
      { name: "Dynamic Bottom-Up SUM Algorithms", level: 96 },
      { name: "Client-Side Media Compression", level: 92 },
      { name: "Level of Detail (LOD) Navigation", level: 90 },
      { name: "Agile Development & GIS Systems", level: 94 }
    ]
  },

  projects: [
    {
      id: "excel-processor-v3",
      title: "Kemnaker Excel Processor V3",
      subtitle: "Enterprise Budget Automation & 41-Column RAB Matrix Engine",
      category: "enterprise",
      categoryName: "Enterprise & Automation",
      featured: true,
      badge: "Mission Critical",
      tagline: "High-performance processing engine transforming raw RKK Satker files into standardized 20-column side-by-side matrices (SEMULA vs. MENJADI vs. SELISIH) with hierarchical SUM generation.",
      overview: "Designed for Kementerian Ketenagakerjaan RI (Kemnaker) budget planning, this system eliminates days of manual clerical restructuring. It unmerges raw inputs, aligns shifted budget columns, calculates 100% mathematically accurate bottom-up formulas for complex accounts (`026.04.DN`, `2175.BDC`, `521211`), reconciles Sisa Anggaran with Laporan FA Detail (16 Segmen), and dynamically injects TTE signature blocks.",
      techStack: ["Node.js", "Express.js", "ExcelJS", "Multer", "CORS", "Vanilla JS", "Automated E2E Tests"],
      github: "https://github.com/alfarisg34/excel-processor-v3",
      demoUrl: null,
      stats: [
        { label: "Time Saved", value: "95%" },
        { label: "Formula Accuracy", value: "100%" },
        { label: "Matrix Width", value: "41 Cols" },
        { label: "Execution Time", value: "<1.5s" }
      ],
      highlights: [
        "**20-Column RAB Side-by-Side Matrix**: Seamlessly maps SEMULA (Cols 1-20), MENJADI (Cols 21-40), and dynamic SELISIH (`=AM{r}-S{r}`) at Col 41.",
        "**Automated Multiplier Parsing**: Extracts embedded volume patterns like `[24 org x 10 kl]` or `[4 org x 1 trip x 9 lok]` into structured multiplier columns.",
        "**Dynamic Hierarchical SUM Engine**: Generates mathematically sound bottom-up formulas for all budget account tiers.",
        "**Laporan FA Detail (16 Segmen) Matching**: Automates 6-digit budget account reconciliation to calculate Sisa Anggaran in Column 51.",
        "**TTE Signature Block & Styling**: Automatically prunes non-budget empty rows, injects 5-row TTE signature spacing at `AL(n+2)`, and applies Kemnaker corporate styling."
      ],
      architecture: `Client (Drag-and-Drop Web UI)
       │
       ▼ (multipart/form-data)
Express API Server (/api/process & /api/process-with-fa)
       │
       ├─ Step 01: Parse Raw Input & Unmerge Cells (ExcelJS)
       ├─ Step 02: Row Normalization & Column Alignment
       ├─ Step 03: Multiplier Regex Extraction
       ├─ Step 04: Side-by-Side 41-Column Mapping (SEMULA/MENJADI/SELISIH)
       ├─ Step 05: Hierarchical Bottom-Up SUM Formula Recalculator
       ├─ Step 06: FA Detail 16-Segment Reconciliation & Sisa Anggaran
       └─ Step 07: TTE Signature Layout & Color Styling
       │
       ▼
Output: Sanitized, 100% Mathematically Valid RAB Format Baru (.xlsx)`
    },
    {
      id: "family-tree",
      title: "Interactive Family Tree Map Explorer",
      subtitle: "RPG/Map-Style Canvas Genealogy Explorer with Dynamic LOD",
      category: "interactive",
      categoryName: "Interactive & Canvas",
      featured: true,
      badge: "Visual Computing",
      tagline: "Modern genealogy visualization web application featuring smooth pan & zoom navigation, dynamic Level of Detail (LOD), client-side canvas compression, and Supabase cloud sync.",
      overview: "Built to replace rigid, laggy family tree diagrams, this platform renders genealogy trees like an interactive RPG world map. Users can pan, zoom, and inspect family histories seamlessly with a radar minimap. Includes custom visualizers for deceased ancestors (sepia vintage filter + grief ribbon), divorce indicators (dashed red line with separation mark), and adopted descendants (teal badge and lineage), alongside client-side image compression (>90% savings) to maintain 60 FPS rendering.",
      techStack: ["React 18", "TypeScript 5", "Vite 6", "Supabase PostgreSQL", "Canvas 2D API", "Tailwind CSS", "Vercel"],
      github: "https://github.com/alfarisg34/family-tree",
      demoUrl: "https://familytree.alfarighilmana.my.id/",
      stats: [
        { label: "Rendering Rate", value: "60 FPS" },
        { label: "Media Compression", value: ">90%" },
        { label: "LOD Levels", value: "3 Zoom Tiers" },
        { label: "Data Sync", value: "Real-time" }
      ],
      highlights: [
        "**Interactive Canvas Pan & Zoom**: Intuitive gestures with drag, wheel zoom, and mini-map radar overview.",
        "**Dynamic Level of Detail (LOD)**: Macro (<55% zoom: avatars only), Medium (55%-105%: name fade-in), Micro (>105%: full biography, degrees, lifespan, career).",
        "**Complex Lineage Visualizer**: Vintage sepia styling for deceased ancestors with age calculation, dashed lines for divorce & adoptive ties.",
        "**Client-Side Canvas Compression**: Automatically compresses uploaded photos before cloud transmission, drastically reducing payload sizes.",
        "**Admin Portal & Cloud Sync**: Full CRUD for horizontal/vertical relationships, JSON export/import, and Supabase PostgreSQL syncing."
      ],
      architecture: `Browser Client (React 18 + Vite 6)
       │
       ├─ Canvas 2D Rendering Engine (Pan, Zoom, Dynamic LOD Algorithm)
       ├─ Client-Side Image Compressor (Canvas Offscreen Compression)
       ├─ Relationship Graph Layout Engine (Spouses, Siblings, Lineages)
       │
       ▼ (Supabase JS Client / Anon Key)
Supabase Cloud (PostgreSQL Database)
       ├─ schema: members (id, full_name, birth_year, death_year, is_alive, photo_url, metadata)
       ├─ schema: relationships (parent_id, child_id, spouse_id, relation_type)
       └─ Row Level Security (RLS) & Storage Buckets`
    },
    {
      id: "financial-dashboard",
      title: "Smart Financial & Budget Intelligence Platform",
      subtitle: "Fullstack Wealth & Multi-Wallet Cashflow Management OS",
      category: "fullstack",
      categoryName: "Fullstack & Cloud",
      featured: true,
      badge: "Fullstack OS",
      tagline: "Comprehensive personal and organizational financial dashboard featuring real-time multi-account ledgers, interactive Recharts analytics, in-line mathematical evaluator, and Supabase SSR auth.",
      overview: "An enterprise-grade financial management platform developed with Next.js 16 (App Router), React 19, and Supabase. Enables users to manage multiple fund sources (Bank BCA, Mandiri, Cash, E-wallets), track budget allocations against actual spending with threshold alerts, execute double-entry inter-account transfers, and perform swift data entry using an integrated in-line mathematical evaluation calculator (\`AmountCalculatorInput\`).",
      techStack: ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS v4", "Supabase SSR Auth", "PostgreSQL", "Recharts", "Lucide Icons"],
      github: "https://github.com/alfarisg34/financial-dashboard",
      demoUrl: "https://financialdashboard.alfarighilmana.my.id/",
      stats: [
        { label: "Next.js Version", value: "v16.2" },
        { label: "Security", value: "SSR + RLS" },
        { label: "Chart Engine", value: "Recharts" },
        { label: "Math Parser", value: "In-line" }
      ],
      highlights: [
        "**Real-Time Multi-Account Ledger**: Track balances across BCA, Mandiri, Cash, and Digital Wallets with automatic double-entry transfer recording.",
        "**Dynamic Recharts Analytics**: Interactive monthly burn-rate charts, expense category distribution pie charts, and projected income vs. expense graphs.",
        "**In-line Mathematical Evaluator**: Type expressions like `50000 * 3 + 15000` directly into transaction fields for instantaneous calculation.",
        "**Budget Overspending Guard**: Set monthly limits per subcategory with automated progress indicators and visual threshold warnings.",
        "**Role-Based Access Control (RBAC)**: Admin portal with user provisioning, account expiration control, soft delete migrations, and automated database seeders."
      ],
      architecture: `Next.js 16 App Router (React 19 + TypeScript + Tailwind CSS v4)
       │
       ├─ (auth): Login & Password Reset (Supabase SSR Auth)
       ├─ (dashboard):
       │    ├─ /dashboard: Recharts Analytics, Balance Projection, Pie Distribution
       │    ├─ /input: Fast Entry + Math Evaluator (AmountCalculatorInput)
       │    ├─ /budget: Category Budget Limits vs Actual Spend
       │    ├─ /fund-sources: Multi-Wallet Ledger (BCA, Mandiri, Cash)
       │    ├─ /transfer: Automated Double-Entry Inter-Account Transfers
       │    └─ /admin: User Provisioning, Seeders & Expiration Policy
       │
       ▼ (Supabase SSR & Client SDK)
PostgreSQL Database with Row Level Security (RLS) Policies`
    },
    {
      id: "mentorhub-qa",
      title: "ConnectHub LMS — SDET & Automated QA Architecture",
      subtitle: "End-to-End Test Automation Framework, Multi-Role RBAC & Security Hardening",
      category: "qa",
      categoryName: "QA & SDET Automation",
      featured: true,
      badge: "Quality Engineering",
      isPrivate: true,
      tagline: "Industrial-grade automated testing framework built with Playwright and TypeScript, featuring Page Object Model architecture, SQLi/XSS resilience testing, document checksum verification, and 100-batch stress testing.",
      overview: "An automated quality assurance and SDET framework engineered for the ConnectHub Learning Management System. The framework executes automated multi-role validation across 4 access tiers (Super Admin, Admin, Pendamping, Penerima Bantuan), security injection resilience tests (SQLi/XSS), MD5 checksum and byte-size verification for downloaded document templates, comprehensive network broken link crawlers, and data-driven stress tests across 100 beneficiary test accounts.",
      techStack: ["Playwright Test", "TypeScript 5", "Node.js", "Page Object Model (POM)", "Data-Driven Testing (DDT)", "Security Hardening", "MD5 Baseline Checksum"],
      github: null,
      demoUrl: null,
      stats: [
        { label: "Role Scenarios", value: "4 Tiers" },
        { label: "Batch Stress Test", value: "100 Accounts" },
        { label: "Security Vectors", value: "SQLi + XSS" },
        { label: "Test Architecture", value: "POM Pattern" }
      ],
      highlights: [
        "**Page Object Model (POM) Modular Architecture**: Decoupled test fixtures, page locators, and user action handlers across Login, Register, Profile, Penerima Bantuan, and Dashboard flows.",
        "**Multi-Role RBAC Governance**: Automated permission matrices testing positive and negative access control boundaries for Super Admin, Admin, Mentors (Pendamping), and Beneficiaries (Penerima Bantuan).",
        "**Security & Injection Resilience Testing**: Automated fuzzing testing against SQL Injection and XSS attack vectors in authentication and registration inputs.",
        "**Data Integrity & MD5 Checksum Baselines**: Automated download testing that hashes downloaded files against MD5 baselines and byte-lengths to guarantee zero asset corruption.",
        "**100-Account Data-Driven Stress Testing**: Automated batch stress runner (`stress.spec.ts`) evaluating server authentication latency, session stability, and redirect flows across 100 accounts concurrently.",
        "**Automated Navigation & 404 Spider Crawl**: Full crawler intercepting HTTP network traffic across all authenticated routes to detect broken links or invalid response codes."
      ],
      architecture: `Playwright Test Runner (TypeScript + Node.js)
       │
       ├─ Global Helpers:
       │    ├─ generalFunctions.ts, getDate.ts, getRandomData.ts
       │    ├─ networkIntercept.ts (404 Detection & Response Interception)
       │    └─ verifyScreenshootOption.ts (Visual & Hash Comparisons)
       │
       ├─ Page Object Models (POM):
       │    ├─ login.page.ts & register.page.ts (Auth & Form Validations)
       │    ├─ dashboard.page.ts (Role-based widgets & access control)
       │    └─ penerimaBantuan.page.ts & pendamping.page.ts (Workflow gates)
       │
       ▼ Test Execution Suites
       ├─ 01. auth/ (Login E2E, SQLi/XSS Resilience, Negative Form Cases)
       ├─ 02. dashboard/ (Document Progress, Workflow Rejections, Stage Steps)
       ├─ 03. dataIntegrity/ (Template Downloads vs MD5 Hash Baselines)
       ├─ 04. menuAudit/ (Full Spider Crawl for Broken Links & 404s)
       └─ 05. stress/ (Data-Driven Batch Load Tests across 100 Accounts)`
    }
  ]
};
