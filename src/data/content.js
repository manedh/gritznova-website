import {
  Bot,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Database,
  Gauge,
  Headphones,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
  BarChart3,
  MessageSquareText
} from 'lucide-react';

export const solutions = [
  {
    icon: Code2,
    eyebrow: '01 / PRODUCT ENGINEERING',
    title: 'Custom Digital Products',
    text: 'Web, mobile, SaaS, and enterprise applications designed around real business requirements.'
  },
  {
    icon: BrainCircuit,
    eyebrow: '02 / INTELLIGENCE',
    title: 'AI-Powered Systems',
    text: 'Generative AI, intelligent assistants, machine learning, NLP, and AI automation that turns information into action.'
  },
  {
    icon: Cloud,
    eyebrow: '03 / CLOUD',
    title: 'Cloud Platforms',
    text: 'Secure, observable, cloud-native infrastructure built to perform reliably as demand grows.'
  },
  {
    icon: Workflow,
    eyebrow: '04 / AUTOMATION',
    title: 'Business Automation',
    text: 'Remove repetitive work from operations, communication, decisions, and customer workflows.'
  },
  {
    icon: Server,
    eyebrow: '05 / MODERNIZATION',
    title: 'Enterprise Modernization',
    text: 'Make legacy applications, databases, and infrastructure ready for the next stage of growth.'
  },
  {
    icon: Network,
    eyebrow: '06 / ECOSYSTEMS',
    title: 'Integrated Technology',
    text: 'Connect APIs, applications, data, and third-party services into one dependable technology system.'
  }
];

export const products = [
  {
    id: 'novainsight',
    icon: BarChart3,
    color: '#3B82F6',
    tag: 'BUSINESS INTELLIGENCE & ANALYTICS',
    title: 'NovaInsight',
    text: 'Transform business data into a clear operating picture with real-time dashboards, automated reporting, KPI monitoring, and predictive insights.',
    features: [
      'Real-time dashboards',
      'Business KPIs',
      'Automated reports',
      'Data visualization',
      'Predictive insights'
    ],
    dashboard: {
      label: 'Business intelligence',
      metric1: '24,890',
      metric1Label: 'ACTIVE SIGNALS',
      metric1Change: '+18.4%',
      metric2: '92.8',
      metric2Label: 'OPERATIONAL SCORE',
      metric2Change: '+6.2%',
      updated: 'Just now',
      status: 'Real-time'
    }
  },

  {
    id: 'novainvent',
    icon: Boxes,
    color: '#10B981',
    tag: 'SMART INVENTORY MANAGEMENT',
    title: 'NovaInvent',
    text: 'A real-time inventory management platform for tracking products, stock levels, operational activity, and updates wherever teams work.',
    features: [
      'Inventory tracking',
      'Stock alerts',
      'Product management',
      'Mobile access',
      'WhatsApp & Telegram integrations',
      'Real-time updates'
    ],
    dashboard: {
      label: 'Inventory management',
      metric1: '12,480',
      metric1Label: 'TOTAL PRODUCTS',
      metric1Change: '+12.8%',
      metric2: '96.4',
      metric2Label: 'STOCK ACCURACY',
      metric2Change: '+4.7%',
      updated: 'Just now',
      status: 'Live inventory'
    }
  },

  {
    id: 'gritzarv',
    icon: MessageSquareText,
    color: '#8B5CF6',
    tag: 'AI VOICE AGENT',
    title: 'Gritzarv',
    text: 'An intelligent voice-based assistant that lets users interact with technology through natural conversations and task-focused workflows.',
    features: [
      'Voice-to-text',
      'Text-to-speech',
      'AI conversations',
      'Task assistance',
      'Information retrieval',
      'Personalized workflows'
    ],
    dashboard: {
      label: 'AI voice agent',
      metric1: '8,942',
      metric1Label: 'VOICE INTERACTIONS',
      metric1Change: '+24.6%',
      metric2: '94.7',
      metric2Label: 'TASK ACCURACY',
      metric2Change: '+8.3%',
      updated: 'Just now',
      status: 'AI active'
    }
  },

  {
    id: 'propgritz',
    icon: Sparkles,
    color: '#F59E0B',
    tag: 'AI ASSISTANT FOR PROPERTY PROFESSIONALS',
    title: 'Propgritz',
    text: 'A technology platform for property brokers and agents to manage leads, communication, follow-ups, and customer interactions.',
    features: [
      'Lead management',
      'Call assistance',
      'Message handling',
      'Follow-up automation',
      'Client communication',
      'Productivity automation'
    ],
    dashboard: {
      label: 'Property intelligence',
      metric1: '3,840',
      metric1Label: 'ACTIVE LEADS',
      metric1Change: '+21.3%',
      metric2: '89.6',
      metric2Label: 'LEAD SCORE',
      metric2Change: '+7.1%',
      updated: 'Just now',
      status: 'AI assisted'
    }
  }
];

