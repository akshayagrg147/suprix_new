# Quick Deployment Guide for Hostinger

## 🚀 Quick Steps

### 1. Build Your Project

Run this command in your terminal:

```bash
npm run build:hostinger
```

Or use the deployment script:

```bash
./deploy-to-hostinger.sh
```

This will:
- Build your React app for production
- Copy the `.htaccess` file to the dist folder
- Create all optimized files ready for upload

### 2. Upload to Hostinger

**Option A: Using File Manager (Easiest)**

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com)
2. Click **File Manager**
3. Navigate to `public_html/` folder
4. Delete existing files (backup first if needed)
5. Upload **ALL files** from the `dist` folder
6. Make sure `.htaccess` is uploaded (it might be hidden - enable "Show hidden files")

**Option B: Using FTP**

1. Get FTP credentials from hPanel > FTP Accounts
2. Use FileZilla, WinSCP, or any FTP client
3. Connect to your server
4. Upload all files from `dist` folder to `public_html/`

### 3. Verify Deployment

1. Visit your domain: `https://yourdomain.com`
2. Test all pages (Home, Services, Internship, etc.)
3. Test the enrollment form
4. Check browser console for errors

## 📋 Pre-Deployment Checklist

- [ ] Build completed successfully (`npm run build:hostinger`)
- [ ] `.htaccess` file is in `dist` folder
- [ ] Environment variables set (if using Razorpay)
- [ ] All files ready in `dist` folder

## ⚙️ Environment Variables

If you're using Razorpay, create `.env.production`:

```env
VITE_RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
```

Then rebuild:
```bash
npm run build:hostinger
```

## 🔧 Troubleshooting

**404 Error on page refresh:**
- Ensure `.htaccess` is uploaded
- Check file permissions (644 for files, 755 for folders)

**White screen:**
- Check browser console for errors
- Verify all files uploaded correctly
- Clear browser cache

**Assets not loading:**
- Check if `assets` folder is uploaded
- Verify file paths in browser console

## 📞 Need Help?

- Full guide: See `HOSTINGER_DEPLOYMENT.md`
- Hostinger Support: https://www.hostinger.com/contact

