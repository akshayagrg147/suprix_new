# Hostinger Deployment Guide

This guide will help you deploy your React/Vite application to Hostinger hosting.

## Prerequisites

- Hostinger hosting account (Shared, VPS, or Cloud)
- FTP/SFTP access or File Manager access
- Domain name configured

## Deployment Methods

### Method 1: Using File Manager (Easiest)

#### Step 1: Build Your Project

1. Open terminal in your project directory
2. Run the build command:

```bash
npm run build
```

This will create a `dist` folder with all production-ready files.

#### Step 2: Upload Files to Hostinger

1. Log in to your Hostinger control panel (hPanel)
2. Go to **File Manager**
3. Navigate to your domain's root directory:
   - For main domain: `public_html/`
   - For subdomain: `public_html/subdomain_name/`
4. Delete any existing files (or backup them first)
5. Upload all files from the `dist` folder to the root directory

#### Step 3: Configure .htaccess for React Router

Create a `.htaccess` file in the root directory with the following content:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

This ensures React Router works correctly with direct URL access.

### Method 2: Using FTP/SFTP

#### Step 1: Build Your Project

```bash
npm run build
```

#### Step 2: Connect via FTP

1. Get FTP credentials from Hostinger hPanel:
   - Go to **FTP Accounts** in hPanel
   - Note your FTP host, username, and password
2. Use an FTP client (FileZilla, WinSCP, or Cyberduck)
3. Connect to your server
4. Navigate to `public_html/` (or your domain directory)
5. Upload all files from the `dist` folder

#### Step 3: Set File Permissions

Set the following permissions:
- Folders: `755`
- Files: `644`
- `.htaccess`: `644`

### Method 3: Using Git (If Available)

If your Hostinger plan supports Git:

1. Initialize git in your project (if not already):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to a Git repository (GitHub, GitLab, etc.)

3. SSH into your Hostinger server and clone:
```bash
cd public_html
git clone your-repo-url .
npm install
npm run build
```

## Important Configuration Files

### 1. Create `.htaccess` File

Create this file in your `dist` folder before uploading:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Handle React Router - redirect all requests to index.html
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
  
  # Enable compression
  <IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
  </IfModule>
  
  # Browser caching
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
  </IfModule>
  
  # Security headers
  <IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
  </IfModule>
</IfModule>
```

### 2. Update Vite Config (if needed)

If deploying to a subdirectory, update `vite.config.ts`:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/', // Change to '/your-subdirectory/' if needed
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

## Environment Variables

### For Production

1. Create a `.env.production` file in your project root:

```env
VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY_ID
VITE_API_URL=https://your-api-domain.com/api
```

2. Rebuild after adding environment variables:

```bash
npm run build
```

3. Upload the new `dist` folder

**Note:** Never commit `.env` files with real keys to Git!

## Post-Deployment Checklist

- [ ] All files uploaded to `public_html/`
- [ ] `.htaccess` file is in place
- [ ] File permissions are correct (755 for folders, 644 for files)
- [ ] Test the website: `https://yourdomain.com`
- [ ] Test all routes (Home, Services, Internship, etc.)
- [ ] Test enrollment form and payment integration
- [ ] Check browser console for errors
- [ ] Verify Razorpay payment gateway works (use test mode first)
- [ ] Test mobile responsiveness
- [ ] Check page load speed

## Troubleshooting

### Issue: 404 Error on Page Refresh

**Solution:** Ensure `.htaccess` file is uploaded and `mod_rewrite` is enabled on your server.

### Issue: White Screen

**Solution:** 
1. Check browser console for errors
2. Verify all files are uploaded correctly
3. Check file paths in `index.html`
4. Ensure base path in `vite.config.ts` matches your deployment path

### Issue: Assets Not Loading

**Solution:**
1. Check if `assets` folder is uploaded
2. Verify file permissions
3. Check browser console for 404 errors on assets

### Issue: Payment Gateway Not Working

**Solution:**
1. Verify Razorpay key is set in environment variables
2. Check if HTTPS is enabled (required for payment gateways)
3. Ensure domain is whitelisted in Razorpay dashboard

### Issue: Slow Loading

**Solution:**
1. Enable compression in `.htaccess` (already included)
2. Optimize images before uploading
3. Consider using a CDN for static assets

## SSL Certificate

Hostinger usually provides free SSL certificates. Ensure:
1. SSL is enabled in hPanel
2. Your site redirects HTTP to HTTPS
3. Update Razorpay webhook URLs to use HTTPS

## Updating Your Site

To update your site:

1. Make changes to your code
2. Run `npm run build`
3. Upload new files from `dist` folder (overwrite existing files)
4. Clear browser cache if needed

## Support

- Hostinger Support: https://www.hostinger.com/contact
- Hostinger Knowledge Base: https://support.hostinger.com/

## Quick Deployment Script

Create a `deploy.sh` file for easier deployment:

```bash
#!/bin/bash
echo "Building project..."
npm run build

echo "Uploading to Hostinger..."
# Add your FTP upload command here
# Example: lftp -c "open -u USERNAME,PASSWORD ftp.yourdomain.com; mirror -R dist/ public_html/"

echo "Deployment complete!"
```

Make it executable:
```bash
chmod +x deploy.sh
```

