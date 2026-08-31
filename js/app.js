/**
 * Main Application Logic for Alfari Sidnan Ghilmana Portfolio
 * Domain: alfarighilmana.my.id
 */

document.addEventListener('DOMContentLoaded', () => {
  const data = window.PORTFOLIO_DATA;
  const icons = window.ICONS;

  initThemeToggle();
  initNavigation();
  renderHeroStats();
  renderTimeline();
  renderSkills();
  renderCertifications();
  renderProjects('all');
  initProjectFilters();
  initModal();
  initScrollSpy();
  initScrollReveal();
  initBackToTop();
});

/* ==========================================================================
   0. THEME SWITCHER
   ========================================================================== */
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('theme', newTheme);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn && window.ICONS) {
    toggleBtn.innerHTML = theme === 'dark' ? window.ICONS.sun : window.ICONS.moon;
    toggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  }
}

/* ==========================================================================
   1. NAVIGATION & SCROLL
   ========================================================================== */
function initNavigation() {
  const nav = document.querySelector('.site-nav');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          nav.classList.add('scrolled');
        } else {
          nav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  if (mobileBtn && navLinks) {
    const hamburgerSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
    const closeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

    const closeMenu = () => {
      navLinks.classList.remove('mobile-open');
      mobileBtn.classList.remove('active');
      mobileBtn.setAttribute('aria-expanded', 'false');
      mobileBtn.innerHTML = hamburgerSvg;
    };

    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-open');
      mobileBtn.classList.toggle('active', isOpen);
      mobileBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileBtn.innerHTML = isOpen ? closeSvg : hamburgerSvg;
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && navLinks.classList.contains('mobile-open')) {
        closeMenu();
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navLinks.classList.contains('mobile-open')) {
        closeMenu();
      }
    });
  }
}

/* ==========================================================================
   2. HERO STATS
   ========================================================================== */
function renderHeroStats() {
  const container = document.getElementById('hero-stats-container');
  if (!container || !window.PORTFOLIO_DATA) return;

  const stats = window.PORTFOLIO_DATA.profile.metrics;
  container.innerHTML = stats.map(s => `
    <div class="stat-item">
      <div class="stat-value">${s.value}</div>
      <div class="stat-label">${s.label}</div>
      <div class="stat-sub">${s.sub}</div>
    </div>
  `).join('');
}

/* ==========================================================================
   3. TIMELINE (EXPERIENCE & EDUCATION)
   ========================================================================== */
