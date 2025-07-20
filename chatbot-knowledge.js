// Chatbot Knowledge Base - Bilal's AI Assistant
// Update this file to enhance your chatbot's knowledge

const BILAL_KNOWLEDGE = {
    // Personal Information
    personal: {
        name: "Syed Bilal Fahim",
        title: "Product Manager",
        experience: "3+ years",
        education: "IBA with merit scholarship",
        location: "Pakistan",
        approach: "Strategic thinking with measurable impact"
    },

    // Companies and Roles
    companies: {
        socialChamp: {
            name: "Social Champ Inc",
            role: "Product Manager",
            duration: "2023-2024",
            focus: "Social media automation and management platform",
            achievements: [
                "171% Day-1 activation boost through onboarding revamps",
                "30-40% reduction in moderation workload through automation"
            ]
        },
        waseela: {
            name: "Waseela",
            role: "Product Manager",
            duration: "2021-2023",
            focus: "AgriTech - Rural supply chains and livestock management",
            achievements: [
                "100% traceability across rural Pakistan milk supply chain",
                "20K+ animals digitally tracked",
                "80% reduction in missed field interventions",
                "40% reduction in reconciliation time through ERP integration"
            ]
        },
        recruitment: {
            name: "Recruitment Platform",
            role: "Product Manager",
            focus: "AI-powered candidate matching system",
            achievements: [
                "NLP-powered matching with Word2Vec and cosine similarity",
                "AI-matching with candidate feedback loop"
            ]
        },
        dubizzle: {
            name: "Dubizzle Labs",
            role: "Product Manager",
            focus: "Gym subscription aggregation platform",
            achievements: [
                "One subscription for multi-gym access",
                "Tiered pricing and revenue sharing model"
            ]
        }
    },

    // Detailed Case Studies
    caseStudies: {
        onboarding: {
            title: "Signup & Onboarding Revamp",
            company: "Social Champ",
            problem: "Low Day-1 activation rates due to poor onboarding flow",
            solution: "Revamped signup flow with mandatory account connection and milestone-based product onboarding",
            approach: [
                "Analyzed user drop-off points in onboarding funnel",
                "Implemented mandatory social media account connection",
                "Created milestone-based progress tracking",
                "Added contextual help and guidance"
            ],
            result: "171% Day-1 activation boost",
            metrics: ["Day-1 activation", "Time to first value", "User retention"]
        },
        automation: {
            title: "Engagement Automation",
            company: "Social Champ",
            problem: "High manual moderation workload affecting team productivity",
            solution: "Keyword-based rule engine for automated message handling and team routing",
            approach: [
                "Built keyword classification system",
                "Created automated routing rules",
                "Implemented priority-based task assignment",
                "Added escalation protocols for complex cases"
            ],
            result: "30-40% reduction in moderation workload",
            metrics: ["Moderation efficiency", "Response time", "Team productivity"]
        },
        supplyChain: {
            title: "Milk Supply Chain Digitization",
            company: "Waseela",
            problem: "No traceability in rural Pakistan milk collection",
            solution: "Digitized milk collection with SKU tracking and automated agent payments",
            approach: [
                "Designed mobile app for field agents",
                "Implemented QR code-based tracking system",
                "Built automated payment processing",
                "Created real-time inventory management"
            ],
            result: "100% traceability across rural Pakistan",
            metrics: ["Traceability", "Payment accuracy", "Collection efficiency"]
        }
    },

    // Skills and Expertise
    skills: {
        productManagement: [
            "User Research & Analytics",
            "A/B Testing & Experimentation", 
            "Roadmapping & Strategy",
            "Cross-functional team leadership",
            "Data-driven decision making",
            "Agile/Scrum methodologies",
            "Stakeholder management"
        ],
        technical: [
            "Figma", "Amplitude", "GA4", "Jira",
            "SQL", "Python (basic)",
            "API integrations",
            "ERP systems (Odoo)",
            "AI/ML concepts"
        ],
        domains: [
            "B2B SaaS", "AgriTech", "Fintech",
            "Social Media", "Recruitment", "Health & Fitness"
        ]
    },

    // Common Questions and Answers
    faqs: {
        "What is Bilal's approach to product management?": "Bilal combines strategic thinking with measurable impact. He focuses on understanding user needs through field research, then rapidly prototypes solutions. His approach emphasizes simplicity, impact, and clarity while maintaining strong systems thinking.",
        
        "What are Bilal's biggest achievements?": "Bilal's key achievements include a 171% Day-1 activation boost at Social Champ, 100% traceability across rural Pakistan's milk supply chain, 30-40% reduction in moderation workload through automation, and tracking 20K+ animals digitally.",
        
        "What industries has Bilal worked in?": "Bilal has experience across multiple industries: B2B SaaS (Social Champ), AgriTech (Waseela), Fintech (payment systems), Social Media (automation), Recruitment (AI matching), and Health & Fitness (gym subscriptions).",
        
        "How does Bilal handle complex projects?": "Bilal breaks down complex projects by first understanding the business problem, then aligning every piece with the bigger picture. He uses data-driven decision making, cross-functional collaboration, and focuses on measurable outcomes."
    },

    // Response Guidelines
    responseStyle: {
        tone: "Professional yet warm and approachable",
        length: "Concise but informative (2-3 sentences typically)",
        focus: "Business impact and strategic thinking",
        examples: "Provide specific metrics and case studies when relevant",
        redirection: "Politely redirect to Bilal's areas of expertise if asked about unrelated topics"
    }
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BILAL_KNOWLEDGE;
} 