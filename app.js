const ASSET = 'https://johndelta.github.io/assets/images/';

const CURRENT_PROJECTS = [
  {
    title: "Atlas Bake - A blender Add-on for Texture Baking",
    images: ["atlas_bake_0.gif","atlas_bake_1.png","atlas_bake_2.png","atlas_bake_3.png","atlas_bake_4.png"],
    tags: ["Python", "Blender API", "Bake Texture", "Add-on"],
    filterTags: "add-on python blender",
    badge: "recent",
    desc: "A Blender add-on that automates baking passes (Base Color, Metallic, Roughness, Normals, AO), packed outputs (e.g., Metallic+Smoothness), and export for game engines.",
    sourceLink: "",
    viewLink: "",
    productLink: "https://superhivemarket.com/products/atlas-bake",
    documentationLink: "https://johndelta.github.io/atlas_bake_documentation/"
  },
  {
    title: "Blender Git - A Blender Add-on for Git Version Control",
    images: ["blender-git_0.gif","blender-git_1.png","blender-git_2.png","blender-git_3.png","blender-git_4.png"],
    tags: ["Python", "Blender API", "Git", "Git LFS", "Add-on", "Version Control"],
    filterTags: "add-on python blender git",
    badge: "recent",
    desc: "A Blender add-on that integrates Git-based version control directly into Blender's interface. Commit changes, manage branches, view history, and resolve merge conflicts without ever touching the terminal. Generates human-readable summaries of scene changes (e.g. \"Object 'Cube' moved\") by diffing JSON snapshots of .blend files.",
    sourceLink: "",
    viewLink: "",
    productLink: "https://superhivemarket.com/products/blender-git",
    documentationLink: "https://johndelta.github.io/blender_git_documentation/"
  }
];

const BACKLOG_PROJECTS = [
  {
    title: "Junior Workers",
    images: ["junior-workers_0.jpg","junior-workers_1.jpg","junior-workers_2.jpg","junior-workers_3.jpg","junior-workers_4.jpg","junior-workers_5.jpg","junior-workers_6.jpg","junior-workers_7.jpg","junior-workers_8.jpg"],
    tags: ["RESTful API", "Java", "Maven", "MySQL", "React", "JavaScript", "HTML5", "CSS"],
    filterTags: "api java react sql crud restful",
    badge: "legacy",
    desc: "Concept professional networking web app for undergraduate/postgraduate students and hirers. Students create profiles, upload CVs and search job posts. Hirers search students and create job posts.\n\nFor this project, I:\n— Developed REST API controllers with CRUD functions using Java (JAXRS-Jersey)\n— Applied JWT for authentication\n— Developed a React web application with react-router for async routing\n— Designed normalized relational database",
    sourceLink: "https://github.com/JohnDelta/junior-workers",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "Gym Equipment",
    images: ["gymequipment_0.jpg","gymequipment_1.jpg","gymequipment_2.jpg","gymequipment_3.jpg","gymequipment_4.jpg","gymequipment_5.jpg","gymequipment_6.jpg","gymequipment_7.jpg","gymequipment_8.jpg","gymequipment_9.jpg","gymequipment_10.jpg","gymequipment_11.jpg"],
    tags: ["Spring MVC", "Java", "JPA", "Hibernate", "MySQL", "JSTL"],
    filterTags: "spring java sql crud hibernate",
    badge: "legacy",
    desc: "Concept e-shop for gym equipment with Spring MVC, JPA/Hibernate, JSP views.",
    sourceLink: "https://github.com/JohnDelta/gym_equipment",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "9laugh",
    images: ["9laugh_0.jpg","9laugh_1.jpg","9laugh_2.jpg","9laugh_3.jpg","9laugh_4.jpg","9laugh_5.jpg","9laugh_6.jpg","9laugh_7.jpg","9laugh_8.jpg","9laugh_9.jpg","9laugh_10.jpg","9laugh_11.jpg","9laugh_12.jpg"],
    tags: ["Spring Boot", "JWT", "REST API", "React", "MySQL", "Maven"],
    filterTags: "spring java sql react api crud",
    badge: "legacy",
    desc: "Entertainment platform (9gag-like) with Spring Boot REST API, JWT auth and React client.",
    sourceLink: "https://github.com/JohnDelta/9laugh_webapp",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "Examination Centers",
    images: ["examinationcenters_0.jpg","examinationcenters_1.jpg","examinationcenters_2.jpg","examinationcenters_3.jpg","examinationcenters_4.jpg","examinationcenters_5.jpg","examinationcenters_6.jpg","examinationcenters_7.jpg","examinationcenters_8.jpg","examinationcenters_9.jpg","examinationcenters_10.jpg","examinationcenters_11.jpg","examinationcenters_12.jpg","examinationcenters_13.jpg","examinationcenters_14.jpg","examinationcenters_15.jpg","examinationcenters_16.jpg","examinationcenters_17.jpg"],
    tags: ["Java", "RESTful", "JSP", "Servlet", "Swing", "MySQL"],
    filterTags: "java api sql crud",
    badge: "legacy",
    desc: "Online examination system with roles (Admin/Supervisor/Student), results, and Excel imports.",
    sourceLink: "https://github.com/JohnDelta/ExaminationCenters",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "Ticket Support System",
    images: ["issues_0.jpg","issues_1.jpg","issues_2.jpg","issues_3.jpg"],
    tags: ["PHP", "MySQL", "Bootstrap", "HTML5", "CSS", "JS"],
    filterTags: "sql crud php",
    badge: "legacy",
    desc: "Simple ticketing app for internal issue reporting and triage.",
    sourceLink: "https://github.com/JohnDelta/Issues",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "Lab Exchanges",
    images: ["lab-exchange_0.jpg","lab-exchange_1.jpg","lab-exchange_2.jpg","lab-exchange_3.jpg","lab-exchange_4.jpg","lab-exchange_5.jpg"],
    tags: ["React", "Spring Boot", "MongoDB", "RabbitMQ", "Docker", "Kubernetes"],
    filterTags: "react spring rabbitmq api",
    badge: "legacy",
    desc: "Cloud-native lab enrollment app with microservices (Spring Boot), React UI, MongoDB, RabbitMQ; Docker/Kubernetes deploys.",
    sourceLink: "https://github.com/JohnDelta/LabExchange_WebApplication",
    viewLink: "", productLink: "", documentationLink: ""
  },
  {
    title: "Biriba Notes",
    images: ["biriba-notes_0.jpg","biriba-notes_1.jpg","biriba-notes_2.jpg","biriba-notes_3.jpg"],
    tags: ["React", "Google Drive API", "HTML5", "CSS"],
    filterTags: "react api",
    badge: "legacy",
    desc: "React app to keep scores for the \"Biriba\" card game; uses Google Drive API for persistence.",
    sourceLink: "https://github.com/JohnDelta/biriba",
    viewLink: "https://johndelta.github.io/biriba",
    productLink: "", documentationLink: ""
  },
  {
    title: "Pomodoro Clock",
    images: ["pomodoro-clock_0.jpg","pomodoro-clock_1.jpg"],
    tags: ["React", "HTML5", "CSS"],
    filterTags: "react",
    badge: "legacy",
    desc: "Responsive Pomodoro clock built in React with adjustable break and session lengths.",
    sourceLink: "https://github.com/JohnDelta/pomodoro-clock",
    viewLink: "https://johndelta.github.io/pomodoro-clock",
    productLink: "", documentationLink: ""
  }
];

