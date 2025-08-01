# Waitlist Server

This server handles waitlist signups for the Digital Nomad Parents program.

## Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Update the frontend URL:**
   In `digital-nomad-parents.html`, update the fetch URL to point to your server:
   ```javascript
   const response = await fetch('http://localhost:3001/join-waitlist', {
   ```

## Features

- ✅ Collects first name and email
- ✅ Validates email format
- ✅ Prevents duplicate signups
- ✅ Sends welcome email (placeholder)
- ✅ Stores data in JSON file
- ✅ Provides waitlist statistics

## API Endpoints

### POST /join-waitlist
Join the waitlist with first name and email.

**Request:**
```json
{
  "firstName": "John",
  "email": "john@example.com",
  "source": "digital-nomad-parents-landing"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully joined waitlist",
  "waitlistNumber": 42
}
```

### GET /waitlist-stats
Get waitlist statistics (for admin use).

**Response:**
```json
{
  "success": true,
  "totalSignups": 150,
  "recentSignups": [...],
  "sources": {
    "digital-nomad-parents-landing": 120,
    "unknown": 30
  }
}
```

## Email Integration

To enable actual email sending, uncomment and configure the SendGrid integration in `waitlist-handler.js`:

1. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```

2. Set your SendGrid API key:
   ```bash
   export SENDGRID_API_KEY=your_api_key_here
   ```

3. Uncomment the SendGrid code in the `sendWelcomeEmail` function.

## Production Deployment

For production, consider:

1. **Database**: Replace JSON file storage with a proper database (PostgreSQL, MongoDB, etc.)
2. **Email Service**: Configure SendGrid, Mailgun, or similar
3. **Environment Variables**: Use proper environment variable management
4. **HTTPS**: Ensure all communications are encrypted
5. **Rate Limiting**: Add rate limiting to prevent abuse
6. **Logging**: Add proper logging for monitoring

## Data Storage

Waitlist data is stored in `waitlist.json` with the following structure:

```json
[
  {
    "firstName": "John",
    "email": "john@example.com",
    "source": "digital-nomad-parents-landing",
    "joinedAt": "2024-01-15T10:30:00.000Z",
    "waitlistNumber": 1
  }
]
``` 