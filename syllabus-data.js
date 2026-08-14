/**
 * Panjab University BCA 1st Semester — Comprehensive Academic Study Notes & Curriculum Manual
 * Aligned with the official PU NEP 2026–27 Framework.
 * Auto-synced with MCP Academic Server
 */

const BCA_1ST_SEM_DATA = {
  "session": "2026-2027",
  "university": "Panjab University, Chandigarh",
  "course": "Bachelor of Computer Applications (BCA) - Semester 1 (NEP Framework)",
  "marksScheme": [
    {
      "code": "BCA-DSC-1(Maj)-101A",
      "name": "Introduction to Web Technologies",
      "credits": 4,
      "internal": 5,
      "external": 45,
      "practical": 50,
      "total": 100
    },
    {
      "code": "BCA-DSC-1(Min)-103",
      "name": "Problem Solving Through C",
      "credits": 4,
      "internal": 5,
      "external": 45,
      "practical": 50,
      "total": 100
    },
    {
      "code": "BCA-DSC-1(Maj)-102",
      "name": "Fundamentals of Mathematical Statistics",
      "credits": 4,
      "internal": 10,
      "external": 90,
      "practical": 0,
      "total": 100
    },
    {
      "code": "CSA-VAC-102",
      "name": "Introduction to Computer Hardware",
      "credits": 2,
      "internal": 5,
      "external": 45,
      "practical": 0,
      "total": 50
    },
    {
      "code": "AEC-1-101",
      "name": "English-1 (Communication Skills)",
      "credits": 2,
      "internal": 5,
      "external": 45,
      "practical": 0,
      "total": 50
    },
    {
      "code": "PUN-COMPL-101 / HCP-101",
      "name": "Punjabi Compulsory / History & Culture of Punjab",
      "credits": 2,
      "internal": 5,
      "external": 45,
      "practical": 0,
      "total": 50
    },
    {
      "code": "CSA-MDC-101",
      "name": "E-Commerce & Digital Trends",
      "credits": 3,
      "internal": 5,
      "external": 70,
      "practical": 0,
      "total": 75
    }
  ],
  "subjects": [
    {
      "id": "web-tech",
      "code": "BCA-DSC-1(Maj)-101A",
      "title": "Introduction to Web Technologies",
      "type": "Major Core",
      "credits": 4,
      "theoryHours": 30,
      "practicalHours": 30,
      "assessment": {
        "internal": 5,
        "external": 45,
        "practical": 50,
        "total": 100
      },
      "icon": "fa-code",
      "bgClass": "bg-emerald",
      "description": "Front-end web development covering internet architecture, client-server models, HTML5 semantic structure, CSS3 responsive layouts (Flexbox/Grid), and client-side JavaScript DOM scripting.",
      "tags": [
        "HTML5",
        "CSS3",
        "JavaScript",
        "DNS",
        "HTTP/HTTPS",
        "Flexbox",
        "DOM"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "Internet Basics & Web Architecture",
          "topics": [
            "History & Evolution of the Internet, ARPANET, TCP/IP Flag Day, WWW, W3C & WAI-ARIA",
            "Client-Server Architecture (2-Tier vs 3-Tier), Browser Subsystems & Web Server Socket Lifecycle",
            "URL Structure, 6-Step DNS Resolution Pipeline, HTTP vs HTTPS & SSL/TLS Handshake",
            "MIME Types, Static vs Dynamic Web Architectures & Web Hosting Paradigms"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "HTML5 Fundamentals & Semantic Structure",
          "topics": [
            "HTML Document Anatomy, Standards Mode, Metadata & Text Formatting Tags",
            "Hyperlinks (Absolute vs Relative, Security rel='noopener noreferrer'), Nested Lists & Tables",
            "HTML5 Semantic Elements (<header>, <nav>, <article>, <section>, <footer>) & Accessible Landmarks",
            "HTML Form Architecture, Input Types, Attributes & Client-Side Validation"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "CSS3 Styling & Responsive Design",
          "topics": [
            "CSS Inclusion Methods, Cascade Principles & Specificity Weight Matrix",
            "CSS Box Model (Content, Padding, Border, Margin; content-box vs border-box)",
            "CSS Positioning Modes (Static, Relative, Absolute, Fixed, Sticky)",
            "CSS3 Flexbox Layout & Mobile-First Responsive Web Design with Media Queries"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "JavaScript Core & DOM Manipulation",
          "topics": [
            "JavaScript Engine Basics, Variables (var, let, const), Data Types & Operators",
            "Control Structures, Functions (Declarations, Expressions, Arrow Functions)",
            "DOM Tree Traversal, Element Selection & Dynamic Attribute/Style Manipulation",
            "Event Handling Lifecycle (Capturing, Target, Bubbling) & Form Validation"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "c-lang",
      "code": "BCA-DSC-1(Min)-103",
      "title": "Problem Solving Through C",
      "type": "Minor Core",
      "credits": 4,
      "theoryHours": 30,
      "practicalHours": 30,
      "assessment": {
        "internal": 5,
        "external": 45,
        "practical": 50,
        "total": 100
      },
      "icon": "fa-terminal",
      "bgClass": "bg-indigo",
      "description": "Structured programming principles, algorithms, flowcharts, 5-stage compilation, control structures, storage classes, pointers, dynamic memory allocation, and data structures in C.",
      "tags": [
        "C Programming",
        "Algorithms",
        "Pointers",
        "DMA",
        "Structures",
        "Storage Classes"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "Algorithms, Flowcharts & C Fundamentals",
          "topics": [
            "Problem Solving Concepts, 5 Algorithm Characteristics & ISO/ANSI Flowcharts",
            "5-Stage C Compilation Lifecycle (Preprocessing, Compiling, Assembling, Linking, Loading)",
            "Data Types, Variables, Constants & 15-Level Operator Precedence / Associativity Table"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "Control Flow & Storage Classes",
          "topics": [
            "Decision Making (if-else, switch-case fall-through phenomenon)",
            "Looping Constructs (Entry-Controlled for/while vs Exit-Controlled do-while)",
            "Storage Classes Comparison Matrix (auto, register, static, extern: Scope, Lifetime, Storage & Default)"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "Modular Functions, Arrays & Strings",
          "topics": [
            "Functions & Parameter Passing: Call by Value vs Call by Reference",
            "1D and 2D Arrays, String Manipulation Functions & 2D Matrix Multiplication Algorithm"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "Pointers, Dynamic Memory Allocation, Structures & Unions",
          "topics": [
            "Pointers & Pointer Arithmetic (sizeof factors), Dangling Pointers & Memory Leaks",
            "Dynamic Memory Allocation (malloc, calloc, realloc, free) on System Heap",
            "Structures vs Unions Comparison Matrix & File Handling Operations"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "math",
      "code": "BCA-DSC-1(Maj)-102",
      "title": "Fundamentals of Mathematical Statistics",
      "type": "Major Core",
      "credits": 4,
      "theoryHours": 60,
      "practicalHours": 0,
      "assessment": {
        "internal": 10,
        "external": 90,
        "practical": 0,
        "total": 100
      },
      "icon": "fa-chart-pie",
      "bgClass": "bg-purple",
      "description": "Mathematical statistics covering frequency distributions, measures of central tendency (Mean, Median, Mode step-deviation derivations), dispersion (QD, SD, CV), Karl Pearson & Spearman rank correlation, and linear regression analysis.",
      "tags": [
        "Statistics",
        "Central Tendency",
        "Standard Deviation",
        "Correlation",
        "Regression"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "Data Collection & Measures of Central Tendency",
          "topics": [
            "Primary vs Secondary Data, Frequency Distributions & Ogives (Median Intersection)",
            "Step-Deviation Derivation for Arithmetic Mean (\\bar{X} = A + \\frac{\\sum f d'}{N} \\times h)",
            "Continuous Median & Mode Formulas & Empirical Relationship (\\text{Mode} = 3\\text{Median} - 2\\text{Mean})"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "Measures of Dispersion & Skewness",
          "topics": [
            "Quartile Deviation (QD = \\frac{Q_3 - Q_1}{2}) & Mean Deviation",
            "Standard Deviation via Step-Deviation Method (\\sigma = h \\sqrt{\\frac{\\sum f d'^2}{N} - (\\frac{\\sum f d'}{N})^2})",
            "Coefficient of Variation (CV = \\frac{\\sigma}{\\bar{X}} \\times 100) for Consistency Analysis"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "Correlation Analysis",
          "topics": [
            "Karl Pearson's Coefficient of Correlation (r) Step-Deviation Formula",
            "Mathematical Proof: -1 \\le r \\le 1 via Quadratic Discriminant (\\Delta \\le 0)",
            "Spearman's Rank Correlation with Tied Ranks Correction (\\frac{m(m^2-1)}{12})"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "Linear Regression Analysis",
          "topics": [
            "Regression Lines (Y on X & X on Y) & Normal Equations Derivation via Least Squares",
            "Properties of Regression Coefficients (b_{yx} \\times b_{xy} = r^2)",
            "Complete Solved Numerical Step-Deviation Example for Correlation & Regression"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "hardware",
      "code": "CSA-VAC-102",
      "title": "Introduction to Computer Hardware",
      "type": "Value Added Course",
      "credits": 2,
      "theoryHours": 30,
      "practicalHours": 0,
      "assessment": {
        "internal": 5,
        "external": 45,
        "practical": 0,
        "total": 50
      },
      "icon": "fa-microchip",
      "bgClass": "bg-cyan",
      "description": "PC architecture, motherboard form factors, modern PCH chipsets, microprocessor registers, memory hierarchies (SRAM vs DRAM), BIOS/UEFI firmware booting, storage interfaces (NVMe vs SATA), and hardware troubleshooting.",
      "tags": [
        "Motherboards",
        "CPU Registers",
        "UEFI vs BIOS",
        "NVMe",
        "SRAM/DRAM",
        "SMPS"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "Hardware Architecture & Motherboards",
          "topics": [
            "System Buses (Data, Address, Control) & Motherboard Form Factors (AT, ATX, Micro-ATX)",
            "Chipset Evolution: Legacy Northbridge/Southbridge vs Modern CPU Direct Die & PCH"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "CPU Internals & Storage Interfaces",
          "topics": [
            "Microprocessor Registers (PC, IR, MAR, MDR, Accumulator, Flags) & 4-Stage Instruction Cycle",
            "Storage Interfaces: PATA vs SATA III vs M.2 NVMe PCIe Protocols"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "Memory Systems & BIOS/UEFI Booting",
          "topics": [
            "Primary Memory: SRAM (Flip-Flop) vs DRAM (Capacitor) Comparison",
            "Firmware Booting: Legacy BIOS (16-bit MBR) vs Modern UEFI (64-bit GPT & Secure Boot)",
            "Storage Partitioning via DISKPART Terminal Utility"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "Power Supply, Peripherals & Maintenance",
          "topics": [
            "SMPS Voltage Outputs, ATX 24-Pin Pinouts & Power Good Signal",
            "Hardware Troubleshooting Diagnostics & POST Beep Code Interpretations"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "english",
      "code": "AEC-1-101",
      "title": "English-1 (Communication Skills & AEC)",
      "type": "Ability Enhancement Course",
      "credits": 2,
      "theoryHours": 30,
      "practicalHours": 0,
      "assessment": {
        "internal": 5,
        "external": 45,
        "practical": 0,
        "total": 50
      },
      "icon": "fa-pen-nib",
      "bgClass": "bg-amber",
      "description": "Business communication process, the 7 Cs, barriers and remedies, 5 stages of active listening, formal block-format correspondence, and applied grammar / subject-verb agreement.",
      "tags": [
        "Communication",
        "7 Cs",
        "Active Listening",
        "Block Letter",
        "Grammar"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "Communication Process & The 7 Cs",
          "topics": [
            "Communication Process (Sender -> Encoding -> Channel -> Decoding -> Receiver -> Feedback)",
            "The 7 Cs of Effective Communication & Non-Verbal Categories (Kinesics, Proxemics, Paralanguage)"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "Barriers to Communication & Active Listening",
          "topics": [
            "Physical, Psychological, Semantic & Cultural Barriers and Remedies",
            "5 Stages of Active Listening (Receiving -> Understanding -> Remembering -> Evaluating -> Responding)"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "Business Correspondence & Professional Writing",
          "topics": [
            "Formal Block-Format Letter Structure & Official Correspondence Standards"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "Applied Writing & Grammar Mastery",
          "topics": [
            "Subject-Verb Agreement Rules (Collective Nouns, Correlative Pronouns, Compound Subjects)"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "punjabi",
      "code": "PUN-COMPL-101 / HCP-101",
      "title": "ਪੰਜਾਬੀ ਲਾਜ਼ਮੀ / History and Culture of Punjab",
      "type": "Language / AEC",
      "credits": 2,
      "theoryHours": 30,
      "practicalHours": 0,
      "assessment": {
        "internal": 5,
        "external": 45,
        "practical": 0,
        "total": 50
      },
      "icon": "fa-landmark",
      "bgClass": "bg-rose",
      "description": "Compulsory Punjabi language (Gurmukhi script 41 letters, Gurmat & Sufi poetry, Punjabi culture/festivals) or HCP (Harappan civilization, religious movements, Sikh evolution, Dal Khalsa & Maharaja Ranjit Singh).",
      "tags": [
        "ਪੰਜਾਬੀ",
        "ਗੁਰਮੁਖੀ",
        "HCP",
        "Harappa",
        "Sikhism",
        "Maharaja Ranjit Singh"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਲਿਪੀ / Ancient Punjab & Harappan Civilization",
          "topics": [
            "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਨਿਕਾਸ ਤੇ ਵਿਕਾਸ, ਪੰਜਾਬ ਨਾਮਕਰਨ (5 ਦਰਿਆ), ਗੁਰਮੁਖੀ ਲਿਪੀ (41 ਅੱਖਰ)",
            "Harappan Civilization Urban Planning (Grid System, Citadel, Great Bath, Drainage)"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "ਮੱਧਕਾਲੀਨ ਕਵਿਤਾ / Religious Movements & Dynastic Rule",
          "topics": [
            "ਗੁਰਮਤਿ ਕਾਵਿ (ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ: ਕਿਰਤ ਕਰੋ, ਵੰਡ ਛਕੋ, ਨਾਮ ਜਪੋ) ਅਤੇ ਸੂਫ਼ੀ ਕਾਵਿ (ਬਾਬਾ ਫ਼ਰੀਦ, ਬੁਲ੍ਹੇ ਸ਼ਾਹ)",
            "Jainism, Buddhism, Mauryan & Gupta Rule, Taxila University & Bhakti Movement"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ / Evolution of Sikhism",
          "topics": [
            "ਮੇਲੇ (ਵਿਸਾਖੀ, ਛਪਾਰ, ਜਰਗ), ਲੋਕ-ਨਾਚ (ਭੰਗੜਾ, ਝੂੰਮਰ, ਗਿੱਧਾ, ਸੰਮੀ)",
            "Evolution of Sikhism: Guru Nanak Dev Ji to Guru Gobind Singh Ji, Creation of Khalsa (1699)"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "ਵਿਆਕਰਨ / 18th Century Punjab, Misls & Maharaja Ranjit Singh",
          "topics": [
            "ਸ਼ਬਦ-ਜੋੜ, ਅਖਾਣ, ਮੁਹਾਵਰੇ ਅਤੇ ਦਫ਼ਤਰੀ ਪੱਤਰ",
            "Dal Khalsa, 12 Misls, Maharaja Ranjit Singh's Sovereign State & Historical Map Locations"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    },
    {
      "id": "env-edu",
      "code": "CSA-MDC-101",
      "title": "E-Commerce & Digital Trends",
      "type": "Multi-Disciplinary Course",
      "credits": 3,
      "theoryHours": 45,
      "practicalHours": 0,
      "assessment": {
        "internal": 5,
        "external": 70,
        "practical": 0,
        "total": 75
      },
      "icon": "fa-shopping-cart",
      "bgClass": "bg-teal",
      "description": "Electronic commerce foundations, business models (B2B, B2C, C2C, D2C), fintech architectures (UPI switch & payment gateway lifecycle), digital signatures, SEO, and IT Act 2000 cyber laws.",
      "tags": [
        "E-Commerce",
        "UPI",
        "Payment Gateway",
        "SEO",
        "Digital Signatures",
        "IT Act 2000"
      ],
      "units": [
        {
          "unitNumber": "Unit I",
          "title": "E-Commerce Foundations & Business Models",
          "topics": [
            "Traditional Commerce vs E-Commerce Comparison",
            "E-Commerce Business Models Matrix (B2B, B2C, C2C, C2B, B2G, D2C)"
          ]
        },
        {
          "unitNumber": "Unit II",
          "title": "Electronic Payment Systems & Fintech",
          "topics": [
            "UPI Technical Architecture (NPCI Switch Engine, VPA Resolution, 2FA, IMPS Settlement)",
            "Payment Gateway 5-Stage Transaction Lifecycle (Checkout, TLS Encryption, Acquiring/Issuing Routing)"
          ]
        },
        {
          "unitNumber": "Unit III",
          "title": "E-Commerce Infrastructure, SEO & Security",
          "topics": [
            "On-Page vs Off-Page Search Engine Optimization (SEO)",
            "Symmetric vs Asymmetric Cryptography & Digital Signature Verification Lifecycle"
          ]
        },
        {
          "unitNumber": "Unit IV",
          "title": "Emerging Trends & Legal Framework (IT Act 2000)",
          "topics": [
            "AI Chatbots, Collaborative vs Content-Based Recommendation Systems",
            "Information Technology Act 2000 (Sec 43, 65, 66, 66C, 66D, 67, 72) Cyber Law Provisions"
          ]
        }
      ],
      "notes": [],
      "questions": [],
      "solutions": []
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BCA_1ST_SEM_DATA;
}