const EXPERIENCE = [
  {
    company: "Betsson Group · Athens, Greece",
    role: "Backend .NET Software Engineer",
    period: "May 2026 – Present",
    bullets: [
      "Building and maintaining scalable backend services using <strong>C# and .NET</strong> in a microservices architecture.",
    ],
    tags: ["C#", ".NET", "SQL Server", "RabbitMQ", "Git"],
    dim: false
  },
  {
    company: "Dataverse Ltd. · Athens, Greece",
    role: "Software Engineer",
    period: "Mar 2023 – May 2026",
    bullets: [
      "Worked across a diverse stack including <strong>.NET Framework (4.x), .NET 8.x, ASP.NET (MVC, Razor Pages), JavaScript, CSS, HTML, SQL Server, MongoDB, RabbitMQ, Angular (v9 &amp; v19)</strong>.",
      "Resolved a wide range of <strong>bugs and development tasks</strong> across multiple systems, often <strong>taking ownership</strong> with minimal initial analysis and delivering under <strong>tight deadlines</strong>.",
      "Delivered <strong>client-critical fixes</strong> and managed <strong>hotfix deployments</strong>, balancing speed with reliability.",
      "Contributed to <strong>monolithic MVC systems</strong>, <strong>API-driven microservices</strong>, and <strong>Angular web apps</strong>, applying <strong>Domain-Driven Design (DDD)</strong> and key software design patterns.",
      "Developed Angular front-ends from <strong>Figma UI designs</strong> using <strong>Angular Material</strong> and modular component structure.",
      "Created <strong>data migration tools</strong> to import and transform data from external files or databases."
    ],
    tags: ["C#", ".NET Framework (4.x)", ".NET 8.x", "ASP.NET MVC", "Razor Pages", "React 18", "Angular 9/19", "Angular Material", "SQL Server", "MongoDB", "RabbitMQ", "EF/EF Core", "LINQ", "Git"],
    dim: true
  },
  {
    company: "Hellenic Armed Forces · Dept. of Informatics &amp; Research",
    role: "IT Support Technician · Call Center Dispatcher",
    period: "Mar 2022 – Jan 2023",
    bullets: ["Completed <strong>mandatory military service</strong> while providing <strong>technical IT support</strong> to internal departments."],
    tags: ["IT Support", "Helpdesk"],
    dim: true
  },
  {
    company: "Megaventory Inc. · Athens, Greece",
    role: "Software Engineer",
    period: "Dec 2020 – Oct 2021",
    bullets: [
      "Contributed to the <strong>analysis, design, and development</strong> of projects within the company's internal systems.",
      "Resolved <strong>backlog issues</strong> across all layers of the stack, with a focus on <strong>code refactoring</strong> and cleanup aligned with SOLID principles.",
      "<strong>Redesigned and refactored key UI components</strong>, implementing modern design approaches and enhancing usability.",
      "Conducted <strong>code reviews and pull request analysis</strong>, ensuring code quality and adherence to best practices.",
      "Provided <strong>technical support</strong> to customers by analysing reported issues, debugging, and delivering effective resolutions."
    ],
    tags: [".NET 4.x", "VB.NET", "ASP.NET Web Forms", "Entity Framework", "SQL Server", "DevExpress", "JavaScript", "jQuery", "HTML", "CSS", "Git"],
    dim: true
  }
];

