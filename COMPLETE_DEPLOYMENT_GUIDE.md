# Complete Deployment Guide

This guide will help you deploy your Suprix Solution website to a server.

## 📋 Pre-Deployment Checklist

- [ ] All code changes committed
- [ ] Environment variables configured
- [ ] EmailJS configured (for contact form and enrollment)
- [ ] Build tested locally
- [ ] Server access credentials ready

## 🚀 Step-by-Step Deployment

### Step 1: Install Dependencies

Make sure all dependencies are installed:

```bash
npm install
```

### Step 2: Configure Environment Variables

Create a `.env.production` file in the root directory:

```env
# Razorpay (if using payment gateway)
VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY

# EmailJS (already configured in code, but you can override)
# VITE_EMAILJS_SERVICE_ID=service_61p4ysl
# VITE_EMAILJS_PUBLIC_KEY=cEh-KwwYV9428kPa7
```

**Note:** EmailJS is already configured in the code. If you want to use different credentials, uncomment and update the values above.

### Step 3: Build the Project

Run the build command:

```bash
npm run build:hostinger
```

This will:
- Compile TypeScript
- Build optimized production files
- Copy `.htaccess` to the `dist` folder
- Create optimized bundles

**Alternative:** Use the deployment script:

```bash
chmod +x deploy-to-hostinger.sh
./deploy-to-hostinger.sh
```

### Step 4: Verify Build Output

Check that the `dist` folder contains:
- `index.html`
- `assets/` folder with JS and CSS files
- `.htaccess` file
- Any public assets (images, videos, etc.)

### Step 5: Upload to Server

#### Option A: Using File Manager (Recommended for Hostinger)

1. **Log in to Hostinger hPanel**
   - Go to https://hpanel.hostinger.com
   - Enter your credentials

2. **Open File Manager**
   - Click on "File Manager" in the dashboard
   - Navigate to `public_html/` (or your domain's root directory)

3. **Backup Existing Files** (if any)
   - Select all existing files
   - Download as backup (optional but recommended)

4. **Delete Old Files**
   - Select all files in `public_html/`
   - Click "Delete"

5. **Upload New Files**
   - Click "Upload Files"
   - Select **ALL files** from the `dist` folder
   - Wait for upload to complete
   - **Important:** Make sure `.htaccess` is uploaded (enable "Show hidden files" if needed)

6. **Set File Permissions**
   - Files: `644`
   - Folders: `755`
   - `.htaccess`: `644`

#### Option B: Using FTP

1. **Get FTP Credentials**
   - Go to hPanel > FTP Accounts
   - Note down: Host, Username, Password, Port

2. **Connect via FTP Client**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect using the credentials above

3. **Upload Files**
   - Navigate to `public_html/` on server
   - Upload all files from `dist` folder
   - Ensure `.htaccess` is uploaded

#### Option C: Using SSH/SCP (Advanced)

```bash
# From your local machine
scp -r dist/* username@your-server-ip:/path/to/public_html/
```

### Step 6: Verify Deployment

1. **Visit Your Website**
   - Open your domain in a browser
   - Test all pages:
     - Home page
     - Services page
     - Internship/Courses page
     - Contact page
     - Course detail pages

2. **Test Functionality**
   - [ ] Navigation works
   - [ ] All images load
   - [ ] Contact form works
   - [ ] Enrollment form works (sends email)
   - [ ] No console errors
   - [ ] Mobile responsive

3. **Test Email Functionality**
   - Submit contact form
   - Submit enrollment form
   - Check that emails are received at:
     - `akshaygarg147@gmail.com` (enrollment)
     - `hello@suprixsolution.in` (contact)

### Step 7: Post-Deployment Tasks

1. **Clear Browser Cache**
   - Users may need to clear cache to see updates
   - Use Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Set Up SSL Certificate** (if not already done)
   - Hostinger usually provides free SSL
   - Enable in hPanel > SSL

3. **Configure Domain** (if using custom domain)
   - Point DNS to Hostinger nameservers
   - Wait for DNS propagation (24-48 hours)

## 🔧 Troubleshooting

### Issue: 404 Error on Page Refresh

**Solution:**
- Ensure `.htaccess` file is uploaded
- Check file permissions (644)
- Verify mod_rewrite is enabled on server

### Issue: White Screen / Blank Page

**Solution:**
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check file paths in `index.html`
4. Clear browser cache
5. Check server error logs

### Issue: Assets Not Loading

**Solution:**
- Verify `assets/` folder is uploaded
- Check file paths in browser console
- Ensure files have correct permissions (644)

### Issue: Email Not Sending

**Solution:**
1. Verify EmailJS credentials are correct
2. Check EmailJS dashboard for errors
3. Test email service in EmailJS dashboard
4. Check browser console for errors

### Issue: Routing Not Working

**Solution:**
- Ensure `.htaccess` is in root directory
- Check mod_rewrite is enabled
- Verify RewriteBase is correct in `.htaccess`

## 📊 Performance Optimization

After deployment, you can:

1. **Enable Gzip Compression** (usually enabled by `.htaccess`)
2. **Set Up CDN** (optional, for faster loading)
3. **Enable Browser Caching** (configured in `.htaccess`)
4. **Optimize Images** (already done in build)

## 🔄 Updating the Website

To update your website:

1. Make changes locally
2. Test locally: `npm run dev`
3. Build: `npm run build:hostinger`
4. Upload new files from `dist` folder
5. Clear server cache (if applicable)

## 📞 Support

- **Hostinger Support:** https://www.hostinger.com/contact
- **EmailJS Support:** https://www.emailjs.com/support/
- **Project Issues:** Check deployment logs

## ✅ Deployment Checklist

Before going live, ensure:

- [ ] All pages load correctly
- [ ] Forms work and send emails
- [ ] Mobile responsive design works
- [ ] SSL certificate is active
- [ ] Domain is properly configured
- [ ] Analytics tracking (if applicable)
- [ ] SEO meta tags are correct
- [ ] All links work
- [ ] Images and videos load
- [ ] No console errors

## 🎉 You're Live!

Once all steps are complete, your website should be live and accessible to users!

---

**Last Updated:** $(date)
**Version:** 1.0.0

