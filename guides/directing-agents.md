# Directing Agents

Strong agents make human direction more important.

This guide helps you give your assistant clearer instructions, better constraints, and better review standards.

## A Good Directive

Use this shape:

```text
Goal:

Context:

Constraints:

What good looks like:

What to avoid:

Approval needed before:
```

## Example

```text
Goal:
Help me plan tomorrow.

Context:
I have two client tasks, one personal admin task, and low energy in the afternoon.

Constraints:
Keep the plan realistic. No more than three main tasks.

What good looks like:
I know the first task to start with and what can wait.

What to avoid:
Keep white space in the day.

Approval needed before:
Adding anything to my calendar.
```

## Review Standards

Before accepting an assistant output, ask:

- Does this match my actual goal?
- Does this respect my constraints?
- Is the next action clear?
- Did it assume access or permission beyond the current map?
- Does it sound like me if it is writing for me?

## When To Ask For Options

Ask for two or three options when:

- You are making a strategic decision.
- There are tradeoffs.
- The assistant might choose a path that affects privacy, money, public work, or other people.

## When To Ask For Execution

Ask for direct execution when:

- The task is low risk.
- The assistant already has enough context.
- The next step is obvious.
- The action stays inside approved files or tools.

## Turn Corrections Into Lessons

When something feels off, say:

```text
Correction:

Rule for next time:
```

Then ask the assistant to update `tasks/lessons.md`.

## Working Rule

The user sets direction. The assistant handles structure, recall, drafting, and follow-through inside the user's boundaries.
