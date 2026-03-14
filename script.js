// ============================================
// STARK AI - Premium Portfolio JavaScript
// Dashboard, Project Management & localStorage
// ============================================

// ============================================
// DATA MANAGEMENT & STORAGE
// ============================================

// Default projects data
const DEFAULT_PROJECTS = [
    {
        id: 1,
        title: 'STARK Medical Assistant',
        description: 'AI system that extracts medication information using Named Entity Recognition (NER). Schedules reminders and sends Telegram notifications for medication adherence.',
        technologies: ['Python', 'FastAPI', 'NLP', 'Transformers', 'Telegram API'],
        github: 'https://github.com/stark-ai/medical-assistant',
        demo: 'https://demo.stark-ai.com/medical'
    },
    {
        id: 2,
        title: 'AI Equipment Chatbot',
        description: 'NLP chatbot that answers equipment-related questions using sentence embeddings and intent classification. Supports natural language queries with high accuracy.',
        technologies: ['Python', 'FastAPI', 'Sentence Transformers', 'Intent Classification', 'PostgreSQL'],
        github: 'https://github.com/stark-ai/equipment-chatbot',
        demo: 'https://demo.stark-ai.com/chatbot'
    },
    {
        id: 3,
        title: 'Custom NLP Pipeline',
        description: 'End-to-end NLP pipeline featuring custom tokenizer, Named Entity Recognition training, and advanced data preprocessing capabilities.',
        technologies: ['Python', 'spaCy', 'NLTK', 'scikit-learn', 'PyTorch'],
        github: 'https://github.com/stark-ai/nlp-pipeline',
        demo: 'https://demo.stark-ai.com/nlp'
    }
];

const DEFAULT_CONTACT = {
    email: 'contact@stark-ai.com',
    github: 'https://github.com/stark-ai',
    linkedin: 'https://linkedin.com/company/stark-ai'
};

const DEFAULT_ABOUT = `STARK AI specializes in developing intelligent systems that leverage the power of artificial intelligence and machine learning. Our expertise spans across multiple domains including Natural Language Processing, AI-powered assistants, and automation systems. We are committed to building solutions that are not only technologically advanced but also practical and scalable for real-world applications.`;

// Initialize localStorage with default data if empty
function initializeStorage() {
    if (!localStorage.getItem('starkProjects')) {
        localStorage.setItem('starkProjects', JSON.stringify(DEFAULT_PROJECTS));
    }
    if (!localStorage.getItem('starkContact')) {
        localStorage.setItem('starkContact', JSON.stringify(DEFAULT_CONTACT));
    }
    if (!localStorage.getItem('starkAbout')) {
        localStorage.setItem('starkAbout', DEFAULT_ABOUT);
    }
}

// Get projects from storage
function getProjects() {
    const projects = localStorage.getItem('starkProjects');
    return projects ? JSON.parse(projects) : DEFAULT_PROJECTS;
}

// Save projects to storage
function saveProjects(projects) {
    localStorage.setItem('starkProjects', JSON.stringify(projects));
}

// Get contact info from storage
function getContactInfo() {
    const contact = localStorage.getItem('starkContact');
    return contact ? JSON.parse(contact) : DEFAULT_CONTACT;
}

// Save contact info to storage
function saveContactInfo(contact) {
    localStorage.setItem('starkContact', JSON.stringify(contact));
}

// Get about text from storage
function getAboutText() {
    return localStorage.getItem('starkAbout') || DEFAULT_ABOUT;
}

// Save about text to storage
function saveAboutText(text) {
    localStorage.setItem('starkAbout', text);
}

// ============================================
// DASHBOARD FUNCTIONALITY
// ============================================

const dashboardToggle = document.getElementById('dashboardToggle');
const dashboardPanel = document.getElementById('dashboardPanel');
const closeDashboard = document.getElementById('closeDashboard');
const dashboardOverlay = document.getElementById('dashboardOverlay');

