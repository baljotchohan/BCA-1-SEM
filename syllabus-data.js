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
          "title": "Unit I — Internet Foundations, Web Architecture, DNS, HTTP/HTTPS & Hosting (Complete Master Notes)",
          "readTime": "35 min read",
          "author": "Baljot Chohan",
          "content": "# Unit I — Internet Foundations, Web Architecture, DNS, HTTP/HTTPS & Hosting\n\n> **Exam + Concept Master Note** — written from the live BCA Web Technologies curriculum and cross-checked against Panjab University’s published BCA syllabus/exam structure. The official PU syllabus states that the theory paper is 3 hours, has four units, and uses two questions from each unit plus one compulsory short-answer question covering the whole syllabus. citeturn1view0\n\n## 1. Internet vs Web — first principle\n\n**Internet** is the global network infrastructure that connects computers and networks. **World Wide Web (WWW)** is a service that runs on the Internet and uses technologies such as URLs, HTTP/HTTPS, browsers and web servers.\n\n**Punjabi:** Internet ਇੱਕ ਵੱਡਾ global network ਹੈ, ਜਦਕਿ WWW ਉਸ network ਉੱਤੇ ਚੱਲਣ ਵਾਲੀ web service ਹੈ। ਹਰ website Internet ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੀ ਹੈ, ਪਰ Internet ਸਿਰਫ਼ websites ਤੱਕ ਸੀਮਿਤ ਨਹੀਂ।\n\n### Real-life example\nWhen you open `https://example.com`, your phone uses the Internet to reach a server. The Web is the application layer experience through which the browser requests and displays the site's resources.\n\n---\n\n## 2. History and evolution\n\n### ARPANET\nARPANET (Advanced Research Projects Agency Network) was an early packet-switched research network and an important predecessor of today's Internet.\n\n### TCP/IP\nTCP/IP became the fundamental networking protocol suite that allowed different networks and computers to communicate using common rules. The historical transition to TCP/IP is a key milestone in Internet evolution.\n\n### WWW\nTim Berners-Lee proposed the World Wide Web at CERN. The Web combined hypertext documents, URLs and HTTP so users could navigate linked information.\n\n### W3C\nThe World Wide Web Consortium (W3C) develops and maintains Web standards.\n\n### WAI-ARIA\nWAI-ARIA (Web Accessibility Initiative — Accessible Rich Internet Applications) provides semantics that help assistive technologies understand dynamic web interfaces. It should complement, not replace, good semantic HTML.\n\n**Punjabi:** W3C web ਦੇ standards ਬਣਾਉਣ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਹੈ। WAI-ARIA accessibility ਲਈ ਹੈ ਤਾਂ ਜੋ screen readers ਵਰਗੀਆਂ technologies web interface ਨੂੰ ਵਧੀਆ ਸਮਝ ਸਕਣ।\n\n---\n\n## 3. Client–Server Architecture\n\nA **client** requests a service/resource. A **server** receives the request, processes it and sends a response.\n\n```text\n+-------------+        Request         +----------------+\n| Browser     | ---------------------> | Web Server     |\n| (Client)    | <--------------------- | (Server)       |\n+-------------+        Response        +----------------+\n       |                                      |\n       |                                      +--> Files / App / DB\n       +--> Renders HTML/CSS/JS\n```\n\n### Example\nOpening an online shopping product page:\n1. Browser requests the page.\n2. Server runs application logic.\n3. Server may query a database.\n4. Server returns HTML/data.\n5. Browser renders it.\n\n### 2-Tier architecture\nUsually:\n\n```text\nClient  <------>  Server / Database\n```\n\nThe client directly communicates with the data/service layer.\n\n### 3-Tier architecture\n\n```text\n+-------------+\n| Presentation|\n| Browser     |\n+------+------+ \n       |\n       v\n+-------------+\n| Application |\n| / Business  |\n| Logic       |\n+------+------+ \n       |\n       v\n+-------------+\n| Data Layer  |\n| Database    |\n+-------------+\n```\n\n**Presentation tier** = user interface.\n**Application tier** = business rules/API.\n**Data tier** = database/storage.\n\n**Why 3-tier?** Better separation, maintainability, security and scalability.\n\n**Punjabi:** 2-tier ਵਿੱਚ client ਅਤੇ server/data layer directly ਗੱਲ ਕਰਦੇ ਹਨ। 3-tier ਵਿੱਚ UI, business logic ਅਤੇ database ਵੱਖਰੇ layers ਵਿੱਚ ਹੁੰਦੇ ਹਨ। Modern applications ਲਈ 3-tier architecture ਜ਼ਿਆਦਾ scalable ਹੁੰਦੀ ਹੈ।\n\n---\n\n## 4. Browser subsystems\n\nA browser is not simply a \"page viewer\". Important components include:\n\n- **User interface** — address bar, tabs, buttons.\n- **Browser engine** — coordinates UI and rendering.\n- **Rendering engine** — parses HTML/CSS and creates the visual page.\n- **JavaScript engine** — executes JavaScript.\n- **Networking stack** — DNS, TCP/TLS/HTTP communication.\n- **Storage** — cookies, cache, local/session storage and other site data.\n- **Security subsystem** — origin/security policies, certificates and sandboxing mechanisms.\n\n```text\nURL\n |\n v\nNetworking ---> DNS ---> Connection ---> HTTP Response\n |\n v\nHTML/CSS Parser ---> DOM/CSSOM ---> Render Tree ---> Layout ---> Paint\n |\n +--> JavaScript Engine ---> DOM/CSS changes\n```\n\n**Punjabi:** Browser ਪਹਿਲਾਂ network ਤੋਂ data ਲਿਆਉਂਦਾ ਹੈ, ਫਿਰ HTML ਨੂੰ DOM ਅਤੇ CSS ਨੂੰ styling information ਵਿੱਚ parse ਕਰਦਾ ਹੈ, JavaScript ਚਲਾਉਂਦਾ ਹੈ ਅਤੇ ਆਖ਼ਿਰ page ਨੂੰ screen ਉੱਤੇ paint ਕਰਦਾ ਹੈ।\n\n---\n\n## 5. Web-server socket lifecycle\n\nAt a simplified TCP level:\n\n```text\nServer: socket -> bind -> listen -> accept\n                         ^\n                         |\nClient: socket -> connect-+\n                         |\n                         v\n                  request/response\n                         |\n                       close\n```\n\n### Meaning\n- **socket()**: creates communication endpoint.\n- **bind()**: associates server socket with IP/port.\n- **listen()**: waits for incoming connections.\n- **accept()**: accepts a connection.\n- **connect()**: client attempts connection.\n- **send/receive**: exchange data.\n- **close()**: terminate socket.\n\nA web server normally listens on a TCP port such as 80 for HTTP or 443 for HTTPS, although the application can use other ports.\n\n---\n\n## 6. URL structure\n\nA URL identifies the location/access method of a resource.\n\n```text\nhttps://www.example.com:443/products/item?id=10#reviews\n  |        |          |        |          |       |\n scheme    host      port     path       query   fragment\n```\n\n### Components\n- **Scheme**: `https`\n- **Host/domain**: `www.example.com`\n- **Port**: `443`\n- **Path**: `/products/item`\n- **Query**: `?id=10`\n- **Fragment**: `#reviews`\n\n**Absolute URL:** complete address, e.g. `https://example.com/about`.\n**Relative URL:** resolved relative to current document, e.g. `/about` or `images/logo.png`.\n\n---\n\n## 7. DNS — how a domain becomes an IP address\n\nDNS (Domain Name System) translates human-friendly names into IP addresses or other DNS data.\n\n### 6-step conceptual resolution pipeline\n\n```text\nBrowser cache\n    |\n    v\nOS / local resolver cache\n    |\n    v\nRecursive DNS Resolver\n    |\n    v\nRoot DNS server\n    |\n    v\nTLD server (.com)\n    |\n    v\nAuthoritative DNS server\n    |\n    v\nIP address / DNS record\n```\n\nA real resolver may use cached records and therefore skip upstream steps.\n\n### Example\nYou type `www.example.com`.\nThe system needs an IP address before it can establish the network connection. The recursive resolver finds the authoritative answer or returns a cached answer.\n\n### Why DNS matters\nWithout DNS, users would have to remember IP addresses instead of names.\n\n**Punjabi:** DNS Internet ਦੀ phonebook ਵਰਗਾ ਹੈ। ਤੁਸੀਂ ਨਾਮ ਦਿੰਦੇ ਹੋ, ਜਿਵੇਂ `google.com`; DNS ਉਸ ਨਾਮ ਨਾਲ ਜੁੜਿਆ IP address ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।\n\n---\n\n## 8. HTTP\n\nHTTP (Hypertext Transfer Protocol) is an application-layer protocol used for web communication.\n\n### Request\n```http\nGET /index.html HTTP/1.1\nHost: example.com\nAccept: text/html\n```\n\n### Response\n```http\nHTTP/1.1 200 OK\nContent-Type: text/html\n\n<html>...</html>\n```\n\n### Important methods\n- `GET` — retrieve representation/resource.\n- `POST` — submit data/create/process something.\n- `PUT` — replace a resource representation.\n- `PATCH` — partially modify.\n- `DELETE` — request deletion.\n\n### Status-code families\n- **1xx** informational\n- **2xx** success (`200 OK`, `201 Created`)\n- **3xx** redirection (`301`, `302`, `304`)\n- **4xx** client/request errors (`400`, `401`, `403`, `404`)\n- **5xx** server errors (`500`, `502`, `503`)\n\n---\n\n## 9. HTTPS and TLS handshake\n\nHTTPS is HTTP protected by TLS.\n\nConceptually:\n\n```text\nClient                         Server\n  |                              |\n  | ---- ClientHello ----------> |\n  | <--- ServerHello + cert ---- |\n  | ---- key agreement --------> |\n  | <--- handshake confirmation |\n  |                              |\n  | ===== encrypted HTTP ======> |\n```\n\nModern TLS uses authenticated key exchange and symmetric encryption for application data. The certificate helps authenticate the server identity through the certificate trust chain.\n\n### What HTTPS provides\n- **Confidentiality** — outsiders should not read protected traffic.\n- **Integrity** — tampering can be detected.\n- **Authentication** — certificate validation helps establish server identity.\n\n**Punjabi:** HTTPS ਦਾ ਮਤਲਬ secure HTTP ਹੈ। TLS connection ਨੂੰ encrypt ਅਤੇ authenticate ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। Password, payment ਅਤੇ login data ਲਈ ਇਹ ਬਹੁਤ ਜ਼ਰੂਰੀ ਹੈ।\n\n---\n\n## 10. MIME types\n\nMIME (Multipurpose Internet Mail Extensions) types describe the media type of content.\n\nExamples:\n\n```text\ntext/html\ntext/css\ntext/javascript\nimage/png\nimage/jpeg\napplication/json\napplication/pdf\n```\n\nThe HTTP `Content-Type` header tells the browser how the response should be interpreted.\n\n---\n\n## 11. Static vs Dynamic Web Architecture\n\n### Static\nServer returns files that are already stored.\n\n```text\nBrowser ---> Web Server ---> HTML/CSS/Images\n```\n\nFast, simple and easy to cache.\n\n### Dynamic\nThe server/application generates or retrieves content at request time.\n\n```text\nBrowser -> Web Server -> Application -> Database\n                         |\n                         v\n                    Generated response\n```\n\nExamples: login dashboard, shopping cart, social media feed.\n\n**Punjabi:** Static website ਵਿੱਚ content mostly predefined files ਹੁੰਦਾ ਹੈ। Dynamic website user/request/database ਦੇ ਅਨੁਸਾਰ content generate ਕਰਦੀ ਹੈ।\n\n---\n\n## 12. Web hosting paradigms\n\nHosting means making a website/application available through network infrastructure.\n\n### Common paradigms\n- **Shared hosting** — many sites share one server environment.\n- **VPS** — virtual private server with isolated resources.\n- **Dedicated server** — physical server dedicated to one customer/application.\n- **Cloud hosting** — workloads use scalable distributed infrastructure.\n- **Serverless** — developer deploys functions/services while provider manages much of the server infrastructure.\n- **Static hosting/CDN** — excellent for HTML/CSS/JS/assets.\n\n### Real-life analogy\n- Shared hosting = renting one room in a large building.\n- VPS = your own apartment inside a building.\n- Dedicated = your own house.\n- Cloud = dynamically using capacity from a large managed city/infrastructure.\n\n---\n\n## 13. Full website journey — remember this diagram\n\n```text\nUser enters URL\n      |\n      v\nBrowser parses URL\n      |\n      v\nDNS resolution\n      |\n      v\nTCP connection\n      |\n      v\nTLS handshake (HTTPS)\n      |\n      v\nHTTP request\n      |\n      v\nWeb server / application\n      |\n      +----> Database / APIs / files\n      |\n      v\nHTTP response\n      |\n      v\nBrowser parses HTML/CSS/JS\n      |\n      v\nDOM + CSSOM + JS execution\n      |\n      v\nLayout -> Paint -> Screen\n```\n\n### Exam-ready conclusion\nThe Web is a layered system. DNS discovers where a domain points; networking establishes communication; HTTP defines application requests/responses; TLS protects HTTPS; servers provide resources/application logic; and browsers interpret those resources into an interactive interface.\n\n### Quick revision — Unit I\n**Internet** = global network infrastructure.\n**WWW** = web service on Internet.\n**URL** = resource address.\n**DNS** = name-to-record resolution system.\n**HTTP** = web application protocol.\n**HTTPS** = HTTP over TLS.\n**MIME** = content/media type declaration.\n**Static** = pre-existing resources.\n**Dynamic** = generated/request-dependent resources.\n**2-tier** = client + server/data.\n**3-tier** = presentation + application + data.\n\n### Punjabi one-minute revision\nInternet network ਹੈ; Web Internet ਉੱਤੇ service ਹੈ। Browser client ਵਾਂਗ request ਕਰਦਾ ਹੈ ਅਤੇ server response ਦਿੰਦਾ ਹੈ। DNS domain name ਤੋਂ IP/resource information ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ। HTTP request-response protocol ਹੈ ਅਤੇ HTTPS TLS ਰਾਹੀਂ secure ਹੈ। Static site fixed files ਦਿੰਦੀ ਹੈ, dynamic site runtime ਉੱਤੇ data/logic ਨਾਲ response ਬਣਾਉਂਦੀ ਹੈ।"
        },
        {
          "unit": "Unit II",
          "title": "Unit II — HTML5, Semantic HTML, Hyperlinks, Lists, Tables, Forms & Validation (Complete Master Notes)",
          "readTime": "40 min read",
          "author": "Baljot Chohan",
          "content": "# Unit II — HTML5 Fundamentals & Semantic Structure\n\n## 1. What is HTML?\n\nHTML (HyperText Markup Language) is the markup language used to structure content on the Web. It tells the browser what a piece of content **is**, rather than primarily describing how it should look.\n\n**Punjabi:** HTML webpage ਦਾ skeleton/structure ਬਣਾਉਂਦੀ ਹੈ। CSS ਉਸ skeleton ਨੂੰ design ਕਰਦੀ ਹੈ ਅਤੇ JavaScript behaviour/interactivity ਜੋੜਦੀ ਹੈ।\n\n```text\nHTML       -> Structure\nCSS        -> Presentation\nJavaScript -> Behaviour\n```\n\n---\n\n## 2. Anatomy of an HTML document\n\n```html\n<!doctype html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>My Web Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>\n```\n\n### Important parts\n- `<!doctype html>` declares HTML standards mode.\n- `<html>` is the root element.\n- `<head>` contains metadata/resources.\n- `<body>` contains visible document content.\n- `<meta charset=\"UTF-8\">` defines character encoding.\n- viewport metadata helps responsive pages behave correctly on mobile.\n- `<title>` defines the document title shown by the browser/tab.\n\n### Standards mode\nThe doctype helps browsers render the document using modern standards-oriented behaviour instead of legacy quirks behaviour.\n\n---\n\n## 3. Elements, tags and attributes\n\nA **tag** is markup such as `<p>` or `</p>`.\nAn **element** includes the complete structure, e.g. `<p>Hello</p>`.\nAn **attribute** supplies additional information.\n\n```html\n<a href=\"https://example.com\" target=\"_blank\">Visit</a>\n```\n\nHere `href` and `target` are attributes.\n\n**Punjabi:** Tag markup ਦਾ symbol ਹੈ; element complete HTML unit ਹੈ; attribute element ਬਾਰੇ extra information ਦਿੰਦਾ ਹੈ।\n\n---\n\n## 4. Text formatting and content structure\n\nCommon structural elements:\n\n```html\n<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<p>Paragraph text.</p>\n<strong>Important</strong>\n<em>Emphasized</em>\n<br>\n<hr>\n```\n\nPrefer semantic elements such as `<strong>` and `<em>` when meaning matters instead of using styling-only tags.\n\n### Heading hierarchy\nUse headings in logical order:\n\n```text\nH1  Page/topic title\n |\n +-- H2  Major section\n |    +-- H3 Subsection\n |\n +-- H2  Another section\n```\n\nThis improves readability, accessibility and document structure.\n\n---\n\n## 5. Hyperlinks\n\nThe anchor element creates links.\n\n```html\n<a href=\"https://example.com\">External site</a>\n<a href=\"/about.html\">Relative page</a>\n<a href=\"#contact\">Jump to contact</a>\n```\n\n### Absolute vs relative\n**Absolute:** includes the full destination, e.g. `https://example.com/about`.\n**Relative:** interpreted relative to the current site/document, e.g. `/about` or `images/logo.png`.\n\n### Security with new tabs\nWhen using an external link with a new browsing context, modern best practice is:\n\n```html\n<a href=\"https://example.com\" target=\"_blank\" rel=\"noopener noreferrer\">\n  Open site\n</a>\n```\n\n`noopener` prevents the opened page from controlling the opener through `window.opener`; `noreferrer` also controls referrer information.\n\n---\n\n## 6. Nested lists\n\n### Unordered list\n```html\n<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>\n```\n\n### Ordered list\n```html\n<ol>\n  <li>Open browser</li>\n  <li>Enter URL</li>\n  <li>Press Enter</li>\n</ol>\n```\n\n### Nested list\n```html\n<ul>\n  <li>Frontend\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n</ul>\n```\n\n**Real-life example:** An e-commerce menu may have Electronics → Mobiles → Android/iPhone.\n\n---\n\n## 7. Tables\n\nTables represent tabular relationships between data.\n\n```html\n<table>\n  <caption>Student Marks</caption>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Marks</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Baljot</td>\n      <td>92</td>\n    </tr>\n  </tbody>\n</table>\n```\n\n### Important concepts\n- `<table>` — table container\n- `<caption>` — table title\n- `<tr>` — row\n- `<th>` — header cell\n- `<td>` — data cell\n- `rowspan` — cell spans multiple rows\n- `colspan` — cell spans multiple columns\n\n```text\n+-----------+----------+----------+\n|           | Semester | Semester |\n| Name      |    1     |    2     |\n+-----------+----------+----------+\n| A         |    80    |    88     |\n+-----------+----------+----------+\n```\n\nUse tables for data, not for page layout.\n\n---\n\n## 8. Semantic HTML5\n\nSemantic HTML uses elements whose names communicate meaning.\n\n```html\n<header>Site header</header>\n<nav>Navigation</nav>\n<main>\n  <article>\n    <header>Article title</header>\n    <section>Main content</section>\n  </article>\n  <aside>Related information</aside>\n</main>\n<footer>Copyright</footer>\n```\n\n### Structural diagram\n\n```text\nHTML\n |\n +-- HEADER\n |\n +-- NAV\n |\n +-- MAIN\n |    |\n |    +-- ARTICLE\n |    |     +-- SECTION\n |    |\n |    +-- ASIDE\n |\n +-- FOOTER\n```\n\n### Why semantics matter\n- Accessibility\n- SEO and document understanding\n- Maintainability\n- Better developer communication\n- Clearer DOM structure\n\n**Punjabi:** Semantic HTML element ਦਾ ਨਾਮ ਹੀ ਉਸਦਾ purpose ਦੱਸਦਾ ਹੈ। `<nav>` navigation ਲਈ, `<article>` independent content ਲਈ ਅਤੇ `<footer>` page/section ਦੇ footer ਲਈ ਹੈ।\n\n---\n\n## 9. Accessible landmarks\n\nAssistive technologies can use semantic landmarks to navigate pages efficiently. Prefer native semantic HTML first.\n\nExamples:\n- `<header>` — banner/header region depending on context\n- `<nav>` — navigation\n- `<main>` — primary content\n- `<aside>` — complementary content\n- `<footer>` — footer/content information\n\nARIA can add semantics when native HTML cannot express a needed role, but unnecessary ARIA can create accessibility problems.\n\n---\n\n## 10. HTML forms — architecture\n\nForms collect user input and submit it to a server or application.\n\n```text\nUser\n |\n v\n+------------------+\n| HTML Form        |\n| name: ______     |\n| email: _____     |\n| password: ____   |\n| [ Submit ]       |\n+--------+---------+\n         |\n         v\n   Browser validation\n         |\n         v\n    HTTP request\n         |\n         v\n     Server/API\n```\n\nExample:\n\n```html\n<form action=\"/register\" method=\"post\">\n  <label for=\"name\">Name</label>\n  <input id=\"name\" name=\"name\" type=\"text\" required>\n\n  <label for=\"email\">Email</label>\n  <input id=\"email\" name=\"email\" type=\"email\" required>\n\n  <button type=\"submit\">Register</button>\n</form>\n```\n\n### Important form attributes\n- `action` — destination for submission.\n- `method` — HTTP method, commonly GET or POST.\n- `name` — key used when form data is submitted.\n- `required` — input cannot be empty under constraint validation.\n- `autocomplete` — hints browser autofill behaviour.\n- `novalidate` — disables browser constraint validation for the form.\n\n---\n\n## 11. HTML5 input types\n\nImportant types include:\n\n```html\n<input type=\"text\">\n<input type=\"email\">\n<input type=\"password\">\n<input type=\"number\">\n<input type=\"date\">\n<input type=\"url\">\n<input type=\"tel\">\n<input type=\"checkbox\">\n<input type=\"radio\">\n```\n\nOther controls:\n\n```html\n<textarea name=\"message\"></textarea>\n<select name=\"city\">\n  <option value=\"phagwara\">Phagwara</option>\n  <option value=\"chandigarh\">Chandigarh</option>\n</select>\n```\n\n### Radio vs checkbox\n- **Radio:** usually one selection from a group.\n- **Checkbox:** zero, one or multiple independent choices.\n\n---\n\n## 12. Client-side validation\n\nBrowser constraint validation can catch obvious input problems before submission.\n\n```html\n<input type=\"email\" required>\n<input type=\"number\" min=\"1\" max=\"100\">\n<input type=\"text\" minlength=\"3\" maxlength=\"30\">\n```\n\n### Critical security principle\nClient-side validation is for **user experience**, not trust. A malicious client can bypass browser validation and send a crafted HTTP request. The server must validate and authorize data again.\n\n**Punjabi:** Browser validation user ਨੂੰ fast feedback ਦਿੰਦੀ ਹੈ, ਪਰ security ਲਈ server-side validation ਲਾਜ਼ਮੀ ਹੈ। User browser ਨੂੰ control ਕਰਦਾ ਹੈ, ਇਸ ਲਈ server ਨੂੰ client ਉੱਤੇ blindly trust ਨਹੀਂ ਕਰਨਾ ਚਾਹੀਦਾ।\n\n---\n\n## 13. Real-life form example — college registration\n\nSuppose a college registration page asks:\n\n```text\nName       -> text + required\nEmail      -> email + required\nSemester   -> select\nSkills     -> checkboxes\nGender     -> radio group\nPassword   -> password + required\nAddress    -> textarea\n             |\n             v\n       Browser validation\n             |\n             v\n        POST /register\n             |\n             v\n     Server validates again\n             |\n             v\n          Database\n```\n\nThis single example connects HTML structure, semantic labels, input types, validation, HTTP and server-side processing.\n\n---\n\n## 14. Common exam distinctions\n\n### HTML vs CSS\nHTML = structure/meaning.\nCSS = appearance/layout.\n\n### Semantic vs non-semantic containers\nSemantic: `<article>`, `<nav>`, `<section>`.\nGeneric containers: `<div>`, `<span>`.\n\n### GET vs POST for forms\nGET commonly places form data in the URL query string and is useful for retrieval/search-like operations. POST sends data in the request body and is commonly used for state-changing submissions. Neither should be treated as a security mechanism by itself.\n\n### Absolute vs relative URL\nAbsolute = complete address.\nRelative = resolved against a base/current document.\n\n### Radio vs checkbox\nRadio = choose one from a group.\nCheckbox = independent/multiple choices.\n\n---\n\n## 15. Unit II exam checklist\n\nYou should be able to:\n1. Draw and explain HTML document anatomy.\n2. Explain elements, tags and attributes.\n3. Write HTML using headings, paragraphs and text semantics.\n4. Create absolute, relative and internal links.\n5. Explain `noopener noreferrer`.\n6. Create nested lists.\n7. Design tables using `rowspan` and `colspan`.\n8. Explain semantic HTML5 and landmarks.\n9. Create a complete HTML form.\n10. Explain input types and validation.\n11. Distinguish client-side and server-side validation.\n\n### Punjabi quick revision\nHTML webpage ਦੀ structure ਹੈ। Semantic tags meaning ਦੱਸਦੇ ਹਨ। Links pages ਨੂੰ connect ਕਰਦੇ ਹਨ। Lists ਅਤੇ tables information organize ਕਰਦੇ ਹਨ। Forms user data collect ਕਰਦੇ ਹਨ। HTML5 validation basic errors ਪਹਿਲਾਂ ਹੀ ਦਿਖਾ ਸਕਦੀ ਹੈ, ਪਰ final validation server ਉੱਤੇ ਹੋਣੀ ਚਾਹੀਦੀ ਹੈ।"
        },
        {
          "unit": "Unit III",
          "title": "Unit III — CSS3 Cascade, Specificity, Box Model, Positioning, Flexbox & Responsive Design (Complete Master Notes)",
          "readTime": "40 min read",
          "author": "Baljot Chohan",
          "content": "# Unit III — CSS3 Styling & Responsive Design\n\n## 1. What is CSS?\n\nCSS (Cascading Style Sheets) controls presentation and layout of HTML documents.\n\n```text\nHTML  -> meaning + structure\n  |\n  +--> CSS -> visual presentation + layout\n  |\n  +--> JS  -> behaviour + interaction\n```\n\n**Punjabi:** HTML ਘਰ ਦਾ structure ਹੈ; CSS ਉਸਦੀ paint, spacing, size ਅਤੇ layout ਹੈ।\n\n---\n\n## 2. Three ways to include CSS\n\n### Inline\n```html\n<p style=\"font-weight: bold;\">Hello</p>\n```\nUseful for tiny one-off cases, but difficult to maintain at scale.\n\n### Internal\n```html\n<style>\n  p { font-weight: bold; }\n</style>\n```\n\n### External\n```html\n<link rel=\"stylesheet\" href=\"styles.css\">\n```\n\nExternal CSS is normally preferred for reusable and maintainable websites.\n\n---\n\n## 3. CSS rule anatomy\n\n```css\n.card {\n  padding: 20px;\n  border: 1px solid black;\n}\n```\n\n```text\n.card       -> selector\npadding     -> property\n20px        -> value\nproperty:value -> declaration\n```\n\n---\n\n## 4. Cascade — why does one rule win?\n\nCSS stands for **Cascading** Style Sheets because multiple rules can apply to the same element. The browser resolves conflicts using factors such as origin/importance, cascade layers, specificity and source order.\n\n### Simplified mental model\n\n```text\nCandidate declarations\n        |\n        v\nOrigin / importance / layers\n        |\n        v\nSpecificity\n        |\n        v\nSource order\n        |\n        v\nWinning declaration\n```\n\nDo not memorize \"last rule always wins\" — that is incomplete. The winning declaration depends on the cascade.\n\n---\n\n## 5. Specificity\n\nSpecificity estimates how specifically a selector targets an element.\n\nConceptual ordering:\n\n```text\nInline style\n   > ID selector\n   > Class / attribute / pseudo-class\n   > Element / pseudo-element\n```\n\nExample:\n\n```css\np { color: blue; }\n.note { color: green; }\n#warning { color: red; }\n```\n\n```html\n<p id=\"warning\" class=\"note\">Text</p>\n```\n\nThe ID selector has greater specificity than the class and element selector.\n\n### Specificity tuple model\nA common teaching model counts:\n\n```text\n(a, b, c, d)\n\ninline | IDs | classes/attributes/pseudo-classes | elements/pseudo-elements\n```\n\nCompare left-to-right, not by adding arbitrary numbers. For example, `0,1,0,0` beats `0,0,10,0` in the conceptual lexicographic model because an ID column is more specific than the class column.\n\n**Punjabi:** Specificity ਇਹ decide ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਦੀ ਹੈ ਕਿ ਜਦੋਂ multiple CSS rules ਇੱਕ element ਉੱਤੇ ਲਾਗੂ ਹੋਣ ਤਾਂ ਕਿਹੜੀ rule ਦੀ priority ਜ਼ਿਆਦਾ ਹੈ।\n\n---\n\n## 6. CSS Box Model\n\nEvery normal element can be understood as a box consisting of content, padding, border and margin.\n\n```text\n+----------------------------------+\n|              MARGIN              |\n|  +----------------------------+  |\n|  |           BORDER           |  |\n|  |  +----------------------+  |  |\n|  |  |       PADDING        |  |  |\n|  |  |  +----------------+  |  |  |\n|  |  |  |    CONTENT     |  |  |  |\n|  |  |  +----------------+  |  |  |\n|  |  +----------------------+  |  |\n|  +----------------------------+  |\n+----------------------------------+\n```\n\n### Content\nActual text/image/child content area.\n\n### Padding\nSpace between content and border.\n\n### Border\nVisible boundary around padding/content.\n\n### Margin\nSpace outside the border separating neighbouring boxes.\n\n---\n\n## 7. content-box vs border-box\n\nDefault CSS box sizing is generally `content-box`.\n\n```css\n.box {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}\n```\n\nWith `content-box`, declared width refers to content, so total horizontal size becomes:\n\n**200 + 20 + 20 + 5 + 5 = 250px**\n\nWith:\n\n```css\nbox-sizing: border-box;\n```\n\nThe declared 200px includes content + padding + border, so the outer width is 200px.\n\nA common practical pattern:\n\n```css\n*, *::before, *::after {\n  box-sizing: border-box;\n}\n```\n\n**Punjabi:** `content-box` ਵਿੱਚ width content ਦੀ ਹੁੰਦੀ ਹੈ। `border-box` ਵਿੱਚ ਦਿੱਤੀ width content + padding + border ਨੂੰ include ਕਰਦੀ ਹੈ।\n\n---\n\n## 8. CSS positioning\n\n### Static\nNormal document flow. `top/right/bottom/left` do not reposition a statically positioned element.\n\n### Relative\nElement stays in normal flow but can be visually offset from its normal position.\n\n### Absolute\nElement is removed from normal flow and positioned relative to a containing block, often the nearest positioned ancestor.\n\n### Fixed\nPositioned relative to the viewport; normally stays in place while scrolling.\n\n### Sticky\nActs like normal flow until a scroll threshold is reached, then sticks within its containing scroll context.\n\n```text\nNormal flow\n   |\n   +-- relative -> offset but space remains\n   |\n   +-- absolute -> removed from normal flow\n   |\n   +-- fixed -> viewport anchored\n   |\n   +-- sticky -> flow + scroll threshold\n```\n\n### Real-life examples\n- Relative: slightly move a badge.\n- Absolute: notification badge positioned inside a card.\n- Fixed: floating support button.\n- Sticky: navigation bar that remains visible during section scrolling.\n\n---\n\n## 9. Flexbox\n\nFlexbox is a one-dimensional layout model designed to distribute items along a main axis and cross axis.\n\n```css\n.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n```\n\n```text\nMain axis ------------------------------>\n\n+---------------------------------------+\n| [Item A]   [Item B]      [Item C]     |\n+---------------------------------------+\n                 ^\n             cross axis\n```\n\n### Container properties\n- `display: flex`\n- `flex-direction`\n- `justify-content`\n- `align-items`\n- `align-content`\n- `flex-wrap`\n- `gap`\n\n### Item properties\n- `flex-grow`\n- `flex-shrink`\n- `flex-basis`\n- `flex`\n- `align-self`\n- `order`\n\n### Example: centered card\n```css\n.page {\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n```\n\nThis centers content along both axes when the container has sufficient size.\n\n**Punjabi:** Flexbox ਇੱਕ row ਜਾਂ column ਦੇ items ਨੂੰ easily align, distribute ਅਤੇ resize ਕਰਨ ਲਈ ਵਰਤਿਆ ਜਾਂਦਾ ਹੈ।\n\n---\n\n## 10. Responsive Web Design\n\nResponsive design means a page adapts its layout/content presentation to different screen sizes and environments.\n\n### Mobile-first principle\nStart with a usable small-screen design, then add enhancements for larger screens.\n\n```text\nMobile base\n   |\n   +-- min-width: 768px -> tablet layout\n   |\n   +-- min-width: 1024px -> desktop enhancements\n```\n\n### Media query\n\n```css\n.card-grid {\n  display: grid;\n}\n\n@media (min-width: 768px) {\n  .card-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n```\n\nAlthough the syllabus emphasizes Flexbox, responsive design also depends on fluid sizing, appropriate images, viewport configuration and media queries.\n\n---\n\n## 11. Why responsive design matters\n\nConsider a college portal.\n\n### Desktop\n```text\n+------------------------------------------------------+\n| Logo | Home | Notes | Questions | Profile             |\n+------------------------------------------------------+\n| Sidebar |              Main content                   |\n|         |                                              |\n+------------------------------------------------------+\n```\n\n### Mobile\n```text\n+----------------------+\n| Logo            Menu |\n+----------------------+\n|                      |\n|      Main content    |\n|                      |\n+----------------------+\n```\n\nThe information remains useful while the layout changes.\n\n---\n\n## 12. Real-life debugging scenario\n\nProblem: a 320px-wide phone shows horizontal scrolling.\n\nPossible causes:\n- Fixed-width element larger than viewport.\n- Box sizing misunderstanding.\n- Large unbroken text.\n- Images wider than their container.\n- Negative/large margins.\n- Poor positioning strategy.\n\nPossible fixes:\n```css\nimg {\n  max-width: 100%;\n  height: auto;\n}\n\n* {\n  box-sizing: border-box;\n}\n```\n\nThen inspect the layout and identify the actual overflowing element rather than blindly adding `overflow-x: hidden`.\n\n---\n\n## 13. Complete CSS mental model\n\n```text\nHTML element\n     |\n     v\nCSS selectors find it\n     |\n     v\nDeclarations compete in cascade\n     |\n     v\nSpecificity + order resolve conflicts\n     |\n     v\nBox model determines dimensions\n     |\n     v\nLayout system positions it\n(Flexbox / normal flow / positioning)\n     |\n     v\nMedia queries adapt rules\n     |\n     v\nResponsive UI\n```\n\n---\n\n## 14. High-value comparisons\n\n### Margin vs padding\n**Margin:** outside border.\n**Padding:** inside border.\n\n### Relative vs absolute\n**Relative:** remains in normal flow; offset visually.\n**Absolute:** removed from normal flow; positioned against containing block.\n\n### Fixed vs sticky\n**Fixed:** viewport-oriented positioning and normally remains while scrolling.\n**Sticky:** participates in flow and sticks after a threshold within its scroll container.\n\n### Inline vs internal vs external CSS\nInline = inside element.\nInternal = `<style>` in document.\nExternal = separate stylesheet.\n\n### Flexbox vs positioning\nFlexbox is primarily a layout/distribution system. Positioning is primarily about placing an element relative to a containing context or viewport.\n\n---\n\n## 15. Exam-ready answer structure\n\nFor an 8/10-mark CSS question:\n1. Define CSS.\n2. Explain the concept.\n3. Draw a labelled diagram where appropriate.\n4. Explain each component/property.\n5. Give a short code example.\n6. Give a real-life application.\n7. Add advantages/limitations if relevant.\n8. End with a concise conclusion.\n\n### Punjabi quick revision\nCSS webpage ਦੀ styling ਅਤੇ layout control ਕ���ਦੀ ਹੈ। Cascade decide ਕਰਦੀ ਹੈ ਕਿ competing rules ਵਿੱਚ ਕਿਹੜੀ declaration ਲਾਗੂ ਹੋਵੇਗੀ। Box model ਵਿੱਚ content, padding, border ਅਤੇ margin ਹੁੰਦੇ ਹਨ। Positioning ਵਿੱਚ static, relative, absolute, fixed ਅਤੇ sticky ਮੁੱਖ modes ਹਨ। Flexbox one-dimensional layout ਲਈ ਹੈ। Responsive design ਨਾਲ website mobile ਤੋਂ desktop ਤੱਕ adapt ਕਰਦੀ ਹੈ।"
        },
        {
          "unit": "Unit IV",
          "title": "Unit IV — JavaScript Fundamentals, Functions, DOM, Events & Form Validation (Complete Master Notes)",
          "readTime": "45 min read",
          "author": "Baljot Chohan",
          "content": "# Unit IV — JavaScript Core & DOM Manipulation\n\n## 1. What is JavaScript?\n\nJavaScript is a programming language widely used in browsers to add computation, interaction and dynamic behaviour to web pages.\n\n```text\nHTML -> Structure\nCSS  -> Presentation\nJS   -> Behaviour / Logic / Interaction\n```\n\n**Punjabi:** JavaScript webpage ਨੂੰ interactive ਬਣਾਉਂਦੀ ਹੈ। Button click, form validation, menu opening, dynamic content updates ਆਦਿ JavaScript ਨਾਲ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ।\n\n---\n\n## 2. JavaScript engine basics\n\nBrowsers contain JavaScript engines that parse/compile/execute JavaScript. Different browsers use different engines.\n\nConceptually:\n\n```text\nJavaScript source\n      |\n      v\nParse / compile\n      |\n      v\nExecutable representation\n      |\n      v\nRuntime execution\n      |\n      +--> DOM APIs\n      +--> Web APIs\n      +--> Browser environment\n```\n\nThe JavaScript language itself is standardized by ECMAScript; the browser provides additional Web APIs such as DOM, timers and event interfaces.\n\n---\n\n## 3. Variables — var, let, const\n\n### `var`\nOlder function-scoped declaration. It can be redeclared and reassigned.\n\n### `let`\nBlock-scoped and reassignable.\n\n### `const`\nBlock-scoped and cannot be reassigned after initialization. Objects declared with `const` can still have their internal properties mutated.\n\n```js\nlet score = 90;\nscore = 95;\n\nconst name = \"Baljot\";\n// name = \"Another\"; // TypeError\n```\n\n### Scope diagram\n\n```text\nGlobal scope\n |\n +-- function scope\n      |\n      +-- block scope { let / const }\n```\n\n**Exam point:** `let` and `const` are block scoped; `var` is function scoped.\n\n---\n\n## 4. Data types\n\nJavaScript has primitive and object values.\n\nCommon primitive types:\n- string\n- number\n- bigint\n- boolean\n- undefined\n- symbol\n- null (historically represented as an object by `typeof`, but conceptually a primitive null value)\n\nObjects include arrays, functions and ordinary objects.\n\n```js\nlet name = \"Baljot\";       // string\nlet age = 19;              // number\nlet active = true;         // boolean\nlet value;                 // undefined\nlet nothing = null;        // null\nlet skills = [\"HTML\", \"CSS\"]; // object/array\n```\n\n### `typeof`\n```js\ntypeof \"hello\"; // \"string\"\ntypeof 42;      // \"number\"\ntypeof true;    // \"boolean\"\n```\n\n---\n\n## 5. Operators\n\n### Arithmetic\n`+ - * / % **`\n\n### Comparison\n`< > <= >= == != === !==`\n\n### Logical\n`&& || !`\n\n### Assignment\n`= += -= *= /=`\n\n### Important: `==` vs `===`\n`==` permits type coercion; `===` checks strict equality without that coercive conversion.\n\n```js\n5 == \"5\";   // true\n5 === \"5\";  // false\n```\n\nFor predictable application code, strict equality is generally preferred when appropriate.\n\n---\n\n## 6. Control structures\n\n### if-else\n```js\nif (marks >= 40) {\n  result = \"Pass\";\n} else {\n  result = \"Fail\";\n}\n```\n\n### switch\n```js\nswitch (day) {\n  case \"Mon\":\n    message = \"Start\";\n    break;\n  case \"Fri\":\n    message = \"Weekend near\";\n    break;\n  default:\n    message = \"Normal day\";\n}\n```\n\n### Loops\n```js\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nwhile (condition) {\n  // work\n}\n```\n\n---\n\n## 7. Functions\n\nA function is a reusable block of code that can accept inputs and return an output.\n\n### Function declaration\n```js\nfunction add(a, b) {\n  return a + b;\n}\n```\n\n### Function expression\n```js\nconst add = function (a, b) {\n  return a + b;\n};\n```\n\n### Arrow function\n```js\nconst add = (a, b) => a + b;\n```\n\n### Function mental model\n\n```text\nInput arguments\n      |\n      v\n+-------------+\n|   Function  |\n|    logic    |\n+------+------+ \n       |\n       v\n    return value\n```\n\n**Punjabi:** Function code ਨੂੰ reusable ਬਣਾਉਂਦਾ ਹੈ। ਇੱਕੋ logic ਨੂੰ ਵਾਰ-ਵਾਰ ਲਿਖਣ ਦੀ ਲੋੜ ਨਹੀਂ ਪੈਂਦੀ।\n\n---\n\n## 8. DOM — the document as a tree\n\nDOM means Document Object Model. The browser represents an HTML document as a tree of nodes/objects that JavaScript can inspect and manipulate.\n\n```text\nDocument\n   |\n   +-- html\n       |\n       +-- head\n       |    +-- title\n       |\n       +-- body\n            +-- h1\n            +-- p\n            +-- button\n```\n\n### Why DOM matters\nJavaScript can:\n- find elements\n- change text\n- add/remove classes\n- change attributes\n- create/remove nodes\n- respond to user events\n\n---\n\n## 9. Selecting DOM elements\n\n### `getElementById`\n```js\nconst title = document.getElementById(\"title\");\n```\n\n### `querySelector`\n```js\nconst firstCard = document.querySelector(\".card\");\n```\n\n### `querySelectorAll`\n```js\nconst cards = document.querySelectorAll(\".card\");\n```\n\nThe selector APIs use CSS selector syntax.\n\n---\n\n## 10. Changing content and attributes\n\n```js\nconst title = document.querySelector(\"h1\");\ntitle.textContent = \"New Title\";\n```\n\nAttributes:\n\n```js\nconst image = document.querySelector(\"img\");\nimage.setAttribute(\"alt\", \"College campus\");\n```\n\nClasses:\n\n```js\ntitle.classList.add(\"highlight\");\ntitle.classList.remove(\"old-style\");\ntitle.classList.toggle(\"active\");\n```\n\nPrefer classes and stylesheets for larger visual changes instead of scattering inline style assignments throughout JavaScript.\n\n---\n\n## 11. Event handling\n\nAn event is a signal that something happened, such as a click, input, submit, key press or pointer action.\n\n```js\nbutton.addEventListener(\"click\", function () {\n  alert(\"Clicked!\");\n});\n```\n\n### Event flow\n\n```text\nWindow / ancestor\n      |\n      v\nCAPTURING phase\n      |\n      v\nTarget element\n      |\n      v\nBUBBLING phase\n      |\n      v\nAncestors\n```\n\n### Three important concepts\n- **Capturing:** event travels down toward target.\n- **Target:** event reaches the target.\n- **Bubbling:** event travels upward through ancestors.\n\n### Example\n```html\n<div id=\"outer\">\n  <button id=\"inner\">Click</button>\n</div>\n```\n\nIf button is clicked, the event can be observed during capture and bubble phases. Event listeners can choose capture mode when appropriate.\n\n**Punjabi:** Event propagation ਨੂੰ ਇੱਕ journey ਵਾਂਗ ਯਾਦ ਕਰੋ: parent → child (capturing), actual clicked element (target), child → parent (bubbling)।\n\n---\n\n## 12. Event delegation — advanced but important\n\nInstead of attaching many listeners to many children, attach one listener to a common ancestor and inspect `event.target`.\n\n```js\nlist.addEventListener(\"click\", (event) => {\n  const item = event.target.closest(\"li\");\n  if (!item) return;\n  console.log(item.textContent);\n});\n```\n\nThis is especially useful for dynamic lists where children are added later.\n\n---\n\n## 13. Form validation with JavaScript\n\nHTML constraint validation handles common rules, while JavaScript can implement custom application logic.\n\n```html\n<form id=\"signup\">\n  <input id=\"email\" type=\"email\" required>\n  <button type=\"submit\">Create account</button>\n</form>\n```\n\n```js\nconst form = document.getElementById(\"signup\");\n\nform.addEventListener(\"submit\", (event) => {\n  const email = document.getElementById(\"email\");\n\n  if (!email.value.trim()) {\n    event.preventDefault();\n    alert(\"Email is required\");\n  }\n});\n```\n\n### Security rule\nClient-side validation can be bypassed. Never use JavaScript validation as the only security boundary. Validate again on the server.\n\n---\n\n## 14. Complete interactive example\n\n```html\n<!doctype html>\n<html>\n<body>\n  <h1 id=\"counter\">0</h1>\n  <button id=\"inc\">Increase</button>\n\n  <script>\n    let count = 0;\n    const counter = document.getElementById(\"counter\");\n    const button = document.getElementById(\"inc\");\n\n    button.addEventListener(\"click\", () => {\n      count++;\n      counter.textContent = count;\n    });\n  </script>\n</body>\n</html>\n```\n\n### What happens?\n1. Browser parses HTML.\n2. DOM nodes are created.\n3. JavaScript selects the heading and button.\n4. Event listener is registered.\n5. User clicks button.\n6. Event fires.\n7. `count` changes.\n8. DOM text changes.\n9. Browser updates the visible page.\n\nThis is the core of browser interactivity.\n\n---\n\n## 15. Common mistakes\n\n### Mistake 1: manipulating before the element exists\nPut scripts appropriately or wait until DOM content is available.\n\n### Mistake 2: confusing `textContent` with HTML\n`textContent` inserts text, not parsed HTML.\n\n### Mistake 3: trusting client validation\nAlways validate on the server.\n\n### Mistake 4: using `==` everywhere\nPrefer strict comparison when you need predictable type-sensitive equality.\n\n### Mistake 5: excessive DOM work\nRepeatedly changing the DOM in inefficient ways can hurt performance; batch updates and choose appropriate APIs for larger interfaces.\n\n---\n\n## 16. Full JavaScript mental model\n\n```text\nUser action\n    |\n    v\nBrowser creates event\n    |\n    v\nEvent propagation\n(capture -> target -> bubble)\n    |\n    v\nEvent handler executes JS\n    |\n    +--> Application logic\n    |\n    +--> DOM manipulation\n    |\n    v\nBrowser recalculates affected rendering\n    |\n    v\nUpdated interface\n```\n\n---\n\n## 17. Exam-ready comparisons\n\n### `var` vs `let` vs `const`\n- var: function scoped, redeclarable/reassignable.\n- let: block scoped, reassignable, not redeclared in same scope.\n- const: block scoped, binding cannot be reassigned.\n\n### Function declaration vs expression vs arrow\nAll can create reusable functions, but their syntax, hoisting behaviour and `this` semantics differ. Arrow functions also do not have their own `this` binding.\n\n### DOM vs HTML\nHTML is the source markup. DOM is the browser's in-memory object/tree representation of the document.\n\n### Capturing vs bubbling\nCapturing travels toward the target; bubbling travels away from the target through ancestors.\n\n---\n\n## 18. Unit IV Punjabi quick revision\n\nJavaScript webpage ਦੀ logic ਅਤੇ interaction handle ਕਰਦੀ ਹੈ। `var` function-scoped ਹੈ; `let` ਅਤੇ `const` block-scoped ਹਨ। DOM HTML document ਦਾ tree representation ਹੈ। JavaScript DOM ਨੂੰ select ਅਤੇ modify ਕਰ ਸਕਦੀ ਹੈ। Events user/browser actions ਹਨ। Event propagation capturing → target → bubbling phases ਵਿੱਚ ਸਮਝੀ ਜਾਂਦੀ ਹੈ। Form validation client side ਉੱਤੇ user experience ਲਈ useful ਹੈ ਪਰ server-side validation security ਲਈ mandatory ਹੈ।"
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
