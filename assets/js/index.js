/* ============================================
   PORTFOLIO GUSTAVO LUQUE - JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initSkills();
  initNavbar();
  initTheme();
  initScrollAnimations();
  
  setTimeout(() => {
    if (typeof Typed !== 'undefined') {
      initTypedJS();
    }
  }, 100);
});

/* ---------- TYPED.JS ---------- */
function initTypedJS() {
  const typedElement = document.querySelector('.typed-text');
  if (typedElement && typeof Typed !== 'undefined') {
    new Typed('.typed-text', {
      strings: ['Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
      typeSpeed: 80,
      backSpeed: 60,
      loop: true,
      cursorChar: '|',
      showCursor: true,
    });
  }
}

/* ---------- SKILLS RENDER ---------- */
function initSkills() {
  const skillsTechContainer = document.getElementById('skills-tech');
  if (!skillsTechContainer) return;

  const skills = [
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/bash_herg5r.svg', name: 'BASH' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068793/vsc_m9yr7b.svg', name: 'VS CODE' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/html_q6pvb3.svg', name: 'HTML' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705069308/logo-css-3-2048_dkollb.png', name: 'CSS' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068791/javascript_u1zqf9.svg', name: 'JAVASCRIPT' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1705068793/react_ufwyeu.svg', name: 'REACT' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125614/pngwing.com_u1n0ff.png', name: 'NPM' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715126845/pngwing.com_4_xd8c7k.png', name: 'NODE.JS' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125373/tailwind-css-logo-24_f921tf.png', name: 'TAILWIND' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125758/pngegg_fpc4zr.png', name: 'GIT' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125844/pngwing.com_2_h3i32t.png', name: 'POSTGRES' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125980/pngwing.com_3_zltarm.png', name: 'EXPRESS' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715126047/klipartz.com_oznl55.png', name: 'SEQUELIZE' },
    { path: 'https://res.cloudinary.com/dfc7m5ola/image/upload/v1715125844/pngwing.com_2_h3i32t.png', name: 'TYPESCRIPT' },
  ];

  const html = skills.map(skill => `
    <div class="skill" title="${skill.name}">
      <img src="${skill.path}" alt="${skill.name}" loading="lazy">
      <h3>${skill.name}</h3>
    </div>
  `).join('');

  skillsTechContainer.innerHTML = html;
}

/* ---------- NAVBAR ---------- */
function initNavbar() {
  const btnOpen = document.querySelector('.btn-open');
  const btnClose = document.querySelector('.btn-close');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.querySelector('.header');

  if (btnOpen && navMenu) {
    btnOpen.addEventListener('click', () => {
      navMenu.classList.add('active');
      btnOpen.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
  }

  if (btnClose && navMenu) {
    btnClose.addEventListener('click', () => {
      navMenu.classList.remove('active');
      if (btnOpen) btnOpen.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        if (btnOpen) btnOpen.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && navMenu && !navMenu.contains(e.target) && !btnOpen.contains(e.target)) {
      navMenu.classList.remove('active');
      if (btnOpen) btnOpen.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  /* Active link on scroll */
  const sections = document.querySelectorAll('section[id]');
  
  function highlightNav() {
    const scrollY = window.scrollY;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav);
  highlightNav();

  /* Header background on scroll */
  window.addEventListener('scroll', () => {
    if (header) {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(10, 10, 15, 0.95)';
      } else {
        header.style.background = 'rgba(10, 10, 15, 0.8)';
      }
    }
  });
}

/* ---------- THEME TOGGLE ---------- */
function initTheme() {
  const btnTheme = document.querySelector('.btn-theme');
  const storedTheme = localStorage.getItem('theme');
  
  if (storedTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon(true);
  }

  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
        updateThemeIcon(false);
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        updateThemeIcon(true);
      }
    });
  }

  function updateThemeIcon(isLight) {
    if (!btnTheme) return;
    const icon = btnTheme.querySelector('i');
    if (icon) {
      if (isLight) {
        icon.classList.remove('bxs-moon');
        icon.classList.add('bxs-sun');
      } else {
        icon.classList.remove('bxs-sun');
        icon.classList.add('bxs-moon');
      }
    }
  }
}

/* ---------- SCROLL ANIMATIONS ---------- */
function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.project-card, .stat-item, .skill, .skill-soft-item, .contact-info-item'
  );
  
  animatedElements.forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
  });
}

/* ---------- FORM VALIDATION ---------- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const submitBtn = contactForm.querySelector('.btn-submit');
    if (submitBtn) {
      submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Enviando...';
      submitBtn.disabled = true;
    }
  });
}
