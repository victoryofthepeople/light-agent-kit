export type RouteKey = "work" | "life" | "project" | "ideas";

export interface Chip {
  label: string;
  value: string;
}

export interface Question {
  id: string;
  prompt: string;
  hint?: string;
  kind: "text" | "chips" | "chips-multi" | "dump";
  chips?: Chip[];
  mic?: boolean;
}

export const ROUTE_CHIPS: Chip[] = [
  { label: "My work or business", value: "work" },
  { label: "My week and life admin", value: "life" },
  { label: "One specific project", value: "project" },
  { label: "My ideas and notes", value: "ideas" },
];

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
  { label: "Straight to the point", value: "Straight to the point. Answer first, detail after." },
  { label: "Warm and encouraging", value: "Warm and encouraging. A friend in my corner, not a service desk." },
  { label: "Explain the why", value: "Explain the why behind suggestions, briefly." },
  { label: "Keep it short", value: "Keep replies short. Expand only when asked." },
];

const roomQuestions: Record<RouteKey, Question[]> = {
  work: [
    { id: "room1", prompt: "In a sentence or two: what's the work?", hint: "What do you do, and for whom?", kind: "text", mic: true },
    { id: "room2", prompt: "What's eating your time right now?", hint: "Messy is fine. Vent like you would to a friend.", kind: "text", mic: true },
    { id: "room3", prompt: "What does a good week look like?", hint: "When you close the laptop happy, what happened?", kind: "text", mic: true },
    { id: "room4", prompt: "What do you do over and over that you wish someone else handled?", hint: "The repeat work. Invoices, follow-ups, scheduling, whatever it is.", kind: "text", mic: true },
  ],
  life: [
    { id: "room1", prompt: "What does a normal week look like for you?", kind: "text", mic: true },
    { id: "room2", prompt: "What's eating your time or energy right now?", hint: "Messy is fine.", kind: "text", mic: true },
    { id: "room3", prompt: "What would a genuinely good week feel like?", kind: "text", mic: true },
    { id: "room4", prompt: "What keeps repeating that you wish was handled for you?", hint: "Errands, planning, reminders, appointments.", kind: "text", mic: true },
  ],
  project: [
    { id: "room1", prompt: "What's the project? A sentence or two.", kind: "text", mic: true },
    { id: "room2", prompt: "Where is it stuck, or what's next?", kind: "text", mic: true },
    { id: "room3", prompt: "What does done look like?", kind: "text", mic: true },
    { id: "room4", prompt: "Which parts repeat that you'd love handed off?", kind: "text", mic: true },
  ],
  ideas: [
    { id: "room1", prompt: "What kinds of ideas do you have most?", hint: "Business, creative, both, something else entirely.", kind: "text", mic: true },
    { id: "room2", prompt: "Where do your ideas live right now?", hint: "A notes app, voice memos, napkins, nowhere.", kind: "text", mic: true },
    { id: "room3", prompt: "What should happen to a good idea after you have it?", kind: "text", mic: true },
    { id: "room4", prompt: "Any idea on your mind right now? Drop it here.", kind: "text", mic: true },
  ],
};

export function buildQuestionList(route: RouteKey | null): Question[] {
  const r = route ?? "ideas";
  return [
    { id: "name", prompt: "What's your first name?", hint: "Just so your workspace knows whose it is.", kind: "text" },
    { id: "days", prompt: "What fills most of your days?", hint: "A sentence or a ramble. Both work.", kind: "text", mic: true },
    { id: "route", prompt: "Where should your AI help first?", hint: "Every room comes in your download. This picks where we go deep today.", kind: "chips", chips: ROUTE_CHIPS },
    ...roomQuestions[r],
    { id: "boundaries", prompt: "What should your AI always check with you before doing?", hint: "Good assistants ask first. This makes it a rule.", kind: "chips-multi", chips: BOUNDARY_CHIPS },
    { id: "tone", prompt: "How should it talk to you?", kind: "chips", chips: TONE_CHIPS },
    { id: "dump", prompt: "Last one, the fun one. Empty your head.", hint: "Tasks, worries, ideas, half-thoughts. Messy is perfect. Go as long as you want.", kind: "dump", mic: true },
  ];
}

