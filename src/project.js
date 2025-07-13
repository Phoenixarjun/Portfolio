const projects = [
  {
    id: 1,
    name: "Fitsync",
    description:
      "During my gym sessions, I struggled to track calories, attendance, and maintain a personalized diet plan, which led to fatigue and lost motivation. To solve this, I built Fitsync—a full-stack, generative AI-powered web app that tracks gym attendance, calories burned by cardio and weight training, and creates specialized diet plans based on user preferences. It features interactive charts for progress visualization and a personalized AI chatbot that answers health and fitness questions from curated documentation. Fitsync is a dynamic, responsive tool designed to keep fitness enthusiasts motivated and organized.",
    shortDescription:
      "A generative AI-powered fitness tracker offering personalized workout, diet plans, and progress insights.",
    linkToTheSite: "https://fit-sync-sepia.vercel.app/",
    cardImg: "/images/Projects/Fitsync/HomePage.png",
    image: "/images/Projects/Fitsync/CoverPage.png",
    technology: [
      {
        techIcon: "/logo/WebDevelopment/nextjs.svg",
        techName: "Next.js",
        techDescription:
          "Next.js is a React framework enabling server-side rendering and static site generation for fast, scalable web apps.",
      },
      {
        techIcon: "/logo/WebDevelopment/radixui.svg",
        techName: "Radix UI",
        techDescription:
          "Radix UI provides accessible, unstyled components for building high-quality web interfaces quickly.",
      },
      {
        techIcon: "/logo/WebDevelopment/tailwindcss.svg",
        techName: "Tailwind CSS",
        techDescription:
          "Tailwind CSS is a utility-first CSS framework for rapid custom styling directly in HTML.",
      },
      {
        techIcon: "/logo/WebDevelopment/MongoDB.png",
        techName: "MongoDB",
        techDescription:
          "MongoDB is a scalable NoSQL database storing flexible JSON-like documents.",
      },
      {
        techIcon: "/logo/WebDevelopment/NodeJs.png",
        techName: "Node.js",
        techDescription:
          "Node.js enables backend JavaScript runtime for scalable server-side applications.",
      },
      {
        techIcon: "/logo/AI/Pinecone.png",
        techName: "Pinecone",
        techDescription:
          "Pinecone is a vector database for efficient similarity search and AI-powered data retrieval.",
      },
      {
        techIcon: "/logo/AI/Langchain.svg",
        techName: "LangChain",
        techDescription:
          "LangChain facilitates building LLM-powered applications with data chaining and retrieval.",
      },
      {
        techIcon: "/logo/AI/gemini.png",
        techName: "Gemini",
        techDescription:
          "Gemini provides advanced AI models enabling intelligent content generation and interaction.",
      },
      {
        techIcon: "/logo/WebDevelopment/Git.png",
        techName: "Git",
        techDescription:
          "Git is a distributed version control system for collaborative software development.",
      },
    ],
    objectives: [
      { name: "Self-Motivation" },
      { name: "Gym Progress Tracking" },
      { name: "Personalized Fitness & Diet Planning" },
      { name: "Generative AI Chatbot Integration" },
    ],
    domains: ["Full Stack Web Development", "Generative AI"],
    domainImg: "/logo/webDevelopment.png",
    collaboration: "Individual",
    screanshots: [
      {
        img: "/images/Projects/Fitsync/HomePage.png",
        title: "Personalized Fitness Dashboard",
      },
      {
        img: "/images/Projects/Fitsync/Progress.png",
        title: "Workout & Progress Analytics",
      },
      {
        img: "/images/Projects/Fitsync/Workout.png",
        title: "Cardio & Strength Tracker",
      },
      {
        img: "/images/Projects/Fitsync/Diet.png",
        title: "AI-Powered Diet Planner",
      },
    ],
  },
  {
  id: 2,
  name: "NextStep AI",
  description: "NextStep AI is a personalized, agent-powered career copilot designed to guide students from confusion to career readiness. Built with LangGraph, LangChain, and LLMs, it helps users identify the right domain, build skills, optimize resumes, discover ideal jobs, prepare for interviews, and create content — all through intelligent multi-agent orchestration. From first-year students to aspiring professionals, it bridges the gap between ambition and actionable direction.",
  shortDescription: "AI-powered multi-agent career copilot that helps students plan, prepare, apply, and grow in their career journey.",
  linkToTheSite: "",
  cardImg: "/images/Projects/NextstepAI/NextstepAI.png",
  image: "/images/Projects/NextstepAI/NextstepAICover.png",
  technology: [
    {
      techIcon: "/logo/WebDevelopment/nextjs.svg",
      techName: "Next.js",
      techDescription: "Frontend framework with dynamic routing and server-side rendering (SSR)."
    },
    {
      techIcon: "/logo/WebDevelopment/tailwindcss.svg",
      techName: "Tailwind CSS",
      techDescription: "Utility-first CSS framework for sleek, responsive UI styling."
    },
    {
      techIcon: "/logo/WebDevelopment/typescript.png",
      techName: "TypeScript",
      techDescription: "Type-safe frontend development to reduce runtime errors and improve maintainability."
    },
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Core backend logic handling AI agents, API integration, and orchestration flows."
    },
    {
      techIcon: "/logo/AI/FastAPI.png",
      techName: "FastAPI",
      techDescription: "High-performance backend API framework powering agent interaction and LLM endpoints."
    },
    {
      techIcon: "/logo/AI/Langchain.svg",
      techName: "LangChain",
      techDescription: "Framework for building LLM-powered applications with memory, tools, and chaining."
    },
    {
      techIcon: "/logo/AI/langgraph.png",
      techName: "LangGraph",
      techDescription: "Multi-agent orchestration framework for defining agent graphs and message flows."
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Gemini Pro",
      techDescription: "LLM used for summarization, multi-turn reasoning, and agent response generation."
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "GitPython",
      techDescription: "Enables repo cloning and parsing for analyzing GitHub repositories dynamically."
    },
    {
      techIcon: "/logo/WebDevelopment/framermotion.png",
      techName: "Framer Motion",
      techDescription: "Provides seamless, physics-based UI animations for fluid interaction."
    }
  ],
  objectives: [
    { name: "Guide users to a domain via personalized learning roadmaps" },
    { name: "Optimize resumes with ATS and role-specific feedback" },
    { name: "Match users with real-time job listings using AI scoring" },
    { name: "Simulate interviews with tips and real-time feedback" },
    { name: "Generate content for LinkedIn, GitHub, and personal branding" }
  ],
  domains: ["AI/ML", "Career Tech", "EdTech", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/NextstepAI/NextstepAI.png",
      title: "NextStep AI"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIAgents.png",
      title: "NextStep Agents"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIPlannerAgent.png",
      title: "Planner Agent — Personalized Roadmap"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIInterviewAgent.png",
      title: "Interview Preparation Agent"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIResumeAgent.png",
      title: "Resume Optimization Agent"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIJobAgent.png",
      title: "Job Discovery Agent"
    },
    {
      img: "/images/Projects/NextstepAI/NextstepAIContentAgent.png",
      title: "Content Creation Agent"
    }
  ]
},
{
  id: 3,
  name: "SalesNexus",
  description: "SalesNexus is a full-stack AI-powered forecasting platform that combines machine learning models with rich dashboards and a modern web application. It is built to predict sales across different geographies and product families using real-world data and to serve insights through a seamless interface powered by Next.js, TailwindCSS, and TypeScript.",
  shortDescription: "Intelligent sales forecasting and analytics platform with full-stack ML, dashboards, and web UI.",
  linkToTheSite: "",
  cardImg: "/images/Projects/SalesNexus/SalesNexus.png",
  image: "/images/Projects/SalesNexus/SalesNexusCover.png",
technology: [
  {
    techIcon: "/logo/AI/python.svg",
    techName: "Python",
    techDescription: "Python is a versatile language powering all ML logic and backend orchestration due to its rich ecosystem and rapid prototyping capability."
  },
  {
    techIcon: "/logo/WebDevelopment/nextjs.svg",
    techName: "Next.js",
    techDescription: "Next.js is a Framework for building fast, SEO-friendly UIs; used for rendering the web interface and routing user interactions efficiently."
  },
  {
    techIcon: "/logo/WebDevelopment/tailwindcss.svg",
    techName: "Tailwind CSS",
    techDescription: "Tailwind CSS is a Utility-first styling framework that enabled rapid development of a clean, responsive, and modern interface."
  },
  {
    techIcon: "/logo/WebDevelopment/typescript.png",
    techName: "TypeScript",
    techDescription: "TypeScript is a Adds static typing to JavaScript, helping prevent runtime errors and improving frontend scalability and maintainability."
  },
  {
    techIcon: "/logo/AI/Pandas.png",
    techName: "Pandas",
    techDescription: "Pandas is a Powerful data manipulation library used for cleaning, transforming, and preparing structured sales data for modeling."
  },
  {
    techIcon: "/logo/AI/mlflow.png",
    techName: "MLflow",
    techDescription: "MLflow is a Tool for managing ML lifecycle; used to track experiments, model versions, and metrics to ensure reproducibility and transparency."
  },
  {
    techIcon: "/logo/AI/Dash.svg",
    techName: "Dash",
    techDescription: "Dash is a Python framework for building analytical dashboards; used to create real-time interactive interfaces for internal insights."
  },
  {
    techIcon: "/logo/AI/Plotly.png",
    techName: "Plotly",
    techDescription: "Plotly is a Graphing library behind Dash; used to visualize time-series trends, predictions, and feature impacts in an intuitive way."
  },
  {
    techIcon: "/logo/AI/scikit-learn.png",
    techName: "Scikit-learn",
    techDescription: "ML utility library providing metrics, pipelines, and model evaluation tools essential for training and validation workflows."
  },
  {
    techIcon: "/logo/WebDevelopment/Git.png",
    techName: "Git",
    techDescription: "Git is a Version control system used for collaborative development, tracking changes, and managing codebase history."
  }
],
  objectives: [
    { name: "Forecast sales using advanced regression models" },
    { name: "Enable real-time analytics through Dash and Plotly" },
    { name: "Track experiments with MLflow for reproducibility" },
    { name: "Utilize DVC for data versioning and reproducibility" },
    { name: "Deliver a seamless web experience using Next.js" }
  ],
  domains: ["AI/ML", "Analytics", "SalesTech", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/SalesNexus/SalesNexus.png",
      title: "SalesNexus Homepage"
    },
    {
      img: "/images/Projects/SalesNexus/SalesNexusPrediction.png",
      title: "SalesNexus Prediction"
    },
    {
      img: "/images/Projects/SalesNexus/SalesNexusInfo.png",
      title: "SalesNexus Information"
    },
    {
      img: "/images/Projects/SalesNexus/SalesNexusMLFlow.png",
      title: "MLflow Dashboard"
    },
    {
      img: "/images/Projects/SalesNexus/SalesNexusDashboard1.png",
      title: "Data Analytics Dashboard"
    },
    {
      img: "/images/Projects/SalesNexus/SalesNexusDashboard2.png",
      title: "Data Analytics Dashboard"
    }
  ]
},
  {
    id: 4,
    name: "Rearticle",
    description:
      "During my internship, I developed Rearticle, a No-code LaTeX typesetting platform that simplifies academic writing. It helps researchers manage equations, references, and content without complex LaTeX code, ensuring papers meet journal standards. Working with the Genik team, I gained hands-on experience in ReactJS, Tailwind CSS, Firebase, Radix UI, and Bitbucket, enhancing both frontend and backend development skills.",
    shortDescription:
      "A No-code LaTeX typesetting platform designed to simplify academic writing, developed using ReactJS, Tailwind CSS, Firebase, and Bitbucket.",
    linkToTheSite: "https://www.rearticle.io/",
    cardImg: "/images/Projects/Rearticle/LandingPage.png",
    image: "/images/Projects/Rearticle/RearticleCover.svg",
    technology: [
      {
        techIcon: "/logo/WebDevelopment/react.png",
        techName: "ReactJS",
        techDescription:
          "ReactJS is a popular JavaScript library for building user interfaces, known for its component-based architecture and efficient rendering.",
      },
      {
        techIcon: "/logo/WebDevelopment/tailwindcss.svg",
        techName: "Tailwind CSS",
        techDescription:
          "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs without leaving your HTML.",
      },
      {
        techIcon: "/logo/WebDevelopment/firebase.png",
        techName: "Firebase",
        techDescription:
          "Firebase is a platform developed by Google for creating mobile and web applications, providing a variety of tools and services to help you develop high-quality apps.",
      },
      {
        techIcon: "/logo/WebDevelopment/radixui.svg",
        techName: "Radix UI",
        techDescription:
          "Radix UI provides accessible, high-quality UI components to help you build robust web applications quickly.",
      },
      {
        techIcon: "/logo/bitbucket.png",
        techName: "Bitbucket",
        techDescription:
          "Bitbucket is a Git repository management solution designed for professional teams, offering distributed version control, collaborative features, and more.",
      },
    ],
    objectives: [
      { name: "Internship" },
      { name: "Practical Implementation" },
      { name: "AI-Powered LaTeX Automation" },
      { name: "Create/Convert Docs Without LaTeX" },
      { name: "Boost Productivity via ReMath & ReSite" },
    ],

    domains: ["Full Stack Web Development"],
    collaboration: "Team",
    screanshots: [
      {
        img: "/images/Projects/Rearticle/LandingPage.png",
        title: "Landing Page",
      },
      { img: "/images/Projects/Rearticle/Dashboard.png", title: "Dashboard" },
      {
        img: "/images/Projects/Rearticle/Editor.png",
        title: "Document Editor",
      },
      { img: "/images/Projects/Rearticle/Account.png", title: "Account" },
    ],
  },
  {
    id: 5,
    name: "SignComm",
    description:
    "SignComm is my final year project aimed at empowering the deaf and mute community by enabling seamless communication through real-time sign language translation. It bridges the gap between signers and non-signers by converting gestures into readable text and audible speech, fostering inclusion in everyday interactions. This innovation eliminates the dependency on human translators, promoting independence, accessibility, and equal participation across social, educational, and professional environments.",
    shortDescription:
      "An AI-driven sign language translator enabling real-time communication between deaf/mute individuals and the hearing population.",
    linkToTheSite: "",
    cardImg: "/images/Projects/SignComm/LandingPage.png",
    image: "/images/Projects/SignComm/SignCommCover.png",
    technology: [
      {
        techIcon: "/logo/WebDevelopment/html.svg",
        techName: "HTML",
        techDescription:
          "HTML is the standard markup language used to create the structure of web pages.",
      },
      {
        techIcon: "/logo/WebDevelopment/css.svg",
        techName: "CSS",
        techDescription:
          "CSS is used for designing and customizing the look and feel of web pages.",
      },
      {
        techIcon: "/logo/WebDevelopment/javascript.svg",
        techName: "JavaScript",
        techDescription:
          "JavaScript enables interactivity and dynamic behavior on web pages.",
      },
      {
        techIcon: "/logo/AI/python.svg",
        techName: "Python",
        techDescription:
          "Python powers the backend logic, especially AI and ML model integration.",
      },
      {
        techIcon: "/logo/WebDevelopment/NodeJs.png",
        techName: "NodeJS",
        techDescription:
          "Node.js is used for managing backend APIs and real-time interactions.",
      },
      {
        techIcon: "/logo/WebDevelopment/firebase.png",
        techName: "Firebase",
        techDescription:
          "Firebase is used for authentication, real-time database, and hosting services.",
      },
            {
        techIcon: "/logo/WebDevelopment/Git.png",
        techName: "Git",
        techDescription:
          "Git is a distributed version control system for collaborative software development.",
      },
      {
        techIcon: "/logo/AI/OpenCV.webp",
        techName: "OpenCV",
        techDescription:
          "OpenCV powers the computer vision engine for hand gesture detection and tracking.",
      },
      {
        techIcon: "/logo/AI/Tensorflow.png",
        techName: "TensorFlow",
        techDescription:
          "TensorFlow is used for training and deploying the sign language recognition models.",
      },
      {
        techIcon: "/logo/AI/Flask.png",
        techName: "Flask",
        techDescription:
          "Flask serves as the Python micro-framework for routing, APIs, and model inference.",
      },
      {
        techIcon: "/logo/AI/gemini.png",
        techName: "Gemini",
        techDescription:
          "Gemini provides NLP enhancements for paraphrasing and improving translation accuracy.",
      },
    ],
    objectives: [
      { name: "Final Year Project" },
      { name: "AI Sign Language Translator" },
      { name: "Inclusive Communication" },
      { name: "Real-Time Gesture to Speech/Text" },
      { name: "Multi-Language Translator" },
    ],
    domains: ["AI/ML", "Computer Vision", "Full Stack Web Development"],
    collaboration: "Team",
    screanshots: [
      {
        img: "/images/Projects/SignComm/LandingPage.png",
        title: "Landing Page",
      },
      {
        img: "/images/Projects/SignComm/Translator.png",
        title: "Sign Translator",
      },
      {
        img: "/images/Projects/SignComm/Text2Speech.png",
        title: "Text & Voice Output",
      },
      {
        img: "/images/Projects/SignComm/SignLearn.png",
        title: "SignLearn",
      },
    ],
  },
{
  id: 6,
  name: "SmartSage",
  description:
    "SmartSage is a powerful conversational AI web app that empowers users to interact with uploaded documents or URLs using natural language queries. It extracts and processes content from PDF, DOCX, and TXT files or webpages and uses Gemini AI to answer questions in real time. Designed for researchers, students, and professionals, SmartSage turns passive content into dynamic dialogue.",
  shortDescription:
    "Conversational AI tool for querying documents and web content using Gemini-powered NLP.",
  linkToTheSite: "",
  cardImg: "/images/Projects/SmartSage/SmartSage.png",
  image: "/images/Projects/SmartSage/SmartSageCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python powers the backend logic for document parsing and AI interaction.",
    },
    {
      techIcon: "/logo/AI/Streamlit.png",
      techName: "Streamlit",
      techDescription: "Streamlit is used to build the interactive web app with Python.",
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Gemini",
      techDescription: "Gemini provides advanced NLP capabilities for processing and answering queries.",
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription: "Git is used for version control and collaborative development.",
    }
  ],
  objectives: [
    { name: "Document Q&A" },
    { name: "Conversational AI" },
    { name: "Gemini Integration" },
    { name: "Real-Time Interaction" },
    { name: "Knowledge Summarization" }
  ],
  domains: ["AI/ML", "NLP", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/SmartSage/SmartSage.png",
      title: "SmartSage App",
    }
  ]
},
{
  id: 7,
  name: "Waste Detection Project",
  description: "An AI-powered waste classification system using YOLOv5 and Flask, capable of detecting 13 categories of waste in both uploaded images and real-time webcam streams. Built with PyTorch and ONNX for high-speed inference, and wrapped with a user-friendly web interface using HTML, CSS, and jQuery.",
  shortDescription: "YOLOv5-based real-time waste detection app with Flask and ONNX runtime.",
  linkToTheSite: "",
  cardImg: "/images/Projects/WasteDetection/WasteDetection.png",
  image: "/images/Projects/WasteDetection/WasteDetectionCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python powers the backend logic and model orchestration due to its rich ecosystem in AI and computer vision."
    },
    {
      techIcon: "/logo/WebDevelopment/html.svg",
      techName: "HTML5",
      techDescription: "HTML5 structures the frontend UI for uploading images and viewing detection results."
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS3",
      techDescription: "CSS3 is used for styling and enhancing the visual responsiveness of the user interface."
    },
    {
      techIcon: "/logo/WebDevelopment/jQuery.png",
      techName: "jQuery",
      techDescription: "jQuery simplifies DOM manipulation and handles real-time webcam interactions on the frontend."
    },
    {
      techIcon: "/logo/AI/Flask.png",
      techName: "Flask",
      techDescription: "Flask is the lightweight backend framework used to serve the detection API and web interface."
    },
    {
      techIcon: "/logo/AI/PyTorch.png",
      techName: "PyTorch",
      techDescription: "PyTorch enables model training and conversion to ONNX for optimized deployment."
    },
    {
      techIcon: "/logo/AI/Ultralytics.png",
      techName: "YOLOv5",
      techDescription: "YOLOv5 is the core object detection model used to identify and classify 13 waste categories."
    },
    {
      techIcon: "/logo/AI/onnxai.svg",
      techName: "ONNX",
      techDescription: "ONNX runtime is used for fast, hardware-agnostic inference of the trained YOLOv5 model."
    }
  ],
  objectives: [
    { name: "Detect waste objects from uploaded images" },
    { name: "Support real-time waste detection via webcam" },
    { name: "Classify waste into 13 predefined categories" },
    { name: "Use ONNX for optimized inference deployment" },
    { name: "Deploy as an interactive Flask web application" }
  ],
  domains: ["AI/ML", "Computer Vision", "Sustainability", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/WasteDetection/WasteDetection.png",
      title: "Home Page"
    },
    {
      img: "/images/Projects/WasteDetection/WasteDetectionPrediction.png",
      title: "Prediction"
    },
    {
      img: "/images/Projects/WasteDetection/WasteDetectionInfo.png",
      title: "Information"
    },
  ]
},
{
  id: 8,
  name: "MediVerse",
  description: "MediVerse is an intelligent medical chatbot designed to simplify access to complex medical information by understanding and answering questions from detailed documents like research papers and reports. It empowers healthcare professionals, researchers, and patients with fast, accurate, and human-like insights, helping bridge the gap between vast medical data and practical knowledge, ultimately improving decision-making and patient care.",
  shortDescription: "AI-driven medical chatbot for semantic Q&A on medical documents using Gemini-powered NLP.",
  linkToTheSite: "",
  cardImg: "/images/Projects/MediVerse/Mediverse.png",
  image: "/images/Projects/MediVerse/MediverseCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python powers the backend logic for PDF processing, embedding generation, and API services."
    },
    {
      techIcon: "/logo/WebDevelopment/FastAPI.svg",
      techName: "FastAPI",
      techDescription: "FastAPI provides the blazing-fast framework for the chatbot's REST API."
    },
    {
      techIcon: "/logo/AI/langchain.png",
      techName: "LangChain",
      techDescription: "LangChain enables semantic retrieval and orchestration of the medical knowledge base."
    },
    {
      techIcon: "/logo/AI/pinecone.svg",
      techName: "Pinecone",
      techDescription: "Pinecone stores vector embeddings for efficient semantic search across medical documents."
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Google Gemini",
      techDescription: "Google Gemini powers advanced, dynamic medical Q&A with deep language understanding."
    }
  ],
  objectives: [
    { name: "Medical PDF Ingestion & Chunking" },
    { name: "Embedding Generation & Storage" },
    { name: "Semantic Retrieval & Q&A" },
    { name: "Dynamic AI-Powered Responses" },
    { name: "Fast & Scalable API Service" }
  ],
  domains: ["AI/ML", "NLP", "Healthcare Technology", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/MediVerse/Mediverse.png",
      title: "MediVerse Chatbot Interface"
    }
  ]
},
  {
  id: 9,
  name: "NxtTrendz",
  description:
    "NxtTrendz is a modern e-commerce React app delivering a smooth shopping experience. It features secure login authentication, dynamic product listing with API integration, versatile filtering, sorting options, and responsive UI with error handling and loading states. Built with React.js and clean CSS, it mimics a real-world storefront for seamless user engagement.",
  shortDescription:
    "A React-based e-commerce platform with dynamic API product listing, authentication, filtering, and sorting features.",
  linkToTheSite: "",
  cardImg: "/images/Projects/NxtTrendz/LandingPage.png",
  image: "/images/Projects/NxtTrendz/NxtTrendzCover.png",
  technology: [
    {
      techIcon: "/logo/WebDevelopment/react.png",
      techName: "ReactJS",
      techDescription:
        "ReactJS is a powerful JavaScript library for building interactive and dynamic user interfaces with component-based architecture.",
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS",
      techDescription:
        "CSS is used to create responsive and visually appealing designs, ensuring an intuitive user interface across devices.",
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription:
        "Git is a version control system used to manage code changes and collaborate with other developers.",
    }
  ],
  objectives: [
    { name: "Full-Stack Integration" },
    { name: "JWT-Based Authentication" },
    { name: "Dynamic API-Driven Product Display" },
    { name: "Advanced Filtering & Sorting UX" },
    { name: "Robust Error & Loading Handling" }
  ],
  domains: ["Web Development", "E-Commerce"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/NxtTrendz/LandingPage.png",
      title: "Landing Page",
    },
    {
      img: "/images/Projects/NxtTrendz/ShoppingPage.png",
      title: "Product Listing",
    },
    {
      img: "/images/Projects/NxtTrendz/ProductPage.png",
      title: "Product Page",
    },
    {
      img: "/images/Projects/NxtTrendz/MyCart.png",
      title: "Your Cart",
    }
  ]
},
{
  id: 10,
  name: "Inspectra",
  description: "Inspectra is an AI-powered source code analysis tool that transforms any GitHub repository into an interactive knowledge source. By enabling natural language queries over complex codebases, it simplifies code understanding, accelerates onboarding, and empowers developers to navigate unfamiliar projects with confidence. Inspectra bridges the gap between static source files and dynamic insights, making software comprehension faster, smarter, and more intuitive.",
  shortDescription: "AI-powered codebase insight tool enabling intelligent Q&A over any GitHub repo using Gemini and LangChain.",
  linkToTheSite: "",
  cardImg: "/images/Projects/Inspectra/Inspectra.png",
  image: "/images/Projects/Inspectra/InspectraCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python handles backend logic including repo ingestion, chunking, and API orchestration."
    },
    {
      techIcon: "/logo/AI/FastAPI.png",
      techName: "FastAPI",
      techDescription: "FastAPI powers the backend web service with performance-focused API handling."
    },
    {
      techIcon: "/logo/AI/Langchain.svg",
      techName: "LangChain",
      techDescription: "LangChain enables chunking, memory-backed Q&A, and MMR-based context retrieval."
    },
    {
      techIcon: "/logo/AI/ChromaDB.png",
      techName: "ChromaDB",
      techDescription: "ChromaDB is the vector store enabling semantic search across ingested code chunks."
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Google Gemini",
      techDescription: "Gemini powers smart, context-aware responses to natural language queries over code."
    }
  ],
  objectives: [
    { name: "GitHub Repo Ingestion & Parsing" },
    { name: "Embedding Generation with Google Embeddings" },
    { name: "Persistent Vector Storage via ChromaDB" },
    { name: "Natural Language Q&A with Memory" },
    { name: "MMR-Based Semantic Search" }
  ],
  domains: ["AI/ML", "NLP", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/Inspectra/Inspectra.png",
      title: "Inspectra App"
    }
  ]
},
{
  id: 11,
  name: "Jobby App",
  description: "Jobby App is a dynamic and fully responsive job search platform that replicates the core experience of modern job portals. It empowers users to discover and explore job opportunities through intuitive search, real-time filtering, and detailed job insights. With secure authentication, seamless API integration, and robust error handling, Jobby App streamlines the job-hunting journey, making it efficient, interactive, and accessible across devices.",
  shortDescription: "Responsive job search app with authentication, filtering, and dynamic routing using React.",
  linkToTheSite: "jobby-naresh.netlify.app",
  cardImg: "/images/Projects/Jobby/LandingPage.png",
  image: "/images/Projects/Jobby/JobbyCover.png",
  technology: [
    {
      techIcon: "/logo/WebDevelopment/react.png",
      techName: "ReactJS",
      techDescription:
        "ReactJS is a powerful JavaScript library for building interactive and dynamic user interfaces with component-based architecture.",
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS",
      techDescription:
        "CSS is used to create responsive and visually appealing designs, ensuring an intuitive user interface across devices.",
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription:
        "Git is a version control system used to manage code changes and collaborate with other developers.",
    }
  ],
  objectives: [

  { name: "Streamline job search with smart filters" },
  { name: "Deliver detailed job insights instantly" },
  { name: "Support reliable profile access and retries" },
  { name: "Ensure smooth experience across devices" }

  ],
  domains: ["Web Development", "UI/UX"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/Jobby/LoginPage.png",
      title: "Login Page"
    },
    {
      img: "/images/Projects/Jobby/LandingPage.png",
      title: "Landing Page"
    },
    {
      img: "/images/Projects/Jobby/JobSearch.png",
      title: "Jobs Dashboard"
    },
    {
      img: "/images/Projects/Jobby/JobInfo.png",
      title: "Job Details Page"
    },
,
  ]
}
,
{
  id: 12,
  name: "Intelerview",
  description: "Intelerview leverages AI to transform any PDF—resumes, lecture notes, or job descriptions—into a rich source of contextual interview questions and answers. It empowers candidates, recruiters, and educators by automating tailored question generation, accelerating preparation, assessment, and hiring processes with precision and efficiency.",
  shortDescription: "AI-driven interview question generator from PDFs using Google Gemini and LangChain.",
  linkToTheSite: "",
  cardImg: "/images/Projects/Intelerview/Intelerview.png",
  image: "/images/Projects/Intelerview/IntelerviewCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python manages PDF parsing, question generation, and backend logic."
    },
    {
      techIcon: "/logo/AI/Streamlit.png",
      techName: "Streamlit",
      techDescription: "Streamlit delivers a simple and interactive UI for seamless user experience."
    },
    {
      techIcon: "/logo/AI/Langchain.svg",
      techName: "LangChain",
      techDescription: "LangChain orchestrates document chunking and context-aware question generation."
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Google Gemini",
      techDescription: "Gemini powers advanced AI-driven Q&A and contextual understanding."
    }
  ],
  objectives: [
    { name: "PDF Ingestion and Chunking" },
    { name: "AI-Powered Question & Answer Generation" },
    { name: "Contextual Interview Prep and Role-Based Assessment" },
    { name: "Interactive and User-Friendly Frontend" }
  ],
  domains: ["AI/ML", "NLP", "EdTech", "HRTech", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/Intelerview/Intelerview.png",
      title: "Intelerview App Interface"
    }
  ]
}
,
  {
  id: 13,
  name: "Potato-Disease-Prediction",
  description: "Potato-Disease-Prediction harnesses AI-powered image recognition to revolutionize crop health monitoring. By effortlessly diagnosing potato leaf diseases from uploaded images, it empowers farmers to detect issues early, reduce crop loss, and optimize treatment strategies—dramatically boosting yield and sustainability in agriculture.",
  shortDescription: "AI-driven image recognition app for instant potato leaf disease diagnosis, enhancing crop health management.",
  linkToTheSite: "",
  cardImg: "/images/Projects/PotatoDiseasePrediction/Home.png",
  image: "/images/Projects/PotatoDiseasePrediction/PotatoDiseasePredictionCover.png",
  technology: [
    {
      techIcon: "/logo/WebDevelopment/react.png",
      techName: "React.js",
      techDescription: "Frontend UI for seamless image upload and real-time prediction display."
    },
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Backend API handling image processing and AI inference."
    },
    {
      techIcon: "/logo/AI/Tensorflow.png",
      techName: "TensorFlow",
      techDescription: "Deep learning framework powering disease classification."
    },
    {
      techIcon: "/logo/AI/OpenCV.webp",
      techName: "OpenCV",
      techDescription: "Image processing for preprocessing and enhancing uploaded leaf images."
    }
  ],
  objectives: [
    { name: "Image Upload & Preprocessing" },
    { name: "AI-Powered Disease Classification" },
    { name: "Real-Time Prediction Feedback" },
    { name: "Actionable Agricultural Insights" },
    { name: "Sustainable Crop Yield Enhancement" }
  ],
  domains: ["AI/ML", "Computer Vision", "Agritech", "Full Stack Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/PotatoDiseasePrediction/Home.png",
      title: "Potato Disease Prediction"
    },    {
      img: "/images/Projects/PotatoDiseasePrediction/Healthy.png",
      title: "Potato Disease Prediction - Healthy"
    },    {
      img: "/images/Projects/PotatoDiseasePrediction/NotHealthy.png",
      title: "Potato Disease Prediction - Early Blight"
    }
  ]
},
{
  id: 14,
  name: "ChestScan AI",
  description: "ChestScan AI is an end-to-end MLOps-based medical imaging system designed to detect Adenocarcinoma Chest Cancer from CT scan images using a TensorFlow model built on VGG16 architecture. With DVC for reproducible pipelines, MLflow for tracking, and a Flask-powered web UI, this project demonstrates real-world model deployment, evaluation, and user interaction.",
  shortDescription: "MLOps-powered chest cancer detection system using VGG16 with DVC, MLflow, and Flask.",
  linkToTheSite: "",
  cardImg: "/images/Projects/ChestScanAI/ChestScanAI.png",
  image: "/images/Projects/ChestScanAI/ChestScanAICover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Core programming language used across the ML pipeline, orchestration, and backend logic."
    },
    {
      techIcon: "/logo/WebDevelopment/html.svg",
      techName: "HTML",
      techDescription: "Defines the structural foundation of the web UI for image upload and results display."
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS",
      techDescription: "Styles the frontend layout, enabling a responsive and clean user interface."
    },
    {
      techIcon: "/logo/WebDevelopment/jQuery.png",
      techName: "jQuery",
      techDescription: "Handles dynamic UI actions like form submissions, preview, and detection triggers."
    },
    {
      techIcon: "/logo/AI/Flask.png",
      techName: "Flask",
      techDescription: "Serves the backend REST API for cancer prediction and manages UI rendering."
    },
    {
      techIcon: "/logo/AI/Tensorflow.png",
      techName: "TensorFlow",
      techDescription: "Deep learning framework used to train and deploy a transfer learning model based on VGG16."
    },
    {
      techIcon: "/logo/AI/mlflow.png",
      techName: "MLflow",
      techDescription: "Tracks model parameters, metrics, artifacts, and training runs for reproducibility and monitoring."
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription: "Version control system used for collaborative development and code management."
    }
  ],
  objectives: [
    { name: "Detect Adenocarcinoma cancer from chest CT scans" },
    { name: "Integrate MLOps workflow using DVC and MLflow" },
    { name: "Build reproducible and version-controlled pipelines" },
    { name: "Serve predictions through a Flask web interface" },
    { name: "Track and visualize model performance metrics" }
  ],
  domains: ["AI/ML", "Healthcare", "MLOps", "Computer Vision"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/ChestScanAI/ChestScanAI.png",
      title: "Home Page"
    },
    {
      img: "/images/Projects/ChestScanAI/ChestScanAIImgUpload.png",
      title: "Image Upload and Prediction"
    },
    {
      img: "/images/Projects/ChestScanAI/ChestScanAIPrediction1.png",
      title: "Prediction Result – Normal"
    },
    {
      img: "/images/Projects/ChestScanAI/ChestScanAIPrediction2.png",
      title: "Prediction Result – Adenocarcinoma"
    },
    {
      img: "/images/Projects/ChestScanAI/ChestScanAIInfo.png",
      title: "Information Page"
    },
    {
      img: "/images/Projects/ChestScanAI/ChestScanAIMLFlow.png",
      title: "MLflow Dashboard"
    }
  ]
},
{
  id: 15,
  name: "Movie Recommender",
  description: "Movie Recommender is an intelligent content-based recommendation engine that uses machine learning and NLP to suggest similar movies based on user input. It leverages FastAPI for backend APIs, TF-IDF + cosine similarity for ML logic, and a clean frontend using HTML, CSS, and JavaScript.",
  shortDescription: "ML-powered movie recommender system using FastAPI, NLP, and cosine similarity.",
  linkToTheSite: "",
  cardImg: "/images/Projects/MovieRecommender/MovieRecommender.png",
  image: "/images/Projects/MovieRecommender/MovieRecommenderCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python is a Base programming language for implementing ML logic and API backend."
    },
    {
      techIcon: "/logo/AI/FastAPI.png",
      techName: "FastAPI",
      techDescription: "FastAPI is a Fast, async Python framework used for building high-performance API endpoints."
    },
    {
      techIcon: "/logo/AI/scikit-learn.png",
      techName: "Scikit-learn",
      techDescription: "Scikit-learn Used for building TF-IDF vectors, computing cosine similarity, and recommendation logic."
    },
    {
      techIcon: "/logo/AI/nltk.png",
      techName: "NLTK",
      techDescription: "NLTK is a NLP preprocessing toolkit used for tokenization, stopword filtering, and stemming."
    },
    {
      techIcon: "/logo/WebDevelopment/html.svg",
      techName: "HTML5",
      techDescription: "HTML Defines semantic structure of the user-facing web interface."
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS3",
      techDescription: "CSS Handles styling and responsive layout of movie recommendation cards."
    },
    {
      techIcon: "/logo/WebDevelopment/javascript.svg",
      techName: "JavaScript",
      techDescription: "JavaScript Adds client-side interactivity, fetches API data, and enables dynamic pagination."
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git LFS",
      techDescription: "Git LFS Manages large model or data files such as `.pkl` efficiently within Git."
    }
  ],
  objectives: [
    { name: "Build a content-based movie recommendation engine" },
    { name: "Vectorize metadata using TF-IDF and compute similarity" },
    { name: "Serve real-time predictions via FastAPI" },
    { name: "Create a clean, dynamic frontend using JS" },
    { name: "Ensure scalable deployment and model version control" }
  ],
  domains: ["AI/ML", "NLP", "Recommendation Systems", "Web Development"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/MovieRecommender/MovieRecommender.png",
      title: "Home Page"
    },
    {
      img: "/images/Projects/MovieRecommender/MovieInfo.png",
      title: "Movie Information Page"
    },
    {
      img: "/images/Projects/MovieRecommender/SimilarMovies.png",
      title: "Similar Movies Recommendations"
    },
    {
      img: "/images/Projects/MovieRecommender/SearchMovies.png",
      title: "Search Movies"
    }
  ]
},
{
  id: 16,
  name: "LunaChatbot",
  description: "LunaChatbot is a conversational AI assistant for real-time Tamil cuisine ordering. It integrates Dialogflow ES for NLP, FastAPI for webhook handling, MySQL for persistent order management, and a sleek custom web frontend to deliver a full-stack intelligent food ordering experience.",
  shortDescription: "Conversational food ordering chatbot powered by Dialogflow, FastAPI, and MySQL.",
  linkToTheSite: "",
  cardImg: "/images/Projects/LunaChatbot/LunaChatbot.png",
  image: "/images/Projects/LunaChatbot/LunaChatbotCover.png",
technology: [
  {
    techIcon: "/logo/AI/python.svg",
    techName: "Python",
    techDescription: "Python is a powerful, flexible programming language used here to implement backend logic, connect with the database, and process Dialogflow webhook requests."
  },
  {
    techIcon: "/logo/AI/FastAPI.png",
    techName: "FastAPI",
    techDescription: "FastAPI is a modern, high-performance web framework for Python, used to build and expose RESTful endpoints that serve Dialogflow webhooks with minimal latency."
  },
  {
    techIcon: "/logo/WebDevelopment/mysql.svg",
    techName: "MySQL",
    techDescription: "MySQL is a relational database used to persistently store menu items, customer orders, and order tracking data for real-time chatbot interactions."
  },
  {
    techIcon: "/logo/AI/Dialogflow.png",
    techName: "Dialogflow ES",
    techDescription: "Dialogflow ES is a natural language understanding (NLU) platform by Google, used to detect user intent and drive conversational logic for food ordering."
  },
  {
    techIcon: "/logo/WebDevelopment/html.svg",
    techName: "Custom Frontend",
    techDescription: "Custom Frontend is a static HTML/CSS-based interface that embeds the chatbot and provides users with a seamless web-based interaction platform."
  },
  {
    techIcon: "/logo/WebDevelopment/ngrok.png",
    techName: "Ngrok",
    techDescription: "Ngrok is a tunneling tool used to securely expose the local FastAPI server to the internet, allowing Dialogflow to communicate with the backend during development and testing."
  }
],
  objectives: [
    { name: "Enable food ordering through natural language conversation" },
    { name: "Handle real-time order creation, updates, and cancellations" },
    { name: "Integrate Dialogflow ES with FastAPI for webhook fulfillment" },
    { name: "Manage persistent order data using MySQL" },
    { name: "Provide a simple frontend interface for chatbot embedding" }
  ],
  domains: ["Conversational AI", "Full Stack", "NLP", "FoodTech"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/LunaChatbot/LunaChatbot.png",
      title: "Home Page"
    },
    {
      img: "/images/Projects/LunaChatbot/LunaChatbotItems.png",
      title: "Items Menu"
    },
    {
      img: "/images/Projects/LunaChatbot/LunaChatbotChat.png",
      title: "Chatbot"
    }
  ]
},
{
  id: 17,
  name: "IPL Win Predictor",
  description: "IPL Win Predictor is a real-time machine learning web app that forecasts the winning probability of an IPL team during a live match. Built with Streamlit and trained on IPL match data, it empowers cricket fans with predictive insights based on current match stats.",
  shortDescription: "Real-time IPL win probability predictor using ML and Streamlit.",
  linkToTheSite: "",
  cardImg: "/images/Projects/IPLPredictor/IPLPredictor.png",
  image: "/images/Projects/IPLPredictor/IPLPredictorCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python is the primary language powering data preprocessing, model training, and deployment logic due to its vast ML ecosystem and readability."
    },
    {
      techIcon: "/logo/AI/Streamlit.png",
      techName: "Streamlit",
      techDescription: "Streamlit is a Python-based rapid web app framework used to create the interactive, data-driven UI for live prediction and user inputs."
    },
    {
      techIcon: "/logo/AI/scikit-learn.png",
      techName: "Scikit-learn",
      techDescription: "Scikit-learn is a robust ML library providing tools for model training, evaluation, and implementation of the Random Forest Classifier."
    },
    {
      techIcon: "/logo/AI/Pandas.png",
      techName: "Pandas",
      techDescription: "Pandas is used for data manipulation, cleaning, and preprocessing of IPL match statistics to prepare the dataset for model training."
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription: "Git is used for version control, enabling collaborative development and tracking changes in the project codebase."
    }
  ],
  objectives: [
    { name: "Predict win probabilities using live match stats" },
    { name: "Use Random Forest for classification accuracy" },
    { name: "Deploy a fully interactive Streamlit-based UI" },
    { name: "Enable users to simulate match outcomes in real time" }
  ],
  domains: ["ML", "Sports Analytics", "Web App", "Cricket Tech"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/IPLPredictor/IPLPredictor.png",
      title: "Match Input UI"
    },
    {
      img: "/images/Projects/IPLPredictor/IPLPredictorPrediction.png",
      title: "Prediction Output"
    }
  ]
},
{
  id: 18,
  name: "Log Classification System",
  description: "A hybrid log intelligence platform that combines rule-based (Regex), machine learning (Logistic Regression + Sentence Transformers), and fallback LLM-based classifiers to assign categories and prioritize risks in log data. Built with FastAPI and includes a clean, downloadable UI.",
  shortDescription: "AI-powered log classification with risk scoring via Regex, ML, and LLMs.",
  linkToTheSite: "",
  cardImg: "/images/Projects/LogClassifier/LogClassifier.png",
  image: "/images/Projects/LogClassifier/LogClassifierCover.png",
  technology: [
    {
      techIcon: "/logo/AI/python.svg",
      techName: "Python",
      techDescription: "Python is the core language powering all backend logic, regex processing, and ML model execution for log intelligence."
    },
    {
      techIcon: "/logo/AI/FastAPI.png",
      techName: "FastAPI",
      techDescription: "FastAPI is used to build a high-performance backend API layer that handles file uploads, classification pipelines, and response routing."
    },
    {
      techIcon: "/logo/AI/scikit-learn.png",
      techName: "Scikit-learn",
      techDescription: "Scikit-learn powers the logistic regression model used in multi-class log categorization based on semantic embeddings."
    },
    {
      techIcon: "/logo/AI/gemini.png",
      techName: "Gemini",
      techDescription: "Google Gemini is used as a fallback LLM to handle complex log messages that cannot be classified by regex or ML, providing dynamic risk scoring and categorization."
    },
    {
      techIcon: "/logo/WebDevelopment/html.svg",
      techName: "HTML",
      techDescription: "Used to create the lightweight frontend UI for uploading CSVs and rendering real-time classified logs with downloadable results."
    },
    {
      techIcon: "/logo/WebDevelopment/css.svg",
      techName: "CSS",
      techDescription: "CSS styles the frontend UI, ensuring a clean, responsive design for log upload and classification results."
    },
    {
      techIcon: "/logo/WebDevelopment/javascript.svg",
      techName: "JavaScript",
      techDescription: "JavaScript adds interactivity to the frontend, handling file uploads, previews, and dynamic updates of classification results."
    },
    {
      techIcon: "/logo/WebDevelopment/Git.png",
      techName: "Git",
      techDescription: "Git is used for version control, enabling collaborative development and tracking changes in the project codebase."
    }
  ],
  objectives: [
    { name: "Classify logs using a multi-layered approach" },
    { name: "Detect and prioritize risks (High/Medium/Low/Normal)" },
    { name: "Enable CSV upload, preview, and annotated download" },
    { name: "Fallback to LLM for cases beyond regex and ML" }
  ],
  domains: ["AI/ML", "Cybersecurity", "Log Analytics", "Automation"],
  collaboration: "Solo",
  screanshots: [
    {
      img: "/images/Projects/LogClassifier/LogClassifier.png",
      title: "Upload Logs UI"
    },
    {
      img: "/images/Projects/LogClassifier/LogClassifierOutput.png",
      title: "Risk Prioritized Output Table"
    },
  ]
}



];

export default projects;
