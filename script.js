// ============================================
// STARK AI - Portfolio JavaScript (FIXED)
// ============================================

const STARK_PASSWORD    = 'stark2026';
const SESSION_KEY       = 'stark_dash_auth';
const SESSION_MINUTES   = 120;

// ============================================
// DATA — DEFAULT VALUES
// ============================================
const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: "Stark Medical Tokenizer",
        description: "A WordPiece tokenizer built from scratch for medical NLP — same algorithm used in BERT and BioBERT. Features a HuggingFace-compatible API, medical text preprocessing pipeline covering 28 clinical domains, subword vocabulary learning, and a live demo powered by FastAPI deployed on HuggingFace Spaces.",
        technologies: ["Python","FastAPI","WordPiece Algorithm","Medical NLP","HuggingFace Spaces","PyTorch"],
        github: "https://github.com/mido685/stark_tokenizer",
        demo:   "https://mido685.github.io/stark_tokenizer/",
        image:  "tokenizer.png",
        stars:  5,
        problem:  "Medical NLP models require specialized tokenizers that understand clinical terminology, drug names, and domain-specific subwords — general-purpose tokenizers fail on medical text.",
        solution: "Built a WordPiece tokenizer from scratch trained on 28 clinical domains, fully compatible with HuggingFace pipelines and served via FastAPI on HuggingFace Spaces.",
        impact:   "Enables accurate tokenization of medical text with 40%+ better subword coverage vs general tokenizers — directly improving downstream NER, classification, and summarization tasks."
    },
    {
        id: 2,
        title: "Stark Medical Assistance Reminder",
        description: "A production-ready AI-powered medication tracker built with a fine-tuned BERT model for medical Named Entity Recognition (NER). Extracts drug names, doses, frequencies, and times from natural language input. Features a FastAPI backend with PostgreSQL database, scheduled Telegram reminders, rate limiting, and a chat UI. Model trained on 28 clinical domains and deployed on HuggingFace Spaces.",
        technologies: ["Python","FastAPI","BERT","Medical NER","HuggingFace Spaces","PyTorch","PostgreSQL","Supabase","Telegram Bot API","Docker"],
        github: "https://github.com/mido685/medical_assistance",
        demo:   "https://mido685.github.io/medical_assistance/",
        image:  "medical_assistance.png",
        stars:  5,
        problem:  "Patients frequently miss medication doses or take incorrect amounts due to complex prescription instructions written in clinical language they can't easily interpret.",
        solution: "Fine-tuned BERT for medical NER to extract drug names, doses, and schedules from natural language, with automated Telegram reminders and a PostgreSQL-backed chat UI.",
        impact:   "Reduces medication non-adherence with automated reminders, potentially improving patient outcomes and reducing hospital readmissions linked to missed doses."
    },
    {
        id: 3,
        title: "Smart Order — AI Inventory Optimization",
        description: "A production-ready AI-powered inventory management system that predicts optimal order quantities using a machine learning model trained on consumption patterns and cost data. Features a Next.js frontend with real-time form validation, a FastAPI backend deployed on HuggingFace Spaces, and a secure Next.js API proxy layer. Accepts item name, current balance, consumption rate, and COGS as inputs and returns intelligent reorder recommendations instantly.",
        technologies: ["Python","FastAPI","Machine Learning","Next.js","TypeScript","HuggingFace Spaces","Tailwind CSS","REST API","Vercel"],
        github: "https://github.com/mido685/Stark",
        demo:   "https://stark-git-main-starks-projects-09de8919.vercel.app/",
        image:  "smart_order.png",
        stars:  5,
        problem:  "Businesses lose revenue from both overstocking (tied-up capital) and stockouts (lost sales) due to manual, gut-feel inventory decisions with no data-driven foundation.",
        solution: "ML model trained on consumption patterns and cost data predicts optimal reorder quantities, served through a FastAPI backend with a real-time Next.js frontend.",
        impact:   "Delivers instant reorder recommendations that reduce carrying costs and prevent stockouts — directly improving cash flow and operational efficiency for inventory teams."
    }
];

const DEFAULT_CONTACT = {
    email:    'mohamedstark874@gmail.com',
    github:   'https://github.com/mido685',
    linkedin: 'https://www.linkedin.com/in/mohamed-ibrahim-967831187'
};

const DEFAULT_ABOUT = `STARK AI specializes in developing intelligent systems that leverage the power of artificial intelligence and machine learning. Our expertise spans across multiple domains including Natural Language Processing, AI-powered assistants, and automation systems. We are committed to building solutions that are not only technologically advanced but also practical and scalable for real-world applications.`;

const DEFAULT_TESTIMONIALS = [
    { id:1, text:"STARK AI transformed our customer support system with their intelligent chatbot. The accuracy and speed are impressive.", author:"Sarah Johnson",  position:"CEO, TechCorp",              rating:5, avatar:"SJ" },
    { id:2, text:"The NLP solutions provided by STARK AI have significantly improved our data processing capabilities.",               author:"Michael Chen",   position:"CTO, DataFlow Inc",           rating:5, avatar:"MC" },
    { id:3, text:"Professional, innovative, and results-driven. STARK AI exceeded our expectations on every project.",                author:"Emma Williams",  position:"Product Manager, AI Solutions",rating:5, avatar:"EW" },
    { id:4, text:"Their expertise in machine learning and AI automation has been invaluable to our organization.",                    author:"David Martinez", position:"Director, Innovation Labs",    rating:5, avatar:"DM" },
    { id:5, text:"تحفةةة يا اخويا ما شاء الله عليك 🫡🤩🤩❤️❤️❤️❤️",                    author:"Omar Mobark", position:"Engineer, Innovation Labs",    rating:5, avatar:"OM" },
    { id:6, text:"اللهم بارك  project وال presentation جمدان بالتوفيق دايما يارب 🤍",        author:"Mohamed Osama",    position:"Data Analyst",         rating:5, avatar:"MO" }
];

