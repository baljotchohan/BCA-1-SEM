const SUBJECT_ENGLISH = {
  id: "english",
  code: "BCA-AEC-1-105A",
  title: "English Comprehension & Communication",
  type: "Ability Enhancement",
  credits: 2,
  theoryHours: 30,
  practicalHours: 0,
  assessment: { internal: 5, external: 45, practical: 0, total: 50 },
  icon: "fa-book-open",
  bgClass: "bg-gray",
  description: "Advanced corporate communication, focusing on technical writing, email etiquette, phonetic articulation, non-verbal kinesics, and formal presentation mechanics.",
  tags: ["Grammar", "Phonetics", "Email Etiquette", "Kinesics", "Communication"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Grammar & Syntax Optimization",
      topics: [
        "1. Advanced Tense Application in Corporate Documentation",
        "2. Active vs Passive Voice in Technical Writing",
        "3. Subject-Verb Agreement & Prepositional Logic",
        "4. Common Syntactical Errors & Redundancy Elimination"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Corporate Communication & Email Etiquette",
      topics: [
        "1. The 7 Cs of Effective Business Communication",
        "2. Formal vs Informal Tones, Memos & Circulars",
        "3. Email Etiquette: Subject Line Optimization, BCC/CC Mechanics & Professional Sign-offs",
        "4. Drafting Cover Letters & Professional Resumes"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Phonetics & Articulation",
      topics: [
        "1. Introduction to the International Phonetic Alphabet (IPA)",
        "2. Vowel vs Consonant Sounds, Diphthongs & Syllabic Stress",
        "3. Intonation Patterns (Rising, Falling, Circumflex) in Speeches",
        "4. Overcoming Mother Tongue Influence (MTI) in Global Corporate Settings"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Non-Verbal Communication & Presentation Skills",
      topics: [
        "1. Kinesics (Body Language, Posture, Micro-expressions) & Oculesics (Eye Contact)",
        "2. Proxemics (Space Management) & Haptics (Touch)",
        "3. Designing Effective Slide Decks (Typography, Color Theory, Information Density)",
        "4. Extempore, Group Discussions (GD) & Mock Interview Strategies"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. Active vs Passive Voice in Technical Writing",
      readTime: "8 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Active vs Passive Voice
In **Active Voice**, the subject of the sentence physically performs the action.
*(e.g., "The developer compiled the code.")*
In **Passive Voice**, the subject receives the action.
*(e.g., "The code was compiled by the developer.")*

### Application in Corporate/Technical Writing
- **The Rule of Active Preference:** Modern business writing heavily favors the Active Voice because it is concise, direct, and assigns clear responsibility. It reduces word count by 20%.
- **When to Use Passive Voice:** Passive voice should strictly be reserved for specific scenarios:
  1. **Diplomacy & Deflecting Blame:** "A mistake was made in the financial report." (Instead of "You made a mistake").
  2. **System Focus:** When the actor is irrelevant or unknown. "The server was rebooted at 3 AM." (It doesn't matter *who* rebooted it, the action is the focus).`
    },
    {
      unit: "Unit II",
      title: "1. The 7 Cs of Effective Business Communication",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The 7 Cs Framework
For communication to be effective in a high-stakes corporate environment, it must strictly adhere to the 7 Cs:

1. **Clear:** State the purpose of the message in the first sentence. Do not use complex vocabulary when a simple word works.
2. **Concise:** Eliminate filler words and redundancies (e.g., use "Now" instead of "At this point in time"). Respect the reader's time.
3. **Concrete:** Use specific data and facts instead of vague generalizations. ("Sales increased by 14%" vs "Sales went up a lot").
4. **Correct:** Zero grammatical, spelling, or factual errors. An error in a proposal destroys credibility.
5. **Considerate (You-Attitude):** Step into the recipient's shoes. Emphasize what the recipient gains, not what you want.
6. **Complete:** Provide all necessary contextual information so the recipient can take immediate action without needing to reply asking for clarification (Who, What, When, Where, Why).
7. **Courteous:** Maintain a professional, polite, and objective tone, even when delivering negative news.

## 2. Professional Email Etiquette
- **Subject Lines:** Must be highly specific and actionable. E.g., \`[Action Required] Q3 Budget Approval by Friday\` instead of \`Budget\`.
- **The BLUF Principle (Bottom Line Up Front):** Put the most critical information or request in the very first paragraph. Executives do not read long introductions.
- **CC vs BCC:** Use CC (Carbon Copy) to keep stakeholders informed who do not need to take action. Use BCC (Blind Carbon Copy) when mass-emailing clients to protect their privacy (preventing them from seeing each other's email addresses).`
    },
    {
      unit: "Unit IV",
      title: "1. Non-Verbal Communication: Kinesics & Proxemics",
      readTime: "9 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Power of Non-Verbal Communication
Psychological studies suggest that over 70% of human communication is non-verbal. In an interview or negotiation, your body speaks louder than your words.

### Kinesics (Body Language)
The study of physical movement, gestures, and posture.
- **Open vs Closed Posture:** Crossing arms across the chest physically blocks the speaker and indicates defensiveness, hostility, or anxiety. An open posture (arms uncrossed, palms visible) indicates honesty and receptiveness.
- **Mirroring:** Subtly mimicking the interviewer's posture builds subconscious rapport.
- **Oculesics (Eye Contact):** Maintaining 60-70% eye contact projects extreme confidence and sincerity. Averting the gaze downwards projects submissiveness or deceit.

### Proxemics (Space Management)
The study of personal space and physical distance during interactions. Anthropologist Edward T. Hall defined 4 zones:
1. **Intimate Zone (0 - 1.5 ft):** Strictly for family and close partners.
2. **Personal Zone (1.5 - 4 ft):** Standard distance for friends and informal conversations.
3. **Social Zone (4 - 12 ft):** The critical zone for professional corporate interactions, interviews, and desk meetings.
4. **Public Zone (12+ ft):** Used for public speaking and auditorium presentations.`
    }
  ],
  questions: [
    {
      unit: "Unit II",
      marks: 10,
      question: "Exhaustively detail the 7 Cs of Effective Business Communication. Provide a poorly written corporate email and rewrite it applying the 7 Cs and the BLUF principle.",
      probability: "High Probability",
      examFrequency: "10-Mark PU Question"
    },
    {
      unit: "Unit IV",
      marks: 10,
      question: "Define Kinesics and Proxemics. How can a candidate weaponize non-verbal communication to project confidence and build rapport during a high-stakes corporate interview?",
      probability: "High Probability",
      examFrequency: "10-Mark Core Theory"
    }
  ],
  solutions: [
    {
      unit: "Unit II",
      question: "Exhaustively detail the 7 Cs of Effective Business Communication. Provide a poorly written corporate email and rewrite it applying the 7 Cs and the BLUF principle.",
      solution: `### Part 1: The 7 Cs
1. **Clear:** The objective of the communication must be immediately apparent.
2. **Concise:** Message must be brief, omitting filler words and redundancies.
3. **Concrete:** Supported by specific facts, figures, and data rather than vague adjectives.
4. **Correct:** Absolute grammatical, factual, and typographical accuracy.
5. **Considerate:** Adopting the "You-Attitude", focusing on the recipient's perspective and benefits.
6. **Complete:** Must contain all Who, What, Where, When, and Why details to allow the recipient to take immediate action.
7. **Courteous:** Professional, respectful, and emotionally neutral tone.

### Part 2: Email Rewrite
**Poor Email:**
*Subject: Hello*
*Hi team, I am writing this to let you know that we have a meeting. It will be about the new software. It is very important so try to be there. I think it will be tomorrow in the afternoon sometime. Let me know.*

**Rewritten Email (Applying 7 Cs & BLUF):**
*Subject: [Action Required] Mandatory Software Migration Briefing - Tomorrow at 2:00 PM*
*Hi Team,*
*(BLUF) Please attend a mandatory briefing tomorrow, Oct 15th at 2:00 PM in Conference Room B regarding the upcoming SAP software migration.*
*We will cover the revised deployment timeline and new security protocols. Please review the attached PDF agenda prior to the meeting.*
*If you have an unresolvable scheduling conflict, please notify me by 5:00 PM today.*
*Best regards,*
*Management*`
    }
  ]
};
