---
name: add-new-skill
description: Create a new Copilot Agent Skill in this project. Use this skill when the user wants to add a new skill, create a new SKILL.md file, or asks how to extend Copilot's capabilities.
argument-hint: '[skill-name] [skill-description]'
---

# Adding a New Copilot Skill

Before starting, **read the official docs** to understand the full Agent Skills specification:

📖 https://code.visualstudio.com/docs/copilot/customization/agent-skills

## Directory Structure

All skills live under `.github/skills/`, each in its own subdirectory. The directory name is the skill's unique identifier:

```text
.github/skills/
└── <skill-name>/       # Must match the 'name' field in SKILL.md exactly
    ├── SKILL.md        # Required: skill definition file
    └── (optional)      # Scripts, example files, reference docs, etc.
```

## Step 1: Create SKILL.md

Create `SKILL.md` under `.github/skills/<skill-name>/`. The file has two parts:

### YAML frontmatter (required)

```markdown
---
name: skill-name
description: Describe what the skill does and when to use it.
argument-hint: [argument hint]
---
```

Field reference:

| Field                      | Required | Description                                                                                                   |
| -------------------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                     | ✅       | Unique identifier, lowercase letters and hyphens only, **must match the parent directory name**, max 64 chars |
| `description`              | ✅       | Describes the skill's capabilities and when Copilot should load it automatically, max 1024 chars              |
| `argument-hint`            | optional | Hint text shown in the chat input box                                                                         |
| `user-invokable`           | optional | Default `true`. Set to `false` to hide from `/` menu while still allowing auto-loading                        |
| `disable-model-invocation` | optional | Default `false`. Set to `true` to allow only manual invocation via `/` command                                |

### Skill body (required)

Write the body in Markdown. It should include:

- The skill's goal and applicable scenarios
- Clear step-by-step instructions
- Input/output examples
- References to additional resource files (use relative paths, e.g. `[script](./script.sh)`)

## Step 2: Done

VS Code auto-discovers all skills under `.github/skills/` — **no manual registration needed**. As long as the directory name matches the `name` field, the skill is available via `/skill-name` after reopening the chat.

## Full Example

Adding a skill to help debug Docusaurus build issues:

1. Create the directory and file:

   ```
   .github/skills/debug-build/
   └── SKILL.md
   ```

2. `SKILL.md` content:

   ```markdown
   ---
   name: debug-build
   description: Diagnose and fix Docusaurus build errors. Use when the user encounters npm run build failures or page rendering issues.
   argument-hint: [error message]
   ---

   # Debugging Docusaurus Build Issues

   ## Common Causes

   ...
   ```

3. Type `/debug-build` in the chat to invoke it.
