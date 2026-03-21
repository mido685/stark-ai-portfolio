// ============================================
// STARK AI - Premium Portfolio JavaScript
// ============================================

// ============================================
// DATA MANAGEMENT & STORAGE
// ============================================

const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: 'STARK Medical Assistant',
        description: 'AI system that extracts medication information using Named Entity Recognition (NER). Schedules reminders and sends Telegram notifications for medication adherence.',
        technologies: ['Python', 'FastAPI', 'NLP', 'Transformers', 'Telegram API'],
        github: 'https://github.com/mido685/medical-assistant',
        demo: ''
    },
    {
        id: 2,
        title: 'AI Equipment Chatbot',
        description: 'NLP chatbot that answers equipment-related questions using sentence embeddings and intent classification. Supports natural language queries with high accuracy.',
        technologies: ['Python', 'FastAPI', 'Sentence Transformers', 'Intent Classification', 'PostgreSQL'],
        github: 'https://github.com/mido685/equipment-chatbot',
        demo: ''
    },
    {
      "id": 3,
      "title": "Stark Medical Tokenizer",
      "description": "A WordPiece tokenizer built from scratch for medical NLP — same algorithm used in BERT and BioBERT. Features a HuggingFace-compatible API, medical text preprocessing pipeline covering 28 clinical domains, subword vocabulary learning, and a live demo powered by FastAPI deployed on HuggingFace Spaces.",
      "technologies": [
        "Python",
        "FastAPI",
        "WordPiece Algorithm",
        "Medical NLP",
        "HuggingFace Spaces",
        "PyTorch"
      ],
      "github": "https://github.com/mido685/stark_tokenizer",
      "demo": "https://mido685.github.io/stark_tokenizer/"
    }
];

const DEFAULT_CONTACT = {
    email: 'mohamedstark874@gmail.com',
    github: 'https://github.com/mido685',
    linkedin: 'https://www.linkedin.com/in/mohamed-ibrahim-967831187'
};

const DEFAULT_ABOUT = `STARK AI specializes in developing intelligent systems that leverage the power of artificial intelligence and machine learning. Our expertise spans across multiple domains including Natural Language Processing, AI-powered assistants, and automation systems. We are committed to building solutions that are not only technologically advanced but also practical and scalable for real-world applications.`;

const DEFAULT_TESTIMONIALS = [
    { id: 1, text: "STARK AI transformed our customer support system with their intelligent chatbot. The accuracy and speed are impressive.", author: "Sarah Johnson", position: "CEO, TechCorp", rating: 5, avatar: "SJ" },
    { id: 2, text: "The NLP solutions provided by STARK AI have significantly improved our data processing capabilities.", author: "Michael Chen", position: "CTO, DataFlow Inc", rating: 5, avatar: "MC" },
    { id: 3, text: "Professional, innovative, and results-driven. STARK AI exceeded our expectations on every project.", author: "Emma Williams", position: "Product Manager, AI Solutions", rating: 5, avatar: "EW" },
    { id: 4, text: "Their expertise in machine learning and AI automation has been invaluable to our organization.", author: "David Martinez", position: "Director, Innovation Labs", rating: 5, avatar: "DM" }
];

const DEFAULT_BLOG_POSTS = [
    { id: 1, title: "The Future of Natural Language Processing", excerpt: "Exploring the latest advancements in NLP and how they're shaping the future of AI.", category: "AI", date: "March 10, 2026", emoji: "📚" },
    { id: 2, title: "Building Intelligent Chatbots with Transformers", excerpt: "A comprehensive guide to creating state-of-the-art conversational AI systems.", category: "Tutorial", date: "March 8, 2026", emoji: "💬" },
    { id: 3, title: "AI in Healthcare: Real-World Applications", excerpt: "Discover how AI is transforming healthcare and improving patient outcomes.", category: "News", date: "March 5, 2026", emoji: "🏥" },
    { id: 4, title: "Getting Started with Machine Learning", excerpt: "A beginner's guide to understanding and implementing machine learning models.", category: "Tutorial", date: "March 1, 2026", emoji: "🤖" },
    { id: 5, title: "Latest Trends in AI Automation", excerpt: "Exploring cutting-edge automation techniques powered by artificial intelligence.", category: "AI", date: "February 28, 2026", emoji: "⚙️" },
    { id: 6, title: "NLP for Sentiment Analysis", excerpt: "Learn how to analyze customer sentiment using advanced NLP techniques.", category: "NLP", date: "February 25, 2026", emoji: "😊" }
];

