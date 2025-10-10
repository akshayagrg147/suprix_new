# WordPress Deployment Guide for Suprix Solution React App

This guide provides step-by-step instructions for deploying your React application on WordPress.

## Table of Contents
1. [Method 1: Embed as Standalone App (Recommended)](#method-1-embed-as-standalone-app-recommended)
2. [Method 2: WordPress as Headless CMS](#method-2-wordpress-as-headless-cms)
3. [Method 3: WordPress Theme Integration](#method-3-wordpress-theme-integration)

---

## Method 1: Embed as Standalone App (Recommended)

This method embeds your React app on a WordPress page or replaces the entire WordPress frontend.

### Prerequisites
- WordPress site with admin access
- FTP/SFTP access or File Manager in cPanel
- Your built React app (already created in the `dist` folder)

### Step-by-Step Instructions

#### Step 1: Build Your React App ✅ (Already Done)
The production build is in the `dist` folder with these files:
- `index.html`
- `assets/` folder (contains CSS, JS, and images)

#### Step 2: Upload Files to WordPress

**Option A: Using FTP/SFTP (Recommended)**

1. Connect to your WordPress site using an FTP client (FileZilla, Cyberduck, etc.)
   - Host: `ftp.yourdomain.com` or your server IP
   - Username: Your FTP username
   - Password: Your FTP password
   - Port: 21 (FTP) or 22 (SFTP)

2. Navigate to one of these directories:
   - **Option 1**: `/public_html/` (root - replaces entire site)
   - **Option 2**: `/public_html/suprix-app/` (subfolder - creates subdirectory)
   - **Option 3**: `/wp-content/themes/your-theme/react-app/` (within theme)

3. Upload the contents of the `dist` folder:
   ```
   Upload:
   ├── index.html
   └── assets/
       ├── logo-CWcnxAzS.svg
       ├── index-C-ODx1RG.css
       └── index-DKuYhowt.js
   ```

**Option B: Using cPanel File Manager**

1. Log in to your cPanel
2. Open "File Manager"
3. Navigate to `/public_html/suprix-app/` (create folder if needed)
4. Click "Upload" and upload all files from the `dist` folder
5. Extract if uploaded as ZIP

#### Step 3: Configure WordPress

**Option A: Embed in a WordPress Page**

1. Log in to WordPress admin (`yourdomain.com/wp-admin`)
2. Go to **Pages → Add New**
3. Title: "Home" or "Suprix Solution"
4. Click on the three dots (⋮) → **Code Editor**
5. Add this HTML:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Suprix Solution</title>
  <script type="module" crossorigin src="/suprix-app/assets/index-DKuYhowt.js"></script>
  <link rel="stylesheet" crossorigin href="/suprix-app/assets/index-C-ODx1RG.css">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

**Note**: Update the paths based on where you uploaded files:
- If in root: `/assets/...`
- If in subfolder: `/suprix-app/assets/...`
- If in theme: `/wp-content/themes/your-theme/react-app/assets/...`

6. Select a **Full Width** page template (if available)
7. Publish the page

**Option B: Use Custom Page Template**

1. Access your WordPress theme files via FTP
2. Create a new file: `template-react-app.php`
3. Add this code:

```php
<?php
/**
 * Template Name: React App
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <script type="module" crossorigin src="<?php echo get_template_directory_uri(); ?>/react-app/assets/index-DKuYhowt.js"></script>
    <link rel="stylesheet" crossorigin href="<?php echo get_template_directory_uri(); ?>/react-app/assets/index-C-ODx1RG.css">
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

4. Upload to `/wp-content/themes/your-theme/`
5. Create a new page and select "React App" as the template

**Option C: Replace Entire WordPress Site**

1. **Backup your WordPress site first!**
2. Upload `dist` contents to `/public_html/react-app/`
3. Edit `/public_html/index.php` and replace with:

```php
<?php
// Redirect to React app
header('Location: /react-app/index.html');
exit;
?>
```

Or create an `.htaccess` rule:
```apache
# Redirect all traffic to React app
RewriteEngine On
RewriteRule ^$ /react-app/index.html [L]
```

#### Step 4: Handle Routing (Important for React Router)

Since your app uses React Router, you need to configure the server for client-side routing.

**Add to `.htaccess` in your React app folder:**

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /suprix-app/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /suprix-app/index.html [L]
</IfModule>
```

**If using root directory:**
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

#### Step 5: Update React App Base URL (If Needed)

If your app is in a subfolder, you need to update the router base:

1. Edit `src/main.tsx`:

```tsx
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/suprix-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

2. Rebuild: `npm run build`
3. Re-upload the `dist` folder

#### Step 6: Test Your Deployment

Visit your site:
- Root deployment: `https://yourdomain.com`
- Subfolder: `https://yourdomain.com/suprix-app/`
- Page: `https://yourdomain.com/your-page-slug/`

Test all routes:
- Home: `/`
- Services: `/services`
- About: `/about`
- Blog: `/blog`
- Contact: `/contact`

---

## Method 2: WordPress as Headless CMS

Use WordPress only for content management and keep React app separate.

### Step 1: Enable WordPress REST API

1. Log in to WordPress admin
2. Install and activate **WP REST API** (if not already available)
3. The API is available at: `https://yourdomain.com/wp-json/wp/v2/`

### Step 2: Update React App to Fetch WordPress Content

Install Axios or use Fetch API:

```bash
npm install axios
```

Example component to fetch WordPress posts:

```tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

function BlogPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://yourdomain.com/wp-json/wp/v2/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </article>
      ))}
    </div>
  );
}
```

### Step 3: Deploy React App Separately

Deploy your React app to:
- **Netlify**: Connect GitHub repo and deploy
- **Vercel**: Import project and deploy
- **AWS S3 + CloudFront**: Static hosting
- **Traditional hosting**: Upload to subdomain like `app.yourdomain.com`

---

## Method 3: WordPress Theme Integration

Convert your React app into a WordPress theme.

### Step 1: Create Theme Structure

```
suprix-theme/
├── style.css
├── index.php
├── functions.php
├── header.php
├── footer.php
└── react-app/
    ├── assets/
    └── index.html
```

### Step 2: Create `style.css`

```css
/*
Theme Name: Suprix Solution React Theme
Author: Suprix Solution
Description: Custom React-powered WordPress theme
Version: 1.0
*/
```

### Step 3: Create `functions.php`

```php
<?php
function suprix_enqueue_react_app() {
    wp_enqueue_script(
        'react-app',
        get_template_directory_uri() . '/react-app/assets/index-DKuYhowt.js',
        array(),
        '1.0',
        true
    );
    
    wp_enqueue_style(
        'react-app-styles',
        get_template_directory_uri() . '/react-app/assets/index-C-ODx1RG.css',
        array(),
        '1.0'
    );
}
add_action('wp_enqueue_scripts', 'suprix_enqueue_react_app');

// Disable WordPress admin bar on frontend
add_filter('show_admin_bar', '__return_false');
?>
```

### Step 4: Create `index.php`

```php
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php bloginfo('name'); ?></title>
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
    <div id="root"></div>
    <?php wp_footer(); ?>
</body>
</html>
```

### Step 5: Upload and Activate Theme

1. Zip the theme folder
2. Go to **Appearance → Themes → Add New → Upload Theme**
3. Upload the ZIP file
4. Activate the theme

---

## Troubleshooting

### Issue 1: Blank Page / Not Loading
**Solution:**
- Check browser console for errors (F12)
- Verify file paths in `index.html` are correct
- Check file permissions (755 for folders, 644 for files)

### Issue 2: Routes Not Working (404 on refresh)
**Solution:**
- Add `.htaccess` rewrite rules (see Step 4 above)
- Enable `mod_rewrite` on your server

### Issue 3: Assets Not Loading
**Solution:**
- Check if assets are uploaded correctly
- Verify paths in HTML match your folder structure
- Clear browser cache and WordPress cache

### Issue 4: WhatsApp Button Not Working
**Solution:**
- Ensure the WhatsApp number is correct
- Check if the link is not blocked by WordPress security plugins

### Issue 5: EmailJS Not Working
**Solution:**
- Verify EmailJS credentials in `src/pages/Contact.tsx`
- Check browser console for CORS errors
- Ensure EmailJS domain is whitelisted

---

## Performance Optimization

### 1. Enable GZIP Compression

Add to `.htaccess`:
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 2. Browser Caching

```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 3. Use CDN
- Cloudflare (free)
- StackPath
- AWS CloudFront

---

## Security Considerations

1. **Disable WordPress XML-RPC** (if not using API):
   - Add to `.htaccess`: `<Files xmlrpc.php> deny from all </Files>`

2. **Limit Login Attempts**:
   - Install "Limit Login Attempts Reloaded" plugin

3. **SSL Certificate**:
   - Ensure HTTPS is enabled (Let's Encrypt via cPanel)

4. **Hide WordPress Version**:
   - Add to `functions.php`: `remove_action('wp_head', 'wp_generator');`

---

## Recommended Hosting Providers

1. **Shared Hosting**:
   - Hostinger
   - Bluehost
   - SiteGround

2. **Cloud Hosting**:
   - DigitalOcean
   - Linode
   - AWS Lightsail

3. **Managed WordPress**:
   - WP Engine
   - Kinsta
   - Flywheel

---

## Next Steps

1. ✅ Build completed (`dist` folder ready)
2. ⬜ Upload files to WordPress server
3. ⬜ Configure routing (.htaccess)
4. ⬜ Test all pages and features
5. ⬜ Set up SSL certificate
6. ⬜ Configure caching
7. ⬜ Submit sitemap to Google Search Console
8. ⬜ Set up analytics (Google Analytics)

---

## Quick Command Reference

```bash
# Build for production
npm run build

# Preview build locally
npm run preview

# Development mode
npm run dev

# Check for issues
npm run lint
```

---

## Support

If you encounter issues:
1. Check browser console (F12)
2. Check server error logs (cPanel → Error Log)
3. Verify file permissions and paths
4. Clear all caches (browser, WordPress, server)

---

**Deployment Date**: October 9, 2025  
**Project**: Suprix Solution  
**Version**: 1.0.0