// Toggle dashboard
dashboardToggle.addEventListener('click', (e) => {
    e.preventDefault();
    dashboardPanel.classList.toggle('active');
    dashboardOverlay.classList.toggle('active');
});

// Close dashboard
closeDashboard.addEventListener('click', () => {
    dashboardPanel.classList.remove('active');
    dashboardOverlay.classList.remove('active');
});

// Close dashboard when clicking overlay
dashboardOverlay.addEventListener('click', () => {
    dashboardPanel.classList.remove('active');
    dashboardOverlay.classList.remove('active');
});

// ============================================
// TAB SWITCHING
// ============================================

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// ============================================
// PROJECT MANAGEMENT
// ============================================

const addProjectForm = document.getElementById('addProjectForm');
const projectsList = document.getElementById('projectsList');
const projectsContainer = document.getElementById('projectsContainer');

// Add project form submission
addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const tech = document.getElementById('projectTech').value;
    const github = document.getElementById('projectGithub').value;
    const demo = document.getElementById('projectDemo').value;
    
    const newProject = {
        id: Date.now(),
        title,
        description,
        technologies: tech.split(',').map(t => t.trim()),
        github,
        demo
    };
    
    const projects = getProjects();
    projects.push(newProject);
    saveProjects(projects);
    
    // Reset form
    addProjectForm.reset();
    
    // Update display
    renderProjects();
    renderProjectsList();
    
    showNotification('Project added successfully!', 'success');
});

// Render projects in main section
function renderProjects() {
    const projects = getProjects();
    projectsContainer.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                ${project.github ? `<a href="${project.github}" target="_blank">GitHub</a>` : ''}
                ${project.demo ? `<a href="${project.demo}" target="_blank">Live Demo</a>` : ''}
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });
}

// Render projects list in dashboard
function renderProjectsList() {
    const projects = getProjects();
    projectsList.innerHTML = '';
    
    if (projects.length === 0) {
        projectsList.innerHTML = '<p style="color: var(--text-secondary); text-align: center;">No projects yet. Add one above!</p>';
        return;
    }
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        projectItem.innerHTML = `
            <span class="project-item-title">${project.title}</span>
            <div class="project-item-actions">
                <button onclick="editProject(${project.id})">Edit</button>
                <button onclick="deleteProject(${project.id})" style="color: var(--danger-color);">Delete</button>
            </div>
        `;
        projectsList.appendChild(projectItem);
    });
}

// Delete project
function deleteProject(id) {
    if (confirm('Are you sure you want to delete this project?')) {
        let projects = getProjects();
        projects = projects.filter(p => p.id !== id);
        saveProjects(projects);
        renderProjects();
        renderProjectsList();
        showNotification('Project deleted!', 'success');
    }
}

// Edit project (simplified - shows alert with current data)
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

// ============================================
// SECTION EDITING
// ============================================

// Load and display contact info in dashboard
function loadContactInfo() {
    const contact = getContactInfo();
    document.getElementById('contactEmail').value = contact.email;
    document.getElementById('contactGithub').value = contact.github;
    document.getElementById('contactLinkedin').value = contact.linkedin;
}

// Save contact info
function saveContactInfoFunc() {
    const contact = {
        email: document.getElementById('contactEmail').value,
        github: document.getElementById('contactGithub').value,
        linkedin: document.getElementById('contactLinkedin').value
    };
    saveContactInfo(contact);
    updateContactLinks();
    showNotification('Contact information updated!', 'success');
}

// Update contact links in the page
function updateContactLinks() {
    const contact = getContactInfo();
    document.getElementById('contactEmailLink').href = `mailto:${contact.email}`;
    document.getElementById('contactEmailLink').textContent = contact.email;
    document.getElementById('contactGithubLink').href = contact.github;
    document.getElementById('contactLinkedinLink').href = contact.linkedin;
}

// Load and display about text in dashboard
function loadAboutText() {
    document.getElementById('aboutText').value = getAboutText();
}

