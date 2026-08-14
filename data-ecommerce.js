const SUBJECT_ECOMMERCE = {
  id: "ecommerce",
  code: "BCA-SEC-1-107A",
  title: "E-Commerce & Digital Marketing",
  type: "Skill Enhancement",
  credits: 2,
  theoryHours: 30,
  practicalHours: 0,
  assessment: { internal: 5, external: 45, practical: 0, total: 50 },
  icon: "fa-shopping-cart",
  bgClass: "bg-teal",
  description: "Explores the architecture of digital marketplaces, payment gateways, B2B/B2C frameworks, cryptography in secure transactions, and SEO/SEM digital marketing strategies.",
  tags: ["B2B/B2C", "Payment Gateways", "SEO", "Cryptography", "Digital Marketing"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Foundations of E-Commerce",
      topics: [
        "1. Evolution, Definition, and Scope of E-Commerce",
        "2. Traditional Commerce vs E-Commerce: Cost & Speed Analysis",
        "3. Business Models: B2B, B2C, C2C, and C2B Architectures",
        "4. The E-Commerce Value Chain & Supply Chain Disruption"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Digital Payment Systems & Security",
      topics: [
        "1. Electronic Funds Transfer (EFT) & Payment Gateways",
        "2. Digital Wallets, Smart Cards, and UPI Architecture",
        "3. E-Commerce Security: Symmetric vs Asymmetric Cryptography",
        "4. Digital Signatures, SSL/TLS Protocols, and PCI-DSS Compliance"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Digital Marketing & SEO",
      topics: [
        "1. Search Engine Optimization (SEO): On-Page vs Off-Page",
        "2. Search Engine Marketing (SEM) & Pay-Per-Click (PPC) Models",
        "3. Social Media Optimization (SMO) & Influencer Paradigms",
        "4. Email Marketing Automation & Conversion Rate Optimization (CRO)"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Legal Frameworks & Future Trends",
      topics: [
        "1. IT Act 2000 (India): Cybercrimes and Legal Provisions",
        "2. Consumer Protection in the Digital Age",
        "3. Mobile Commerce (M-Commerce) & App Ecosystems",
        "4. Emerging Trends: AI in E-Commerce, Blockchain, and IoT"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. E-Commerce Architectures: B2B vs B2C",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Business-to-Consumer (B2C) Architecture
The most recognized form of e-commerce (e.g., Amazon, Flipkart).
- **Dynamics:** The business sells directly to the end-user. Transaction volumes are extremely high, but the average order value (AOV) is relatively low.
- **Decision Making:** Highly emotional, driven by marketing, discounts, and brand loyalty. Sales cycles are extremely short (minutes to hours).
- **Platform Requirements:** Requires a massive focus on UI/UX, personalized recommendation engines, and seamless checkout flows to reduce cart abandonment.

## 2. Business-to-Business (B2B) Architecture
Transactions between two corporate entities (e.g., Alibaba, IndiaMART, or a manufacturer buying raw steel from a supplier).
- **Dynamics:** Lower transaction volume, but astronomically high average order values. Often involves recurring bulk orders.
- **Decision Making:** Strictly logical, driven by ROI, technical specifications, and legal contracts. The sales cycle is long (months), often requiring multi-level corporate approvals.
- **Platform Requirements:** Requires complex pricing tiers (discounts based on volume), integration with enterprise ERP systems (SAP/Oracle), and support for net-30/net-60 invoicing rather than instant credit card payments.`
    },
    {
      unit: "Unit II",
      title: "1. E-Commerce Security: Asymmetric Cryptography & SSL",
      readTime: "11 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Threat Landscape
E-Commerce relies on the transmission of highly sensitive data (credit card numbers, PII) across the public, insecure Internet. Without cryptography, Packet Sniffing (Man-in-the-Middle attacks) would instantly compromise this data.

## 2. Asymmetric (Public-Key) Cryptography
Unlike Symmetric cryptography which uses one single key to both encrypt and decrypt (highly insecure to transmit), Asymmetric Cryptography uses a mathematically linked Key Pair:
1. **Public Key:** Freely distributed to anyone in the world. It can *only* be used to Encrypt data.
2. **Private Key:** Kept securely on the server and never shared. It can *only* be used to Decrypt data that was encrypted by its matching Public Key.

**The Workflow:** When a customer buys an item, their browser encrypts their credit card using Amazon's Public Key. Even if a hacker intercepts the data, they cannot read it because they do not have the Private Key.

## 3. SSL/TLS and Digital Signatures
How does the customer know the Public Key actually belongs to Amazon and not a hacker spoofing the site?
- **Digital Certificates:** A trusted third-party Certificate Authority (CA), like DigiCert, verifies Amazon's identity and issues an X.509 Digital Certificate.
- **Digital Signatures:** The certificate is cryptographically "signed" by the CA. The customer's browser verifies this signature. This combination of Asymmetric Encryption and Digital Certificates forms the backbone of the **HTTPS / SSL (Secure Sockets Layer)** protocol.`
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 10,
      question: "Differentiate exhaustively between B2B and B2C E-Commerce models based on transaction volume, decision-making psychology, and platform architectural requirements.",
      probability: "High Probability",
      examFrequency: "10-Mark Core Topic"
    },
    {
      unit: "Unit II",
      marks: 10,
      question: "Explain the mechanism of Asymmetric Cryptography. How do Digital Certificates and the SSL protocol ensure secure financial transactions over the public Internet?",
      probability: "Very High Probability",
      examFrequency: "10-Mark PU Question"
    }
  ],
  solutions: [
    {
      unit: "Unit II",
      question: "Explain the mechanism of Asymmetric Cryptography. How do Digital Certificates and the SSL protocol ensure secure financial transactions over the public Internet?",
      solution: `### 1. Asymmetric Cryptography Mechanism
Asymmetric Cryptography resolves the "Key Distribution Problem" inherent in older symmetric systems by utilizing a mathematically entangled pair of keys for every entity: a **Public Key** (shared openly) and a **Private Key** (kept strictly secret).
- **Encryption:** If a customer wants to send a secure credit card number to a server, their browser uses the server's Public Key to encrypt the data. Due to the one-way mathematical function (often based on prime factorization like RSA), the Public Key cannot decrypt the data it just encrypted.
- **Decryption:** The data can only be decrypted by the server's corresponding Private Key.

### 2. Digital Certificates & Authentication
To prevent a Man-in-the-Middle from distributing a fake Public Key, the server must prove its identity using an **X.509 Digital Certificate**.
- A trusted Certificate Authority (CA) verifies the business entity and digitally signs the certificate containing the server's Public Key.
- The browser checks the CA's signature. If valid, it trusts the Public Key.

### 3. The SSL/TLS Handshake
1. The browser requests a secure connection.
2. The server sends its Digital Certificate.
3. The browser verifies the certificate's authenticity.
4. The browser generates a random "Session Key" (a fast symmetric key), encrypts it using the server's Public Key, and sends it back.
5. The server decrypts the Session Key using its Private Key.
6. Both parties now use this shared Session Key to securely encrypt the actual financial transaction data at high speed.`
    }
  ]
};