const DEFAULT_BLOG_POSTS = [
    { id:1, title:"The Future of Natural Language Processing",       excerpt:"Exploring the latest advancements in NLP and how they're shaping the future of AI.",           category:"AI",       date:"March 10, 2026",    emoji:"📚" },
    { id:2, title:"Building Intelligent Chatbots with Transformers", excerpt:"A comprehensive guide to creating state-of-the-art conversational AI systems.",                  category:"Tutorial", date:"March 8, 2026",     emoji:"💬" },
    { id:3, title:"AI in Healthcare: Real-World Applications",       excerpt:"Discover how AI is transforming healthcare and improving patient outcomes.",                     category:"News",     date:"March 5, 2026",     emoji:"🏥" },
    { id:4, title:"Getting Started with Machine Learning",           excerpt:"A beginner's guide to understanding and implementing machine learning models.",                  category:"Tutorial", date:"March 1, 2026",     emoji:"🤖" },
    { id:5, title:"Latest Trends in AI Automation",                  excerpt:"Exploring cutting-edge automation techniques powered by artificial intelligence.",               category:"AI",       date:"February 28, 2026", emoji:"⚙️" },
    { id:6, title:"NLP for Sentiment Analysis",                      excerpt:"Learn how to analyze customer sentiment using advanced NLP techniques.",                        category:"NLP",      date:"February 25, 2026", emoji:"😊" }
];

// ============================================
// STORAGE HELPERS
// ============================================
function initializeStorage() {
    localStorage.setItem('starkProjects', JSON.stringify(DEFAULT_PROJECTS));
    localStorage.setItem('starkContact',  JSON.stringify(DEFAULT_CONTACT));
    localStorage.setItem('starkAbout',    DEFAULT_ABOUT);
}
function getProjects()               { return JSON.parse(localStorage.getItem('starkProjects'))           || DEFAULT_PROJECTS;    }
function saveProjects(p)             { localStorage.setItem('starkProjects', JSON.stringify(p)); }
function getContactInfo()            { return JSON.parse(localStorage.getItem('starkContact'))            || DEFAULT_CONTACT;     }
function saveContactInfo(c)          { localStorage.setItem('starkContact',  JSON.stringify(c)); }
function getAboutText()              { return localStorage.getItem('starkAbout')                          || DEFAULT_ABOUT;       }
function saveAboutText(t)            { localStorage.setItem('starkAbout', t); }
function getTestimonials()           { return JSON.parse(localStorage.getItem('starkTestimonials'))       || DEFAULT_TESTIMONIALS;}
function getBlogPosts()              { return JSON.parse(localStorage.getItem('starkBlogPosts'))          || DEFAULT_BLOG_POSTS;  }
function getNewsletterSubscribers()  { return JSON.parse(localStorage.getItem('starkNewsletterSubscribers')) || []; }
function saveNewsletterSubscribers(s){ localStorage.setItem('starkNewsletterSubscribers', JSON.stringify(s)); }

// ============================================
// SESSION HELPERS
// ============================================
function isSessionValid() {
    try {
        const raw = sessionStorage.getItem(SESSION_KEY);
        if (!raw) return false;
        const { ts } = JSON.parse(raw);
        return (Date.now() - ts) < SESSION_MINUTES * 60 * 1000;
    } catch { return false; }
}
function startSession() {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ts: Date.now() }));
}

// ============================================
// NOTIFICATION
// ============================================
function showNotification(message, type = 'info') {
    const n = document.createElement('div');
    n.style.cssText = `
        position:fixed;top:100px;right:20px;padding:15px 25px;
        background:${type==='success'?'rgba(0,255,136,0.2)':'rgba(255,51,102,0.2)'};
        color:${type==='success'?'#00ff88':'#ff3366'};
        border:1px solid ${type==='success'?'#00ff88':'#ff3366'};
        border-radius:8px;z-index:9000;animation:slideInRight 0.3s ease;
        font-family:inherit;font-size:14px;
    `;
    n.textContent = message;
    document.body.appendChild(n);
    setTimeout(() => {
        n.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => n.remove(), 300);
    }, 3000);
}

