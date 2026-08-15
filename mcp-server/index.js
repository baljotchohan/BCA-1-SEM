#!/usr/bin/env node
/**
 * BCA 1st Semester Academic Portal — Official Model Context Protocol (MCP) Server
 * Transport: Standard Input/Output (stdio) & Streamable HTTP (JSON-RPC 2.0 + REST)
 * Protocol Version: 2024-11-05
 * Author: Baljot Chohan
 * Repository: Panjab University BCA 1st Semester Academic Deck (2026-27 NEP Framework)
 * 
 * DIRECT SITE SYNC:
 * All create, update, delete, and publish actions write directly to `syllabus-data.js`,
 * making all changes by AI live and visible on the website immediately!
 */

const readline = require('readline');
const http = require('http');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const PROTOCOL_VERSION = "2024-11-05";
const DEFAULT_AUTHOR = "Baljot Chohan";

// Paths to site data files
const SYLLABUS_FILE_PATH = path.join(__dirname, '..', 'syllabus-data.js');
const SYLLABUS_BACKUP_PATH = path.join(__dirname, '..', 'syllabus-data.default.js');

const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
const STUDY_TASKS_FILE = path.join(DATA_DIR, 'study-tasks.json');

// Ensure default backup exists
if (!fs.existsSync(SYLLABUS_BACKUP_PATH) && fs.existsSync(SYLLABUS_FILE_PATH)) {
  try {
    fs.copyFileSync(SYLLABUS_FILE_PATH, SYLLABUS_BACKUP_PATH);
  } catch (e) {
    console.error('[MCP Backup] Could not create backup:', e.message);
  }
}

// ----------------------------------------------------------------------------
// LIVE DATA ENGINE: Load & Save Directly from syllabus-data.js
// ----------------------------------------------------------------------------

function loadLiveSyllabusData() {
  try {
    if (fs.existsSync(SYLLABUS_FILE_PATH)) {
      const code = fs.readFileSync(SYLLABUS_FILE_PATH, 'utf8');
      const context = {};
      vm.createContext(context);
      vm.runInContext(code + '\nglobalThis.BCA_1ST_SEM_DATA = BCA_1ST_SEM_DATA;', context);
      if (context.BCA_1ST_SEM_DATA) {
        return context.BCA_1ST_SEM_DATA;
      }
    }
  } catch (err) {
    console.error('[MCP Data Engine] Error loading syllabus-data.js:', err.message);
  }

  // Fallback to backup if primary failed
  try {
    if (fs.existsSync(SYLLABUS_BACKUP_PATH)) {
      const code = fs.readFileSync(SYLLABUS_BACKUP_PATH, 'utf8');
      const context = {};
      vm.createContext(context);
      vm.runInContext(code + '\nglobalThis.BCA_1ST_SEM_DATA = BCA_1ST_SEM_DATA;', context);
      return context.BCA_1ST_SEM_DATA;
    }
  } catch (err) {
    console.error('[MCP Data Engine] Error loading backup:', err.message);
  }

  return { session: "2026-2027", university: "Panjab University, Chandigarh", subjects: [] };
}

const { exec } = require('child_process');

function autoPushToLiveSite(actionDesc = "Auto-publish to live site via MCP") {
  const repoDir = path.join(__dirname, '..');
  const cleanMsg = actionDesc.replace(/"/g, "'");
  const cmd = `git add "${SYLLABUS_FILE_PATH}" && git commit -m "${cleanMsg}" && git push origin main`;
  exec(cmd, { cwd: repoDir }, (error, stdout, stderr) => {
    if (error) {
      console.error('[MCP Auto-Push] Error:', error.message);
    } else {
      console.log('[MCP Auto-Push] Successfully synced changes live to GitHub origin/main!');
    }
  });
}

function saveLiveSyllabusData(data, actionDesc = "Update syllabus-data via MCP") {
  try {
    const fileContent = `/**
 * Panjab University BCA 1st Semester — Comprehensive Academic Study Notes & Curriculum Manual
 * Aligned with the official PU NEP 2026–27 Framework.
 * Auto-synced with MCP Academic Server
 */

const BCA_1ST_SEM_DATA = ${JSON.stringify(data, null, 2)};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BCA_1ST_SEM_DATA;
}
`;
    fs.writeFileSync(SYLLABUS_FILE_PATH, fileContent, 'utf8');
    // Auto-push to live GitHub site
    autoPushToLiveSite(actionDesc);
    return true;
  } catch (err) {
    console.error('[MCP Data Engine] Error saving syllabus-data.js:', err.message);
    return false;
  }
}

function loadJsonFile(filePath, defaultValue = []) {
  try {
    if (fs.existsSync(filePath)) {
      return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
  } catch (err) {
    console.error(`[MCP Storage] Error loading ${filePath}:`, err.message);
  }
  return defaultValue;
}

function saveJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error(`[MCP Storage] Error saving ${filePath}:`, err.message);
    return false;
  }
}

