// ===== DEFAULT RESUME DATA (Pre-filled from your current resume) =====
const DEFAULT_DATA = {
  name: "Priyanshu Bhati",
  phone: "+91 9027206415",
  email: "priyanshurajput2019@gmail.com",
  linkedin: "priyanshu-bhati2307",
  github: "Priyanshuakbs",
  about: "Full Stack Developer specializing in the MERN Stack with experience in designing, developing, and deploying responsive web applications. Proficient in React.js, Node.js, Express.js, MongoDB, and RESTful API development. Strong understanding of authentication, database management, and scalable application architecture.",
  education: [
    { degree: "Bachelor of Technology in Computer Science and Engineering", school: "Haridwar University, Uttarakhand, India", date: "2023 – 2027", detail: "CGPA: 6.9/10.0" },
    { degree: "Senior Secondary Education", school: "Radisson The School, Neemka, Jewar", date: "2020 – 2022", detail: "Class 12: 69% | Class 10: 86%" }
  ],
  skills: [
    { category: "Programming", items: ["C", "Java", "JavaScript"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "RESTful APIs"] },
    { category: "Frameworks & Databases", items: ["Spring Boot", "Express.js", "Next.js", "React", "MySQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Netlify"] },
    { category: "Operating Systems", items: ["Windows"] }
  ],
  experience: [
    {
      title: "Full Stack Development Intern",
      company: "CertED Technologies",
      date: "June 2025 – June 2025",
      subtitle: "In association with Haridwar University, Roorkee, Uttarakhand",
      bullets: [
        "Completed a Full Stack Development Summer Internship focused on building modern web applications.",
        "Gained hands-on experience in backend development using Java Spring Boot and MySQL.",
        "Developed and tested RESTful APIs and implemented core business logic for web applications.",
        "Improved understanding of web application architecture, API integration, and full-stack development workflows."
      ]
    }
  ],
  projects: [
    {
      name: "DevCollab Platform (MERN Stack)",
      bullets: [
        "Developed a collaborative platform for developers to create profiles, showcase projects, and connect with other developers.",
        "Implemented JWT-based authentication and secure user management.",
        "Built project sharing, team collaboration, and developer networking features.",
        "Designed and integrated RESTful APIs with MongoDB for efficient data handling.",
        "Deployed a responsive full-stack application with scalable architecture."
      ]
    },
    {
      name: "TaskFlow — Task Management Platform",
      bullets: [
        "Built a full-stack task management application to streamline task creation, organization, and tracking.",
        "Implemented user authentication, task prioritization, status tracking, and deadline management.",
        "Developed REST APIs using Node.js and Express.js with MongoDB integration.",
        "Optimized application performance through efficient state management and database indexing.",
        "Delivered a responsive user experience across desktop and mobile devices."
      ]
    }
  ],
  softSkills: ["Problem Solving", "Communication", "Teamwork", "Leadership", "Adaptability"]
};

// ===== STATE =====
let resumeData = {};

function loadData() {
  const saved = localStorage.getItem('resumeEditorData');
  resumeData = saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(DEFAULT_DATA));
}

