# MailerLite Serverless Function Setup Guide

This document records the complete process of setting up a MailerLite serverless function for newsletter subscriptions on the How to Fund Travel website.

## Before You Start

**Important Setup Recommendation**: Before following this guide, we strongly recommend organizing your HTML files in a `/public` folder. This is a Vercel best practice that will save you significant headaches:

### Why Use a `/public` Folder?
- **Automatic Static File Serving**: Vercel automatically serves files from `/public` as static assets
- **Cleaner Project Structure**: Separates your serverless functions from your static content
- **Simplified Routing**: No need for complex configuration to serve HTML files
- **Better Performance**: Static files are served directly without going through serverless functions

### If You Don't Have a `/public` Folder Yet:
1. Create a `public` folder in your project root
2. Move your HTML files (like `index.html`) into the `public` folder
3. Update your `vercel.json` to include:
   ```json
   {
     "public": true
   }
   ```

This setup will make the rest of this guide much smoother and prevent common deployment issues.

## Overview

We created a serverless function that handles newsletter subscriptions by integrating with the MailerLite API. The function is deployed on Vercel and connects to a form on the main website.

## Step 1: Create the API Folder

First, we created the `api` folder in the project root directory:

```bash
mkdir -p /Users/user/Documents/GitHub/howtofundtravel/api
```

This folder will contain all serverless functions for the project.

## Step 2: Create the Subscribe Serverless Function

We created `api/subscribe.js` with the following code:

```javascript
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email
      })
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } else {
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
}
```

### Function Features:
- **Method Validation**: Only accepts POST requests
- **Email Validation**: Ensures email is provided in request body
- **MailerLite Integration**: Uses MailerLite API to add subscribers
- **Environment Variables**: Uses `MAILERLITE_API_KEY` for authentication
- **Error Handling**: Proper error responses for different scenarios

## Step 3: Configure Vercel for Serverless Functions

We need to update the `vercel.json` file to tell Vercel how to handle the serverless functions.

Add this configuration to your `vercel.json` file:

```json
{
  "functions": {
    "api/subscribe.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

This tells Vercel to:
- Recognize `api/subscribe.js` as a serverless function
- Use Node.js 18.x runtime to execute it
- Make it accessible at the `/api/subscribe` endpoint

## Step 4: Update HTML Form

We replaced the existing newsletter form in `index.html` with a new form that connects to the serverless function.

### Old Form (Replaced):
```html
<form class="newsletter-form" novalidate>
    <div class="form-group">
        <label for="email" class="sr-only">Your Email Address</label>
        <input type="email" id="email" name="email" placeholder="Your email address" required class="form-input">
        <button type="submit" class="btn btn-primary">Get Free Access</button>
    </div>
    <div class="form-privacy">
        <small>We respect your privacy. Unsubscribe anytime. <a href="privacy">Privacy Policy</a></small>
    </div>
</form>
```

### New Form (Implemented):
```html
<form id="email-form">
  <input type="email" id="email-input" placeholder="Enter your email" required>
  <button type="submit" id="submit-btn">Subscribe</button>
  <div id="message" style="margin-top: 10px; display: none;"></div>
</form>

<script>
document.getElementById('email-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email-input').value;
  const submitBtn = document.getElementById('submit-btn');
  const messageDiv = document.getElementById('message');
  
  // Show loading state
  submitBtn.textContent = 'Subscribing...';
  submitBtn.disabled = true;
  messageDiv.style.display = 'none';
  
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      messageDiv.textContent = 'Successfully subscribed!';
      messageDiv.style.color = 'green';
      document.getElementById('email-input').value = ''; // Clear the form
    } else {
      messageDiv.textContent = data.message || 'Something went wrong';
      messageDiv.style.color = 'red';
    }
  } catch (error) {
    messageDiv.textContent = 'Network error. Please try again.';
    messageDiv.style.color = 'red';
  }
  
  // Reset button and show message
  submitBtn.textContent = 'Subscribe';
  submitBtn.disabled = false;
  messageDiv.style.display = 'block';
});
</script>
```

### Form Features:
- **Simple Design**: Clean, minimal form with email input and submit button
- **Loading States**: Shows "Subscribing..." while processing
- **Error Handling**: Displays user-friendly error messages
- **Success Feedback**: Shows success message and clears form
- **API Integration**: Posts to `/api/subscribe` endpoint

## Step 5: Deploy and Test Your Integration

### 1. Environment Variables Setup
You'll need to set up the `MAILERLITE_API_KEY` environment variable in your Vercel deployment:

1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Add environment variable: `MAILERLITE_API_KEY` with your MailerLite API key

### 2. MailerLite API Key
To get your MailerLite API key:
1. Log into your MailerLite account
2. Go to Integrations → API
3. Generate a new API key
4. Copy the key and add it to your Vercel environment variables

### 3. Deploy and Test
Great! Now let's test and deploy.

**Step 5: Deploy and test your integration**

1. **Commit and push your changes to GitHub:**
   ```bash
   git add .
   git commit -m "Add MailerLite email subscription integration"
   git push origin main
   ```

2. **Wait for Vercel to automatically deploy** (should take 1-2 minutes)

3. **Test the integration:**
   - Go to your live website
   - Enter a test email address in your signup form
   - Click subscribe
   - You should see "Successfully subscribed!" message

4. **Verify in MailerLite:**
   - Log into your MailerLite dashboard
   - Go to Subscribers
   - Check if your test email appears in the list

If the test works, you're all set! If you get any errors, let me know what error message you see and I'll help you troubleshoot.

Try the test now and let me know how it goes!

## File Structure

```
howtofundtravel/
├── api/
│   └── subscribe.js          # MailerLite serverless function
├── vercel.json              # Updated with function configuration
├── index.html               # Updated with new form
└── MAILERLITE_SERVERLESS_SETUP.md  # This documentation
```

## API Endpoint

The serverless function will be accessible at:
- **URL**: `https://yourdomain.com/api/subscribe`
- **Method**: POST
- **Content-Type**: application/json
- **Body**: `{ "email": "user@example.com" }`

## Error Codes

- **405**: Method not allowed (non-POST requests)
- **400**: Email is required (missing email in request)
- **500**: Server error (API call failed)

## Security Notes

- API key is stored in environment variables (not in code)
- Form includes basic validation
- CORS is handled by Vercel automatically
- Rate limiting should be considered for production use

---

*This setup provides a complete newsletter subscription system using MailerLite's API with a modern serverless architecture.* 