export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  detailedDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies?: string[];
  image?: string;
}

export const services: Service[] = [
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: '🤖',
    description: 'Custom AI solutions, predictive analytics, and intelligent automation for business growth.',
    detailedDescription: 'Our AI & Machine Learning services help businesses harness the power of artificial intelligence to automate processes, gain actionable insights, and drive innovation. We develop custom AI models tailored to your specific business needs, from intelligent chatbots and recommendation systems to advanced predictive analytics and computer vision solutions.',
    features: [
      'Custom AI/ML model development & deployment',
      'Predictive analytics & business intelligence',
      'Natural language processing & chatbots',
      'Computer vision & image recognition',
      'Machine learning model training & optimization',
      'AI-powered automation solutions',
      'Recommendation systems & personalization',
      'AI consulting & strategy development'
    ],
    benefits: [
      'Automate repetitive tasks and workflows',
      'Make data-driven decisions with predictive insights',
      'Enhance customer experience with intelligent interactions',
      'Reduce operational costs through automation',
      'Gain competitive advantage with cutting-edge AI',
      'Improve accuracy and efficiency in business processes'
    ],
    useCases: [
      'Customer service chatbots and virtual assistants',
      'Predictive maintenance for manufacturing',
      'Fraud detection in financial services',
      'Personalized product recommendations',
      'Image and speech recognition systems',
      'Demand forecasting and inventory optimization'
    ],
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenAI', 'Hugging Face', 'AWS SageMaker', 'Google Cloud AI', 'Azure ML'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    icon: '☁️',
    description: 'AWS, Azure, Google Cloud migration, management, and optimization services.',
    detailedDescription: 'Transform your business with comprehensive cloud computing solutions. We provide end-to-end cloud services including migration, architecture design, and ongoing management across AWS, Azure, and Google Cloud Platform. Our experts help you leverage cloud technology for enhanced scalability, cost efficiency, and business agility.',
    features: [
      'Cloud architecture design & migration services',
      'DevOps automation & cloud deployment',
      'Cloud cost optimization & resource management',
      'Disaster recovery & backup solutions',
      'Multi-cloud and hybrid cloud strategies',
      'Cloud security & compliance management',
      'Serverless architecture implementation',
      'Cloud-native application development'
    ],
    benefits: [
      'Scale infrastructure on-demand',
      'Reduce IT infrastructure costs',
      'Improve business agility and time-to-market',
      'Enhance data security and compliance',
      'Enable remote work and global access',
      'Automatic updates and maintenance'
    ],
    useCases: [
      'Legacy application migration to cloud',
      'Scalable web application hosting',
      'Big data processing and analytics',
      'Disaster recovery and business continuity',
      'Development and testing environments',
      'Content delivery and global distribution'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud Platform', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation', 'Serverless Framework'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'devops-automation',
    title: 'DevOps & Automation',
    icon: '🛠️',
    description: 'CI/CD pipelines, infrastructure automation, and deployment optimization.',
    detailedDescription: 'Accelerate your software delivery and improve operational efficiency with our DevOps and automation services. We implement best practices for continuous integration, continuous deployment, and infrastructure automation to help you deliver high-quality software faster and more reliably.',
    features: [
      'CI/CD pipeline development & optimization',
      'Infrastructure as code & cloud automation',
      'Containerization (Docker, Kubernetes)',
      'Application monitoring & logging solutions',
      'Automated testing & quality assurance',
      'Configuration management & orchestration',
      'Release management & deployment strategies',
      'Performance optimization & scalability'
    ],
    benefits: [
      'Faster software delivery cycles',
      'Improved code quality and reliability',
      'Reduced manual errors and downtime',
      'Better collaboration between teams',
      'Increased deployment frequency',
      'Lower operational costs'
    ],
    useCases: [
      'Automated build and deployment pipelines',
      'Infrastructure provisioning and management',
      'Microservices container orchestration',
      'Automated testing and quality gates',
      'Performance monitoring and alerting',
      'Scalable application deployments'
    ],
    technologies: ['Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Prometheus', 'Grafana'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description: 'Custom web applications, e-commerce platforms, and responsive website design.',
    detailedDescription: 'Create powerful, modern web applications that engage users and drive business growth. Our web development team specializes in building responsive, scalable, and SEO-optimized websites and web applications using the latest technologies and best practices. From simple corporate websites to complex e-commerce platforms, we deliver solutions that exceed expectations.',
    features: [
      'Corporate & e-commerce website development',
      'Content management systems (WordPress, Headless CMS)',
      'Website performance optimization & speed enhancement',
      'Web accessibility compliance & SEO optimization',
      'Progressive Web Apps (PWA) development',
      'Single Page Applications (SPA)',
      'API integration & third-party services',
      'Responsive & mobile-first design'
    ],
    benefits: [
      'Enhanced online presence and brand visibility',
      'Improved user experience and engagement',
      'Better search engine rankings',
      'Increased conversion rates',
      'Mobile-friendly and accessible design',
      'Scalable architecture for future growth'
    ],
    useCases: [
      'Corporate websites and landing pages',
      'E-commerce and online stores',
      'Web portals and dashboards',
      'Content management systems',
      'Progressive web applications',
      'Custom web applications and SaaS platforms'
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'Angular', 'Node.js', 'TypeScript', 'WordPress', 'Shopify', 'MongoDB', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Native iOS, Android, and cross-platform mobile applications.',
    detailedDescription: 'Develop high-performance mobile applications that deliver exceptional user experiences across iOS, Android, and cross-platform devices. Our mobile app development services cover everything from concept to launch, including UI/UX design, development, testing, and deployment to app stores.',
    features: [
      'Native iOS & Android mobile app development',
      'Cross-platform mobile applications (Flutter, React Native)',
      'UI/UX design & user experience optimization',
      'API development & backend integration',
      'App store optimization & deployment',
      'Mobile app testing & quality assurance',
      'Performance optimization & battery efficiency',
      'Push notifications & analytics integration'
    ],
    benefits: [
      'Reach customers on their preferred devices',
      'Enhanced customer engagement and loyalty',
      'Improved brand visibility and presence',
      'New revenue streams through mobile commerce',
      'Better customer support and communication',
      'Competitive advantage in mobile-first market'
    ],
    useCases: [
      'Consumer mobile applications',
      'Enterprise mobile solutions',
      'E-commerce mobile apps',
      'Social networking applications',
      'Mobile banking and fintech apps',
      'Healthcare and fitness applications'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin', 'Firebase', 'GraphQL', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'data-management',
    title: 'Data Management',
    icon: '💾',
    description: 'Big data solutions, database design, and data analytics services.',
    detailedDescription: 'Transform your data into a strategic asset with our comprehensive data management services. We design, implement, and optimize data solutions including databases, data warehouses, and big data platforms to help you store, process, and analyze data efficiently for better business decision-making.',
    features: [
      'Big data solutions & data lake architecture',
      'Database design, development & optimization',
      'Data warehousing & ETL processes',
      'Data quality & governance',
      'Data migration & integration services',
      'Real-time data processing & streaming',
      'Data security & privacy compliance',
      'Master data management (MDM)'
    ],
    benefits: [
      'Improved data quality and consistency',
      'Better business insights and analytics',
      'Reduced data storage and processing costs',
      'Enhanced data security and compliance',
      'Faster access to critical business data',
      'Scalable data infrastructure'
    ],
    useCases: [
      'Enterprise data warehouse implementation',
      'Customer data platform (CDP) development',
      'Real-time analytics and reporting',
      'Data migration from legacy systems',
      'Big data analytics platforms',
      'Data lake architecture for analytics'
    ],
    technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'AWS Redshift', 'Snowflake', 'Apache Hadoop', 'Spark', 'Kafka', 'Talend'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: '🔒',
    description: 'Security audits, compliance management, and comprehensive threat protection.',
    detailedDescription: 'Protect your business from evolving cyber threats with our comprehensive cybersecurity services. We provide security audits, compliance management, threat protection, and ongoing security monitoring to safeguard your digital assets and ensure regulatory compliance.',
    features: [
      'Vulnerability assessment & penetration testing',
      'Security audits & compliance management',
      'Identity & access management solutions',
      '24/7 security monitoring & incident response',
      'Security architecture & design',
      'Data encryption & privacy protection',
      'Security awareness training',
      'Incident response & disaster recovery planning'
    ],
    benefits: [
      'Protect sensitive business and customer data',
      'Ensure regulatory compliance (GDPR, HIPAA, etc.)',
      'Prevent costly security breaches',
      'Maintain customer trust and reputation',
      'Reduce security risks and vulnerabilities',
      'Proactive threat detection and response'
    ],
    useCases: [
      'Security assessment and audits',
      'Compliance certification (SOC 2, ISO 27001)',
      'Identity and access management implementation',
      'Security monitoring and SIEM setup',
      'Data protection and encryption',
      'Incident response planning and execution'
    ],
    technologies: ['OWASP', 'SIEM Tools', 'Firewall', 'VPN', 'Multi-Factor Authentication', 'Encryption', 'Penetration Testing Tools', 'Compliance Frameworks'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence',
    icon: '📊',
    description: 'Data visualization, reporting dashboards, and business analytics solutions.',
    detailedDescription: 'Unlock the full value of your business data with our Business Intelligence services. We create interactive dashboards, advanced analytics solutions, and comprehensive reporting systems that transform raw data into actionable insights, enabling data-driven decision-making across your organization.',
    features: [
      'Interactive dashboards & business reporting',
      'Data warehousing & data lake solutions',
      'Advanced data visualization & reporting',
      'Predictive analytics & machine learning insights',
      'Self-service BI tools & training',
      'Real-time analytics & KPI monitoring',
      'Custom analytics solutions',
      'Data modeling & ETL processes'
    ],
    benefits: [
      'Make informed, data-driven decisions',
      'Identify business opportunities and trends',
      'Improve operational efficiency',
      'Better performance tracking and KPI monitoring',
      'Enhanced reporting and visibility',
      'Competitive advantage through insights'
    ],
    useCases: [
      'Executive dashboards and KPI tracking',
      'Sales and revenue analytics',
      'Customer analytics and segmentation',
      'Operational performance monitoring',
      'Financial reporting and analysis',
      'Predictive analytics for forecasting'
    ],
    technologies: ['Power BI', 'Tableau', 'Qlik', 'Looker', 'AWS QuickSight', 'Python', 'R', 'SQL', 'ETL Tools'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
  }
];

