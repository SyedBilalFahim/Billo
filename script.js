// Case Studies Data
const caseStudies = {
    1: {
        title: "Turning Drop-Offs Into Day-1 Activations",
        company: "Social Champ Inc",
        role: "Product Manager (Growth, Activation, UX Flow)",
        context: "B2B SaaS – Social Media Scheduling Platform",
        timeline: "Q1-Q2 2025",
        tools: "Figma, Amplitude, GA4, Open Replay, Clickup",
        problem: "Social Champ had a leaky funnel right after signup. While the top of the funnel was healthy, most users never connected a social account, never scheduled a post, and left the platform within minutes. A large percentage were spammers or aimless roamers, leading to poor Day-1 activation, no feature discovery, and no data to nurture or upsell.",
        goal: "Create a friction-for-good signup journey and a milestone-based onboarding system that filters out low-intent users, activates high-intent users on Day 1, and personalizes the product journey to increase retention.",
        approach: [
            "Mandatory Social Account Connection During Signup - Instead of letting users roam free, we added mandatory account connection upfront, creating friction that filtered out spam.",
            "Milestone Mapping - Defined key actions for activation: connect account, create first post, schedule post, publish post, view analytics.",
            "Personalized Onboarding Flows - Users answered 'What are you here for?' → [Agency, SMB, Influencer, Personal]. Based on intent: different onboarding checklists, relevant features highlighted, targeted tooltips.",
            "Iterative Testing with Analytics - Used Amplitude, GA4, and Open Replay to measure drop-offs, A/B test flow variations, validate behavior-based tweaks."
        ],
        features: [
            "Onboarding checklist with progress indicators",
            "Friction-based signup gate: can't proceed without connecting an account",
            "Segmented onboarding by intent",
            "Tooltip nudges and inline CTAs for next steps"
        ],
        outcomes: [
            "171% increase in Day-1 activation rate (17% → 46%)",
            "38% more users completed at least 3 milestones",
            "Reduction in spam signups and drop-offs",
            "Higher retention and better trial-to-paid conversion tracking"
        ],
        whatWorked: [
            "Good friction = Higher intent and less noise",
            "Milestone-based journeys outperform generic walkthroughs",
            "Personalization boosted completion and motivation",
            "Clear action-feedback loops kept users progressing"
        ]
    },
    2: {
        title: "Engagement Automation",
        company: "Social Champ",
        role: "Product Manager (Automation & UX Flow)",
        context: "B2B SaaS – Social Media Engagement Suite",
        timeline: "Q4 2024",
        tools: "Figma, Jira, Meta API, Mixpanel",
        problem: "Power users (especially agencies and customer support teams) were receiving hundreds of DMs and comments across Facebook, Instagram, LinkedIn, and X. Manual moderation and tagging led to missed replies, slow response times, and burnout for high-usage teams. There was no way to automate the engagement inbox.",
        goal: "Create an engagement automation system that lets users define custom rules based on keywords or phrases, triggers actions like hide comment, assign to team member, mark as read, and reduces manual load and improves inbox hygiene.",
        approach: [
            "Keyword-Based Rule Engine - Users create keyword triggers: e.g. 'refund', 'price', 'hate'. Real-time message parsing detects those words.",
            "No-Code Action Builder - Rule = 'IF keyword THEN action'. Actions include: mark as read, hide comment, auto-assign to team member, add tag, archive or flag.",
            "Team Collaboration Layer - Created user roles and routing logic: support → complaints, sales → leads, spam → auto-hide.",
            "Test Mode + Logs - Users preview how rules behave before going live. Logs track which rule triggered what, for transparency."
        ],
        features: [
            "Keyword triggers for DMs, comments, mentions",
            "Action builder (multi-step rules supported)",
            "Role-based routing (team inbox mapping)",
            "Test mode for safe rule previews",
            "Logs & audit trail for clarity"
        ],
        outcomes: [
            "30–40% reduction in manual moderation time for high-volume users",
            "Faster inbox zero with reduced message backlog",
            "Teams reported less context-switching and better message ownership",
            "Improved CSAT for support use cases"
        ],
        whatWorked: [
            "Built for power users, with their exact messaging pain points in mind",
            "Simple rule builder → Complex outcomes, no code required",
            "Test before publish built user trust",
            "Real-time execution ensured immediate wins"
        ]
    },
    3: {
        title: "Milk Supply Chain Management System",
        company: "Waseela",
        role: "Associate Product Manager (Strategy, Systems Design, Field Research)",
        context: "AgriTech startup working in rural Pakistan",
        timeline: "March 2024 – Oct 2024",
        tools: "Node JS, React JS, MongoDB, Figma, ERP APIs, GPS tracking",
        problem: "Pakistan's dairy sector had zero traceability from cow to collection, corruption in milk payments, manual recordkeeping in distant rural zones, and no way to track agent-level performance or center efficiency.",
        goal: "Build a digitized milk supply chain system that tracks every milk deposit as a unique SKU, maps regional operations hierarchically (agent → area manager → SCM), links data to ERP for real-time inventory and financial sync, and automates volume-based payments to reduce fraud.",
        approach: [
            "Field Discovery - Rode with collection agents in South Punjab, interviewed farmers, SCMs, and cold chain partners, benchmarked against processes at Fauji Foods.",
            "Structured Data Model - Every deposit = record with volume, center, agent, GPS. Deposits stored as SKU-like entries for ERP sync.",
            "Role-Based Dashboards - Agents → Add deposit logs, Area Managers → Approve, monitor center inflows, SCM Leads → Oversee region-wide performance.",
            "ERP Integration + Payout Logic - Linked SKUs to warehouse inflow, synced payouts to verified volumes per agent."
        ],
        features: [
            "Milk deposits as SKUs",
            "Role-based dashboards for agents, managers, SCM leads",
            "Geo-based center mapping",
            "Automated agent payment logic",
            "ERP + warehouse sync"
        ],
        outcomes: [
            "Enabled traceability for 100% of milk deposits",
            "Improved operational oversight across 5+ regions",
            "Reduced payout fraud risk with verified entries",
            "Created ERP-ready model for warehouse integration"
        ],
        whatWorked: [
            "Ground-level field discovery",
            "Hierarchy-specific UX and permissions",
            "Treating milk as inventory made tech adoption easier",
            "Payment incentives aligned with digital logging"
        ]
    },
    4: {
        title: "Vet Management System with ERP Integration",
        company: "Waseela",
        role: "Associate Product Manager (UX + ERP Integration)",
        context: "National-scale livestock traceability system",
        timeline: "February 2024 – August 2024",
        tools: "Node JS, React JS, MongoDB, Figma, ERP APIs, GPS tracking",
        problem: "No system existed to track individual animals, no medical history, vaccination, or movement tracking, low meat and milk quality + poor disease response, and manual logs led to data loss and corruption.",
        goal: "Create a Vet Management System (VMS) that digitizes animal profiles and medical logs, tracks treatments, vaccinations, deworming, syncs with ERP for traceability from animal to milk/meat, and enables disease surveillance and regulatory control.",
        approach: [
            "Animal Lifecycle Tracking - Each cow tagged with unique ID, profile stores: breed, owner, medical logs, pregnancy cycle.",
            "Vet Mobile Entry System - Field vets log treatments (meds, visits, vaccine type), offline-first; synced on signal return.",
            "ERP Sync - Animal data tied to milk deposit and processing SKUs, built backtrace logic from warehouse → animal."
        ],
        features: [
            "Unique animal IDs",
            "Vet logs: prescriptions, vaccines, checkups",
            "Area-specific dashboards",
            "ERP linkage to SKUs",
            "Analytics for outbreak and health trends"
        ],
        outcomes: [
            "20,000+ animals tracked with full lifecycle logs",
            "Enabled disease trend mapping",
            "Made origin-based traceability for milk & meat possible",
            "Created framework for rapid epidemic response"
        ],
        whatWorked: [
            "Cross-functional discovery (vets, ERP, SCM)",
            "Seamless ERP integration with animal records",
            "On-ground design: mobile UX built for low-connectivity"
        ]
    },
    5: {
        title: "Field Officer Task Management",
        company: "Waseela",
        role: "Associate Product Manager (Task Automation & Field Ops UX)",
        context: "Agri-vet and dairy logistics",
        timeline: "July 2024 – August 2024",
        tools: "Node JS, React JS, MongoDB, Figma, ERP APIs, GPS tracking",
        problem: "Officers missed key animal interventions like deworming and vaccines, no system to schedule or remind field visits, workload management was reactive, not planned, and area managers had no visibility into field activity.",
        goal: "Build a recurring task engine that auto-generates treatment tasks based on lifecycle stage, assigns tasks to relevant field officers, tracks completions and overdue actions, and syncs to ERP and vet logs.",
        approach: [
            "Synced task engine with vet database",
            "Created rules like: deworming every 90 days, vaccines by season and age",
            "Officers receive daily checklist on mobile",
            "Managers get dashboard by area/team/task"
        ],
        features: [
            "Auto-generated tasks by animal lifecycle",
            "Mobile taskboard with offline sync",
            "Manager dashboards with filters",
            "Push reminders for overdue tasks"
        ],
        outcomes: [
            "Reduced missed interventions by 80%",
            "Improved treatment coverage tracking",
            "Made field visits traceable and reportable",
            "Enabled performance-based reviews for field officers"
        ],
        whatWorked: [
            "Plugged into existing vet logs",
            "Designed for how officers actually work (mobile-first, simple UX)",
            "Shifted culture from memory → structured fieldwork"
        ]
    },
    6: {
        title: "ERP + Fintech Integration Using Odoo",
        company: "Waseela",
        role: "Associate Product Manager (Finance Ops + ERP)",
        context: "Agri supply chain with financial complexity",
        timeline: "April – July 2024",
        tools: "Odoo ERP, Custom APIs, Node JS, React JS, MongoDB, Figma, ERP APIs, GPS tracking",
        problem: "Manual ledgers, Excel sheets, WhatsApp approvals, agent payouts delayed, vendor invoices hard to reconcile, and no link between operations and finance.",
        goal: "Implement Odoo ERP to automate payments and commissions, track inventory and procurement, sync operational actions with cash flow, and cut out fraud-prone workflows.",
        approach: [
            "Finance Stack Setup - Invoicing, PO approvals, agent payouts, inventory logs",
            "Payout Rules - Agents paid based on verified deposit volumes, reimbursements tied to field task logs",
            "Warehouse Integration - Inventory updated from field input and ERP movement, SKU tracking enabled reconciliation"
        ],
        features: [
            "Auto-payouts and invoice verification",
            "Inventory and warehouse sync",
            "Role-based finance dashboards",
            "PO, GRN, and SKU reconciliation workflows"
        ],
        outcomes: [
            "Cut reconciliation time by 40%",
            "Transparent cash flow tracking",
            "Reduced payment disputes by linking to action logs",
            "Created audit-ready ERP system for rural ops"
        ],
        whatWorked: [
            "Mapped real ops → ERP logic",
            "Embedded finance into field workflows",
            "Lean ERP setup that scaled with complexity"
        ]
    },
    7: {
        title: "Unified Tagging System",
        company: "Recruitment Platform",
        role: "Product Manager (AI Logic + UX + System Design)",
        context: "Smart hiring product prototype",
        timeline: "January 2024",
        tools: "Word2Vec, BERT, Figma, ChatGPT",
        problem: "Recruiters waste time on irrelevant applicants, candidates miss out on ideal jobs, and feedback loops were nonexistent.",
        goal: "Create a tag-based hiring platform that generates skill tags from resumes, JDs, and interview feedback, scores candidate fit using cosine similarity, and creates a loop of matching + feedback + smart filtering.",
        approach: [
            "NLP engine parses resumes + job descriptions",
            "Each entity tagged using Word2Vec or spaCy",
            "Candidate applications scored against job tags",
            "Feedback loop: interview tags update candidate score"
        ],
        features: [
            "Auto-tagging engine (Word2Vec)",
            "Cosine similarity scoring for match quality",
            "Interview feedback → updated tags",
            "Talent pooling by score for future jobs"
        ],
        outcomes: [
            "Made hiring less manual",
            "Smarter shortlist + interview planning",
            "Stored rejected candidates for future fit"
        ],
        whatWorked: [
            "AI-enhanced tagging from all inputs",
            "Scoring based on alignment, not just keywords",
            "Feedback loop added intelligence over time"
        ]
    },
    8: {
        title: "Gym Subscription App",
        company: "Dubizzle Labs",
        role: "Product Strategist (UX, Pricing, Flow Design)",
        context: "Concept App for Gym Aggregation",
        timeline: "December 2023 – January 2024",
        tools: "Figma, Flow Diagrams, Revenue Models",
        problem: "Gym memberships are expensive and siloed, users want variety + flexibility, and gym owners want more traffic but lack discovery.",
        goal: "Build an app that offers tiered plans (Gold, Silver, Bronze), lets users access multiple gyms with one subscription, and automatically splits revenue among gyms.",
        approach: [
            "User signs up, chooses tier, checks into gyms via QR",
            "Gyms list amenities and pricing",
            "Platform logs usage → splits payout monthly"
        ],
        features: [
            "Geolocation gym discovery",
            "QR-based check-in",
            "Dynamic revenue share engine",
            "Dashboards for gym owners"
        ],
        outcomes: [
            "Balanced benefits for users and gyms",
            "Flexible fitness journeys",
            "Created scalable model for other service verticals"
        ],
        whatWorked: [
            "Win-win revenue model",
            "Simple user experience",
            "Scalable to other service categories"
        ]
    }
};

// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const modal = document.getElementById('case-study-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.querySelector('.close');
const caseStudyCards = document.querySelectorAll('.case-study-card');
const contactForm = document.getElementById('contact-form');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Case Study Modal Functions
function openModal(caseId) {
    const caseStudy = caseStudies[caseId];
    if (!caseStudy) return;

    const modalHTML = `
        <div class="case-study-detail">
            <div class="case-study-header">
                <h2>${caseStudy.title}</h2>
                <span class="company">${caseStudy.company}</span>
            </div>
            
            <div class="case-study-meta">
                <div class="meta-item">
                    <strong>Role:</strong> ${caseStudy.role}
                </div>
                <div class="meta-item">
                    <strong>Context:</strong> ${caseStudy.context}
                </div>
                <div class="meta-item">
                    <strong>Timeline:</strong> ${caseStudy.timeline}
                </div>
                <div class="meta-item">
                    <strong>Tools:</strong> ${caseStudy.tools}
                </div>
            </div>

            <div class="case-study-section">
                <h3>🧠 The Problem</h3>
                <p>${caseStudy.problem}</p>
            </div>

            <div class="case-study-section">
                <h3>🎯 The Goal</h3>
                <p>${caseStudy.goal}</p>
            </div>

            <div class="case-study-section">
                <h3>🛠 Approach</h3>
                <ol>
                    ${caseStudy.approach.map(item => `<li>${item}</li>`).join('')}
                </ol>
            </div>

            <div class="case-study-section">
                <h3>✨ Key Features</h3>
                <ul>
                    ${caseStudy.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>

            <div class="case-study-section">
                <h3>📈 Outcomes</h3>
                <ul>
                    ${caseStudy.outcomes.map(outcome => `<li>${outcome}</li>`).join('')}
                </ul>
            </div>

            <div class="case-study-section">
                <h3>🧠 What Made It Work</h3>
                <ul>
                    ${caseStudy.whatWorked.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    modalContent.innerHTML = modalHTML;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event Listeners
caseStudyCards.forEach(card => {
    card.addEventListener('click', () => {
        const caseId = parseInt(card.getAttribute('data-case'));
        openModal(caseId);
    });
});

closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
    }
});

// Contact Form Handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert(`Thank you for your message, ${name}! I'll get back to you at ${email} soon.`);
    
    // Reset form
    contactForm.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.case-study-card, .testimonial-card, .about-content, .resume-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add CSS for modal content
const modalStyles = `
    <style>
        .case-study-detail {
            line-height: 1.7;
        }
        
        .case-study-detail h2 {
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        
        .case-study-detail .company {
            color: var(--accent-color);
            font-weight: 500;
            font-size: 1.1rem;
        }
        
        .case-study-meta {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
            padding: 1.5rem;
            background: var(--background-light);
            border-radius: var(--border-radius);
        }
        
        .meta-item {
            font-size: 0.9rem;
        }
        
        .meta-item strong {
            color: var(--primary-color);
        }
        
        .case-study-section {
            margin: 2rem 0;
        }
        
        .case-study-section h3 {
            color: var(--primary-color);
            margin-bottom: 1rem;
            font-size: 1.3rem;
        }
        
        .case-study-section ul,
        .case-study-section ol {
            margin-left: 1.5rem;
        }
        
        .case-study-section li {
            margin-bottom: 0.5rem;
            color: var(--text-secondary);
        }
        
        @media (max-width: 768px) {
            .case-study-meta {
                grid-template-columns: 1fr;
            }
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', modalStyles); 