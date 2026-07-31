export interface Project {
  slug: string;
  title: string;
  category: "UI/UX Design" | "Development";
  type: string; // e.g. "Mobile App", "Dashboard", "Web App"
  description: string;
  image: string;
  tools: string[];
  year: string;
  duration?: string;
  role?: string;
  githubUrl?: string;
  figmaUrl?: string;
  caseStudy?: {
    problem: string;
    goal: string;
    userResearch: {
      intro: string;
      points: string[];
      chartData?: { name: string; value: number; color: string }[];
    };
    userPersona: {
      name: string;
      age: number;
      role: string;
      image: string;
      bio: string;
      goals: string[];
      frustrations: string[];
    };
    userFlow: string[];
    wireframesIntro?: string;
    finalDesignIntro?: string;
    prototypeUrl?: string;
    whatILearned: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: "wedding-invitation-platform",
    title: "Wedding Invitation Platform",
    category: "UI/UX Design",
    type: "UI/UX & Full-Stack Web Application",
    description: "A premium digital wedding invitation platform featuring personalized guest experiences and real-time RSVP analytics.",
    image: "/projects/wedinvite.png",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Figma"],
    year: "2024",
    duration: "4 weeks",
    role: "UI/UX & Full-Stack Developer",
    githubUrl: "https://github.com/yuhanzee/wedding-invitation-platform",
    figmaUrl: "https://figma.com",
    caseStudy: {
      problem: "Traditional paper invitations lack interactive features, are slow to distribute, and make tracking RSVP responses a stressful administrative hassle for couples.",
      goal: "Design and develop a digital wedding portal with customizable invitations, RSVP tracking, Google Maps, count-down timer, gallery, and super admin analytics dashboard.",
      userResearch: {
        intro: "I surveyed couples planning their weddings to identify administrative friction and guest communication points.",
        points: [
          "Tracking guest food and attendance replies manually is time-consuming",
          "Providing maps and schedule updates last-minute is difficult",
          "Guests appreciate personalized online details and galleries"
        ],
        chartData: [
          { name: "Attendance RSVP", value: 50, color: "#7C3AED" },
          { name: "Guest Directions", value: 30, color: "#F9D949" },
          { name: "Gallery Updates", value: 20, color: "#EC4899" }
        ]
      },
      userPersona: {
        name: "Shalini Perera",
        age: 26,
        role: "Marketing Executive",
        image: "/avatar.png",
        bio: "Shalini is planning her wedding and wants a centralized, elegant portal to invite and coordinate with guests.",
        goals: [
          "Share Google Maps directions directly",
          "Track RSVPs and diet preferences in real-time",
          "Manage dashboard updates on the go"
        ],
        frustrations: [
          "Rigid, boring paper invitation templates",
          "Manual email follow-ups for attendance numbers",
          "Fragmented channels for photos and updates"
        ]
      },
      userFlow: ["Browse Invites", "Input Details & Guest List", "Generate Invitation Link", "Guest Visits Invite Page", "Submits RSVP Form", "Couple tracks replies on dashboard"],
      wireframesIntro: "I mapped wireframes focusing on a mobile-first invitation page layout and a simple desktop super admin control dashboard.",
      finalDesignIntro: "The final design features elegant typography, smooth scrolling animations, and soft lavender and pink accents for a celebratory feel.",
      prototypeUrl: "https://figma.com",
      whatILearned: "I learned how to sync Figma component variables directly with Next.js styles, maintaining consistent borders, padding, and hover states."
    }
  },
  {
    slug: "mediheaven-healthcare",
    title: "MediHeaven healthcare Portal",
    category: "Development",
    type: "Full-Stack Healthcare Platform",
    description: "A secure medical inventory and role-based healthcare management platform supporting admins, doctors, and suppliers.",
    image: "/projects/mediheaven.png",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Bootstrap 5", "JWT"],
    year: "2024",
    duration: "5 weeks",
    role: "Inventory & Supplier Module Dev",
    githubUrl: "https://github.com/Ravidujee19/MediHeaven",
    caseStudy: {
      problem: "Medical administrators struggle with outdated, slow supply interfaces, causing delayed stock re-orders and critical drug shortages.",
      goal: "Develop the Inventory Management Module and Supplier Product Module, allowing suppliers to manage products securely and tracking stock levels.",
      userResearch: {
        intro: "I observed logistical workflows in clinic back-offices and interviewed healthcare supply managers.",
        points: [
          "Low-stock items go unnoticed without visual alerts",
          "Suppliers need a self-service panel to update product lists",
          "Role-based security is essential to protect healthcare records"
        ],
        chartData: [
          { name: "Stock Tracking", value: 45, color: "#7C3AED" },
          { name: "Supplier Portal", value: 35, color: "#F9D949" },
          { name: "Auth Security", value: 20, color: "#EC4899" }
        ]
      },
      userPersona: {
        name: "Dr. Rohitha Silva",
        age: 42,
        role: "Clinical Administrator",
        image: "/avatar.png",
        bio: "Dr. Rohitha manages logistics and clinical supplies, requiring error-free monitoring panels.",
        goals: [
          "Review stock alerts at a glance",
          "Approve supplier product uploads with one click",
          "Generate audit reports instantly"
        ],
        frustrations: [
          "Cluttered inventory layouts",
          "Manual spreadsheet stock imports",
          "Lack of visual stock indicator alerts"
        ]
      },
      userFlow: ["Admin Logs In", "Navigates to Inventory Module", "Checks Low Stock Warnings", "Supplier uploads product sheet", "Admin approves and updates database"],
      wireframesIntro: "The layout focuses on dense product lists with clear status badges, a side-bar menu, and simple supplier file uploading zones.",
      finalDesignIntro: "The interface employs contrasting green, red, and yellow status pills, clean tables, and secure forms to ensure error-free task completions.",
      prototypeUrl: "https://github.com/Ravidujee19/MediHeaven",
      whatILearned: "I learned how to write robust database logic in Express/Mongoose, handle file uploads safely, and secure routing paths using JWT tokens."
    }
  },
  {
    slug: "smart-waste-management",
    title: "Smart Waste Management System",
    category: "Development",
    type: "Full-Stack Web Application",
    description: "A community waste classification, collection scheduling, and recycling rewards system backed by secure REST APIs.",
    image: "/projects/greenscan.png",
    tools: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "REST API", "Git", "GitHub"],
    year: "2024",
    duration: "4 weeks",
    role: "Full-Stack Developer",
    githubUrl: "https://github.com/yuhanzee/Smart-Waste-Management-System",
    caseStudy: {
      problem: "Municipal waste collection lacks scheduling tools, leading to missed pickups, poor trash classification, and zero recycling incentives.",
      goal: "Build a waste management system with scheduling, waste categorization, report logs, and a points reward portal.",
      userResearch: {
        intro: "I interviewed municipal officers and neighborhood residents about their recycling habits and collection complaints.",
        points: [
          "People miss collection trucks because schedules change",
          "Sorting rules are confusing and hard to remember",
          "A gamified reward program increases recycling motivation"
        ],
        chartData: [
          { name: "Scheduling Updates", value: 40, color: "#7C3AED" },
          { name: "Sorting Guides", value: 35, color: "#F9D949" },
          { name: "Rewards Program", value: 25, color: "#EC4899" }
        ]
      },
      userPersona: {
        name: "Amara Perera",
        age: 34,
        role: "Community Advocate",
        image: "/avatar.png",
        bio: "Amara coordinates neighborhood clean-ups and wants to make sorting recycling easy and fun for her kids.",
        goals: [
          "Check truck arrival times online",
          "Sort plastics, metals, and paper correctly",
          "Redeem recycling points for grocery vouchers"
        ],
        frustrations: [
          "Missed trucks causing garbage to pile up",
          "Unclear waste sorting rules",
          "No local recycling rewards"
        ]
      },
      userFlow: ["Register/Login", "Schedule Waste Pickup", "Driver Confirms Schedule", "User hands over categorized waste", "Driver updates weight and points on app", "User redeems points in reward shop"],
      wireframesIntro: "I designed a dashboard displaying schedules, weight tracking, and a points shop, with a driver panel to update waste logs.",
      finalDesignIntro: "The application features clean sorting tabs, a calendar picker, and points history lists styled in a nature-friendly layout.",
      prototypeUrl: "https://github.com/yuhanzee/Smart-Waste-Management-System",
      whatILearned: "I gained hands-on experience structuring RESTful routing models in Node, writing transactional queries, and building secure JWT admin logs."
    }
  },
  {
    slug: "localloop-mobile-app",
    title: "LocalLoop Mobile Application",
    category: "UI/UX Design",
    type: "SDG 08 Mobile Application",
    description: "A gamified React Native app promoting skill development, productivity, and local youth employment networks.",
    image: "/projects/SDG8.png",
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "Figma"],
    year: "2024",
    duration: "6 weeks",
    role: "UI/UX & Mobile Developer",
    githubUrl: "https://github.com/Dilmith-Ranasinghe518/LocalLoop",
    figmaUrl: "https://figma.com",
    caseStudy: {
      problem: "Youth struggle to find local mentors, lack access to guided skill development modules, and miss structured portals to track career growth.",
      goal: "Develop a mobile app aligned with UN SDG 08 featuring user authentication, real-time chat, challenge achievements, and profile systems.",
      userResearch: {
        intro: "I surveyed college students and junior engineers about how they study and connect with regional developers.",
        points: [
          "Self-directed learning is hard without milestone badges",
          "Real-time feedback from experts keeps developers motivated",
          "Mobile-first dashboards are preferred for quick chats"
        ],
        chartData: [
          { name: "Progress Tracking", value: 45, color: "#7C3AED" },
          { name: "Expert Chat", value: 35, color: "#F9D949" },
          { name: "Goal Rewards", value: 20, color: "#EC4899" }
        ]
      },
      userPersona: {
        name: "Kavinda Bandara",
        age: 29,
        role: "Technical Mentor",
        image: "/avatar.png",
        bio: "Kavinda trains local youth and wants an organized mobile platform to assign coding tasks and text students.",
        goals: [
          "Chat with junior students in real-time",
          "Review student challenge completions",
          "Assign localized practice modules"
        ],
        frustrations: [
          "Fragmented channels for code feedback",
          "Difficult to track student task milestones",
          "Clunky mobile chat interfaces"
        ]
      },
      userFlow: ["Create Account", "Choose Skill Stream", "Start Milestone Challenge", "Ask questions in Mentor Chat", "Submit Challenge Link", "Earn Skill Badge"],
      wireframesIntro: "The design maps out clean dashboard grids, a messaging panel, and badge icons to celebrate user progression.",
      finalDesignIntro: "I designed the mobile interface in Figma, focusing on clean dark components, vibrant status tabs, and smooth transitions.",
      prototypeUrl: "https://figma.com",
      whatILearned: "I learned mobile layout rules using React Native stylesheets, configuring Firebase real-time database logs, and creating SVG icons in Figma."
    }
  },
  {
    slug: "citybus-management",
    title: "City Bus Management Portal",
    category: "Development",
    type: "PHP Web Application",
    description: "A web-based bus transit system with role-based dashboard access for admins, booking clerks, and drivers.",
    image: "/projects/citybus.png",
    tools: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Apache (XAMPP)"],
    year: "2023",
    duration: "3 weeks",
    role: "Backend & Database Developer",
    githubUrl: "https://github.com/Dilmith-Ranasinghe518/CityBus",
    caseStudy: {
      problem: "Manual scheduling and cash seat bookings lead to overbooked bus trips, route confusion, and passenger check-in delays.",
      goal: "Build a seat booking and routing platform with unique dashboards for admin managers, drivers, and ticketing users.",
      userResearch: {
        intro: "I interviewed terminal managers and drivers to outline manual transit scheduling pain points.",
        points: [
          "Manual logbook mistakes cause booking overlaps",
          "Drivers need to view route schedules and shifts online",
          "Users want a quick ticket seat checkout flow"
        ],
        chartData: [
          { name: "Seat Reservation", value: 50, color: "#7C3AED" },
          { name: "Shift Schedules", value: 30, color: "#F9D949" },
          { name: "Route Maps", value: 20, color: "#EC4899" }
        ]
      },
      userPersona: {
        name: "Niluni Perera",
        age: 31,
        role: "Ticket Dispatcher",
        image: "/avatar.png",
        bio: "Niluni coordinates daily passenger bookings and bus assignments at the station terminal.",
        goals: [
          "Check bus seat logs dynamically",
          "Assign drivers to transit lines online",
          "Print ticket receipts instantly"
        ],
        frustrations: [
          "Seat booking overlaps from verbal requests",
          "No quick way to contact bus drivers",
          "Unannounced route updates"
        ]
      },
      userFlow: ["Customer selects route & date", "Chooses seat number", "Checks out reservation", "Driver logs in to check route schedule", "Admin monitors booking list and logs"],
      wireframesIntro: "The layout maps seat layouts visually as grids, alongside tables for schedule management.",
      finalDesignIntro: "The UI uses simple responsive grid containers and structured forms to make navigation easy for terminal staff.",
      prototypeUrl: "https://github.com/Dilmith-Ranasinghe518/CityBus",
      whatILearned: "I learned how to configure Apache local environments, design structured MySQL databases with foreign keys, and write raw SQL queries."
    }
  }
];
