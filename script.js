const tracks = {
  certifications: {
    priority: "Major goal",
    title: "Certification Roadmap",
    summary:
      "Build a balanced certification profile across BI, project management, Tableau, SQL, agile, and AI fluency.",
    details: [
      ["Major Certifications", "PL-300 in June-July, CAPM in August-September, Tableau Data Analyst in October-November."],
      ["Low-Cost Credentials", "One supporting certificate or micro-credential each month to reinforce the major track."],
      ["Market Fit", "Targets business analyst, data analyst, BI, sales analytics, operations analytics, and project analyst roles."],
      ["Proof Standard", "Every credential must produce visible evidence: dashboard, script, memo, case study, or LinkedIn update."]
    ]
  },
  portfolio: {
    priority: "Major goal",
    title: "Industry Portfolio Roadmap",
    summary:
      "Create a recruiter-ready evidence library that proves analytics, BI, business analysis, and AI-enabled decision support.",
    details: [
      ["Dashboard Evidence", "Power BI and Tableau projects focused on sales, operations, customer service, and KPI reporting."],
      ["Technical Evidence", "SQL scripts, Python notebooks, forecasting models, text analytics, and cleaned datasets."],
      ["Business Evidence", "Stakeholder requirements, process maps, project charters, KPI dictionaries, and recommendation memos."],
      ["Portfolio Standard", "Each project should answer a business question and end with practical recommendations."]
    ]
  },
  research: {
    priority: "Supporting goal",
    title: "Independent Research Roadmap",
    summary:
      "Develop publishable research briefs that deepen interview credibility and connect AI, sales analytics, and operations analytics.",
    details: [
      ["AI Research", "AI-augmented business analytics, responsible AI, natural-language querying, and decision support."],
      ["Sales Research", "Customer segmentation, key account analytics, revenue forecasting, and CRM analytics."],
      ["Operations Research", "Inventory availability, back-order analytics, branch benchmarking, and process improvement."],
      ["Research Output", "Each topic produces a brief, visual summary, LinkedIn post, portfolio entry, and short presentation."]
    ]
  }
};

const timeline = [
  {
    month: "June",
    items: [
      ["Certification", "Start Microsoft PL-300 and complete Power BI fundamentals."],
      ["Portfolio", "Build Sales Performance and Revenue Dashboard with SQL and Power BI."],
      ["Research", "Begin AI in Business Analytics and Decision Support research brief."]
    ]
  },
  {
    month: "July",
    items: [
      ["Certification", "Complete PL-300 readiness, practice exams, and SQL for Data Analysis certificate."],
      ["Portfolio", "Publish sales dashboard, SQL scripts, KPI dictionary, and recommendation memo."],
      ["Research", "Finalize AI research brief, visual summary, LinkedIn post, and portfolio entry."]
    ]
  },
  {
    month: "August",
    items: [
      ["Certification", "Start CAPM prep and complete project-management learning module."],
      ["Portfolio", "Build Retail Operations KPI Dashboard and begin Business Analyst case study."],
      ["Research", "Begin Sales and Customer Analytics research brief."]
    ]
  },
  {
    month: "September",
    items: [
      ["Certification", "Complete CAPM exam readiness and agile or scrum fundamentals certificate."],
      ["Portfolio", "Publish Business Analyst case study with charter, requirements, process map, and KPIs."],
      ["Research", "Finalize sales analytics research outputs and LinkedIn thought-leadership post."]
    ]
  },
  {
    month: "October",
    items: [
      ["Certification", "Start Salesforce Tableau Data Analyst certification and Google BI module."],
      ["Portfolio", "Build Customer Service and Back-Order Analytics project."],
      ["Research", "Begin Operations Analytics and Process Improvement research brief."]
    ]
  },
  {
    month: "November",
    items: [
      ["Certification", "Complete Tableau exam readiness and AI for Business/Data Analytics certificate."],
      ["Portfolio", "Build Predictive Sales Forecasting and Text Analytics projects."],
      ["Research", "Finalize operations analytics research outputs and visual summary."]
    ]
  },
  {
    month: "December",
    items: [
      ["Certification", "Audit badges, resume, LinkedIn, Handshake, and credential links."],
      ["Portfolio", "Polish website, add research section, AI workflow project, resume download, and project links."],
      ["Research", "Create combined Research and Thought Leadership section."]
    ]
  }
];

