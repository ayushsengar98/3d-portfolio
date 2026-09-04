// Calculate dynamic years of experience from August 2020 to current date
export const calculateExperienceYears = (): number => {
  const startDate = new Date(2020, 7, 1); // August 2020 (Month is 0-indexed: 7 = August)
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  if (
    today.getMonth() < startDate.getMonth() ||
    (today.getMonth() === startDate.getMonth() && today.getDate() < startDate.getDate())
  ) {
    years--;
  }
  return years;
};

export const expYears = calculateExperienceYears();

export const resumeData = {
  name: "Ayush Sengar",
  title: "Software Engineer | Backend / Java | SDET Background",
  contact: {
    phone: "8182000718",
    email: "ayushsengar96@gmail.com",
    location: "New Delhi, India"
  },
  about: `Software Engineer with ${expYears}+ years of experience, including strong backend Java development expertise and a solid SDET foundation. Experienced in designing and optimising RESTful APIs, improving system performance, and working with large-scale enterprise payroll and HR platforms. Proven at leveraging AI-assisted development and automation to accelerate delivery, improve code quality, and reduce issue-resolution time. Adept at building scalable, reliable systems aligned with business objectives and user experience.`,
  experience: [
    {
      role: "Software Engineer 2",
      company: "Ultimate Kronos Group",
      period: "06/2024 - Present",
      location: "Noida, UP",
      description: "Leading technology company focusing on workforce management and HR services",
      highlights: [
        "Designed, enhanced, and optimised RESTful APIs using Java and Spring Boot, improving payroll processing and taxation workflows while ensuring high performance, scalability, and reliability.",
        "Boosted feature dev, refactoring, defect resolution with AI, automation, and monitoring. Enhanced delivery timelines and engineering output.",
        "Investigated code and SQL performance issues, optimising queries and resolving integration challenges in a complex monolithic architecture to improve system performance and maintain 99.9% uptime.",
        "Applied AI-driven debugging, log analysis, and automation techniques to improve root cause analysis and achieve 30–40% faster issue resolution.",
        "Designed and developed an AI-enabled payroll support chatbot for debugging workflows, automating repetitive tasks, and increasing engineering productivity.",
        "Gained extensive experience with complex business rules and mission-critical payroll logic in large-scale monolithic systems, supporting stability with effective monitoring and timely fixes."
      ]
    },
    {
      role: "Software QA Engineer 2",
      company: "Ultimate Kronos Group",
      period: "02/2024 - 06/2024",
      location: "Noida, UP",
      description: "Leading technology company focusing on workforce management and HR services",
      highlights: [
        "Improved test coverage and QA processes, identifying critical bugs 40% faster and increasing overall software quality by 30% in 4 months.",
        "Developed and maintained API and integration test suites for backend services.",
        "Validated payroll flows, tax-related calculations, and end-to-end business scenarios using automated test frameworks.",
        "Reduced manual testing efforts while improving release confidence and production stability.",
        "Proactively identified high-impact defects before deployment, strengthening overall system quality.",
        "Implemented test automation strategies and robust test plans, reducing manual effort by 50%."
      ]
    },
    {
      role: "Software Development Engineer in Test - 1 and 2",
      company: "Vahan Technologies India Private Limited",
      period: "05/2022 - 02/2024",
      location: "Bengaluru, KA",
      description: "Innovative company focusing on AI and technology solutions for job applications",
      highlights: [
        "Led end-to-end testing of WhatsApp chatbot, Android app, and web platform for job application and onboarding journeys.",
        "Created and executed UI, functional, regression, integration, UAT, and API tests (Postman), including chatbot NLP and multistep flows.",
        "Built automation for repetitive scenarios (Selenium/Appium/Java) and ensured consistent UX across devices and browsers."
      ]
    },
    {
      role: "Graduate Engineer Trainee and Senior Executive",
      company: "Vodafone (Vois)",
      period: "08/2020 - 05/2022",
      location: "Pune, MH",
      description: "Global telecommunications company providing a wide range of communication services",
      highlights: [
        "Enhanced release stability by 80% through automation of region-specific application workflows for Ireland, ensuring full regulatory compliance.",
        "Increased testing efficiency by 60% by implementing test automation across Web, iOS, and Android platforms, significantly reducing regression cycle time."
      ]
    }
  ],
  skills: {
    "Backend & Programming": ["Java", "SQL (MySQL)", "REST APIs"],
    "Frameworks": ["Spring Boot", "Spring MVC", "Spring Data JPA (Hibernate)"],
    "AI-Assisted Engineering & Automation": [
      "AI-Assisted Development",
      "AI-Driven Debugging",
      "AI-Powered Internal Tools"
    ],
    "Testing": ["Selenium", "Appium", "Postman"],
    "Frontend (Exposure)": ["React", "Next.js"]
  },
  projects: [
    {
      name: "RAQTKOSH (Next.js Full-Stack)",
      description: "Developed AI blood matching to link donors/recipients by compatibility, availability, urgency, boosting match efficiency.",
      url: "https://github.com/raqtkosh/raqtkosh"
    },
    {
      name: "Airport Security System",
      description: "Automated authentication boosts reliability, cuts manual checks.",
      url: "https://github.com/ayushsengar98"
    },
    {
      name: "Usha Medicals (Full-Stack E-Commerce)",
      description: "Created healthcare e-commerce platform with React/Next.js, Java Spring Boot, PostgreSQL. Integrated Razorpay for secure payments, Shiprocket for logistics, AWS S3 for media storage.",
      url: "https://www.arthritismedicine.in/"
    }
  ],
  education: [
    {
      degree: "Masters of Technology",
      institution: "BITS Pilani WILP",
      period: "08/2023 - 05/2025"
    },
    {
      degree: "Bachelor of Technology",
      institution: "SRM Institute of Science and Technology",
      period: "08/2016 - 05/2020",
      location: "Chennai, TN"
    }
  ],
  achievements: [
    {
      company: "Ultimate Kronos Group",
      description: "Received multiple performance awards (2 Bronze, 2 Silver, and 2 Appreciation recognitions) for outstanding contributions to the US Payroll Engine, AI initiatives, development excellence, and high-impact defect resolution."
    },
    {
      company: "Vahan Technologies",
      description: "5 Kudos for zero-defect feature delivery, cross-functional web/mobile automation, and consistent quality improvements."
    },
    {
      company: "Vodafone",
      description: "Company rewards for proactive learning, on-time delivery, and Innovation Platform Challenge innovation."
    }
  ]
};
