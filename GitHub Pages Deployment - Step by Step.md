# GitHub Pages Deployment - Step by Step

Your STARK AI portfolio is ready to be deployed to GitHub Pages for permanent hosting!

## Prerequisites
- GitHub account (create one at https://github.com if you don't have one)
- Git installed on your computer

## Step-by-Step Instructions

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Fill in the repository details:
   - **Repository name**: `stark-ai-portfolio`
   - **Description**: "Premium AI portfolio website with blog, testimonials, and newsletter"
   - **Public**: Select this option (so it's accessible)
   - Leave other options as default
3. Click **Create repository**

### Step 2: Connect Local Repository to GitHub

After creating the repository, you'll see commands to push an existing repository. Run these commands in your terminal:

```bash
cd /path/to/stark-ai-portfolio

# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/stark-ai-portfolio.git

# Verify remote was added
git remote -v
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3: Push to GitHub

```bash
# Push the main branch to GitHub
git push -u origin main
```

You may be prompted to authenticate. Use one of these methods:
- **Personal Access Token**: Generate at https://github.com/settings/tokens
- **SSH Key**: Set up SSH at https://github.com/settings/keys
- **GitHub CLI**: Use `gh auth login`

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon at top right)
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main`
   - **Folder**: Select `/ (root)`
5. Click **Save**

GitHub will automatically build and deploy your site. Wait 1-2 minutes.

### Step 5: Access Your Live Website

Your portfolio will be available at:
```
https://YOUR_USERNAME.github.io/stark-ai-portfolio/
```

Replace `YOUR_USERNAME` with your GitHub username.

## Verify Deployment

1. Check the "Actions" tab in your repository to see the deployment status
2. Once deployment is complete (green checkmark), visit your URL
3. Your STARK AI portfolio is now live on the internet!

## Making Updates

After making changes locally:

```bash
# Stage changes
git add .

# Commit with a message
git commit -m "Update: Added new blog post"

# Push to GitHub
git push origin main
```

GitHub will automatically redeploy your site within seconds.

## Custom Domain (Optional)

To use a custom domain like `stark-ai.com`:

1. Purchase a domain from a registrar (GoDaddy, Namecheap, etc.)
2. Go to repository Settings → Pages
3. Under "Custom domain", enter your domain
4. Update DNS records at your domain registrar:
   - Type: `A`
   - Name: `@`
   - Value: `185.199.108.153`
   - Also add: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Wait 24 hours for DNS to propagate

## Troubleshooting

### Site not showing up
- Wait 2-3 minutes for GitHub to build
- Check Actions tab for build errors
- Verify GitHub Pages is enabled in Settings

### CSS/JS not loading
- Clear browser cache (Ctrl+Shift+Delete)
- Check file paths in HTML are correct
- Ensure all files are committed and pushed

### Custom domain not working
- Verify DNS records are correct
- Check CNAME file exists in repository
- Wait 24-48 hours for DNS propagation

## What's Included

Your deployed website includes:

✅ **Core Features**
- Responsive design (mobile, tablet, desktop)
- Dark futuristic theme with animations
- Animated logo
- Dashboard for content management

✅ **New Premium Features**
- Blog section with search and filtering
- Testimonials section with ratings
- Newsletter signup form
- Google Analytics integration
- Contact form
- Professional footer

✅ **Data Management**
- Local storage persistence
- Export/import functionality
- Automatic backups

## Support & Resources

- GitHub Pages Docs: https://pages.github.com/
- Troubleshooting: https://docs.github.com/en/pages
- Git Help: https://git-scm.com/doc

---

**Your STARK AI portfolio is now ready for the world! 🚀**

For questions or issues, refer to the main README.md file.