const deliverables = [
  {
    title: "Power BI Sales Dashboard",
    copy: "Revenue trends, product or customer segmentation, DAX measures, KPI dictionary, SQL cleaning script, and executive recommendations.",
    tag: "June-July"
  },
  {
    title: "Retail Operations KPI Dashboard",
    copy: "Branch performance, merchandising scorecard, operational benchmarks, and recommendations connected to retail expansion experience.",
    tag: "July-August"
  },
  {
    title: "Business Analyst Case Study",
    copy: "Problem statement, stakeholder map, requirements document, process map, user stories, risk log, and success metrics.",
    tag: "August-September"
  },
  {
    title: "Customer Service Analytics",
    copy: "Back-order delay patterns, issue categorization, root-cause analysis, dashboard visuals, and process-improvement memo.",
    tag: "September-October"
  },
  {
    title: "Predictive Sales Forecasting",
    copy: "Python forecasting notebook, model comparison, error metrics, forecast visuals, and non-technical business interpretation.",
    tag: "October-November"
  },
  {
    title: "Text Analytics Project",
    copy: "Customer-feedback preprocessing, sentiment or topic analysis, theme summary, visual report, and recommendations.",
    tag: "November-December"
  },
  {
    title: "AI-Enhanced Reporting Workflow",
    copy: "Workflow diagram, prompt library, responsible AI checklist, before-and-after reporting process, and executive summary sample.",
    tag: "December"
  },
  {
    title: "Three Research Briefs",
    copy: "AI in business analytics, sales/customer analytics, and operations analytics briefs with visuals, posts, and portfolio entries.",
    tag: "June-December"
  },
  {
    title: "Credential Launch Package",
    copy: "Updated resume, LinkedIn licenses, Handshake profile, portfolio badges, and a career-sprint LinkedIn post.",
    tag: "December"
  }
];

const certifications = [
  {
    id: "pl300",
    name: "Microsoft Power BI Data Analyst Associate",
    code: "PL-300",
    months: "June-July",
    provider: "Microsoft",
    cost: "$165 estimate in U.S.; official pricing varies by proctoring region",
    level: "Intermediate",
    page: "cert-pl300.html",
    summary:
      "Best first major credential because it directly supports BI dashboards, DAX, Power Query, data modeling, and KPI storytelling.",
    weeks: ["Power BI exam map", "Power Query", "DAX and modeling", "Dashboard design"]
  },
  {
    id: "capm",
    name: "Certified Associate in Project Management",
    code: "CAPM",
    months: "August-September",
    provider: "PMI",
    cost: "$225 member / $300 non-member",
    level: "Foundational project management",
    page: "cert-capm.html",
    summary:
      "Supports business analyst, project analyst, operations analyst, and project coordinator roles with stakeholder and delivery credibility.",
    weeks: ["Eligibility and 23 hours", "Predictive PM", "Agile and hybrid", "Mock exam review"]
  },
  {
    id: "tableau",
    name: "Salesforce Tableau Certified Data Analyst",
    code: "Tableau Data Analyst",
    months: "October-November",
    provider: "Salesforce Tableau",
    cost: "$250 exam fee",
    level: "Intermediate analytics",
    page: "cert-tableau.html",
    summary:
      "Complements Power BI and strengthens visual analytics, dashboard storytelling, and multi-tool BI readiness.",
    weeks: ["Exam guide", "Calculated fields", "Interactive dashboards", "Portfolio project"]
  }
];

const microCredentials = [
  ["June", "Microsoft Learn Power BI path", "Free learning path for Power BI fundamentals and PL-300 support."],
  ["July", "SQL for Data Analysis", "Low-cost SQL certificate focused on joins, CTEs, windows, and business reports."],
  ["August", "Project Management module", "Supports CAPM prep with project lifecycle, charters, risks, and stakeholders."],
  ["September", "Agile/Scrum fundamentals", "Builds vocabulary for user stories, sprints, backlogs, and BA collaboration."],
  ["October", "Google Business Intelligence", "Strengthens BI concepts, metrics, dashboards, and stakeholder reporting."],
  ["November", "AI for Business/Data Analytics", "Adds AI workflow fluency, responsible AI, prompting, and reporting use cases."]
];

