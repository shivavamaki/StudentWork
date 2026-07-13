# StudentWork

A collaborative repository for pharmacy students to learn, build, and share programming projects during pharmacy clerkship.

This repository is intended for practical projects such as web applications, dashboards, automation tools, clinical calculators, educational games, data analysis, and other digital solutions related to pharmacy practice.

## Objectives

- Support pharmacy students who are interested in programming and health technology.
- Provide a shared space for developing and reviewing student projects.
- Encourage collaboration between students, preceptors, and project mentors.
- Apply programming skills to real pharmacy and healthcare workflows.
- Build reusable tools that may improve learning, medication safety, and pharmacy services.

## Project Areas

Projects in this repository may include:

- Pharmacy web applications
- Medication calculators
- Clinical decision-support prototypes
- Drug information tools
- Pharmacy workflow dashboards
- Medication safety projects
- Educational games and quizzes
- Data analysis and visualization
- Google Apps Script projects
- HTML, CSS, and JavaScript applications
- Python-based tools
- Automation and productivity tools
- Other pharmacy-related digital innovations

## Suggested Repository Structure

```text
studentwork/
├── projects/
│   ├── project-name/
│   │   ├── README.md
│   │   ├── src/
│   │   ├── assets/
│   │   ├── docs/
│   │   └── examples/
│   └── another-project/
├── templates/
├── shared-resources/
├── tutorials/
├── docs/
└── README.md
```

Each project should have its own folder and a short `README.md` explaining:

- Project title
- Student or team members
- Pharmacy problem being addressed
- Project objectives
- Main features
- Technologies used
- Installation or usage instructions
- Current project status
- Known limitations
- Future development plans

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd studentwork
```

### 2. Create a new branch

Use a clear branch name that identifies the project or task.

```bash
git checkout -b project/project-name
```

Examples:

```text
project/medication-calculator
feature/add-login-page
fix/mobile-layout
docs/update-user-guide
```

### 3. Create or update your project

Place the project inside the `projects/` folder.

```text
projects/your-project-name/
```

### 4. Commit your work

Write short and meaningful commit messages.

```bash
git add .
git commit -m "Add initial medication calculator"
```

### 5. Push your branch

```bash
git push origin project/project-name
```

### 6. Create a Pull Request

Before merging into the main branch:

- Describe what was added or changed.
- Include screenshots when the project has a user interface.
- Explain how the project was tested.
- Ask a student, preceptor, or project mentor to review the work.

## Collaboration Guidelines

- Work on a separate branch instead of editing the main branch directly.
- Keep each Pull Request focused on one project or one major change.
- Review existing code before creating duplicate functions.
- Use clear file names, variable names, and comments.
- Test the project before submitting a Pull Request.
- Respect the work and ideas of other contributors.
- Give credit when reusing code, designs, datasets, or external resources.
- Discuss major changes with the project team before implementation.

## Coding Guidelines

- Keep code readable and organized.
- Add comments only where they improve understanding.
- Avoid storing passwords, API keys, access tokens, or confidential information in the repository.
- Use environment variables or local configuration files for sensitive settings.
- Add frequently generated or private files to `.gitignore`.
- Include instructions for running the project.
- Use sample data whenever possible.
- Document important assumptions and limitations.

## Pharmacy and Patient Data Safety

This repository is for education, development, and collaboration.

Do not upload:

- Patient names
- Hospital numbers
- National identification numbers
- Dates of birth linked to individuals
- Telephone numbers or addresses
- Medical records containing identifiable information
- Prescription images containing patient identifiers
- Hospital usernames or passwords
- Private API keys, database credentials, or internal access tokens
- Confidential hospital documents without permission

Use only de-identified, anonymized, synthetic, or officially approved data.

Projects that provide medication information or clinical calculations must clearly describe their data sources, limitations, and intended use. Educational prototypes must not be presented as a replacement for professional clinical judgment or validated hospital systems.

## Project Status Labels

Each project may use one of the following labels in its documentation:

- `Idea` — project concept only
- `Planning` — requirements and design are being prepared
- `In Development` — active coding
- `Testing` — undergoing review or user testing
- `Completed` — learning objectives have been achieved
- `Archived` — no longer actively maintained

## Recommended Project README Template

```markdown
# Project Title

## Team Members

- Student name
- Student name
- Preceptor or mentor

## Background

Describe the pharmacy problem or learning need.

## Objectives

- Objective 1
- Objective 2

## Main Features

- Feature 1
- Feature 2

## Technologies

- HTML
- CSS
- JavaScript
- Python
- Google Apps Script

## How to Use

Explain how to install, run, or access the project.

## Data and Privacy

Describe the type of data used and how patient privacy is protected.

## Current Status

In Development

## Limitations

Describe known limitations.

## Future Plans

Describe possible improvements.
```

## Learning Expectations

Students are encouraged to:

- Understand the pharmacy problem before writing code.
- Start with a small and usable prototype.
- Ask for feedback early.
- Test with realistic but non-identifiable sample data.
- Document the development process.
- Reflect on what worked, what failed, and what could be improved.
- Consider usability, medication safety, privacy, and sustainability.

## Disclaimer

The projects in this repository are primarily intended for education, training, research prototypes, and quality-improvement activities.

Unless formally reviewed, validated, approved, and implemented by the responsible organization, these projects should not be used as independent clinical decision-making systems or as substitutes for professional judgment, institutional policies, or approved healthcare software.

## Maintainers

This repository is maintained for collaboration between pharmacy students, preceptors, and project mentors during pharmacy clerkship.

Contributions, suggestions, and project ideas are welcome.
