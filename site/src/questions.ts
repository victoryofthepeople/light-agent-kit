export type RouteKey = "work" | "life" | "project" | "ideas";

export interface Chip {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  prompt: string;
  hint?: string;
  kind: "text" | "chips" | "chips-multi" | "tone" | "dump";
  chips?: Chip[];
  mic?: boolean;
}

export const ROOM_LABEL: Record<RouteKey, string> = {
  work: "work",
  life: "life",
  project: "project",
  ideas: "notes",
};

export const BOUNDARY_CHIPS: Chip[] = [
  { label: "Sending messages or email", value: "Sending messages or email on my behalf" },
  { label: "Spending money", value: "Spending any money" },
  { label: "Deleting anything", value: "Deleting files or notes" },
  { label: "Posting publicly", value: "Posting anything publicly" },
];

export const TONE_CHIPS: Chip[] = [
  { label: "Straight to the point", value: "Straight to the point" },
  { label: "Warm and encouraging", value: "Warm and encouraging" },
  { label: "Explain the why", value: "Explain the why behind suggestions" },
  { label: "Short and direct", value: "Short and direct" },
];

const roomQuestions: Question[] = [
  { id: "room1", prompt: "What are you working on or toward right now?", hint: "Work, a project, a goal. A sentence or two.", kind: "text", mic: true },
  { id: "room2", prompt: "What's eating your time or energy right now?", hint: "Messy is fine. Vent like you would to a friend.", kind: "text", mic: true },
  { id: "room3", prompt: "What would a genuinely good week look like?", hint: "When you close the laptop happy, what happened?", kind: "text", mic: true },
  { id: "room4", prompt: "What keeps repeating that you wish was handled for you?", hint: "Invoices, follow-ups, errands, scheduling, whatever it is.", kind: "text", mic: true },
];

export function buildQuestionList(): Question[] {
  return [
    { id: "name", prompt: "What's your first name?", hint: "Just so your workspace knows whose it is.", kind: "text" },
    { id: "days", prompt: "What fills most of your days?", hint: "A sentence or a ramble. Both work.", kind: "text", mic: true },
    ...roomQuestions,
    { id: "boundaries", prompt: "What should your AI always check with you before doing?", hint: "Good assistants ask first. This makes it a rule.", kind: "chips-multi", chips: BOUNDARY_CHIPS },
    { id: "tone", prompt: "How should it talk to you?", kind: "tone", chips: TONE_CHIPS },
    { id: "dump", prompt: "Last one, the fun one. Empty your head.", hint: "Tasks, worries, ideas, half-thoughts. Messy is perfect. Go as long as you want.", kind: "dump", mic: true },
  ];
}