function normalizeSubjectId(input) {
  if (!input) return "web-tech";
  const s = input.toLowerCase().trim();
  if (s.includes("web") || s.includes("html") || s === "wt") return "web-tech";
  if (s.includes("c-") || s.includes("c_") || s.includes("c lang") || s === "c" || s.includes("programming")) return "c-lang";
  if (s.includes("math") || s.includes("stat") || s === "stats") return "math";
  if (s.includes("hard") || s.includes("pc") || s.includes("hardware")) return "hardware";
  if (s.includes("eng") || s.includes("communication")) return "english";
  if (s.includes("pun") || s.includes("hcp") || s.includes("punjabi")) return "punjabi";
  if (s.includes("ecom") || s.includes("digital") || s.includes("env") || s.includes("ecommerce")) return "env-edu";
  return s;
}

// ----------------------------------------------------------------------------
// TOOL DEFINITIONS
// ----------------------------------------------------------------------------

const TOOLS = [
  // 1. Reading & Query Tools
  {
    name: "get_subject_list",
    description: "Returns all 7 official Panjab University BCA 1st Semester subjects with live counts of notes, questions, and unit structures.",
    inputSchema: { type: "object", properties: {} }
  },
  {
    name: "get_syllabus",
    description: "Returns the complete Units I-IV syllabus breakdown, topics, and credit information for a specific subject.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: {
          type: "string",
          description: "Subject ID: 'web-tech', 'c-lang', 'math', 'hardware', 'english', 'punjabi', or 'env-edu' / 'ecommerce'"
        }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "get_unit_details",
    description: "Fetches detailed topic lists and unit structure for a specific Unit of a subject.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        unit_number: { type: "string", description: "Unit Number (e.g. 'Unit I', 'Unit II', 'Unit III', 'Unit IV')" }
      },
      required: ["subject_id", "unit_number"]
    }
  },
  {
    name: "get_digital_notes",
    description: "Fetches all live published study notes from the website codebase, with optional filtering by unit or topic.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        unit_number: { type: "string", description: "Optional: Filter by unit ('Unit I', 'Unit II', 'Unit III', 'Unit IV')" }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "search_academic_deck",
    description: "Performs full-text live search across all notes, topics, question banks, and solutions in the live site database.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search keyword (e.g. 'Bayes', 'Flexbox', 'malloc', 'BIOS', '7 Cs')" }
      },
      required: ["query"]
    }
  },
  {
    name: "get_question_bank",
    description: "Retrieves real Panjab University exam questions (2-mark compulsory & 8/10-mark long questions) directly from the live site database.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        question_type: {
          type: "string",
          enum: ["all", "2-mark", "8-mark", "10-mark"],
          default: "all"
        }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "get_question_solution",
    description: "Retrieves the verified model solution, code example, or mathematical proof for a question from the live site database.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        question_id: { type: "string", description: "Question ID or search snippet" }
      },
      required: ["subject_id", "question_id"]
    }
  },
  {
    name: "get_exam_pattern",
    description: "Returns official Panjab University examination structure, passing criteria, Section A & B guidelines, and assessment scheme.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Optional subject ID" }
      }
    }
  },

  // 2. LIVE SITE AUTHORING & PUBLISHING TOOLS (Instantly Updates syllabus-data.js)
  {
    name: "create_and_publish_note",
    description: "Creates and publishes a new university-standard digital study note directly into the live website codebase (syllabus-data.js). The note appears immediately on the published academic deck.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID: 'web-tech', 'c-lang', 'math', 'hardware', 'english', 'punjabi', 'env-edu'" },
        unit: { type: "string", description: "Unit (e.g. 'Unit I', 'Unit II', 'Unit III', 'Unit IV')", default: "Unit I" },
        title: { type: "string", description: "Note Title (e.g. '1. DNS Resolution Architecture & SSL Handshake')" },
        content: { type: "string", description: "Full Markdown note content with explanations, diagrams, code blocks, or formulas" },
        author: { type: "string", description: "Author name (defaults to 'Baljot Chohan')", default: DEFAULT_AUTHOR },
        readTime: { type: "string", description: "Estimated read time (e.g. '8 min read')", default: "7 min read" }
      },
      required: ["subject_id", "title", "content"]
    }
  },
  {
    name: "publish_digital_note",
    description: "Alias for create_and_publish_note. Publishes study note live to the website codebase.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        unit: { type: "string", description: "Unit number", default: "Unit I" },
        title: { type: "string", description: "Note title" },
        content: { type: "string", description: "Full markdown content" },
        author: { type: "string", description: "Author name", default: DEFAULT_AUTHOR },
        readTime: { type: "string", description: "Estimated read time", default: "7 min read" }
      },
      required: ["subject_id", "title", "content"]
    }
  },
  {
    name: "update_digital_note",
    description: "Updates an existing study note in the live site database (syllabus-data.js).",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        note_index: { type: "integer", description: "0-based index of note, or leave blank if matching by title" },
        title_match: { type: "string", description: "Title string to search for note to update" },
        new_title: { type: "string", description: "Updated note title" },
        new_content: { type: "string", description: "Updated note content" },
        new_unit: { type: "string", description: "Updated unit" },
        new_readTime: { type: "string", description: "Updated read time" }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "delete_digital_note",
    description: "Deletes a specific study note from the live website codebase (syllabus-data.js).",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        note_index: { type: "integer", description: "0-based index of the note to delete" },
        title_match: { type: "string", description: "Or title keyword of the note to delete" }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "remove_all_notes",
    description: "Removes all study notes from the live website codebase (syllabus-data.js). Can target a single subject or all subjects.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: {
          type: "string",
          description: "Subject ID ('web-tech', 'c-lang', 'math', 'hardware', 'english', 'punjabi', 'env-edu') or 'all' to wipe all notes across all subjects",
          default: "all"
        }
      }
    }
  },
  {
    name: "publish_question_and_solution",
    description: "Publishes a new exam question and its verified model answer directly to the live website codebase (syllabus-data.js).",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        unit: { type: "string", description: "Unit number (e.g. 'Unit I')", default: "Unit I" },
        type: { type: "string", enum: ["2-mark", "8-mark", "10-mark"], default: "8-mark" },
        question: { type: "string", description: "Exam question text" },
        solution: { type: "string", description: "Full verified step-by-step model solution, code, or math proof" },
        marks: { type: "integer", description: "Mark weightage (e.g. 2, 8, 10)", default: 8 }
      },
      required: ["subject_id", "question", "solution"]
    }
  },
  {
    name: "delete_question",
    description: "Deletes a question and its corresponding solution from the live website codebase (syllabus-data.js).",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        question_id: { type: "string", description: "Question ID (e.g. 'wt-q1') or index" },
        question_text_match: { type: "string", description: "Or keyword from question" }
      },
      required: ["subject_id"]
    }
  },
  {
    name: "remove_all_questions",
    description: "Removes all questions and solutions from the live website codebase (syllabus-data.js). Can target a single subject or all subjects.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: {
          type: "string",
          description: "Subject ID ('web-tech', 'c-lang', 'math', 'hardware', 'english', 'punjabi', 'env-edu') or 'all' to remove all questions across all subjects",
          default: "all"
        }
      }
    }
  },
  {
    name: "wipe_all_content",
    description: "Completely removes all study notes, all questions, and all solutions across all subjects from the live website codebase (syllabus-data.js). Fully authorized admin tool by Baljot Chohan.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },
  {
    name: "push_to_live_site",
    description: "Explicitly commits and pushes all local website files (syllabus-data.js) to the live GitHub repository (origin/main) to update the production website.",
    inputSchema: {
      type: "object",
      properties: {
        commit_message: { type: "string", description: "Optional custom commit message", default: "Update live site from MCP" }
      }
    }
  },
  {
    name: "reset_curriculum_to_default",
    description: "Restores syllabus-data.js back to the original master curriculum, default notes, and question banks from the default backup.",
    inputSchema: {
      type: "object",
      properties: {}
    }
  },

  // 3. Study Tracker Tools
  {
    name: "add_study_task",
    description: "Adds a study task or revision milestone to the study planner.",
    inputSchema: {
      type: "object",
      properties: {
        subject_id: { type: "string", description: "Subject ID" },
        task: { type: "string", description: "Task description" },
        due_date: { type: "string", description: "Target date (YYYY-MM-DD)" },
        priority: { type: "string", enum: ["high", "medium", "low"], default: "medium" }
      },
      required: ["subject_id", "task"]
    }
  },
  {
    name: "get_study_tasks",
    description: "Retrieves study planner tasks.",
    inputSchema: {
      type: "object",
      properties: {
        completed: { type: "boolean", description: "Filter by completion status" }
      }
    }
  },
  {
    name: "get_hub_stats",
    description: "Returns live counts of total subjects, units, notes, questions, and solutions in the live site database.",
    inputSchema: { type: "object", properties: {} }
  }
];