function initializeStorage() {
    if (!localStorage.getItem('starkProjects')) localStorage.setItem('starkProjects', JSON.stringify(DEFAULT_PROJECTS));
    if (!localStorage.getItem('starkContact')) localStorage.setItem('starkContact', JSON.stringify(DEFAULT_CONTACT));
    if (!localStorage.getItem('starkAbout')) localStorage.setItem('starkAbout', DEFAULT_ABOUT);
}

function getProjects() { return JSON.parse(localStorage.getItem('starkProjects')) || DEFAULT_PROJECTS; }
function saveProjects(p) { localStorage.setItem('starkProjects', JSON.stringify(p)); }
function getContactInfo() { return JSON.parse(localStorage.getItem('starkContact')) || DEFAULT_CONTACT; }
function saveContactInfo(c) { localStorage.setItem('starkContact', JSON.stringify(c)); }
function getAboutText() { return localStorage.getItem('starkAbout') || DEFAULT_ABOUT; }
function saveAboutText(t) { localStorage.setItem('starkAbout', t); }
function getTestimonials() { return JSON.parse(localStorage.getItem('starkTestimonials')) || DEFAULT_TESTIMONIALS; }
function getBlogPosts() { return JSON.parse(localStorage.getItem('starkBlogPosts')) || DEFAULT_BLOG_POSTS; }
function getNewsletterSubscribers() { return JSON.parse(localStorage.getItem('starkNewsletterSubscribers')) || []; }
function saveNewsletterSubscribers(s) { localStorage.setItem('starkNewsletterSubscribers', JSON.stringify(s)); }

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 100px; right: 20px; padding: 15px 25px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 51, 102, 0.2)'};
        color: ${type === 'success' ? '#00ff88' : '#ff3366'};
        border: 1px solid ${type === 'success' ? '#00ff88' : '#ff3366'};
        border-radius: 8px; z-index: 3000; animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    const projects = getProjects();
    container.innerHTML = '';
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${project.technologies.map(t => `<span class="tech-badge">${t}</span>`).join('')}</div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ''}
            </div>`;
        container.appendChild(card);
    });
}

function renderProjectsList() {
    const list = document.getElementById('projectsList');
    if (!list) return;
    const projects = getProjects();
    list.innerHTML = '';
    if (projects.length === 0) {
        list.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No projects yet. Add one above!</p>';
        return;
    }
    projects.forEach(project => {
        const item = document.createElement('div');
        item.className = 'project-item';
        item.innerHTML = `
            <span class="project-item-title">${project.title}</span>
            <div class="project-item-actions">
                <button onclick="editProject(${project.id})">Edit</button>
                <button onclick="deleteProject(${project.id})" style="color: var(--danger-color);">Delete</button>
            </div>`;
        list.appendChild(item);
    });
}

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

function renderBlogPosts(filter = '', search = '') {
    const container = document.getElementById('blogContainer');
    if (!container) return;
    let posts = getBlogPosts();
    if (filter) posts = posts.filter(p => p.category === filter);
    if (search) posts = posts.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()));
    container.innerHTML = '';
    if (posts.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--text-secondary);">No articles found.</p>';
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

function updateContactLinks() {
    const contact = getContactInfo();
    const emailLink = document.getElementById('contactEmailLink');
    const githubLink = document.getElementById('contactGithubLink');
    const linkedinLink = document.getElementById('contactLinkedinLink');
    if (emailLink) { emailLink.href = `mailto:${contact.email}`; emailLink.textContent = contact.email; }
    if (githubLink) { githubLink.href = contact.github; githubLink.textContent = contact.github; }
    if (linkedinLink) { linkedinLink.href = contact.linkedin; linkedinLink.textContent = contact.linkedin; }
}

function loadContactInfo() {
    const contact = getContactInfo();
    const email = document.getElementById('contactEmail');
    const github = document.getElementById('contactGithub');
    const linkedin = document.getElementById('contactLinkedin');
    if (email) email.value = contact.email;
    if (github) github.value = contact.github;
    if (linkedin) linkedin.value = contact.linkedin;
}

function loadAboutText() {
    const el = document.getElementById('aboutText');
    if (el) el.value = getAboutText();
}

// ============================================
// DASHBOARD ACTIONS
// ============================================

function saveContactInfoFunc() {
    const contact = {
        email: document.getElementById('contactEmail').value,
        github: document.getElementById('contactGithub').value,
        linkedin: document.getElementById('contactLinkedin').value
    };
    localStorage.setItem('starkContact', JSON.stringify(contact));
    updateContactLinks();
    showNotification('Contact information updated!', 'success');
}

function saveAboutSection() {
    const text = document.getElementById('aboutText').value;
    saveAboutText(text);
    document.getElementById('aboutContent').textContent = text;
    showNotification('About section updated!', 'success');
}

function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        let projects = getProjects().filter(p => p.id !== id);
        saveProjects(projects);
        renderProjects();
        renderProjectsList();
        showNotification('Project deleted!', 'success');
    }
}

function editProject(id) {
    const projects = getProjects();
    const project = projects.find(p => p.id === id);
    if (project) {
        const newTitle = prompt('Project Title:', project.title);
        if (newTitle !== null) {
            project.title = newTitle;
            saveProjects(projects);
            renderProjects();
            renderProjectsList();
            showNotification('Project updated!', 'success');
        }
    }
}

function exportData() {
    const data = { projects: getProjects(), contact: getContactInfo(), about: getAboutText(), exportDate: new Date().toISOString() };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `stark-ai-backup-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showNotification('Data exported successfully!', 'success');
}

