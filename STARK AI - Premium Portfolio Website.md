# STARK AI - Premium Portfolio Website

A modern, professional, dark-themed portfolio website for STARK AI - an AI company specializing in intelligent systems, NLP, and AI assistants. Built with pure HTML, CSS, and JavaScript (no frameworks).

## 🚀 Features

### Core Features
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Futuristic Theme**: Modern AI-inspired design with neon blue accents
- **Smooth Animations**: Advanced CSS animations and transitions
- **Animated Logo**: Your custom animated logo integrated seamlessly
- **Professional Layout**: Similar to modern AI startup landing pages

### Dashboard Features
- **Project Management**: Easily add, edit, and delete projects
- **Section Editing**: Edit about section and contact information
- **Data Management**: Export/import portfolio data as JSON
- **Local Storage**: All changes are automatically saved to browser localStorage
- **Settings**: Toggle dark mode and animations
- **Keyboard Shortcut**: Press `Ctrl+D` (or `Cmd+D` on Mac) to toggle dashboard

### Sections Included
1. **Navigation Bar**: Fixed header with smooth scrolling navigation
2. **Hero Section**: Eye-catching introduction with animated visuals
3. **About Section**: Company information with feature cards
4. **Projects Section**: Showcase your AI projects with descriptions and links
5. **Technologies Section**: Display tech stack in an interactive grid
6. **Architecture Section**: Visual representation of AI system architecture
7. **Contact Section**: Contact information and message form
8. **Footer**: Professional footer with links

## 📁 Project Structure

```
stark-ai-portfolio/
├── index.html          # Main HTML file with all sections
├── style.css           # Complete CSS styling (1000+ lines)
├── script.js           # JavaScript with dashboard functionality
├── logo.gif            # Your animated logo
└── README.md           # This file
```

## 🛠️ Installation & Setup

### Option 1: Local Development

1. **Clone or download the project**
   ```bash
   git clone https://github.com/your-username/stark-ai-portfolio.git
   cd stark-ai-portfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```

3. **Access the website**
   - Open `http://localhost:8000` in your browser

### Option 2: GitHub Pages Deployment

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: STARK AI portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/stark-ai-portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `main` branch and `/root` folder
   - Click Save

3. **Access your site**
   - Your portfolio will be available at: `https://your-username.github.io/stark-ai-portfolio/`

### Option 3: Other Hosting Platforms

The portfolio can be deployed to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3 + CloudFront**: Upload files to S3
- **Traditional Web Hosting**: Upload via FTP

## 📊 Dashboard Usage

### Accessing the Dashboard
1. Click the "Dashboard" button in the navigation bar
2. Or press `Ctrl+D` (Windows/Linux) or `Cmd+D` (Mac)

### Managing Projects

#### Add a New Project
1. Go to Dashboard → "Manage Projects" tab
2. Fill in the project form:
   - **Project Title**: Name of your project
   - **Project Description**: Detailed description
   - **Technologies**: Comma-separated list (e.g., "Python, FastAPI, NLP")
   - **GitHub URL**: Link to GitHub repository (optional)
   - **Live Demo URL**: Link to live demo (optional)
3. Click "Add Project"

#### Edit a Project
1. In the "Existing Projects" section, find your project
2. Click "Edit" button
3. Update the title (you can edit more fields by modifying the code)

#### Delete a Project
1. In the "Existing Projects" section, find your project
2. Click "Delete" button
3. Confirm deletion

### Editing Sections

#### Edit About Section
1. Go to Dashboard → "Edit Sections" tab
2. Modify the about text
3. Click "Save About"

#### Edit Contact Information
1. Go to Dashboard → "Edit Sections" tab
2. Update email, GitHub, and LinkedIn URLs
3. Click "Save Contact"

### Data Management

#### Export Your Data
1. Go to Dashboard → "Settings" tab
2. Click "Export Data (JSON)"
3. A JSON file will be downloaded with all your portfolio data

#### Import Data
1. Go to Dashboard → "Settings" tab
2. Click "Import Data (JSON)"
3. Select a previously exported JSON file
4. Your portfolio will be updated with the imported data

