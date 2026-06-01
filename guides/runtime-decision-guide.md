# Runtime Decision Guide

Light Agent Kit gives a strong agent a readable workspace first, then can grow into stronger runtimes when the use case asks for it.

Use this guide to choose the next power layer.

For the full menu of possible powers, read [../POWER-CATALOG.md](../POWER-CATALOG.md).

## The Useful Rule

Start with the layer that can deliver the next useful result.

Add stronger runtime power when the user needs:

- Phone access.
- Always-on work.
- Scheduled automations.
- App integrations.
- Tool use.
- Memory search.
- Skills.
- Multiple agents.
- Recovery and health checks.

## Options

### Files And Chat

Best when:

- You are setting up Light Agent Kit for the first time.
- You want a profile, goals, tasks, lessons, and skills.
- You are still learning what you want the agent to do.

Good first wins:

- Daily plan.
- Project map.
- Brain dump cleanup.
- Capability map.
- Power map.

### Claude Or Codex

Best when:

- You want an agent to read and edit files.
- You want help building, writing, coding, researching, or organizing.
- You want a strong assistant without setting up an always-on runtime.

Good first wins:

- Create your private Light Agent Kit workspace.
- Improve project docs.
- Build the first useful skill.
- Review the assistant's memory and permission files.

### Hermes

Best when:

- You want a personal agent with messaging access.
- You want skills, memory, scheduled work, and tool use.
- You are comfortable with provider/model setup and possibly running on a server.

Good first wins:

- Phone-based assistant.
- Morning briefing.
- Research report.
- Scheduled check-in.
- Skill creation.

### OpenClaw

Best when:

- You want local-first or workspace-based agent operations.
- You want memory files, skills, channels, dashboard, and health checks.
- You care about permissioning, security, and workspace structure.

Good first wins:

- Workspace agent.
- Secure setup.
- Telegram/Discord/WhatsApp channel.
- Skill-based workflow.
- Memory or wiki workflow.

### Always-On Server

Best when:

- The assistant should work while your computer is closed.
- You want scheduled jobs.
- You want monitoring, reminders, or message-channel access.

Think through:

- Where secrets live.
- How updates happen.
- What logs are saved.
- How to turn it off.
- What requires approval.

## Decision Questions

Ask:

1. What do I want the agent to do this week?
2. Does it need to run while I am away?
3. Does it need app access?
4. Does it need phone access?
5. Does it need to send, publish, delete, or spend?
6. Do I understand the approval rule?
7. Can I get value with files and chat first?

## Recommendation Pattern

When unsure, use this order:

1. Files and chat.
2. Claude or Codex.
3. Phone access.
4. Read-only app access.
5. Scheduled work.
6. Hermes or OpenClaw.
7. Always-on server.

Skip ahead only when the use case clearly needs it.
