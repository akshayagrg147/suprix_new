# WordPress Deployment Checklist

## Pre-Deployment ✅

- [x] React app built successfully
- [x] All TypeScript errors fixed
- [x] Vite configured for relative paths
- [x] Production build in `dist` folder

## Deployment Steps

### Option 1: Quick Deployment (Subfolder)

- [ ] **Step 1**: Access WordPress via FTP/cPanel
  - [ ] Login credentials ready
  - [ ] FTP client installed (FileZilla) or cPanel access

- [ ] **Step 2**: Upload Files
  - [ ] Create folder: `/public_html/suprix-app/`
  - [ ] Upload ALL files from `dist` folder
  - [ ] Verify files uploaded correctly

- [ ] **Step 3**: Configure Routing
  - [ ] Create `.htaccess` in `/public_html/suprix-app/`
  - [ ] Add rewrite rules (see guide)
  - [ ] Test URL: `yourdomain.com/suprix-app/`

- [ ] **Step 4**: Update React Router Base
  - [ ] Edit `src/main.tsx` - add `basename="/suprix-app"`
  - [ ] Rebuild: `npm run build`
  - [ ] Re-upload `dist` folder

- [ ] **Step 5**: Test All Routes
  - [ ] Home: `yourdomain.com/suprix-app/`
  - [ ] Services: `yourdomain.com/suprix-app/services`
  - [ ] About: `yourdomain.com/suprix-app/about`
  - [ ] Blog: `yourdomain.com/suprix-app/blog`
  - [ ] Contact: `yourdomain.com/suprix-app/contact`

### Option 2: Full Site Replacement (Root)

- [ ] **BACKUP WordPress site first!**
- [ ] Upload `dist` contents to `/public_html/`
- [ ] Add `.htaccess` routing rules
- [ ] Test: `yourdomain.com`

### Option 3: WordPress Page Embed

- [ ] Create new WordPress page
- [ ] Set to Full Width template
- [ ] Add HTML embed code (see guide)
- [ ] Update asset paths
- [ ] Publish and test

## Post-Deployment

### Testing
- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] WhatsApp button works
- [ ] Contact form works (EmailJS)
- [ ] No console errors (F12)
- [ ] Images load properly
- [ ] Animations working

### Performance
- [ ] Enable GZIP compression
- [ ] Configure browser caching
- [ ] Test page load speed (GTmetrix, PageSpeed Insights)
- [ ] Optimize images if needed

### Security
- [ ] SSL certificate enabled (HTTPS)
- [ ] WordPress updated to latest version
- [ ] Security plugins installed
- [ ] Strong admin password
- [ ] Limit login attempts

### SEO
- [ ] Google Search Console setup
- [ ] Submit sitemap
- [ ] Google Analytics installed
- [ ] Meta tags verified
- [ ] Open Graph tags working
- [ ] Favicon displays correctly

### Backup
- [ ] Full site backup created
- [ ] Database backup
- [ ] Backup scheduled (weekly/monthly)

## Quick Access Commands

```bash
# Local development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check code quality
npm run lint
```

## File Paths Reference

### If deployed in subfolder `/suprix-app/`:
- React app: `yourdomain.com/suprix-app/`
- Assets: `yourdomain.com/suprix-app/assets/`

### If deployed in root:
- React app: `yourdomain.com/`
- Assets: `yourdomain.com/assets/`

### If in WordPress theme:
- Path: `/wp-content/themes/your-theme/react-app/`
- URL: `yourdomain.com/wp-content/themes/your-theme/react-app/`

## Common Issues & Quick Fixes

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console, verify file paths |
| 404 on routes | Add `.htaccess` rewrite rules |
| Assets not loading | Check paths, clear cache |
| Contact form error | Verify EmailJS credentials |
| Mobile menu not working | Clear cache, check JavaScript loaded |

## Support Contacts

- **EmailJS**: Check `src/pages/Contact.tsx` for configuration
- **WhatsApp**: +91 9485563525
- **Domain**: suprixsolution.in

---

**Status**: Ready for deployment ✅  
**Build Output**: `/dist` folder  
**Last Build**: Successfully completed