function importDataPrompt() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json,.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const raw = event.target.result.trim();
                const data = JSON.parse(raw);
                let imported = false;
                if (data.projects && Array.isArray(data.projects)) { saveProjects(data.projects); imported = true; }
                if (data.contact && typeof data.contact === 'object') { saveContactInfo(data.contact); imported = true; }
                if (data.about && typeof data.about === 'string') { saveAboutText(data.about); imported = true; }
                if (!imported) { showNotification('File has no valid data.', 'error'); return; }
                renderProjects(); renderProjectsList(); loadContactInfo(); loadAboutText(); updateContactLinks();
                showNotification('Data imported! Reloading...', 'success');
                setTimeout(() => window.location.reload(), 1500);
            } catch (error) {
                showNotification('JSON error: ' + error.message, 'error');
            }
        };
        reader.readAsText(file, 'UTF-8');
    };
    input.click();
}

function resetToDefault() {
    if (confirm('Are you sure? This will reset all data to default values.')) {
        localStorage.removeItem('starkProjects');
        localStorage.removeItem('starkContact');
        localStorage.removeItem('starkAbout');
        initializeStorage();
        renderProjects(); renderProjectsList(); loadContactInfo(); loadAboutText(); updateContactLinks();
        showNotification('Data reset to default!', 'success');
    }
}

// ============================================
// PARTICLES ANIMATION
// ============================================

function createParticles() {
    const container = document.querySelector('.ai-particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px; height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%; left: ${Math.random() * 100}%; top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;`;
        container.appendChild(particle);
    }
}

