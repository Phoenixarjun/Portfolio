const projects = [
  {
    id: 1,
    name: "Amazon Prime Clone",
    description: "This project is a comprehensive clone of Amazon Prime, aiming to replicate its core functionalities such as streaming videos, user authentication, and personalized recommendations. It showcases advanced web development techniques and provides a real-world scenario for practicing full-stack development.",
    shortDescription: "A comprehensive clone of Amazon Prime with streaming and user authentication.",
    linkToTheSite: "https://www.primevideo.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Practice" },
      { name: "Practical Implementation" }
    ],
    domains: ["Web Development"],
    collaboration: "Team"
  },
  {
    id: 2,
    name: "Weather Dashboard",
    description: "A weather dashboard application that provides real-time weather updates and forecasts. Users can search for the current weather conditions and future forecasts of any city globally. The app integrates with a weather API to fetch data and displays it in a user-friendly interface.",
    shortDescription: "Real-time weather updates and forecasts for any city globally.",
    linkToTheSite: "https://www.weatherdashboard.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Weather Tracking" },
      { name: "User Interface Design" }
    ],
    domains: ["Web Development", "Data Science"],
    collaboration: "Solo"
  },
  {
    id: 3,
    name: "Fitness Tracker",
    description: "A fitness tracker application designed to help users monitor their daily physical activities, set fitness goals, and track their progress over time. The app includes features like workout logging, step counting, and calorie tracking.",
    shortDescription: "Monitor daily activities, set fitness goals, and track progress.",
    linkToTheSite: "https://www.fitnesstracker.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Fitness Goals" },
      { name: "Activity Tracking" }
    ],
    domains: ["Web Development"],
    collaboration: "Team"
  },
  {
    id: 4,
    name: "E-commerce Platform",
    description: "An e-commerce platform that allows users to browse products, add them to a shopping cart, and purchase them online. The platform includes features like product search, user authentication, payment processing, and order management.",
    shortDescription: "Browse products, add to cart, and purchase online.",
    linkToTheSite: "https://www.ecommerceplatform.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Online Shopping" },
      { name: "Product Management" }
    ],
    domains: ["Web Development", "Data Science"],
    collaboration: "Solo"
  },
  {
    id: 5,
    name: "Social Media App",
    description: "A social media application that enables users to connect with friends, share updates, photos, and videos, and engage with content through likes and comments. The app aims to provide a platform for social interaction and content sharing.",
    shortDescription: "Connect with friends and share updates, photos, and videos.",
    linkToTheSite: "https://www.socialmediaapp.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Social Interaction" },
      { name: "Content Sharing" }
    ],
    domains: ["Web Development"],
    collaboration: "Team"
  },
  {
    id: 6,
    name: "Personal Blog",
    description: "A personal blog website where users can post articles, manage their profiles, and interact with readers through comments. The platform supports rich text editing and multimedia embedding.",
    shortDescription: "A personal blog platform for posting articles and engaging with readers.",
    linkToTheSite: "https://www.personalblog.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Content Creation" },
      { name: "Reader Engagement" }
    ],
    domains: ["Web Development", "Content Creation"],
    collaboration: "Solo"
  },
  {
    id: 7,
    name: "Task Management App",
    description: "A task management application designed to help users organize and prioritize their daily tasks. The app includes features like task categorization, deadlines, and reminders.",
    shortDescription: "Organize and prioritize daily tasks with categorization and reminders.",
    linkToTheSite: "https://www.taskmanager.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Task Organization" },
      { name: "Time Management" }
    ],
    domains: ["Web Development"],
    collaboration: "Team"
  },
  {
    id: 8,
    name: "Recipe Sharing Platform",
    description: "A recipe sharing platform where users can browse, share, and rate recipes. The platform includes features like ingredient lists, cooking instructions, and user reviews.",
    shortDescription: "Browse, share, and rate recipes with ingredient lists and cooking instructions.",
    linkToTheSite: "https://www.recipesharing.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Recipe Sharing" },
      { name: "User Engagement" }
    ],
    domains: ["Web Development", "Content Creation"],
    collaboration: "Solo"
  },
  {
    id: 9,
    name: "Virtual Classroom",
    description: "A virtual classroom platform that facilitates online learning through video conferencing, resource sharing, and interactive whiteboards. The platform supports real-time communication between instructors and students.",
    shortDescription: "Facilitates online learning with video conferencing and interactive tools.",
    linkToTheSite: "https://www.virtualclassroom.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Online Education" },
      { name: "Real-Time Communication" }
    ],
    domains: ["Web Development", "Education"],
    collaboration: "Team"
  },
  {
    id: 10,
    name: "Portfolio Website",
    description: "A personal portfolio website to showcase projects, skills, and professional experiences. The website includes sections for an about me page, project galleries, and contact information.",
    shortDescription: "Showcase projects, skills, and professional experiences in a personal portfolio.",
    linkToTheSite: "https://www.portfoliowebsite.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Professional Showcase" },
      { name: "Personal Branding" }
    ],
    domains: ["Web Development"],
    collaboration: "Solo"
  },
  {
    id: 11,
    name: "Music Streaming Service",
    description: "A music streaming service that allows users to listen to music online. The service includes features like playlist creation, music recommendations, and offline listening.",
    shortDescription: "Stream music online, create playlists, and get music recommendations.",
    linkToTheSite: "https://www.musicstreaming.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Music Enjoyment" },
      { name: "User Experience" }
    ],
    domains: ["Web Development", "Entertainment"],
    collaboration: "Team"
  },
  {
    id: 12,
    name: "Job Portal",
    description: "A job portal that connects job seekers with potential employers. The platform includes features like job listings, resume uploads, and application tracking.",
    shortDescription: "Connects job seekers with potential employers through job listings and resume uploads.",
    linkToTheSite: "https://www.jobportal.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Employment Connections" },
      { name: "Career Development" }
    ],
    domains: ["Web Development", "Human Resources"],
    collaboration: "Solo"
  },
  {
    id: 13,
    name: "Online Marketplace",
    description: "An online marketplace that connects buyers and sellers, offering a wide range of products. Features include product listings, user reviews, and secure payment options.",
    shortDescription: "Connects buyers and sellers with product listings and secure payments.",
    linkToTheSite: "https://www.onlinemarketplace.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "E-commerce" },
      { name: "User Trust" }
    ],
    domains: ["Web Development", "E-commerce"],
    collaboration: "Team"
  },
  {
    id: 14,
    name: "Travel Booking Site",
    description: "A travel booking site that allows users to book flights, hotels, and car rentals. The platform provides travel packages, user reviews, and price comparisons.",
    shortDescription: "Book flights, hotels, and car rentals with travel packages and price comparisons.",
    linkToTheSite: "https://www.travelbooking.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Travel Convenience" },
      { name: "Customer Satisfaction" }
    ],
    domains: ["Web Development", "Travel"],
    collaboration: "Solo"
  },
  {
    id: 15,
    name: "Social Media Platform",
    description: "A social media platform that connects people, allowing them to share updates, photos, and videos. The platform includes features like messaging, group creation, and event planning.",
    shortDescription: "Connect and share updates, photos, and videos with messaging and event planning.",
    linkToTheSite: "https://www.socialmediaplatform.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Social Connectivity" },
      { name: "User Engagement" }
    ],
    domains: ["Web Development", "Social Networking"],
    collaboration: "Team"
  },
  {
    id: 16,
    name: "Fitness Tracking App",
    description: "A fitness tracking app that helps users monitor their workouts, track their progress, and set fitness goals. The app includes features like activity logs, progress charts, and community challenges.",
    shortDescription: "Monitor workouts, track progress, and set fitness goals with activity logs and community challenges.",
    linkToTheSite: "https://www.fitnesstracking.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." },
      { techIcon: "/logo/javascript.svg", techName: "ReactJs", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Health Improvement" },
      { name: "User Motivation" }
    ],
    domains: ["Web Development", "Health & Fitness"],
    collaboration: "Solo"
  },
  {
    id: 17,
    name: "Recipe Sharing Platform",
    description: "A recipe sharing platform where users can discover and share recipes. The platform includes features like recipe ratings, user comments, and a recipe saving function.",
    shortDescription: "Discover and share recipes with ratings, comments, and saving functions.",
    linkToTheSite: "https://www.recipesharing.com",
    cardImg: "./images/AmazonPrimeClone.png",
    image: "./images/AmazonPrimeCover.svg",
    technology: [
      { techIcon: "/logo/html.svg", techName: "HTML", techDescription: "HTML is the standard markup language for creating web pages. It is the backbone of all web content, allowing for the structuring and presentation of text, images, and interactive elements." },
      { techIcon: "/logo/css.svg", techName: "CSS", techDescription: "CSS is a style sheet language used for describing the presentation of a document written in HTML. It enhances the visual appearance and layout of web pages." },
      { techIcon: "/logo/javascript.svg", techName: "JavaScript", techDescription: "JavaScript is a programming language that enables interactive web pages. It is a core technology of the web, allowing for dynamic content and interactive user interfaces." }
    ],
    objectives: [
      { name: "Culinary Exploration" },
      { name: "Community Engagement" }
    ],
    domains: ["Web Development", "Food & Drink"],
    collaboration: "Team"
  }
];

export default projects;