# Task Execute

Execute a task from the Tivnili task board autonomously.

## Input

Task ID: $ARGUMENTS (e.g., T001, T014)

## Process

### 1. Load Task Spec
Read the task specification from the docs repo:
- Phase 1: `../tivnili-docs/tasks/phase-1/T00X-*.md`
- Phase 2: `../tivnili-docs/tasks/phase-2/T00X-*.md`
- Phase 3: `../tivnili-docs/tasks/phase-3/T01X-*.md`
- Phase 4: `../tivnili-docs/tasks/phase-4/T01X-*.md`

### 2. Check Dependencies
Read `../tivnili-docs/TASK_BOARD.md` and verify all "Depends On" tasks are marked DONE. If any are not, report which dependencies are missing and stop.

### 3. Understand Context
- Read the architecture docs referenced in the task
- Read existing code files that will be modified
- Read related files to understand patterns in use

### 4. Plan Implementation
Before writing any code:
- List all files to create/modify
- Identify the build sequence (what to implement first)
- Note any decisions that need user input

### 5. Execute
Implement the task following Tivnili conventions:
- React components: functional, named exports, Tailwind styling
- TypeScript: strict mode, no `any`
- Validation: Zod at API boundaries
- Animations: Framer Motion with `prefers-reduced-motion` support
- Design tokens: navy-900 base, amber-500 accent, cream text

### 6. Verify
```bash
npm run typecheck
npm run test
```

### 7. Report
Output a summary:
- What was implemented
- Files created/modified
- Any decisions made
- What to test manually
- Suggested next steps

## Important
- Always read the full task spec before starting
- Follow the acceptance criteria exactly
- Don't modify files outside the task's scope
- Create a git branch: `feat/{task-id}-{short-name}` (e.g., `feat/T001-scaffold`)
