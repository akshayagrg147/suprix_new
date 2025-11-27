#!/bin/bash

# Hostinger Deployment Script
# This script builds your project and prepares it for Hostinger deployment

echo "🚀 Starting Hostinger Deployment Preparation..."
echo ""

# Step 1: Build the project
echo "📦 Building project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix errors before deploying."
    exit 1
fi

echo "✅ Build completed successfully!"
echo ""

# Step 2: Copy .htaccess to dist
echo "📋 Copying .htaccess file..."
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess dist/.htaccess
    echo "✅ .htaccess copied to dist folder"
else
    echo "⚠️  Warning: .htaccess file not found in public folder"
fi

echo ""
echo "✅ Deployment files are ready in the 'dist' folder!"
echo ""
echo "📤 Next steps:"
echo "   1. Log in to Hostinger hPanel"
echo "   2. Go to File Manager"
echo "   3. Navigate to public_html/ (or your domain directory)"
echo "   4. Upload ALL files from the 'dist' folder"
echo "   5. Make sure .htaccess file is uploaded"
echo ""
echo "🌐 Your site should be live after uploading!"
echo ""
echo "💡 Tip: You can also use FTP to upload files"
echo "   FTP details are available in Hostinger hPanel > FTP Accounts"

