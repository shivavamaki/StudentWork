# Mandatory Git Commands for Students

This guide explains the minimum Git commands every student must use when working in the `studentwork` repository.

## Required Workflow

Before starting work:

```bash
git pull
```

After editing files:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

These commands are mandatory for every work session.

---

## 1. Open the Project Folder

Open Terminal, Command Prompt, PowerShell, or the terminal inside Visual Studio Code.

Move into the repository folder:

```bash
cd studentwork
```

Check that Git is working:

```bash
git status
```

---

## 2. Pull the Latest Changes

Always pull before you begin editing.

```bash
git pull
```

This downloads the newest changes from the shared repository.

### Mandatory rule

Do not start coding before running:

```bash
git pull
```

This helps prevent conflicts and avoids overwriting another student's work.

---

## 3. Check Your Current Branch

Run:

```bash
git branch
```

The branch with `*` is your current branch.

For a new project or task, create a new branch:

```bash
git checkout -b project/project-name
```

Example:

```bash
git checkout -b project/medication-calculator
```

To move to an existing branch:

```bash
git checkout branch-name
```

---

## 4. Check Changed Files

After editing your project, run:

```bash
git status
```

This shows:

- Modified files
- New files
- Deleted files
- Files ready to commit

---

## 5. Add Files

Add all changed files:

```bash
git add .
```

Or add one specific file:

```bash
git add filename
```

Example:

```bash
git add index.html
```

Check again:

```bash
git status
```

---

## 6. Commit Your Work

Create a commit with a clear message:

```bash
git commit -m "Describe what you changed"
```

Examples:

```bash
git commit -m "Add medication dose calculator"
```

```bash
git commit -m "Fix mobile layout"
```

```bash
git commit -m "Update project instructions"
```

```bash
git commit -m "Add patient safety warning"
```

### Good commit messages

Use short messages that explain the actual change.

Good:

```text
Add login form
Fix incorrect dose calculation
Update README instructions
Improve mobile display
```

Avoid:

```text
Update
Edit
Work
Test
Final
123
```

---

## 7. Pull Again Before Pushing

Before pushing, pull the newest changes again:

```bash
git pull
```

If Git reports a conflict, do not ignore it. Review and resolve the conflict before continuing.

After resolving the conflict:

```bash
git add .
git commit -m "Resolve merge conflict"
```

---

## 8. Push Your Work

Push your committed work to GitHub:

```bash
git push
```

For a new branch, use:

```bash
git push -u origin branch-name
```

Example:

```bash
git push -u origin project/medication-calculator
```

After the first push, you can normally use:

```bash
git push
```

---

## Mandatory Command Sequence

Use this sequence every time:

```bash
git pull
git status
git add .
git commit -m "Describe what you changed"
git pull
git push
```

For a new branch:

```bash
git pull
git checkout -b project/project-name
git status
git add .
git commit -m "Describe what you changed"
git pull
git push -u origin project/project-name
```

---

## Daily Student Checklist

Before coding:

```bash
git pull
git status
```

After coding:

```bash
git status
git add .
git commit -m "Clear description"
git pull
git push
```

Before finishing:

```bash
git status
```

Your final status should normally show:

```text
nothing to commit, working tree clean
```

---

## Common Problems

### Problem: Git says there is nothing to commit

This means there are no new saved changes.

Check:

```bash
git status
```

Make sure the file was saved before committing.

### Problem: Push is rejected

Pull the latest changes:

```bash
git pull
```

Then try:

```bash
git push
```

### Problem: Merge conflict

Git may show conflict markers inside a file:

```text
<<<<<<< HEAD
your code
=======
another student's code
>>>>>>> branch-name
```

Edit the file and keep the correct code. Remove the conflict markers.

Then run:

```bash
git add .
git commit -m "Resolve merge conflict"
git push
```

Ask the preceptor or project mentor for help when you are unsure which code should be kept.

### Problem: Wrong branch

Check your current branch:

```bash
git branch
```

Move to the correct branch:

```bash
git checkout branch-name
```

### Problem: Forgot to pull before editing

Save your work, then run:

```bash
git pull
```

If a conflict appears, resolve it before pushing.

---

## Commands Students Must Know

```bash
git status
```

Shows the current state of the repository.

```bash
git pull
```

Downloads and merges the latest shared changes.

```bash
git add .
```

Prepares all changed files for commit.

```bash
git commit -m "message"
```

Records your changes locally.

```bash
git push
```

Uploads your commits to GitHub.

```bash
git branch
```

Shows the current branch.

```bash
git checkout branch-name
```

Moves to another branch.

```bash
git checkout -b new-branch-name
```

Creates and moves to a new branch.

```bash
git log --oneline
```

Shows recent commits.

---

## Important Rules

1. Always run `git pull` before editing.
2. Always use a separate branch for a new project or major task.
3. Always review `git status` before committing.
4. Always write a clear commit message.
5. Always run `git pull` again before pushing.
6. Always run `git push` before finishing your work session.
7. Never upload passwords, API keys, patient information, or confidential hospital data.
8. Do not force push unless the project mentor gives permission.
9. Do not delete or overwrite another student's work without discussion.
10. Ask for help immediately when a merge conflict is unclear.

---

## Minimum Requirement for Every Student Submission

A student submission is considered complete only when:

- The latest repository changes were pulled.
- The student's files were added.
- A clear commit was created.
- The commit was pushed to GitHub.
- The correct branch was used.
- No confidential or identifiable patient information was uploaded.