function saveData() {
  collectFormData();
  localStorage.setItem('resumeEditorData', JSON.stringify(resumeData));
  const toast = document.getElementById('saveToast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2000);
}

function resetData() {
  if (!confirm('Reset all data to default? This cannot be undone.')) return;
  localStorage.removeItem('resumeEditorData');
  resumeData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  renderAllForms();
  updatePreview();
}

// ===== SECTION TOGGLE =====
function toggleSection(btn) {
  btn.classList.toggle('open');
  btn.nextElementSibling.classList.toggle('open');
}

// ===== RENDER ALL FORMS =====
function renderAllForms() {
  // Personal
  document.querySelector('[data-field="name"]').value = resumeData.name || '';
  document.querySelector('[data-field="phone"]').value = resumeData.phone || '';
  document.querySelector('[data-field="email"]').value = resumeData.email || '';
  document.querySelector('[data-field="linkedin"]').value = resumeData.linkedin || '';
  document.querySelector('[data-field="github"]').value = resumeData.github || '';
  // About
  document.querySelector('[data-field="about"]').value = resumeData.about || '';
  // Repeating sections
  renderEducation();
  renderSkills();
  renderExperience();
  renderProjects();
  renderSoftSkills();
}

// ===== EDUCATION =====
function renderEducation() {
  const c = document.getElementById('education-entries');
  c.innerHTML = '';
  resumeData.education.forEach((e, i) => {
    c.innerHTML += `<div class="entry-card">
      <button class="remove-entry" onclick="removeEducation(${i})">×</button>
      <div class="form-row"><label>Degree / Title</label><input type="text" value="${esc(e.degree)}" onchange="resumeData.education[${i}].degree=this.value;updatePreview()"></div>
      <div class="form-row-inline">
        <div class="form-row"><label>School / University</label><input type="text" value="${esc(e.school)}" onchange="resumeData.education[${i}].school=this.value;updatePreview()"></div>
        <div class="form-row"><label>Date</label><input type="text" value="${esc(e.date)}" onchange="resumeData.education[${i}].date=this.value;updatePreview()"></div>
      </div>
      <div class="form-row"><label>Details (CGPA, %)</label><input type="text" value="${esc(e.detail)}" onchange="resumeData.education[${i}].detail=this.value;updatePreview()"></div>
    </div>`;
  });
}
function addEducation() {
  resumeData.education.push({ degree: '', school: '', date: '', detail: '' });
  renderEducation(); updatePreview();
}
function removeEducation(i) {
  resumeData.education.splice(i, 1);
  renderEducation(); updatePreview();
}

// ===== SKILLS =====
function renderSkills() {
  const c = document.getElementById('skills-entries');
  c.innerHTML = '';
  resumeData.skills.forEach((s, i) => {
    const tags = s.items.map((item, j) =>
      `<span class="skill-tag">${esc(item)}<span class="remove-tag" onclick="removeSkillItem(${i},${j})">×</span></span>`
    ).join('');
    c.innerHTML += `<div class="entry-card">
      <button class="remove-entry" onclick="removeSkillCategory(${i})">×</button>
      <div class="form-row"><label>Category Name</label><input type="text" value="${esc(s.category)}" onchange="resumeData.skills[${i}].category=this.value;updatePreview()"></div>
      <div class="form-row"><label>Skills</label>
        <div class="skills-input-row">
          <input type="text" id="skill-input-${i}" placeholder="Type & press Add" onkeydown="if(event.key==='Enter'){addSkillItem(${i})}">
          <button class="add-skill-btn" onclick="addSkillItem(${i})">+ Add</button>
        </div>
        <div class="skills-tags">${tags}</div>
      </div>
    </div>`;
  });
}
function addSkillCategory() {
  resumeData.skills.push({ category: '', items: [] });
  renderSkills(); updatePreview();
}
function removeSkillCategory(i) {
  resumeData.skills.splice(i, 1);
  renderSkills(); updatePreview();
}
function addSkillItem(i) {
  const inp = document.getElementById(`skill-input-${i}`);
  if (inp.value.trim()) {
    resumeData.skills[i].items.push(inp.value.trim());
    inp.value = '';
    renderSkills(); updatePreview();
  }
}
function removeSkillItem(i, j) {
  resumeData.skills[i].items.splice(j, 1);
  renderSkills(); updatePreview();
}

// ===== EXPERIENCE =====
function renderExperience() {
  const c = document.getElementById('experience-entries');
  c.innerHTML = '';
  resumeData.experience.forEach((e, i) => {
    const bullets = e.bullets.map((b, j) =>
      `<div class="bullet-row"><input type="text" value="${esc(b)}" onchange="resumeData.experience[${i}].bullets[${j}]=this.value;updatePreview()"><button class="remove-bullet" onclick="removeExpBullet(${i},${j})">×</button></div>`
    ).join('');
    c.innerHTML += `<div class="entry-card">
      <button class="remove-entry" onclick="removeExperience(${i})">×</button>
      <div class="form-row-inline">
        <div class="form-row"><label>Job Title</label><input type="text" value="${esc(e.title)}" onchange="resumeData.experience[${i}].title=this.value;updatePreview()"></div>
        <div class="form-row"><label>Date</label><input type="text" value="${esc(e.date)}" onchange="resumeData.experience[${i}].date=this.value;updatePreview()"></div>
      </div>
      <div class="form-row"><label>Company</label><input type="text" value="${esc(e.company)}" onchange="resumeData.experience[${i}].company=this.value;updatePreview()"></div>
      <div class="form-row"><label>Subtitle</label><input type="text" value="${esc(e.subtitle || '')}" onchange="resumeData.experience[${i}].subtitle=this.value;updatePreview()"></div>
      <div class="form-row"><label>Bullet Points</label>
        <div class="bullets-list">${bullets}</div>
        <button class="add-bullet-btn" onclick="addExpBullet(${i})">+ Add Bullet</button>
      </div>
    </div>`;
  });
}
function addExperience() {
  resumeData.experience.push({ title: '', company: '', date: '', subtitle: '', bullets: [''] });
  renderExperience(); updatePreview();
}
function removeExperience(i) {
  resumeData.experience.splice(i, 1);
  renderExperience(); updatePreview();
}
function addExpBullet(i) {
  resumeData.experience[i].bullets.push('');
  renderExperience();
}
function removeExpBullet(i, j) {
  resumeData.experience[i].bullets.splice(j, 1);
  renderExperience(); updatePreview();
}

// ===== PROJECTS =====
function renderProjects() {
  const c = document.getElementById('project-entries');
  c.innerHTML = '';
  resumeData.projects.forEach((p, i) => {
    const bullets = p.bullets.map((b, j) =>
      `<div class="bullet-row"><input type="text" value="${esc(b)}" onchange="resumeData.projects[${i}].bullets[${j}]=this.value;updatePreview()"><button class="remove-bullet" onclick="removeProjBullet(${i},${j})">×</button></div>`
    ).join('');
    c.innerHTML += `<div class="entry-card">
      <button class="remove-entry" onclick="removeProject(${i})">×</button>
      <div class="form-row"><label>Project Name</label><input type="text" value="${esc(p.name)}" onchange="resumeData.projects[${i}].name=this.value;updatePreview()"></div>
      <div class="form-row"><label>Bullet Points</label>
        <div class="bullets-list">${bullets}</div>
        <button class="add-bullet-btn" onclick="addProjBullet(${i})">+ Add Bullet</button>
      </div>
    </div>`;
  });
}
function addProject() {
  resumeData.projects.push({ name: '', bullets: [''] });
  renderProjects(); updatePreview();
}
function removeProject(i) {
  resumeData.projects.splice(i, 1);
  renderProjects(); updatePreview();
}
function addProjBullet(i) {
  resumeData.projects[i].bullets.push('');
  renderProjects();
}
function removeProjBullet(i, j) {
  resumeData.projects[i].bullets.splice(j, 1);
  renderProjects(); updatePreview();
}

// ===== SOFT SKILLS =====
function renderSoftSkills() {
  const c = document.getElementById('softSkillsTags');
  c.innerHTML = resumeData.softSkills.map((s, i) =>
    `<span class="skill-tag">${esc(s)}<span class="remove-tag" onclick="removeSoftSkill(${i})">×</span></span>`
  ).join('');
}
function addSoftSkill() {
  const inp = document.getElementById('softSkillInput');
  if (inp.value.trim()) {
    resumeData.softSkills.push(inp.value.trim());
    inp.value = '';
    renderSoftSkills(); updatePreview();
  }
}
function removeSoftSkill(i) {
  resumeData.softSkills.splice(i, 1);
  renderSoftSkills(); updatePreview();
}

// ===== COLLECT FORM DATA =====
function collectFormData() {
  resumeData.name = document.querySelector('[data-field="name"]').value;
  resumeData.phone = document.querySelector('[data-field="phone"]').value;
  resumeData.email = document.querySelector('[data-field="email"]').value;
  resumeData.linkedin = document.querySelector('[data-field="linkedin"]').value;
  resumeData.github = document.querySelector('[data-field="github"]').value;
  resumeData.about = document.querySelector('[data-field="about"]').value;
}

// ===== LIVE PREVIEW =====
function updatePreview() {
  collectFormData();
  const d = resumeData;
  let html = `<h1>${esc(d.name)}</h1>
    <div class="r-contact">
      <span>📞 ${esc(d.phone)}</span>
      <span>✉ ${esc(d.email)}</span>
      <span>🔗 ${esc(d.linkedin)}</span>
      <span>💻 ${esc(d.github)}</span>
    </div>`;

  if (d.about) {
    html += `<div class="r-section-title">ABOUT ME</div><div class="r-about">${esc(d.about)}</div>`;
  }

  if (d.education.length) {
    html += `<div class="r-section-title">EDUCATION</div>`;
    d.education.forEach(e => {
      html += `<div class="r-entry">
        <div class="r-entry-header"><h3>${esc(e.degree)}</h3><span class="r-date">${esc(e.date)}</span></div>
        <h4>${esc(e.school)}</h4>
        ${e.detail ? `<p>${esc(e.detail)}</p>` : ''}
      </div>`;
    });
  }

  if (d.skills.length) {
    html += `<div class="r-section-title">TECHNICAL SKILLS</div>`;
    d.skills.forEach(s => {
      if (s.category || s.items.length) {
        html += `<div class="r-skills-row"><strong>${esc(s.category)}:</strong> ${s.items.map(i => esc(i)).join(', ')}</div>`;
      }
    });
  }

  if (d.experience.length) {
    html += `<div class="r-section-title">EXPERIENCE</div>`;
    d.experience.forEach(e => {
      html += `<div class="r-entry">
        <div class="r-entry-header"><h3>${esc(e.company)}</h3><span class="r-date">${esc(e.date)}</span></div>
        <h4>${esc(e.title)}${e.subtitle ? ' — ' + esc(e.subtitle) : ''}</h4>
        <ul class="r-bullets">${e.bullets.filter(b=>b).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>`;
    });
  }

  if (d.projects.length) {
    html += `<div class="r-section-title">PROJECTS</div>`;
    d.projects.forEach(p => {
      html += `<div class="r-entry">
        <h3>${esc(p.name)}</h3>
        <ul class="r-bullets">${p.bullets.filter(b=>b).map(b => `<li>${esc(b)}</li>`).join('')}</ul>
      </div>`;
    });
  }

  if (d.softSkills.length) {
    html += `<div class="r-section-title">SOFT SKILLS</div>
      <div class="r-soft-skills">${d.softSkills.map(s => `<span>${esc(s)}</span>`).join('')}</div>`;
  }

  document.getElementById('resumePreview').innerHTML = html;
}

// ===== PDF DOWNLOAD =====
function downloadPDF() {
  const el = document.getElementById('resumePreview');
  const opt = {
    margin: [10, 12, 10, 12],
    filename: 'Priyanshu_resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(el).save();
}

// ===== UTILITY =====
function esc(str) {
  if (!str) return '';
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ===== AUTO-SAVE on changes =====
let autoSaveTimer;
const origUpdatePreview = updatePreview;
updatePreview = function() {
  origUpdatePreview();
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    localStorage.setItem('resumeEditorData', JSON.stringify(resumeData));
  }, 2000);
};

// ===== INIT =====
loadData();
renderAllForms();
updatePreview();