// Save about section
function saveAboutSection() {
    const aboutText = document.getElementById('aboutText').value;
    saveAboutText(aboutText);
    document.getElementById('aboutContent').textContent = aboutText;
    showNotification('About section updated!', 'success');
}

// ============================================
// DATA IMPORT/EXPORT
// ============================================

// Export data as JSON
function exportData() {
    const data = {
        projects: getProjects(),
        contact: getContactInfo(),
        about: getAboutText(),
        exportDate: new Date().toISOString()
    };
    
    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `stark-ai-portfolio-${new Date().getTime()}.json`;
    link.click();
    URL.revokeObjectURL(url);
    
    showNotification('Data exported successfully!', 'success');
}

// Import data from JSON
function importDataPrompt() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const data = JSON.parse(event.target.result);
                if (data.projects) saveProjects(data.projects);
                if (data.contact) saveContactInfo(data.contact);
                if (data.about) saveAboutText(data.about);
                
                renderProjects();
                renderProjectsList();
                loadContactInfo();
                loadAboutText();
                updateContactLinks();
                
                showNotification('Data imported successfully!', 'success');
            } catch (error) {
                showNotification('Error importing data. Please check the file format.', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

// Reset to default
function resetToDefault() {
    if (confirm('Are you sure? This will reset all data to default values.')) {
        localStorage.removeItem('starkProjects');
        localStorage.removeItem('starkContact');
        localStorage.removeItem('starkAbout');
        initializeStorage();
        
        renderProjects();
        renderProjectsList();
        loadContactInfo();
        loadAboutText();
        updateContactLinks();
        
        showNotification('Data reset to default!', 'success');
    }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 15px 25px;
        background: ${type === 'success' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 51, 102, 0.2)'};
        color: ${type === 'success' ? '#00ff88' : '#ff3366'};
        border: 1px solid ${type === 'success' ? '#00ff88' : '#ff3366'};
        border-radius: 8px;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ============================================
// MOBILE MENU
// ============================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ============================================
// SMOOTH SCROLLING
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('dashboardToggle')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ============================================
// CONTACT FORM
// ============================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const name = formData.get('name') || 'Unknown';
    const email = formData.get('email') || 'unknown@email.com';
    const message = formData.get('message') || 'No message';
    
    // In a real application, you would send this to a backend
    console.log('Contact Form Submission:', { name, email, message });
    
    contactForm.reset();
    showNotification('Message sent! We will get back to you soon.', 'success');
});

// ============================================
// PARTICLES ANIMATION
// ============================================

function createParticles() {
    const particlesContainer = document.querySelector('.ai-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: rgba(0, 212, 255, ${Math.random() * 0.5 + 0.3});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 3 + 2}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Add float animation to stylesheet
const style = document.createElement('style');
style.textContent = `
    @keyframes floatParticle {
        0%, 100% {
            transform: translate(0, 0);
            opacity: 0.3;
        }
        50% {
            transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
            opacity: 0.8;
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.project-card, .feature-card, .tech-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize storage
    initializeStorage();
    
    // Render projects
    renderProjects();
    renderProjectsList();
    
    // Load contact info
    loadContactInfo();
    updateContactLinks();
    
    // Load about text
    loadAboutText();
    
    // Create particles
    createParticles();
    
    // Add keyboard shortcut for dashboard (Ctrl + D)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
            e.preventDefault();
            dashboardToggle.click();
        }
    });
    
    console.log('STARK AI Portfolio loaded successfully!');
    console.log('Keyboard Shortcut: Ctrl+D (or Cmd+D on Mac) to toggle dashboard');
});

// ============================================
// EXPORT FUNCTIONS FOR DASHBOARD
// ============================================

window.saveAboutSection = saveAboutSection;
window.saveContactInfo = saveContactInfoFunc;
window.exportData = exportData;
window.importDataPrompt = importDataPrompt;
window.resetToDefault = resetToDefault;
window.editProject = editProject;
window.deleteProject = deleteProject;


// ============================================
// TESTIMONIALS DATA & MANAGEMENT
// ============================================

const DEFAULT_TESTIMONIALS = [
    {
        id: 1,
        text: "STARK AI transformed our customer support system with their intelligent chatbot. The accuracy and speed are impressive.",
        author: "Sarah Johnson",
        position: "CEO, TechCorp",
        rating: 5,
        avatar: "SJ"
    },
    {
        id: 2,
        text: "The NLP solutions provided by STARK AI have significantly improved our data processing capabilities.",
        author: "Michael Chen",
        position: "CTO, DataFlow Inc",
        rating: 5,
        avatar: "MC"
    },
    {
        id: 3,
        text: "Professional, innovative, and results-driven. STARK AI exceeded our expectations on every project.",
        author: "Emma Williams",
        position: "Product Manager, AI Solutions",
        rating: 5,
        avatar: "EW"
    },
    {
        id: 4,
        text: "Their expertise in machine learning and AI automation has been invaluable to our organization.",
        author: "David Martinez",
        position: "Director, Innovation Labs",
        rating: 5,
        avatar: "DM"
    }
];

const DEFAULT_BLOG_POSTS = [
    {
        id: 1,
        title: "The Future of Natural Language Processing",
        excerpt: "Exploring the latest advancements in NLP and how they're shaping the future of AI.",
        category: "AI",
        date: "March 10, 2026",
        emoji: "📚",
        content: "Natural Language Processing continues to evolve..."
    },
    {
        id: 2,
        title: "Building Intelligent Chatbots with Transformers",
        excerpt: "A comprehensive guide to creating state-of-the-art conversational AI systems.",
        category: "Tutorial",
        date: "March 8, 2026",
        emoji: "💬",
        content: "Transformers have revolutionized the field of NLP..."
    },
    {
        id: 3,
        title: "AI in Healthcare: Real-World Applications",
        excerpt: "Discover how AI is transforming healthcare and improving patient outcomes.",
        category: "News",
        date: "March 5, 2026",
        emoji: "🏥",
        content: "The healthcare industry is experiencing a revolution..."
    },
    {
        id: 4,
        title: "Getting Started with Machine Learning",
        excerpt: "A beginner's guide to understanding and implementing machine learning models.",
        category: "Tutorial",
        date: "March 1, 2026",
        emoji: "🤖",
        content: "Machine learning might seem complex at first..."
    },
    {
        id: 5,
        title: "Latest Trends in AI Automation",
        excerpt: "Exploring cutting-edge automation techniques powered by artificial intelligence.",
        category: "AI",
        date: "February 28, 2026",
        emoji: "⚙️",
        content: "Automation is becoming increasingly sophisticated..."
    },
    {
        id: 6,
        title: "NLP for Sentiment Analysis",
        excerpt: "Learn how to analyze customer sentiment using advanced NLP techniques.",
        category: "NLP",
        date: "February 25, 2026",
        emoji: "😊",
        content: "Sentiment analysis is a powerful tool..."
    }
];

// Get testimonials from storage
function getTestimonials() {
    const testimonials = localStorage.getItem('starkTestimonials');
    return testimonials ? JSON.parse(testimonials) : DEFAULT_TESTIMONIALS;
}

// Save testimonials to storage
function saveTestimonials(testimonials) {
    localStorage.setItem('starkTestimonials', JSON.stringify(testimonials));
}

// Get blog posts from storage
function getBlogPosts() {
    const posts = localStorage.getItem('starkBlogPosts');
    return posts ? JSON.parse(posts) : DEFAULT_BLOG_POSTS;
}

// Save blog posts to storage
function saveBlogPosts(posts) {
    localStorage.setItem('starkBlogPosts', JSON.stringify(posts));
}

// Get newsletter subscribers
function getNewsletterSubscribers() {
    const subscribers = localStorage.getItem('starkNewsletterSubscribers');
    return subscribers ? JSON.parse(subscribers) : [];
}

// Save newsletter subscribers
function saveNewsletterSubscribers(subscribers) {
    localStorage.setItem('starkNewsletterSubscribers', JSON.stringify(subscribers));
}

// ============================================
// TESTIMONIALS RENDERING
// ============================================

function renderTestimonials() {
    const container = document.getElementById('testimonialsContainer');
    const testimonials = getTestimonials();
    
    container.innerHTML = '';
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${testimonial.avatar}</div>
                <div class="testimonial-info">
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.position}</p>
                    <div class="testimonial-rating">${'⭐'.repeat(testimonial.rating)}</div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// ============================================
// BLOG RENDERING & FILTERING
// ============================================

function renderBlogPosts(filter = '', search = '') {
    const container = document.getElementById('blogContainer');
    let posts = getBlogPosts();
    
    // Filter by category
    if (filter) {
        posts = posts.filter(post => post.category === filter);
    }
    
    // Search by title or excerpt
    if (search) {
        posts = posts.filter(post => 
            post.title.toLowerCase().includes(search.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(search.toLowerCase())
        );
    }
    
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
            </div>
        `;
        container.appendChild(card);
    });
}