// Add animations to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% { transform: translate(0, 0); opacity: 0.3; }
        50% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0.8; }
    }
    @keyframes slideInRight { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes slideOutRight { from { opacity: 1; transform: translateX(0); } to { opacity: 0; transform: translateX(100px); } }
`;
document.head.appendChild(style);

// ============================================
// GOOGLE ANALYTICS
// ============================================

function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', { 'page_title': pageName, 'page_path': window.location.pathname });
    }
}

// ============================================
// MAIN INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {

    // Initialize storage
    initializeStorage();

    // Render all sections
    renderProjects();
    renderProjectsList();
    renderTestimonials();
    renderBlogPosts();

    // Load dashboard data
    loadContactInfo();
    loadAboutText();
    updateContactLinks();

    // Create particles
    createParticles();

    // ============ DASHBOARD ============
    const dashboardToggle = document.getElementById('dashboardToggle');
    const dashboardPanel = document.getElementById('dashboardPanel');
    const closeDashboard = document.getElementById('closeDashboard');
    const dashboardOverlay = document.getElementById('dashboardOverlay');

    if (dashboardToggle) {
        dashboardToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dashboardPanel.classList.toggle('active');
            dashboardOverlay.classList.toggle('active');
        });
    }

    if (closeDashboard) {
        closeDashboard.addEventListener('click', () => {
            dashboardPanel.classList.remove('active');
            dashboardOverlay.classList.remove('active');
        });
    }

    if (dashboardOverlay) {
        dashboardOverlay.addEventListener('click', () => {
            dashboardPanel.classList.remove('active');
            dashboardOverlay.classList.remove('active');
        });
    }

    // Keyboard shortcut Ctrl+D
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            if (dashboardToggle) dashboardToggle.click();
        }
    });

    // ============ TABS ============
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // ============ ADD PROJECT FORM ============
    const addProjectForm = document.getElementById('addProjectForm');
    if (addProjectForm) {
        addProjectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const title = document.getElementById('projectTitle').value.trim();
            const description = document.getElementById('projectDescription').value.trim();
            const tech = document.getElementById('projectTech').value.trim();
            const github = document.getElementById('projectGithub').value.trim();
            const demo = document.getElementById('projectDemo').value.trim();
            if (!title || !description) { showNotification('Title and description are required!', 'error'); return; }
            const newProject = { id: Date.now(), title, description, technologies: tech ? tech.split(',').map(t => t.trim()) : [], github, demo };
            const projects = getProjects();
            projects.push(newProject);
            saveProjects(projects);
            addProjectForm.reset();
            renderProjects();
            renderProjectsList();
            showNotification('Project added successfully!', 'success');
        });
    }

    // ============ MOBILE MENU ============
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('active'));
    });

    // ============ SMOOTH SCROLLING ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && !href.includes('dashboardToggle')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ============ CONTACT FORM ============
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        emailjs.init('iHEdPm2yXKwNn0C9o');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const templateParams = { from_name: formData.get('name'), from_email: formData.get('email'), message: formData.get('message') };
            showNotification('Sending...', 'success');
            emailjs.send('service_usrd5yg', 'template_o6srwqo', templateParams)
                .then(() => { showNotification('Message sent successfully!', 'success'); contactForm.reset(); })
                .catch((error) => { showNotification('Failed to send. Please try again.', 'error'); console.error('EmailJS error:', error); });
        });
    }

    // ============ BLOG SEARCH ============
    const blogSearch = document.getElementById('blogSearch');
    const blogCategory = document.getElementById('blogCategory');
    if (blogSearch) blogSearch.addEventListener('input', () => renderBlogPosts(blogCategory.value, blogSearch.value));
    if (blogCategory) blogCategory.addEventListener('change', () => renderBlogPosts(blogCategory.value, blogSearch ? blogSearch.value : ''));

    // ============ INTERSECTION OBSERVER ============
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.project-card, .feature-card, .tech-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Track page view
    trackPageView('Home');

    console.log('✅ STARK AI Portfolio loaded successfully!');
});

// ============================================
// EXPORT FUNCTIONS
// ============================================

window.saveAboutSection = saveAboutSection;
window.saveContactInfo = saveContactInfoFunc;
window.saveContactInfoFunc = saveContactInfoFunc;
window.exportData = exportData;
window.importDataPrompt = importDataPrompt;
window.resetToDefault = resetToDefault;
window.editProject = editProject;
window.deleteProject = deleteProject;
window.renderTestimonials = renderTestimonials;
window.renderBlogPosts = renderBlogPosts;
window.trackPageView = trackPageView;
window.getNewsletterSubscribers = getNewsletterSubscribers;
window.getBlogPosts = getBlogPosts;
window.getTestimonials = getTestimonials;