#### Reset to Default
1. Go to Dashboard → "Settings" tab
2. Click "Reset to Default"
3. Confirm the action
4. Portfolio will reset to initial state

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #0a0e27;        /* Main background */
    --secondary-color: #1a1f3a;      /* Secondary background */
    --accent-color: #00d4ff;         /* Neon blue */
    --accent-dark: #0099cc;          /* Darker blue */
    --text-primary: #ffffff;         /* Main text */
    --text-secondary: #b0b8d4;       /* Secondary text */
    --border-color: #2a3f5f;         /* Border color */
    --success-color: #00ff88;        /* Success messages */
    --danger-color: #ff3366;         /* Danger/delete */
}
```

### Changing Logo
Replace `logo.gif` with your own logo file. The logo should be:
- Square format (recommended 200x200px or larger)
- GIF, PNG, or JPG format
- Update the filename in `index.html` if different

### Modifying Content
Edit the following in `index.html`:
- Hero section text
- About section content
- Feature cards
- Contact information
- Footer text

### Adjusting Animations
Modify animation durations and effects in `style.css`:
- Look for `@keyframes` sections
- Adjust `duration`, `delay`, and `easing` values

## 🔧 Technical Details

### Browser Compatibility
- Chrome/Chromium: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Edge: ✅ Full support
- IE11: ⚠️ Limited support (no CSS Grid, animations may not work)

### Performance
- **No external dependencies**: Pure HTML/CSS/JS
- **Lightweight**: ~50KB total (HTML + CSS + JS)
- **Fast loading**: No framework overhead
- **Optimized animations**: GPU-accelerated CSS transforms

### Storage
- Uses browser localStorage to save data
- Data persists across browser sessions
- Maximum storage: ~5-10MB per domain
- No backend server required

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🚀 Deployment Checklist

Before deploying, ensure:
- [ ] Logo file is in the project directory
- [ ] All project information is accurate
- [ ] Contact information is updated
- [ ] Links (GitHub, LinkedIn, etc.) are correct
- [ ] Website looks good on mobile devices
- [ ] All animations are smooth
- [ ] Dashboard functionality works
- [ ] Data export/import works

## 📝 Default Projects

The portfolio comes with 3 sample projects:
1. **STARK Medical Assistant** - AI medication management system
2. **AI Equipment Chatbot** - NLP-based equipment Q&A
3. **Custom NLP Pipeline** - End-to-end NLP processing

You can replace these with your own projects using the dashboard.

## 🔐 Security Notes

- No sensitive data is transmitted
- All data is stored locally in browser
- No backend server or database
- Safe to use for personal portfolios

## 🐛 Troubleshooting

### Dashboard not opening?
- Try pressing `Ctrl+D` (or `Cmd+D` on Mac)
- Check browser console for errors (F12)
- Ensure JavaScript is enabled

### Data not saving?
- Check if localStorage is enabled in browser settings
- Try clearing browser cache and reload
- Check browser console for errors

### Animations not smooth?
- Update your browser to the latest version
- Disable browser extensions that might interfere
- Check "Enable Animations" in dashboard settings

### Logo not showing?
- Ensure `logo.gif` is in the same directory as `index.html`
- Check file permissions
- Try refreshing the page

## 📚 File Sizes

- `index.html`: ~15KB
- `style.css`: ~35KB
- `script.js`: ~20KB
- `logo.gif`: ~1.1MB (can be optimized)
- **Total**: ~1.2MB

## 🎯 Future Enhancements

Possible additions:
- Blog section
- Testimonials section
- Team members section
- Dark/Light mode toggle
- Multi-language support
- Analytics integration
- Newsletter signup
- Social media feeds

## 📄 License

This portfolio template is provided as-is for personal and commercial use.

## 🤝 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the code comments
3. Check browser console for errors
4. Ensure all files are in the correct directory

## 📞 Contact

- Email: contact@stark-ai.com
- GitHub: https://github.com/stark-ai
- LinkedIn: https://linkedin.com/company/stark-ai

---

**Built with ❤️ for STARK AI**

*Last Updated: March 2026*