function renderTimeline() {
  const expContainer = document.getElementById('experience-timeline');
  const eduContainer = document.getElementById('education-timeline');
  const data = window.PORTFOLIO_DATA;

  if (expContainer && data.experience) {
    expContainer.innerHTML = data.experience.map(item => `
      <div class="timeline-item">
        <div class="timeline-period">${item.period}</div>
        <div class="timeline-role">${item.role}</div>
        <div class="timeline-org">${item.company} ${item.department ? `· ${item.department}` : ''}</div>
        <p class="timeline-desc">${item.description}</p>
        <ul class="timeline-bullets">
          ${item.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education.map(item => `
      <div class="timeline-item">
        <div class="timeline-period">${item.period}</div>
        <div class="timeline-role">${item.degree}</div>
        <div class="timeline-org">${item.institution}</div>
        <p class="timeline-desc">${item.description}</p>
      </div>
    `).join('');
  }
}

/* ==========================================================================
   4. SKILLS MATRIX
   ========================================================================== */
function renderSkills() {
  const container = document.getElementById('skills-container');
  const data = window.PORTFOLIO_DATA.skills;
  const icons = window.ICONS;

  if (!container || !data) return;

  const categories = [
    { key: 'frontend', title: 'Frontend Engineering', icon: 'zap' },
    { key: 'backend', title: 'Backend & Processing', icon: 'server' },
    { key: 'databaseCloud', title: 'Database & Cloud', icon: 'database' },
    { key: 'testingQA', title: 'QA & Test Automation', icon: 'shield' }
  ];

  container.innerHTML = categories.map(cat => {
    const skillList = data[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="skill-card-head">
          <div class="skill-icon-wrap">${icons[cat.icon] || ''}</div>
          <h3>${cat.title}</h3>
        </div>
        <div class="skill-items-list">
          ${skillList.map(s => `
            <div class="skill-bar-row">
              <div class="skill-info">
                <span>${s.name}</span>
                <span class="skill-percent">${s.level}%</span>
              </div>
              <div class="skill-progress-track">
                <div class="skill-progress-fill" style="width: ${s.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ==========================================================================
   4.5 LICENSES & CERTIFICATIONS
   ========================================================================== */
function renderCertifications() {
  const container = document.getElementById('certifications-container');
  const data = window.PORTFOLIO_DATA;
  const icons = window.ICONS;

  if (!container || !data || !data.certifications) return;

  container.innerHTML = data.certifications.map(cert => `
    <div class="cert-card reveal">
      <div>
        <div class="cert-card-top">
          <div>
            <span class="cert-badge-pill">
              ${icons[cert.icon] || icons.award}
              <span>${cert.badge}</span>
            </span>
            <h3 class="cert-card-title" style="margin-top: 0.75rem;">${cert.title}</h3>
          </div>
          <div class="cert-icon-box">
            ${icons[cert.icon] || icons.award}
          </div>
        </div>

        <div class="cert-issuer-row">
          <span class="cert-issuer-name">${cert.issuer}</span>
          <span>·</span>
          <span class="cert-issue-date">${cert.issueDate}</span>
          ${cert.credentialId ? `<span class="cert-issue-date cert-id-pill">ID: ${cert.credentialId}</span>` : ''}
        </div>

        <div class="cert-skills-wrap">
          ${cert.skills.map(s => `<span class="cert-skill-pill">${s}</span>`).join('')}
        </div>
      </div>

      <div class="cert-card-footer">
        <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: var(--primary-emerald); font-weight: 600;">
          ${icons.check}
          <span>Verified Credential</span>
        </div>
        ${cert.credentialUrl ? `
          <a href="${cert.credentialUrl}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;">
            <span>Verify</span>
            ${icons.external}
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. FEATURED PROJECTS & CASE STUDIES
   ========================================================================== */
function renderProjects(categoryFilter = 'all') {
  const container = document.getElementById('projects-container');
  const data = window.PORTFOLIO_DATA.projects;
  const icons = window.ICONS;

  if (!container || !data) return;

  const filtered = categoryFilter === 'all' 
    ? data 
    : data.filter(p => p.category === categoryFilter);

  container.innerHTML = filtered.map(project => `
    <article class="project-card reveal" data-project-id="${project.id}">
      <div class="project-card-body">
        <div class="project-card-header">
          <div class="project-category-tag">
            <span>${project.categoryName}</span>
            <span class="badge badge-cyan">${project.badge}</span>
          </div>
          <h3 class="project-title">${project.title}</h3>
          <div class="project-subtitle">${project.subtitle}</div>
          <p class="project-desc">${project.tagline}</p>
        </div>

        <div class="project-stats-strip">
          ${project.stats.map(st => `
            <div class="mini-stat">
              <div class="mini-stat-val">${st.value}</div>
              <div class="mini-stat-lbl">${st.label}</div>
            </div>
          `).join('')}
        </div>

        <div class="project-tech-tags">
          ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>

        <div class="project-card-footer">
          <button class="btn btn-primary btn-sm view-case-study-btn" data-id="${project.id}">
            <span>Deep Dive Case Study</span>
            ${icons.arrowRight}
          </button>
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">
              ${icons.github}
              <span>Source Code</span>
            </a>
          ` : ''}
          ${project.isPrivate ? `
            <span class="badge badge-amber" style="padding: 0.45rem 0.85rem; font-size: 0.8rem;">
              ${icons.shield}
              <span>Private Enterprise Repo</span>
            </span>
          ` : ''}
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-outline-emerald btn-sm">
              ${icons.external}
              <span>Live System</span>
            </a>
          ` : ''}
        </div>
      </div>

      <div class="project-card-visual">
        <div class="project-visual-preview">
          <div class="code-window-bar">
            <div class="window-dot dot-red"></div>
            <div class="window-dot dot-yellow"></div>
            <div class="window-dot dot-green"></div>
            <span class="visual-title">${project.id}/architecture.map</span>
          </div>
          <pre class="ascii-architecture">${project.architecture}</pre>
        </div>
      </div>
    </article>
  `).join('');

  // Rebind case study buttons
  document.querySelectorAll('.view-case-study-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-id');
      openCaseStudyModal(id);
    });
  });

  initScrollReveal();
}

function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProjects(cat);
    });
  });
}

/* ==========================================================================
   6. CASE STUDY MODAL SYSTEM (ACCESSIBLE WITH FOCUS TRAP)
   ========================================================================== */
let previouslyFocusedElement = null;

function initModal() {
  const overlay = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!overlay) return;

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableElements = Array.from(overlay.querySelectorAll(focusableSelectors))
        .filter(el => !el.hasAttribute('disabled') && el.offsetParent !== null);

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });

  // Modal Tab Switching
  const tabBtns = document.querySelectorAll('.modal-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabTarget = btn.getAttribute('data-tab');

      document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
      const activeContent = document.getElementById(`tab-${tabTarget}`);
      if (activeContent) activeContent.classList.add('active');
    });
  });
}

