import { SiteData } from './types';

export const siteData: SiteData = {
    hero: {
        A: {
            headline: "I design products that reduce friction and move metrics.",
            subtext: "Craft, logic, and empathy applied to real-world product constraints. Focused on clarity, systems, and measurable outcomes."
        },
        B: {
            headline: "Every product tells a story.\nI design the parts where users hesitate, decide, and move forward.",
            subtext: "A decade of designing products by understanding where people get stuck — and why."
        }
    },
    intro: {
        content: [
            "Most users don't fail because they don't understand products.",
            "They fail because products don't understand them.",
            "My work focuses on moments of friction — the pauses, doubts, and drop-offs — and redesigning those moments into clear paths forward."
        ]
    },
    values: [
        {
            title: "Product Thinking",
            description: "I design with business goals, user behavior, and technical constraints in mind."
        },
        {
            title: "Systems Clarity",
            description: "I simplify complex problems into clear flows, structures, and decision paths."
        },
        {
            title: "Craft & Execution",
            description: "I care about detail, consistency, and scalable design systems."
        },
        {
            title: "Impact & Metrics",
            description: "Every project ties design decisions to measurable outcomes."
        }
    ],
    projects: [
        {
            id: "fintech-onboarding",
            universeContent: {
                A: {
                    title: "Global Fintech Onboarding",
                    goal: "Users were dropping off during onboarding due to unclear steps and repeated data entry.",
                    outcome: "+14% increase in paid activations",
                    timeframe: "7 weeks",
                    role: "Product Design Lead (UX, UI, interaction design, collaboration with PM and engineering)",
                    problemContext: {
                        problem: "New users were abandoning onboarding at Step 3. The flow required repeated data entry and did not clearly explain why certain information was needed. This caused low trust, increased hesitation, and drop-offs before account activation. From a business perspective, this directly impacted paid conversions.",
                        constraints: [
                            "Regulatory requirements for KYC",
                            "Legacy backend validation rules",
                            "Limited engineering bandwidth",
                            "Fixed launch deadline"
                        ]
                    },
                    insights: [
                        "Users were unsure how long onboarding would take",
                        "Repeated fields created frustration",
                        "Lack of progress feedback increased anxiety",
                        "Trust signals appeared too late in the flow"
                    ],
                    designPrinciples: [
                        "Reduce cognitive load at each step",
                        "Eliminate repeated inputs wherever possible",
                        "Set expectations early",
                        "Reinforce trust before asking sensitive information"
                    ],
                    uxDecisions: [
                        {
                            problem: "Users dropped off after identity verification",
                            optionsConsidered: [
                                "Split into multiple micro-steps",
                                "Combine steps with clearer context"
                            ],
                            finalDecision: "Combine steps with contextual explanations",
                            reason: "Reduced perceived effort without increasing complexity"
                        },
                        {
                            problem: "Users didn't know how many steps remained",
                            optionsConsidered: [
                                "No progress indicator",
                                "Linear progress bar"
                            ],
                            finalDecision: "Add a simple progress indicator",
                            reason: "Set clear expectations and reduced anxiety"
                        }
                    ],
                    metrics: [
                        { label: "Onboarding Completion", value: "+27%" },
                        { label: "Paid Activations", value: "+14%" },
                        { label: "Time to Complete", value: "-14s" },
                        { label: "Support Tickets", value: "-33%" }
                    ],
                    reflection: "This project reinforced the importance of setting expectations early. Small clarity improvements had a large impact on user confidence and completion."
                },
                B: {
                    title: "Global Fintech Onboarding",
                    hook: "Millions of users started onboarding.\nMany never finished.",
                    chapters: [
                        {
                            title: "The Moment",
                            content: [
                                "The drop-off didn't happen at the start.",
                                "It happened when users were already invested.",
                                "Step 3 asked for sensitive information, without explaining why.",
                                "Users paused.",
                                "Some left."
                            ]
                        },
                        {
                            title: "What Users Felt",
                            content: [
                                "The flow felt longer than it actually was.",
                                "Repeated fields created frustration.",
                                "Unclear progress increased anxiety.",
                                "Trust wasn't broken — it was never established early enough."
                            ]
                        },
                        {
                            title: "The Constraints",
                            content: [
                                "The system couldn't be rebuilt from scratch.",
                                "Regulatory requirements were fixed.",
                                "Engineering time was limited.",
                                "The solution had to work within reality."
                            ]
                        },
                        {
                            title: "The Shift",
                            content: [
                                "Instead of asking users to push through friction,",
                                "the flow was redesigned to guide them through it.",
                                "Changes introduced:",
                                "• Clear expectations upfront",
                                "• Fewer repeated inputs",
                                "• Visible progress",
                                "• Trust cues before sensitive steps"
                            ]
                        },
                        {
                            title: "The Result",
                            content: [
                                "Completion increased.",
                                "Time spent decreased.",
                                "Confidence improved."
                            ]
                        }
                    ],
                    metrics: [
                        { label: "Onboarding Completion", value: "+27%" },
                        { label: "Paid Activations", value: "+14%" },
                        { label: "Time to Complete", value: "-14s" }
                    ],
                    narrativeReflection: "The biggest change wasn't visual.\nIt was psychological.\n\nWhen users understand what's coming next, they move forward with confidence."
                }
            }
        },
        {
            id: "b2b-dashboard",
            universeContent: {
                A: {
                    title: "B2B Dashboard Simplification",
                    goal: "Enterprise users struggled to find critical data due to dense layouts and unclear hierarchy.",
                    outcome: "-32% task completion time",
                    timeframe: "8 weeks",
                    role: "Product Design Lead",
                    problemContext: {
                        problem: "Enterprise users struggled to find critical data due to dense layouts and unclear hierarchy. This led to inefficiency, frustration, and increased support burden.",
                        constraints: [
                            "Complex data relationships",
                            "Multiple user roles with different needs",
                            "Legacy codebase constraints",
                            "Minimal disruption to existing workflows"
                        ]
                    },
                    insights: [
                        "Users spent too much time searching for key metrics",
                        "Information density was overwhelming",
                        "Navigation patterns were inconsistent",
                        "Critical actions were buried in menus"
                    ],
                    designPrinciples: [
                        "Surface critical information first",
                        "Create clear visual hierarchy",
                        "Reduce cognitive load through progressive disclosure",
                        "Maintain consistency across modules"
                    ],
                    uxDecisions: [
                        {
                            problem: "Users couldn't find key data quickly",
                            optionsConsidered: [
                                "Keep existing layout with minor tweaks",
                                "Complete information architecture redesign"
                            ],
                            finalDecision: "Restructure dashboard with priority-based layout",
                            reason: "Addressed root cause while maintaining familiarity"
                        }
                    ],
                    metrics: [
                        { label: "Task Completion Time", value: "-32%" },
                        { label: "Feature Adoption", value: "+21%" },
                        { label: "Support Tickets", value: "-18%" }
                    ],
                    reflection: "Simplification is not about removing features—it's about organizing them so users can find what they need when they need it."
                },
                B: {
                    title: "B2B Dashboard Simplification",
                    hook: "Data was everywhere.\nAnswers were hard to find.",
                    chapters: [
                        {
                            title: "The Moment",
                            content: [
                                "Enterprise users logged in every day.",
                                "They needed answers quickly.",
                                "But the dashboard showed everything at once.",
                                "Important metrics were buried.",
                                "Time was wasted searching."
                            ]
                        },
                        {
                            title: "What Users Felt",
                            content: [
                                "Overwhelmed by information density.",
                                "Frustrated by inconsistent navigation.",
                                "Confused about where to find what they needed.",
                                "They weren't failing to use the product — the product was failing them."
                            ]
                        },
                        {
                            title: "The Constraints",
                            content: [
                                "The data relationships were complex.",
                                "Different roles needed different views.",
                                "The legacy codebase limited what could change.",
                                "Existing workflows couldn't be disrupted."
                            ]
                        },
                        {
                            title: "The Shift",
                            content: [
                                "Instead of showing everything,",
                                "the dashboard was redesigned to show what matters first.",
                                "Changes introduced:",
                                "• Priority-based layout",
                                "• Clear visual hierarchy",
                                "• Progressive disclosure",
                                "• Consistent navigation patterns"
                            ]
                        },
                        {
                            title: "The Result",
                            content: [
                                "Tasks completed faster.",
                                "Features were discovered.",
                                "Support burden decreased."
                            ]
                        }
                    ],
                    metrics: [
                        { label: "Task Completion Time", value: "-32%" },
                        { label: "Feature Adoption", value: "+21%" },
                        { label: "Support Tickets", value: "-18%" }
                    ],
                    narrativeReflection: "Simplification isn't about removing.\nIt's about organizing.\n\nWhen users can find what they need, they stop asking for help."
                }
            }
        },
        {
            id: "payments-flow",
            universeContent: {
                A: {
                    title: "Consumer Payments Flow Redesign",
                    goal: "Users hesitated during payment due to low trust signals and unclear confirmations.",
                    outcome: "+19% successful transactions",
                    timeframe: "6 weeks",
                    role: "Product Design Lead",
                    problemContext: {
                        problem: "Users hesitated during payment due to low trust signals and unclear confirmations. Drop-offs at the confirmation step were significantly impacting revenue.",
                        constraints: [
                            "Payment processor limitations",
                            "Security compliance requirements",
                            "Cross-platform consistency needed",
                            "Tight timeline for launch"
                        ]
                    },
                    insights: [
                        "Users were unsure if payment would go through",
                        "Trust signals were missing at critical moments",
                        "Confirmation page lacked clarity",
                        "Error recovery was confusing"
                    ],
                    designPrinciples: [
                        "Build trust at every step",
                        "Provide clear confirmations",
                        "Make recovery from errors easy",
                        "Reduce friction without sacrificing security"
                    ],
                    uxDecisions: [
                        {
                            problem: "High drop-off at confirmation step",
                            optionsConsidered: [
                                "Add more security badges",
                                "Simplify confirmation with clear summary"
                            ],
                            finalDecision: "Redesign confirmation with clear breakdown and trust cues",
                            reason: "Addressed both trust and clarity issues simultaneously"
                        }
                    ],
                    metrics: [
                        { label: "Successful Transactions", value: "+19%" },
                        { label: "Confirmation Drop-offs", value: "-26%" },
                        { label: "Repeat Usage", value: "+11%" }
                    ],
                    reflection: "Trust is earned in small moments. The right information at the right time can significantly reduce hesitation."
                },
                B: {
                    title: "Consumer Payments Flow",
                    hook: "Users reached the final step.\nThen hesitated.",
                    chapters: [
                        {
                            title: "The Moment",
                            content: [
                                "The payment page loaded.",
                                "Users had entered their details.",
                                "They were one click away from completing.",
                                "But something made them pause.",
                                "And many never clicked."
                            ]
                        },
                        {
                            title: "What Users Felt",
                            content: [
                                "Uncertain if the payment would actually go through.",
                                "Missing the reassurance they needed.",
                                "Confused by what would happen next.",
                                "Trust wasn't built — it was assumed."
                            ]
                        },
                        {
                            title: "The Constraints",
                            content: [
                                "Payment processors had limitations.",
                                "Security compliance was non-negotiable.",
                                "The experience needed to work across platforms.",
                                "The timeline was tight."
                            ]
                        },
                        {
                            title: "The Shift",
                            content: [
                                "Instead of assuming trust,",
                                "the flow was redesigned to earn it.",
                                "Changes introduced:",
                                "• Clear payment breakdown",
                                "• Trust cues at the right moment",
                                "• Explicit confirmation of what happens next",
                                "• Easy error recovery"
                            ]
                        },
                        {
                            title: "The Result",
                            content: [
                                "More transactions completed.",
                                "Fewer drop-offs at confirmation.",
                                "Users came back."
                            ]
                        }
                    ],
                    metrics: [
                        { label: "Successful Transactions", value: "+19%" },
                        { label: "Confirmation Drop-offs", value: "-26%" },
                        { label: "Repeat Usage", value: "+11%" }
                    ],
                    narrativeReflection: "Trust isn't given.\nIt's earned in small moments.\n\nThe right information at the right time changes everything."
                }
            }
        }
    ],
    process: {
        heading: "How I Approach Product Design",
        steps: [
            {
                title: "Understand the Problem",
                description: "Clarify business goals, user needs, and constraints."
            },
            {
                title: "Identify Friction",
                description: "Analyze where users hesitate, drop off, or make mistakes."
            },
            {
                title: "Define Principles",
                description: "Establish clear design principles before exploring solutions."
            },
            {
                title: "Explore & Decide",
                description: "Evaluate options, make trade-offs, and align with stakeholders."
            },
            {
                title: "Build & Validate",
                description: "Design, test, iterate, and measure outcomes."
            }
        ]
    },
    processB: {
        heading: "How Stories Shape My Design Process",
        steps: [
            {
                title: "Observe the Moment",
                description: "Identify where users pause, hesitate, or abandon."
            },
            {
                title: "Understand the Emotion",
                description: "Clarify what users are feeling at that moment."
            },
            {
                title: "Respect Constraints",
                description: "Design within technical, business, and regulatory limits."
            },
            {
                title: "Reduce Friction",
                description: "Simplify decisions and remove unnecessary effort."
            },
            {
                title: "Measure the Outcome",
                description: "Validate whether confidence and completion improved."
            }
        ]
    },
    about: {
        heading: "About Me",
        content: [
            "I am a product designer with a focus on clarity, systems, and measurable impact.",
            "Over the past decade, I've worked on fintech, B2B, and consumer products, collaborating closely with product managers and engineers.",
            "I believe good design reduces friction, supports decision-making, and aligns user needs with business goals."
        ]
    },
    aboutB: {
        heading: "The Designer Behind the Work",
        content: [
            "I approach product design as a form of problem storytelling.",
            "Every screen represents a moment where a user makes a decision. My role is to reduce uncertainty and help them move forward.",
            "Over the last decade, I've worked across fintech, B2B, and consumer products, focusing on clarity, systems, and outcomes."
        ]
    },
    contact: {
        heading: "Let's Work Together",
        content: "If you're building a product and care about clarity, systems, and outcomes, feel free to reach out.",
        email: "arpitshrm4@gmail.com",
        linkedin: "linkedin.com/in/arpitshrma"
    },
    contactB: {
        heading: "Start a Conversation",
        content: "If you're building a product and want to improve how users experience key moments, let's talk."
    },
    footer: {
        copyright: "Arpit Sharma",
        dimension: "Human",
        perspective: "Perspective 01 of the Multiverse",
        tagline: "The journey continues."
    }
};