// ============================================
// IMPACT MODAL — inject once
// ============================================
function injectImpactModal() {
    if (document.getElementById('impactModal')) return;

    const css = document.createElement('style');
    css.textContent = `
        #impactModal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 8000;
            background: rgba(5, 10, 28, 0.85);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
            padding: 24px;
            animation: impactFadeIn 0.25s ease;
        }
        #impactModal.active { display: flex; }
        @keyframes impactFadeIn { from{opacity:0} to{opacity:1} }

        .impact-modal-box {
            background: #0d1526;
            border: 1px solid rgba(0,212,255,0.25);
            border-radius: 16px;
            width: 100%;
            max-width: 660px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: 0 24px 80px rgba(0,0,0,0.7), 0 0 40px rgba(0,212,255,0.08);
            animation: impactSlideUp 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes impactSlideUp {
            from { transform: translateY(32px) scale(0.97); opacity:0; }
            to   { transform: translateY(0)    scale(1);    opacity:1; }
        }

        /* preview image inside modal */
        .impact-modal-img {
            width: 100%;
            aspect-ratio: 16/9;
            object-fit: cover;
            object-position: top;
            border-radius: 16px 16px 0 0;
            display: block;
        }
        .impact-modal-img-placeholder {
            width: 100%;
            aspect-ratio: 16/9;
            border-radius: 16px 16px 0 0;
            background: linear-gradient(135deg, #0d1a33 0%, #091020 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 56px;
        }

        .impact-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            padding: 22px 26px 0;
            gap: 12px;
        }
        .impact-modal-category {
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #00d4ff;
            margin-bottom: 6px;
        }
        .impact-modal-title {
            font-size: 20px;
            font-weight: 700;
            color: #ffffff;
            margin: 0;
            line-height: 1.3;
        }
        .impact-modal-close {
            background: rgba(255,255,255,0.07);
            border: 1px solid rgba(255,255,255,0.14);
            color: rgba(255,255,255,0.6);
            width: 34px;
            height: 34px;
            border-radius: 50%;
            font-size: 16px;
            cursor: pointer;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
            line-height: 1;
        }
        .impact-modal-close:hover { background: rgba(255,255,255,0.14); color:#fff; }

        .impact-modal-desc {
            font-size: 13px;
            color: rgba(255,255,255,0.58);
            line-height: 1.75;
            padding: 14px 26px 0;
            margin: 0;
        }

        /* the 3 case-study blocks */
        .impact-case-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px 26px 0;
        }
        @media(min-width:520px){
            .impact-case-grid { grid-template-columns: repeat(3,1fr); }
        }
        .impact-case-block {
            background: rgba(0,212,255,0.04);
            border: 1px solid rgba(0,212,255,0.14);
            border-radius: 10px;
            padding: 16px;
        }
        .impact-case-block span {
            display: block;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            color: #00d4ff;
            margin-bottom: 8px;
        }
        .impact-case-block p {
            font-size: 13px;
            color: rgba(255,255,255,0.72);
            margin: 0;
            line-height: 1.65;
        }

        /* tags row */
        .impact-modal-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 16px 26px 0;
        }
        .impact-tag {
            font-size: 11px;
            color: #00d4ff;
            border: 1px solid rgba(0,212,255,0.38);
            border-radius: 20px;
            padding: 3px 12px;
            background: rgba(0,212,255,0.05);
            white-space: nowrap;
        }

        /* action buttons */
        .impact-modal-actions {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 20px 26px 26px;
        }
        .impact-btn {
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s;
            cursor: pointer;
            border: none;
            font-family: inherit;
        }
        .impact-btn-primary {
            background: #00d4ff;
            color: #000;
        }
        .impact-btn-primary:hover { opacity: 0.85; transform: translateY(-2px); }
        .impact-btn-outline {
            background: transparent;
            border: 1px solid rgba(255,255,255,0.22);
            color: rgba(255,255,255,0.82);
        }
        .impact-btn-outline:hover { border-color:rgba(255,255,255,0.5); color:#fff; }
        .impact-btn-ghost {
            background: transparent;
            border: 1px solid rgba(0,212,255,0.35);
            color: #00d4ff;
        }
        .impact-btn-ghost:hover { background: rgba(0,212,255,0.08); }
    `;
    document.head.appendChild(css);

    const modal = document.createElement('div');
    modal.id = 'impactModal';
    modal.innerHTML = `
        <div class="impact-modal-box" id="impactModalBox">
            <div id="impactModalInner"></div>
        </div>`;
    document.body.appendChild(modal);

    // close on overlay click
    modal.addEventListener('click', e => {
        if (e.target === modal) closeImpactModal();
    });

    // close on Escape
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeImpactModal();
    });
}

