# Capability Discovery

## Purpose

Find where the user's real life is repetitive, scattered, or attention-heavy, translate that into concrete agent capabilities, and write the result into the three maps so the assistant can safely act on it:

- `profile/capability-map.md`: what the assistant can do now.
- `profile/power-map.md`: what it could grow into next.
- `profile/permission-map.md`: what needs approval.

This is the skill that turns Light Agent Kit from a set of files into an assistant that understands what it could actually do for this person.

## Use When

- During onboarding, at the capability discovery step.
- The user asks "what can you actually do for me?"
- The user's work, tools, or goals change.
- It has been a while and the maps look stale during an assistant checkup.

## Read First

- `profile/me.md`
- `profile/goals.md`
- `profile/preferences.md`
- `profile/taste-and-standards.md`
- `profile/capability-map.md`
- `profile/power-map.md`
- `profile/permission-map.md`
- `home.md`
- `POWER-CATALOG.md`
- `POWER-RECIPES.md`
- `templates/power/power-activation-card.md`
- `tasks/active.md`
- `projects/`

## Steps

1. Ask about friction, one question at a time. Listen for the work behind the answer, not just the words:
   - What do you repeat every day or week?
   - What takes more attention than it deserves?
   - What makes you dig through information before you can act?
   - What would be valuable if it happened on its own, on a schedule?
   - What decisions would be easier with better context in front of you?
2. For each friction point, name the agent capability behind it (see Translation below).
3. Propose three to five concrete moves in plain language: "An agent could ___ for you." For each, state the access it needs and whether that access exists yet.
4. Let the user pick what matters now. Keep it to one or two. Everything not picked is future power, not lost.
5. On approval, write the changes:
   - `profile/capability-map.md`: Current Mode and the Can lists, for what the assistant can do now.
   - `profile/power-map.md`: Current Power (mirror of what it can do now), Useful Next Powers (the picked-but-not-yet-connected and the strong unpicked ideas, sorted into the right Future Powers section), and Next Activation (the single best next power, why, what it accesses, which approval rule).
   - `profile/permission-map.md`: access levels, clear yes rules, and the App or Skill rows that changed.
   - `home.md`: a short current summary of what changed, what the assistant can do now, and the next power to consider.
   - `power/POWER-NAME.md`: a proposed activation card if the picked move needs app access, messaging, scheduled work, or another runtime before it can go live.
   - Set Last Reviewed to today on all three.
6. Confirm in one short summary what the assistant can now do, the one power it will grow into next, what still needs approval, and the one thing it will do next to prove it.

## Translation

Map friction to capability so the user sees the pattern:

- Repeats on a schedule -> Automate, Monitor, Schedule (needs a runtime).
- Scattered across notes and tabs -> Capture, Organize, Search.
- Heavy reading before deciding -> Research, Summarize, Compare.
- Drafting the same kinds of messages -> Draft, then Send with approval.
- Things slipping through -> Remind, Track, Review.

Always say plainly when a capability needs app access or a runtime that is not connected yet. Name it, do not imply it. Capabilities that need something not connected belong in the power map, not the capability map.

## Output

```text
## Capability Discovery

Friction the user named:
-

Capabilities that map to it:
-

Proposed moves (plain language, with the access each needs):
1.
2.
3.

Picked for now:
-

Map changes to apply (with approval):
- capability-map.md (now):
- power-map.md (next):
- permission-map.md (approval):
- home.md (front page):
- power activation card, if needed:

What changes for you after this:
-

First thing the assistant will do to prove it:
-
```

## Clear Yes Rules

- Show the exact changes to all touched files before writing them. Writing any map or activation card needs explicit approval.
- Never widen access beyond what the user picked. Unpicked ideas go to the power map as future powers, never into the live capability or permission maps.
- Anything that touches apps, accounts, money, sending, or a runtime still needs a clear yes after this skill runs.

## Verification

- Re-read all updated files after writing. Confirm the capability map shows only what is connected now, the power map holds the future ideas with one Next Activation chosen, `home.md` matches the maps, and Last Reviewed is today on each map.
- State the one thing the assistant will now do differently, so the user can see the discovery changed behavior, not just text.

## Rules

- Plain language. Map possibility to this person's real life, never a generic feature list.
- One capability added at a time. Power grows on purpose.
- If the user is unsure, keep the simple starting point and record the idea in the power map for later.