const PROMPTS = [
  {
    name: "create_study_guide",
    description: "Generates an exam-ready, comprehensive study guide for any 1st semester topic and publishes it live to the site.",
    arguments: [
      { name: "subject_id", description: "Subject ID (e.g. web-tech, c-lang, math)", required: true },
      { name: "unit_number", description: "Unit number (e.g. Unit I, Unit II)", required: true },
      { name: "topic", description: "Specific topic name", required: true }
    ]
  },
  {
    name: "solve_and_publish_question",
    description: "Solves an official PU exam question with derivations/code and publishes it live to the question bank.",
    arguments: [
      { name: "subject_id", description: "Subject ID", required: true },
      { name: "question", description: "Exam question text", required: true },
      { name: "marks", description: "Target marks (2, 8, or 10)", required: false }
    ]
  }
];

const RESOURCES = [
  {
    uri: "bca1://syllabus/master",
    name: "Live Master Syllabus - Panjab University BCA 1st Sem",
    mimeType: "application/json",
    description: "Live master syllabus data loaded from syllabus-data.js."
  },
  {
    uri: "bca1://scheme/marks",
    name: "Marks and Assessment Scheme",
    mimeType: "application/json",
    description: "Credit, internal, external, and practical marks breakdown."
  }
];

// ----------------------------------------------------------------------------
// TOOL EXECUTION LOGIC
// ----------------------------------------------------------------------------

