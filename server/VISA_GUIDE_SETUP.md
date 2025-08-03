# Visa Guide Form Integration Setup

This guide explains how to set up the direct API integration for the "Get Free Access" visa guide form.

## What This Integration Does

- Captures email addresses from the "Get Free Access" button clicks
- Automatically adds subscribers to the "visa guide download" MailerLite group
- Provides immediate feedback to users
- Redirects to a thank you page after successful submission

## Files Created/Modified

### New Files:
- `server/visa-guide-handler.js` - Express server for handling form submissions
- `js/visa-guide-form.js` - Frontend JavaScript for form handling
- `thank-you-visa-guide.html` - Thank you page for successful submissions
- `server/VISA_GUIDE_SETUP.md` - This setup guide

### Modified Files:
- `index.html` - Updated form to use JavaScript instead of MailerLite webform
- `server/package.json` - Added new npm scripts for the visa handler

## Setup Instructions

### 1. Environment Variables

You need to set up your MailerLite API key as an environment variable:

```bash
# Create a .env file in the server directory
echo "MAILERLITE_API_KEY=your_mailerlite_api_key_here" > server/.env
```

**To get your MailerLite API key:**
1. Go to your MailerLite dashboard
2. Navigate to Integrations → API
3. Generate a new API key
4. Copy the key and add it to your .env file

### 2. Start the Server

```bash
# Navigate to the server directory
cd server

# Install dependencies (if not already done)
npm install

# Start the visa guide handler
npm run dev-visa
```

The server will run on `http://localhost:3001`

### 3. Test the Integration

1. Open your website in a browser
2. Go to the newsletter section with the "Get Free Access" form
3. Enter an email address and click "Get Free Access"
4. You should see a success message and be redirected to the thank you page
5. Check your MailerLite dashboard to confirm the subscriber was added to the "visa guide download" group

### 4. Production Deployment

For production, you'll need to:

1. **Update the server URL** in `js/visa-guide-form.js`:
   ```javascript
   const serverUrl = window.location.hostname === 'localhost' 
       ? 'http://localhost:3001' 
       : 'https://your-production-server.com'; // Update this
   ```

2. **Deploy the server** to your hosting provider (Vercel, Netlify, etc.)

3. **Set environment variables** on your hosting platform

4. **Update the server URL** to point to your production server

## API Endpoints

### POST /submit-visa-guide
Handles form submissions and adds subscribers to MailerLite.

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you! Your visa guide is on its way.",
  "data": {
    "email": "user@example.com",
    "subscriber_id": "mailerlite_subscriber_id"
  }
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET /health
Health check endpoint for monitoring.

## MailerLite Group Configuration

The integration automatically adds subscribers to the "visa guide download" group (ID: `161603580674966558`).

**To verify the group exists:**
1. Go to your MailerLite dashboard
2. Navigate to Subscribers → Groups
3. Look for "visa guide download" group

## Troubleshooting

### Common Issues:

1. **"API key not found" error**
   - Make sure your `MAILERLITE_API_KEY` environment variable is set correctly
   - Verify the API key is valid in your MailerLite dashboard

2. **"Subscriber already exists" error**
   - This is normal if someone tries to submit the same email twice
   - The system handles this gracefully and shows an appropriate message

3. **Form not submitting**
   - Check browser console for JavaScript errors
   - Verify the server is running on the correct port
   - Ensure the server URL in `visa-guide-form.js` is correct

4. **Subscribers not appearing in MailerLite**
   - Check server logs for API errors
   - Verify the group ID is correct
   - Ensure your MailerLite API key has the necessary permissions

### Logs

The server logs all activities. Check the console output for:
- Successful form submissions
- API errors
- Subscriber creation confirmations

## Security Considerations

- The API key is stored as an environment variable (never in code)
- Input validation is performed on both client and server
- CORS is enabled for cross-origin requests
- Error messages don't expose sensitive information

## Next Steps

After setup, consider:

1. **Setting up email automation** in MailerLite to send the visa guide PDF
2. **Adding analytics tracking** to monitor form performance
3. **Creating additional form fields** if needed (name, country, etc.)
4. **Setting up webhook notifications** for new subscribers

## Support

If you encounter issues:
1. Check the server logs for error messages
2. Verify your MailerLite API key and group ID
3. Test the API endpoints directly using a tool like Postman
4. Check the browser console for JavaScript errors 