const portfolioProjects = [
  {
    id: "sales-dashboard",
    title: "Sales Performance and Revenue Dashboard",
    page: "project-sales-dashboard.html",
    roles: ["BI Analyst", "Data Analyst", "Sales Analytics"],
    tools: ["Power BI", "SQL", "DAX", "Excel"],
    summary: "Analyze product, customer, and region revenue trends with KPI cards, segmentation, and executive recommendations."
  },
  {
    id: "retail-ops",
    title: "Retail Operations KPI Dashboard",
    page: "project-retail-operations.html",
    roles: ["Operations Analyst", "BI Analyst", "Business Analyst"],
    tools: ["Tableau", "SQL", "Excel"],
    summary: "Benchmark branch performance, merchandising standards, stock availability, and expansion readiness."
  },
  {
    id: "ba-case",
    title: "Business Analyst Case Study",
    page: "project-business-analyst-case-study.html",
    roles: ["Business Analyst", "Project Analyst"],
    tools: ["Process Map", "User Stories", "KPI Plan"],
    summary: "Define a process-improvement initiative with requirements, stakeholder map, risks, acceptance criteria, and KPIs."
  },
  {
    id: "backorder",
    title: "Customer Service and Back-Order Analytics",
    page: "project-customer-service-backorder.html",
    roles: ["Operations Analytics", "Business Analyst"],
    tools: ["Python", "SQL", "Power BI"],
    summary: "Identify delay patterns, root causes, service bottlenecks, and improvement opportunities."
  },
  {
    id: "forecasting",
    title: "Predictive Sales Forecasting",
    page: "project-sales-forecasting.html",
    roles: ["Data Analyst", "Sales Analytics"],
    tools: ["Python", "pandas", "Forecasting"],
    summary: "Forecast demand and explain model output in business language for planning and inventory decisions."
  },
  {
    id: "text-analytics",
    title: "Text Analytics on Customer Feedback",
    page: "project-text-analytics.html",
    roles: ["Data Analyst", "Customer Insights"],
    tools: ["Python", "NLP", "Visualization"],
    summary: "Extract sentiment, themes, and operational recommendations from customer comments or reviews."
  },
  {
    id: "ai-reporting",
    title: "AI-Enhanced Business Reporting Workflow",
    page: "project-ai-reporting-workflow.html",
    roles: ["Business Analyst", "BI Analyst", "AI Analyst"],
    tools: ["GenAI", "SQL", "Power BI"],
    summary: "Design a responsible AI workflow for faster reporting, insight drafting, and executive summaries."
  }
];

const researchTracks = [
  {
    title: "AI in Business Analytics and Decision Support",
    page: "research-ai-business-analytics.html",
    months: "June-July",
    summary: "Research how generative AI changes BI reporting, text-to-SQL, insight generation, and responsible decision support."
  },
  {
    title: "Sales and Customer Analytics",
    page: "research-sales-customer-analytics.html",
    months: "August-September",
    summary: "Study customer segmentation, key account analytics, revenue forecasting, CRM analytics, and sales performance improvement."
  },
  {
    title: "Operations Analytics and Process Improvement",
    page: "research-operations-analytics.html",
    months: "October-November",
    summary: "Research inventory availability, back-order analytics, branch benchmarking, and process efficiency in retail/manufacturing."
  }
];