// Blog search functionality
const blogSearch = document.getElementById('blogSearch');
const blogCategory = document.getElementById('blogCategory');

if (blogSearch) {
    blogSearch.addEventListener('input', () => {
        renderBlogPosts(blogCategory.value, blogSearch.value);
    });
}

if (blogCategory) {
    blogCategory.addEventListener('change', () => {
        renderBlogPosts(blogCategory.value, blogSearch.value);
    });
}

// ============================================
// NEWSLETTER FUNCTIONALITY
// ============================================

const newsletterForm = document.getElementById('newsletterForm');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        const subscribers = getNewsletterSubscribers();
        
        // Check if already subscribed
        if (subscribers.includes(email)) {
            showNotification('You are already subscribed!', 'info');
        } else {
            subscribers.push(email);
            saveNewsletterSubscribers(subscribers);
            newsletterForm.reset();
            showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
            
            // Track newsletter signup
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    'email': email
                });
            }
        }
    });
}

// ============================================
// GOOGLE ANALYTICS TRACKING
// ============================================

// Track page views
function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            'page_title': pageName,
            'page_path': window.location.pathname
        });
    }
}

// Track section views
const sections = document.querySelectorAll('section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            trackPageView(`Section: ${entry.target.id}`);
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => sectionObserver.observe(section));

