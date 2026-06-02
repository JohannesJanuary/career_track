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

const weeklyTaskPlan = {
  June: [
    ["PL-300 setup", "Review PL-300 exam guide and install Power BI Desktop.", "Choose sales dataset and define first 6 KPIs.", "Collect 3 sources on AI-assisted BI reporting.", "Save 10 target job descriptions and extract recurring keywords."],
    ["Data preparation", "Complete Power Query and data-cleaning practice.", "Clean sales data and document assumptions.", "Outline AI research brief.", "Update LinkedIn headline and Handshake role targets."],
    ["Data modeling", "Practice relationships, star schema, and basic DAX.", "Create sales data model and first KPI measures.", "Draft AI reporting use-case section.", "Send 5 networking messages to alumni or analysts."],
    ["Dashboard version 1", "Complete PL-300 visualization practice.", "Build first sales dashboard version.", "Write AI research brief introduction.", "Apply to 8 analyst roles and track responses."]
  ],
  July: [
    ["DAX and storytelling", "Practice DAX measures and time intelligence.", "Add trend, product, customer, and region visuals.", "Draft AI decision-support section.", "Tailor resume for Data Analyst roles."],
    ["Practice assessment", "Complete PL-300 practice assessment and review weak areas.", "Write KPI dictionary and dashboard assumptions.", "Create AI research visual outline.", "Send 5 networking messages."],
    ["Publish sales project", "Rebuild weak PL-300 areas from memory.", "Publish sales dashboard project page and screenshots.", "Finalize AI research brief.", "Apply to 8-12 roles."],
    ["PL-300 readiness", "Schedule or complete PL-300 readiness review.", "Add executive recommendation memo.", "Publish AI research LinkedIn post.", "Update portfolio and LinkedIn featured section."]
  ],
  August: [
    ["CAPM launch", "Confirm CAPM eligibility and 23-hour education path.", "Begin retail operations KPI dashboard.", "Start sales/customer analytics research source list.", "Tailor resume for Business Analyst and BI Analyst roles."],
    ["Project fundamentals", "Study project lifecycle, scope, schedule, cost, quality, and risk.", "Define branch KPIs and operations scorecard.", "Outline sales analytics research brief.", "Save 10 BA and Project Analyst job descriptions."],
    ["Predictive methods", "Study predictive project management and change control.", "Build retail operations dashboard wireframe.", "Draft customer segmentation section.", "Send 5 project/operations analyst networking messages."],
    ["Agile basics", "Study agile, hybrid, user stories, backlog, and sprint concepts.", "Build first retail operations dashboard version.", "Draft sales forecasting research section.", "Apply to 8-12 target roles."]
  ],
  September: [
    ["Business analysis", "Review requirements, stakeholders, communication, and acceptance criteria.", "Start BA case study problem statement and stakeholder map.", "Draft key account analytics section.", "Tailor resume for Operations Analyst roles."],
    ["BA proof", "Complete CAPM agile and business analysis review.", "Publish BA case study with process map and user stories.", "Finalize sales analytics research visual.", "Apply to 8-12 analyst roles and track follow-ups."],
    ["Mock exam", "Complete CAPM mock exam and glossary review.", "Polish retail operations dashboard and recommendations.", "Finalize sales/customer analytics research brief.", "Send 5 networking messages."],
    ["CAPM readiness", "Schedule or complete CAPM readiness review.", "Publish BA case study and operations dashboard links.", "Publish sales analytics LinkedIn post.", "Update resume projects section."]
  ],
  October: [
    ["Tableau launch", "Review Tableau Data Analyst exam objectives.", "Build customer service/back-order analytics project.", "Start operations analytics research brief.", "Post one portfolio update on LinkedIn."],
    ["Tableau data prep", "Practice Tableau connections, joins, and relationships.", "Clean back-order dataset and define issue categories.", "Research inventory and service bottleneck analytics.", "Tailor resume for BI Analyst roles."],
    ["Calculations", "Practice calculated fields, table calculations, and parameters.", "Build back-order dashboard version 1.", "Draft branch benchmarking research section.", "Send 5 BI/data analyst networking messages."],
    ["Dashboard interaction", "Practice Tableau filters, actions, tooltips, and dashboard navigation.", "Publish back-order analytics project draft.", "Draft operations analytics KPI framework.", "Apply to 8-12 target roles."]
  ],
  November: [
    ["Insight writing", "Practice Tableau insight interpretation and business recommendations.", "Start predictive sales forecasting notebook.", "Draft process improvement research section.", "Tailor resume for Sales Analytics roles."],
    ["Advanced analytics", "Complete Tableau practice exam and dashboard drills.", "Build forecasting and text analytics project pages.", "Finalize operations analytics recommendations.", "Tailor resume for Sales Analytics and Operations Analytics roles."],
    ["Project polish", "Review Tableau weak areas and final exam checklist.", "Publish forecasting project with model metrics.", "Finalize operations analytics research brief.", "Send 5 networking messages."],
    ["Tableau readiness", "Schedule or complete Tableau readiness review.", "Publish text analytics project draft.", "Publish operations analytics LinkedIn post.", "Apply to 8-12 roles and follow up."]
  ],
  December: [
    ["Launch package", "Audit LinkedIn credentials and resume certification section.", "Polish portfolio homepage and add research links.", "Publish research and thought-leadership section.", "Prepare January application tracker and target employer list."],
    ["AI workflow", "Complete AI for business/reporting credential or module.", "Build AI-enhanced reporting workflow project.", "Create combined research summary page.", "Tailor resume for top 3 role types."],
    ["Portfolio QA", "Check every project page for screenshots, tools, and resume bullets.", "Finalize all portfolio deliverables and links.", "Create short presentation summary for each research topic.", "Send 10 networking/follow-up messages."],
    ["Career launch", "Update LinkedIn licenses, Handshake, resume, and portfolio links.", "Publish career sprint summary post.", "Prepare interview stories from projects and research.", "Set January weekly application rhythm."]
  ]
};