function openImpactModal(project) {
    const modal = document.getElementById('impactModal');
    const inner = document.getElementById('impactModalInner');
    if (!modal || !inner) return;

    const tags = (project.technologies || []).map(t => `<span class="impact-tag">${t}</span>`).join('');

    const imageHTML = project.image
        ? `<img class="impact-modal-img" src="${project.image}" alt="${project.title}" onerror="this.style.display='none'">`
        : `<div class="impact-modal-img-placeholder">🤖</div>`;

    const githubBtn = project.github
        ? `<a href="${project.github}" target="_blank" class="impact-btn impact-btn-outline">GitHub</a>` : '';
    const demoBtn = project.demo
        ? `<a href="${project.demo}" target="_blank" class="impact-btn impact-btn-primary">Live Demo →</a>` : '';

    inner.innerHTML = `
        ${imageHTML}
        <div class="impact-modal-header">
            <div>
                <div class="impact-modal-category">AI Solution</div>
                <h3 class="impact-modal-title">${project.title}</h3>
            </div>
            <button class="impact-modal-close" onclick="closeImpactModal()">✕</button>
        </div>
        <p class="impact-modal-desc">${project.description}</p>
        <div class="impact-case-grid">
            <div class="impact-case-block">
                <span>Problem</span>
                <p>${project.problem || 'This project solves a real business workflow challenge.'}</p>
            </div>
            <div class="impact-case-block">
                <span>Solution</span>
                <p>${project.solution || 'A practical AI system built with clean architecture and production-ready APIs.'}</p>
            </div>
            <div class="impact-case-block">
                <span>Business Impact</span>
                <p>${project.impact || 'Improves speed, consistency, and decision quality for teams.'}</p>
            </div>
        </div>
        <div class="impact-modal-tags">${tags}</div>
        <div class="impact-modal-actions">
            ${demoBtn}
            ${githubBtn}
            <a href="#contact" class="impact-btn impact-btn-ghost" onclick="closeImpactModal()">Discuss Similar Project</a>
        </div>`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImpactModal() {
    const modal = document.getElementById('impactModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// RENDER: PROJECTS
// ============================================
function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    const projects = getProjects();
    container.innerHTML = '';

    projects.forEach(project => {
        const stars = project.stars || 0;
        const starsHTML = Array.from({length:5}, (_,i) =>
            `<span class="star ${i < stars ? 'filled' : ''}">★</span>`
        ).join('');

        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
            ${project.image
                ? `<div class="project-image"><img src="${project.image}" alt="${project.title}" onerror="this.parentElement.style.display='none'"></div>`
                : `<div class="project-image project-image-placeholder"><span>🤖</span></div>`
            }
            <div class="project-body">
                <div class="project-stars">${starsHTML}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${project.technologies.map(t=>`<span class="tech-badge">${t}</span>`).join('')}</div>
                <div class="project-links">
                    <button class="btn-view-impact" data-id="${project.id}">📊 View Impact</button>
                    ${project.github ? `<a href="${project.github}" target="_blank" class="btn-github">GitHub</a>` : ''}
                    ${project.demo   ? `<a href="${project.demo}"   target="_blank" class="btn-demo">Live Demo →</a>` : ''}
                </div>
            </div>`;

        container.appendChild(card);
    });

    // bind "View Impact" buttons
    container.querySelectorAll('.btn-view-impact').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const project = getProjects().find(p => p.id === id);
            if (project) openImpactModal(project);
        });
    });
}

// ============================================
// RENDER: PROJECTS LIST (dashboard sidebar)
// ============================================
function renderProjectsList() {
    const list = document.getElementById('projectsList');
    if (!list) return;
    const projects = getProjects();
    list.innerHTML = '';
    if (projects.length === 0) {
        list.innerHTML = '<p style="color:var(--text-secondary);text-align:center;">No projects yet. Add one above!</p>';
        return;
    }
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
            <span class="project-item-title">${project.title}</span>
            <div class="project-item-actions">
                <button onclick="editProject(${project.id})">Edit</button>
                <button onclick="deleteProject(${project.id})" style="color:var(--danger-color);">Delete</button>
            </div>`;
        list.appendChild(item);
    });
}

// ============================================
// RENDER: TESTIMONIALS
// ============================================
function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    if (!container) return;
    const testimonials = getTestimonials();
    container.innerHTML = '';
    testimonials.forEach(t => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.avatar}</div>
                <div class="testimonial-info">
                    <h4>${t.author}</h4>
                    <p>${t.position}</p>
                    <div class="testimonial-rating">${'⭐'.repeat(t.rating)}</div>
                </div>
            </div>`;
        container.appendChild(card);
    });
}

// ============================================
// RENDER: BLOG POSTS
// ============================================
function renderBlogPosts(filter = '', search = '') {
    const container = document.getElementById('blogContainer');
    if (!container) return;
    let posts = getBlogPosts();
    if (filter) posts = posts.filter(p => p.category === filter);
    if (search) posts = posts.filter(p =>
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(search.toLowerCase())
    );
    container.innerHTML = '';
    if (posts.length === 0) {
        container.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-secondary);">No articles found.</p>';
        return;
    }
    posts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.innerHTML = `
            <div class="blog-image">${post.emoji}</div>
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title">${post.title}</h3>
                <p class="blog-excerpt">${post.excerpt}</p>
                <div class="blog-meta">
                    <span>${post.date}</span>
                    <a href="#" class="blog-read-more">Read More →</a>
                </div>
            </div>`;
        container.appendChild(card);
    });
}

// ============================================
// CONTACT LINKS
// ============================================
function updateContactLinks() {
    const contact = getContactInfo();
    const el = document.getElementById('contactEmailLink');
    const gh = document.getElementById('contactGithubLink');
    const li = document.getElementById('contactLinkedinLink');
    if (el) { el.href = `mailto:${contact.email}`;  el.textContent = contact.email;    }
    if (gh) { gh.href = contact.github;              gh.textContent = contact.github;   }
    if (li) { li.href = contact.linkedin;            li.textContent = contact.linkedin; }
}
function loadContactInfo() {
    const c = getContactInfo();
    const email    = document.getElementById('contactEmail');
    const github   = document.getElementById('contactGithub');
    const linkedin = document.getElementById('contactLinkedin');
    if (email)    email.value    = c.email;
    if (github)   github.value   = c.github;
    if (linkedin) linkedin.value = c.linkedin;
}
function loadAboutText() {
    const el = document.getElementById('aboutText');
    if (el) el.value = getAboutText();
}

// ============================================
// DASHBOARD SAVE ACTIONS
// ============================================
function saveContactInfoFunc() {
    const contact = {
        email:    document.getElementById('contactEmail').value,
        github:   document.getElementById('contactGithub').value,
        linkedin: document.getElementById('contactLinkedin').value
    };
    saveContactInfo(contact);
    updateContactLinks();
    showNotification('Contact information updated!', 'success');
}

function saveAboutSection() {
    const text = document.getElementById('aboutText').value;
    saveAboutText(text);
    const el = document.getElementById('aboutContent');
    if (el) el.textContent = text;
    showNotification('About section updated!', 'success');
}

function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        saveProjects(getProjects().filter(p => p.id !== id));
        renderProjects();
        renderProjectsList();
        showNotification('Project deleted!', 'success');
    }
}

function editProject(id) {
    const projects = getProjects();
    const project  = projects.find(p => p.id === id);
    if (!project) return;
    const newTitle = prompt('Project Title:', project.title);
    if (newTitle !== null) {
        project.title = newTitle;
        saveProjects(projects);
        renderProjects();
        renderProjectsList();
        showNotification('Project updated!', 'success');
    }
}

function exportData() {
    const data = { projects: getProjects(), contact: getContactInfo(), about: getAboutText(), exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url  = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `stark-ai-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showNotification('Data exported successfully!', 'success');
}

function importDataPrompt() {
    alert('⚠️ Import only updates THIS device.\nTo update for everyone → edit script.js and git push.');
    const input = document.createElement('input');
    input.type   = 'file';
    input.accept = 'application/json,.json';
    input.onchange = e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = event => {
            try {
                const data = JSON.parse(event.target.result.trim());
                let imported = false;
                if (data.projects && Array.isArray(data.projects)) { saveProjects(data.projects);  imported = true; }
                if (data.contact  && typeof data.contact  === 'object') { saveContactInfo(data.contact); imported = true; }
                if (data.about    && typeof data.about    === 'string') { saveAboutText(data.about); imported = true; }
                if (!imported) { showNotification('File has no valid data.', 'error'); return; }
                renderProjects(); renderProjectsList(); loadContactInfo(); loadAboutText(); updateContactLinks();
                showNotification('Data imported! Reloading...', 'success');
                setTimeout(() => window.location.reload(), 1500);
            } catch (err) {
                showNotification('JSON error: ' + err.message, 'error');
            }
        };
        reader.readAsText(file, 'UTF-8');
    };
    input.click();
}

