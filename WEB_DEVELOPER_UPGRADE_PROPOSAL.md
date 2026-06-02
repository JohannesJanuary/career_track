# Web Developer Upgrade Proposal

Project: Johannes January 6-Month Career Development Roadmap  
Audience: F-1 international graduate student targeting U.S. analytics roles  
Current site: `index.html` in this workspace  
Upgrade objective: Transform the current roadmap microsite into an interactive career operating dashboard.

## 1. Product Vision

The website should become a premium, interactive career-development system for an F-1 student preparing to graduate and compete for U.S. roles in Business Analysis, Data Analysis, Business Intelligence, Sales Analytics, and Operations Analytics.

The current version communicates the plan, but the upgraded version should help the user:
- Decide what to prioritize.
- Understand certification value, cost, timing, and role fit.
- Track weekly execution.
- Connect certifications to portfolio projects.
- Manage F-1 career urgency and job-search preparation.
- Produce recruiter-ready evidence by December 2026.

The site should feel like a professional career dashboard, not a static content page.

## 2. Core User Persona

Primary user:
Johannes January, F-1 international graduate student and M.S. Applied AI & Business Analytics candidate at Quinnipiac University.

Career context:
- Transitioning into the U.S. job market.
- Targeting analyst roles where sponsorship, timing, practical experience, and portfolio evidence matter.
- Needs a clear plan that balances school, certifications, portfolio development, research, and job applications.

User anxieties:
- Which certifications are worth the money?
- How do I build proof of skills, not just list skills?
- How do I use my international work experience in the U.S. market?
- How do I manage OPT/job-search timing?
- What should I do each week?
- How do I show recruiters I am ready?

## 3. Current State Assessment

Strengths:
- Clear three-track structure: Certifications, Portfolio, Research.
- Premium visual direction with strong hero image.
- Certification brief pages exist.
- Month filter and track tabs are functional.
- Content direction aligns with target roles.

Weaknesses:
- Interactivity is still shallow.
- Site does not sufficiently address F-1 student realities.
- Certification cards are informative but not decision-ready.
- Portfolio projects do not have their own detailed pages.
- Timeline lacks week-by-week execution depth.
- No role-fit matrix.
- No budget planner.
- No job-search/application tracking.
- No meaningful progress dashboard.

## 4. Upgrade Goals

### Goal A: F-1 Career Command Center

Add a dedicated section near the top of the homepage that makes the site feel specifically designed for an international graduate student.

Required components:
- Graduation countdown placeholder.
- OPT planning reminder area.
- Target roles list.
- Weekly available hours selector.
- Monthly budget selector.
- Current priority indicator.
- Job-readiness score.

Suggested metrics:
- Certification progress.
- Portfolio progress.
- Research progress.
- Application readiness.
- Estimated total credential cost.
- Weekly workload load status: Light, Balanced, Heavy.

Important note:
Do not provide legal immigration advice. Use language such as “planning reminder,” “confirm with DSO,” and “verify official school/USCIS guidance.”

### Goal B: Replace Basic Stats With Action Dashboard

Replace or upgrade the current `3 / 3 / 6 / 7` stat strip.

New dashboard cards:
- Certification Progress: `0/3 major certifications`
- Portfolio Evidence: `0/7 projects`
- Research Output: `0/3 briefs`
- Estimated Exam Budget: `$640-$715`
- Weekly Commitment: `12-18 hours`
- Job Search Readiness: `Foundation / Building / Ready`

Interaction:
- Cards should be clickable and scroll to relevant sections.
- Progress should update when users mark items complete.
- Store progress in `localStorage`.

### Goal C: Certification Decision System

Each major certification should have an expanded decision interface on the homepage and a dedicated detail page.

Certification cards should include:
- Provider.
- Cost.
- Duration.
- Skill level.
- Tools needed.
- Role fit.
- ROI estimate.
- Priority score.
- Exam risk level.
- Free or low-cost prep options.
- Connected portfolio deliverable.
- “Mark as planned / in progress / completed” state.

Certification detail pages should include:
- Overview.
- Who offers it.
- Official cost and source link.
- Duration.
- Prerequisites or eligibility notes.
- Tools/software needed.
- Weekly study calendar.
- Recommended study resources.
- Portfolio project tied to the certification.
- Resume/LinkedIn wording after completion.
- Role-fit matrix.
- Decision box:
  - Best for.
  - Not best for.
  - Take this if.
  - Delay this if.

