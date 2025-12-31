# Payment & Enrollment Setup Guide

## Overview

This application includes a complete enrollment system with payment integration and waiting list management.

## Features

- ✅ Student registration form with validation
- ✅ Razorpay payment integration
- ✅ Automatic waiting list management
- ✅ Payment success/failure handling
- ✅ Automatic refund handling for failed payments
- ✅ Local storage for waiting list (can be migrated to backend)

## Setup Instructions

### 1. Razorpay Configuration

1. Sign up for a Razorpay account at https://razorpay.com
2. Get your API keys from https://dashboard.razorpay.com/app/keys
3. Create a `.env` file in the root directory:

```env
VITE_RAZORPAY_KEY_ID=rzp_live_RxW3r6nUOhOoDj
```

**⚠️ IMPORTANT SECURITY NOTES:**
- ✅ **Key ID** (starts with `rzp_live_` or `rzp_test_`) - Safe to use in frontend
- ❌ **Key Secret** - MUST ONLY be used on backend/server-side, NEVER in frontend code
- The `.env` file is already in `.gitignore` to prevent accidental commits
- For production, always use live keys (`rzp_live_*`)
- For testing, use test keys (`rzp_test_*`)

**Current Configuration:**
- Live Key ID: `rzp_live_RxW3r6nUOhOoDj` (configured in `.env`)
- Key Secret: `a4MRTHamXJUL0SQIvdAfh4Mc` (for backend use only)

### 2. Demo Mode

If Razorpay key is not configured, the system will run in demo mode:
- Payments are simulated (no actual payment)
- Students are still added to waiting list
- Useful for testing without payment gateway

### 3. Waiting List Management

All enrollments are stored in browser's localStorage by default. To view the waiting list:

```javascript
// In browser console
const list = JSON.parse(localStorage.getItem('waitingList') || '[]');
console.log(list);
```

### 4. Backend Integration (Optional)

To send enrollment data to your backend, uncomment the API call in `src/components/EnrollmentForm.tsx`:

```typescript
// fetch('/api/enrollments', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(enrollmentData)
// });
```

## Payment Flow

1. Student clicks "Enroll Now" on a course
2. Selects a plan (Basic/Standard/Premium)
3. Fills enrollment form with:
   - Name, Email, Phone (required)
   - Address, Qualification, Experience (optional)
4. Clicks "Pay & Enroll"
5. Razorpay payment gateway opens
6. After successful payment:
   - Student is added to waiting list
   - Success screen is shown
   - Payment ID is stored
7. If payment fails:
   - Error message is shown
   - Refund is processed automatically (if amount was deducted)
   - Failed enrollment is logged for tracking

## Refund Handling

Razorpay automatically handles refunds for failed payments. However, you should:

1. Set up webhooks in Razorpay dashboard to track payment status
2. Implement backend API to handle refunds
3. Send email notifications to students about refund status

## Waiting List Structure

Each enrollment entry contains:

```typescript
{
  id: string;
  courseId: string;
  courseName: string;
  plan: 'basic' | 'standard' | 'premium';
  amount: number;
  studentName: string;
  email: string;
  phone: string;
  paymentId: string;
  paymentStatus: 'success' | 'failed';
  status: 'waiting' | 'approved' | 'rejected' | 'payment_failed';
  enrollmentDate: string;
  additionalInfo: {
    address?: string;
    qualification?: string;
    experience?: string;
  }
}
```

## Testing

1. Use Razorpay test mode for testing
2. Test cards: https://razorpay.com/docs/payments/test-cards/
3. Test payment failures to verify refund flow
4. Check waiting list in localStorage after enrollment

## Security Notes

- Never commit `.env` file with real API keys
- Use environment variables for sensitive data
- Implement server-side payment verification
- Validate all payment data on backend
- Use HTTPS in production

## Support

For Razorpay support: https://razorpay.com/support/
For application issues: Contact your development team