function resetToDefault() {
    if (!confirm('Are you sure? This will reset all data to default values.')) return;
    localStorage.removeItem('starkProjects');
    localStorage.removeItem('starkContact');
    localStorage.removeItem('starkAbout');
    initializeStorage();
    renderProjects(); renderProjectsList(); loadContactInfo(); loadAboutText(); updateContactLinks();
    showNotification('Data reset to default!', 'success');
}

// ============================================
// PARTICLES
// ============================================
function createParticles() {
    const container = document.querySelector('.ai-particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        const tx = (Math.random() * 100 - 50).toFixed(0);
        const ty = (Math.random() * 100 - 50).toFixed(0);
        p.style.cssText = `
            position:absolute;
            width:${(Math.random()*4+2).toFixed(1)}px;
            height:${(Math.random()*4+2).toFixed(1)}px;
            background:rgba(0,212,255,${(Math.random()*0.5+0.3).toFixed(2)});
            border-radius:50%;
            left:${(Math.random()*100).toFixed(1)}%;
            top:${(Math.random()*100).toFixed(1)}%;
            animation:floatParticle${i} ${(Math.random()*3+2).toFixed(1)}s ease-in-out infinite;
            animation-delay:${(Math.random()*2).toFixed(1)}s;
        `;
        const ks = document.createElement('style');
        ks.textContent = `@keyframes floatParticle${i}{0%,100%{transform:translate(0,0);opacity:.3}50%{transform:translate(${tx}px,${ty}px);opacity:.8}}`;
        document.head.appendChild(ks);
        container.appendChild(p);
    }
}

// ============================================
// GLOBAL KEYFRAMES
// ============================================
const _globalStyle = document.createElement('style');
_globalStyle.textContent = `
    @keyframes slideInRight  { from{opacity:0;transform:translateX(100px)} to{opacity:1;transform:translateX(0)} }
    @keyframes slideOutRight { from{opacity:1;transform:translateX(0)}     to{opacity:0;transform:translateX(100px)} }

    /* "View Impact" button style injected globally */
    .btn-view-impact {
        background: rgba(0,212,255,0.1);
        border: 1px solid rgba(0,212,255,0.45);
        color: #00d4ff;
        padding: 8px 16px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        cursor: pointer;
        font-family: inherit;
        transition: background 0.2s, transform 0.2s;
        white-space: nowrap;
    }
    .btn-view-impact:hover {
        background: rgba(0,212,255,0.2);
        transform: translateY(-2px);
    }
    .btn-github {
        display: inline-flex;
        align-items: center;
        padding: 8px 16px;
        border: 1px solid rgba(255,255,255,0.2);
        border-radius: 6px;
        color: rgba(255,255,255,0.8);
        text-decoration: none;
        font-size: 13px;
        font-weight: 600;
        transition: border-color 0.2s, color 0.2s;
    }
    .btn-github:hover { border-color: rgba(255,255,255,0.5); color:#fff; }
`;
document.head.appendChild(_globalStyle);