function openCaseStudyModal(projectId) {
  const project = window.PORTFOLIO_DATA.projects.find(p => p.id === projectId);
  if (!project) return;

  previouslyFocusedElement = document.activeElement;

  const overlay = document.getElementById('case-study-modal');
  const titleEl = document.getElementById('modal-project-title');
  const catEl = document.getElementById('modal-project-category');
  const closeBtn = document.getElementById('modal-close-btn');

  titleEl.textContent = project.title;
  catEl.textContent = `${project.categoryName} · ${project.badge}`;

  // Overview Tab
  const tabOverview = document.getElementById('tab-overview');
  tabOverview.innerHTML = `
    <div class="modal-section-block">
      <h4 class="modal-heading-cyan">Project Summary & Business Value</h4>
      <p class="modal-text">${project.overview}</p>
    </div>
    
    <div class="modal-section-block">
      <h4 class="modal-heading-indigo">Core Engineering Highlights</h4>
      <ul class="timeline-bullets">
        ${project.highlights.map(h => `<li class="modal-text">${h}</li>`).join('')}
      </ul>
    </div>

    <div>
      <h4 class="modal-heading-emerald">Technology Stack</h4>
      <div class="project-tech-tags">
        ${project.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `;

  // Architecture Tab
  const tabArch = document.getElementById('tab-architecture');
  tabArch.innerHTML = `
    <div class="modal-section-block">
      <h4 class="modal-heading-cyan">System Architecture & Execution Pipeline</h4>
      <p class="modal-text">End-to-end data flow and computational stages designed for high reliability and zero runtime data corruption.</p>
    </div>
    <div class="project-visual-preview modal-preview-box">
      <pre class="ascii-architecture" style="color: #38bdf8; font-size: 0.85rem; line-height: 1.55;">${project.architecture}</pre>
    </div>
  `;

  // Metrics Tab
  const tabMetrics = document.getElementById('tab-metrics');
  tabMetrics.innerHTML = `
    <div class="modal-section-block">
      <h4 class="modal-heading-emerald">Key Performance Benchmarks</h4>
      <p class="modal-text">Measured performance metrics, algorithmic complexity, and system throughput.</p>
    </div>
    <div class="hero-stats-grid" style="grid-template-columns: repeat(2, 1fr); margin-bottom: 2rem;">
      ${project.stats.map(s => `
        <div class="stat-item" style="padding: 1rem;">
          <div class="stat-value" style="font-size: 2rem;">${s.value}</div>
          <div class="stat-label">${s.label}</div>
        </div>
      `).join('')}
    </div>
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      ${project.github ? `
        <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-primary">
          ${window.ICONS.github}
          <span>Explore GitHub Repository</span>
        </a>
      ` : ''}
      ${project.isPrivate ? `
        <div class="badge badge-amber" style="padding: 0.6rem 1rem; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.5rem;">
          ${window.ICONS.shield}
          <span>Enterprise Confidential / Private QA Framework</span>
        </div>
      ` : ''}
      ${project.demoUrl ? `
        <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-outline-emerald">
          ${window.ICONS.external}
          <span>Open Live System</span>
        </a>
      ` : ''}
    </div>
  `;

  // Reset to first tab
  document.querySelectorAll('.modal-tab-btn').forEach((b, idx) => {
    b.classList.toggle('active', idx === 0);
  });
  document.querySelectorAll('.modal-tab-content').forEach((c, idx) => {
    c.classList.toggle('active', idx === 0);
  });

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (closeBtn) {
    closeBtn.focus();
  }
}

function closeModal() {
  const overlay = document.getElementById('case-study-modal');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  if (previouslyFocusedElement && typeof previouslyFocusedElement.focus === 'function') {
    previouslyFocusedElement.focus();
  }
}

/* ==========================================================================
   7. UTILITIES (CLIPBOARD & TOAST)
   ========================================================================== */
window.copyToClipboard = function(text, successMsg = 'Copied to clipboard!') {
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
};

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    ${window.ICONS.check}
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 50);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* ==========================================================================
   9. SCROLL SPY & REVEAL ANIMATION
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        let current = '';
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   10. FLYING BACK-TO-TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  // Render flying arrow SVG if empty
  if (!btn.innerHTML.trim() && window.ICONS && window.ICONS.arrowFlying) {
    btn.innerHTML = window.ICONS.arrowFlying;
  }

  // Scroll threshold listener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 320) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  // Click handler with launch animation and smooth scroll
  btn.addEventListener('click', () => {
    btn.classList.add('launching');
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      btn.classList.remove('launching');
    }, 600);
  });
}

