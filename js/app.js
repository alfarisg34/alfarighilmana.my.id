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
  initHeroInspector();
  renderTimeline();
  renderSkills();
  renderCertifications();
  renderProjects('all');
  initProjectFilters();
  initModal();
  initScrollSpy();
  initScrollReveal();
  initBackToTop();
  initMatrixCanvas();
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
   1. NAVIGATION & MOBILE DRAWER
   ========================================================================== */
function initNavigation() {
  const nav = document.querySelector('.site-nav');
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  // Sticky blur effect on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Menu Toggle
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('mobile-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    const closeMenu = () => {
      navLinks.classList.remove('mobile-open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
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
   2.5. HERO INTERACTIVE ARCHITECTURE INSPECTOR
   ========================================================================== */
function initHeroInspector() {
  const tabs = document.querySelectorAll('.inspector-tab');
  const display = document.getElementById('inspector-display-content');
  const projects = window.PORTFOLIO_DATA?.projects;
  const icons = window.ICONS;

  if (!tabs.length || !display || !projects) return;

  function renderInspector(projectId) {
    const project = projects.find(p => p.id === projectId) || projects[0];
    if (!project) return;

    display.innerHTML = `
      <div class="inspector-stats-row">
        ${project.stats.slice(0, 3).map(st => `
          <div class="inspector-metric-chip">
            <div class="inspector-metric-val">${st.value}</div>
            <div class="inspector-metric-lbl">${st.label}</div>
          </div>
        `).join('')}
      </div>

      <div class="inspector-ascii-box">
        <pre class="inspector-ascii-code">${project.architecture}</pre>
      </div>

      <div style="margin-top: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
        <div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
          ${project.techStack.slice(0, 4).map(t => `<span class="tech-tag" style="font-size: 0.7rem; padding: 0.2rem 0.55rem;">${t}</span>`).join('')}
        </div>
        <button class="btn btn-primary btn-sm inspect-deep-dive-btn" data-id="${project.id}">
          <span>Deep Dive Spec</span>
          ${icons?.arrowRight || '→'}
        </button>
      </div>
    `;

    const deepDiveBtn = display.querySelector('.inspect-deep-dive-btn');
    if (deepDiveBtn) {
      deepDiveBtn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        openCaseStudyModal(id);
      });
    }
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const id = e.currentTarget.getAttribute('data-inspector-id');
      renderInspector(id);
    });
  });

  // Initial render
  const initialId = tabs[0].getAttribute('data-inspector-id') || 'kemnaker-excel';
  renderInspector(initialId);
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

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-filter-state reveal active" style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-lg);">
        <div style="font-size: 2.25rem; margin-bottom: 0.75rem;">🔍</div>
        <h4 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-highlight);">No projects found in this category</h4>
        <p style="color: var(--text-secondary); max-width: 440px; margin: 0 auto 1.5rem; font-size: 0.95rem;">Select another engineering domain or explore all signature projects.</p>
        <button class="btn btn-primary btn-sm reset-filter-btn">
          <span>Show All Projects</span>
        </button>
      </div>
    `;
    const resetBtn = container.querySelector('.reset-filter-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        const allBtn = document.querySelector('.filter-btn[data-category="all"]');
        if (allBtn) allBtn.click();
      });
    }
    return;
  }

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
            <span>Case Study & Architecture</span>
            ${icons.arrowRight}
          </button>
          ${project.github ? `
            <a href="${project.github}" target="_blank" rel="noopener" class="btn btn-secondary btn-sm" title="View Source Code on GitHub">
              ${icons.github}
              <span>Source Code</span>
            </a>
          ` : ''}
          ${project.isPrivate ? `
            <span class="badge badge-amber" style="padding: 0.45rem 0.85rem; font-size: 0.8rem;">
              ${icons.shield}
              <span>Private Enterprise Repository</span>
            </span>
          ` : ''}
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener" class="btn btn-outline-emerald btn-sm" title="Open Interactive Live Demo">
              ${icons.external}
              <span>Live Demo</span>
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
  const tabBtns = Array.from(document.querySelectorAll('.modal-tab-btn'));
  function selectModalTab(btn) {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tabTarget = btn.getAttribute('data-tab');

    document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
    const activeContent = document.getElementById(`tab-${tabTarget}`);
    if (activeContent) activeContent.classList.add('active');
  }

  tabBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      selectModalTab(btn);
    });

    btn.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const nextIndex = (index + 1) % tabBtns.length;
        tabBtns[nextIndex].focus();
        selectModalTab(tabBtns[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevIndex = (index - 1 + tabBtns.length) % tabBtns.length;
        tabBtns[prevIndex].focus();
        selectModalTab(tabBtns[prevIndex]);
      }
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
    container.setAttribute('role', 'status');
    container.setAttribute('aria-live', 'polite');
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

/* ==========================================================================
   11. INTERACTIVE CYBER-CANVAS PARTICLE MATRIX (60 FPS)
   ========================================================================== */
function initMatrixCanvas() {
  const canvas = document.getElementById('matrix-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  let animationFrameId;
  let width, height;
  let particles = [];
  const particleCount = window.innerWidth < 768 ? 28 : 50;
  const maxDistance = 130;

  const mouse = {
    x: null,
    y: null,
    radius: 110
  };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.size = Math.random() * 1.5 + 1;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse gravitation
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.2;
          this.y -= (dy / dist) * force * 1.2;
        }
      }
    }

    draw(theme) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = theme === 'dark' ? '#00ff88' : '#059669';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    const theme = document.documentElement.getAttribute('data-theme') || 'light';
    const lineColor = theme === 'dark' ? 'rgba(0, 255, 136, ' : 'rgba(5, 150, 105, ';

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw(theme);

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * (theme === 'dark' ? 0.2 : 0.1);
          ctx.strokeStyle = `${lineColor}${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // Respect prefers-reduced-motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced) {
    animate();
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      cancelAnimationFrame(animationFrameId);
    } else if (!prefersReduced) {
      animate();
    }
  });
}