// ============================================
// AUTH GATE — inject styles + HTML
// ============================================
function injectAuthGate() {
    const css = document.createElement('style');
    css.textContent = `
    #starkAuthGate{display:none;position:fixed;inset:0;z-index:9999;background:rgba(10,14,39,0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);align-items:center;justify-content:center;animation:authFadeIn 0.3s ease}
    #starkAuthGate.active{display:flex}
    @keyframes authFadeIn{from{opacity:0}to{opacity:1}}
    .auth-modal{background:linear-gradient(135deg,var(--secondary-color) 0%,var(--primary-color) 100%);border:2px solid var(--accent-color);border-radius:10px;width:min(420px,92vw);text-align:center;position:relative;overflow:hidden;box-shadow:0 0 40px rgba(0,212,255,0.25),0 20px 60px rgba(0,0,0,0.6);animation:authSlideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)}
    .auth-modal::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(0,212,255,0.12),transparent);animation:authShimmer 3s ease-in-out infinite;pointer-events:none}
    @keyframes authShimmer{0%{left:-100%}60%{left:100%}100%{left:100%}}
    @keyframes authSlideUp{from{transform:translateY(28px) scale(0.96);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}
    .auth-header{display:flex;align-items:center;justify-content:center;gap:14px;padding:22px 28px 18px;border-bottom:1px solid var(--border-color);background:rgba(0,212,255,0.05);position:relative}
    .auth-logo-wrap{width:52px;height:52px;position:relative;flex-shrink:0}
    .auth-logo-wrap img{width:52px;height:52px;border-radius:50%;object-fit:cover;border:2px solid var(--accent-color);position:relative;z-index:2;clip-path:circle(50%);animation:logoGlow 3s ease-in-out infinite}
    .auth-ring{position:absolute;inset:-4px;border-radius:50%;border:2px solid transparent;border-top-color:var(--accent-color);border-right-color:var(--success-color);animation:authRingSpin 2s linear infinite;z-index:3}
    .auth-ring-slow{position:absolute;inset:-8px;border-radius:50%;border:1px solid transparent;border-bottom-color:rgba(0,212,255,0.35);animation:authRingSpin 3.5s linear infinite reverse;z-index:3}
    @keyframes authRingSpin{to{transform:rotate(360deg)}}
    .auth-header-text h2{font-family:'Stardos Stencil',sans-serif;font-size:20px;font-weight:700;letter-spacing:2px;background:linear-gradient(135deg,var(--accent-color),var(--success-color));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin:0 0 2px}
    .auth-header-text p{font-size:11px;color:var(--text-secondary);letter-spacing:1.5px;text-transform:uppercase;margin:0}
    .auth-badge{position:absolute;top:14px;right:16px;background:rgba(0,212,255,0.1);border:1px solid var(--accent-color);border-radius:20px;padding:3px 10px;font-size:9px;color:var(--accent-color);letter-spacing:1.5px;text-transform:uppercase;font-weight:600}
    .auth-body{padding:28px 32px 26px}
    .auth-field-label{display:block;font-size:11px;color:var(--text-secondary);letter-spacing:1.5px;text-transform:uppercase;text-align:left;margin-bottom:8px}
    .auth-input-row{position:relative;margin-bottom:8px}
    #starkPwInput{width:100%;background:rgba(0,212,255,0.05);border:1px solid var(--border-color);color:var(--text-primary);padding:14px 48px 14px 16px;border-radius:8px;font-family:inherit;font-size:15px;letter-spacing:3px;outline:none;transition:var(--transition);box-sizing:border-box}
    #starkPwInput::placeholder{letter-spacing:0;color:rgba(176,184,212,0.4)}
    #starkPwInput:focus{border-color:var(--accent-color);box-shadow:0 0 15px rgba(0,212,255,0.3);background:rgba(0,212,255,0.1)}
    #starkPwInput.auth-shake{border-color:var(--danger-color);box-shadow:0 0 15px rgba(255,51,102,0.3);animation:authShake 0.4s ease}
    @keyframes authShake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}
    #starkEyeBtn{position:absolute;right:14px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--text-secondary);font-size:15px;padding:0;line-height:1;transition:var(--transition)}
    #starkEyeBtn:hover{color:var(--accent-color)}
    .auth-error{font-size:12px;color:var(--danger-color);text-align:left;min-height:18px;margin-bottom:18px;opacity:0;transition:opacity 0.2s}
    .auth-error.visible{opacity:1}
    #starkAuthBtn{width:100%;padding:15px;background:linear-gradient(135deg,var(--accent-color),var(--success-color));border:none;border-radius:8px;color:var(--primary-color);font-size:15px;font-weight:700;letter-spacing:2px;text-transform:uppercase;cursor:pointer;font-family:inherit;transition:var(--transition);margin-bottom:14px}
    #starkAuthBtn:hover{transform:translateY(-3px);box-shadow:0 15px 35px rgba(0,212,255,0.4)}
    #starkAuthBtn:active{transform:scale(0.98)}
    #starkCancelBtn{background:none;border:none;font-size:12px;color:var(--text-secondary);cursor:pointer;letter-spacing:1px;font-family:inherit;transition:var(--transition);width:100%}
    #starkCancelBtn:hover{color:var(--accent-color)}
    .auth-success{position:absolute;inset:0;border-radius:10px;background:rgba(10,14,39,0.93);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:14px;opacity:0;pointer-events:none;transition:opacity 0.3s;z-index:10}
    .auth-success.visible{opacity:1}
    .auth-success-icon{font-size:48px;color:var(--success-color);text-shadow:0 0 30px rgba(0,255,136,0.7);animation:authPopIn 0.4s cubic-bezier(0.34,1.56,0.64,1)}
    @keyframes authPopIn{from{transform:scale(0) rotate(-20deg)}to{transform:scale(1) rotate(0deg)}}
    .auth-success-text{font-family:'Stardos Stencil',sans-serif;background:linear-gradient(135deg,var(--accent-color),var(--success-color));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-size:18px;letter-spacing:3px;text-transform:uppercase}
    #dashboardToggle::before{content:'🔒 ';font-size:11px}
    `;
    document.head.appendChild(css);

    document.body.insertAdjacentHTML('beforeend', `
    <div id="starkAuthGate">
        <div class="auth-modal">
            <div class="auth-header">
                <div class="auth-logo-wrap">
                    <img src="logo.gif" alt="STARK AI">
                    <div class="auth-ring"></div>
                    <div class="auth-ring-slow"></div>
                </div>
                <div class="auth-header-text">
                    <h2>STARK AI</h2>
                    <p>Dashboard Access</p>
                </div>
                <span class="auth-badge">Restricted</span>
            </div>
            <div class="auth-body">
                <label class="auth-field-label" for="starkPwInput">Enter Password</label>
                <div class="auth-input-row">
                    <input type="password" id="starkPwInput" placeholder="••••••••" autocomplete="current-password" spellcheck="false"/>
                    <button id="starkEyeBtn" type="button">👁</button>
                </div>
                <p class="auth-error" id="starkAuthErr">Incorrect password. Try again.</p>
                <button id="starkAuthBtn" type="button">Unlock Dashboard</button>
                <button id="starkCancelBtn" type="button">Cancel</button>
            </div>
            <div class="auth-success" id="starkAuthSuccess">
                <div class="auth-success-icon">✓</div>
                <div class="auth-success-text">Access Granted</div>
            </div>
        </div>
    </div>`);
}

// ============================================
// AUTH GATE LOGIC
// ============================================
function openAuthGate(onSuccess) {
    const gate    = document.getElementById('starkAuthGate');
    const input   = document.getElementById('starkPwInput');
    const btn     = document.getElementById('starkAuthBtn');
    const eye     = document.getElementById('starkEyeBtn');
    const err     = document.getElementById('starkAuthErr');
    const cancel  = document.getElementById('starkCancelBtn');
    const success = document.getElementById('starkAuthSuccess');

    input.value = '';
    input.type  = 'password';
    eye.textContent = '👁';
    err.classList.remove('visible');
    success.classList.remove('visible');
    input.classList.remove('auth-shake');

    gate.classList.add('active');
    setTimeout(() => input.focus(), 380);

    function closeGate() { gate.classList.remove('active'); }

    function attempt() {
        if (input.value === STARK_PASSWORD) {
            startSession();
            err.classList.remove('visible');
            success.classList.add('visible');
            setTimeout(() => {
                closeGate();
                success.classList.remove('visible');
                onSuccess();
            }, 1300);
        } else {
            err.classList.add('visible');
            input.classList.remove('auth-shake');
            void input.offsetWidth;
            input.classList.add('auth-shake');
            input.addEventListener('animationend', () => input.classList.remove('auth-shake'), { once:true });
        }
    }

    btn.onclick     = attempt;
    cancel.onclick  = closeGate;
    input.onkeydown = e => { if (e.key === 'Enter') attempt(); };
    eye.onclick     = () => {
        input.type = input.type === 'password' ? 'text' : 'password';
        eye.textContent = input.type === 'password' ? '👁' : '🙈';
    };
    gate.onclick = e => { if (e.target === gate) closeGate(); };
}

