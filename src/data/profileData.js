export const profileData = {
  personal: {
    name: "Abila Khan Keya",
    title: "Aspiring Software Engineer",
    subtitle: "Deep Learning Enthusiast & Full-Stack Developer",
    email: "khankeya961@gmail.com",
    phone: "+8801831742886",
    location: "Uttarkhan, Dhaka-1230, Bangladesh",
    github: "https://github.com/ke961",
    githubUsername: "ke961",
    linkedin: "https://www.linkedin.com/in/abila-khan-keya",
    linkedinUsername: "abila-khan-keya",
    website: "https://portfolio-gamma-one-t8oc9ga60h.vercel.app",
    bio: "Highly motivated Computer Science and Engineering student with hands-on experience in Deep Learning, Computer Vision, FastAPI, React.js, Python, Java, and JavaScript. Skilled in developing full-stack web and desktop applications, designing RESTful APIs, implementing ensemble neural architectures, and deploying automated CI/CD workflows using Git/GitHub Actions.",
    typingTitles: [
      "Aspiring Software Engineer",
      "AI & Deep Learning Enthusiast",
      "Full-Stack Web Developer",
      "FastAPI & React Specialist",
      "CCNA Certified Networking Specialist"
    ],
    stats: [
      { label: "ML Model Test Accuracy", value: "95.45%", sub: "Leaf Disease Ensemble" },
      { label: "ROC-AUC Score", value: "99.93%", sub: "Deep Learning Architecture" },
      { label: "Featured Projects", value: "9+", sub: "Web, AI & Automation" },
      { label: "CI/CD Deployment Pipelines", value: "Automated", sub: "Vercel & Render Integration" }
    ]
  },

  skills: {
    categories: [
      {
        id: "ai-ml",
        title: "AI, ML & Computer Vision",
        icon: "Brain",
        color: "from-purple-500 to-indigo-500",
        skills: [
          { name: "Deep Learning (CNNs)", level: 90, tag: "Expertise" },
          { name: "Transfer Learning", level: 92, tag: "VGG19, ResNet, Xception" },
          { name: "Ensemble Neural Methods", level: 88, tag: "Feature Concatenation" },
          { name: "OpenCV & Computer Vision", level: 85, tag: "Image Processing" },
          { name: "NumPy & Data Preprocessing", level: 88, tag: "Data Augmentation" },
          { name: "Model Tuning & Evaluation", level: 90, tag: "Adam, ROC-AUC" }
        ]
      },
      {
        id: "backend",
        title: "Backend & RESTful APIs",
        icon: "Server",
        color: "from-cyan-500 to-blue-500",
        skills: [
          { name: "FastAPI Framework", level: 92, tag: "Async & High Performance" },
          { name: "SQLAlchemy ORM", level: 85, tag: "Database Modeling" },
          { name: "Pydantic Schemas", level: 88, tag: "Data Validation" },
          { name: "RESTful API Architecture", level: 90, tag: "Swagger / OpenAPI" },
          { name: "JWT Auth & Security", level: 86, tag: "bcrypt & Passlib" },
          { name: "SQL Databases (SQLite, MySQL)", level: 85, tag: "Relational Queries" }
        ]
      },
      {
        id: "frontend",
        title: "Frontend & Desktop UI",
        icon: "Layout",
        color: "from-emerald-500 to-teal-500",
        skills: [
          { name: "React 19 & Vite", level: 88, tag: "Modern SPA" },
          { name: "JavaScript (ES6+)", level: 88, tag: "Async / DOM" },
          { name: "HTML5 & CSS3 Design", level: 92, tag: "Glassmorphism & Flex/Grid" },
          { name: "Desktop UI (Tkinter, Pygame)", level: 82, tag: "Python GUI" },
          { name: "PHP & Web Basics", level: 75, tag: "Server-side Web" }
        ]
      },
      {
        id: "devops-tools",
        title: "DevOps, Tools & Languages",
        icon: "Wrench",
        color: "from-amber-500 to-orange-500",
        skills: [
          { name: "Git & GitHub Actions", level: 88, tag: "Automated CI/CD" },
          { name: "Vercel & Render Deployment", level: 86, tag: "Cloud Hosting" },
          { name: "Postman & API Testing", level: 90, tag: "API Debugging" },
          { name: "UML & System Design", level: 85, tag: "DFDs, ERDs, Use Cases" },
          { name: "Python, Java (OOP)", level: 90, tag: "Core Languages" }
        ]
      }
    ],
    spokenLanguages: [
      { name: "Bangla", proficiency: "Native" },
      { name: "English", proficiency: "Fluent" },
      { name: "Korean", proficiency: "Elementary (1A)" }
    ]
  },

  projects: [
    {
      id: "plant-disease-recognition",
      title: "Plant Disease Recognition System",
      category: "AI & Deep Learning",
      subtitle: "Deep Learning & Feature Fusion Ensemble Architecture",
      featured: true,
      metrics: [
        { label: "Test Accuracy", value: "95.45%" },
        { label: "F1-Score", value: "95.27%" },
        { label: "ROC-AUC", value: "99.93%" },
        { label: "Leaf Dataset", value: "7,080 Images" }
      ],
      description: "Evaluated 6 state-of-the-art deep learning architectures (Xception, VGG16, VGG19, ResNet101V2, ResNet152V2, ConvNeXtBase) on 7,080 leaf images across 15 plant disease classes. Engineered a multi-branch ensemble model fusing concatenated feature maps.",
      details: [
        "Constructed a novel multi-branch ensemble model combining feature representations from Xception, VGG19, and ResNet152V2.",
        "Applied advanced data augmentation, fine-tuning, and two-stage optimization (Adam optimizer with ReduceLROnPlateau & EarlyStopping).",
        "Achieved benchmark performance: 95.45% accuracy, 95.27% macro F1-score, and an extraordinary 99.93% ROC-AUC score.",
        "Eliminated overfitting and maximized generalization across complex botanical field image samples."
      ],
      techStack: ["Python", "CNN", "Transfer Learning", "Xception", "VGG19", "ResNet152V2", "OpenCV", "NumPy"],
      github: "https://github.com/ke961",
      badge: "Deep Learning Model",
      accentColor: "purple"
    },
    {
      id: "lifeflow-blood-donation",
      title: "LifeFlow – Emergency Blood Management",
      category: "Full-Stack Web",
      subtitle: "Full-Stack Emergency Platform with Automated CI/CD",
      featured: true,
      metrics: [
        { label: "CI/CD Jobs", value: "4 Automated" },
        { label: "Role Control", value: "Admin, Donor, Patient" },
        { label: "API Docs", value: "Swagger / OpenAPI" },
        { label: "Deployment", value: "Vercel + Render" }
      ],
      description: "A comprehensive real-time emergency blood donation management platform connecting donors, patients, and healthcare administrators dynamically during urgent blood requirements.",
      details: [
        "Architected role-based authentication and authorization flows (Admin, Donor, Patient) with secure JWT tokens.",
        "Engineered automated blood compatibility matching algorithms linking urgent requests to nearest compatible blood donors.",
        "Built interactive Swagger API documentation for fast backend testing and mobile/frontend integration.",
        "Configured a 4-job automated GitHub Actions CI/CD deployment workflow targeting Vercel (frontend) and Render (FastAPI backend)."
      ],
      techStack: ["React 19", "FastAPI", "SQLite", "GitHub Actions", "CI/CD", "Vercel", "Render", "JWT"],
      github: "https://github.com/ke961",
      badge: "Full Stack + CI/CD",
      accentColor: "cyan"
    },
    {
      id: "workforce-ems",
      title: "Employee Workforce Management System",
      category: "Full-Stack Web",
      subtitle: "Glassmorphic Enterprise SPA for Hybrid Workforces",
      featured: true,
      metrics: [
        { label: "Architecture", value: "FastAPI REST + SPA" },
        { label: "Security", value: "JWT + bcrypt" },
        { label: "UI Style", value: "Glassmorphism CSS" }
      ],
      description: "Enterprise-grade workforce management system designed for remote and hybrid teams. Features custom CSS design tokens, glassmorphic card layouts, and robust FastAPI backend endpoints.",
      details: [
        "Designed and implemented RESTful endpoints using FastAPI, SQLAlchemy ORM, and SQLite database.",
        "Secured endpoints using JSON Web Tokens (JWT) and bcrypt password hashing for sensitive employee records.",
        "Developed a responsive Single Page Application featuring custom CSS glassmorphism styling tokens, dark aesthetics, and seamless state updates.",
        "Implemented real-time employee check-ins, department management, performance scoring, and task allocation trackers."
      ],
      techStack: ["FastAPI", "Python", "SQLAlchemy", "JavaScript", "CSS3", "JWT", "SQLite"],
      github: "https://github.com/ke961",
      badge: "Enterprise App",
      accentColor: "emerald"
    },
    {
      id: "restaurant-management",
      title: "Restaurant Management Web App",
      category: "Full-Stack Web",
      subtitle: "Dynamic Menu & Real-Time Order Management",
      featured: false,
      metrics: [
        { label: "Build Tool", value: "Vite + React" },
        { label: "Cart Logic", value: "Real-time Bill Calc" },
        { label: "UI Design", value: "Custom Responsive CSS" }
      ],
      description: "A fast, modern restaurant web application built with React and Vite, delivering real-time bill calculations, menu categorization, cart management, and order history tracking.",
      details: [
        "Dynamic item filtering by category (Appetizers, Main Course, Desserts, Beverages).",
        "Interactive cart management with real-time tax and tip calculations, special instructions, and order dispatch workflow.",
        "Order history tracking allowing users to view prior receipts and status updates."
      ],
      techStack: ["React", "Vite", "JavaScript", "CSS3", "LocalStorage"],
      github: "https://github.com/ke961",
      badge: "Web Application",
      accentColor: "orange"
    },
    {
      id: "agri-analytics",
      title: "AgriAnalytics Platform",
      category: "Full-Stack Web",
      subtitle: "Agricultural Analytics & Data Insights Platform",
      featured: false,
      metrics: [
        { label: "Stack", value: "PHP & MySQL" },
        { label: "Database", value: "Relational Queries" }
      ],
      description: "Web-based agricultural analytics platform enabling farmers and agronomists to manage crop data, analyze yield statistics, and monitor field metrics.",
      details: [
        "Collaborated with team members using Git for version control and module integration.",
        "Developed custom MySQL queries for efficient crop data indexing and report generation.",
        "Implemented user authentication, role-based dashboards, and responsive analytics UI."
      ],
      techStack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"],
      github: "https://github.com/ke961",
      badge: "Data Platform",
      accentColor: "teal"
    },
    {
      id: "face-recognition-system",
      title: "Real-Time Face Recognition System",
      category: "AI & Deep Learning",
      subtitle: "OpenCV Computer Vision & Webcam Identification",
      featured: true,
      metrics: [
        { label: "Library", value: "face_recognition" },
        { label: "Processing", value: "OpenCV & NumPy" },
        { label: "Input", value: "Live Webcam Stream" }
      ],
      description: "Real-time face detection and identity recognition application utilizing OpenCV computer vision techniques and deep learning face embeddings.",
      details: [
        "Implemented facial feature vector extraction and distance matching using dlib/face_recognition algorithms.",
        "Optimized frame-by-frame image resizing and color space conversion for high FPS real-time detection from webcam streams.",
        "Built automatic label overlays and confidence threshold bounding boxes."
      ],
      techStack: ["Python", "OpenCV", "face_recognition", "NumPy"],
      github: "https://github.com/ke961",
      badge: "Computer Vision",
      accentColor: "purple"
    },
    {
      id: "phone-geo-tracker",
      title: "Phone Info & Geolocation Visualizer",
      category: "Desktop & Automation",
      subtitle: "Global Carrier Analysis & Interactive Map Rendering",
      featured: false,
      metrics: [
        { label: "Mapping", value: "Folium / OpenStreetMap" },
        { label: "Geocoding", value: "Geopy API" }
      ],
      description: "Python utility for identifying international carrier details, country codes, and plotting geographic coordinates on an interactive Folium web map.",
      details: [
        "Parsed international phone number metadata to retrieve carrier names and region coordinates.",
        "Generated interactive HTML maps rendered with OpenStreetMap layers and custom location pins."
      ],
      techStack: ["Python", "Folium", "Geopy", "Phonenumbers API"],
      github: "https://github.com/ke961",
      badge: "GIS & Python",
      accentColor: "blue"
    },
    {
      id: "smart-weather-dashboard",
      title: "Smart Weather Desktop Dashboard",
      category: "Desktop & Automation",
      subtitle: "Tkinter GUI with OpenWeather API & Theme Engine",
      featured: false,
      metrics: [
        { label: "API Integration", value: "OpenWeather REST" },
        { label: "UI Framework", value: "Python Tkinter" }
      ],
      description: "Desktop application featuring real-time global weather updates, world clocks, calendar tools, alarm capabilities, and automatic day/night dynamic UI themes.",
      details: [
        "Integrated OpenWeather API to retrieve live weather data, humidity, wind speeds, and 5-day forecasts.",
        "Implemented automatic time zone detection to switch between sleek dark night themes and bright day aesthetics."
      ],
      techStack: ["Python", "Tkinter", "OpenWeather API", "Requests"],
      github: "https://github.com/ke961",
      badge: "Desktop GUI",
      accentColor: "indigo"
    },
    {
      id: "whatsapp-automation-bot",
      title: "WhatsApp Automation Bot",
      category: "Desktop & Automation",
      subtitle: "Python Automated Message Scheduling System",
      featured: false,
      metrics: [
        { label: "Core Library", value: "PyWhatKit" },
        { label: "Automation", value: "Scheduled Tasks" }
      ],
      description: "Python-based automation script for scheduling and delivering automated WhatsApp text messages and media broadcasts seamlessly.",
      details: [
        "Eliminated repetitive manual communication tasks by scheduling automated triggers based on set timestamps.",
        "Handled browser automation hooks with error recovery and status log generation."
      ],
      techStack: ["Python", "PyWhatKit", "Browser Automation"],
      github: "https://github.com/ke961",
      badge: "Automation Bot",
      accentColor: "emerald"
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science & Engineering (CSE)",
      institution: "Independent University, Bangladesh (IUB)",
      period: "2022 – Present",
      status: "In Progress",
      description: "Focusing on Deep Learning, Software Engineering, Database Systems, Computer Vision, and Web Architectures.",
      details: [
        "Built multiple full-stack and machine learning projects.",
        "Active contributor in software design and algorithmic problem solving."
      ]
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Uttara High School and College",
      period: "2021",
      status: "Completed",
      description: "Science Discipline with strong foundation in Mathematics, Physics, and ICT."
    }
  ],

  certifications: [
    {
      title: "CCNA: Introduction to Networks",
      issuer: "Cisco Networking Academy · Independent University, Bangladesh",
      date: "Aug 2026",
      certId: "fa4b9f5d-56c3-4511-a37e-7822d502d567",
      skillsCovered: ["Network Fundamentals", "IP Addressing & Subnetting", "Ethernet Switches & Routers", "Network Security Basics"]
    }
  ],

  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Software Engineering",
    "Database Management Systems",
    "System Analysis & Design",
    "Artificial Intelligence",
    "Web Development",
    "Computer Networks"
  ],

  reference: {
    name: "Hossain Md Shakhawat, PhD",
    title: "Associate Professor, Independent University, Bangladesh",
    email: "md.shakhawat@kochi-tech.ac.jp",
    phone: "+8801799916564"
  }
};
