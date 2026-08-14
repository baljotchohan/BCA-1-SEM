const SUBJECT_PUNJABI = {
  id: "punjabi",
  code: "BCA-AEC-2-106A",
  title: "Punjabi (Compulsory) / HCP",
  type: "Ability Enhancement",
  credits: 2,
  theoryHours: 30,
  practicalHours: 0,
  assessment: { internal: 5, external: 45, practical: 0, total: 50 },
  icon: "fa-om",
  bgClass: "bg-orange",
  description: "Comprehensive study of Punjabi literature, grammar, and cultural heritage. Includes analysis of poetry, prose, and historical texts to foster regional linguistic proficiency.",
  tags: ["Literature", "Grammar", "Poetry", "Prose", "Cultural Heritage"],
  units: [
    {
      unitNumber: "Unit I",
      title: "Modern Punjabi Poetry",
      topics: [
        "1. Analysis of Bhai Vir Singh's mystic poetry and naturalism",
        "2. Progressive themes in Prof. Mohan Singh's works",
        "3. Amrita Pritam: Feminism and Partition literature",
        "4. Shiv Kumar Batalvi: Romanticism and tragedy"
      ]
    },
    {
      unitNumber: "Unit II",
      title: "Punjabi Prose & Short Stories",
      topics: [
        "1. Evolution of the Punjabi Short Story (Niki Kahani)",
        "2. Sujan Singh's psychological realism",
        "3. Kulwant Singh Virk: Rural life and existentialism",
        "4. Essay writing: Structure, idioms, and cultural context"
      ]
    },
    {
      unitNumber: "Unit III",
      title: "Applied Grammar & Linguistics",
      topics: [
        "1. Gurmukhi Script: Orthography, vowels (Laga Matra) and consonants",
        "2. Noun, Pronoun, Verb, and Adjective morphology",
        "3. Syntax structure and sentence correction",
        "4. Translation mechanics: English to Punjabi"
      ]
    },
    {
      unitNumber: "Unit IV",
      title: "Cultural History of Punjab",
      topics: [
        "1. Origins and evolution of the Punjabi language",
        "2. The impact of the Bhakti and Sufi movements (Baba Farid, Bulleh Shah)",
        "3. Folklore, traditional motifs, and oral literature",
        "4. Modern media and the preservation of Punjabi culture"
      ]
    }
  ],
  notes: [
    {
      unit: "Unit I",
      title: "1. Modern Punjabi Poetry: Themes and Evolution",
      readTime: "10 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. Bhai Vir Singh: The Father of Modern Punjabi Literature
Bhai Vir Singh transitioned Punjabi poetry from traditional Qissa (romantic epics) to modern, short lyric poetry. His work is heavily characterized by spiritual mysticism, deep reverence for Sikh philosophy, and the personification of nature. He used natural elements (like the Dew Drop or the Kikar tree) as metaphors for the human soul's longing to merge with the divine.

## 2. Amrita Pritam & The Trauma of Partition
Amrita Pritam remains one of the most prominent female voices in Punjabi literature. Her seminal poem *'Ajj Aakhaan Waris Shah Nu'* (Today I invoke Waris Shah) is a devastating elegy for the horrific violence, mass rape, and cultural destruction during the 1947 partition of Punjab. She shifted the poetic focus toward feminism, social realism, and raw human suffering.

## 3. Shiv Kumar Batalvi: The Keats of Punjabi Poetry
Known for his profound romanticism, melancholia, and themes of separation (Birha), Batalvi introduced complex psychological depth to Punjabi verse. His masterpiece *'Loona'* won the Sahitya Akademi Award, famously retelling the ancient legend of Puran Bhagat from the perspective of the marginalized female antagonist, providing her with psychological justification and agency.`
    },
    {
      unit: "Unit III",
      title: "1. Applied Grammar: Orthography and Syntax",
      readTime: "8 min read",
      author: "Panjab University Expert Panel",
      content: `## 1. The Gurmukhi Script
The Punjabi language is written in the Gurmukhi script, standardized by the second Sikh Guru, Guru Angad Dev Ji. It is a phonetic script read from left to right.
- **Consonants (Vianjan):** The script contains 35 original letters, plus 6 additional letters created by adding a dot (bindi) beneath existing letters to accommodate Persian and Arabic sounds (e.g., *Sasa Bindi* for 'sh').
- **Vowels (Laga Matra):** Unlike English, vowels in Gurmukhi are independent marks applied to the consonants (e.g., Sihari, Bihari, Mukta, Kanna).
- **Auxiliary Marks (Lagaakhar):** Bindi and Tippi are used for nasalization, and Adhak is used to double the sound of the succeeding consonant, changing the entire meaning of a word (e.g., 'Pata' = Address, vs 'Patta' = Leaf/Card).`
    }
  ],
  questions: [
    {
      unit: "Unit I",
      marks: 10,
      question: "Critically analyze the central theme of Amrita Pritam's poem 'Ajj Aakhaan Waris Shah Nu' in the context of the 1947 Partition.",
      probability: "Very High Probability",
      examFrequency: "10-Mark Core Literature Question"
    },
    {
      unit: "Unit III",
      marks: 2,
      question: "What is the phonetic function of the 'Adhak' symbol in Gurmukhi orthography? Provide an example.",
      probability: "High Probability",
      examFrequency: "PU Grammar Section"
    }
  ],
  solutions: [
    {
      unit: "Unit III",
      question: "What is the phonetic function of the 'Adhak' symbol in Gurmukhi orthography? Provide an example.",
      solution: `### Function of the Adhak
In the Gurmukhi script, the **Adhak ( ੱ )** is a diacritic mark placed above and slightly to the left of a consonant. Its primary phonetic function is to strictly **double or stress the sound of the succeeding consonant**. It acts similarly to a double consonant in English orthography.

### Semantic Importance
The use of Adhak is critical because omitting it entirely changes the meaning of the word.
- **Example without Adhak:** ਪਤਾ (Pata) — Translates to "Address" or "Knowledge/Idea".
- **Example with Adhak:** ਪੱਤਾ (Patta) — The Adhak doubles the 't' sound. Translates to "Leaf" or "Playing Card".`
    }
  ]
};