const weeklyTasks = [
  {
    week: "June W1",
    focus: "PL-300 setup",
    tasks: [
      ["Certification", "Review PL-300 exam guide and install Power BI Desktop."],
      ["Portfolio", "Choose sales dataset and define first 6 KPIs."],
      ["Research", "Collect 3 sources on AI-assisted BI reporting."],
      ["Job Search", "Save 10 target job descriptions and extract recurring keywords."]
    ]
  },
  {
    week: "June W2",
    focus: "Data preparation",
    tasks: [
      ["Certification", "Complete Power Query and data-cleaning practice."],
      ["Portfolio", "Clean sales data and document assumptions."],
      ["Research", "Outline AI research brief."],
      ["Job Search", "Update LinkedIn headline and Handshake role targets."]
    ]
  },
  {
    week: "July W1",
    focus: "Dashboard build",
    tasks: [
      ["Certification", "Practice DAX measures and data modeling."],
      ["Portfolio", "Build first Power BI dashboard version."],
      ["Research", "Draft AI research brief introduction and use cases."],
      ["Job Search", "Send 5 networking messages to alumni or analysts."]
    ]
  },
  {
    week: "August W1",
    focus: "CAPM launch",
    tasks: [
      ["Certification", "Confirm CAPM eligibility and 23-hour education path."],
      ["Portfolio", "Begin retail operations KPI dashboard."],
      ["Research", "Start sales/customer analytics research source list."],
      ["Job Search", "Tailor resume for Business Analyst and BI Analyst roles."]
    ]
  },
  {
    week: "September W2",
    focus: "BA proof",
    tasks: [
      ["Certification", "Complete CAPM agile and business analysis review."],
      ["Portfolio", "Publish BA case study with process map and user stories."],
      ["Research", "Finalize sales analytics research visual."],
      ["Job Search", "Apply to 8-12 analyst roles and track follow-ups."]
    ]
  },
  {
    week: "October W1",
    focus: "Tableau launch",
    tasks: [
      ["Certification", "Review Tableau Data Analyst exam objectives."],
      ["Portfolio", "Build customer service/back-order analytics project."],
      ["Research", "Start operations analytics research brief."],
      ["Job Search", "Post one portfolio update on LinkedIn."]
    ]
  },
  {
    week: "November W2",
    focus: "Advanced analytics",
    tasks: [
      ["Certification", "Complete Tableau practice exam and dashboard drills."],
      ["Portfolio", "Build forecasting and text analytics project pages."],
      ["Research", "Finalize operations analytics recommendations."],
      ["Job Search", "Tailor resume for Sales Analytics and Operations Analytics roles."]
    ]
  },
  {
    week: "December W1",
    focus: "Launch package",
    tasks: [
      ["Certification", "Audit LinkedIn credentials and resume certification section."],
      ["Portfolio", "Polish portfolio homepage and add research links."],
      ["Research", "Publish research and thought-leadership section."],
      ["Job Search", "Prepare January application tracker and target employer list."]
    ]
  }
];

const roles = ["Business Analyst", "Data Analyst", "BI Analyst", "Sales Analytics", "Operations Analytics", "Project Analyst"];

const roleFitRows = [
  ["PL-300", ["Moderate", "Strong", "Strong", "Strong", "Moderate", "Supporting"]],
  ["CAPM", ["Strong", "Supporting", "Supporting", "Moderate", "Strong", "Strong"]],
  ["Tableau Data Analyst", ["Moderate", "Strong", "Strong", "Strong", "Moderate", "Supporting"]],
  ["Sales Dashboard", ["Moderate", "Strong", "Strong", "Strong", "Supporting", "Supporting"]],
  ["Retail Operations Dashboard", ["Strong", "Moderate", "Strong", "Supporting", "Strong", "Moderate"]],
  ["BA Case Study", ["Strong", "Supporting", "Supporting", "Supporting", "Moderate", "Strong"]],
  ["Back-Order Analytics", ["Strong", "Moderate", "Moderate", "Supporting", "Strong", "Moderate"]],
  ["Forecasting Project", ["Supporting", "Strong", "Moderate", "Strong", "Moderate", "Supporting"]],
  ["Text Analytics", ["Supporting", "Strong", "Moderate", "Moderate", "Supporting", "Supporting"]],
  ["AI Reporting Workflow", ["Strong", "Moderate", "Strong", "Moderate", "Moderate", "Moderate"]]
];

const trackPanel = document.querySelector("#trackPanel");
const timelineGrid = document.querySelector("#timelineGrid");
const deliverablesGrid = document.querySelector("#deliverablesGrid");
const certGrid = document.querySelector("#certGrid");
const microGrid = document.querySelector("#microGrid");
const portfolioGrid = document.querySelector("#portfolioGrid");
const weekGrid = document.querySelector("#weekGrid");
const roleMatrix = document.querySelector("#roleMatrix");
const roleControls = document.querySelector("#roleControls");
const researchGrid = document.querySelector("#researchGrid");