async function executeTool(name, args = {}) {
  const masterData = loadLiveSyllabusData();

  switch (name) {
    // ----------------- READ TOOLS -----------------
    case "get_subject_list": {
      const list = (masterData.subjects || []).map(s => ({
        id: s.id,
        code: s.code,
        title: s.title,
        type: s.type,
        credits: s.credits,
        totalUnits: (s.units || []).length,
        totalNotes: (s.notes || []).length,
        totalQuestions: (s.questions || []).length,
        totalSolutions: (s.solutions || []).length
      }));
      return {
        session: masterData.session || "2026-2027",
        framework: "Panjab University NEP-2020",
        totalSubjects: list.length,
        subjects: list
      };
    }

    case "get_syllabus": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);
      return {
        id: sub.id,
        code: sub.code,
        title: sub.title,
        type: sub.type,
        credits: sub.credits,
        theoryHours: sub.theoryHours,
        practicalHours: sub.practicalHours,
        assessment: sub.assessment,
        units: sub.units || []
      };
    }

    case "get_unit_details": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      const unitNum = (args.unit_number || "").toLowerCase().trim();
      const unit = (sub.units || []).find(u => u.unitNumber.toLowerCase().includes(unitNum) || unitNum.includes(u.unitNumber.toLowerCase()));
      if (!unit) throw new Error(`Unit '${args.unit_number}' not found for ${sub.title}.`);
      return {
        subject: sub.title,
        code: sub.code,
        unit: unit.unitNumber,
        title: unit.title,
        topics: unit.topics || []
      };
    }

    case "get_digital_notes": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      let notes = sub.notes || [];
      if (args.unit_number) {
        const uQuery = args.unit_number.toLowerCase();
        notes = notes.filter(n => (n.unit || "").toLowerCase().includes(uQuery));
      }

      return {
        subject: sub.title,
        code: sub.code,
        totalNotes: notes.length,
        notes: notes.map((n, idx) => ({
          index: idx,
          unit: n.unit,
          title: n.title,
          readTime: n.readTime || "7 min read",
          author: n.author || DEFAULT_AUTHOR,
          content: n.content
        }))
      };
    }

    case "search_academic_deck": {
      const q = (args.query || "").toLowerCase().trim();
      if (!q) throw new Error("Search query cannot be empty.");

      const results = [];
      for (const sub of (masterData.subjects || [])) {
        // Search topics
        for (const unit of (sub.units || [])) {
          for (const topic of (unit.topics || [])) {
            if (topic.toLowerCase().includes(q)) {
              results.push({
                type: "syllabus_topic",
                subject: sub.title,
                unit: unit.unitNumber,
                title: topic
              });
            }
          }
        }
        // Search notes
        for (let idx = 0; idx < (sub.notes || []).length; idx++) {
          const n = sub.notes[idx];
          if (n.title.toLowerCase().includes(q) || (n.content && n.content.toLowerCase().includes(q))) {
            results.push({
              type: "study_note",
              subject: sub.title,
              unit: n.unit,
              noteIndex: idx,
              title: n.title,
              snippet: (n.content || "").substring(0, 150) + "..."
            });
          }
        }
        // Search questions
        for (const qObj of (sub.questions || [])) {
          if (qObj.question.toLowerCase().includes(q)) {
            results.push({
              type: "question",
              subject: sub.title,
              unit: qObj.unit,
              questionId: qObj.id,
              question: qObj.question,
              weightage: qObj.type
            });
          }
        }
      }

      return {
        query: args.query,
        totalMatches: results.length,
        results: results.slice(0, 20)
      };
    }

    case "get_question_bank": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      let qs = sub.questions || [];
      if (args.question_type && args.question_type !== "all") {
        qs = qs.filter(q => q.type === args.question_type);
      }

      return {
        subject: sub.title,
        code: sub.code,
        totalQuestions: qs.length,
        questions: qs
      };
    }

    case "get_question_solution": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      const qQuery = (args.question_id || "").toLowerCase().trim();
      const sol = (sub.solutions || []).find(s => 
        (s.id && s.id.toLowerCase() === qQuery) || 
        (s.questionId && s.questionId.toLowerCase() === qQuery) ||
        (s.question && s.question.toLowerCase().includes(qQuery))
      );

      if (!sol) {
        throw new Error(`Solution for question '${args.question_id}' not found in ${sub.title}.`);
      }

      return {
        subject: sub.title,
        questionId: sol.questionId || sol.id,
        unit: sol.unit,
        type: sol.type,
        question: sol.question,
        solution: sol.solution || sol.steps || sol.finalAnswer,
        codeSnippet: sol.code || null,
        mathFormula: sol.formula || null
      };
    }

    case "get_exam_pattern": {
      return {
        university: "Panjab University, Chandigarh",
        semester: "BCA 1st Semester (NEP-2020)",
        marksScheme: masterData.marksScheme || []
      };
    }

    // ----------------- LIVE SITE PUBLISHING & AUTHORING TOOLS -----------------
    case "create_and_publish_note":
    case "publish_digital_note": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found in curriculum.`);

      if (!sub.notes) sub.notes = [];

      const newNote = {
        unit: args.unit || "Unit I",
        title: args.title,
        readTime: args.readTime || "7 min read",
        author: args.author || DEFAULT_AUTHOR,
        content: args.content
      };

      sub.notes.push(newNote);
      const saved = saveLiveSyllabusData(masterData);

      if (!saved) throw new Error("Failed to write updated notes to syllabus-data.js");

      return {
        success: true,
        message: `🎉 Note published directly into the live website codebase!`,
        subject: sub.title,
        unit: newNote.unit,
        title: newNote.title,
        totalNotesForSubject: sub.notes.length,
        status: "LIVE_AND_PUBLISHED"
      };
    }

    case "update_digital_note": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      if (!sub.notes || sub.notes.length === 0) {
        throw new Error(`No notes found to update in ${sub.title}.`);
      }

      let noteIndex = -1;
      if (typeof args.note_index === "number" && args.note_index >= 0 && args.note_index < sub.notes.length) {
        noteIndex = args.note_index;
      } else if (args.title_match) {
        const qTitle = args.title_match.toLowerCase();
        noteIndex = sub.notes.findIndex(n => n.title.toLowerCase().includes(qTitle));
      }

      if (noteIndex === -1) {
        throw new Error(`Could not find note matching index: ${args.note_index} or title: '${args.title_match}'`);
      }

      const note = sub.notes[noteIndex];
      if (args.new_title) note.title = args.new_title;
      if (args.new_content) note.content = args.new_content;
      if (args.new_unit) note.unit = args.new_unit;
      if (args.new_readTime) note.readTime = args.new_readTime;

      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `✅ Note #${noteIndex} updated successfully in syllabus-data.js!`,
        updatedNote: note
      };
    }

    case "delete_digital_note": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      if (!sub.notes || sub.notes.length === 0) {
        return { success: true, message: `No notes present in ${sub.title} to delete.` };
      }

      let noteIndex = -1;
      if (typeof args.note_index === "number" && args.note_index >= 0 && args.note_index < sub.notes.length) {
        noteIndex = args.note_index;
      } else if (args.title_match) {
        const qTitle = args.title_match.toLowerCase();
        noteIndex = sub.notes.findIndex(n => n.title.toLowerCase().includes(qTitle));
      }

      if (noteIndex === -1) {
        throw new Error(`Note not found to delete.`);
      }

      const deleted = sub.notes.splice(noteIndex, 1)[0];
      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `🗑️ Note '${deleted.title}' permanently deleted from ${sub.title}.`,
        remainingNotes: sub.notes.length
      };
    }

    case "remove_all_notes": {
      let countRemoved = 0;
      const targetSub = args.subject_id ? args.subject_id.toLowerCase().trim() : "all";

      if (targetSub === "all" || targetSub === "*") {
        for (const sub of (masterData.subjects || [])) {
          countRemoved += (sub.notes || []).length;
          sub.notes = [];
        }
      } else {
        const subId = normalizeSubjectId(targetSub);
        const sub = (masterData.subjects || []).find(s => s.id === subId);
        if (sub) {
          countRemoved += (sub.notes || []).length;
          sub.notes = [];
        }
      }

      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `🗑️ Successfully removed ${countRemoved} notes from live website files.`,
        scope: targetSub
      };
    }

    case "publish_question_and_solution": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      if (!sub.questions) sub.questions = [];
      if (!sub.solutions) sub.solutions = [];

      const qId = `${subId}-q-${Date.now()}`;
      const newQuestion = {
        id: qId,
        unit: args.unit || "Unit I",
        type: args.type || "8-mark",
        question: args.question,
        marks: args.marks || (args.type === "2-mark" ? 2 : 8),
        probability: "High Probability (PU Exam)"
      };

      const newSolution = {
        id: `sol-${qId}`,
        questionId: qId,
        question: args.question,
        unit: args.unit || "Unit I",
        type: args.type || "8-mark",
        solution: args.solution,
        code: args.code || "",
        formula: args.formula || ""
      };

      sub.questions.push(newQuestion);
      sub.solutions.push(newSolution);

      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `🎉 Question & verified model answer published directly to live website!`,
        questionId: qId,
        subject: sub.title,
        unit: newQuestion.unit,
        type: newQuestion.type,
        totalQuestionsInSubject: sub.questions.length
      };
    }

    case "delete_question": {
      const subId = normalizeSubjectId(args.subject_id);
      const sub = (masterData.subjects || []).find(s => s.id === subId);
      if (!sub) throw new Error(`Subject '${args.subject_id}' not found.`);

      const qQuery = (args.question_id || args.question_text_match || "").toLowerCase().trim();
      const qIdx = (sub.questions || []).findIndex(q => 
        (q.id && q.id.toLowerCase() === qQuery) ||
        (q.question && q.question.toLowerCase().includes(qQuery))
      );

      if (qIdx === -1) {
        throw new Error(`Question not found to delete in ${sub.title}.`);
      }

      const deletedQ = sub.questions.splice(qIdx, 1)[0];
      // Also remove solution
      if (sub.solutions) {
        const solIdx = sub.solutions.findIndex(s => s.questionId === deletedQ.id || s.question === deletedQ.question);
        if (solIdx !== -1) sub.solutions.splice(solIdx, 1);
      }

      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `🗑️ Question '${deletedQ.question}' deleted from ${sub.title}.`,
        remainingQuestions: sub.questions.length
      };
    }

    case "remove_all_questions": {
      let countRemoved = 0;
      const targetSub = args.subject_id ? args.subject_id.toLowerCase().trim() : "all";

      if (targetSub === "all" || targetSub === "*") {
        for (const sub of (masterData.subjects || [])) {
          countRemoved += (sub.questions || []).length;
          sub.questions = [];
          sub.solutions = [];
        }
      } else {
        const subId = normalizeSubjectId(targetSub);
        const sub = (masterData.subjects || []).find(s => s.id === subId);
        if (sub) {
          countRemoved += (sub.questions || []).length;
          sub.questions = [];
          sub.solutions = [];
        }
      }

      saveLiveSyllabusData(masterData);

      return {
        success: true,
        message: `🗑️ Successfully removed ${countRemoved} questions & solutions from live website files.`,
        scope: targetSub
      };
    }

    case "wipe_all_content": {
      let notesRemoved = 0;
      let questionsRemoved = 0;
      for (const sub of (masterData.subjects || [])) {
        notesRemoved += (sub.notes || []).length;
        questionsRemoved += (sub.questions || []).length;
        sub.notes = [];
        sub.questions = [];
        sub.solutions = [];
      }
      saveLiveSyllabusData(masterData);
      return {
        success: true,
        message: `🗑️ Entire academic deck wiped clean! Removed ${notesRemoved} notes and ${questionsRemoved} questions/solutions from live files. Ready for new AI generation.`,
        status: "EMPTY_AND_LIVE"
      };
    }

    case "push_to_live_site": {
      const commitMsg = args.commit_message || "Manual push from MCP";
      autoPushToLiveSite(commitMsg);
      return {
        success: true,
        message: `🚀 Changes are being pushed live to GitHub origin/main! Production website will update within seconds.`,
        commitMessage: commitMsg
      };
    }

    case "reset_curriculum_to_default": {
      if (fs.existsSync(SYLLABUS_BACKUP_PATH)) {
        fs.copyFileSync(SYLLABUS_BACKUP_PATH, SYLLABUS_FILE_PATH);
        return {
          success: true,
          message: "🔄 Live website curriculum, notes, and question bank have been fully restored from default backup!"
        };
      }
      throw new Error("Default backup file not found.");
    }

    // ----------------- STUDY PLANNER TOOLS -----------------
    case "add_study_task": {
      const subId = normalizeSubjectId(args.subject_id);
      const tasks = loadJsonFile(STUDY_TASKS_FILE, []);
      const newTask = {
        id: "task-" + Date.now(),
        subject_id: subId,
        task: args.task,
        due_date: args.due_date || new Date().toISOString().split('T')[0],
        priority: args.priority || "medium",
        completed: false,
        createdAt: new Date().toISOString()
      };
      tasks.push(newTask);
      saveJsonFile(STUDY_TASKS_FILE, tasks);
      return { success: true, message: "Study task saved locally.", task: newTask };
    }

    case "get_study_tasks": {
      let tasks = loadJsonFile(STUDY_TASKS_FILE, []);
      if (typeof args.completed === "boolean") {
        tasks = tasks.filter(t => t.completed === args.completed);
      }
      return { totalTasks: tasks.length, tasks };
    }

    case "get_hub_stats": {
      let totalNotes = 0;
      let totalQuestions = 0;
      let totalSolutions = 0;
      let totalUnits = 0;

      for (const sub of (masterData.subjects || [])) {
        totalNotes += (sub.notes || []).length;
        totalQuestions += (sub.questions || []).length;
        totalSolutions += (sub.solutions || []).length;
        totalUnits += (sub.units || []).length;
      }

      const tasks = loadJsonFile(STUDY_TASKS_FILE, []);

      return {
        totalSubjects: (masterData.subjects || []).length,
        totalUnits: totalUnits,
        totalPublishedNotes: totalNotes,
        totalPublishedQuestions: totalQuestions,
        totalPublishedSolutions: totalSolutions,
        activeStudyTasks: tasks.filter(t => !t.completed).length,
        status: "LIVE_CONNECTED"
      };
    }

    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}