// ============================================
// OPEN / CLOSE DASHBOARD PANEL
// ============================================
function openDashboardPanel() {
    const panel   = document.getElementById('dashboardPanel');
    const overlay = document.getElementById('dashboardOverlay');
    if (panel)   panel.classList.add('active');
    if (overlay) overlay.classList.add('active');
}
function closeDashboardPanel() {
    const panel   = document.getElementById('dashboardPanel');
    const overlay = document.getElementById('dashboardOverlay');
    if (panel)   panel.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
}

function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', { page_title: pageName, page_path: window.location.pathname });
    }
}

// ============================================
// MAIN — DOMContentLoaded
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    initLoadingScreen(); // ← first line
    initializeStorage();


    renderProjects();
    renderProjectsList();
    renderTestimonials();
    renderBlogPosts();

    loadContactInfo();
    loadAboutText();
    updateContactLinks();

    createParticles();
    startTypingAnimation()
    initScrollToTop();
    initActiveNav();

    injectAuthGate();
    injectImpactModal();   // ← new

    const dashboardToggle = document.getElementById('dashboardToggle');
    if (dashboardToggle) {
        dashboardToggle.addEventListener('click', e => {
            e.preventDefault();
            if (isSessionValid()) {
                openDashboardPanel();
            } else {
                openAuthGate(() => openDashboardPanel());
            }
        });
    }

    const closeDashboardBtn = document.getElementById('closeDashboard');
    const dashboardOverlay  = document.getElementById('dashboardOverlay');
    if (closeDashboardBtn) closeDashboardBtn.addEventListener('click', closeDashboardPanel);
    if (dashboardOverlay)  dashboardOverlay.addEventListener('click', closeDashboardPanel);

    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            if (isSessionValid()) {
                openDashboardPanel();
            } else {
                openAuthGate(() => openDashboardPanel());
            }
        }
    });

    document.addEventListener('click', e => {
        const tabBtn = e.target.closest('.tab-btn');
        if (!tabBtn) return;
        const tabName = tabBtn.getAttribute('data-tab');
        if (!tabName) return;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tabBtn.classList.add('active');
        const target = document.getElementById(tabName);
        if (target) target.classList.add('active');
    });

    const addProjectForm = document.getElementById('addProjectForm');
    if (addProjectForm) {
        addProjectForm.addEventListener('submit', e => {
            e.preventDefault();
            const title       = document.getElementById('projectTitle').value.trim();
            const description = document.getElementById('projectDescription').value.trim();
            const tech        = document.getElementById('projectTech').value.trim();
            const github      = document.getElementById('projectGithub').value.trim();
            const demo        = document.getElementById('projectDemo').value.trim();
            const image       = document.getElementById('projectImage').value.trim();
            const stars       = parseInt(document.getElementById('projectStars').value) || 0;

            if (!title || !description) {
                showNotification('Title and description are required!', 'error');
                return;
            }
            const newProject = {
                id: Date.now(), title, description,
                technologies: tech ? tech.split(',').map(t => t.trim()) : [],
                github, demo, image, stars,
                problem:  '',
                solution: '',
                impact:   ''
            };
            const projects = getProjects();
            projects.push(newProject);
            saveProjects(projects);
            addProjectForm.reset();
            renderProjects();
            renderProjectsList();
            showNotification('Project added successfully!', 'success');
        });
    }

    const hamburger = document.getElementById('hamburger');
    const navMenu   = document.querySelector('.nav-menu');
    if (hamburger) hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    document.querySelectorAll('.nav-link').forEach(link =>
        link.addEventListener('click', () => navMenu && navMenu.classList.remove('active'))
    );

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || this.id === 'dashboardToggle') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    const contactForm = document.getElementById('contactForm');
    if (contactForm && typeof emailjs !== 'undefined') {
        emailjs.init('iHEdPm2yXKwNn0C9o');
        contactForm.addEventListener('submit', e => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const params = {
                from_name:  formData.get('name'),
                from_email: formData.get('email'),
                message:    formData.get('message')
            };
            showNotification('Sending...', 'success');
            emailjs.send('service_usrd5yg', 'template_o6srwqo', params, 'iHEdPm2yXKwNn0C9o')
                .then(() => { showNotification('Message sent successfully!', 'success'); contactForm.reset(); })
                .catch(err => { showNotification('Failed to send. Please try again.', 'error'); console.error(err); });
        });
    }

    const blogSearch   = document.getElementById('blogSearch');
    const blogCategory = document.getElementById('blogCategory');
    if (blogSearch)   blogSearch.addEventListener('input',  () => renderBlogPosts(blogCategory ? blogCategory.value : '', blogSearch.value));
    if (blogCategory) blogCategory.addEventListener('change', () => renderBlogPosts(blogCategory.value, blogSearch ? blogSearch.value : ''));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity    = '1';
                entry.target.style.transform  = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.feature-card, .tech-card').forEach(el => {
        el.style.opacity   = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    trackPageView('Home');
    console.log('✅ STARK AI Portfolio loaded successfully!');
});
function startTypingAnimation() {
    const el = document.querySelector('.hero-subtitle');
    if (!el) return;
 
    const phrases = [
        'Building Intelligent AI Systems for the Future',
        'Crafting NLP Solutions That Understand You',
        'Automating Business Workflows with AI',
        'Training Models That Solve Real Problems',
        'Turning Data Into Intelligent Decisions',
        'Building Medical AI for Better Healthcare',
    ];
 
    // inject cursor style once
    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .typing-cursor {
            display: inline-block;
            width: 2px;
            height: 1em;
            background: var(--accent-color, #00d4ff);
            margin-left: 3px;
            vertical-align: middle;
            animation: cursorBlink 0.75s step-end infinite;
        }
        @keyframes cursorBlink {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0; }
        }
    `;
    document.head.appendChild(cursorStyle);
 
    // build: <span id="typingText"></span><span class="typing-cursor"></span>
    el.innerHTML = '<span id="typingText"></span><span class="typing-cursor"></span>';
    const textEl = document.getElementById('typingText');
 
    let phraseIndex = 0;
    let charIndex   = 0;
    let isDeleting  = false;
 
    const TYPE_SPEED   = 55;   // ms per character while typing
    const DELETE_SPEED = 28;   // ms per character while deleting
    const PAUSE_AFTER  = 2200; // ms to wait at end of phrase
    const PAUSE_BEFORE = 400;  // ms pause before starting to delete
 
    function tick() {
        const currentPhrase = phrases[phraseIndex];
 
        if (!isDeleting) {
            // typing forward
            charIndex++;
            textEl.textContent = currentPhrase.slice(0, charIndex);
 
            if (charIndex === currentPhrase.length) {
                // finished typing — pause, then start deleting
                isDeleting = true;
                setTimeout(tick, PAUSE_AFTER);
                return;
            }
            setTimeout(tick, TYPE_SPEED);
        } else {
            // deleting
            charIndex--;
            textEl.textContent = currentPhrase.slice(0, charIndex);
 
            if (charIndex === 0) {
                // finished deleting — move to next phrase
                isDeleting  = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(tick, PAUSE_BEFORE);
                return;
            }
            setTimeout(tick, DELETE_SPEED);
        }
    }
 
    // small initial delay so page has settled
    setTimeout(tick, 800);
}
// ============================================
// SCROLL TO TOP BUTTON
// ============================================
// STEP 1: Paste this function into script.js (before exports)
// STEP 2: Call initScrollToTop(); inside DOMContentLoaded

function initScrollToTop() {
    // inject style
    const style = document.createElement('style');
    style.textContent = `
        #scrollTopBtn {
            position: fixed;
            bottom: 32px;
            right: 28px;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(0, 212, 255, 0.12);
            border: 1px solid rgba(0, 212, 255, 0.45);
            color: #00d4ff;
            font-size: 18px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 7000;
            opacity: 0;
            transform: translateY(16px);
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
            backdrop-filter: blur(6px);
            -webkit-backdrop-filter: blur(6px);
        }
        #scrollTopBtn.visible {
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }
        #scrollTopBtn:hover {
            background: rgba(0, 212, 255, 0.25);
        }
    `;
    document.head.appendChild(style);

    // create button
    const btn = document.createElement('button');
    btn.id = 'scrollTopBtn';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = '↑';
    document.body.appendChild(btn);

    // show/hide on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    // scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
// STEP 1: Paste this function into script.js (before exports)
// STEP 2: Call initActiveNav(); inside DOMContentLoaded

function initActiveNav() {
    // inject style — only the active state, your existing nav-link styles stay
    const style = document.createElement('style');
    style.textContent = `
        .nav-link.nav-active {
            color: var(--accent-color, #00d4ff) !important;
            position: relative;
        }
        .nav-link.nav-active::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--accent-color, #00d4ff);
            border-radius: 2px;
            animation: navUnderlineIn 0.2s ease forwards;
        }
        @keyframes navUnderlineIn {
            from { transform: scaleX(0); }
            to   { transform: scaleX(1); }
        }
    `;
    document.head.appendChild(style);

    // all sections that have a matching nav link
    const sectionIds = ['hero', 'about', 'projects', 'technologies', 'architecture', 'testimonials', 'blog', 'contact'];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            const id = entry.target.id;

            // remove active from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('nav-active');
            });

            // add active to the matching one
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) activeLink.classList.add('nav-active');
        });
    }, {
        rootMargin: '-40% 0px -55% 0px',  // triggers when section is in the middle of viewport
        threshold: 0
    });

    sectionIds.forEach(id => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });
}


// ============================================
// HOW TO CALL — inside your DOMContentLoaded block
// ============================================
// Find this line:
//     startTypingAnimation();
//
// Add right after it:
//     initScrollToTop();
//     initActiveNav();
//
// That's it. No HTML changes needed.
// ============================================
function initLoadingScreen() {
    const loader = document.getElementById('starkLoader');
    const bar    = document.getElementById('loaderBar');
    if (!loader || !bar) return;

    let progress = 0;

    const interval = setInterval(() => {
        progress += Math.random() * 18;
        if (progress >= 90) { progress = 90; clearInterval(interval); }
        bar.style.width = progress + '%';
    }, 120);

    function finish() {
        clearInterval(interval);
        bar.style.width = '100%';
        setTimeout(() => {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 600);
        }, 300);
    }

    if (document.readyState === 'complete') {
        finish();
    } else {
        window.addEventListener('load', finish, { once: true });
        setTimeout(finish, 3000); // safety fallback — never blocks longer than 3s
    }
}
// GLOBAL EXPORTS
// ============================================
window.saveAboutSection     = saveAboutSection;
window.saveContactInfo      = saveContactInfoFunc;
window.saveContactInfoFunc  = saveContactInfoFunc;
window.exportData           = exportData;
window.importDataPrompt     = importDataPrompt;
window.resetToDefault       = resetToDefault;
window.editProject          = editProject;
window.deleteProject        = deleteProject;
window.renderTestimonials   = renderTestimonials;
window.renderBlogPosts      = renderBlogPosts;
window.trackPageView        = trackPageView;
window.getNewsletterSubscribers = getNewsletterSubscribers;
window.getBlogPosts         = getBlogPosts;
window.getTestimonials      = getTestimonials;
window.closeImpactModal     = closeImpactModal;