function renderTrack(trackKey) {
  const track = tracks[trackKey];
  trackPanel.innerHTML = `
    <div class="panel-hero">
      <div class="panel-summary">
        <span class="priority-pill">${track.priority}</span>
        <h3>${track.title}</h3>
        <p>${track.summary}</p>
      </div>
      <div class="panel-detail">
        ${track.details
          .map(
            ([heading, text]) => `
              <article class="detail-card">
                <strong>${heading}</strong>
                <span>${text}</span>
              </article>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderTimeline(month = "all") {
  const months = month === "all" ? timeline : timeline.filter((entry) => entry.month === month);
  timelineGrid.innerHTML = months
    .map(
      (entry) => `
        <article class="month-card">
          <div class="month-top">
            <h3>${entry.month} 2026</h3>
          </div>
          <div class="month-body">
            ${entry.items
              .map(
                ([heading, text]) => `
                  <div class="timeline-item">
                    <strong>${heading}</strong>
                    <span>${text}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderDeliverables() {
  deliverablesGrid.innerHTML = deliverables
    .map(
      (item) => `
        <article class="deliverable-card">
          <h3>${item.title}</h3>
          <p>${item.copy}</p>
          <span class="tag">${item.tag}</span>
        </article>
      `
    )
    .join("");
}

function renderCertifications() {
  certGrid.innerHTML = certifications
    .map((cert) => {
      const done = localStorage.getItem(`cert-${cert.id}`) === "done";
      return `
        <article class="cert-card">
          <div class="cert-header">
            <span class="status-chip ${done ? "done" : ""}">${done ? "Marked for completion" : cert.months}</span>
            <h3>${cert.name}</h3>
            <div class="cert-meta">
              <span>${cert.code}</span>
              <span>${cert.provider}</span>
              <span>${cert.level}</span>
            </div>
          </div>
          <div class="cert-body">
            <p>${cert.summary}</p>
            <p><strong>Cost:</strong> ${cert.cost}</p>
            <div class="mini-calendar">
              ${cert.weeks
                .map((week, index) => `<div class="mini-week"><strong>Week ${index + 1}</strong><span>${week}</span></div>`)
                .join("")}
            </div>
            <div class="cert-actions">
              <a href="${cert.page}">Open brief</a>
              <button type="button" data-cert-toggle="${cert.id}">${done ? "Reset" : "Track"}</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-cert-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.certToggle;
      const key = `cert-${id}`;
      if (localStorage.getItem(key) === "done") {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, "done");
      }
      renderCertifications();
      updateProgress();
    });
  });
}

function renderMicroCredentials() {
  microGrid.innerHTML = microCredentials
    .map(
      ([month, name, text]) => `
        <article class="micro-card">
          <strong>${month} 2026</strong>
          <h3>${name}</h3>
          <p>${text}</p>
        </article>
      `
    )
    .join("");
}

function renderPortfolioProjects() {
  portfolioGrid.innerHTML = portfolioProjects
    .map(
      (project) => `
        <article class="portfolio-card">
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <div class="role-pills">${project.roles.map((role) => `<span>${role}</span>`).join("")}</div>
          <div class="tool-pills">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
          <a href="${project.page}">Open project brief</a>
        </article>
      `
    )
    .join("");
}

function renderResearchTracks() {
  researchGrid.innerHTML = researchTracks
    .map(
      (track) => `
        <article class="research-card">
          <span class="status-chip">${track.months}</span>
          <h3>${track.title}</h3>
          <p>${track.summary}</p>
          <a class="text-link" href="${track.page}">Open research brief</a>
        </article>
      `
    )
    .join("");
}

function renderWeeklyBoard(filter = "all") {
  weekGrid.innerHTML = weeklyTasks
    .map((week, weekIndex) => {
      const tasks = filter === "all" ? week.tasks : week.tasks.filter(([type]) => type === filter);
      if (!tasks.length) return "";
      return `
        <article class="week-card">
          <span>${week.week}</span>
          <h3>${week.focus}</h3>
          <div class="week-tasks">
            ${tasks
              .map(([type, text], taskIndex) => {
                const originalIndex = week.tasks.findIndex(([originalType, originalText]) => originalType === type && originalText === text);
                const key = `week-${weekIndex}-${originalIndex >= 0 ? originalIndex : taskIndex}`;
                const checked = localStorage.getItem(key) === "done";
                return `
                  <label class="week-task">
                    <input type="checkbox" data-week-task="${key}" ${checked ? "checked" : ""} />
                    <span><strong>${type}</strong>${text}</span>
                  </label>
                `;
              })
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-week-task]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        localStorage.setItem(checkbox.dataset.weekTask, "done");
      } else {
        localStorage.removeItem(checkbox.dataset.weekTask);
      }
      updateProgress();
    });
  });

  updateProgress();
}