export const services = [
  {
    id: 'software',
    icon: Code2,
    number: '01',
    title: 'Custom Software Development',
    text: 'Build scalable web, mobile, SaaS, and enterprise applications tailored to your requirements.',
    points: [
      'Product engineering',
      'Web & mobile apps',
      'SaaS platforms'
    ]
  },

  {
    id: 'cloud',
    icon: Cloud,
    number: '02',
    title: 'Cloud Migration & DevOps',
    text: 'Modernize infrastructure and create reliable deployment pipelines for resilient delivery.',
    points: [
      'Cloud migration',
      'CI/CD',
      'Infrastructure as Code',
      'Docker & Kubernetes',
      'Monitoring',
      'Performance optimization'
    ]
  },

  {
    id: 'ai',
    icon: BrainCircuit,
    number: '03',
    title: 'AI & Machine Learning',
    text: 'Integrate practical intelligence into products, data systems, and business workflows.',
    points: [
      'Generative AI',
      'LLMs',
      'Machine Learning',
      'NLP',
      'Data Engineering',
      'Predictive Analytics'
    ]
  },

  {
    id: 'agents',
    icon: Bot,
    number: '04',
    title: 'Agentic AI Solutions',
    text: 'Build intelligent AI agents capable of using tools, coordinating workflows, and assisting teams.',
    points: [
      'AI agents',
      'Custom agent workflows',
      'Enterprise AI',
      'AI automation',
      'Hosting',
      'Maintenance'
    ]
  },

  {
    id: 'integration',
    icon: Network,
    number: '05',
    title: 'Systems Integration',
    text: 'Connect applications, APIs, databases, third-party platforms, and legacy systems into one reliable ecosystem.',
    points: [
      'API integration',
      'Data synchronization',
      'Legacy integration',
      'Event-driven workflows'
    ]
  },

  {
    id: 'managed',
    icon: Headphones,
    number: '06',
    title: 'Managed IT Support',
    text: 'Keep systems reliable after launch through monitoring, maintenance, troubleshooting, and optimization.',
    points: [
      'Monitoring',
      'Maintenance',
      'Incident response',
      'Technical support'
    ]
  }
];

export const techGroups = [
  {
    title: 'Frontend',
    icon: Layers3,
    items: ['React', 'Next.js', 'HTML', 'CSS', 'JavaScript']
  },

  {
    title: 'Backend',
    icon: Server,
    items: ['Node.js', 'Python', 'Java', 'REST APIs', 'Microservices']
  },

  {
    title: 'AI & Data',
    icon: BrainCircuit,
    items: [
      'Generative AI',
      'LLMs',
      'Machine Learning',
      'NLP',
      'Data Engineering',
      'Analytics'
    ]
  },

  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    items: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'CI/CD',
      'Infrastructure as Code'
    ]
  },

  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  }
];

export const processSteps = [
  ['01', 'Discover', 'Understand the business, users, challenges, and objectives.'],
  ['02', 'Plan', 'Define architecture, roadmap, technology, milestones, and priorities.'],
  ['03', 'Design', 'Create intuitive interfaces and scalable system architecture.'],
  ['04', 'Build', 'Develop features using modern engineering practices.'],
  ['05', 'Test', 'Validate functionality, security, performance, and reliability.'],
  ['06', 'Deploy', 'Launch using reliable cloud deployment pipelines.'],
  ['07', 'Improve', 'Monitor, optimize, maintain, and continuously evolve the product.']
];

export const industries = [
  [
    'Startups',
    'Turn ideas into scalable MVPs and production-ready products.'
  ],
  [
    'Growing Businesses',
    'Automate operations and modernize existing systems.'
  ],
  [
    'Enterprises',
    'Modernize legacy infrastructure and integrate complex technology ecosystems.'
  ],
  [
    'Technology Teams',
    'Extend engineering capacity with specialized development, AI, cloud, and DevOps expertise.'
  ]
];

export const security = [
  [ShieldCheck, 'Secure Architecture'],
  [LockKeyhole, 'Authentication'],
  [ShieldCheck, 'Authorization'],
  [Network, 'API Security'],
  [Database, 'Data Protection'],
  [LockKeyhole, 'Access Control'],
  [Gauge, 'Monitoring'],
  [Server, 'Backup & Recovery']
];
