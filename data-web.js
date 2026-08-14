const SUBJECT_WEB = {
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
  description: "Comprehensive study of Internet architecture, client-server models, HTML5 semantic structures, CSS3 responsive layout algorithms (Flexbox/Grid), and JavaScript core logic & DOM scripting.",
  tags: ["HTML5", "CSS3", "JavaScript", "DNS", "HTTP/HTTPS", "Flexbox", "DOM", "TCP/IP"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Internet Architecture & Client-Server Models",
      topics: [
        "1. History & Evolution of the Internet, ARPANET, TCP/IP Flag Day, WWW, W3C & WAI-ARIA",
        "2. Client-Server Architecture (2-Tier vs 3-Tier), Browser Subsystems & Web Server Socket Lifecycle",
        "3. URL Structure, 6-Step DNS Resolution Pipeline, HTTP vs HTTPS & SSL/TLS Handshake",
        "4. MIME Types, Static vs Dynamic Web Architectures & Web Hosting Paradigms (Shared, VPS, Dedicated, Cloud)"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "HTML5 Fundamentals & Semantic Structure",
      topics: [
        "1. HTML Document Anatomy, Standards Mode vs Quirks Mode, Metadata & Text Formatting Tags",
        "2. Hyperlinks (Absolute vs Relative, Security rel='noopener noreferrer'), Nested Lists & Complex Tables (colspan, rowspan)",
        "3. HTML5 Semantic Elements (<header>, <nav>, <article>, <section>, <aside>, <footer>) & Accessible Landmarks",
        "4. HTML Form Architecture, Advanced Input Types, Attributes & Client-Side Validation Mechanisms"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "CSS3 Styling, Box Model & Responsive Design",
      topics: [
        "1. CSS Inclusion Methods (Inline, Internal, External), Cascade Principles & Specificity Weight Matrix",
        "2. The CSS Box Model (Content, Padding, Border, Margin; content-box vs border-box) & Display Properties",
        "3. CSS Positioning Modes (Static, Relative, Absolute, Fixed, Sticky) & Stacking Contexts (z-index)",
        "4. CSS3 Flexbox Layout Algorithm & Mobile-First Responsive Web Design with Media Queries"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "JavaScript Core, Control Flow & DOM Manipulation",
      topics: [
        "1. JavaScript Engine Architecture (V8), Variables (var, let, const), Data Types, Type Coercion & Operators",
        "2. Control Flow Structures (if, switch, loops), Functions (Declarations, Expressions, Arrow Functions, Scope & Closures)",
        "3. DOM Tree Traversal, Element Selection (getElementById, querySelector) & Dynamic Attribute/Style Manipulation",
        "4. Event Handling Lifecycle (Capturing, Target, Bubbling, stopPropagation) & Form Event Validation"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. History & Evolution of the Internet, ARPANET, WWW, W3C & WAI-ARIA",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Precursors to the Modern Internet
The Internet is a globally connected network system facilitating worldwide communication and access to data resources through a vast collection of private, public, academic, business, and government networks.

### ARPANET (1969)
The fundamental precursor to the internet was the **Advanced Research Projects Agency Network (ARPANET)**, funded by the US Department of Defense. 
- **Packet Switching:** ARPANET was the first wide-area network to implement packet switching. Unlike circuit-switched networks (like traditional telephone lines) which required a dedicated, unbroken electrical circuit for the duration of a call, packet switching breaks data into smaller blocks (packets) that are routed independently across the network and reassembled at the destination.
- **Resiliency:** This decentralized structure meant that if one node or communication line was destroyed (e.g., during a military strike), packets could dynamically reroute around the failure, ensuring continuous communication.

### TCP/IP Flag Day (January 1, 1983)
Originally, ARPANET used the Network Control Program (NCP) protocol. As networks expanded, NCP struggled to handle complex inter-network routing.
- **The Shift:** On **January 1, 1983**, known as "Flag Day," all ARPANET hosts simultaneously switched from NCP to the **Transmission Control Protocol/Internet Protocol (TCP/IP)** suite, designed by Vint Cerf and Bob Kahn.
- **Significance:** TCP/IP provided a universal language allowing distinctly different computer networks (LANs, WANs, satellite links) to communicate seamlessly. This day is widely recognized as the birth of the modern Internet.

## 2. The World Wide Web (WWW)
While the Internet provides the physical infrastructure, the **World Wide Web** is an information-sharing model built *on top* of the Internet.
- **Invention (1989):** Invented by **Sir Tim Berners-Lee** at CERN (the European Organization for Nuclear Research) to facilitate document sharing among physicists.
- **Core Technologies Introduced:**
  1. **HTTP (HyperText Transfer Protocol):** The stateless protocol defining how messages are formatted and transmitted between web servers and browsers.
  2. **HTML (HyperText Markup Language):** The publishing language of the web, allowing the creation of structured documents with hyperlinks.
  3. **URI/URL (Uniform Resource Identifier/Locator):** A unique global addressing system for resources on the web.

## 3. Web Standards & Governance
### The World Wide Web Consortium (W3C)
Founded in 1994 by Tim Berners-Lee, the W3C is the main international standards organization for the World Wide Web.
- **Purpose:** To ensure universal interoperability. Before W3C, browser vendors (like Netscape and Internet Explorer) created proprietary, incompatible HTML tags (the "Browser Wars"). W3C standardizes HTML, CSS, XML, and DOM so a single codebase renders consistently across all compliant browsers.

### WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications)
As web pages evolved from static text documents to complex, dynamic web applications (SPAs using JavaScript), visually impaired users relying on screen readers faced massive hurdles. Screen readers couldn't detect dynamic DOM updates or understand custom UI widgets (like custom dropdowns or sliders built with \`<div>\`s).
- **Solution:** WAI-ARIA provides a set of HTML attributes (\`role\`, \`aria-hidden\`, \`aria-live\`, \`aria-valuenow\`) that define the semantics and state of dynamic web content, allowing assistive technologies to interpret complex JavaScript widgets as native controls.`
    },
    {
      unit: "Unit I",
      title: "2. Client-Server Architectures, Browser Subsystems & Web Server Socket Lifecycle",
      readTime: "15 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Client-Server Architecture Models
The web operates on a distributed application structure that partitions tasks between providers of a resource (servers) and service requesters (clients).

### 2-Tier Architecture (Client-Server)
The system is divided into two distinct logical layers:
1. **Client Tier (Presentation & Logic):** A thick client application installed on the user's machine handles both the user interface and significant business logic.
2. **Server Tier (Database):** A centralized database server that purely handles data storage, retrieval, and transaction management (e.g., direct ODBC/JDBC connections from a desktop app to an Oracle DB).
- **Drawbacks for Web:** Highly insecure (database credentials reside on the client), difficult to update (requires updating every client machine), and does not scale well to thousands of concurrent users.

### 3-Tier Architecture (Web Standard)
The de facto standard for web applications, isolating responsibilities into three distinct layers:
1. **Presentation Tier (Tier 1):** The user's web browser rendering HTML, CSS, and executing client-side JavaScript. It only communicates with Tier 2 via HTTP APIs.
2. **Application / Logic Tier (Tier 2):** The web server and backend runtime environment (e.g., Node.js, Python Django, Java Spring, PHP). This layer houses the core business rules, processes data, authenticates users, and acts as a secure middleware.
3. **Data Tier (Tier 3):** The Database Management System (DBMS) securely housed on a private network, accessible *only* by Tier 2 (e.g., MySQL, PostgreSQL, MongoDB).
- **Advantages:** 
  - **Security:** The database is never exposed to the public internet.
  - **Scalability:** The Application Tier can be horizontally scaled across multiple servers (via load balancers) independently of the database.
  - **Maintainability:** Business logic can be updated on the server without modifying the client.

## 2. Deep Dive: Web Browser Subsystems
A modern web browser (like Chrome, Firefox, Safari) is an extremely complex piece of software comprising several distinct subsystems:

1. **User Interface (UI):** The chrome of the browser (address bar, back/forward buttons, bookmarks menu). Everything except the window where the requested page is displayed.
2. **Browser Engine:** The bridge orchestrating communication between the UI and the Rendering Engine. It handles state changes and user inputs to the UI.
3. **Rendering Engine:** The core component responsible for parsing HTML and CSS. It constructs the DOM tree and CSSOM tree, combines them into a Render Tree, and calculates exact coordinates to paint pixels on the screen. (Examples: Blink in Chrome, Gecko in Firefox, WebKit in Safari).
4. **Networking:** Handles all network communication (HTTP/HTTPS requests, DNS lookups, TLS handshakes). It operates asynchronously and handles caching.
5. **JavaScript Engine:** A highly optimized virtual machine that parses, interprets, and JIT (Just-In-Time) compiles JavaScript code into native machine code. (Examples: V8 in Chrome/Node.js, SpiderMonkey in Firefox, JavaScriptCore in Safari).
6. **UI Backend:** Used for drawing basic OS-level widgets like combo boxes and windows.
7. **Data Persistence:** The local storage layer on the client machine, managing Cookies, LocalStorage, SessionStorage, IndexedDB, and Cache Storage.

## 3. Web Server Socket Lifecycle & HTTP Status Codes
When a web server (like Apache, Nginx, or an Express.js Node server) starts, it executes a specific lifecycle to handle client requests:

### The Socket Lifecycle
1. **Socket Creation & Bind:** The server software asks the OS for a network socket and **binds** it to a specific IP and Port (typically Port 80 for HTTP and 443 for HTTPS).
2. **Listen:** The socket enters a passive listening state, waiting for incoming TCP connection requests (SYN packets) from clients.
3. **Accept:** When a client initiates a connection, the server completes the TCP 3-way handshake and **accepts** the connection, usually spawning a new thread, process, or event loop task to handle it so the main listener isn't blocked.
4. **Read & Parse:** The server reads the raw byte stream from the socket and parses the HTTP request line (e.g., \`GET /index.html HTTP/1.1\`) and headers.
5. **Process & Generate:** The server locates the static file on disk or executes backend application logic to generate dynamic HTML/JSON.
6. **Write Response:** The server constructs the HTTP response headers (including the Status Code) and streams the body payload back to the client over the socket.
7. **Close or Keep-Alive:** The server closes the TCP socket unless the \`Connection: keep-alive\` header is present, in which case the socket remains open for subsequent requests to reduce handshake latency.

### HTTP Status Code Taxonomy
Status codes are 3-digit integers issued by a server in response to a client's request made to the server.

| Class | Category | Common Standard Examples |
| :--- | :--- | :--- |
| **1xx** | Informational | \`100 Continue\`: Initial request headers received; client should proceed to send the body. \`101 Switching Protocols\`: Server agreeing to upgrade connection (e.g., to WebSockets). |
| **2xx** | Success | \`200 OK\`: Request succeeded. \`201 Created\`: Resource successfully created (common in POST/PUT APIs). \`204 No Content\`: Success, but no data to return. |
| **3xx** | Redirection | \`301 Moved Permanently\`: Resource permanently relocated (SEO friendly redirect). \`304 Not Modified\`: Client's cached copy is still valid; server returns no body to save bandwidth. |
| **4xx** | Client Error | \`400 Bad Request\`: Malformed syntax. \`401 Unauthorized\`: Authentication required. \`403 Forbidden\`: Authenticated, but lacks permissions. \`404 Not Found\`: Resource does not exist. |
| **5xx** | Server Error | \`500 Internal Server Error\`: Server-side crash or unhandled exception. \`502 Bad Gateway\`: Reverse proxy received invalid response from backend. \`503 Service Unavailable\`: Server overload or maintenance. |`
    },
    {
      unit: "Unit I",
      title: "3. URL Structure, 6-Step DNS Pipeline & HTTPS SSL/TLS Handshake",
      readTime: "14 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Anatomy of a URL (Uniform Resource Locator)
A URL is a specific type of URI that not only identifies a resource but dictates exactly *how* to locate it across the global network.

**Example URL:** \`https://www.cs.pu.ac.in:443/academics/bca/syllabus.pdf?year=2026&sem=1#unit3\`

| Component | Extraction | Technical Description |
| :--- | :--- | :--- |
| **Protocol / Scheme** | \`https://\` | Dictates the application-layer protocol for data transfer (HTTP, HTTPS, FTP, MAILTO, WSS). |
| **Subdomain** | \`www.cs\` | Logical subdivision of the main domain, often used to route to specific servers or departments. |
| **Root Domain** | \`pu.ac.in\` | The registered, human-readable address mapped to an IP address. |
| **Port Number** | \`:443\` | The specific software endpoint on the server. Defaults are 80 (HTTP) and 443 (HTTPS) if omitted. |
| **Path** | \`/academics/bca/syllabus.pdf\` | The hierarchical directory structure pointing to the specific file or API endpoint route. |
| **Query String** | \`?year=2026&sem=1\` | Key-value parameter pairs appended after a \`?\` to pass dynamic data to the server (e.g., for filtering). |
| **Fragment / Hash** | \`#unit3\` | Client-side anchor. Instructs the browser to scroll to a specific \`id\` within the HTML document. Never sent to the server. |

## 2. The 6-Step DNS (Domain Name System) Resolution Pipeline
Computers communicate using IP addresses (e.g., \`142.250.190.46\`), but humans use domain names (e.g., \`google.com\`). DNS is the decentralized, hierarchical global phonebook that translates human-readable domains into machine IP addresses.

When a user types \`pu.ac.in\` into the browser, a complex resolution pipeline begins:

1. **Local Cache Inspection:** 
   - The browser first checks its own internal DNS cache.
   - If not found, it asks the Operating System, which checks its local DNS resolver cache and the hardcoded \`hosts\` file.
2. **Recursive Resolver Query:** 
   - If local caches miss, the OS dispatches the query to an external **Recursive Resolver**, typically provided by the user's ISP or a public provider like Google (\`8.8.8.8\`) or Cloudflare (\`1.1.1.1\`).
3. **Root Nameserver Query:** 
   - If the recursive resolver doesn't have the IP cached, it queries one of the 13 global **Root Nameservers** (represented by \`.\`). The Root doesn't know the IP, but it knows which server handles the \`.in\` Top-Level Domain (TLD).
4. **TLD Nameserver Query:** 
   - The recursive resolver queries the \`.in\` TLD Nameserver. The TLD server responds with the IP address of the specific **Authoritative Nameserver** responsible for \`pu.ac.in\`.
5. **Authoritative Nameserver Query:** 
   - The recursive resolver queries the Authoritative Nameserver, which holds the actual, official DNS records (like the \`A\` record for IPv4 or \`AAAA\` record for IPv6) for the domain. The server returns the final IP address.
6. **Caching & Return to Client:** 
   - The Recursive Resolver caches the IP address for a duration specified by the Time-To-Live (TTL) attribute, and finally returns the IP address to the user's OS and browser, allowing the TCP handshake to commence.

## 3. HTTP vs HTTPS: The Need for Encryption
**HTTP (HyperText Transfer Protocol)** transmits all data in raw, unencrypted plaintext. Anyone sniffing the network (e.g., on public Wi-Fi or compromised ISP routers) can intercept passwords, session cookies, and credit card numbers using Packet Sniffing (Man-in-the-Middle attacks).

**HTTPS (HTTP Secure)** wraps standard HTTP inside a secure, encrypted transport layer (TLS - Transport Layer Security, formerly SSL). 
HTTPS provides three critical security guarantees:
1. **Encryption:** Intercepted data appears as unintelligible gibberish.
2. **Data Integrity:** Cryptographic hashing (MACs) ensures that data cannot be modified in transit without detection.
3. **Authentication:** Digital Certificates mathematically prove that the server you are connected to is genuinely owned by the domain name displayed in the address bar.

## 4. Deep Dive: The SSL/TLS Handshake
Before any HTTP data is exchanged, an HTTPS connection requires an elaborate cryptographic handshake to establish secure parameters.

1. **Client Hello:** The browser sends a message proposing supported TLS versions, a list of supported Cipher Suites (encryption algorithms), and a random string of bytes (\`Client Random\`).
2. **Server Hello:** The server replies with the chosen TLS version, the selected Cipher Suite, and a \`Server Random\` string.
3. **Certificate Presentation:** The server sends its **X.509 Digital Certificate**, which contains the server's Public Key and is digitally signed by a trusted Certificate Authority (CA) like Let's Encrypt or DigiCert.
4. **Certificate Verification:** The browser verifies the CA's signature using pre-installed root certificates. If valid, the browser trusts the server's Public Key.
5. **Key Exchange (Pre-Master Secret):** The browser generates a secure random value called the **Pre-Master Secret**, encrypts it using the server's Public Key (Asymmetric Encryption), and sends it to the server. Only the server possesses the Private Key required to decrypt it.
6. **Session Key Derivation:** Both the browser and the server now independently use the \`Client Random\`, \`Server Random\`, and \`Pre-Master Secret\` to mathematically derive an identical symmetric key called the **Master Session Key**.
7. **Finished:** Both parties exchange encrypted "Finished" messages confirming the handshake was successful.
8. **Secure Bulk Transfer:** From this point forward, all HTTP requests and responses are symmetrically encrypted using the fast Master Session Key.`
    },
    {
      unit: "Unit I",
      title: "4. MIME Types, Web Architectures & Web Hosting Paradigms",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. MIME Types (Multipurpose Internet Mail Extensions)
Because the internet transmits files merely as streams of binary data, browsers need a standardized way to know *what* type of file they are receiving so they can process it correctly (e.g., render HTML, execute JS, or play an MP4).
This is achieved via the \`Content-Type\` HTTP response header, which specifies the MIME type.

**Common MIME Types:**
- **Text:** \`text/html\`, \`text/css\`, \`text/plain\`, \`text/csv\`
- **Application:** \`application/javascript\`, \`application/json\`, \`application/pdf\`, \`application/xml\`, \`application/octet-stream\` (generic binary file)
- **Image:** \`image/jpeg\`, \`image/png\`, \`image/webp\`, \`image/svg+xml\`
- **Audio/Video:** \`audio/mpeg\`, \`video/mp4\`

## 2. Static vs Dynamic Web Architectures

### Static Web Architecture
In a static architecture, web pages (HTML, CSS, JS, Images) are pre-written and stored as physical files on the web server's hard drive.
- **Workflow:** When a client requests \`/about.html\`, the web server simply locates the file on the disk and streams it back.
- **Pros:** Ultra-fast TTFB (Time to First Byte), extremely secure (no database to hack, no server-side code to exploit), easily cached on CDNs (Content Delivery Networks), and cheap to host.
- **Cons:** Content is identical for all users. Updating the site requires manually editing HTML files.

### Dynamic Web Architecture
In a dynamic architecture, the HTML is constructed on-the-fly by the server at the exact moment the user requests it.
- **Workflow:** When a client requests \`/profile?user=123\`, the server passes the request to an application runtime (e.g., Node.js, Python, PHP). The runtime executes code, connects to a database to fetch user 123's data, injects that data into an HTML template, and returns the finished HTML.
- **Pros:** Highly personalized content, user authentication, e-commerce shopping carts, CMS integration (like WordPress).
- **Cons:** Slower response times (due to DB queries and code execution), higher server resource consumption, and vulnerability to server-side attacks (e.g., SQL Injection).

## 3. Web Hosting Paradigms
To make a website accessible globally, it must be hosted on an internet-connected server.

| Hosting Paradigm | Technical Architecture | Pros | Cons | Best Suited For |
| :--- | :--- | :--- | :--- | :--- |
| **Shared Hosting** | Hundreds of different websites reside on a single physical server, sharing one OS, CPU, and RAM pool. | Extremely cheap, zero technical maintenance required. | "Noisy neighbor" problem: if one site gets a traffic spike, your site slows down or crashes. Low security isolation. | Small personal blogs, portfolio sites, entry-level businesses. |
| **VPS (Virtual Private Server)** | A physical server is divided into isolated virtual machines using a Hypervisor. You get guaranteed, dedicated slices of CPU and RAM, and root access to your own OS instance. | Predictable performance, highly customizable, secure isolation from neighbors. | Requires server administration skills (Linux CLI, firewall configuration). | Growing businesses, custom web applications, e-commerce stores. |
| **Dedicated Server** | You lease an entire physical bare-metal server machine in a data center. No virtualization overhead, no neighbors. | Maximum performance, massive bandwidth, complete hardware control. | Very expensive, you are responsible for hardware failure mitigation. | High-traffic enterprise applications, massive databases, gaming servers. |
| **Cloud Hosting (AWS, GCP, Azure)** | A massive, distributed cluster of interconnected physical servers acting as one giant virtual resource pool. | Infinite horizontal scalability, high fault tolerance (if hardware fails, VM migrates instantly), pay-as-you-go billing. | Highly complex to architect, costs can spiral out of control if unmonitored. | Modern SaaS platforms, Netflix, global enterprises, startups anticipating sudden viral growth. |`
    },
    {
      unit: "Unit II",
      title: "1. HTML5 Document Anatomy, Standards Mode vs Quirks Mode & Metadata",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Anatomy of an HTML5 Document
HTML (HyperText Markup Language) provides the fundamental skeletal structure of a web page using a tree of elements (tags).

### The Essential HTML5 Boilerplate
\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Panjab University BCA Syllabus">
    <title>Web Technologies - Unit 2</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Welcome to HTML5</h1>
    <p>This is a structurally sound document.</p>
</body>
</html>
\`\`\`

### Standards Mode vs Quirks Mode
The very first line, \`<!DOCTYPE html>\`, is crucial. It is the Document Type Declaration (DTD).
- **Standards Mode:** Including this precise declaration forces modern browsers (Chrome, Edge, Firefox) into "Standards Mode," ensuring they render the HTML and CSS according to the strict, official W3C specifications.
- **Quirks Mode:** If the DOCTYPE is missing or malformed, browsers fall back into "Quirks Mode." In Quirks Mode, browsers emulate the buggy, non-standard rendering behavior of ancient browsers (like Internet Explorer 5) to prevent old websites from breaking. This severely breaks modern CSS layouts like Flexbox and Grid.

## 2. The \`<head>\` Element and Metadata
The \`<head>\` contains metadata—data about data—that is not visually rendered on the page but is critical for browsers, search engines, and social media scrapers.

- \`<meta charset="UTF-8">\`: Instructs the browser to use the UTF-8 character encoding, ensuring emojis, foreign languages, and special mathematical symbols render correctly without mojibake (corrupted characters).
- \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`: **CRITICAL for Mobile Design.** Without this, mobile browsers will render the page at a desktop width (typically 980px) and shrink it down, requiring the user to pinch-to-zoom. This tag forces the viewport to match the physical width of the device, enabling media queries to function correctly.
- \`<title>\`: Defines the text shown in the browser tab and is the most important on-page SEO factor for Google rankings.
- \`<meta name="description" content="...">\`: Provides the short snippet text displayed under the blue link in Google search results.

## 3. Text Formatting and Phrasing Elements
HTML5 introduced strict semantic differences between visual formatting and semantic meaning:

- **Semantic Importance:**
  - \`<strong>\`: Indicates strong importance, seriousness, or urgency. (Browsers render as bold. Screen readers emphasize it vocally).
  - \`<em>\`: Indicates stress emphasis that changes the meaning of a sentence. (Rendered as italic).
- **Visual Formatting (Use sparingly, prefer CSS):**
  - \`<b>\`: Brings attention to text without conveying extra importance (e.g., keywords).
  - \`<i>\`: Indicates alternate voice or mood, or technical terms (e.g., taxonomy names, foreign words).
- **Other Phrasing Tags:**
  - \`<mark>\`: Highlights text for reference purposes.
  - \`<sup>\` and \`<sub>\`: Superscript ($E=mc^2$) and Subscript ($H_2O$).
  - \`<code>\`: Indicates a fragment of computer code.
  - \`<abbr title="HyperText Markup Language">\`: Defines an abbreviation or acronym.`
    },
    {
      unit: "Unit II",
      title: "2. Hyperlink Security, Nested Lists & Complex Table Structures",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Hyperlinks and Security Attributes
The anchor tag \`<a>\` creates hyperlinks linking pages together, forming the "Web."

### Absolute vs Relative URLs
- **Absolute URL:** Includes the full protocol and domain (e.g., \`href="https://google.com/search"\`). Required when linking to an external website.
- **Relative URL:** Specifies a path relative to the current file's location (e.g., \`href="/images/logo.png"\` or \`href="../css/style.css"\`). Preferred for internal site links because the site can be moved to a different domain without breaking links.

### The Reverse Tabnabbing Vulnerability
When you link to an external website using \`target="_blank"\` to open a new tab, you introduce a severe security flaw.
The newly opened malicious tab gains access to the \`window.opener\` JavaScript object. The malicious site can execute \`window.opener.location = 'https://fake-phishing-login.com'\`, silently redirecting the user's original tab to a phishing page while they are distracted by the new tab.
- **The Fix:** ALWAYS append \`rel="noopener noreferrer"\` when using \`target="_blank"\`. This severs the JavaScript link between the two tabs, nullifying \`window.opener\`.
\`\`\`html
<a href="https://untrusted-site.com" target="_blank" rel="noopener noreferrer">External Link</a>
\`\`\`

## 2. Lists in HTML
HTML supports three types of lists:
1. **Unordered Lists (\`<ul>\`):** Bulleted lists where sequence doesn't matter.
2. **Ordered Lists (\`<ol>\`):** Numbered lists where sequence is critical. Can be customized with \`type="A"\`, \`type="I"\`, or \`start="5"\`.
3. **Definition/Description Lists (\`<dl>\`):** Used for key-value pairs, glossaries, or dictionaries. Contains terms (\`<dt>\`) and descriptions (\`<dd>\`).

## 3. Complex HTML Table Architecture
Modern HTML tables must be structured semantically using \`<thead>\`, \`<tbody>\`, and \`<tfoot>\` to allow browsers to scroll the body independently and screen readers to accurately read column headers.

### Spanning Cells (colspan and rowspan)
- \`colspan="n"\`: Stretches a cell horizontally across 'n' columns.
- \`rowspan="n"\`: Stretches a cell vertically across 'n' rows.

### Comprehensive Table Example
\`\`\`html
<table border="1" style="border-collapse: collapse; width: 100%;">
    <caption>BCA 1st Semester Subject Matrix</caption>
    <thead>
        <tr>
            <th rowspan="2">Subject Code</th>
            <th rowspan="2">Subject Name</th>
            <th colspan="2">Marks Allocation</th>
        </tr>
        <tr>
            <th>Theory</th>
            <th>Practical</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>BCA-101</td>
            <td>Web Technologies</td>
            <td>50</td>
            <td>50</td>
        </tr>
        <tr>
            <td>BCA-103</td>
            <td>C Programming</td>
            <td>50</td>
            <td>50</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="2" style="text-align: right; font-weight: bold;">Grand Total:</td>
            <td colspan="2" style="text-align: center; font-weight: bold;">200 Marks</td>
        </tr>
    </tfoot>
</table>
\`\`\``
    },
    {
      unit: "Unit II",
      title: "3. HTML5 Semantic Elements & Accessible Landmarks",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Era of "Divitis" vs HTML5 Semantics
Before HTML5, developers structured entire layouts using non-semantic \`<div>\` and \`<span>\` tags (e.g., \`<div id="header">\`, \`<div class="nav">\`, \`<div class="footer">\`). This was known as **"Divitis"**.
Because a \`<div>\` has absolutely no intrinsic meaning, search engine crawlers (Googlebot) and screen readers could not distinguish the main article content from the sidebar advertisements or footer links.

HTML5 introduced a suite of **Semantic Elements**. A semantic element clearly describes its meaning to both the browser and the developer.

## 2. Core HTML5 Semantic Structural Elements
- \`<header>\`: Represents introductory content or a set of navigational links for a page or a specific article. Typically contains logos, search bars, and the main \`<h1>\`.
- \`<nav>\`: A section containing major navigation links to other pages or parts within the page. (Not all links belong in \`<nav>\`, only major navigation blocks).
- \`<main>\`: Represents the dominant, unique content of the \`<body>\`. There must only be one visible \`<main>\` element per page. It excludes sidebars, site-wide headers, and footers.
- \`<article>\`: A self-contained composition intended to be independently distributable or reusable (e.g., a forum post, a magazine article, a blog post, a product card). It should make sense entirely on its own.
- \`<section>\`: A thematic grouping of content, typically with its own heading (e.g., chapters, tabbed pages, contact information block).
- \`<aside>\`: Represents content tangentially related to the content around it. Commonly used for sidebars, pull quotes, advertising, or related links.
- \`<footer>\`: Represents the footer for its nearest sectioning ancestor. Typically contains copyright data, legal links, and authorship information.

## 3. Accessible Landmarks (WAI-ARIA)
While using HTML5 semantic elements automatically creates accessible landmarks for screen readers, you can explicitly define them using ARIA roles for ultimate compatibility:
- \`<main role="main">\`
- \`<nav role="navigation">\`
- \`<aside role="complementary">\`
- \`<header role="banner">\`
- \`<footer role="contentinfo">\`
- \`<form role="search">\`

### Example of a Semantic Document Outline
\`\`\`html
<body>
    <header role="banner">
        <img src="logo.png" alt="Company Logo">
        <nav role="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/courses">Courses</a></li>
            </ul>
        </nav>
    </header>

    <main role="main">
        <article>
            <header>
                <h1>Understanding Web Semantics</h1>
                <p>Published on Oct 12, 2026 by Admin</p>
            </header>
            
            <section id="introduction">
                <h2>Introduction</h2>
                <p>Semantic HTML improves SEO and accessibility.</p>
            </section>
        </article>

        <aside role="complementary">
            <h3>Related Articles</h3>
            <ul>
                <li><a href="/css">CSS Flexbox Guide</a></li>
            </ul>
        </aside>
    </main>

    <footer role="contentinfo">
        <p>&copy; 2026 University Portal.</p>
    </footer>
</body>
\`\`\``
    },
    {
      unit: "Unit II",
      title: "4. HTML Form Architecture & Client-Side Validation",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Form Architecture & The \`<form>\` Element
Forms are the primary method for collecting user input and transmitting it to a server for processing.

The \`<form>\` tag acts as a container and requires two critical attributes:
1. **\`action="..."\`**: Defines the URL/Endpoint on the server where the form data will be sent upon submission (e.g., \`action="/api/register"\`).
2. **\`method="..."\`**: Defines the HTTP verb used to send the data.
   - **\`GET\`**: Appends form data to the URL as a query string (e.g., \`?query=laptop&sort=price\`). Used for safe, idempotent actions like searching or filtering. Insecure for sensitive data since it remains in browser history. Limit of ~2000 characters.
   - **\`POST\`**: Embeds form data securely within the HTTP Request Body. Used for actions that mutate server state (creating accounts, uploading files, processing payments). No size limits.

## 2. Input Types & Accessibility
To ensure accessibility, every \`<input>\` must be explicitly paired with a \`<label>\` using the \`for\` and \`id\` attributes.

### Modern HTML5 Input Types
HTML5 introduced specific input types that automatically trigger optimized virtual keyboards on mobile devices (e.g., showing a numpad for \`type="number"\`, or showing an "@" key for \`type="email"\`).
- \`type="text"\`: Standard single-line text field.
- \`type="email"\`: Validates for an "@" symbol and domain.
- \`type="password"\`: Obscures typed characters as bullets/asterisks.
- \`type="number"\`: Restricts input to numeric digits, enables stepper arrows.
- \`type="date"\`: Triggers a native calendar date-picker UI.
- \`type="tel"\`: Triggers a telephone dialpad keyboard on mobile.
- \`type="checkbox"\`: Allows selecting multiple options in a group.
- \`type="radio"\`: Allows selecting only ONE option in a mutually exclusive group (all radio buttons in the group must share the exact same \`name\` attribute).

## 3. Client-Side Constraint Validation
Before data is sent to the server, HTML5 provides built-in attributes to validate input purely in the browser, providing instant feedback and saving server bandwidth.

- **\`required\`**: Prevents submission if the field is empty.
- **\`minlength="x"\` / \`maxlength="y"\`**: Enforces character count constraints.
- **\`min="x"\` / \`max="y"\`**: Enforces numeric boundary constraints for number and date inputs.
- **\`pattern="..."\`**: Enforces validation against a complex Regular Expression (Regex).

### Comprehensive Validated Form Example
\`\`\`html
<form action="/api/v1/students/register" method="POST">
    
    <!-- Text Input with Regex Pattern -->
    <div class="form-group">
        <label for="roll_no">University Roll Number:</label>
        <input type="text" id="roll_no" name="roll_no" 
               required 
               pattern="[0-9]{8}" 
               title="Roll number must be exactly 8 digits">
    </div>

    <!-- Email Input -->
    <div class="form-group">
        <label for="student_email">College Email ID:</label>
        <input type="email" id="student_email" name="email" 
               required 
               placeholder="name@pu.ac.in">
    </div>

    <!-- Dropdown Select -->
    <div class="form-group">
        <label for="course">Select Course:</label>
        <select id="course" name="course" required>
            <option value="" disabled selected>-- Choose Course --</option>
            <option value="bca">BCA (Bachelor of Computer Applications)</option>
            <option value="bsc_it">BSc IT</option>
        </select>
    </div>

    <!-- Radio Buttons (Shared Name) -->
    <div class="form-group">
        <p>Hostel Accommodation Required?</p>
        <input type="radio" id="hostel_yes" name="hostel_req" value="true" required>
        <label for="hostel_yes">Yes</label>
        
        <input type="radio" id="hostel_no" name="hostel_req" value="false">
        <label for="hostel_no">No</label>
    </div>

    <button type="submit">Submit Registration</button>
</form>
\`\`\``
    },
    {
      unit: "Unit III",
      title: "1. CSS Inclusion Methods, Cascade & Specificity Weight Matrix",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. CSS Inclusion Methods
CSS (Cascading Style Sheets) can be applied to an HTML document via three methods:

1. **Inline CSS:** Applied directly via the \`style\` attribute. Extremely difficult to maintain; violates separation of concerns. Highest specificity.
   \`<h1 style="color: blue;">Title</h1>\`
2. **Internal (Embedded) CSS:** Placed within a \`<style>\` block inside the \`<head>\`. Useful for single-page templates or overriding specific styles without external requests.
3. **External CSS:** A separate \`.css\` file linked via \`<link rel="stylesheet" href="styles.css">\`. The industry standard. Allows the browser to cache the CSS file once, applying it across thousands of pages instantly.

## 2. The Cascade Principle
"Cascading" refers to the algorithm the browser uses to resolve conflicts when multiple rules target the exact same element. The browser determines which rule "wins" based on three factors in this strict order:
1. **Importance (\`!important\`)**
2. **Specificity Weight**
3. **Source Order (Last declared wins)**

## 3. The Specificity Weight Matrix
Specificity is a mathematical calculation. It is represented as a 4-tuple: **(Inline, ID, Class, Element)**.

| Selector Category | Specificity Tuple | Base-10 Analogy | Example |
| :--- | :--- | :--- | :--- |
| **Inline Styles** | \`(1, 0, 0, 0)\` | 1000 | \`style="color: red;"\` |
| **ID Selectors** | \`(0, 1, 0, 0)\` | 100 | \`#navbar\` |
| **Classes, Attributes, Pseudo-classes** | \`(0, 0, 1, 0)\` | 10 | \`.btn\`, \`[type="text"]\`, \`:hover\` |
| **Elements & Pseudo-elements** | \`(0, 0, 0, 1)\` | 1 | \`div\`, \`p\`, \`::before\` |
| **Universal Selector (\`*\`)** | \`(0, 0, 0, 0)\` | 0 | \`*\` |

### Specificity Calculation Examples:
- \`h1\` $\\rightarrow$ 1 Element = **(0,0,0,1)**
- \`.container p\` $\\rightarrow$ 1 Class + 1 Element = **(0,0,1,1)**
- \`#login-form input.error:focus\` $\\rightarrow$ 1 ID + 2 Classes/Pseudo-classes + 1 Element = **(0,1,2,1)**
- \`#header #nav .link\` $\\rightarrow$ 2 IDs + 1 Class = **(0,2,1,0)** *(This wins against the previous one because 2 in the ID column beats 1 in the ID column, regardless of lower columns).*

### The \`!important\` Exception
Appending \`!important\` to a CSS property value violently overrides all specificity mathematics. It breaks the natural cascade and should be used as an absolute last resort (e.g., overriding 3rd-party library styles).
\`\`\`css
p { color: blue !important; } /* Will override an inline style! */
\`\`\``
    },
    {
      unit: "Unit III",
      title: "2. The CSS Box Model: content-box vs border-box",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Anatomy of the CSS Box Model
Every single HTML element on a web page is rendered by the browser engine as a rectangular box. The Box Model defines the architecture of this box in four concentric layers (from inside out):

1. **Content Area:** The actual text, image, or child elements. Dictated by \`width\` and \`height\`.
2. **Padding:** Transparent spacing internal to the box, sitting between the content and the border. Padding takes on the background color of the element.
3. **Border:** A structural line encompassing the padding and content.
4. **Margin:** Transparent spacing completely external to the box, pushing other adjacent boxes away. Margins do NOT take on the element's background color.

## 2. The Flaw of the Default \`content-box\`
By default, CSS applies the \`box-sizing: content-box\` rule.
In this mode, when you declare \`width: 100%\`, you are setting the width of the *Content Area only*. If you subsequently add padding or borders, those values are mathematically **added on top of** the 100% width, causing the box to overflow its parent container and trigger horizontal scrolling.

**Math in \`content-box\`:**
Total Rendered Width = \`width\` + \`padding-left\` + \`padding-right\` + \`border-left\` + \`border-right\`.
If width = 300px, padding = 20px, border = 2px: Total physical width = $300 + 20 + 20 + 2 + 2 = \\mathbf{344px}$.

## 3. The Modern Standard: \`border-box\`
To solve the layout-breaking math of \`content-box\`, modern web development mandates resetting all elements to \`box-sizing: border-box\`.
In this mode, the \`width\` declaration sets the absolute maximum physical width of the entire box (including padding and borders). The browser automatically shrinks the internal Content Area to absorb the padding/borders.

**Math in \`border-box\`:**
Total Rendered Width = \`width\` (Period).
If width = 300px, padding = 20px, border = 2px: Total physical width = $\\mathbf{300px}$. The internal content area shrinks to 256px.

### The Universal Box Model Reset
This snippet should be at the top of every CSS file ever written:
\`\`\`css
/* Apply border-box to all elements and all pseudo-elements */
html {
    box-sizing: border-box;
}

*, *::before, *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
}
\`\`\``
    },
    {
      unit: "Unit III",
      title: "3. CSS Positioning Modes & Stacking Contexts (z-index)",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. CSS Positioning Modes
The \`position\` property completely alters how an element behaves within the browser's Document Normal Flow. Once positioned, you can physically move the element using the \`top\`, \`right\`, \`bottom\`, and \`left\` offset properties.

| Position Value | Document Flow | Behavior & Offset Calculation |
| :--- | :--- | :--- |
| **\`static\` (Default)** | In Flow | Element renders naturally where the HTML places it. \`top/left/z-index\` offsets have **zero effect**. |
| **\`relative\`** | In Flow | Element is moved relative to its *original static position*. It leaves a "ghost" empty space where it originally was; surrounding elements do not collapse into its old space. |
| **\`absolute\`** | Out of Flow | Element is entirely ripped out of the document flow (surrounding elements collapse). It positions itself relative to its **closest positioned ancestor** (any parent with a position other than static). If no positioned parent exists, it positions relative to the \`<html>\` document body. |
| **\`fixed\`** | Out of Flow | Element is ripped out of the document flow and locked to the **browser viewport** (the glass of the screen). It will not move even when the user scrolls the page (e.g., sticky headers, floating chat buttons). |
| **\`sticky\`** | Hybrid | Element behaves like \`relative\` until the user scrolls past a specified threshold (e.g., \`top: 0\`), at which point it violently toggles to behave like \`fixed\` and "sticks" to the screen. |

## 2. The Absolute Centering Trick
Combining \`absolute\` positioning with CSS Transforms is the classic way to perfectly center a modal or div vertically and horizontally in the center of a screen:
\`\`\`css
.modal-centered {
    position: absolute;
    top: 50%;         /* Push top edge 50% down the parent */
    left: 50%;        /* Push left edge 50% across the parent */
    transform: translate(-50%, -50%); /* Pull it back by 50% of its OWN width/height */
}
\`\`\`

## 3. Stacking Contexts and \`z-index\`
The web is not 2D; it is 3D. Elements can overlap on the Z-axis (pointing out of the screen toward the user).
- **\`z-index\`**: An integer (positive or negative) that determines the stacking order. Higher numbers sit on top of lower numbers.
- **CRITICAL RULE:** \`z-index\` only works on **Positioned Elements** (i.e., elements with \`position\` set to \`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`). Applying \`z-index: 9999\` to a \`position: static\` element does absolutely nothing.
- **Stacking Context Isolation:** A child element cannot render on top of an element that sits above the child's parent in the stacking context, no matter how high the child's \`z-index\` is.`
    },
    {
      unit: "Unit III",
      title: "4. CSS3 Flexbox Architecture & Mobile-First Responsive Design",
      readTime: "12 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Flexbox (Flexible Box) Algorithm
Flexbox is a one-dimensional layout algorithm designed to distribute space dynamically and align elements within a container, even when their size is unknown or dynamic.

To initiate Flexbox, you apply \`display: flex;\` to a parent container. The immediate children automatically become "flex items".

### Core Parent Container Properties
- **\`flex-direction\`:** Defines the Main Axis.
  - \`row\` (Default): Main axis is horizontal $\\rightarrow$.
  - \`column\`: Main axis is vertical $\\downarrow$.
- **\`justify-content\`:** Aligns children along the **Main Axis**.
  - \`flex-start\`, \`center\`, \`flex-end\`, \`space-between\` (pushes outer items to edges), \`space-around\`, \`space-evenly\`.
- **\`align-items\`:** Aligns children along the **Cross Axis** (perpendicular to main axis).
  - \`stretch\` (Default - items stretch to fill height), \`flex-start\`, \`center\`, \`flex-end\`, \`baseline\`.
- **\`flex-wrap\`:** Controls multiline wrapping.
  - \`nowrap\` (Default - forces items to shrink or overflow), \`wrap\` (drops items to new line).

### Core Child Item Properties
- **\`flex-grow\`:** Determines how much available empty space the item should aggressively absorb relative to its siblings (e.g., \`flex-grow: 1\`).
- **\`flex-shrink\`:** Determines how aggressively the item should shrink when space runs out.
- **\`flex-basis\`:** The ideal starting size of the element before growing or shrinking occurs.
- **Shorthand:** \`flex: 1 1 auto;\` (Grow 1, Shrink 1, Basis auto).

## 2. Responsive Web Design (RWD) & Media Queries
RWD ensures a single codebase gracefully adapts its layout across tiny smartphones, tablets, and 4K desktop monitors.

### The Mobile-First Paradigm
Instead of writing desktop styles and attempting to squash them down for phones, industry standard dictates writing the base CSS for the smallest mobile screen first. Then, using \`@media\` queries with \`min-width\` breakpoints, progressively enhance the layout as the screen gets wider.

### Complete Mobile-First Flexbox Implementation
\`\`\`css
/* 1. Mobile-First Base CSS (Applies to ALL screens, defaults to vertical column) */
.flex-container {
    display: flex;
    flex-direction: column; /* Stack vertically on phones */
    gap: 15px;
    padding: 20px;
}
.flex-item {
    background-color: #3498db;
    padding: 20px;
    color: white;
}

/* 2. Tablet Breakpoint (Enhancement) */
@media screen and (min-width: 768px) {
    .flex-container {
        flex-direction: row; /* Switch to horizontal row */
        flex-wrap: wrap;     /* Allow wrapping to next line */
    }
    .flex-item {
        /* Take up 50% of the row, minus the gap space */
        flex: 1 1 calc(50% - 15px); 
    }
}

/* 3. Desktop Breakpoint (Enhancement) */
@media screen and (min-width: 1024px) {
    .flex-item {
        /* Take up exactly 33.333% of the row */
        flex: 1 1 calc(33.333% - 15px);
    }
}
\`\`\``
    },
    {
      unit: "Unit IV",
      title: "1. JavaScript Engine, Variables (var/let/const) & Type Coercion",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. JavaScript Engine Architecture
JavaScript is a high-level, dynamically typed, single-threaded, interpreted/JIT-compiled language.
It runs inside a **JavaScript Engine** (like Google Chrome's V8 Engine or Mozilla's SpiderMonkey). 
- **The Call Stack:** Executes functions sequentially (LIFO). Since JS is single-threaded, it only has one call stack.
- **The Memory Heap:** Unstructured RAM allocation for objects, arrays, and complex variables.
- **Just-In-Time (JIT) Compilation:** Modern engines don't purely interpret line-by-line; they profile the code at runtime and compile "hot" repetitive functions directly into machine code for near C-level performance.

## 2. Variable Declarations: \`var\` vs \`let\` vs \`const\`
ECMAScript 6 (ES6) introduced \`let\` and \`const\` to fix severe architectural flaws in the legacy \`var\` keyword.

| Feature | \`var\` (Legacy) | \`let\` (Modern) | \`const\` (Modern) |
| :--- | :--- | :--- | :--- |
| **Scoping** | **Function-Scoped** (Ignores block \`{}\` boundaries like if-statements). | **Block-Scoped** (Confined securely within nearest \`{}\`). | **Block-Scoped** |
| **Hoisting Behavior** | Hoisted to top of scope and initialized with \`undefined\`. | Hoisted, but placed in a **Temporal Dead Zone (TDZ)**. Accessing before declaration throws ReferenceError. | Hoisted to TDZ. |
| **Re-Declaration** | Allows re-declaring the exact same variable name in same scope. | SyntaxError. | SyntaxError. |
| **Re-Assignment** | Allows updating value. | Allows updating value. | **Immutable Reference**. Re-assignment throws TypeError. |

> **Note on \`const\` Mutability:** \`const\` prevents reassignment of the variable identifier. However, if the \`const\` points to an Object or Array, the *contents/properties* of that object can still be mutated (e.g., \`const arr = []; arr.push(1);\` is perfectly valid).

## 3. Data Types & Type Coercion
JavaScript has 7 Primitive Data Types: \`String\`, \`Number\`, \`Boolean\`, \`Undefined\`, \`Null\`, \`Symbol\`, \`BigInt\`. Everything else (Arrays, Functions) is structurally an \`Object\`.

### Implicit Type Coercion (The Double vs Triple Equals)
Because JS is dynamically typed, the engine silently converts types during operations to prevent crashing.
- **Loose Equality (\`==\`)**: Performs type coercion before comparing.
  - \`5 == "5"\` $\\rightarrow$ Evaluates to \`true\`. The engine silently converted the string to a number.
  - \`0 == false\` $\\rightarrow$ Evaluates to \`true\`.
- **Strict Equality (\`===\`)**: Checks both the **Value** AND the **Data Type**. Does absolutely no coercion.
  - \`5 === "5"\` $\\rightarrow$ Evaluates to \`false\`.
  - **Industry Standard:** Never use \`==\`. Exclusively use \`===\` to prevent catastrophic logical bugs.`
    },
    {
      unit: "Unit IV",
      title: "2. Functions, Closures & Lexical Scope",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Function Architectures in JavaScript
Functions are "First-Class Citizens" in JavaScript, meaning they can be passed as arguments to other functions, returned from functions, and assigned to variables.

### 1. Function Declarations
Defined using the \`function\` keyword starting on the main line.
- **Key Feature:** Function Declarations are entirely **hoisted** to the top of their scope by the JS Engine, meaning you can call them *before* they are defined in the code.
\`\`\`javascript
greet(); // Works perfectly!
function greet() { console.log("Hello"); }
\`\`\`

### 2. Function Expressions
A function is assigned as a value to a variable (usually anonymous).
- **Key Feature:** They are NOT hoisted. Calling them before definition throws an error.
\`\`\`javascript
const greet = function() { console.log("Hello"); };
\`\`\`

### 3. ES6 Arrow Functions (\`=>\`)
A highly concise syntax primarily used for callbacks and array methods.
- **Key Feature:** Arrow functions do NOT have their own \`this\` context; they lexically inherit \`this\` from their surrounding parent scope.
\`\`\`javascript
const square = (num) => num * num; // Implicit return
\`\`\`

## 2. Lexical Scope & Closures (Advanced)
A **Closure** is an advanced JS phenomenon where an inner function preserves access to the variables of its outer (parent) function, *even after the outer function has finished executing and returned*.

Closures are created automatically every time a function is created inside another function. They are heavily used in modern JS for data privacy (encapsulation) and factory patterns.

\`\`\`javascript
function secureBank() {
    let balance = 1000; // Private variable, inaccessible from outside
    
    // The inner function forms a Closure, preserving access to 'balance'
    return function withdraw(amount) {
        balance -= amount;
        return \`New Balance: \${balance}\`;
    }
}

const myAccount = secureBank(); // secureBank finishes execution here.
console.log(myAccount(200)); // "New Balance: 800". The closure remembered the balance!
console.log(balance); // ReferenceError: balance is not defined
\`\`\``
    },
    {
      unit: "Unit IV",
      title: "3. DOM Traversal, Selection & Dynamic Manipulation",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Document Object Model (DOM)
When a browser loads an HTML document, the Rendering Engine converts the raw HTML string into a highly structured, tree-like, object-oriented API called the DOM. JavaScript interfaces with this API to dynamically read and write to the web page in real-time, eliminating the need to refresh the page.
The global entry point to the DOM tree is the \`document\` object.

## 2. Querying and Selecting DOM Elements
Modern JavaScript relies heavily on CSS selector syntax to find elements efficiently.

| Method | Returns | Description |
| :--- | :--- | :--- |
| \`document.getElementById('nav')\` | Single Element | Extremely fast. Returns the one element matching the ID. |
| \`document.querySelector('.btn')\` | Single Element | Returns the *very first* element matching the CSS selector. |
| \`document.querySelectorAll('p.text')\` | NodeList (Array-like) | Returns a static collection of *all* elements matching the CSS selector. Must be looped over using \`.forEach()\`. |

## 3. Traversing the DOM Tree
Once you have an element, you can navigate geometrically to its relatives without querying the entire document again:
- \`element.parentElement\`: Traverses upward to the parent node.
- \`element.children\`: Returns an HTMLCollection of immediate child elements.
- \`element.nextElementSibling\`: Moves to the adjacent sibling sharing the same parent.

## 4. Dynamic Manipulation & Security (XSS)
### Modifying Text and HTML
- \`element.textContent = "Hello"\`: Safely inserts raw text. If you pass HTML tags, they are rendered safely as literal text strings (e.g., \`<h1>\`). **Always use this for user input to prevent Cross-Site Scripting (XSS) hacking.**
- \`element.innerHTML = "<h1>Danger</h1>"\`: Parses the string and injects actual DOM nodes. Highly vulnerable to XSS if injecting un-sanitized user data.

### Modifying CSS Styles & Classes
- \`element.style.backgroundColor = "red"\`: Injects an inline style directly onto the element. Properties are camelCased.
- \`element.classList.add('active')\`: The superior method. Adds a pre-defined CSS class, keeping styling concerns separated in the CSS file. Includes \`.remove()\`, \`.toggle()\`, and \`.contains()\`.`
    },
    {
      unit: "Unit IV",
      title: "4. The Event Lifecycle (Capturing vs Bubbling) & Form Validation",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Asynchronous Event Handling
Because JavaScript is single-threaded, it cannot stop and "wait" for a user to click a button—that would freeze the browser. Instead, it uses an asynchronous Event Loop. You attach an Event Listener to an element, and when the hardware detects an action (click, scroll, keydown), it pushes a callback function onto the queue to be executed.

\`\`\`javascript
const btn = document.querySelector('#submitBtn');
// element.addEventListener(eventName, callbackFunction);
btn.addEventListener('click', function(eventObject) {
    console.log("Button was clicked!");
});
\`\`\`

## 2. The 3-Phase Event Propagation Lifecycle
When you click a deeply nested element (like a \`<button>\` inside a \`<div>\` inside the \`<body>\`), the event doesn't just happen on the button. It triggers a complex 3-phase lifecycle.

1. **Phase 1: Capturing (Trickling Down)**
   - The event originates at the global \`window\` object and trickles *downwards* through the ancestor DOM tree (\`document\` $\\rightarrow$ \`html\` $\\rightarrow$ \`body\` $\\rightarrow$ \`div\`) looking for capturing event listeners.
2. **Phase 2: Target**
   - The event physically hits the exact element the user interacted with (the \`<button>\`).
3. **Phase 3: Bubbling (Ascending Up)**
   - **(This is the Default Behavior)**. The event "bubbles" *upwards* from the target back to the \`window\` (\`button\` $\\rightarrow$ \`div\` $\\rightarrow$ \`body\` $\\rightarrow$ \`html\`). Any standard event listeners attached to the ancestors will be triggered.

### Halting Propagation
If you click a button inside a card, and both have click listeners, the bubbling phase will trigger both. To stop the event from bubbling up to ancestors:
\`\`\`javascript
button.addEventListener('click', function(event) {
    event.stopPropagation(); // Brutally terminates the bubbling phase
    console.log("Only the button logic fires. The parent card ignores it.");
});
\`\`\`

## 3. Form Submission Event & \`preventDefault()\`
When a user clicks a submit button inside an HTML \`<form>\`, the browser's native default behavior is to immediately execute an HTTP request and completely refresh the page. In modern JavaScript (SPAs, React, AJAX), this is highly undesirable.

\`\`\`javascript
const form = document.querySelector('#loginForm');

form.addEventListener('submit', function(event) {
    // CRITICAL: Prevents the browser from refreshing the page!
    event.preventDefault(); 
    
    // Now you can manually read input values and send an AJAX/Fetch request
    const password = document.querySelector('#pwd').value;
    if(password.length < 8) {
        alert("Password too short!");
    }
});
\`\`\``
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 2,
      question: "What was ARPANET and what was the significance of TCP/IP Flag Day in 1983?",
      probability: "High Probability",
      examFrequency: "Appeared in 2022, 2024 PU Exam"
    },
    {
      unit: "Unit I",
      marks: 10,
      question: "Exhaustively explain the 6-step DNS Resolution Pipeline. Follow up by comparing HTTP and HTTPS, detailing the SSL/TLS Handshake process.",
      probability: "High Probability",
      examFrequency: "10-Mark Compulsory in PU 2023, 2024"
    },
    {
      unit: "Unit II",
      marks: 2,
      question: "Why is the <!DOCTYPE html> declaration critical for modern web rendering?",
      probability: "Medium Probability",
      examFrequency: "PU Specimen 2025"
    },
    {
      unit: "Unit II",
      marks: 10,
      question: "Construct a complete, semantic HTML5 document showcasing nested lists, styled tables with merged cells (colspan/rowspan), and a heavily validated registration form using HTML5 constraint attributes.",
      probability: "High Probability",
      examFrequency: "10-Mark Practical Theory Question"
    },
    {
      unit: "Unit III",
      marks: 2,
      question: "Explain the mathematical difference between box-sizing: content-box and border-box.",
      probability: "High Probability",
      examFrequency: "PU 2021, 2024"
    },
    {
      unit: "Unit III",
      marks: 10,
      question: "Explain the CSS Specificity Weight Matrix with complex examples. Provide a complete responsive Flexbox layout implementation incorporating the Mobile-First paradigm and Media Queries.",
      probability: "High Probability",
      examFrequency: "10-Mark Core Theory Question"
    },
    {
      unit: "Unit IV",
      marks: 2,
      question: "Differentiate between var, let, and const in JavaScript regarding scoping and hoisting (TDZ).",
      probability: "High Probability",
      examFrequency: "PU 2022, 2025"
    },
    {
      unit: "Unit IV",
      marks: 10,
      question: "Explain the JavaScript DOM Event Propagation Lifecycle (Capturing vs Bubbling). Provide a code snippet demonstrating how to intercept a form submission, prevent page reload using preventDefault(), and validate inputs.",
      probability: "High Probability",
      examFrequency: "10-Mark Compulsory Question"
    }
  ],
  solutions: [
    {
      unit: "Unit I",
      question: "Exhaustively explain the 6-step DNS Resolution Pipeline. Follow up by comparing HTTP and HTTPS, detailing the SSL/TLS Handshake process.",
      solution: `### Part 1: The 6-Step DNS Resolution Pipeline
DNS (Domain Name System) translates human-readable domains into machine IP addresses.
1. **Local Cache Inspection:** The browser first checks its internal DNS cache, followed by the Operating System's resolver cache and the local \`hosts\` file.
2. **Recursive Resolver Dispatch:** If cache misses occur, the OS sends the query over the internet to the ISP's Recursive Resolver (e.g., Google's \`8.8.8.8\`).
3. **Root Nameserver Referral:** The recursive resolver queries a global Root Nameserver (\`.\`), which redirects it to the appropriate TLD Nameserver (e.g., \`.com\` or \`.in\`).
4. **TLD Nameserver Referral:** The resolver queries the TLD Nameserver, which provides the IP of the domain's specific Authoritative Nameserver.
5. **Authoritative Nameserver Resolution:** The Authoritative Nameserver matches the domain against its zone file and returns the destination \`A\` (IPv4) or \`AAAA\` (IPv6) record.
6. **Caching & Browser Return:** The Recursive Resolver caches the record based on its TTL (Time to Live) and returns the physical IP to the client's OS.

### Part 2: HTTP vs HTTPS
- **HTTP:** Transmits data in raw plaintext. Highly vulnerable to Man-in-the-Middle (MITM) packet sniffing attacks.
- **HTTPS:** Wraps HTTP in a Transport Layer Security (TLS) cryptographic tunnel. Guarantees Encryption, Data Integrity (via MACs), and Authentication (via X.509 Digital Certificates).

### Part 3: The SSL/TLS Handshake Lifecycle
Before HTTPS data transfer begins, a cryptographic handshake occurs:
1. **TCP Handshake:** Standard SYN, SYN-ACK, ACK completes.
2. **Client Hello:** Browser sends supported TLS versions, cipher suites, and a \`Client Random\`.
3. **Server Hello:** Server selects the cipher, returns a \`Server Random\`, and presents its digitally signed **X.509 Certificate**.
4. **Verification & Pre-Master Secret:** The client verifies the certificate with Root CAs. It generates a Pre-Master Secret, encrypts it using the server's Public Key, and transmits it.
5. **Session Key Derivation:** Both parties use the two randoms and the Pre-Master Secret to mathematically calculate an identical symmetric **Master Session Key**.
6. **Finished:** Secure, symmetrically encrypted communication commences.`
    },
    {
      unit: "Unit III",
      question: "Explain the CSS Specificity Weight Matrix with complex examples. Provide a complete responsive Flexbox layout implementation incorporating the Mobile-First paradigm and Media Queries.",
      solution: `### Part 1: CSS Specificity Weight Matrix
Specificity resolves conflicts when multiple CSS rules target the exact same element. It is calculated as a 4-tuple weight: **(Inline, ID, Class, Element)**.
- **Inline Styles:** (1, 0, 0, 0) $\\rightarrow$ Highest weight.
- **ID Selectors (\`#id\`):** (0, 1, 0, 0)
- **Class / Pseudo-class (\`.class\`, \`:hover\`):** (0, 0, 1, 0)
- **Element / Pseudo-element (\`div\`, \`::before\`):** (0, 0, 0, 1)

**Examples:**
- \`nav ul li a\` $\\rightarrow$ 4 Elements = **(0,0,0,4)**
- \`#header .nav-link:hover\` $\\rightarrow$ 1 ID, 2 Classes = **(0,1,2,0)** *(This wins against the element selector because the ID column is evaluated first).*
- **\`!important\`:** A sledgehammer that violently overrides the matrix entirely.

### Part 2: Mobile-First Responsive Flexbox Implementation
The Mobile-First paradigm dictates writing CSS for smartphone screens by default, then using \`@media (min-width)\` queries to progressively enhance the layout for tablets and desktops.

\`\`\`css
/* 1. Universal Box Model Reset */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* 2. Mobile-First Base CSS (Applies everywhere) */
.flex-container {
    display: flex;
    flex-direction: column; /* Stack vertically on small screens */
    gap: 20px;
    padding: 20px;
}

.flex-item {
    background-color: #2c3e50;
    padding: 20px;
    border-radius: 8px;
}

/* 3. Tablet Breakpoint (768px and up) */
@media screen and (min-width: 768px) {
    .flex-container {
        flex-direction: row; /* Switch to horizontal row */
        flex-wrap: wrap;     /* Allow wrapping */
    }
    .flex-item {
        /* Take up 50% width minus the gap spacing */
        flex: 1 1 calc(50% - 20px); 
    }
}

/* 4. Desktop Breakpoint (1024px and up) */
@media screen and (min-width: 1024px) {
    .flex-item {
        /* Take up 33.3% width minus the gap spacing */
        flex: 1 1 calc(33.333% - 20px);
    }
}
\`\`\``
    },
    {
      unit: "Unit IV",
      question: "Explain the JavaScript DOM Event Propagation Lifecycle (Capturing vs Bubbling). Provide a code snippet demonstrating how to intercept a form submission, prevent page reload using preventDefault(), and validate inputs.",
      solution: `### Part 1: Event Propagation (Capturing vs Bubbling)
When a nested DOM element (like a button inside a div) triggers an event, it executes a 3-phase lifecycle:
1. **Capturing Phase:** The event originates at the \`window\` object and trickles downwards through the ancestor nodes until it reaches the target element.
2. **Target Phase:** The event registers directly on the node the user interacted with.
3. **Bubbling Phase (Default):** The event "bubbles" upwards from the target element back through its ancestors to the \`window\`. This is why clicking a button can trigger an \`onclick\` listener attached to its parent \`<div>\`.
*(Note: Bubbling can be halted using \`event.stopPropagation()\`).*

### Part 2: Form Interception & Validation Code
By default, HTML forms execute an HTTP request and reload the page. JavaScript intercepts this using \`preventDefault()\`.

\`\`\`html
<form id="registrationForm">
    <input type="password" id="pwd" placeholder="Enter Password">
    <button type="submit">Register</button>
</form>

<script>
    const form = document.getElementById('registrationForm');
    
    // Listen for the 'submit' event on the form, NOT the 'click' event on the button
    form.addEventListener('submit', function(event) {
        
        // CRITICAL: Prevent the browser from refreshing the page
        event.preventDefault(); 
        
        // Custom DOM Validation Logic
        const passwordInput = document.getElementById('pwd').value;
        
        if (passwordInput.length < 8) {
            alert("Security Error: Password must be at least 8 characters long.");
        } else {
            console.log("Validation passed! Ready to dispatch AJAX/Fetch request.");
            // e.g., fetch('/api/register', { method: 'POST', body: ... })
        }
    });
</script>
\`\`\``
    }
  ]
};
