## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Git and branch workflow

Use a dedicated branch for every feature, fix, or maintenance task. Do not develop
directly on the default branch.

### Starting work

1. Run `git status --short` and `git branch --show-current` before editing.
2. Preserve all existing changes. Treat uncommitted work as belonging to another
   collaborator unless the task explicitly says otherwise.
3. Start from the latest default branch when it is safe to update it, then create a
   focused branch. Never pull, rebase, switch branches, or clean files while another
   collaborator has uncommitted work in the shared worktree.
4. Name branches with a type and a short kebab-case description:
   - `feat/<description>` for user-facing features
   - `fix/<description>` for bug fixes
   - `docs/<description>` for documentation only
   - `refactor/<description>` for behavior-preserving code changes
   - `chore/<description>` for tooling and maintenance

Examples: `feat/project-gallery`, `fix/mobile-navigation`, and
`docs/agent-branching-rules`.

### Collaborating with humans and agents

- Agree on the task boundary before editing. Each collaborator should own a clearly
  defined feature, component, or set of files.
- Before changing a file, check the worktree and recent diff so that another
  collaborator's edits are not overwritten.
- Parallel work should use separate branches and preferably separate worktrees. If a
  shared worktree is unavoidable, collaborators must edit disjoint files and announce
  file ownership before making changes.
- Do not reformat, rename, revert, stage, or commit files outside the assigned scope.
- Do not use destructive Git commands, discard changes, or force-push shared branches.
- If work overlaps, stop editing the overlapping files. Share the intended change and
  decide which collaborator will integrate it.
- Resolve conflicts by preserving both collaborators' intent. Do not choose a side
  mechanically; inspect the surrounding code and rerun relevant checks afterward.
- Keep assumptions and decisions in the task handoff or commit message when they are
  not obvious from the code.

### Commits and integration

- Make small, reviewable commits that contain one coherent change.
- Use an imperative Conventional Commit subject, such as
  `feat: add project filtering` or `fix: respect reduced motion`.
- Stage only the files that belong to the commit and inspect the staged diff before
  committing. Do not commit secrets, generated output, dependency folders, logs, or
  unrelated collaborator changes.
- Run the checks relevant to the changed area before handoff. At minimum, run the
  project's available format, lint, type-check, test, and build commands when the
  change can affect them.
- Bring the latest default branch into the feature branch before final integration,
  but only from a clean worktree. Never rewrite history after others depend on it
  without their explicit agreement.
- Open a review with a concise summary, validation performed, known limitations, and
  screenshots for visible UI changes. Merge only after required checks and review pass.
- Delete the feature branch after it is merged and no collaborator still needs it.

### Agent handoff checklist

Every agent should report:

- the branch name and goal;
- files changed and the reason for each change;
- commands or checks run and their results;
- any unverified behavior, risks, or follow-up work;
- whether the worktree contains pre-existing or unrelated changes that were left
  untouched.

## Shared implementation guidance

The following hidden Markdown files are intentionally version-controlled project
references, despite their `-cache.md` suffix:

- `.web-guidance-cache.md` for web implementation, accessibility, responsiveness,
  and performance guidance;
- `.scroll-guidance-cache.md` for scroll and motion effects.

Read the relevant sections before implementing related UI work. Treat the documents as
guidance rather than generated output, keep changes to them deliberate and reviewable,
and preserve reduced-motion and progressive-enhancement requirements.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
