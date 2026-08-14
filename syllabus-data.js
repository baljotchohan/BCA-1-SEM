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
      "notes": [
        {
          "unit": "Unit I",
          "title": "1.1 History & Evolution of the Internet — ARPANET, TCP/IP, WWW, W3C & WAI-ARIA",
          "readTime": "18 min read",
          "author": "Baljot Chohan",
          "content": "# 1.1 History & Evolution of the Internet\n\n## Core idea\nThe **Internet** is a global network of interconnected computer networks that communicate using common protocols, especially the TCP/IP protocol suite. The **World Wide Web (WWW)** is an application/service that runs on the Internet; it is not the Internet itself.\n\n### Timeline\n```text\n1960s → ARPANET research\n1970s → TCP/IP development\n1983  → ARPANET adopts TCP/IP\n1989  → Tim Berners-Lee proposes WWW\n1991  → First public Web\n1994  → W3C formed\nToday → Web apps, cloud, mobile, APIs, streaming\n```\n\n## ARPANET\nARPANET (Advanced Research Projects Agency Network) was an early packet-switched network funded by ARPA. Its major contribution was demonstrating resilient communication between geographically separated computers. Packet switching divides data into packets, routes them independently, and reconstructs them at the destination.\n\n**Real-life analogy:** Sending a large parcel as many smaller tracked packages rather than one huge package.\n\n**Punjabi:** Internet ਇੱਕੋ network ਨਹੀਂ; ਇਹ ਬਹੁਤ ਸਾਰੇ networks ਦਾ network ਹੈ। ARPANET ਨੇ packet-based networking ਦੀ practical foundation ਦਿੱਤੀ।\n\n## TCP/IP and the 1983 transition\nTCP/IP is a protocol suite. IP handles addressing/routing while TCP provides reliable, ordered delivery for TCP connections. The January 1, 1983 transition is commonly called the TCP/IP Flag Day and is a major Internet milestone.\n\n## WWW\nTim Berners-Lee designed the Web around three foundational technologies: **HTML** for document structure, **HTTP** for transfer, and **URLs/URIs** for identifying resources. A browser requests resources from servers and renders them.\n\n```text\nUser → Browser → HTTP request → Web server\nUser ← Browser ← HTTP response ← Web server\n```\n\n## Internet vs WWW\n| Internet | WWW |\n|---|---|\n| Global networking infrastructure | Hyperlinked information system |\n| Uses many protocols | Primarily Web technologies such as HTTP(S) |\n| Supports email, DNS, SSH, Web, etc. | One major Internet service |\n\n## W3C\nThe World Wide Web Consortium (W3C) develops Web standards and recommendations to improve interoperability and accessibility.\n\n## WAI-ARIA\nWAI-ARIA (Accessible Rich Internet Applications) adds semantics that help assistive technologies understand dynamic interfaces. Examples include roles and states such as `role=\"button\"`, `aria-label`, and `aria-expanded`.\n\n**Important:** Prefer native semantic HTML first. ARIA should enhance semantics where native HTML is insufficient, not replace correct HTML.\n\n## Exam points\n- Define Internet and WWW separately.\n- Explain ARPANET's significance.\n- Explain TCP/IP and the 1983 transition.\n- Differentiate Internet and WWW.\n- Explain W3C and WAI-ARIA.\n\n## Quick Punjabi recap\nInternet = networks ਦਾ network. WWW = Internet ਉੱਤੇ ਚੱਲਣ ਵਾਲੀ hyperlinked Web service. HTML structure ਦਿੰਦਾ ਹੈ, HTTP communication ਕਰਦਾ ਹੈ ਅਤੇ URL resource ਦੀ ਪਹਿਚਾਣ ਕਰਦਾ ਹੈ।"
        },
        {
          "unit": "Unit I",
          "title": "1.2 Client–Server Architecture — 2-Tier, 3-Tier, Browser Subsystems & Socket Lifecycle",
          "readTime": "18 min read",
          "author": "Baljot Chohan",
          "content": "# 1.2 Client–Server Architecture\n\n## Definition\nClient–server architecture separates a system into requesters (**clients**) and service providers (**servers**).\n\n```text\nClient / Browser\n      │ request\n      ▼\n Application / Web Server\n      │ query\n      ▼\n Database Server\n      │ result\n      └──────────────► response\n```\n\n## 2-Tier architecture\nA client communicates directly with a server/database. The client often contains presentation and some business logic.\n\n```text\nClient ─────────► Server/Database\n```\n\n**Advantages:** simple, easy for small systems. **Limitations:** weaker scalability, tighter coupling, harder centralized maintenance.\n\n## 3-Tier architecture\nThree logical layers:\n1. Presentation layer — browser/UI.\n2. Application/business layer — rules, authentication, APIs.\n3. Data layer — database/storage.\n\n```text\nBrowser\n   ↓\nWeb/API server\n   ↓\nDatabase\n```\n\n**Real life:** Online shopping: browser displays products; application server checks stock/payment rules; database stores users/orders/products.\n\n## Browser subsystems\nA modern browser can be understood conceptually as:\n- User interface\n- Browser process/security coordinator\n- Rendering engine\n- JavaScript engine\n- Networking stack\n- Storage subsystem (cookies, cache, local storage, etc.)\n- GPU/compositor components\n\n```text\nBrowser\n├─ UI\n├─ Network\n├─ Renderer → HTML + CSS → layout/paint\n├─ JS Engine → JavaScript\n└─ Storage/Security\n```\n\n## Web-server socket lifecycle\nA TCP server commonly follows:\n`socket → bind → listen → accept → receive/send → close`.\n\nThe client typically performs `socket → connect → send/receive → close`.\n\n```text\nServer: socket → bind → listen → accept\n                         ↑\nClient: socket → connect ┘\nBoth: request/response → close\n```\n\nA socket is an endpoint identified by an IP address and port in a network context.\n\n## Punjabi\nClient ਮੰਗ ਕਰਦਾ ਹੈ ਅਤੇ server service/data ਦਿੰਦਾ ਹੈ। 2-tier ਵਿੱਚ client ਸਿੱਧਾ backend/data ਨਾਲ ਜੁੜ ਸਕਦਾ ਹੈ। 3-tier ਵਿੱਚ UI, business logic ਅਤੇ database ਵੱਖ layers ਵਿੱਚ ਹੁੰਦੇ ਹਨ, ਇਸ ਲਈ large applications maintain ਕਰਨਾ ਆਸਾਨ ਹੁੰਦਾ ਹੈ।\n\n## Exam focus\nDefine client-server architecture; compare 2-tier and 3-tier; explain browser subsystems; explain the server socket lifecycle with a diagram; give an e-commerce example."
        },
        {
          "unit": "Unit I",
          "title": "1.3 URL Structure, DNS Resolution, HTTP vs HTTPS & TLS Handshake",
          "readTime": "22 min read",
          "author": "Baljot Chohan",
          "content": "# 1.3 URL, DNS, HTTP/HTTPS & TLS\n\n## URL structure\nExample: `https://www.example.com:443/products?id=10#reviews`\n\n```text\nscheme://host:port/path?query#fragment\n```\n- Scheme: `https`\n- Host: domain name\n- Port: optional explicit port; HTTPS commonly uses 443\n- Path: requested resource\n- Query: parameters sent to the resource\n- Fragment: client-side position/reference within a resource\n\n## DNS\nDNS translates human-friendly domain names into IP addresses and can also provide other records.\n\n### Typical resolution journey\n```text\nBrowser cache\n   ↓ miss\nOS/cache → recursive resolver\n   ↓\nRoot DNS → TLD DNS → Authoritative DNS\n   ↓\nIP address\n   ↓\nBrowser connects to server\n```\n\nA resolver may answer from cache, so not every lookup contacts root/TLD/authoritative servers each time.\n\nImportant records: A/AAAA (addresses), CNAME (canonical alias), MX (mail), TXT (text/policy), NS (name servers).\n\n## HTTP\nHTTP is an application-layer request/response protocol for Web resources.\n\n```text\nGET /index.html HTTP/1.1\nHost: example.com\n```\n\nA response contains status, headers and often a body. Common statuses: 200 OK, 301/302 redirect, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 500 Internal Server Error.\n\n## HTTPS\nHTTPS is HTTP protected by TLS. TLS provides encryption in transit, server authentication through certificates, and integrity protection.\n\n## Simplified TLS handshake\nExact details vary by TLS version, but conceptually:\n```text\nClientHello → supported versions/ciphers + random\nServerHello → selected parameters + certificate\nCertificate validation → client verifies server identity\nKey agreement → shared secret derived\nFinished messages → handshake integrity confirmed\nEncrypted HTTP traffic ⇄\n```\n\nModern TLS uses ephemeral key agreement such as ECDHE in common deployments, giving forward secrecy when configured appropriately.\n\n## HTTP vs HTTPS\n| HTTP | HTTPS |\n|---|---|\n| Plain application protocol | HTTP over TLS |\n| No TLS encryption | Encrypted in transit |\n| No certificate-based server authentication | Certificate validates server identity |\n| Vulnerable to network interception/modification | Stronger protection against interception |\n\n**Real life:** When logging into a bank, HTTPS helps prevent someone on the same network from reading credentials in transit.\n\n## Punjabi\nDNS ਨੂੰ Internet ਦੀ phonebook ਵਾਂਗ ਸਮਝੋ: `google.com` ਵਰਗੇ ਨਾਮ ਨੂੰ IP address ਨਾਲ map ਕਰਦਾ ਹੈ। HTTPS ਵਿੱਚ HTTP traffic TLS ਨਾਲ protect ਹੁੰਦੀ ਹੈ। Certificate ਇਹ verify ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ ਕਿ ਤੁਸੀਂ intended server ਨਾਲ ਗੱਲ ਕਰ ਰਹੇ ਹੋ।\n\n## Exam checklist\nDraw DNS flow; explain URL parts; compare HTTP/HTTPS; explain TLS handshake and certificate validation; mention common HTTP status codes."
        },
        {
          "unit": "Unit I",
          "title": "1.4 MIME Types, Static vs Dynamic Web Architecture & Web Hosting",
          "readTime": "16 min read",
          "author": "Baljot Chohan",
          "content": "# 1.4 MIME Types, Static/Dynamic Web & Hosting\n\n## MIME types\nMIME (Multipurpose Internet Mail Extensions) types tell software what kind of content is being transferred. On the Web they appear commonly in the HTTP `Content-Type` header.\n\nExamples:\n- `text/html`\n- `text/css`\n- `text/javascript`\n- `application/json`\n- `image/png`\n- `image/jpeg`\n- `application/pdf`\n\n```text\nHTTP response\nContent-Type: text/html\n        ↓\nBrowser interprets body as HTML\n```\n\nMIME metadata helps clients select appropriate parsing/rendering behavior.\n\n## Static websites\nA static site serves pre-created files.\n\n```text\nBrowser → Server → index.html\n                    style.css\n                    image.jpg\n```\n\n**Advantages:** simple, fast, cache/CDN friendly, low server-side complexity.\n\n**Examples:** documentation, portfolios, landing pages.\n\n## Dynamic websites\nA dynamic site generates or selects content at request time using application logic and often a database.\n\n```text\nBrowser → Web/App Server → Database\n              ↓\n         generated HTML/JSON\n              ↓\n           Browser\n```\n\n**Examples:** shopping carts, dashboards, social media feeds.\n\n## Static vs dynamic\n| Static | Dynamic |\n|---|---|\n| Prebuilt files | Generated/selected at runtime |\n| Simple hosting | Application runtime often required |\n| Excellent caching | More complex logic |\n| Ideal for fixed content | Ideal for personalized/data-driven content |\n\n## Web hosting paradigms\n1. Shared hosting — many sites share a server.\n2. VPS — virtualized server resources with more control.\n3. Dedicated server — physical server dedicated to a customer.\n4. Cloud hosting — elastic distributed infrastructure.\n5. Serverless — provider manages servers; code executes on demand.\n6. Static/CDN hosting — files distributed close to users.\n\n**Real life:** A college notes site can be static if all notes are prebuilt. A student portal showing personalized marks needs dynamic backend logic.\n\n## Punjabi\nMIME type browser ਨੂੰ ਦੱਸਦਾ ਹੈ ਕਿ response ਵਿੱਚ ਕਿਹੜੀ ਕਿਸਮ ਦਾ data ਹੈ। Static website ਵਿੱਚ files ਪਹਿਲਾਂ ਹੀ ਬਣੀਆਂ ਹੁੰਦੀਆਂ ਹਨ; dynamic website ਵਿੱਚ request ਦੇ ਸਮੇਂ data/HTML generate ਹੋ ਸਕਦਾ ਹੈ। Hosting ਉਹ infrastructure ਹੈ ਜਿੱਥੇ website ਦੇ resources accessible ਹੁੰਦੇ ਹਨ।\n\n## Exam focus\nDefine MIME; explain static and dynamic architecture with diagrams; compare hosting models; give suitable real-world examples."
        },
        {
          "unit": "Unit II",
          "title": "2.1 HTML5 Document Anatomy, Standards Mode, Metadata & Text Formatting",
          "readTime": "20 min read",
          "author": "Baljot Chohan",
          "content": "# 2.1 HTML5 Document Anatomy\n\n## HTML\nHTML (HyperText Markup Language) describes the structure and meaning of Web documents. It is a markup language, not a general-purpose programming language.\n\n## Basic anatomy\n```html\n<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello</h1>\n  <p>Welcome.</p>\n</body>\n</html>\n```\n\n### Main parts\n- `<!doctype html>` triggers standards-oriented HTML parsing mode in modern browsers.\n- `<html>` is the document root.\n- `<head>` contains metadata/resources.\n- `<body>` contains rendered document content.\n\n## Metadata\nMetadata describes the document without necessarily appearing as page content.\n\nImportant examples:\n- `charset` — character encoding.\n- `viewport` — helps responsive layout on mobile.\n- `title` — browser/tab and search context.\n- `meta description` — descriptive metadata used by search engines and previews.\n\n## Text structure\nUse headings in a meaningful hierarchy (`h1` through `h6`) and paragraphs (`p`). Inline semantic elements include `strong`, `em`, `mark`, `code`, `abbr`, etc.\n\n**Semantic vs purely visual:** `strong` conveys importance; CSS should control visual styling rather than abusing heading tags for size.\n\n## Standards mode\nThe HTML doctype helps browsers avoid legacy quirks behavior and interpret the document according to modern standards.\n\n## Real-life example\nA university page can have one meaningful `h1`, sections with `h2`, subsections with `h3`, and paragraphs beneath them. This improves readability, accessibility and document structure.\n\n## Punjabi\nHTML website ਦਾ skeleton/structure ਬਣਾਉਂਦਾ ਹੈ। `<head>` ਵਿੱਚ page ਦੀ metadata ਅਤੇ resources ਹੁੰਦੇ ਹਨ, ਜਦਕਿ `<body>` ਵਿੱਚ user ਨੂੰ ਦਿਖਣ ਵਾਲਾ content ਹੁੰਦਾ ਹੈ। `<!doctype html>` browser ਨੂੰ modern standards mode ਲਈ document parse ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।\n\n## Exam focus\nDraw HTML document tree; explain doctype, head/body and metadata; write a valid HTML5 skeleton; distinguish semantic structure from visual formatting."
        }
      ],
      "questions": [
        {
          "id": "web-tech-q-1786729172166",
          "unit": "Unit I",
          "type": "8-mark",
          "question": "Explain client-server architecture in detail. Compare 2-tier and 3-tier web architectures with labelled diagrams and suitable real-life examples.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729176865",
          "unit": "Unit I",
          "type": "8-mark",
          "question": "Explain the complete journey of opening an HTTPS website, including URL parsing, DNS resolution, TCP connection, TLS handshake, HTTP request/response and browser rendering.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729179901",
          "unit": "Unit I",
          "type": "8-mark",
          "question": "What is DNS? Explain the six-step DNS resolution pipeline, DNS hierarchy, caching and the role of recursive and authoritative servers.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729182666",
          "unit": "Unit I",
          "type": "8-mark",
          "question": "Differentiate HTTP and HTTPS. Explain the purpose of TLS, certificates, confidentiality, integrity and authentication with a handshake diagram.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729186164",
          "unit": "Unit I",
          "type": "2-mark",
          "question": "Define Internet and World Wide Web. State one difference.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729188569",
          "unit": "Unit I",
          "type": "2-mark",
          "question": "What is a URL? Name its major components.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729191545",
          "unit": "Unit I",
          "type": "2-mark",
          "question": "What is MIME type? Give four examples.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729195625",
          "unit": "Unit I",
          "type": "2-mark",
          "question": "Differentiate static and dynamic websites.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729199408",
          "unit": "Unit II",
          "type": "8-mark",
          "question": "Explain the complete anatomy of an HTML5 document. Discuss DOCTYPE, html, head, metadata, viewport, title and body with a labelled structure diagram.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729204653",
          "unit": "Unit II",
          "type": "8-mark",
          "question": "Explain semantic HTML5. Describe header, nav, main, article, section and footer with a realistic webpage diagram and discuss accessibility benefits.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729207445",
          "unit": "Unit II",
          "type": "8-mark",
          "question": "Explain hyperlinks in HTML. Differentiate absolute, relative and internal links, and explain the security purpose of rel=\"noopener noreferrer\" with examples.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729210502",
          "unit": "Unit II",
          "type": "8-mark",
          "question": "Explain HTML forms and client-side validation. Discuss form attributes, input types, radio/checkbox, select/option and why server-side validation is still necessary.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729213949",
          "unit": "Unit II",
          "type": "2-mark",
          "question": "What is semantic HTML? Give four examples of semantic elements.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729216406",
          "unit": "Unit II",
          "type": "2-mark",
          "question": "Differentiate absolute and relative URLs.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729218908",
          "unit": "Unit II",
          "type": "2-mark",
          "question": "What is the difference between rowspan and colspan in an HTML table?",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729224670",
          "unit": "Unit II",
          "type": "2-mark",
          "question": "Why is client-side validation not sufficient for security?",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729227360",
          "unit": "Unit III",
          "type": "8-mark",
          "question": "Explain the CSS cascade and specificity in detail. Compare inline, ID, class/attribute/pseudo-class and element selectors with examples.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729231529",
          "unit": "Unit III",
          "type": "8-mark",
          "question": "Explain the CSS box model with a labelled diagram. Differentiate content-box and border-box and solve a numerical width example.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729235686",
          "unit": "Unit III",
          "type": "8-mark",
          "question": "Explain all five CSS positioning modes: static, relative, absolute, fixed and sticky. Compare their effect on normal document flow and give real-life examples.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729238999",
          "unit": "Unit III",
          "type": "8-mark",
          "question": "Explain Flexbox and responsive web design. Discuss main/cross axes, important Flexbox properties, media queries and mobile-first design with a practical layout example.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729241926",
          "unit": "Unit III",
          "type": "2-mark",
          "question": "What is the CSS box model? Name its four major components.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729245795",
          "unit": "Unit III",
          "type": "2-mark",
          "question": "Differentiate margin and padding.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729250265",
          "unit": "Unit III",
          "type": "2-mark",
          "question": "What is Flexbox? Name four container properties.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729252513",
          "unit": "Unit III",
          "type": "2-mark",
          "question": "What is responsive web design and what is mobile-first design?",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729256350",
          "unit": "Unit IV",
          "type": "8-mark",
          "question": "Explain JavaScript variables, data types and operators. Compare var, let and const and discuss strict equality with examples.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729258913",
          "unit": "Unit IV",
          "type": "8-mark",
          "question": "Explain JavaScript functions in detail. Differentiate function declarations, function expressions and arrow functions with syntax, examples and important behavioural differences.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729261602",
          "unit": "Unit IV",
          "type": "8-mark",
          "question": "What is the DOM? Explain DOM tree traversal, element selection and dynamic modification of text, attributes and classes with a complete example.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729264942",
          "unit": "Unit IV",
          "type": "8-mark",
          "question": "Explain the JavaScript event handling lifecycle: capturing, target and bubbling. Demonstrate addEventListener and event delegation with a practical example.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729268440",
          "unit": "Unit IV",
          "type": "8-mark",
          "question": "Explain form validation using JavaScript. Build the logic for validating a registration form and explain why validation must also be performed on the server.",
          "marks": 8,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729271614",
          "unit": "Unit IV",
          "type": "2-mark",
          "question": "What is the DOM?",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729274074",
          "unit": "Unit IV",
          "type": "2-mark",
          "question": "Differentiate var, let and const.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729278135",
          "unit": "Unit IV",
          "type": "2-mark",
          "question": "What is event bubbling?",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        },
        {
          "id": "web-tech-q-1786729281385",
          "unit": "Unit IV",
          "type": "2-mark",
          "question": "Differentiate == and === in JavaScript.",
          "marks": 2,
          "probability": "High Probability (PU Exam)"
        }
      ],
      "solutions": [
        {
          "id": "sol-web-tech-q-1786729172166",
          "questionId": "web-tech-q-1786729172166",
          "question": "Explain client-server architecture in detail. Compare 2-tier and 3-tier web architectures with labelled diagrams and suitable real-life examples.",
          "unit": "Unit I",
          "type": "8-mark",
          "solution": "Model Answer:\\n1. Define client-server architecture: a client requests resources/services and a server processes requests and returns responses.\\n2. Explain 2-tier: client communicates directly with server/data service. Diagram: Client <-> Server/Database. Advantages: simplicity and low initial complexity. Limitations: tighter coupling and weaker separation of concerns.\\n3. Explain 3-tier: Presentation tier -> Application/Business tier -> Data tier. Presentation handles UI; application handles business rules/APIs; data tier stores/retrieves data.\\n4. Draw labelled diagram: Browser -> Web/Application Server -> Database.\\n5. Explain real-life example: college portal where browser displays UI, application server checks login/attendance rules, database stores students and records.\\n6. Compare on separation, scalability, maintenance, security and deployment.\\n7. Conclusion: 3-tier is generally more maintainable and scalable for complex applications.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729176865",
          "questionId": "web-tech-q-1786729176865",
          "question": "Explain the complete journey of opening an HTTPS website, including URL parsing, DNS resolution, TCP connection, TLS handshake, HTTP request/response and browser rendering.",
          "unit": "Unit I",
          "type": "8-mark",
          "solution": "Model Answer:\\n1. URL is parsed into scheme, host, port, path, query and fragment.\\n2. DNS resolution finds the relevant IP/DNS record, commonly through local cache, recursive resolver, root, TLD and authoritative server when cache is unavailable.\\n3. Client establishes a transport connection to the server; for conventional HTTPS this includes TCP before TLS.\\n4. TLS handshake authenticates the server through certificates and establishes cryptographic keys.\\n5. Browser sends an HTTP request over the protected connection.\\n6. Server/application processes it and may access files, APIs or databases.\\n7. Server returns status, headers such as Content-Type and response body.\\n8. Browser parses HTML, builds DOM/CSS-related structures, executes JavaScript, calculates layout and paints the page.\\nDiagram: URL -> DNS -> TCP -> TLS -> HTTP request -> Server/App/DB -> HTTP response -> HTML/CSS/JS parsing -> Layout/Paint -> Screen.\\nPunjabi: Browser ਪਹਿਲਾਂ address ਸਮਝਦਾ ਹੈ, DNS ਨਾਲ server ਲੱਭਦਾ ਹੈ, HTTPS ਲਈ TLS security ਬਣਾਉਂਦਾ ਹੈ, request ਭੇਜਦਾ ਹੈ ਅਤੇ response ਨੂੰ page ਵਿੱਚ render ਕਰਦਾ ਹੈ.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729179901",
          "questionId": "web-tech-q-1786729179901",
          "question": "What is DNS? Explain the six-step DNS resolution pipeline, DNS hierarchy, caching and the role of recursive and authoritative servers.",
          "unit": "Unit I",
          "type": "8-mark",
          "solution": "Model Answer:\\nDNS (Domain Name System) maps domain names to DNS records such as IP addresses. Explain: 1) browser/local cache check; 2) OS/resolver cache; 3) recursive resolver; 4) root server identifies TLD; 5) TLD server identifies authoritative server; 6) authoritative server supplies the answer. Explain that caching can make the resolver skip upstream queries. Distinguish recursive resolver from authoritative server. Give example: resolving www.example.com. Diagram: Browser -> Local cache -> Recursive resolver -> Root -> TLD -> Authoritative -> Answer. Punjabi: DNS Internet ਦੀ phonebook ਵਰਗਾ ਹੈ, ਪਰ technically it is a distributed hierarchical naming system, not simply a single database.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729182666",
          "questionId": "web-tech-q-1786729182666",
          "question": "Differentiate HTTP and HTTPS. Explain the purpose of TLS, certificates, confidentiality, integrity and authentication with a handshake diagram.",
          "unit": "Unit I",
          "type": "8-mark",
          "solution": "Model Answer:\\nHTTP is the web application protocol; HTTPS is HTTP protected by TLS. Explain that HTTPS provides confidentiality, integrity and server authentication when certificate validation succeeds. Handshake diagram: ClientHello -> ServerHello/certificate/key agreement -> handshake confirmation -> encrypted HTTP data. Explain why certificates matter: they bind a public key to an identity through a trust chain. Explain that encryption alone is not the same as identity authentication. Real-life example: online banking login. Punjabi: HTTPS login/payment data ਨੂੰ network ਉੱਤੇ protected communication ਦਿੰਦਾ ਹੈ, ਪਰ application-level security ਵੀ separately required ਹੈ.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729186164",
          "questionId": "web-tech-q-1786729186164",
          "question": "Define Internet and World Wide Web. State one difference.",
          "unit": "Unit I",
          "type": "2-mark",
          "solution": "Internet is the global network infrastructure connecting networks and devices. The World Wide Web is a service running over the Internet using technologies such as URLs, HTTP/HTTPS and browsers. Difference: the Internet is the underlying network; the Web is one service/application system built on it.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729188569",
          "questionId": "web-tech-q-1786729188569",
          "question": "What is a URL? Name its major components.",
          "unit": "Unit I",
          "type": "2-mark",
          "solution": "A URL (Uniform Resource Locator) identifies how and where a resource can be accessed. Major components can include scheme, host/domain, port, path, query and fragment. Example: https://example.com:443/products?id=10#reviews.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729191545",
          "questionId": "web-tech-q-1786729191545",
          "question": "What is MIME type? Give four examples.",
          "unit": "Unit I",
          "type": "2-mark",
          "solution": "A MIME type identifies the media/content type of a resource so the receiving software can interpret it correctly. Examples: text/html, text/css, application/json, image/png.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729195625",
          "questionId": "web-tech-q-1786729195625",
          "question": "Differentiate static and dynamic websites.",
          "unit": "Unit I",
          "type": "2-mark",
          "solution": "A static website mainly serves pre-existing files such as HTML, CSS and images. A dynamic website generates or retrieves content at request time using application logic, APIs or databases. Example: a simple portfolio can be static; a personalized shopping dashboard is dynamic.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729199408",
          "questionId": "web-tech-q-1786729199408",
          "question": "Explain the complete anatomy of an HTML5 document. Discuss DOCTYPE, html, head, metadata, viewport, title and body with a labelled structure diagram.",
          "unit": "Unit II",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine HTML as a markup language for document structure. Show: DOCTYPE -> html -> head -> metadata/title/resources -> body -> visible content. Explain standards mode, UTF-8 charset and viewport metadata. Give a complete HTML5 example. Mention that semantic structure improves accessibility and maintainability. Diagram: Document -> html -> head + body; head -> meta/title/link; body -> header/nav/main/article/footer.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729204653",
          "questionId": "web-tech-q-1786729204653",
          "question": "Explain semantic HTML5. Describe header, nav, main, article, section and footer with a realistic webpage diagram and discuss accessibility benefits.",
          "unit": "Unit II",
          "type": "8-mark",
          "solution": "Model Answer:\\nSemantic HTML uses elements that communicate meaning. Explain header, nav, main, article, section and footer. Diagram: header -> nav -> main -> article -> section; aside/footer as appropriate. Explain that semantic landmarks improve screen-reader navigation, maintainability and machine understanding. State that native semantic HTML should be preferred over unnecessary ARIA roles. Punjabi: semantic tags webpage ਦੇ parts ਦਾ purpose واضح ਕਰਦੇ ਹਨ.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729207445",
          "questionId": "web-tech-q-1786729207445",
          "question": "Explain hyperlinks in HTML. Differentiate absolute, relative and internal links, and explain the security purpose of rel=\"noopener noreferrer\" with examples.",
          "unit": "Unit II",
          "type": "8-mark",
          "solution": "Model Answer:\\nExplain anchor element and href. Absolute link contains a complete URL; relative link is resolved relative to the current document/base URL; internal fragment link points to an element in the same document using an ID. Example code for each. Explain target=\"_blank\" creates a new browsing context and rel=\"noopener\" prevents opener access; noreferrer controls referrer information. Add real-life examples such as navigation menu, documentation links and page-section navigation.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729210502",
          "questionId": "web-tech-q-1786729210502",
          "question": "Explain HTML forms and client-side validation. Discuss form attributes, input types, radio/checkbox, select/option and why server-side validation is still necessary.",
          "unit": "Unit II",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine form as a mechanism for collecting user input. Explain action, method, name, required and other useful attributes. Cover text, email, password, number, date, checkbox, radio, textarea, select and option. Explain radio for one choice in a group and checkbox for independent/multiple choices. Show a complete registration form. Explain browser constraint validation such as required, type=email, min/max, minlength/maxlength. Critical point: client validation can be bypassed; server must validate, authorize and sanitize/handle input again.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729213949",
          "questionId": "web-tech-q-1786729213949",
          "question": "What is semantic HTML? Give four examples of semantic elements.",
          "unit": "Unit II",
          "type": "2-mark",
          "solution": "Semantic HTML uses elements whose names communicate the meaning or role of their content. Examples: header, nav, main, article, section and footer.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729216406",
          "questionId": "web-tech-q-1786729216406",
          "question": "Differentiate absolute and relative URLs.",
          "unit": "Unit II",
          "type": "2-mark",
          "solution": "An absolute URL gives the complete destination including scheme and host, such as https://example.com/about. A relative URL is resolved against the current document/base URL, such as /about or images/logo.png.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729218908",
          "questionId": "web-tech-q-1786729218908",
          "question": "What is the difference between rowspan and colspan in an HTML table?",
          "unit": "Unit II",
          "type": "2-mark",
          "solution": "rowspan makes a table cell span multiple rows vertically. colspan makes a cell span multiple columns horizontally.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729224670",
          "questionId": "web-tech-q-1786729224670",
          "question": "Why is client-side validation not sufficient for security?",
          "unit": "Unit II",
          "type": "2-mark",
          "solution": "Client-side validation runs in an environment controlled by the user and can be bypassed or replaced by crafted requests. The server must validate and authorize submitted data independently before processing or storing it.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729227360",
          "questionId": "web-tech-q-1786729227360",
          "question": "Explain the CSS cascade and specificity in detail. Compare inline, ID, class/attribute/pseudo-class and element selectors with examples.",
          "unit": "Unit III",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine cascade as the algorithm used to resolve competing declarations. Explain that origin/importance/layers, specificity and source order all matter. Give simplified specificity tuple: inline | IDs | classes/attributes/pseudo-classes | elements/pseudo-elements. Example: p {color:blue}, .note {color:green}, #warning {color:red}; an element matching all normally receives the ID declaration. Warn that source order only resolves declarations that are otherwise tied in the relevant cascade comparison. Punjabi: 'last rule wins' alone is an incomplete rule.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729231529",
          "questionId": "web-tech-q-1786729231529",
          "question": "Explain the CSS box model with a labelled diagram. Differentiate content-box and border-box and solve a numerical width example.",
          "unit": "Unit III",
          "type": "8-mark",
          "solution": "Model Answer:\\nDraw: margin -> border -> padding -> content. Define each component. Example: width=200px, padding=20px each side, border=5px each side. With content-box total outer width = 200+40+10=250px. With border-box, declared 200px includes content, padding and border, so outer width remains 200px. Explain box-sizing and give the common global rule. Punjabi: content-box ਵਿੱਚ width content ਦੀ; border-box ਵਿੱਚ width content+padding+border ਦੀ outer boundary ਨੂੰ represent ਕਰਦੀ ਹੈ.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729235686",
          "questionId": "web-tech-q-1786729235686",
          "question": "Explain all five CSS positioning modes: static, relative, absolute, fixed and sticky. Compare their effect on normal document flow and give real-life examples.",
          "unit": "Unit III",
          "type": "8-mark",
          "solution": "Model Answer:\\nStatic: default normal flow. Relative: remains in flow and can be visually offset. Absolute: removed from normal flow and positioned relative to its containing block, commonly a positioned ancestor. Fixed: positioned relative to viewport and normally stays while scrolling. Sticky: participates in normal flow and becomes stuck after a threshold within its scroll container. Give diagram and examples: relative badge adjustment, absolute notification badge, fixed support button, sticky navigation.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729238999",
          "questionId": "web-tech-q-1786729238999",
          "question": "Explain Flexbox and responsive web design. Discuss main/cross axes, important Flexbox properties, media queries and mobile-first design with a practical layout example.",
          "unit": "Unit III",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine Flexbox as a one-dimensional layout model. Explain main axis and cross axis. Container properties: display:flex, flex-direction, justify-content, align-items, flex-wrap, gap. Item properties: flex-grow, flex-shrink, flex-basis, flex, align-self, order. Then define responsive design and mobile-first approach. Show base mobile layout and media query for larger screens. Example: college dashboard cards that stack on mobile and become multiple columns on desktop. Explain why responsive design improves usability across devices.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729241926",
          "questionId": "web-tech-q-1786729241926",
          "question": "What is the CSS box model? Name its four major components.",
          "unit": "Unit III",
          "type": "2-mark",
          "solution": "The CSS box model describes the rectangular area occupied by an element. Its four major components are content, padding, border and margin.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729245795",
          "questionId": "web-tech-q-1786729245795",
          "question": "Differentiate margin and padding.",
          "unit": "Unit III",
          "type": "2-mark",
          "solution": "Padding is space inside an element between its content and border. Margin is space outside the border that separates the element from neighbouring elements.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729250265",
          "questionId": "web-tech-q-1786729250265",
          "question": "What is Flexbox? Name four container properties.",
          "unit": "Unit III",
          "type": "2-mark",
          "solution": "Flexbox is a one-dimensional CSS layout system for arranging and distributing items along main and cross axes. Four container properties are flex-direction, justify-content, align-items and flex-wrap; gap is also commonly used.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729252513",
          "questionId": "web-tech-q-1786729252513",
          "question": "What is responsive web design and what is mobile-first design?",
          "unit": "Unit III",
          "type": "2-mark",
          "solution": "Responsive web design adapts presentation and layout to different screen sizes and environments. Mobile-first design starts with the small-screen experience as the base and progressively enhances the layout for larger screens, often using min-width media queries.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729256350",
          "questionId": "web-tech-q-1786729256350",
          "question": "Explain JavaScript variables, data types and operators. Compare var, let and const and discuss strict equality with examples.",
          "unit": "Unit IV",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine JavaScript and its role in browser applications. Explain var as function-scoped and redeclarable/reassignable; let as block-scoped and reassignable; const as block-scoped with non-reassignable binding. Discuss primitive values such as string, number, bigint, boolean, undefined, symbol and null, plus objects. Explain arithmetic, comparison, logical and assignment operators. Show 5 == '5' versus 5 === '5'. Conclude with practical recommendation to use let/const appropriately and strict equality when type-sensitive comparison is intended.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729258913",
          "questionId": "web-tech-q-1786729258913",
          "question": "Explain JavaScript functions in detail. Differentiate function declarations, function expressions and arrow functions with syntax, examples and important behavioural differences.",
          "unit": "Unit IV",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine a function as reusable logic. Function declaration: function add(a,b){return a+b;} Function expression: const add=function(a,b){return a+b;}; Arrow: const add=(a,b)=>a+b;. Explain parameters/arguments and return. Discuss that declarations have different hoisting behaviour from expressions. Arrow functions have lexical this and do not have their own arguments object/prototype semantics. Use cases: reusable calculations, event handlers and data transformations.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729261602",
          "questionId": "web-tech-q-1786729261602",
          "question": "What is the DOM? Explain DOM tree traversal, element selection and dynamic modification of text, attributes and classes with a complete example.",
          "unit": "Unit IV",
          "type": "8-mark",
          "solution": "Model Answer:\\nDOM is the browser's object/tree representation of an HTML document. Draw Document -> html -> head/body -> elements. Explain getElementById, querySelector and querySelectorAll. Show textContent for text, setAttribute for attributes and classList add/remove/toggle for classes. Complete example: select a heading and button, register click, change heading text and add a class. Explain that DOM manipulation changes the document model and the browser updates the rendered page.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729264942",
          "questionId": "web-tech-q-1786729264942",
          "question": "Explain the JavaScript event handling lifecycle: capturing, target and bubbling. Demonstrate addEventListener and event delegation with a practical example.",
          "unit": "Unit IV",
          "type": "8-mark",
          "solution": "Model Answer:\\nDefine event as a signal of an action such as click or submit. Explain event propagation: capturing travels from ancestor toward target; target phase is the actual event target; bubbling travels from target toward ancestors. Show diagram Window/ancestor -> capture -> target -> bubble -> ancestor. Demonstrate button.addEventListener('click', handler). For delegation, attach one listener to a parent list and use event.target/closest to identify the clicked child. Explain benefits for dynamic lists and reduced listener count.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729268440",
          "questionId": "web-tech-q-1786729268440",
          "question": "Explain form validation using JavaScript. Build the logic for validating a registration form and explain why validation must also be performed on the server.",
          "unit": "Unit IV",
          "type": "8-mark",
          "solution": "Model Answer:\\n1. Define validation and its purpose. 2. Use HTML constraints such as required and type=email for basic checks. 3. Select form/input elements through DOM APIs. 4. Listen for submit using addEventListener. 5. Check custom rules such as empty values, length or application-specific requirements. 6. Use event.preventDefault() when the input is invalid. 7. Show a user-friendly error. 8. Explain server-side validation because client code can be bypassed and attackers can send crafted requests. Diagram: user -> browser validation -> HTTP request -> server validation -> application/database. Punjabi: client validation UX ਲਈ, server validation trust/security ਲਈ.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729271614",
          "questionId": "web-tech-q-1786729271614",
          "question": "What is the DOM?",
          "unit": "Unit IV",
          "type": "2-mark",
          "solution": "The Document Object Model is the browser's in-memory object/tree representation of an HTML document. JavaScript can use it to inspect and modify document structure, content and attributes.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729274074",
          "questionId": "web-tech-q-1786729274074",
          "question": "Differentiate var, let and const.",
          "unit": "Unit IV",
          "type": "2-mark",
          "solution": "var is function-scoped and can be redeclared/reassigned. let is block-scoped and can be reassigned but not redeclared in the same scope. const is block-scoped and its binding cannot be reassigned after initialization.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729278135",
          "questionId": "web-tech-q-1786729278135",
          "question": "What is event bubbling?",
          "unit": "Unit IV",
          "type": "2-mark",
          "solution": "Event bubbling is the phase in which an event propagates from the target element upward through its ancestors. It allows parent elements to observe events that originated in descendants.",
          "code": "",
          "formula": ""
        },
        {
          "id": "sol-web-tech-q-1786729281385",
          "questionId": "web-tech-q-1786729281385",
          "question": "Differentiate == and === in JavaScript.",
          "unit": "Unit IV",
          "type": "2-mark",
          "solution": "== performs equality comparison with type coercion when necessary. === is strict equality and does not coerce the operands to the same type. Example: 5 == '5' is true, while 5 === '5' is false.",
          "code": "",
          "formula": ""
        }
      ]
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