const weeklyTasks = Object.entries(weeklyTaskPlan).flatMap(([month, weeks]) =>
  weeks.map(([focus, certification, portfolio, research, jobSearch], index) => ({
    week: `${month} W${index + 1}`,
    focus,
    tasks: [
      ["Certification", certification],
      ["Portfolio", portfolio],
      ["Research", research],
      ["Job Search", jobSearch]
    ]
  }))
);

const planMonths = Object.keys(weeklyTaskPlan);

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
  if (!trackPanel) return;
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
  if (!timelineGrid) return;
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
  if (!deliverablesGrid) return;
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
  if (!certGrid) return;
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
  if (!microGrid) return;
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
  if (!portfolioGrid) return;
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
  if (!researchGrid) return;
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

function getWeekKey(weekIndex, taskIndex) {
  return `week-${weekIndex}-${taskIndex}`;
}

function getMonthStats(month) {
  const monthIndex = planMonths.indexOf(month);
  const weeks = weeklyTaskPlan[month] || [];
  const keys = weeks.flatMap((_, weekOffset) => {
    const weekIndex = monthIndex * 4 + weekOffset;
    return [0, 1, 2, 3].map((taskIndex) => getWeekKey(weekIndex, taskIndex));
  });
  const done = keys.filter((key) => localStorage.getItem(key) === "done").length;
  const total = keys.length;
  return { done, total, percent: total ? Math.round((done / total) * 100) : 0 };
}

function isMonthUnlocked(month) {
  const monthIndex = planMonths.indexOf(month);
  if (monthIndex <= 0) return true;
  return planMonths.slice(0, monthIndex).every((previousMonth) => getMonthStats(previousMonth).percent === 100);
}

function getDefaultOpenMonth() {
  const firstIncomplete = planMonths.find((month) => isMonthUnlocked(month) && getMonthStats(month).percent < 100);
  return firstIncomplete || planMonths[planMonths.length - 1];
}

function renderCalendarPanel() {
  const panel = document.querySelector("#calendarPanel");
  if (!panel) return;
  const today = new Date();
  const monthName = today.toLocaleString("en-US", { month: "long" });
  const year = today.getFullYear();
  const first = new Date(year, today.getMonth(), 1);
  const daysInMonth = new Date(year, today.getMonth() + 1, 0).getDate();
  const blanks = first.getDay();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const cells = [
    ...dayNames.map((day) => `<strong>${day}</strong>`),
    ...Array.from({ length: blanks }, () => "<span></span>"),
    ...Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      return `<span class="${day === today.getDate() ? "today" : ""}">${day}</span>`;
    })
  ].join("");

  const planMonth = planMonths.includes(monthName) ? monthName : getDefaultOpenMonth();
  const stats = getMonthStats(planMonth);
  panel.innerHTML = `
    <article class="calendar-summary">
      <span>Today</span>
      <strong>${today.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</strong>
      <p>Current plan month: <strong>${planMonth}</strong>. Monthly progress: <strong>${stats.percent}%</strong>.</p>
    </article>
    <article class="mini-month-calendar">
      <div class="calendar-grid">${cells}</div>
    </article>
  `;
}