function renderRoleMatrix(activeRole = "all") {
  roleControls.innerHTML = `
    <button class="${activeRole === "all" ? "active" : ""}" data-role-filter="all" type="button">All Roles</button>
    ${roles.map((role) => `<button class="${activeRole === role ? "active" : ""}" data-role-filter="${role}" type="button">${role}</button>`).join("")}
  `;

  roleMatrix.innerHTML = `
    <thead>
      <tr>
        <th>Credential / Project</th>
        ${roles.map((role) => `<th class="${activeRole !== "all" && activeRole !== role ? "role-muted" : ""}">${role}</th>`).join("")}
      </tr>
    </thead>
    <tbody>
      ${roleFitRows
        .map(
          ([name, fits]) => `
            <tr>
              <th>${name}</th>
              ${fits
                .map((fit, index) => {
                  const role = roles[index];
                  const muted = activeRole !== "all" && activeRole !== role ? "role-muted" : "";
                  return `<td class="fit-${fit.toLowerCase()} ${muted}">${fit}</td>`;
                })
                .join("")}
            </tr>
          `
        )
        .join("")}
    </tbody>
  `;

  document.querySelectorAll("[data-role-filter]").forEach((button) => {
    button.addEventListener("click", () => renderRoleMatrix(button.dataset.roleFilter));
  });
}

function updateBudget() {
  const pl300 = document.querySelector("#budgetPl300")?.checked ? 165 : 0;
  const capmIncluded = document.querySelector("#budgetCapm")?.checked;
  const pmiMember = document.querySelector("#budgetPmiMember")?.checked;
  const capm = capmIncluded ? (pmiMember ? 225 : 300) : 0;
  const tableau = document.querySelector("#budgetTableau")?.checked ? 250 : 0;
  const learning = document.querySelector("#budgetLearning")?.checked ? 90 : 0;
  const total = pl300 + capm + tableau + learning;
  const totalNode = document.querySelector("#budgetPlannerTotal");
  const adviceNode = document.querySelector("#budgetPlannerAdvice");
  if (!totalNode || !adviceNode) return;
  totalNode.textContent = `$${total}`;
  adviceNode.textContent =
    total <= 400
      ? "Lean plan. Good if budget is tight and portfolio work stays the priority."
      : total <= 725
        ? "Balanced if spread across June-November."
        : "Heavy spend. Consider delaying optional items or using free prep resources.";
}

function updateProgress() {
  const certDone = certifications.filter((cert) => localStorage.getItem(`cert-${cert.id}`) === "done").length;
  const allWeekKeys = weeklyTasks.flatMap((week, weekIndex) => week.tasks.map((_, taskIndex) => `week-${weekIndex}-${taskIndex}`));
  const weekDone = allWeekKeys.filter((key) => localStorage.getItem(key) === "done").length;
  const weeklyPercent = allWeekKeys.length ? Math.round((weekDone / allWeekKeys.length) * 100) : 0;
  const projectEstimate = Math.min(7, Math.floor(weekDone / 4));
  const overall = Math.round(((certDone / 3) * 35) + ((projectEstimate / 7) * 45) + ((weeklyPercent / 100) * 20));

  document.querySelector("#certScore").textContent = `${certDone}/3`;
  document.querySelector("#projectScore").textContent = `${projectEstimate}/7`;
  document.querySelector("#trackScore").textContent = `${overall}%`;
  document.querySelector("#jobScore").textContent = overall >= 70 ? "Ready" : overall >= 30 ? "Building" : "Foundation";
  document.querySelector("#weeklyProgressLabel").textContent = `${weeklyPercent}% complete`;
  document.querySelector("#weeklyProgressBar").value = weeklyPercent;
}

document.querySelectorAll(".track-tab").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".track-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderTrack(button.dataset.track);
  });
});

document.querySelectorAll("[data-track-link]").forEach((link) => {
  link.addEventListener("click", () => {
    const track = link.dataset.trackLink;
    const button = document.querySelector(`.track-tab[data-track="${track}"]`);
    if (!button) return;
    document.querySelectorAll(".track-tab").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderTrack(track);
  });
});

document.querySelectorAll(".month-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".month-button").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderTimeline(button.dataset.month);
  });
});

document.querySelectorAll("[data-jump]").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelector(card.dataset.jump)?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

document.querySelectorAll(".week-filter").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".week-filter").forEach((tab) => tab.classList.remove("active"));
    button.classList.add("active");
    renderWeeklyBoard(button.dataset.weekFilter);
  });
});

["budgetPl300", "budgetCapm", "budgetPmiMember", "budgetTableau", "budgetLearning"].forEach((id) => {
  document.querySelector(`#${id}`)?.addEventListener("change", updateBudget);
});

renderTrack("certifications");
renderCertifications();
renderMicroCredentials();
renderPortfolioProjects();
renderResearchTracks();
renderTimeline();
renderWeeklyBoard();
renderRoleMatrix();
renderDeliverables();
updateBudget();
updateProgress();
