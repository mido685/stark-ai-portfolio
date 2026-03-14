# STARK AI Portfolio - Deployment Guide

Complete step-by-step guide to deploy your STARK AI portfolio to GitHub and other platforms.

## 🚀 GitHub Pages Deployment (Recommended)

### Step 1: Create a GitHub Account
If you don't have one, visit [github.com](https://github.com) and create a free account.

### Step 2: Create a New Repository

1. Click the **+** icon in the top right corner
2. Select **New repository**
3. Name it: `stark-ai-portfolio` (or your preferred name)
4. Add description: "Premium AI portfolio website"
5. Choose **Public** (so it's accessible)
6. Click **Create repository**

### Step 3: Initialize Git Locally

```bash
# Navigate to your portfolio directory
cd /path/to/stark-ai-portfolio

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: STARK AI premium portfolio"

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/stark-ai-portfolio.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** section
4. Under "Build and deployment":
   - Select **Deploy from a branch**
   - Choose branch: `main`
   - Choose folder: `/ (root)`
5. Click **Save**

### Step 5: Access Your Portfolio

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/stark-ai-portfolio/
```

Wait 1-2 minutes for GitHub to build and deploy your site.

---

## 📤 Updating Your Portfolio

After making changes locally:

```bash
# Stage changes
git add .

# Commit with message
git commit -m "Update: Added new project"

# Push to GitHub
git push origin main
```

GitHub will automatically rebuild your site within seconds.

---

## 🌐 Alternative Deployment Platforms

### Netlify (Easiest)

1. Visit [netlify.com](https://netlify.com)
2. Click **Sign up** (use GitHub account)
3. Click **New site from Git**
4. Select **GitHub**
5. Choose your `stark-ai-portfolio` repository
6. Click **Deploy**

Your site will be live at a Netlify URL instantly.

### Vercel

1. Visit [vercel.com](https://vercel.com)
2. Click **Sign up** (use GitHub account)
3. Click **Import Project**
4. Select your GitHub repository
5. Click **Import**

Vercel will automatically deploy and give you a custom domain.

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init hosting
   ```

4. Deploy:
   ```bash
   firebase deploy
   ```

### AWS S3 + CloudFront

1. Create S3 bucket
2. Enable static website hosting
3. Upload all files
4. Create CloudFront distribution
5. Point domain to CloudFront

---

## 🎯 Custom Domain Setup

### Using GitHub Pages with Custom Domain

1. Purchase a domain (GoDaddy, Namecheap, etc.)
2. Go to repository **Settings** → **Pages**
3. Under "Custom domain", enter your domain
4. Click **Save**
5. Update DNS records at your domain provider:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153`
   - Also add: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

Wait 24 hours for DNS to propagate.

---

## 📋 Pre-Deployment Checklist

Before deploying, verify:

- [ ] All project information is accurate
- [ ] Contact email is correct
- [ ] GitHub and LinkedIn links are updated
- [ ] Logo displays correctly
- [ ] Website looks good on mobile (test with browser DevTools)
- [ ] All links work (test clicking navigation)
- [ ] Dashboard functionality works
- [ ] No console errors (F12 → Console)
- [ ] Page loads quickly
- [ ] Animations are smooth

---

## 🔍 Testing Before Deployment

### Local Testing

```bash
# Start local server
python3 -m http.server 8000

# Or with Node.js
npx http-server

# Visit http://localhost:8000
```

### Mobile Testing

1. Get your local IP: `ipconfig getifaddr en0` (Mac) or `ipconfig` (Windows)
2. On mobile device, visit: `http://YOUR_IP:8000`
3. Test all features on mobile

### Cross-Browser Testing

Test on:
- Chrome
- Firefox
- Safari
- Edge

---

## 📊 Monitoring Your Deployment

### GitHub Pages
- Check deployment status in repository **Actions** tab
- View build logs if deployment fails

### Netlify
- Dashboard shows deployment history
- Real-time logs available

### Vercel
- Deployment analytics available
- Performance metrics shown

---

## 🔐 Security Best Practices

1. **Never commit sensitive data**
   - No API keys in code
   - No passwords in files
   - Use environment variables for secrets

2. **Keep dependencies updated**
   - No external dependencies in this project
   - But if you add packages, keep them updated

3. **Use HTTPS**
   - GitHub Pages: Automatic
   - Netlify: Automatic
   - Vercel: Automatic
   - Custom domain: Use Let's Encrypt (free)

4. **Regular backups**
   - Export portfolio data regularly
   - Keep local copy of all files

---

## 🚨 Troubleshooting Deployment

### Site not loading

**Solution:**
1. Check GitHub Pages is enabled in Settings
2. Verify repository is public
3. Check branch is set to `main`
4. Wait 2-3 minutes for deployment

### CSS/JS not loading

**Solution:**
1. Check file paths in HTML are correct
2. Ensure all files are committed and pushed
3. Clear browser cache (Ctrl+Shift+Delete)
4. Check browser console for 404 errors

### Logo not showing

**Solution:**
1. Verify `logo.gif` is in repository root
2. Check file is committed: `git ls-files`
3. Ensure filename matches in HTML
4. Wait for GitHub to rebuild

### Custom domain not working

**Solution:**
1. Verify DNS records are correct
2. Wait 24-48 hours for propagation
3. Check CNAME file exists in repository
4. Test with `nslookup your-domain.com`

---

## 📈 After Deployment

### Promote Your Portfolio

1. **Share on social media**
   - LinkedIn
   - Twitter/X
   - GitHub

2. **Add to profiles**
   - LinkedIn profile
   - GitHub bio
   - Resume/CV

3. **SEO optimization**
   - Add meta descriptions
   - Use keywords in content
   - Submit sitemap to Google Search Console

4. **Analytics**
   - Add Google Analytics
   - Monitor traffic
   - Track user behavior

---

## 🔄 Continuous Updates

### Regular Maintenance

1. **Update projects** - Add new work regularly
2. **Refresh content** - Keep information current
3. **Fix issues** - Address any bugs quickly
4. **Performance** - Optimize images and code
5. **Security** - Keep dependencies updated

### Backup Strategy

```bash
# Export data regularly
# Use dashboard: Settings → Export Data

# Backup entire repository
git clone https://github.com/YOUR_USERNAME/stark-ai-portfolio.git backup-$(date +%Y%m%d)
```

---

## 📞 Getting Help

### Resources

- [GitHub Pages Documentation](https://pages.github.com/)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
- [MDN Web Docs](https://developer.mozilla.org/)

### Common Issues

Check the main README.md troubleshooting section for:
- Dashboard not opening
- Data not saving
- Animations not smooth
- Logo not showing

---

## ✅ Deployment Complete!

Congratulations! Your STARK AI portfolio is now live on the internet.

**Next Steps:**
1. Share your portfolio URL
2. Add it to your professional profiles
3. Keep content updated
4. Monitor analytics
5. Gather feedback

---

**Last Updated: March 2026**
