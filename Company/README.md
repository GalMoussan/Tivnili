# Company Pipeline Framework — Tivnili Project

This directory contains the Company multi-agent pipeline framework configuration for the Tivnili project.

## Directory Structure

```
Company/
├── README.md                        # This file
├── learnings.md                     # Generic best practices
├── project/
│   ├── learnings.md                 # Tivnili-specific lessons
│   ├── project-guidelines.md        # Project conventions, test infrastructure
│   └── pipelines/                   # Pipeline execution state files
├── roles/                           # Worker role definitions
│   ├── documenter.md
│   ├── tester.md
│   ├── implementer.md
│   ├── debugger.md
│   ├── optimizer.md
│   ├── visionary.md
│   └── sub-manager.md
└── recommendations/                 # Strategic architecture recommendations
```

## How It Works

### The Manager

When you run `/company-execute` or `/company-plan`, you're invoking the **Manager** agent. The Manager:
- Orchestrates the entire pipeline
- Spawns specialized workers
- Runs tests
- Makes decisions
- Handles escalation

### The Workers

The Manager can spawn these specialized workers:

| Worker | Purpose | When Used |
|--------|---------|-----------|
| **Documenter** | Writes/updates documentation | Design docs, test specs, doc sync |
| **Tester** | Writes test code (TDD) | Before implementation (RED phase) |
| **Implementer** | Writes production code | After tests written (GREEN phase) |
| **Debugger** | Fixes test failures | When tests fail or compilation breaks |
| **Optimizer** | Improves process | After every pipeline (mandatory) |
| **Visionary** | Strategic architecture | After every pipeline (mandatory) |
| **Sub-Manager** | Executes sub-plans | Expand pipelines only |

### Pipeline Types

**Debug Pipeline**: Fix failing tests or bugs
- Scope tests → Run tests → Fix failures (max 3 iterations)

**Feature Pipeline**: Add new functionality (TDD)
- Design docs → Test specs → Test code → Implementation → Verification → Doc sync

**Refactor Pipeline**: Restructure without changing behavior
- Existing tests define contract → Implementation → Verification

**Expand Pipeline**: Large multi-feature projects
- Waves of sub-plans → Sub-Managers → Scoped testing → Full regression

## Configuration Files

### `learnings.md`
Generic software engineering best practices:
- Immutability, error handling, testing, security
- Applies to any project

### `project/learnings.md`
Tivnili-specific lessons learned:
- Framer Motion animation timing
- Design system gotchas
- Project-specific patterns

**Updated by**: Optimizer (after every pipeline)

### `project/project-guidelines.md`
**Most important file for workers**. Contains:
- Technology stack
- Test infrastructure (how to run tests, test patterns)
- File naming conventions
- Design system (colors, typography, components)
- Coding standards
- Common tasks and troubleshooting

**Updated by**: Optimizer (when new patterns emerge)

### `roles/{role}.md`
Each worker reads their own role file to self-bootstrap. Role files contain:
- Responsibilities
- Workflow
- Code patterns
- Output format
- What NOT to do

**Updated by**: Optimizer (when workers make repeated mistakes)

## Usage

### Running a Pipeline

```bash
# From Claude Code CLI
/company-execute Fix bug in ContactForm validation
/company-plan Add new Portfolio filtering feature
```

The Manager will:
1. Determine pipeline type (Debug/Feature/Refactor/Expand)
2. Read context files (learnings, project guidelines)
3. Create pipeline state file in `project/pipelines/`
4. Execute phases (spawn workers, run tests, debug)
5. Mandatory post-pipeline review (Documenter, Optimizer, Visionary)
6. Finalize pipeline state

### Pipeline State Files

Located in `project/pipelines/{date}-{short-name}.md`:

```markdown
# Pipeline: {Short Name}
**ID**: {date}-{short-name}
**Status**: Running | Done | Failed | Escalated
**Type**: Debug | Feature | Refactor | Expand
**Task**: {task description}

## Execution Log
### Phase 1: {name} — Passed/Failed
- Worker: {role}
- Result: {summary}
- Files modified: {list}

## Final Summary
**Status**: Done
**Tests**: {pass/total}
**Files modified**: {count}
```

### Journal Entries

Each worker writes a journal entry in `project/pipelines/{id}_journal/`:
- `01-tester.md`: What tests were written
- `02-implementer.md`: What was implemented
- `03-debugger.md`: What was fixed (if needed)
- `98-visionary.md`: Strategic recommendations
- `99-optimizer.md`: Process improvements

**Used by**: Optimizer and Visionary for post-pipeline analysis

## Post-Pipeline Review (Mandatory)

After **every** pipeline, the Manager spawns (in parallel):

1. **Documenter** (Doc Sync mode): Updates all documentation to match code
2. **Optimizer**: Analyzes journal entries, improves role files and guidelines
3. **Visionary**: Strategic architecture review, writes recommendation plans

This ensures:
- Documentation stays in sync
- Process continuously improves
- Technical debt is tracked

## Recommendations

Strategic architecture recommendations are written by the Visionary to:
- `Company/recommendations/` (in code repo)
- `../tivnili-docs/plans/` (if docs repo exists)

Format:
```markdown
# Recommendation: {Title}
**Priority**: High | Medium | Low
**Effort**: Small | Medium | Large
**Impact**: High | Medium | Low

## Problem
{Systemic issue}

## Proposed Solution
{High-level approach}

## Implementation Plan
1. Step 1
2. Step 2
```

Examples:
- Shared base class for section tests
- Animation performance audit
- Accessibility audit
- Error boundary strategy

## Test-Driven Development (TDD)

The pipeline enforces TDD:

1. **Tester** writes failing tests (RED)
2. **Manager** verifies tests compile
3. **Manager** runs tests → FAIL ✓
4. **Implementer** writes minimal code (GREEN)
5. **Manager** runs tests → PASS ✓
6. **Debugger** fixes if needed (REFACTOR)

**Why**: Tests define the contract. Implementation must match expectations.

## Quality Gates

Before finalizing any pipeline:

- [ ] TypeScript compilation passes
- [ ] All tests pass (80%+ coverage)
- [ ] No hardcoded secrets
- [ ] Documentation synced
- [ ] Process improvements applied
- [ ] Strategic recommendations written

## Troubleshooting

### "Workers don't follow project conventions"
→ Check `project/project-guidelines.md` has examples
→ Optimizer should add patterns after failures

### "Same mistakes happening repeatedly"
→ Check journal entries for patterns
→ Optimizer should update role files with warnings

### "Tests taking too long"
→ Visionary should write recommendation for test optimization
→ Check for serial tests that could be parallel

### "Pipeline escalated"
→ Read pipeline state file for options
→ Manager provides recommendation
→ User makes decision

## Best Practices

**For Users**:
- Provide clear task descriptions
- Reference existing patterns when possible
- Review pipeline state files after completion
- Read recommendations from Visionary

**For the System**:
- Always run post-pipeline review (Documenter, Optimizer, Visionary)
- Journal everything (workers write entries)
- Update learnings continuously (Optimizer)
- Think long-term (Visionary writes plans)

## Next Steps

1. **Run your first pipeline**: `/company-execute {task}`
2. **Check pipeline state**: `Company/project/pipelines/`
3. **Review journal entries**: Learn from execution
4. **Read recommendations**: Visionary's strategic insights
5. **Apply improvements**: Optimizer updated the process

The system gets smarter with every pipeline. ✨