// ----------------------------------------------------------------------------
// JSON-RPC 2.0 PROTOCOL DISPATCHER
// ----------------------------------------------------------------------------

async function handleMcpRpc(payload) {
  if (!payload || typeof payload !== "object") {
    return { jsonrpc: "2.0", id: null, error: { code: -32600, message: "Invalid Request" } };
  }

  const { jsonrpc, id, method, params } = payload;
  const reqId = id !== undefined ? id : null;

  if (method === "initialize") {
    return {
      jsonrpc: "2.0",
      id: reqId,
      result: {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: {
          tools: {},
          resources: {},
          prompts: {}
        },
        serverInfo: {
          name: "bca-1st-sem-mcp",
          version: "2.0.0",
          author: DEFAULT_AUTHOR
        }
      }
    };
  }

  if (method === "notifications/initialized" || method === "initialized") {
    return null;
  }

  if (method === "ping") {
    return { jsonrpc: "2.0", id: reqId, result: {} };
  }

  if (method === "tools/list") {
    return { jsonrpc: "2.0", id: reqId, result: { tools: TOOLS } };
  }

  if (method === "tools/call") {
    const { name, arguments: toolArgs } = params || {};
    try {
      const output = await executeTool(name, toolArgs || {});
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          content: [
            {
              type: "text",
              text: JSON.stringify(output, null, 2)
            }
          ]
        }
      };
    } catch (err) {
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          isError: true,
          content: [
            {
              type: "text",
              text: `Error executing ${name}: ${err.message}`
            }
          ]
        }
      };
    }
  }

  if (method === "resources/list") {
    return { jsonrpc: "2.0", id: reqId, result: { resources: RESOURCES } };
  }

  if (method === "resources/read") {
    const uri = params && params.uri;
    const masterData = loadLiveSyllabusData();

    if (uri === "bca1://syllabus/master") {
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          contents: [{
            uri,
            mimeType: "application/json",
            text: JSON.stringify(masterData, null, 2)
          }]
        }
      };
    }
    if (uri === "bca1://scheme/marks") {
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          contents: [{
            uri,
            mimeType: "application/json",
            text: JSON.stringify(masterData.marksScheme || [], null, 2)
          }]
        }
      };
    }
    return { jsonrpc: "2.0", id: reqId, error: { code: -32602, message: `Resource '${uri}' not found` } };
  }

  if (method === "prompts/list") {
    return { jsonrpc: "2.0", id: reqId, result: { prompts: PROMPTS } };
  }

  if (method === "prompts/get") {
    const pName = params && params.name;
    const pArgs = (params && params.arguments) || {};

    if (pName === "create_study_guide") {
      const subId = normalizeSubjectId(pArgs.subject_id);
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          description: `Create Panjab University deep conceptual study guide for ${subId}`,
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `You are an elite Computer Science and Mathematics Professor for Panjab University BCA 1st Semester.\nWrite a comprehensive, publication-grade conceptual study guide for '${pArgs.topic}' under '${pArgs.unit_number}' for subject '${subId}'.\n\nStructure the guide with the official BCA Academic standard:\n1. 📘 **Core Theoretical Foundations & Definitions:** Detailed concepts, historical evolution, and architectural principles.\n2. 📊 **Visual Simulation & Architecture Diagram:** Include the matching interactive visual tag (e.g. [visual:css-box-model], [visual:c-pointer-memory], [visual:stats-normal-dist]) and a clean ASCII flow/memory diagram.\n3. 💻 **Complete Verified Code / Mathematical Derivations:** Full code examples with time/space complexity or step-by-step LaTeX math proofs.\n4. ❓ **High-Yield PU Exam Question Bank:** 2 compulsory 2-mark questions + 2 analytical 8/10-mark long questions.\n5. 💡 **Verified Step-by-Step Model Answers:** Complete answers according to PU marking criteria.\n6. ⚡ **Exam Tips, Traps & Summary Callout:** Common student mistakes and high-yield takeaway checklist.\n\nAuthor: Baljot Chohan\n\nAfter formulating, automatically call 'create_and_publish_note' to publish it live to the website!`
              }
            }
          ]
        }
      };
    }

    if (pName === "solve_and_publish_question") {
      return {
        jsonrpc: "2.0",
        id: reqId,
        result: {
          description: "Solve PU Question and Publish",
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Provide an official PU model answer for:\n${pArgs.question}\nTarget Marks: ${pArgs.marks || 8}\nAfter formulating the solution, call 'publish_question_and_solution' to add it to the live question bank.`
              }
            }
          ]
        }
      };
    }

    return { jsonrpc: "2.0", id: reqId, error: { code: -32602, message: `Prompt '${pName}' not found` } };
  }

  return { jsonrpc: "2.0", id: reqId, error: { code: -32601, message: `Method '${method}' not supported` } };
}

// ----------------------------------------------------------------------------
// SERVER RUNTIME (STDIO / HTTP)
// ----------------------------------------------------------------------------

const args = process.argv.slice(2);
const isHttp = args.includes('--http') || args.some(a => a.startsWith('--port='));

if (isHttp) {
  const portArg = args.find(a => a.startsWith('--port='));
  const PORT = portArg ? parseInt(portArg.split('=')[1], 10) : 8080;

  const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
      res.writeHead(200);
      return res.end();
    }

    // Static file server fallback for web portal assets (index.html, syllabus-data.js, etc.)
    if (req.method === 'GET') {
      if (req.url === '/status' || req.url === '/mcp-status') {
        const stats = await executeTool('get_hub_stats');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          status: "online",
          name: "bca-1st-sem-mcp",
          version: "2.0.0",
          author: DEFAULT_AUTHOR,
          protocolVersion: PROTOCOL_VERSION,
          toolsCount: TOOLS.length,
          liveStats: stats
        }, null, 2));
      }

      // Parse clean pathname
      let reqPath = req.url.split('?')[0];
      if (reqPath === '/' || reqPath === '') reqPath = '/index.html';
      
      const filePath = path.join(__dirname, '..', reqPath);
      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        const mimeTypes = {
          '.html': 'text/html; charset=utf-8',
          '.js': 'text/javascript; charset=utf-8',
          '.css': 'text/css; charset=utf-8',
          '.json': 'application/json; charset=utf-8',
          '.png': 'image/png',
          '.jpg': 'image/jpeg',
          '.svg': 'image/svg+xml',
          '.ico': 'image/x-icon'
        };
        const contentType = mimeTypes[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        return fs.createReadStream(filePath).pipe(res);
      }
    }

    if (req.method === 'POST') {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          const payload = JSON.parse(body);
          const response = await handleMcpRpc(payload);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(response));
        } catch (e) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error: " + e.message } }));
        }
      });
      return;
    }

    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: "File not found" }));
  });

  server.listen(PORT, () => {
    console.error(`\n🚀 BCA 1st Sem MCP Server running on HTTP mode at http://localhost:${PORT}/mcp\n`);
  });
} else {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

  rl.on('line', async (line) => {
    if (!line || !line.trim()) return;
    try {
      const payload = JSON.parse(line);
      const response = await handleMcpRpc(payload);
      if (response !== null && response !== undefined) {
        process.stdout.write(JSON.stringify(response) + '\n');
      }
    } catch (e) {
      process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error: " + e.message } }) + '\n');
    }
  });
}