function renderWeeklyBoard(filter = "all", openMonth = localStorage.getItem("open-plan-month") || getDefaultOpenMonth()) {
  if (!weekGrid) return;
  weekGrid.innerHTML = planMonths
    .map((month, monthIndex) => {
      const unlocked = isMonthUnlocked(month);
      const stats = getMonthStats(month);
      const isOpen = unlocked && month === openMonth;
      const lockText = unlocked ? (stats.percent === 100 ? "Complete" : "Unlocked") : `Locked`;
      return `
        <section class="month-accordion ${isOpen ? "open" : ""} ${unlocked ? "" : "locked"}">
          <button class="month-toggle" type="button" data-month-toggle="${month}" ${unlocked ? "" : "disabled"}>
            <span><strong>${month} 2026</strong><span>${stats.done}/${stats.total} objectives complete</span></span>
            <em class="month-lock">${lockText}</em>
          </button>
          <div class="month-body-accordion">
            <div class="month-progress-row">
              <progress max="100" value="${stats.percent}"></progress>
              <span>${stats.percent}% monthly progress</span>
            </div>
            <div class="week-grid">
              ${(weeklyTaskPlan[month] || [])
                .map(([focus, certification, portfolio, research, jobSearch], weekOffset) => {
                  const weekIndex = monthIndex * 4 + weekOffset;
                  const week = {
                    week: `${month} W${weekOffset + 1}`,
                    focus,
                    tasks: [
                      ["Certification", certification],
                      ["Portfolio", portfolio],
                      ["Research", research],
                      ["Job Search", jobSearch]
                    ]
                  };
                  const tasks = filter === "all" ? week.tasks : week.tasks.filter(([type]) => type === filter);
                  if (!tasks.length) return "";
                  return `
                    <article class="week-card">
                      <span>${week.week}</span>
                      <h3>${week.focus}</h3>
                      <div class="week-tasks">
                        ${tasks
                          .map(([type, text]) => {
                            const originalIndex = week.tasks.findIndex(([originalType, originalText]) => originalType === type && originalText === text);
                            const key = getWeekKey(weekIndex, originalIndex);
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
                .join("")}
            </div>
          </div>
        </section>
      `;
    })
    .join("");

  document.querySelectorAll("[data-month-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      localStorage.setItem("open-plan-month", button.dataset.monthToggle);
      renderWeeklyBoard(filter, button.dataset.monthToggle);
    });
  });

  document.querySelectorAll("[data-week-task]").forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        localStorage.setItem(checkbox.dataset.weekTask, "done");
      } else {
        localStorage.removeItem(checkbox.dataset.weekTask);
      }
      const currentOpenMonth = localStorage.getItem("open-plan-month") || openMonth;
      const nextOpenMonth = getMonthStats(currentOpenMonth).percent === 100 ? getDefaultOpenMonth() : currentOpenMonth;
      localStorage.setItem("open-plan-month", nextOpenMonth);
      renderWeeklyBoard(filter, nextOpenMonth);
      renderCalendarPanel();
      updateProgress();
    });
  });

  renderCalendarPanel();
  updateProgress();
}

function renderRoleMatrix(activeRole = "all") {
  if (!roleControls || !roleMatrix) return;
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
  const allWeekKeys = weeklyTasks.flatMap((week, weekIndex) => week.tasks.map((_, taskIndex) => getWeekKey(weekIndex, taskIndex)));
  const weekDone = allWeekKeys.filter((key) => localStorage.getItem(key) === "done").length;
  const weeklyPercent = allWeekKeys.length ? Math.round((weekDone / allWeekKeys.length) * 100) : 0;
  const projectEstimate = Math.min(7, Math.floor(weekDone / 4));
  const overall = Math.round(((certDone / 3) * 35) + ((projectEstimate / 7) * 45) + ((weeklyPercent / 100) * 20));
  const activeMonth = localStorage.getItem("open-plan-month") || getDefaultOpenMonth();
  const monthStats = getMonthStats(activeMonth);

  if (document.querySelector("#certScore")) document.querySelector("#certScore").textContent = `${certDone}/3`;
  if (document.querySelector("#projectScore")) document.querySelector("#projectScore").textContent = `${projectEstimate}/7`;
  if (document.querySelector("#trackScore")) document.querySelector("#trackScore").textContent = `${overall}%`;
  if (document.querySelector("#jobScore")) document.querySelector("#jobScore").textContent = overall >= 70 ? "Ready" : overall >= 30 ? "Building" : "Foundation";
  if (document.querySelector("#monthlyProgressLabel")) document.querySelector("#monthlyProgressLabel").textContent = `${activeMonth}: ${monthStats.percent}% monthly goal complete`;
  if (document.querySelector("#weeklyProgressLabel")) document.querySelector("#weeklyProgressLabel").textContent = `Overall: ${weeklyPercent}% complete`;
  if (document.querySelector("#weeklyProgressBar")) document.querySelector("#weeklyProgressBar").value = weeklyPercent;
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
    renderWeeklyBoard(button.dataset.weekFilter, localStorage.getItem("open-plan-month") || getDefaultOpenMonth());
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
