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
    id: 3,
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
  id: 4,
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
  id: 5,
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
  id: 6,
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
  id: 7,
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
  id: 8,
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
  id: 9,
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
  id: 10,
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
];

export default projects;