Major certification pages:
- `cert-pl300.html`
- `cert-capm.html`
- `cert-tableau.html`

Optional backup page:
- `cert-aws-cloud-practitioner.html`

### Goal D: Portfolio Project Briefs

Every major portfolio project should open into a detailed project brief page.

Required project pages:
- `project-sales-dashboard.html`
- `project-retail-operations.html`
- `project-business-analyst-case-study.html`
- `project-customer-service-backorder.html`
- `project-sales-forecasting.html`
- `project-text-analytics.html`
- `project-ai-reporting-workflow.html`

Each project page should include:
- Business problem.
- Target role relevance.
- Dataset type or source.
- Tools required.
- Technical tasks.
- Business analysis tasks.
- Dashboard/report requirements.
- Expected screenshots or visuals.
- Final deliverables.
- Resume bullet generated from the project.
- LinkedIn post idea.
- Recruiter value statement.

Example project spec:

Project: Sales Performance and Revenue Dashboard  
Business question: Which products, customers, and regions drive revenue growth, and where are risks emerging?  
Tools: Power BI, SQL, Excel, DAX  
Deliverables: dashboard, SQL script, KPI dictionary, executive memo, portfolio write-up.

### Goal E: Week-by-Week Calendar Board

The current month timeline is useful but too broad. Add a weekly execution board.

Structure:
- June through December.
- Each month has 4 weekly cards.
- Each week includes tasks across:
  - Certification.
  - Portfolio.
  - Research.
  - Job search.

Interactions:
- Checkbox completion.
- Filter by track.
- Filter by month.
- “Show this week only.”
- Progress bar per month.
- Save completion in `localStorage`.

Example weekly card:

Week 2, June:
- Certification: Complete Power Query and data-cleaning module.
- Portfolio: Clean sales dataset and define KPIs.
- Research: Collect 3 sources on AI-assisted BI reporting.
- Job Search: Update LinkedIn headline and save 10 target job descriptions.

### Goal F: Role-Fit Matrix

Add a role-fit matrix showing how every certification, portfolio project, and research topic supports target roles.

Columns:
- Business Analyst
- Data Analyst
- BI Analyst
- Sales Analytics Analyst
- Operations Analytics Analyst
- Project Analyst

Rows:
- PL-300
- CAPM
- Tableau Data Analyst
- SQL certificate
- Power BI Sales Dashboard
- Retail Operations Dashboard
- BA Case Study
- Customer Service Analytics
- Sales Forecasting
- Text Analytics
- AI Reporting Workflow
- AI Research Brief
- Sales Analytics Research Brief
- Operations Analytics Research Brief

Cell states:
- Strong fit
- Moderate fit
- Supporting fit
- Not primary

Interaction:
- User can click a role to highlight the most relevant work.
- User can click a project/cert to see which resume keywords it strengthens.

### Goal G: Budget Planner

Add a simple interactive budget planner.

Inputs:
- PMI membership toggle.
- Include Tableau exam toggle.
- Include AWS backup toggle.
- Monthly learning subscription estimate.
- Available monthly budget.

Outputs:
- Total estimated cost.
- Monthly cost by period.
- Budget status: Comfortable / Tight / Delay optional items.
- Suggested free alternatives.

Important:
Costs should be labeled as estimates and linked to official sources where possible.

### Goal H: Job Search Execution Layer

Add a job-search readiness section.

Required elements:
- Weekly application goal.
- Networking message goal.
- LinkedIn update goal.
- Portfolio update goal.
- Resume tailoring goal.
- Target employer notes.

Example weekly targets:
- Apply to 8-12 roles.
- Send 5 networking messages.
- Save 10 relevant job descriptions.
- Tailor resume for 2 priority roles.
- Publish or update 1 portfolio artifact.

Include F-1-friendly language:
- “Confirm work authorization wording with career services or DSO.”
- “Track employers with prior international hiring history.”
- “Prioritize internships, OPT-compatible roles, analyst rotational programs, and university recruiting channels.”

## 5. Information Architecture

Recommended page structure:

Homepage:
- Hero.
- F-1 Career Command Center.
- Interactive progress dashboard.
- Three-track selector.
- Certification decision cards.
- Portfolio project cards.
- Week-by-week calendar.
- Role-fit matrix.
- Budget planner.
- Job-search readiness section.
- Research roadmap.
- Footer with source links and full planning document.

Certification pages:
- One page per major certification.

Portfolio pages:
- One page per portfolio project.

Research pages:
- One page per research track.

Optional:
- `resources.html` for official links, templates, and recommended learning resources.

## 6. Visual Design Direction

Desired feel:
Premium analytics product, graduate-career command center, executive consulting dashboard.

Avoid:
- Generic student template.
- Decorative-only cards.
- Oversized sections with low information density.
- Purely motivational copy.
- Too much beige or single-color palette.

Use:
- Strong hierarchy.
- Compact dashboard cards.
- Clear progress bars.
- Tables and matrices.
- Track colors used consistently.
- Icons for action states.
- Print-friendly detail pages.
- Mobile-first cards that preserve readability.

Suggested track colors:
- Certifications: cobalt/blue.
- Portfolio: teal/green.
- Research: amber/wine.
- F-1/job search: charcoal with gold accents.

## 7. Interaction Requirements

Minimum interactions:
- Track tabs.
- Month filters.
- Certification progress state.
- Project completion state.
- Weekly checklist.
- Budget toggles.
- Role-fit matrix highlighting.
- Print/save-as-PDF buttons.
- Local persistence with `localStorage`.

Advanced interactions:
- “This week’s focus” auto-detected by current date.
- Completion percentage by track.
- Reset progress button.
- Export progress summary as text.
- Generate resume bullets from completed projects.

## 8. Data Model Recommendation

Move roadmap content into structured JavaScript objects:

- `tracks`
- `certifications`
- `microCredentials`
- `portfolioProjects`
- `researchTracks`
- `weeklyTasks`
- `roleFitMatrix`
- `budgetItems`
- `jobSearchTasks`

This will make the site easier to maintain and eventually connect to GitHub Pages without backend dependencies.

## 9. Accessibility and Usability Requirements

Required:
- Keyboard-accessible buttons.
- Visible focus states.
- Descriptive link text.
- Sufficient contrast.
- Mobile layouts with no text overlap.
- Buttons must not resize layout after state changes.
- Print styles for detail pages.

Recommended:
- ARIA labels for tab controls and dashboards.
- `aria-live` only where progress changes need announcement.
- Avoid relying on color alone for status.

## 10. Implementation Roadmap

### Phase 1: Product Depth

Build:
- F-1 command center.
- Improved progress dashboard.
- Certification card upgrades.
- Budget planner.
- Better homepage hierarchy.

Estimated effort:
1-2 development days.

### Phase 2: Execution System

Build:
- Week-by-week calendar board.
- Persistent checklists.
- Monthly progress bars.
- Job-search readiness section.

Estimated effort:
2-3 development days.

### Phase 3: Portfolio Expansion

Build:
- Seven portfolio project detail pages.
- Project cards with role fit and deliverables.
- Project completion tracking.

Estimated effort:
2-3 development days.

### Phase 4: Role and Research Intelligence

Build:
- Role-fit matrix.
- Research detail pages.
- Resume keyword mapping.
- LinkedIn post prompts.

Estimated effort:
1-2 development days.

### Phase 5: Polish and Hosting

Build:
- Final visual pass.
- Mobile QA.
- Print QA.
- GitHub Pages deployment.
- README for repository.

Estimated effort:
1 development day.

## 11. Success Criteria

The upgraded site is successful if an F-1 student can answer these questions within 5 minutes:

- What should I do first?
- Which certification should I prioritize and why?
- How much will this cost?
- What should I work on this week?
- What portfolio proof will I have by each month?
- Which projects support each target role?
- How does this plan support my U.S. job search?
- What do I show recruiters by December?

## 12. Recommended Next Build Priority

Start with these five upgrades:

1. F-1 Career Command Center.
2. Interactive progress dashboard.
3. Certification decision cards.
4. Week-by-week calendar checklist.
5. Portfolio project detail pages.

These upgrades will produce the biggest improvement in usefulness and will move the site from a roadmap presentation to a true execution tool.