// ── BUILD CARD ──
function buildCard(p) {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.dataset.filter = p.filterTags;

  const tagsHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');

  const links = [];
  if (p.sourceLink)        links.push(`<a class="project-link" href="${p.sourceLink}" target="_blank" rel="noopener"><i class="fa-solid fa-code"></i> Code</a>`);
  if (p.viewLink)          links.push(`<a class="project-link" href="${p.viewLink}" target="_blank" rel="noopener"><i class="fa-solid fa-play"></i> Demo</a>`);
  if (p.productLink)       links.push(`<a class="project-link" href="${p.productLink}" target="_blank" rel="noopener"><i class="fa-solid fa-box-open"></i> Product</a>`);
  if (p.documentationLink) links.push(`<a class="project-link" href="${p.documentationLink}" target="_blank" rel="noopener"><i class="fa-solid fa-book"></i> Docs</a>`);
  const footerHtml = links.length ? `<div class="project-footer">${links.join('')}</div>` : '';

  const badge = p.badge === 'recent'
    ? `<span class="project-badge badge-recent">Recent</span>`
    : `<span class="project-badge badge-legacy">Legacy</span>`;

  const firstImg = p.images && p.images.length ? ASSET + p.images[0] : null;
  const thumbHtml = firstImg
    ? `<img src="${firstImg}" alt="${p.title}" loading="lazy" style="cursor:pointer;" data-gallery-open onerror="this.closest('.project-thumb').innerHTML='<div class=\\'project-thumb-placeholder\\'>project screenshot</div>'">`
    : `<div class="project-thumb-placeholder">project screenshot</div>`;

  card.innerHTML = `
    <div class="project-thumb">${thumbHtml}</div>
    <div class="project-body">
      <div class="project-header">
        <span class="project-name">${p.title}</span>
        ${badge}
      </div>
      <p class="project-desc">${p.desc.replace(/\n/g, '<br>')}</p>
      <div class="tags">${tagsHtml}</div>
    </div>
    ${footerHtml}
  `;

  // Open gallery on thumb click
  const thumb = card.querySelector('[data-gallery-open]');
  if (thumb) thumb.addEventListener('click', () => openGallery(p));

  // More/Less toggle
  requestAnimationFrame(() => {
    const descEl = card.querySelector('.project-desc');
    if (descEl && descEl.scrollHeight > descEl.clientHeight + 6) {
      const btn = document.createElement('button');
      btn.className = 'more-btn';
      btn.textContent = 'More';
      btn.addEventListener('click', () => {
        const expanded = descEl.classList.toggle('expanded');
        btn.textContent = expanded ? 'Less' : 'More';
      });
      descEl.insertAdjacentElement('afterend', btn);
    }
  });

  return card;
}

function renderGrid(projects, gridId) {
  const grid = document.getElementById(gridId);
  grid.innerHTML = '';
  projects.forEach(p => grid.appendChild(buildCard(p)));
}

renderGrid(CURRENT_PROJECTS, 'recent-grid');
renderGrid(BACKLOG_PROJECTS, 'legacy-grid');

