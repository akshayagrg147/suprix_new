#!/bin/bash

# Complete Deployment Script for Suprix Solution
# This script builds your project and prepares it for server deployment

echo "🚀 Starting Deployment Preparation..."
echo ""

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Step 1: Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️  node_modules not found. Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Failed to install dependencies!${NC}"
        exit 1
    fi
    echo -e "${GREEN}✅ Dependencies installed!${NC}"
    echo ""
fi

# Step 2: Check for environment variables
if [ ! -f ".env.production" ]; then
    echo -e "${YELLOW}⚠️  .env.production not found${NC}"
    echo "   Creating from example (if exists)..."
    if [ -f ".env.example" ]; then
        cp .env.example .env.production
        echo -e "${YELLOW}   Please update .env.production with your actual values${NC}"
    else
        echo -e "${YELLOW}   Note: Environment variables are optional${NC}"
        echo "   EmailJS is already configured in the code"
    fi
    echo ""
fi

# Step 3: Build the project
echo "📦 Building project for production..."
npm run build:hostinger

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed! Please fix errors before deploying.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completed successfully!${NC}"
echo ""

# Step 4: Copy .htaccess to dist
echo "📋 Copying .htaccess file..."
if [ -f "public/.htaccess" ]; then
    cp public/.htaccess dist/.htaccess
    echo -e "${GREEN}✅ .htaccess copied to dist folder${NC}"
else
    echo -e "${YELLOW}⚠️  Warning: .htaccess file not found in public folder${NC}"
fi

# Step 5: Verify dist folder contents
echo ""
echo "📁 Verifying build output..."
if [ -d "dist" ]; then
    FILE_COUNT=$(find dist -type f | wc -l)
    echo -e "${GREEN}✅ Found $FILE_COUNT files in dist folder${NC}"
    
    # Check for essential files
    if [ -f "dist/index.html" ]; then
        echo -e "${GREEN}✅ index.html found${NC}"
    else
        echo -e "${RED}❌ index.html not found!${NC}"
    fi
    
    if [ -d "dist/assets" ]; then
        ASSET_COUNT=$(find dist/assets -type f | wc -l)
        echo -e "${GREEN}✅ Found $ASSET_COUNT assets${NC}"
    else
        echo -e "${YELLOW}⚠️  assets folder not found${NC}"
    fi
    
    if [ -f "dist/.htaccess" ]; then
        echo -e "${GREEN}✅ .htaccess found${NC}"
    else
        echo -e "${YELLOW}⚠️  .htaccess not found in dist${NC}"
    fi
else
    echo -e "${RED}❌ dist folder not found!${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Deployment files are ready in the 'dist' folder!${NC}"
echo ""
echo "📤 Next Steps:"
echo ""
echo "   Option 1: File Manager (Easiest)"
echo "   1. Log in to Hostinger hPanel: https://hpanel.hostinger.com"
echo "   2. Go to File Manager"
echo "   3. Navigate to public_html/ (or your domain directory)"
echo "   4. Delete old files (backup first!)"
echo "   5. Upload ALL files from the 'dist' folder"
echo "   6. Make sure .htaccess is uploaded (enable 'Show hidden files')"
echo ""
echo "   Option 2: FTP"
echo "   1. Get FTP credentials from hPanel > FTP Accounts"
echo "   2. Use FileZilla or any FTP client"
echo "   3. Connect and upload all files from 'dist' folder"
echo ""
echo "   Option 3: SSH/SCP (Advanced)"
echo "   scp -r dist/* username@server:/path/to/public_html/"
echo ""
echo -e "${GREEN}🌐 Your site will be live after uploading!${NC}"
echo ""
echo "📋 Post-Deployment Checklist:"
echo "   [ ] Visit your website"
echo "   [ ] Test all pages"
echo "   [ ] Test contact form"
echo "   [ ] Test enrollment form"
echo "   [ ] Check mobile responsiveness"
echo "   [ ] Verify SSL certificate"
echo ""
echo -e "${YELLOW}💡 Tip: See COMPLETE_DEPLOYMENT_GUIDE.md for detailed instructions${NC}"

