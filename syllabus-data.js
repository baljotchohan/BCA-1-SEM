/**
 * Panjab University BCA 1st Semester — Comprehensive Academic Study Notes & Curriculum Manual
 * Aligned with the official PU NEP 2026–27 Framework.
 * Exhaustive Topic-by-Topic Notes across ALL Units & Subjects with Code Blocks, LaTeX Math Derivations,
 * Comparison Tables, High-Yield Question Banks, and Step-by-Step Verified Solutions.
 */

const BCA_1ST_SEM_DATA = {
  session: "2026-2027",
  university: "Panjab University, Chandigarh",
  course: "Bachelor of Computer Applications (BCA) - Semester 1 (NEP Framework)",
  marksScheme: [
    { code: "BCA-DSC-1(Maj)-101A", name: "Introduction to Web Technologies", credits: 4, internal: 5, external: 45, practical: 50, total: 100 },
    { code: "BCA-DSC-1(Min)-103", name: "Problem Solving Through C", credits: 4, internal: 5, external: 45, practical: 50, total: 100 },
    { code: "BCA-DSC-1(Maj)-102", name: "Fundamentals of Mathematical Statistics", credits: 4, internal: 10, external: 90, practical: 0, total: 100 },
    { code: "CSA-VAC-102", name: "Introduction to Computer Hardware", credits: 2, internal: 5, external: 45, practical: 0, total: 50 },
    { code: "AEC-1-101", name: "English-1 (Communication Skills)", credits: 2, internal: 5, external: 45, practical: 0, total: 50 },
    { code: "PUN-COMPL-101 / HCP-101", name: "Punjabi Compulsory / History & Culture of Punjab", credits: 2, internal: 5, external: 45, practical: 0, total: 50 },
    { code: "CSA-MDC-101", name: "E-Commerce & Digital Trends", credits: 3, internal: 5, external: 70, practical: 0, total: 75 }
  ],
  subjects: [
    // =========================================================================
    // SUBJECT 1: INTRODUCTION TO WEB TECHNOLOGIES (BCA-DSC-1(Maj)-101A)
    // =========================================================================
    {
      id: "web-tech",
      code: "BCA-DSC-1(Maj)-101A",
      title: "Introduction to Web Technologies",
      type: "Major Core",
      credits: 4,
      theoryHours: 30,
      practicalHours: 30,
      assessment: { internal: 5, external: 45, practical: 50, total: 100 },
      icon: "fa-code",
      bgClass: "bg-emerald",
      description: "Front-end web development covering internet architecture, client-server models, HTML5 semantic structure, CSS3 responsive layouts (Flexbox/Grid), and client-side JavaScript DOM scripting.",
      tags: ["HTML5", "CSS3", "JavaScript", "DNS", "HTTP/HTTPS", "Flexbox", "DOM"],
      units: [
        {
          unitNumber: "Unit I",
          title: "Internet Basics & Web Architecture",
          topics: [
            "History & Evolution of the Internet, ARPANET, TCP/IP Flag Day, WWW, W3C & WAI-ARIA",
            "Client-Server Architecture (2-Tier vs 3-Tier), Browser Subsystems & Web Server Socket Lifecycle",
            "URL Structure, 6-Step DNS Resolution Pipeline, HTTP vs HTTPS & SSL/TLS Handshake",
            "MIME Types, Static vs Dynamic Web Architectures & Web Hosting Paradigms"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "HTML5 Fundamentals & Semantic Structure",
          topics: [
            "HTML Document Anatomy, Standards Mode, Metadata & Text Formatting Tags",
            "Hyperlinks (Absolute vs Relative, Security rel='noopener noreferrer'), Nested Lists & Tables",
            "HTML5 Semantic Elements (<header>, <nav>, <article>, <section>, <footer>) & Accessible Landmarks",
            "HTML Form Architecture, Input Types, Attributes & Client-Side Validation"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "CSS3 Styling & Responsive Design",
          topics: [
            "CSS Inclusion Methods, Cascade Principles & Specificity Weight Matrix",
            "CSS Box Model (Content, Padding, Border, Margin; content-box vs border-box)",
            "CSS Positioning Modes (Static, Relative, Absolute, Fixed, Sticky)",
            "CSS3 Flexbox Layout & Mobile-First Responsive Web Design with Media Queries"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "JavaScript Core & DOM Manipulation",
          topics: [
            "JavaScript Engine Basics, Variables (var, let, const), Data Types & Operators",
            "Control Structures, Functions (Declarations, Expressions, Arrow Functions)",
            "DOM Tree Traversal, Element Selection & Dynamic Attribute/Style Manipulation",
            "Event Handling Lifecycle (Capturing, Target, Bubbling) & Form Validation"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. History and Evolution of the Internet, ARPANET, WWW & W3C Standards",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. The Historical Genesis of the Internet
- **ARPANET (1969):** Created by the United States Department of Defense's Advanced Research Projects Agency (DARPA). It pioneered packet-switching concepts over circuit-switched telecommunication networks to enable resilient distributed computing capable of surviving partial node destruction during military conflicts.
- **TCP/IP Protocol Adoption (January 1, 1983):** Known as **"TCP/IP Flag Day"**, ARPANET officially transitioned from the legacy Network Control Program (NCP) to the **TCP/IP suite**, establishing the universal communication standard of the modern Internet.
- **World Wide Web (1989-1991):** Invented by **Sir Tim Berners-Lee** at CERN (Switzerland). He integrated three foundational technologies:
  1. **HTTP (HyperText Transfer Protocol):** Stateless request-response document retrieval protocol.
  2. **HTML (HyperText Markup Language):** Structured document presentation format.
  3. **URI/URL (Uniform Resource Identifier/Locator):** Global resource addressing scheme.

## 2. World Wide Web Consortium (W3C) & WAI-ARIA
- **Role:** Founded by Sir Tim Berners-Lee in 1994, the **W3C** is the international standards organization maintaining web technologies to ensure universal interoperability, accessibility, and long-term backward compatibility.
- **WAI-ARIA Specification:** Oversees the *Web Accessibility Initiative - Accessible Rich Internet Applications* framework, defining roles, states, and properties to make rich dynamic web applications accessible to assistive technologies and screen readers.`
        },
        {
          unit: "Unit I",
          title: "2. Client-Server Architecture, Web Browser Subsystems & Web Server Lifecycle",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Client-Server Architecture Models
Web applications rely on distributed client-server paradigms:
- **2-Tier Architecture:** The client application (Tier 1) communicates directly with a centralized database server (Tier 2) hosting data storage and business logic.
- **3-Tier Architecture:** An intermediary Application Tier sits between the client Presentation Layer and the back-end Database Layer:
  1. **Presentation Layer (Tier 1):** Web browser executing HTML/CSS/JavaScript.
  2. **Application / Business Logic Layer (Tier 2):** Web server & app runtime (Node.js, Python, Java) processing business rules.
  3. **Data Layer (Tier 3):** Relational or NoSQL database (PostgreSQL, MySQL, MongoDB).
  > **Advantage:** Isolates business logic, reinforces security, and permits independent horizontal scaling of individual tiers.

## 2. Modern Web Browser Subsystems
| Browser Subsystem | Architectural Role & Execution Details |
| :--- | :--- |
| **User Interface** | Address bar, back/forward navigation, bookmarking, and tab management. |
| **Browser Engine** | Marshals actions between the UI layer and the underlying Rendering Engine. |
| **Rendering Engine** | Parses HTML/CSS into DOM & CSSOM trees, constructs the Render Tree, and computes Layout/Painting (e.g., Blink in Chrome, Gecko in Firefox, WebKit in Safari). |
| **Networking** | Handles network communication (HTTP/HTTPS, WebSockets, DNS lookups, TLS handshakes). |
| **JavaScript Engine** | Interprets and JIT-compiles JavaScript bytecode (e.g., Google V8, SpiderMonkey, JavaScriptCore). |
| **UI Backend** | Draws basic widgets like select dropdowns and windows using OS graphics primitives. |
| **Data Persistence** | Manages local client storage (LocalStorage, SessionStorage, IndexedDB, Cookies, Cache Storage). |

## 3. Web Server Socket Lifecycle & HTTP Status Codes
Web servers (Apache HTTP Server, Nginx, Microsoft IIS) manage request lifecycles:
1. **Bind & Listen:** Server binds to Port 80 (HTTP) or Port 443 (HTTPS) and listens for incoming TCP connections.
2. **Accept:** Accepts client TCP handshake and allocates a dedicated socket worker thread or event loop task.
3. **Parse Request:** Parses incoming HTTP request line (Method, URI, Protocol Version) and headers.
4. **Process & Serve:** Checks file availability or delegates to backend scripts, then streams HTTP response headers and entity payload.
5. **Connection Persistence:** Closes socket or keeps it open for reuse based on \`Connection: keep-alive\` directives.

### HTTP Response Status Code Classes:
| Range | Category | Common Standard Examples |
| :--- | :--- | :--- |
| **1xx** | Informational | \`100 Continue\`: Initial request headers received; client should send body. |
| **2xx** | Success | \`200 OK\`: Request succeeded. \`201 Created\`: New resource successfully created. |
| **3xx** | Redirection | \`301 Moved Permanently\`: Resource permanently relocated. \`304 Not Modified\`: Cached copy is valid. |
| **4xx** | Client Error | \`400 Bad Request\`: Syntax error. \`401 Unauthorized\`: Auth required. \`404 Not Found\`: Missing resource. |
| **5xx** | Server Error | \`500 Internal Server Error\`: Server-side crash. \`503 Service Unavailable\`: Overload or maintenance. |`
        },
        {
          unit: "Unit I",
          title: "3. URL Structure, DNS Resolution Pipeline & HTTP vs HTTPS Security",
          readTime: "10 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Standard URL Anatomy
Consider the URL: \`https://www.example.com:443/courses/bca/index.html?year=2026#unit1\`
- **Protocol / Scheme (\`https://\`):** Specifies communication protocol and encryption requirements.
- **Subdomain (\`www\`):** Logical division within the host domain.
- **Domain Name (\`example.com\`):** Human-readable registered network address.
- **Port Number (\`:443\`):** Dedicated communication endpoint (defaults to 80 for HTTP, 443 for HTTPS).
- **Path (\`/courses/bca/index.html\`):** Hierarchical file path to the requested resource.
- **Query String (\`?year=2026\`):** Key-value parameter pairs passed to the server.
- **Fragment Identifier / Anchor (\`#unit1\`):** Client-side jump bookmark to a specific DOM element.

## 2. The 6-Step DNS Resolution Pipeline
1. **Browser & OS Cache Check:** The browser inspects its internal DNS cache, then queries the OS resolver cache and hosts file.
2. **DNS Recursive Resolver Query:** If not cached, the query is dispatched to the ISP's Recursive Resolver (e.g., 8.8.8.8).
3. **Root Nameserver Query:** The recursive resolver queries a Root Nameserver (\`.\`), which redirects to the corresponding TLD Nameserver.
4. **TLD Nameserver Query:** The resolver queries the Top-Level Domain Nameserver (e.g., \`.com\`), which returns the Authoritative Nameserver IP.
5. **Authoritative Nameserver Query:** The Authoritative Nameserver looks up the official DNS records (A/AAAA) and returns the destination IP address.
6. **Recursive Cache & Client Return:** The resolver caches the IP according to its TTL (Time to Live) and delivers it to the browser to initiate TCP connection.

## 3. HTTP vs HTTPS Protocol Comparison
| Feature | HTTP (HyperText Transfer Protocol) | HTTPS (HTTP Secure) |
| :--- | :--- | :--- |
| **Default Transport Port** | Port 80 | Port 443 |
| **Data Transmission Security** | Plaintext unencrypted transmission | Encrypted transport using TLS/SSL cryptographic protocols |
| **Data Integrity Verification** | Vulnerable to Man-in-the-Middle (MITM) packet tampering | Guaranteed via cryptographic HMAC verification signatures |
| **Identity Verification** | None; client cannot verify true server identity | Verified via X.509 Digital Certificates issued by trusted CAs |

## 4. The SSL/TLS Handshake Lifecycle
1. **Client Hello:** Client transmits supported TLS version, cryptographic cipher suites, and a random string ($R_c$).
2. **Server Hello:** Server selects cipher suite, returns server random string ($R_s$), and presents its **X.509 Digital Certificate**.
3. **Verification & Key Exchange:** Client verifies the certificate against root CAs, generates a **Pre-Master Secret**, encrypts it with the server's Public Key, and transmits it.
4. **Session Key Computation:** Both parties independently calculate the identical symmetric **Master Key** using $R_c$, $R_s$, and the Pre-Master Secret.
5. **Symmetric Secure Channel:** Both parties exchange encrypted "Finished" messages and proceed with encrypted symmetric data transfer.`
        },
        {
          unit: "Unit I",
          title: "4. MIME Types, Web Architectures & Web Hosting Paradigms",
          readTime: "7 min read",
          author: "Panjab University Academic Board",
          content: `## 1. MIME Types (Multipurpose Internet Mail Extensions)
MIME types indicate media and document formats via HTTP \`Content-Type\` headers:
- \`text/html\`: HTML web documents.
- \`text/css\`: Cascading Style Sheets.
- \`application/javascript\`: JavaScript code files.
- \`application/json\`: Structured JSON data payloads.
- \`image/webp\` / \`image/svg+xml\`: Modern image formats.

## 2. Static vs Dynamic Web Architectures
- **Static Web Pages:** Pre-rendered HTML/CSS/JS files stored directly on disk and served as-is without server-side processing. Offers ultra-fast delivery, caching, and low hosting costs.
- **Dynamic Web Pages:** Constructed in real time by server-side runtimes (Node.js, PHP, Python, Java) that query databases and render personalized content based on user session or request parameters.

## 3. Web Hosting Paradigms Comparison
| Hosting Type | Resource Allocation | Isolation & Performance | Best Suited For |
| :--- | :--- | :--- | :--- |
| **Shared Hosting** | Multiple websites share single CPU, RAM, and OS instance. | Low isolation; traffic spikes on neighbor sites affect performance. | Small personal blogs, entry-level sites. |
| **VPS (Virtual Private Server)** | Physical server partitioned into isolated virtual environments via hypervisor. | Dedicated RAM/CPU allocation; root access and customized OS. | Growing business applications, development servers. |
| **Dedicated Server** | Entire physical server hardware leased to a single organization. | 100% hardware control, maximum security, high throughput. | High-traffic enterprise platforms and banking systems. |
| **Cloud Hosting** | Distributed cluster of interconnected virtual machines (AWS, GCP, Azure). | Auto-scaling on demand, high fault tolerance, pay-as-you-go pricing. | Modern scalable web apps and SaaS platforms. |`
        },
        {
          unit: "Unit II",
          title: "1. HTML5 Document Anatomy, Standards Mode & Semantic Structure",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. HTML5 Document Anatomy
A compliant HTML5 document starts with \`<!DOCTYPE html>\` to trigger **Standards Mode** in modern browsers:
- \`<html>\`: Root element with \`lang="en"\` attribute for accessibility.
- \`<head>\`: Houses document metadata, title, character encoding (\`<meta charset="UTF-8">\`), viewport definitions (\`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`), and external stylesheets.
- \`<body>\`: Contains visible document content.

## 2. Hyperlinks Security: \`rel="noopener noreferrer"\`
When opening external links in a new tab via \`target="_blank"\`, always include \`rel="noopener noreferrer"\` to prevent **reverse tabnabbing**, where malicious external pages gain control of \`window.opener\`.

## 3. Comprehensive HTML5 Semantic & Form Template
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panjab University BCA - Academic Portal</title>
</head>
<body>
    <header>
        <nav aria-label="Main Navigation">
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#academics">Academics</a></li>
                <li><a href="https://puchd.ac.in" target="_blank" rel="noopener noreferrer">PU Official</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <article>
            <header>
                <h1>BCA 1st Semester Course Syllabus</h1>
                <p>Published for academic session 2026-27</p>
            </header>
            
            <section id="academics">
                <h2>Marks Allocation Scheme</h2>
                <table border="1" cellpadding="8">
                    <thead>
                        <tr>
                            <th>Subject Code</th>
                            <th>Subject Title</th>
                            <th>Theory</th>
                            <th>Practical</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>BCA-DSC-101A</td>
                            <td>Web Technologies</td>
                            <td>50</td>
                            <td>50</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="registration">
                <h2>Student Examination Registration</h2>
                <form action="/submit-exam" method="POST">
                    <div>
                        <label for="rollno">Roll Number:</label>
                        <input type="text" id="rollno" name="rollno" required pattern="[0-9]{8}" placeholder="8-digit roll number">
                    </div>
                    <div>
                        <label for="email">College Email:</label>
                        <input type="email" id="email" name="email" required placeholder="student@pu.ac.in">
                    </div>
                    <div>
                        <button type="submit">Submit Registration</button>
                    </div>
                </form>
            </section>
        </article>
    </main>

    <footer>
        <p>&copy; 2026 Panjab University Chandigarh. All Rights Reserved.</p>
    </footer>
</body>
</html>
\`\`\``
        },
        {
          unit: "Unit III",
          title: "1. CSS3 Specificity Weight Matrix, Box Model & Responsive Flexbox",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. CSS Specificity Weight Matrix
When conflicting styles target an element, browsers calculate specificity using a 4-tuple weight: **(Inline, ID, Class/Attribute/Pseudo-class, Element/Pseudo-element)**:
| Selector Category | Specificity Weight | Example |
| :--- | :--- | :--- |
| **Inline Styles** | \`(1, 0, 0, 0)\` | \`style="color: red;"\` |
| **ID Selectors** | \`(0, 1, 0, 0)\` | \`#main-header\` |
| **Classes, Attributes, Pseudo-classes** | \`(0, 0, 1, 0)\` | \`.btn\`, \`[type="text"]\`, \`:hover\` |
| **Elements & Pseudo-elements** | \`(0, 0, 0, 1)\` | \`div\`, \`p\`, \`::before\` |
> **The \`!important\` Rule:** Overrides regular specificity calculations regardless of selector weight.

## 2. CSS Box Model: \`content-box\` vs \`border-box\`
- **\`content-box\` (Default):** \`width\` and \`height\` apply only to content. Total width = \`width + padding-left + padding-right + border-left + border-right + margin\`.
- **\`border-box\` (Recommended Standard):** \`width\` encompasses content, padding, and borders. Simplifies responsive layouts.

## 3. Responsive Flexbox CSS Template
\`\`\`css
/* Universal Box Model Reset */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    background-color: #0b0d14;
    color: #f3f4f6;
}

/* Flexbox Parent Container */
.card-container {
    display: flex;
    flex-direction: column; /* Mobile-First Default */
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Flexbox Child Cards */
.card-item {
    flex: 1 1 100%;
    background-color: #121624;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.2s ease, border-color 0.2s ease;
}

.card-item:hover {
    transform: translateY(-4px);
    border-color: #10b981;
}

/* Tablet Breakpoint */
@media screen and (min-width: 640px) {
    .card-container {
        flex-direction: row;
    }
    .card-item {
        flex: 1 1 calc(50% - 20px);
    }
}

/* Desktop Breakpoint */
@media screen and (min-width: 1024px) {
    .card-item {
        flex: 1 1 calc(33.333% - 20px);
    }
}
\`\`\``
        },
        {
          unit: "Unit IV",
          title: "1. JavaScript Core, DOM Tree Traversal & Event Handling Lifecycle",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. JavaScript Variables: \`var\` vs \`let\` vs \`const\`
| Feature | \`var\` | \`let\` | \`const\` |
| :--- | :--- | :--- | :--- |
| **Scope** | Function-scoped | Block-scoped (\`{}\`) | Block-scoped (\`{}\`) |
| **Hoisting** | Hoisted with \`undefined\` | Hoisted in Temporal Dead Zone (TDZ) | Hoisted in Temporal Dead Zone (TDZ) |
| **Re-declaration** | Allowed | Syntax Error | Syntax Error |
| **Re-assignment** | Allowed | Allowed | Immutable reference error |

## 2. Event Propagation Lifecycle: Capturing vs Bubbling
When an event occurs on a DOM element:
1. **Capturing Phase:** Event cascades downward from \`window\` through document tree to target.
2. **Target Phase:** Event reaches target element.
3. **Bubbling Phase (Default):** Event bubbles upward from target back to \`window\`.
\`\`\`javascript
// Capturing: third param = true; Bubbling (default): third param = false
element.addEventListener('click', (e) => {
    e.stopPropagation(); // Halts bubbling propagation
    console.log('Clicked element:', e.target);
}, false);
\`\`\``
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "Define ARPANET and explain TCP/IP Flag Day (January 1, 1983).",
          probability: "High Probability",
          examFrequency: "Appeared in 2022, 2024 PU Exam"
        },
        {
          unit: "Unit I",
          marks: 2,
          question: "Differentiate between 2-Tier and 3-Tier Web Architectures.",
          probability: "High Probability",
          examFrequency: "Appeared in 2021, 2023 PU Exam"
        },
        {
          unit: "Unit I",
          marks: 2,
          question: "Explain the purpose of WAI-ARIA standards in web accessibility.",
          probability: "Medium Probability",
          examFrequency: "PU Specimen 2025"
        },
        {
          unit: "Unit I",
          marks: 10,
          question: "Explain the 6-step DNS Resolution Pipeline and detail the HTTPS connection process, including TCP 3-Way Handshake and SSL/TLS Handshake.",
          probability: "High Probability",
          examFrequency: "10-Mark Compulsory in PU 2023, 2024"
        },
        {
          unit: "Unit II",
          marks: 10,
          question: "Construct a complete, semantic HTML5 document showcasing nested lists, styled tables with merged cells (colspan/rowspan), and a validated registration form.",
          probability: "High Probability",
          examFrequency: "10-Mark Practical Theory Question"
        },
        {
          unit: "Unit III",
          marks: 10,
          question: "Explain the CSS Specificity Weight Matrix with mathematical examples. Provide a responsive Flexbox layout implementation with mobile-first media queries.",
          probability: "High Probability",
          examFrequency: "10-Mark Core Theory Question"
        }
      ],
      solutions: [
        {
          unit: "Unit I",
          question: "Explain the 6-step DNS Resolution Pipeline and detail the HTTPS connection process, including TCP 3-Way Handshake and SSL/TLS Handshake.",
          solution: `### Part 1: The 6-Step DNS Resolution Pipeline
1. **Local Cache Inspection:** The browser checks internal DNS cache, followed by OS resolver cache and the \`hosts\` file.
2. **Recursive Resolver Dispatch:** If cache misses, the OS sends the query to the ISP's Recursive Resolver (e.g., \`8.8.8.8\`).
3. **Root Nameserver Referral:** The recursive resolver queries a Root Nameserver (\`.\`), which returns the TLD Nameserver IP for \`.com\`.
4. **TLD Nameserver Referral:** The resolver queries the \`.com\` TLD Nameserver, which provides the Authoritative Nameserver IP.
5. **Authoritative Nameserver Resolution:** The Authoritative Nameserver matches the domain and returns the destination \`A\` (IPv4) or \`AAAA\` (IPv6) record.
6. **Caching & Browser Return:** The Recursive Resolver caches the record with TTL and returns the physical IP to the client.

### Part 2: The HTTPS Connection Lifecycle
1. **TCP 3-Way Handshake:**
   - Client sends \`SYN\` to Port 443.
   - Server responds with \`SYN-ACK\`.
   - Client returns \`ACK\`, establishing the underlying transport connection.
2. **SSL/TLS Handshake:**
   - **Client Hello:** Sends supported TLS version, cipher suites, and random value $R_c$.
   - **Server Hello:** Selects cipher suite, returns server random $R_s$, and presents its **X.509 Digital Certificate**.
   - **Verification:** Client validates the certificate with trusted root CAs.
   - **Pre-Master Secret:** Client generates Pre-Master Secret, encrypts it with server's Public Key, and transmits it.
   - **Session Key Derivation:** Both parties independently calculate the symmetric Master Session Key.
   - **Finished:** Encrypted "Finished" confirmation messages exchanged; secure encrypted HTTP communication begins.`
        }
      ]
    },

    // =========================================================================
    // SUBJECT 2: PROBLEM SOLVING THROUGH C (BCA-DSC-1(Min)-103)
    // =========================================================================
    {
      id: "c-lang",
      code: "BCA-DSC-1(Min)-103",
      title: "Problem Solving Through C",
      type: "Minor Core",
      credits: 4,
      theoryHours: 30,
      practicalHours: 30,
      assessment: { internal: 5, external: 45, practical: 50, total: 100 },
      icon: "fa-terminal",
      bgClass: "bg-indigo",
      description: "Structured programming principles, algorithms, flowcharts, 5-stage compilation, control structures, storage classes, pointers, dynamic memory allocation, and data structures in C.",
      tags: ["C Programming", "Algorithms", "Pointers", "DMA", "Structures", "Storage Classes"],
      units: [
        {
          unitNumber: "Unit I",
          title: "Algorithms, Flowcharts & C Fundamentals",
          topics: [
            "Problem Solving Concepts, 5 Algorithm Characteristics & ISO/ANSI Flowcharts",
            "5-Stage C Compilation Lifecycle (Preprocessing, Compiling, Assembling, Linking, Loading)",
            "Data Types, Variables, Constants & 15-Level Operator Precedence / Associativity Table"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "Control Flow & Storage Classes",
          topics: [
            "Decision Making (if-else, switch-case fall-through phenomenon)",
            "Looping Constructs (Entry-Controlled for/while vs Exit-Controlled do-while)",
            "Storage Classes Comparison Matrix (auto, register, static, extern: Scope, Lifetime, Storage & Default)"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "Modular Functions, Arrays & Strings",
          topics: [
            "Functions & Parameter Passing: Call by Value vs Call by Reference",
            "1D and 2D Arrays, String Manipulation Functions & 2D Matrix Multiplication Algorithm"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "Pointers, Dynamic Memory Allocation, Structures & Unions",
          topics: [
            "Pointers & Pointer Arithmetic (sizeof factors), Dangling Pointers & Memory Leaks",
            "Dynamic Memory Allocation (malloc, calloc, realloc, free) on System Heap",
            "Structures vs Unions Comparison Matrix & File Handling Operations"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. Problem Solving, Algorithm Criteria & 5-Stage Compilation Lifecycle",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Five Core Criteria of an Algorithm
Every valid computational algorithm must satisfy:
1. **Finiteness:** Must terminate after a finite number of steps for all test cases.
2. **Definiteness:** Every operation must be clear, unambiguous, and precisely defined.
3. **Input:** Must accept zero or more well-defined inputs from external sources.
4. **Output:** Must produce at least one output corresponding to inputs.
5. **Effectiveness:** All operations must be basic enough to be executed exactly in finite time.

## 2. The 5-Stage C Compilation Lifecycle
Translating C source code (\`.c\`) to binary execution (\`.exe\` / ELF):
1. **Preprocessing (\`gcc -E\`):** Handles preprocessor directives: expands macros (\`#define\`), includes header file contents (\`#include\`), strips comments, producing \`.i\` expanded source.
2. **Compilation (\`gcc -S\`):** Syntactic & semantic analysis, AST creation, and translation into target CPU assembly code (\`.s\`).
3. **Assembly (\`gcc -c\`):** Translates assembly instructions into machine-code relocatable object file (\`.o\` / \`.obj\`).
4. **Linking (\`gcc\` / \`ld\`):** Resolves external function references across multiple object files and links standard C library binaries (\`libc\`), producing the standalone executable binary.
5. **Loading (OS Loader):** When executed, OS loader allocates virtual memory (Stack, Heap, Data, Code segments) in RAM and branches PC to \`main()\`.`
        },
        {
          unit: "Unit I",
          title: "2. Complete 15-Level Operator Precedence & Associativity Hierarchy",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## C Operator Hierarchy Table
| Level | Category | Operators | Associativity |
| :--- | :--- | :--- | :--- |
| **1 (Highest)** | Postfix / Primary | \`()\` \`[]\` \`->\` \`.\` \`++\` \`--\` | Left-to-Right |
| **2** | Unary Operators | \`+\` \`-\` \`!\` \`~\` \`++\` \`--\` \`(type)\` \`*\` \`&\` \`sizeof\` | **Right-to-Left** |
| **3** | Multiplicative | \`*\` \`/\` \`%\` | Left-to-Right |
| **4** | Additive | \`+\` \`-\` | Left-to-Right |
| **5** | Bitwise Shift | \`<<\` \`>>\` | Left-to-Right |
| **6** | Relational | \`<\` \`<=\` \`>\` \`>=\` | Left-to-Right |
| **7** | Equality | \`==\` \`!=\` | Left-to-Right |
| **8** | Bitwise AND | \`&\` | Left-to-Right |
| **9** | Bitwise XOR | \`^\` | Left-to-Right |
| **10** | Bitwise OR | \`|\` | Left-to-Right |
| **11** | Logical AND | \`&&\` | Left-to-Right |
| **12** | Logical OR | \`||\` | Left-to-Right |
| **13** | Ternary Conditional | \`? :\` | **Right-to-Left** |
| **14** | Assignment | \`=\` \`+=\` \`-=\` \`*=\` \`/=\` \`%=\` \`&=\` \`^=\` \`|=\` | **Right-to-Left** |
| **15 (Lowest)** | Comma Operator | \`,\` | Left-to-Right |`
        },
        {
          unit: "Unit II",
          title: "1. Control Flow, Fall-Through & Storage Classes Comparison Matrix",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Switch-Case Fall-Through Phenomenon
In C switch-case structures, omitting a \`break\` statement causes control flow to cascade downward and execute subsequent case blocks sequentially regardless of whether their expression matches, until a \`break\` or the end of the block is reached.

## 2. Storage Classes Comparison Matrix
| Storage Class | Keyword | Storage Location | Default Initial Value | Scope | Lifetime |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Automatic** | \`auto\` | RAM Stack Frame | Garbage value | Local to enclosing block | Duration of block execution |
| **Register** | \`register\` | Hardware CPU Register | Garbage value | Local to enclosing block | Duration of block execution |
| **Static** | \`static\` | Data Segment (BSS/Data) | Zero (\`0\`) | Local to enclosing block | Total program runtime |
| **External** | \`extern\` | Data Segment (BSS/Data) | Zero (\`0\`) | Global across project files | Total program runtime |

### Static vs Auto Demonstration:
\`\`\`c
#include <stdio.h>

void counterFunction() {
    auto int a = 1;       // Re-created on stack on each call
    static int s = 1;     // Initialized once in Data Segment
    printf("auto a = %d, static s = %d\\n", a++, s++);
}

int main() {
    counterFunction(); // auto a = 1, static s = 1
    counterFunction(); // auto a = 1, static s = 2
    counterFunction(); // auto a = 1, static s = 3
    return 0;
}
\`\`\``
        },
        {
          unit: "Unit III",
          title: "1. Functions, Call by Value vs Reference & 2D Matrix Multiplication",
          readTime: "10 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Call by Value vs Call by Reference
| Parameter Passing | Mechanism | Effect on Caller Argument | Pointer Required |
| :--- | :--- | :--- | :--- |
| **Call by Value** | Copies value into separate formal parameter. | Modifications inside function DO NOT affect caller. | No |
| **Call by Reference** | Passes memory address (\`&var\`) to pointer parameter. | Modifying dereferenced pointer directly updates caller variable. | **Yes (\`*\` and \`&\`)** |

## 2. Matrix Multiplication Implementation ($A_{m \\times k} \\times B_{k \\times n} = C_{m \\times n}$)
\`\`\`c
#include <stdio.h>

void multiplyMatrices(int r1, int c1, int A[10][10], int r2, int c2, int B[10][10], int C[10][10]) {
    if (c1 != r2) {
        printf("Matrix multiplication not possible! Columns of A must equal Rows of B.\\n");
        return;
    }
    for (int i = 0; i < r1; i++) {
        for (int j = 0; j < c2; j++) {
            C[i][j] = 0;
            for (int k = 0; k < c1; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
}
\`\`\``
        },
        {
          unit: "Unit IV",
          title: "1. Pointers, Dynamic Memory Allocation, Structures vs Unions",
          readTime: "10 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Dynamic Memory Allocation Functions (System Heap)
- \`malloc(size_t size)\`: Allocates uninitialized memory containing garbage values. Returns \`void*\` or \`NULL\` on failure.
- \`calloc(size_t num, size_t size)\`: Allocates memory for \`num\` elements and initializes all bytes to zero (\`0\`).
- \`realloc(void *ptr, size_t new_size)\`: Resizes previously allocated heap block, preserving existing content up to the minimum of old and new sizes.
- \`free(void *ptr)\`: Deallocates heap memory back to the OS memory manager.

> **Critical Memory Bugs:**
> - **Dangling Pointer:** A pointer that continues referencing memory that has already been deallocated using \`free()\`. Solution: set \`ptr = NULL;\` immediately after freeing.
> - **Memory Leak:** Occurs when allocated heap memory is no longer referenced by any pointer but has not been freed, leading to progressive RAM exhaustion.

## 2. Structures vs Unions Comparison
| Property | Structure (\`struct\`) | Union (\`union\`) |
| :--- | :--- | :--- |
| **Memory Allocation** | Allocates sum of all member sizes + alignment padding. | Allocates single memory block equal to largest member size. |
| **Member Access** | All members can be accessed simultaneously. | Only one member can hold meaningful data at any given time. |
| **Keyword** | \`struct\` | \`union\` |`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "State the 5 essential characteristics that every valid algorithm must possess.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit II",
          marks: 2,
          question: "What is the fall-through phenomenon in C switch-case statements?",
          probability: "High Probability",
          examFrequency: "PU 2021, 2023"
        },
        {
          unit: "Unit IV",
          marks: 2,
          question: "Differentiate between a Dangling Pointer and a Memory Leak in C.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit II",
          marks: 10,
          question: "Explain the 4 Storage Classes in C with a comparative analysis. Provide code examples demonstrating static vs auto variable behavior.",
          probability: "High Probability",
          examFrequency: "10-Mark Core Question"
        }
      ],
      solutions: [
        {
          unit: "Unit II",
          question: "Explain the 4 Storage Classes in C with a comparative analysis. Provide code examples demonstrating static vs auto variable behavior.",
          solution: `### Storage Classes Analysis in C
1. **\`auto\` (Automatic):** Default storage class for local variables. Memory allocated in the stack frame of the function call; destroyed upon function exit. Default value is garbage.
2. **\`register\`:** Requests CPU hardware registers for high-speed variable access. Address-of operator (\`&\`) cannot be used since register does not have a RAM address.
3. **\`static\`:** Variable allocated in the BSS/Data segment. Preserves its value across function invocations for the entire program runtime. Initialized to zero by default.
4. **\`extern\` (External):** Declares a global variable defined in another source file, enabling cross-file linkage.

### Code Demonstration:
\`\`\`c
#include <stdio.h>

void testScope() {
    auto int localAuto = 10;
    static int persistentStatic = 10;

    localAuto += 5;
    persistentStatic += 5;

    printf("Auto: %d | Static: %d\\n", localAuto, persistentStatic);
}

int main() {
    testScope(); // Auto: 15 | Static: 15
    testScope(); // Auto: 15 | Static: 20
    testScope(); // Auto: 15 | Static: 25
    return 0;
}
\`\`\``
        }
      ]
    },

    // =========================================================================
    // SUBJECT 3: FUNDAMENTALS OF MATHEMATICAL STATISTICS (BCA-DSC-1(Maj)-102)
    // =========================================================================
    {
      id: "math",
      code: "BCA-DSC-1(Maj)-102",
      title: "Fundamentals of Mathematical Statistics",
      type: "Major Core",
      credits: 4,
      theoryHours: 60,
      practicalHours: 0,
      assessment: { internal: 10, external: 90, practical: 0, total: 100 },
      icon: "fa-chart-pie",
      bgClass: "bg-purple",
      description: "Mathematical statistics covering frequency distributions, measures of central tendency (Mean, Median, Mode step-deviation derivations), dispersion (QD, SD, CV), Karl Pearson & Spearman rank correlation, and linear regression analysis.",
      tags: ["Statistics", "Central Tendency", "Standard Deviation", "Correlation", "Regression"],
      units: [
        {
          unitNumber: "Unit I",
          title: "Data Collection & Measures of Central Tendency",
          topics: [
            "Primary vs Secondary Data, Frequency Distributions & Ogives (Median Intersection)",
            "Step-Deviation Derivation for Arithmetic Mean (\\bar{X} = A + \\frac{\\sum f d'}{N} \\times h)",
            "Continuous Median & Mode Formulas & Empirical Relationship (\\text{Mode} = 3\\text{Median} - 2\\text{Mean})"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "Measures of Dispersion & Skewness",
          topics: [
            "Quartile Deviation (QD = \\frac{Q_3 - Q_1}{2}) & Mean Deviation",
            "Standard Deviation via Step-Deviation Method (\\sigma = h \\sqrt{\\frac{\\sum f d'^2}{N} - (\\frac{\\sum f d'}{N})^2})",
            "Coefficient of Variation (CV = \\frac{\\sigma}{\\bar{X}} \\times 100) for Consistency Analysis"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "Correlation Analysis",
          topics: [
            "Karl Pearson's Coefficient of Correlation (r) Step-Deviation Formula",
            "Mathematical Proof: -1 \\le r \\le 1 via Quadratic Discriminant (\\Delta \\le 0)",
            "Spearman's Rank Correlation with Tied Ranks Correction (\\frac{m(m^2-1)}{12})"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "Linear Regression Analysis",
          topics: [
            "Regression Lines (Y on X & X on Y) & Normal Equations Derivation via Least Squares",
            "Properties of Regression Coefficients (b_{yx} \\times b_{xy} = r^2)",
            "Complete Solved Numerical Step-Deviation Example for Correlation & Regression"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. Step-Deviation Derivation for Arithmetic Mean & Continuous Measures",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Arithmetic Mean Step-Deviation Derivation
For continuous data with class width $h$, midpoint $X_i$, frequency $f_i$, assumed mean $A$, and step deviations $d'_i = \\frac{X_i - A}{h}$:
1. By definition: $X_i = A + h \\cdot d'_i$.
2. Multiplying by frequency $f_i$ and summing over all classes:
   $$\\sum f_i X_i = \\sum f_i (A + h d'_i) = A \\sum f_i + h \\sum f_i d'_i$$
3. Dividing both sides by total frequency $N = \\sum f_i$:
   $$\\bar{X} = \\frac{\\sum f_i X_i}{N} = A + \\frac{\\sum f_i d'_i}{N} \\times h$$

## 2. Continuous Median & Mode Formulas
- **Continuous Median:**
  $$\\text{Median} = L + \\left( \\frac{\\frac{N}{2} - cf}{f} \\right) \\times h$$
  *Where $L$ is lower boundary of median class, $cf$ is cumulative frequency of preceding class, $f$ is frequency of median class, and $h$ is class width.*
- **Continuous Mode:**
  $$\\text{Mode} = L + \\left( \\frac{f_1 - f_0}{2f_1 - f_0 - f_2} \\right) \\times h$$
  *Where $f_1$ is modal frequency, $f_0$ is preceding frequency, and $f_2$ is succeeding frequency.*
- **Empirical Relationship:** $\\text{Mode} = 3\\text{Median} - 2\\text{Mean}$.`
        },
        {
          unit: "Unit II",
          title: "1. Measures of Dispersion, Step-Deviation SD & Coefficient of Variation",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Quartile Deviation ($QD$)
$$QD = \\frac{Q_3 - Q_1}{2}, \\quad \\text{Coefficient of } QD = \\frac{Q_3 - Q_1}{Q_3 + Q_1}$$

## 2. Standard Deviation via Step-Deviation Method ($\\sigma$)
$$\\sigma = h \\times \\sqrt{\\frac{\\sum f d'^2}{N} - \\left(\\frac{\\sum f d'}{N}\\right)^2}$$

## 3. Coefficient of Variation ($CV$)
$$CV = \\frac{\\sigma}{\\bar{X}} \\times 100$$
> **Interpretation:** The dataset with a smaller $CV$ is considered more consistent, stable, and homogeneous.`
        },
        {
          unit: "Unit III & IV",
          title: "1. Correlation Proof ($-1 \\le r \\le 1$) & Solved Step-Deviation Numerical",
          readTime: "11 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Mathematical Proof: Limits of Correlation ($-1 \\le r \\le 1$)
Let $u = \\frac{X - \\bar{X}}{\\sigma_x}$ and $v = \\frac{Y - \\bar{Y}}{\\sigma_y}$. For any real constant $k$:
$$\\sum (u + k v)^2 \\ge 0 \\implies \\sum u^2 + 2k \\sum uv + k^2 \\sum v^2 \\ge 0$$
Dividing by $N$:
$$1 + 2k r + k^2(1) \\ge 0 \\implies k^2 + 2rk + 1 \\ge 0$$
For this quadratic in $k$ to remain non-negative for all real $k$, its discriminant $\\Delta = B^2 - 4AC$ must be non-positive:
$$(2r)^2 - 4(1)(1) \\le 0 \\implies 4r^2 - 4 \\le 0 \\implies r^2 \\le 1 \\implies -1 \\le r \\le +1$$

## 2. Solved Step-Deviation Numerical Example
**Problem:** Calculate Karl Pearson's correlation coefficient ($r$) for:
- $X$: 10, 12, 18, 24, 30
- $Y$: 5, 10, 15, 25, 20

**Step 1: Setup Computation Table ($A_x = 18, A_y = 15$):**
| $X$ | $Y$ | $d_x = X - 18$ | $d_y = Y - 15$ | $d_x^2$ | $d_y^2$ | $d_x d_y$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 10 | 5 | -8 | -10 | 64 | 100 | +80 |
| 12 | 10 | -6 | -5 | 36 | 25 | +30 |
| 18 | 15 | 0 | 0 | 0 | 0 | 0 |
| 24 | 25 | +6 | +10 | 36 | 100 | +60 |
| 30 | 20 | +12 | +5 | 144 | 25 | +60 |
| **Total** | | $\\sum d_x = 4$ | $\\sum d_y = 0$ | $\\sum d_x^2 = 280$ | $\\sum d_y^2 = 250$ | $\\sum d_x d_y = 230$ |

**Step 2: Formula Calculation ($N = 5$):**
$$r = \\frac{N \\sum d_x d_y - (\\sum d_x)(\\sum d_y)}{\\sqrt{\\left[N \\sum d_x^2 - (\\sum d_x)^2\\right] \\left[N \\sum d_y^2 - (\\sum d_y)^2\\right]}}$$
$$r = \\frac{5(230) - (4)(0)}{\\sqrt{[5(280) - (4)^2][5(250) - (0)^2]}} = \\frac{1150}{\\sqrt{(1400 - 16)(1250)}} = \\frac{1150}{\\sqrt{1384 \\times 1250}} = \\frac{1150}{1315.29} \\approx \\mathbf{+0.874}$$
*Conclusion: Strong positive linear correlation between $X$ and $Y$.*`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "State the empirical relationship between Mean, Median, and Mode for moderately skewed distributions.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit III",
          marks: 10,
          question: "Prove that Karl Pearson's coefficient of correlation lies between -1 and +1 (-1 <= r <= +1).",
          probability: "High Probability",
          examFrequency: "Compulsory Derivation in PU 2021, 2023"
        }
      ],
      solutions: [
        {
          unit: "Unit III",
          question: "Prove that Karl Pearson's coefficient of correlation lies between -1 and +1 (-1 <= r <= +1).",
          solution: `Let standard scores be $u_i = \\frac{x_i - \\bar{x}}{\\sigma_x}$ and $v_i = \\frac{y_i - \\bar{y}}{\\sigma_y}$.
Since sum of squared real terms is non-negative:
$$\\sum (u_i + k v_i)^2 \\ge 0 \\quad \\forall k \\in \\mathbb{R}$$
Expanding:
$$\\sum u_i^2 + 2k \\sum u_i v_i + k^2 \\sum v_i^2 \\ge 0$$
Dividing by $N$:
$$1 + 2kr + k^2 \\ge 0 \\implies k^2 + 2rk + 1 \\ge 0$$
For this quadratic in $k$ to remain $\\ge 0$ for all real $k$, its discriminant $\\Delta$ must be non-positive:
$$\\Delta = (2r)^2 - 4(1)(1) \\le 0 \\implies 4r^2 - 4 \\le 0 \\implies r^2 \\le 1 \\implies \\mathbf{-1 \\le r \\le +1}$$`
        }
      ]
    },

    // =========================================================================
    // SUBJECT 4: INTRODUCTION TO COMPUTER HARDWARE (CSA-VAC-102)
    // =========================================================================
    {
      id: "hardware",
      code: "CSA-VAC-102",
      title: "Introduction to Computer Hardware",
      type: "Value Added Course",
      credits: 2,
      theoryHours: 30,
      practicalHours: 0,
      assessment: { internal: 5, external: 45, practical: 0, total: 50 },
      icon: "fa-microchip",
      bgClass: "bg-cyan",
      description: "PC architecture, motherboard form factors, modern PCH chipsets, microprocessor registers, memory hierarchies (SRAM vs DRAM), BIOS/UEFI firmware booting, storage interfaces (NVMe vs SATA), and hardware troubleshooting.",
      tags: ["Motherboards", "CPU Registers", "UEFI vs BIOS", "NVMe", "SRAM/DRAM", "SMPS"],
      units: [
        {
          unitNumber: "Unit I",
          title: "Hardware Architecture & Motherboards",
          topics: [
            "System Buses (Data, Address, Control) & Motherboard Form Factors (AT, ATX, Micro-ATX)",
            "Chipset Evolution: Legacy Northbridge/Southbridge vs Modern CPU Direct Die & PCH"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "CPU Internals & Storage Interfaces",
          topics: [
            "Microprocessor Registers (PC, IR, MAR, MDR, Accumulator, Flags) & 4-Stage Instruction Cycle",
            "Storage Interfaces: PATA vs SATA III vs M.2 NVMe PCIe Protocols"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "Memory Systems & BIOS/UEFI Booting",
          topics: [
            "Primary Memory: SRAM (Flip-Flop) vs DRAM (Capacitor) Comparison",
            "Firmware Booting: Legacy BIOS (16-bit MBR) vs Modern UEFI (64-bit GPT & Secure Boot)",
            "Storage Partitioning via DISKPART Terminal Utility"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "Power Supply, Peripherals & Maintenance",
          topics: [
            "SMPS Voltage Outputs, ATX 24-Pin Pinouts & Power Good Signal",
            "Hardware Troubleshooting Diagnostics & POST Beep Code Interpretations"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. Motherboard Form Factors & Northbridge vs Modern PCH Architecture",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Motherboard Form Factors Comparison
| Form Factor | Dimensions | Power Connector | Key Features |
| :--- | :--- | :--- | :--- |
| **AT (Legacy)** | $12 \\times 13.8$ inches | 12-Pin AT | Lacks soft power-off support; expansion slots block CPU socket. |
| **ATX (Modern Standard)** | $12 \\times 9.6$ inches | 24-Pin Keyed ATX | Supports soft power, improved airflow, integrated I/O backplate. |
| **Micro-ATX** | $9.6 \\times 9.6$ inches | 24-Pin Keyed ATX | Compact square layout, 4 expansion slots, lower power consumption. |

## 2. Chipset Architectures: Legacy vs Modern
- **Legacy Architecture:**
  - **Northbridge (MCH):** Connected directly to high-speed components (CPU, RAM, PCIe x16 graphics) via Front-Side Bus (FSB).
  - **Southbridge (ICH):** Managed slower I/O peripherals (PCI slots, SATA, USB, Audio, BIOS ROM).
- **Modern Unified Architecture:**
  - Memory controller and PCIe graphics lanes are integrated **directly onto the CPU die**.
  - Southbridge is replaced by a single **Platform Controller Hub (PCH)** communicating with CPU via high-speed DMI bus.`
        },
        {
          unit: "Unit II",
          title: "1. Microprocessor Registers, 4-Stage Instruction Cycle & Storage Interfaces",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Microprocessor Dedicated Internal Registers
- **PC (Program Counter):** Holds the memory address of the *next instruction* to be fetched and executed.
- **IR (Instruction Register):** Stores the current binary instruction opcode being decoded by the control unit.
- **MAR (Memory Address Register):** Holds the physical address in RAM being accessed for reading or writing.
- **MDR / MBR (Memory Data Register):** Stores the data word fetched from or to be written into memory.
- **Accumulator (AC):** Primary register holding operands and arithmetic/logic computation results from the ALU.
- **Flags Register (FLAGS/EFLAGS):** Holds condition bits (Zero Flag $Z$, Carry Flag $C$, Sign Flag $S$, Overflow Flag $V$).

## 2. The 4-Stage Instruction Execution Cycle
$$\\text{Fetch} \\longrightarrow \\text{Decode} \\longrightarrow \\text{Execute} \\longrightarrow \\text{Writeback}$$

## 3. Storage Interfaces Comparison
| Interface | Physical Connection | Max Transfer Speed | Key Characteristics |
| :--- | :--- | :--- | :--- |
| **PATA (IDE)** | 40/80-Pin Ribbon Cable | 133 MB/s | Parallel data bus; requires Master/Slave jumper pins. |
| **SATA III** | 7-Pin Serial Cable | 6 Gbps (~600 MB/s) | Serial interface; supports AHCI & hot-swapping. |
| **M.2 NVMe** | PCIe Gen 4/5 $\\times 4$ Lanes | 7000 - 14000 MB/s | Direct PCIe bus lane connection; ultra-low latency protocol. |`
        },
        {
          unit: "Unit III",
          title: "1. SRAM vs DRAM, BIOS vs UEFI & DISKPART Partitioning",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. SRAM vs DRAM Comparison
| Feature | SRAM (Static RAM) | DRAM (Dynamic RAM) |
| :--- | :--- | :--- |
| **Cell Construction** | 6-Transistor (6T) Flip-Flop | 1 Transistor + 1 Capacitor (1T-1C) |
| **Refresh Requirements** | No refresh needed while powered | Requires periodic refresh due to capacitor leakage |
| **Speed & Density** | Ultra-fast access (<10ns), lower density | Slower access (50-60ns), ultra-high density |
| **Primary Application** | CPU Caches (L1, L2, L3) | Main System Memory (DDR4/DDR5 DIMMs) |

## 2. Legacy BIOS vs Modern UEFI Booting
| Feature | Legacy BIOS | Modern UEFI |
| :--- | :--- | :--- |
| **Execution Mode** | 16-bit Real Mode (1 MB addressable RAM) | 32-bit / 64-bit Protected Mode |
| **Partition Table** | MBR (Master Boot Record, max 2 TB) | GPT (GUID Partition Table, max 9.4 ZB) |
| **Primary Partitions** | Maximum 4 Primary Partitions | Up to 128 Primary Partitions |
| **Security** | No boot integrity check | **Secure Boot** verifying cryptographic signatures |

## 3. DISKPART Terminal Commands Sequence
\`\`\`bash
diskpart                  # Launch partition utility
list disk                 # Enumerate all storage drives
select disk 1             # Select target drive
clean                     # Erase existing partition metadata
convert gpt               # Initialize GUID Partition Table
create partition primary  # Allocate entire drive space
format fs=ntfs quick      # Quick format with NTFS filesystem
assign letter=E           # Mount drive letter in Windows
\`\`\``
        },
        {
          unit: "Unit IV",
          title: "1. SMPS Color Coding, Voltages & Hardware Diagnostics",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. SMPS DC Voltage Rail Color Coding
- **Yellow (+12V):** Powers CPU VRM, PCIe graphics cards, cooling fans, and hard drive spindle motors.
- **Red (+5V):** Powers motherboard digital logic chips, disk controller logic, and USB 2.0/3.0 ports.
- **Orange (+3.3V):** Powers PCIe expansion slots, onboard ICs, and system RAM controllers.
- **Black (GND):** Common electrical zero-volt ground reference.
- **Gray (Power Good / PG):** +5V signal sent to motherboard after internal voltages stabilize to initiate CPU reset.
- **Purple (+5VSB):** +5V Standby power continuously active when PC is plugged in (for Wake-on-LAN and soft power button).

## 2. POST (Power-On Self-Test) Diagnostics & Beep Codes
- **1 Short Beep:** Normal POST completed successfully; system booting to OS.
- **Continuous Beeping:** RAM module missing, unseated, or memory parity error.
- **1 Long, 2 Short Beeps:** Video adapter failure or loose graphics card.`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "Differentiate between Northbridge and Southbridge chipsets.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit III",
          marks: 10,
          question: "Provide an exhaustive comparative analysis between Legacy BIOS and Modern UEFI. Detail the DISKPART commands for drive preparation.",
          probability: "High Probability",
          examFrequency: "10-Mark Compulsory Question"
        }
      ],
      solutions: [
        {
          unit: "Unit III",
          question: "Provide an exhaustive comparative analysis between Legacy BIOS and Modern UEFI. Detail the DISKPART commands for drive preparation.",
          solution: `### Comparative Analysis: BIOS vs UEFI
1. **Operating Environment:** BIOS runs in legacy 16-bit real mode with severe memory constraints. UEFI runs in 32-bit or 64-bit protected mode with rich GUI and mouse support.
2. **Partition & Capacity Support:** BIOS is bound to MBR with a 2.2 TB disk limit and 4 primary partitions. UEFI utilizes GPT, supporting drives up to 9.4 Zettabytes with 128 partitions.
3. **Security:** UEFI introduces **Secure Boot**, checking cryptographic digital signatures of bootloaders to prevent rootkits and unauthorized malware.

### DISKPART Sequence:
\`\`\`bash
diskpart
list disk
select disk 0
clean
convert gpt
create partition primary
format fs=ntfs quick
assign
\`\`\``
        }
      ]
    },

    // =========================================================================
    // SUBJECT 5: ENGLISH-1 (COMMUNICATION SKILLS & AEC) (AEC-1-101)
    // =========================================================================
    {
      id: "english",
      code: "AEC-1-101",
      title: "English-1 (Communication Skills & AEC)",
      type: "Ability Enhancement Course",
      credits: 2,
      theoryHours: 30,
      practicalHours: 0,
      assessment: { internal: 5, external: 45, practical: 0, total: 50 },
      icon: "fa-pen-nib",
      bgClass: "bg-amber",
      description: "Business communication process, the 7 Cs, barriers and remedies, 5 stages of active listening, formal block-format correspondence, and applied grammar / subject-verb agreement.",
      tags: ["Communication", "7 Cs", "Active Listening", "Block Letter", "Grammar"],
      units: [
        {
          unitNumber: "Unit I",
          title: "Communication Process & The 7 Cs",
          topics: [
            "Communication Process (Sender -> Encoding -> Channel -> Decoding -> Receiver -> Feedback)",
            "The 7 Cs of Effective Communication & Non-Verbal Categories (Kinesics, Proxemics, Paralanguage)"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "Barriers to Communication & Active Listening",
          topics: [
            "Physical, Psychological, Semantic & Cultural Barriers and Remedies",
            "5 Stages of Active Listening (Receiving -> Understanding -> Remembering -> Evaluating -> Responding)"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "Business Correspondence & Professional Writing",
          topics: [
            "Formal Block-Format Letter Structure & Official Correspondence Standards"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "Applied Writing & Grammar Mastery",
          topics: [
            "Subject-Verb Agreement Rules (Collective Nouns, Correlative Pronouns, Compound Subjects)"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. The Communication Process & The 7 Cs of Effective Communication",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. The Communication Cycle
$$\\text{Sender} \\xrightarrow{\\text{Encode}} \\text{Message/Channel} \\xrightarrow{\\text{Decode}} \\text{Receiver} \\xrightarrow{\\text{Feedback}} \\text{Sender}$$
*(Environmental noise can disrupt the cycle at any stage).*

## 2. The 7 Cs of Effective Business Communication
1. **Clarity:** Clear message objective using unambiguous language.
2. **Conciseness:** Conveying information in the fewest necessary words without sacrificing meaning.
3. **Concreteness:** Backing statements with specific facts, figures, and data.
4. **Correctness:** Accurate grammar, facts, and appropriate tone.
5. **Coherence:** Logical sequence where all points interconnect smoothly.
6. **Completeness:** Providing all facts the receiver needs to take action.
7. **Courtesy:** Respectful, polite, and empathetic tone.`
        },
        {
          unit: "Unit II",
          title: "1. Communication Barriers & The 5 Continuous Stages of Active Listening",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Communication Barriers & Recommended Remedies
| Barrier Category | Underlying Causes | Recommended Remedies |
| :--- | :--- | :--- |
| **Physical** | Ambient noise, distance, technical defects | Choose quiet environments; use functional channels. |
| **Psychological** | Emotional bias, mistrust, anxiety | Practice self-regulation; maintain open mindset. |
| **Semantic** | Complex jargon, ambiguous idioms | Use simple, standardized vocabulary. |
| **Cultural** | Ethnocentrism, divergent social norms | Cultivate cultural awareness and empathy. |

## 2. The 5 Continuous Stages of Active Listening
$$\\text{Receiving} \\longrightarrow \\text{Understanding} \\longrightarrow \\text{Remembering} \\longrightarrow \\text{Evaluating} \\longrightarrow \\text{Responding}$$`
        },
        {
          unit: "Unit III & IV",
          title: "1. Business Block Letter Structure & Subject-Verb Agreement Rules",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Formal Block-Format Letter Structure
In modern full block style, all letter elements align strictly with the **left margin** without indentations:
1. Sender's Address & Date
2. Inside Address (Recipient's Name & Designation)
3. Subject Line (\`Subject: ...\`)
4. Salutation (\`Dear Sir/Madam,\`)
5. Body Paragraphs (Introduction, Details, Call to Action)
6. Complimentary Close (\`Yours sincerely,\`)
7. Signature & Enclosures

## 2. Applied Subject-Verb Agreement Rules
| Rule Category | Incorrect Example | Correct Rule Formulation |
| :--- | :--- | :--- |
| **Collective Nouns** | *The committee are preparing the report.* | **The committee is preparing the report.** (Acts as single unit). |
| **Correlative Pronouns** | *Neither of the choices were accepted.* | **Neither of the choices was accepted.** (Singular verb). |
| **Compound Subjects** | *Bread and butter are a staple breakfast.* | **Bread and butter is a staple breakfast.** (Single conceptual item). |`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "Enumerate the 7 Cs of Effective Business Communication.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit I",
          marks: 10,
          question: "Explain the communication cycle with a diagram. Detail the 7 Cs of communication and categories of non-verbal communication.",
          probability: "High Probability",
          examFrequency: "10-Mark Compulsory Question"
        }
      ],
      solutions: [
        {
          unit: "Unit I",
          question: "Explain the communication cycle with a diagram. Detail the 7 Cs of communication and categories of non-verbal communication.",
          solution: `### The Communication Cycle
$$\\text{Sender} \\xrightarrow{\\text{Encode}} \\text{Message/Channel} \\xrightarrow{\\text{Decode}} \\text{Receiver} \\xrightarrow{\\text{Feedback}} \\text{Sender}$$
*(Environmental noise can disrupt the cycle at any stage).*

### Non-Verbal Communication Categories:
1. **Kinesics:** Body language, facial expressions, eye contact, and gestures.
2. **Proxemics:** Spatial distance and territory management during interaction.
3. **Paralanguage:** Pitch, tone, volume, vocal speed, and pauses.
4. **Haptics:** Communication through touch (handshakes).
5. **Chronemics:** Role of time and punctuality in interpersonal communication.`
        }
      ]
    },

    // =========================================================================
    // SUBJECT 6: PUNJABI COMPULSORY / HISTORY & CULTURE OF PUNJAB (PUN-COMPL / HCP)
    // =========================================================================
    {
      id: "punjabi",
      code: "PUN-COMPL-101 / HCP-101",
      title: "ਪੰਜਾਬੀ ਲਾਜ਼ਮੀ / History and Culture of Punjab",
      type: "Language / AEC",
      credits: 2,
      theoryHours: 30,
      practicalHours: 0,
      assessment: { internal: 5, external: 45, practical: 0, total: 50 },
      icon: "fa-landmark",
      bgClass: "bg-rose",
      description: "Compulsory Punjabi language (Gurmukhi script 41 letters, Gurmat & Sufi poetry, Punjabi culture/festivals) or HCP (Harappan civilization, religious movements, Sikh evolution, Dal Khalsa & Maharaja Ranjit Singh).",
      tags: ["ਪੰਜਾਬੀ", "ਗੁਰਮੁਖੀ", "HCP", "Harappa", "Sikhism", "Maharaja Ranjit Singh"],
      units: [
        {
          unitNumber: "Unit I",
          title: "ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਲਿਪੀ / Ancient Punjab & Harappan Civilization",
          topics: [
            "ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਦਾ ਨਿਕਾਸ ਤੇ ਵਿਕਾਸ, ਪੰਜਾਬ ਨਾਮਕਰਨ (5 ਦਰਿਆ), ਗੁਰਮੁਖੀ ਲਿਪੀ (41 ਅੱਖਰ)",
            "Harappan Civilization Urban Planning (Grid System, Citadel, Great Bath, Drainage)"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "ਮੱਧਕਾਲੀਨ ਕਵਿਤਾ / Religious Movements & Dynastic Rule",
          topics: [
            "ਗੁਰਮਤਿ ਕਾਵਿ (ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ: ਕਿਰਤ ਕਰੋ, ਵੰਡ ਛਕੋ, ਨਾਮ ਜਪੋ) ਅਤੇ ਸੂਫ਼ੀ ਕਾਵਿ (ਬਾਬਾ ਫ਼ਰੀਦ, ਬੁਲ੍ਹੇ ਸ਼ਾਹ)",
            "Jainism, Buddhism, Mauryan & Gupta Rule, Taxila University & Bhakti Movement"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ / Evolution of Sikhism",
          topics: [
            "ਮੇਲੇ (ਵਿਸਾਖੀ, ਛਪਾਰ, ਜਰਗ), ਲੋਕ-ਨਾਚ (ਭੰਗੜਾ, ਝੂੰਮਰ, ਗਿੱਧਾ, ਸੰਮੀ)",
            "Evolution of Sikhism: Guru Nanak Dev Ji to Guru Gobind Singh Ji, Creation of Khalsa (1699)"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "ਵਿਆਕਰਨ / 18th Century Punjab, Misls & Maharaja Ranjit Singh",
          topics: [
            "ਸ਼ਬਦ-ਜੋੜ, ਅਖਾਣ, ਮੁਹਾਵਰੇ ਅਤੇ ਦਫ਼ਤਰੀ ਪੱਤਰ",
            "Dal Khalsa, 12 Misls, Maharaja Ranjit Singh's Sovereign State & Historical Map Locations"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. ਪੰਜਾਬੀ ਭਾਸ਼ਾ, ਪੰਜਾਬ ਨਾਮਕਰਨ & ਗੁਰਮੁਖੀ ਲਿਪੀ (41 ਅੱਖਰ)",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਅਤੇ ਪੰਜਾਬ ਨਾਮਕਰਨ
- **ਭਾਸ਼ਾ ਪਰਿਵਾਰ:** ਪੰਜਾਬੀ ਭਾਸ਼ਾ ਹਿੰਦ-ਆਰੀਆ ਪਰਿਵਾਰ ਨਾਲ ਸੰਬੰਧ ਰੱਖਦੀ ਹੈ। ਇਸ ਦਾ ਵਿਕਾਸ ਵੈਦਿਕ ਸੰਸਕ੍ਰਿਤ, ਪ੍ਰਾਕ੍ਰਿਤਾਂ ਅਤੇ ਅਪਭ੍ਰੰਸ਼ਾਂ ਰਾਹੀਂ ਹੋਇਆ ਹੈ।
- **ਨਾਮਕਰਨ:** 'ਪੰਜਾਬ' ਸ਼ਬਦ ਫ਼ਾਰਸੀ ਦੇ ਦੋ ਸ਼ਬਦਾਂ **'ਪੰਜ' (5)** ਅਤੇ **'ਆਬ' (ਪਾਣੀ/ਦਰਿਆ)** ਦੇ ਸੁਮੇਲ ਤੋਂ ਬਣਿਆ ਹੈ।

## 2. ਗੁਰਮੁਖੀ ਲਿਪੀ ਦੀ ਵਰਣਮਾਲਾ
- **ਮੂਲ 35 ਅੱਖਰ:** ੳ, ਅ, ੲ, ਸ, ਹ ਤੋਂ ਲੈ ਕੇ ਯ, ਰ, ਲ, ਵ, ੜ ਤੱਕ।
- **6 ਪੈਰ-ਬਿੰਦੀ ਅੱਖਰ:** ਸ਼, ਖ਼, ਗ਼, ਜ਼, ਫ਼, ਲ਼।
- **ਕੁੱਲ ਅੱਖਰ:** $35 + 6 = \\mathbf{41}$ ਅੱਖਰ।`
        },
        {
          unit: "Unit II & III",
          title: "1. ਗੁਰਮਤਿ ਕਾਵਿ, ਸੂਫ਼ੀ ਕਾਵਿ & ਪੰਜਾਬ ਦੇ ਪ੍ਰਮੁੱਖ ਮੇਲੇ ਅਤੇ ਲੋਕ-ਨਾਚ",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. ਗੁਰਮਤਿ ਕਾਵਿ ਧਾਰਾ
- **ਮੁੱਖ ਸਿਧਾਂਤ:** ਸ੍ਰੀ ਗੁਰੂ ਨਾਨਕ ਦੇਵ ਜੀ ਨੇ ਸਮਾਜਿਕ ਤੇ ਅਧਿਆਤਮਿਕ ਜੀਵਨ ਲਈ ਤਿੰਨ ਮੁੱਖ ਥੰਮ੍ਹ ਸਥਾਪਿਤ ਕੀਤੇ:
  1. **ਕਿਰਤ ਕਰੋ:** ਇਮਾਨਦਾਰੀ ਤੇ ਧਰਮ ਦੀ ਸੱਚੀ ਸੁੱਚੀ ਮਿਹਨਤ ਨਾਲ ਰੋਜ਼ੀ ਕਮਾਉਣੀ।
  2. **ਵੰਡ ਛਕੋ:** ਆਪਣੀ ਨੇਕ ਕਮਾਈ ਵਿੱਚੋਂ ਲੋੜਵੰਦਾਂ ਦੀ ਮਦਦ ਕਰਨੀ।
  3. **ਨਾਮ ਜਪੋ:** ਸਰਬ-ਵਿਆਪਕ ਅਕਾਲ ਪੁਰਖ ਦੇ ਨਾਮ ਦਾ ਸਿਮਰਨ ਕਰਨਾ।

## 2. ਸੂਫ਼ੀ ਕਾਵਿ ਧਾਰਾ
- **ਬਾਬਾ ਸ਼ੇਖ਼ ਫ਼ਰੀਦ ਜੀ:** ਪੰਜਾਬੀ ਸੂਫ਼ੀ ਕਾਵਿ ਦੇ ਮੋਢੀ ਕਵੀ ਹਨ। ਆਪ ਜੀ ਦੇ ਸਲੋਕਾਂ ਵਿੱਚ ਨਿਮਰਤਾ, ਮਿੱਠਤ ਅਤੇ ਪ੍ਰਭੂ ਪ੍ਰੇਮ ਦਾ ਉਪਦੇਸ਼ ਹੈ।
- **ਬੁਲ੍ਹੇ ਸ਼ਾਹ:** ਆਪ ਜੀ ਦੀਆਂ ਕਾਫ਼ੀਆਂ ਧਾਰਮਿਕ ਪਖੰਡਾਂ ਅਤੇ ਕੱਟੜਤਾ ਵਿਰੁੱਧ ਆਵਾਜ਼ ਬੁਲੰਦ ਕਰਦੀਆਂ ਹਨ।

## 3. ਪੰਜਾਬੀ ਸੱਭਿਆਚਾਰ — ਮੇਲੇ ਤੇ ਲੋਕ-ਨਾਚ
- **ਮੇਲੇ:** ਵਿਸਾਖੀ (ਕਣਕ ਦੀ ਵਾਢੀ ਤੇ ਖਾਲਸਾ ਸਾਜਨਾ ਦਿਵਸ), ਛਪਾਰ ਦਾ ਮੇਲਾ (ਗੁੱਗੇ ਪੀਰ ਦੀ ਪੂਜਾ), ਜਰਗ ਦਾ ਮੇਲਾ (ਸੀਤਲਾ ਮਾਤਾ ਨੂੰ ਪ੍ਰਸੰਨ ਕਰਨ ਲਈ ਬੇਹਾ ਭੋਜਨ)।
- **ਮਰਦਾਂ ਦੇ ਲੋਕ-ਨਾਚ:** ਭੰਗੜਾ, ਝੂੰਮਰ।
- **ਔਰਤਾਂ ਦੇ ਲੋਕ-ਨਾਚ:** ਗਿੱਧਾ, ਸੰਮੀ।`
        },
        {
          unit: "Unit I (HCP Option)",
          title: "1. HCP Option: Harappan Urban Planning & 18th Century Punjab",
          readTime: "10 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Harappan Civilization Urban Planning
1. **Grid Layout:** Streets intersected strictly at 90-degree right angles, dividing the city into rectangular housing blocks.
2. **Citadel & Lower Town:** Elevated western Citadel for administrative complexes and lower residential sectors.
3. **Advanced Drainage:** Covered underground drains with burnt bricks and inspection soak-pits.
4. **Great Bath (Mohenjodaro):** Waterproofed public bathing tank with bitumen lining for ritual cleansing.

## 2. 18th Century Punjab: Dal Khalsa, Misls & Maharaja Ranjit Singh
- **Dal Khalsa:** Unified military assembly formed under Nawab Kapur Singh and Jassa Singh Ahluwalia.
- **12 Misls:** Autonomous democratic confederacies governing regional territories.
- **Maharaja Ranjit Singh (1799-1839):** Unified the Misls into a sovereign secular empire, modernized armed forces (**Fauj-i-Khas**), and established Lahore as capital.

## 3. Historical Map Locations for Exam
Harappa, Mohenjodaro, Sanghol, Ropar, Lahore, Amritsar, Kiratpur Sahib, Sri Anandpur Sahib, Tarn Taran, Machhiwara, Goindwal Sahib, and Khadur Sahib.`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "ਗੁਰਮੁਖੀ ਲਿਪੀ ਵਿੱਚ ਕੁੱਲ ਕਿੰਨੇ ਅੱਖਰ ਹਨ? ਪੈਰ-ਬਿੰਦੀ ਵਾਲੇ ਅੱਖਰ ਲਿਖੋ।",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit I",
          marks: 10,
          question: "Describe the key urban planning features of the Harappan Civilization.",
          probability: "High Probability",
          examFrequency: "10-Mark HCP Compulsory Question"
        }
      ],
      solutions: [
        {
          unit: "Unit I",
          question: "Describe the key urban planning features of the Harappan Civilization.",
          solution: `### Key Features of Harappan Urban Architecture
1. **Town Planning:** Divided into an elevated western Citadel (for governance) and a lower eastern residential town.
2. **Standardized Masonry:** Built using kiln-fired bricks with standardized 1:2:4 dimensional ratios.
3. **Sanitation & Drainage:** Covered street drains with removable inspection slabs; domestic waste water directed into street channels.
4. **Granaries & Great Bath:** Large ventilated granaries in Harappa and the waterproofing of the Great Bath at Mohenjodaro using gypsum mortar.`
        }
      ]
    },

    // =========================================================================
    // SUBJECT 7: E-COMMERCE & DIGITAL TRENDS (CSA-MDC-101)
    // =========================================================================
    {
      id: "env-edu",
      code: "CSA-MDC-101",
      title: "E-Commerce & Digital Trends",
      type: "Multi-Disciplinary Course",
      credits: 3,
      theoryHours: 45,
      practicalHours: 0,
      assessment: { internal: 5, external: 70, practical: 0, total: 75 },
      icon: "fa-shopping-cart",
      bgClass: "bg-teal",
      description: "Electronic commerce foundations, business models (B2B, B2C, C2C, D2C), fintech architectures (UPI switch & payment gateway lifecycle), digital signatures, SEO, and IT Act 2000 cyber laws.",
      tags: ["E-Commerce", "UPI", "Payment Gateway", "SEO", "Digital Signatures", "IT Act 2000"],
      units: [
        {
          unitNumber: "Unit I",
          title: "E-Commerce Foundations & Business Models",
          topics: [
            "Traditional Commerce vs E-Commerce Comparison",
            "E-Commerce Business Models Matrix (B2B, B2C, C2C, C2B, B2G, D2C)"
          ]
        },
        {
          unitNumber: "Unit II",
          title: "Electronic Payment Systems & Fintech",
          topics: [
            "UPI Technical Architecture (NPCI Switch Engine, VPA Resolution, 2FA, IMPS Settlement)",
            "Payment Gateway 5-Stage Transaction Lifecycle (Checkout, TLS Encryption, Acquiring/Issuing Routing)"
          ]
        },
        {
          unitNumber: "Unit III",
          title: "E-Commerce Infrastructure, SEO & Security",
          topics: [
            "On-Page vs Off-Page Search Engine Optimization (SEO)",
            "Symmetric vs Asymmetric Cryptography & Digital Signature Verification Lifecycle"
          ]
        },
        {
          unitNumber: "Unit IV",
          title: "Emerging Trends & Legal Framework (IT Act 2000)",
          topics: [
            "AI Chatbots, Collaborative vs Content-Based Recommendation Systems",
            "Information Technology Act 2000 (Sec 43, 65, 66, 66C, 66D, 67, 72) Cyber Law Provisions"
          ]
        }
      ],
      notes: [
        {
          unit: "Unit I",
          title: "1. Traditional vs E-Commerce & Business Models Matrix",
          readTime: "8 min read",
          author: "Panjab University Academic Board",
          content: `## 1. Traditional Commerce vs E-Commerce
| Feature | Traditional Commerce | E-Commerce |
| :--- | :--- | :--- |
| **Operating Hours** | Fixed physical retail hours | 24/7/365 continuous availability |
| **Geographic Reach** | Local / regional physical boundary | Global marketplace access |
| **Operating Cost** | High retail rent & sales staff overhead | Lower inventory, logistics & cloud storefront overhead |
| **Customer Experience** | Physical touch & examination | Digital catalog with AI recommendations |

## 2. E-Commerce Business Models Matrix
| Model | Full Form | Operational Mechanism & Real-World Examples |
| :--- | :--- | :--- |
| **B2B** | Business-to-Business | High-volume wholesale trade between enterprises (e.g., Alibaba, IndiaMART). |
| **B2C** | Business-to-Consumer | Direct retail sales to end consumers (e.g., Amazon, Flipkart). |
| **C2C** | Consumer-to-Consumer | Peer-to-peer marketplaces for used or direct goods (e.g., OLX, eBay). |
| **C2B** | Consumer-to-Business | Freelancers or influencers offering services to companies (e.g., Upwork). |
| **B2G** | Business-to-Government | Private contractors providing IT or supplies to government (e.g., GeM Portal). |
| **D2C** | Direct-to-Consumer | Brand manufacturers selling directly to consumers bypassing distributors (e.g., Boat, Mamaearth). |`
        },
        {
          unit: "Unit II",
          title: "1. UPI Technical Architecture & Payment Gateway Lifecycle",
          readTime: "9 min read",
          author: "Panjab University Academic Board",
          content: `## 1. UPI Technical Architecture Workflow
Unified Payments Interface (UPI) is managed by the **NPCI** (National Payments Corporation of India):
1. **Initiation:** User initiates transfer via PSP app (PhonePe, GPay) to a Virtual Payment Address (VPA: \`user@bank\`).
2. **VPA Resolution:** PSP submits VPA to NPCI UPI Switch to look up recipient account details.
3. **Authentication (2FA):** User inputs 4/6-digit MPIN validated by issuing bank via device SIM binding.
4. **Settlement:** NPCI triggers instant fund settlement across the **IMPS** (Immediate Payment Service) network.

## 2. End-to-End Payment Gateway Transaction Lifecycle
$$\\text{Merchant Checkout} \\xrightarrow{\\text{TLS 1.3 Encrypt}} \\text{Payment Gateway} \\xrightarrow{\\text{Route}} \\text{Acquiring Bank} \\xrightarrow{\\text{Card Network (Visa/RuPay)}} \\text{Issuing Bank (2FA/Auth)} \\xrightarrow{\\text{Settlement}} \\text{Merchant Bank}$$`
        },
        {
          unit: "Unit III & IV",
          title: "1. SEO, Digital Signatures & IT Act 2000 Cyber Law Provisions",
          readTime: "10 min read",
          author: "Panjab University Academic Board",
          content: `## 1. On-Page vs Off-Page Search Engine Optimization (SEO)
| SEO Type | Focus Area | Key Techniques |
| :--- | :--- | :--- |
| **On-Page SEO** | Internal website content & structure | Title tags, meta descriptions, semantic HTML5 headings, image ALT tags, fast loading speeds. |
| **Off-Page SEO** | External domain authority & trust | High-quality backlinks, social mentions, guest blogs, domain authority signals. |

## 2. Digital Signatures & Asymmetric Cryptography (SHA-256 + RSA)
1. **Signing:** Sender hashes document with SHA-256 and encrypts hash using their **Private Key**.
2. **Transmission:** Document and Digital Signature sent to recipient.
3. **Verification:** Recipient decrypts signature using sender's **Public Key** and compares with fresh SHA-256 hash of the received document.
4. **Guarantees:** Confirms **Integrity**, **Authentication**, and **Non-Repudiation**.

## 3. Information Technology Act, 2000 (IT Act) Key Sections
- **Section 43:** Penalty for damage to computer system without permission.
- **Section 65:** Tampering with computer source documents (Imprisonment up to 3 years).
- **Section 66:** Hacking and cyber crimes with fraudulent intent.
- **Section 66C:** Identity theft (stealing passwords or digital signatures).
- **Section 66D:** Cheating by personation using computer resources.
- **Section 67:** Publishing obscene material in electronic form.
- **Section 72:** Breach of confidentiality and privacy.`
        }
      ],
      questions: [
        {
          unit: "Unit I",
          marks: 2,
          question: "Define B2B, B2C, and D2C e-commerce models with examples.",
          probability: "High Probability",
          examFrequency: "PU 2022, 2024"
        },
        {
          unit: "Unit II",
          marks: 10,
          question: "Explain the technical architecture of UPI payments and detail the end-to-end payment gateway transaction lifecycle.",
          probability: "High Probability",
          examFrequency: "10-Mark Core Question"
        }
      ],
      solutions: [
        {
          unit: "Unit II",
          question: "Explain the technical architecture of UPI payments and detail the end-to-end payment gateway transaction lifecycle.",
          solution: `### 1. UPI Architecture
- **NPCI Central Switch:** Orchestrates real-time routing between remitter and beneficiary banks.
- **VPA (Virtual Payment Address):** Masks sensitive bank account/IFSC numbers.
- **2FA Security:** Employs hardware SIM binding + encrypted MPIN authorization.
- **IMPS Backbone:** 24/7 instantaneous funds settlement.

### 2. Payment Gateway Lifecycle
1. **Customer Checkout:** User inputs payment credentials on HTTPS portal.
2. **Payload Encryption:** TLS/AES-256 encryption applied before routing to Payment Gateway.
3. **Acquiring Bank Routing:** Gateway routes request to merchant's acquiring bank.
4. **Card Network Interchange:** Request sent to Visa/Mastercard/RuPay switches.
5. **Issuing Bank Authorization:** Customer bank checks balance, runs fraud checks, requests OTP, and returns approval.
6. **Settlement:** Gateway credits funds to merchant bank within $T+1$ or $T+2$ settlement cycles.`
        }
      ]
    }
  ]
};

// Export for Node environments if required
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BCA_1ST_SEM_DATA;
}