// Track button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'button_click', {
                'button_text': button.textContent,
                'button_type': button.className
            });
        }
    });
});

// Track form submissions
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', () => {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'form_id': form.id || 'unknown'
            });
        }
    });
});

// ============================================
// ADVANCED FEATURES
// ============================================

// Scroll tracking
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        if (maxScroll % 25 === 0 && typeof gtag !== 'undefined') {
            gtag('event', 'scroll_depth', {
                'scroll_percent': Math.round(maxScroll)
            });
        }
    }
});

// Time on page tracking
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 1;
    if (timeOnPage % 60 === 0 && typeof gtag !== 'undefined') {
        gtag('event', 'engagement', {
            'time_on_page': timeOnPage
        });
    }
}, 1000);

// ============================================
// ENHANCED INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Render testimonials
    renderTestimonials();
    
    // Render blog posts
    renderBlogPosts();
    
    // Initialize newsletter
    if (newsletterForm) {
        // Form already has event listener
    }
    
    // Track initial page view
    trackPageView('Home');
    
    console.log('✅ STARK AI Premium Portfolio loaded with all features!');
    console.log('📊 Google Analytics tracking enabled');
    console.log('📧 Newsletter subscription active');
    console.log('💬 Testimonials loaded');
    console.log('📝 Blog system ready');
});

// ============================================
// EXPORT ENHANCED FUNCTIONS
// ============================================

window.renderTestimonials = renderTestimonials;
window.renderBlogPosts = renderBlogPosts;
window.trackPageView = trackPageView;
window.getNewsletterSubscribers = getNewsletterSubscribers;
window.getBlogPosts = getBlogPosts;
window.getTestimonials = getTestimonials;