// ── EXPERIENCE ──
const expTimeline = document.getElementById('experience-timeline');
EXPERIENCE.forEach((item, i) => {
  const el = document.createElement('div');
  el.className = 'timeline-item';
  const bullets = item.bullets.map(b => `<li>${b}</li>`).join('');
  const tags = item.tags.map(t => `<span class="tag">${t}</span>`).join('');
  el.innerHTML = `
    <div class="timeline-track">
      <div class="timeline-dot${item.dim ? ' dim' : ''}"></div>
        <div class="timeline-line"></div>
    </div>
    <div class="timeline-body">
      <div class="timeline-header">
        <span class="timeline-company">${item.company}</span>
        <span class="timeline-period">${item.period}</span>
      </div>
      <div class="timeline-role">${item.role}</div>
      ${bullets ? `<ul class="timeline-bullets">${bullets}</ul>` : ''}
      <div class="tags">${tags}</div>
    </div>
  `;
  expTimeline.appendChild(el);
});

// ── GALLERY ──
const galleryModal = document.getElementById('gallery-modal');
const galleryImg   = document.getElementById('gallery-img');
const galleryTitle = document.getElementById('gallery-title');
const galleryCounter = document.getElementById('gallery-counter');
const galleryPrev  = document.getElementById('gallery-prev');
const galleryNext  = document.getElementById('gallery-next');
let galleryState   = { images: [], index: 0 };

function galleryUpdate() {
  const { images, index } = galleryState;
  galleryImg.src = ASSET + images[index];
  galleryCounter.textContent = `${index + 1} / ${images.length}`;
  galleryPrev.style.opacity = index === 0 ? '0.3' : '1';
  galleryPrev.style.pointerEvents = index === 0 ? 'none' : '';
  galleryNext.style.opacity = index === images.length - 1 ? '0.3' : '1';
  galleryNext.style.pointerEvents = index === images.length - 1 ? 'none' : '';
}

function openGallery(p) {
  galleryState = { images: p.images, index: 0 };
  galleryTitle.textContent = p.title;
  galleryUpdate();
  galleryModal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  galleryModal.style.display = 'none';
  document.body.style.overflow = '';
  galleryImg.src = '';
}

galleryPrev.addEventListener('click', () => {
  if (galleryState.index > 0) { galleryState.index--; galleryUpdate(); }
});
galleryNext.addEventListener('click', () => {
  if (galleryState.index < galleryState.images.length - 1) { galleryState.index++; galleryUpdate(); }
});
document.getElementById('gallery-close').addEventListener('click', closeGallery);
galleryModal.addEventListener('click', e => { if (e.target === galleryModal) closeGallery(); });
document.addEventListener('keydown', e => {
  if (galleryModal.style.display !== 'flex') return;
  if (e.key === 'Escape') closeGallery();
  if (e.key === 'ArrowLeft' && galleryState.index > 0) { galleryState.index--; galleryUpdate(); }
  if (e.key === 'ArrowRight' && galleryState.index < galleryState.images.length - 1) { galleryState.index++; galleryUpdate(); }
});

// ── FILTERS ──
function setupFilter(barId, gridId) {
  const btns = document.querySelectorAll('#' + barId + ' .filter-btn');
  const getCards = () => document.querySelectorAll('#' + gridId + ' .project-card');
  btns.forEach(btn => btn.addEventListener('click', () => {
    btns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    getCards().forEach(c => {
      c.style.display = (f === 'all' || (c.dataset.filter || '').includes(f)) ? '' : 'none';
    });
  }));
}
setupFilter('recent-filters', 'recent-grid');
setupFilter('legacy-filters', 'legacy-grid');

// ── LEGACY TOGGLE ──
let legacyOpen = false;
const legacyWrap = document.getElementById('legacy-wrap');
const toggleIcon = document.getElementById('toggle-icon');
document.getElementById('legacy-toggle').addEventListener('click', () => {
  legacyOpen = !legacyOpen;
  legacyWrap.style.maxHeight = legacyOpen ? legacyWrap.scrollHeight + 'px' : '0';
  legacyWrap.style.opacity = legacyOpen ? '1' : '0';
  toggleIcon.classList.toggle('open', legacyOpen);
});

// Recalc legacy height on resize
window.addEventListener('resize', () => {
  if (legacyOpen) legacyWrap.style.maxHeight = legacyWrap.scrollHeight + 'px';
});

// ── FADE IN ──
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObserver.unobserve(e.target); } });
}, { threshold: 0.07 });
document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));

// ── FOOTER YEAR ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── EMAILJS ──
emailjs.init({ publicKey: "_Tnn0nvaK0_xhVrhy" });
document.getElementById('contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  const btn = document.getElementById('send-btn');
  const status = document.getElementById('form-status');
  btn.disabled = true; status.textContent = 'Sending…';
  try {
    await emailjs.sendForm('service_eigu1au', 'template_hrahja3', '#contact-form');
    e.target.reset(); status.textContent = 'Thanks! Your message was sent.';
  } catch { status.textContent = 'Something went wrong. Please try again.'; }
  finally { btn.disabled = false; }
});