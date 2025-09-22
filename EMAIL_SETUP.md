# Email Setup Guide for Contact Form

## Current Implementation

The contact form is now set up with email functionality using EmailJS. Currently, it uses a **mailto fallback** that opens the user's default email client with a pre-filled message.

## To Enable Direct Email Sending (EmailJS)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Phone: {{phone}}
Service Interest: {{service}}

Message:
{{message}}

Best regards,
Suprix Solution Website
```

4. Note down your **Template ID**

### Step 4: Get Public Key
1. Go to "Account" in your EmailJS dashboard
2. Copy your **Public Key**

### Step 5: Update Configuration
In `/src/pages/Contact.tsx`, update these constants:

```typescript
const EMAILJS_SERVICE_ID = 'your_service_id_here';
const EMAILJS_TEMPLATE_ID = 'your_template_id_here';
const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

Replace the placeholder values with your actual IDs from EmailJS.

## Current Fallback Behavior

If EmailJS is not configured (default state), the form will:
1. Open the user's default email client
2. Pre-fill the subject and message with form data
3. Send to: hello@suprixsolution.in
4. Show a success message

## Testing

1. Fill out the contact form
2. Click "Send Message"
3. If EmailJS is configured: Email sends directly
4. If not configured: Email client opens with pre-filled message

## Email Limits (Free Plan)
- 200 emails per month
- Perfect for most small business websites

## Security Notes
- EmailJS public key is safe to use in frontend code
- No sensitive data is exposed
- All emails are sent through EmailJS servers
