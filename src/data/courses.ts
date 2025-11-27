export interface Course {
  id: string;
  title: string;
  duration: string;
  description: string;
  price: {
    basic: number;
    standard: number;
    premium: number;
  };
  features: string[];
  syllabus: {
    week: number;
    topics: string[];
  }[];
  enrollmentLink: string;
  icon: string;
}

export const courses: Course[] = [
  {
    id: 'ai-ml-internship',
    title: 'AI & Machine Learning Internship',
    duration: '1 Month',
    description: 'Comprehensive AI & Machine Learning internship program with live training, real projects, and industry certification.',
    price: {
      basic: 999,
      standard: 1499,
      premium: 2499
    },
    features: [
      'Live training sessions',
      'Real ML projects',
      'Certificate of completion',
      'Daily support',
      'Industry mentorship'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Introduction to AI & ML',
          'Python for Data Science',
          'NumPy, Pandas, Matplotlib',
          'Data Preprocessing & Cleaning'
        ]
      },
      {
        week: 2,
        topics: [
          'Supervised Learning Algorithms',
          'Linear & Logistic Regression',
          'Decision Trees & Random Forest',
          'Model Evaluation Metrics'
        ]
      },
      {
        week: 3,
        topics: [
          'Unsupervised Learning',
          'Clustering Algorithms',
          'Neural Networks Basics',
          'Deep Learning Introduction'
        ]
      },
      {
        week: 4,
        topics: [
          'Natural Language Processing',
          'Computer Vision Basics',
          'Project Development',
          'Portfolio Building'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-ai-ml',
    icon: '🤖'
  },
  {
    id: 'web-development',
    title: 'Full Stack Web Development Internship',
    duration: '1-2 Months',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js. Build real-world projects like E-commerce sites, Portfolio, and Blog CMS.',
    price: {
      basic: 1499,
      standard: 1999,
      premium: 2999
    },
    features: [
      'HTML, CSS, JavaScript Fundamentals',
      'React & Node.js Development',
      'E-commerce Site Project',
      'Portfolio & Blog CMS Projects',
      'Career Guidance & Support'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'HTML5, CSS3, JavaScript ES6+',
          'Responsive Design & Flexbox/Grid',
          'Git & Version Control',
          'Web Development Tools Setup'
        ]
      },
      {
        week: 2,
        topics: [
          'React Fundamentals & Components',
          'State Management & Hooks',
          'React Router & Navigation',
          'API Integration Basics'
        ]
      },
      {
        week: 3,
        topics: [
          'Node.js & Express Backend',
          'RESTful APIs Development',
          'Database Design (MongoDB/SQL)',
          'Authentication & Security'
        ]
      },
      {
        week: 4,
        topics: [
          'Full Stack Integration',
          'E-commerce Project Development',
          'Portfolio & Blog CMS Projects',
          'Deployment & Best Practices'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-web-dev',
    icon: '🌐'
  },
  {
    id: 'python-programming',
    title: 'Python Programming Internship',
    duration: '1 Month',
    description: 'Perfect for beginners! Learn Python basics from scratch and build your first project. Ideal starting point for programming career.',
    price: {
      basic: 999,
      standard: 1299,
      premium: 1799
    },
    features: [
      'Python Basics & Fundamentals',
      'Object-Oriented Programming',
      'File Handling & Libraries',
      'Real Project Development',
      'Beginner-Friendly Approach'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Python Installation & Setup',
          'Variables, Data Types & Operators',
          'Control Flow (If/Else, Loops)',
          'Functions & Modules'
        ]
      },
      {
        week: 2,
        topics: [
          'Data Structures (Lists, Tuples, Dicts)',
          'Object-Oriented Programming',
          'File Handling & I/O',
          'Error Handling & Debugging'
        ]
      },
      {
        week: 3,
        topics: [
          'Python Libraries (NumPy, Pandas)',
          'Working with APIs',
          'Project Planning & Design',
          'Code Best Practices'
        ]
      },
      {
        week: 4,
        topics: [
          'Project Development',
          'Testing & Debugging',
          'Documentation & Presentation',
          'Next Steps & Career Path'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-python',
    icon: '🐍'
  },
  {
    id: 'data-science',
    title: 'Data Science Internship',
    duration: '1-2 Months',
    description: 'Learn Python, Pandas, Data Visualization, and Statistics. Build real projects like Sales Analysis and COVID Data Insights.',
    price: {
      basic: 1299,
      standard: 1799,
      premium: 2499
    },
    features: [
      'Python for Data Science',
      'Pandas & Data Manipulation',
      'Data Visualization & Statistics',
      'Sales Analysis Project',
      'COVID Data Insights Project'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Python Basics for Data Science',
          'NumPy & Pandas Fundamentals',
          'Data Collection & Importing',
          'Data Cleaning & Preprocessing'
        ]
      },
      {
        week: 2,
        topics: [
          'Data Visualization (Matplotlib, Seaborn)',
          'Statistical Analysis Basics',
          'Descriptive Statistics',
          'Data Exploration Techniques'
        ]
      },
      {
        week: 3,
        topics: [
          'Advanced Pandas Operations',
          'GroupBy & Aggregations',
          'Time Series Analysis',
          'Correlation & Regression Analysis'
        ]
      },
      {
        week: 4,
        topics: [
          'Sales Analysis Project',
          'COVID Data Insights Project',
          'Data Storytelling & Presentation',
          'Portfolio Building'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-data-science',
    icon: '📊'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Ethical Hacking Internship',
    duration: '1-2 Months',
    description: 'High-demand program covering Kali Linux, Network Security, Vulnerability Assessment, and Ethical Hacking basics in a safe environment.',
    price: {
      basic: 1799,
      standard: 2299,
      premium: 3299
    },
    features: [
      'Kali Linux Basics',
      'Network Scanning & Security',
      'Password Attacks (Safe Environment)',
      'Vulnerability Assessment',
      'Security Reports & Documentation'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Cybersecurity Fundamentals',
          'Kali Linux Installation & Setup',
          'Linux Command Line Basics',
          'Network Basics & Protocols'
        ]
      },
      {
        week: 2,
        topics: [
          'Network Scanning Tools (Nmap)',
          'Vulnerability Scanning',
          'Information Gathering',
          'Reconnaissance Techniques'
        ]
      },
      {
        week: 3,
        topics: [
          'Password Security & Attacks',
          'Social Engineering Basics',
          'Web Application Security',
          'Network Security Fundamentals'
        ]
      },
      {
        week: 4,
        topics: [
          'Vulnerability Assessment Project',
          'Security Report Writing',
          'Ethical Hacking Best Practices',
          'Career Path in Cybersecurity'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-cybersecurity',
    icon: '🔒'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing Internship (AWS/Azure/GCP)',
    duration: '1-2 Months',
    description: 'Learn cloud computing basics with AWS, Azure, and GCP. Deploy websites and applications on cloud platforms. Easy to teach and highly practical.',
    price: {
      basic: 1799,
      standard: 2299,
      premium: 3299
    },
    features: [
      'AWS EC2 & S3 Basics',
      'Azure & GCP Fundamentals',
      'IAM & Security Basics',
      'Website Deployment Project',
      'Cloud Architecture Understanding'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Cloud Computing Fundamentals',
          'AWS Account Setup & Console',
          'EC2 Instances & Management',
          'S3 Storage Basics'
        ]
      },
      {
        week: 2,
        topics: [
          'IAM (Identity & Access Management)',
          'Azure Basics & Services',
          'Google Cloud Platform (GCP) Intro',
          'Cloud Security Fundamentals'
        ]
      },
      {
        week: 3,
        topics: [
          'Deploying Static Websites',
          'Database Services (RDS Basics)',
          'Load Balancing & Scaling',
          'Cloud Cost Management'
        ]
      },
      {
        week: 4,
        topics: [
          'Deploy Website on AWS Project',
          'Multi-Cloud Comparison',
          'Best Practices & Optimization',
          'Cloud Certification Path'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-cloud',
    icon: '☁️'
  },
  {
    id: 'android-development',
    title: 'Android App Development Internship',
    duration: '1-2 Months',
    description: 'Build Android apps using Kotlin or Flutter. Students love this! Create Note App, Chat UI, and To-do App projects.',
    price: {
      basic: 1699,
      standard: 2199,
      premium: 3199
    },
    features: [
      'Kotlin or Flutter Development',
      'Android Studio Setup',
      'Note App Project',
      'Chat UI Project',
      'To-do App Project'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Android Development Fundamentals',
          'Android Studio Setup & Configuration',
          'Kotlin Basics (or Flutter/Dart)',
          'UI Components & Layouts'
        ]
      },
      {
        week: 2,
        topics: [
          'Activities & Fragments',
          'Navigation & Intents',
          'RecyclerView & Lists',
          'Material Design Components'
        ]
      },
      {
        week: 3,
        topics: [
          'Local Database (Room/SQLite)',
          'API Integration & Networking',
          'State Management',
          'App Architecture Patterns'
        ]
      },
      {
        week: 4,
        topics: [
          'Note App Development',
          'Chat UI Implementation',
          'To-do App Project',
          'Testing & Play Store Preparation'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-android',
    icon: '📱'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Internship (Figma)',
    duration: '1 Month',
    description: 'NO coding required! Learn UI/UX design with Figma. Perfect for creative students. Build app screens and website redesigns.',
    price: {
      basic: 1299,
      standard: 1799,
      premium: 2499
    },
    features: [
      'Figma Mastery',
      'UI Design Basics',
      'Prototyping & Wireframing',
      'App Screens Design',
      'Website Redesign Project'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'UI/UX Design Fundamentals',
          'Figma Interface & Tools',
          'Design Principles & Color Theory',
          'Typography & Iconography'
        ]
      },
      {
        week: 2,
        topics: [
          'Wireframing Techniques',
          'Layout Design & Grid Systems',
          'Component Creation',
          'Design Systems Basics'
        ]
      },
      {
        week: 3,
        topics: [
          'Prototyping & Interactions',
          'User Flow Design',
          'Responsive Design Principles',
          'Design Handoff Basics'
        ]
      },
      {
        week: 4,
        topics: [
          'App Screens Design Project',
          'Website Redesign Project',
          'Portfolio Presentation',
          'Design Career Path'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-uiux',
    icon: '🎨'
  },
  {
    id: 'devops',
    title: 'DevOps Internship (Beginner Level)',
    duration: '1 Month',
    description: 'Learn DevOps fundamentals including Git, Docker basics, and CI/CD concepts. Build simple automation pipelines.',
    price: {
      basic: 1499,
      standard: 1999,
      premium: 2799
    },
    features: [
      'Git & Version Control',
      'Docker Basics & Containers',
      'CI/CD Concepts',
      'Automation Pipeline Project',
      'DevOps Best Practices'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'DevOps Fundamentals',
          'Git & GitHub Basics',
          'Branching & Merging',
          'Collaborative Workflows'
        ]
      },
      {
        week: 2,
        topics: [
          'Docker Installation & Setup',
          'Docker Images & Containers',
          'Dockerfile Creation',
          'Docker Compose Basics'
        ]
      },
      {
        week: 3,
        topics: [
          'CI/CD Concepts & Benefits',
          'GitHub Actions Basics',
          'Jenkins Introduction',
          'Automation Fundamentals'
        ]
      },
      {
        week: 4,
        topics: [
          'Simple Automation Pipeline Project',
          'Deployment Basics',
          'Monitoring & Logging Intro',
          'DevOps Career Path'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-devops',
    icon: '🔄'
  },
  {
    id: 'blockchain',
    title: 'Blockchain Basics Internship',
    duration: '1 Month',
    description: 'Learn blockchain fundamentals, smart contracts, Web3 basics, and crypto security. Build a simple smart contract demo.',
    price: {
      basic: 1799,
      standard: 2299,
      premium: 3299
    },
    features: [
      'Blockchain Fundamentals',
      'Smart Contracts Development',
      'Web3 Basics',
      'Crypto Security',
      'Smart Contract Demo Project'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Blockchain Fundamentals',
          'Cryptocurrency Basics',
          'Distributed Ledger Technology',
          'Consensus Mechanisms'
        ]
      },
      {
        week: 2,
        topics: [
          'Smart Contracts Introduction',
          'Solidity Basics',
          'Ethereum & EVM',
          'Remix IDE Setup'
        ]
      },
      {
        week: 3,
        topics: [
          'Web3.js Basics',
          'DApp Development Intro',
          'Crypto Wallets & Security',
          'Transaction & Gas Fees'
        ]
      },
      {
        week: 4,
        topics: [
          'Simple Smart Contract Demo',
          'Testing & Deployment',
          'Blockchain Security Best Practices',
          'Web3 Career Opportunities'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-blockchain',
    icon: '⛓️'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Internship',
    duration: '1 Month',
    description: 'High demand from non-tech students too! Learn SEO, Social Media Marketing, and Ads basics. Create marketing plans and optimize website SEO.',
    price: {
      basic: 999,
      standard: 1299,
      premium: 1799
    },
    features: [
      'SEO Fundamentals',
      'Social Media Marketing',
      'Google Ads & Facebook Ads',
      'Marketing Plan Development',
      'Website SEO Optimization'
    ],
    syllabus: [
      {
        week: 1,
        topics: [
          'Digital Marketing Fundamentals',
          'SEO Basics & Keyword Research',
          'On-Page SEO Optimization',
          'Content Marketing Basics'
        ]
      },
      {
        week: 2,
        topics: [
          'Social Media Marketing',
          'Platform Strategies (Facebook, Instagram, LinkedIn)',
          'Content Creation & Scheduling',
          'Social Media Analytics'
        ]
      },
      {
        week: 3,
        topics: [
          'Google Ads Basics',
          'Facebook Ads & Campaigns',
          'Ad Copywriting',
          'Budget Management & ROI'
        ]
      },
      {
        week: 4,
        topics: [
          'Marketing Plan Development',
          'Website SEO Optimization Project',
          'Analytics & Reporting',
          'Digital Marketing Career Path'
        ]
      }
    ],
    enrollmentLink: 'https://forms.gle/your-google-form-link-digital-marketing',
    icon: '📈'
  }
];

export const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Data Science Intern',
    text: 'The AI & ML internship program exceeded my expectations. The hands-on projects and mentorship helped me land my dream job at a top tech company.',
    rating: 5
  },
  {
    name: 'Rahul Kumar',
    role: 'Web Developer',
    text: 'The Full Stack Web Development course gave me all the skills I needed to start my freelance career. The instructors were amazing and always available for support.',
    rating: 5
  },
  {
    name: 'Anjali Patel',
    role: 'Cloud Engineer',
    text: 'The Cloud Computing program helped me get AWS certified and transition into cloud engineering. The practical approach and real-world scenarios were invaluable.',
    rating: 5
  }
];

export const projects = [
  {
    id: 'heart-disease-prediction',
    title: 'Heart Disease Prediction (ML)',
    description: 'Machine learning model to predict heart disease using patient data with 95% accuracy. Built with scikit-learn and deployed using Flask.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'Pandas']
  },
  {
    id: 'fake-news-detection',
    title: 'Fake News Detection (NLP)',
    description: 'Natural Language Processing model to classify fake news articles using NLP techniques and machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=400&q=80',
    technologies: ['Python', 'NLTK', 'TensorFlow', 'NLP']
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    description: 'Collaborative filtering recommendation system that suggests movies based on user preferences and viewing history.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Flask']
  },
  {
    id: 'customer-churn',
    title: 'Customer Churn Prediction',
    description: 'Predictive analytics model to identify customers at risk of churning, helping businesses retain customers and reduce revenue loss.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    technologies: ['Python', 'XGBoost', 'Pandas', 'Matplotlib']
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    description: 'Regression model to predict house prices based on location, size, amenities, and market trends using advanced ML techniques.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Seaborn']
  }
];

