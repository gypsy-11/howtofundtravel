# MailerLite Serverless Function Troubleshooting Guide

This document records all the troubleshooting steps taken to resolve the 404 error when setting up the MailerLite serverless function on Vercel.

## Initial Problem

After deploying the MailerLite serverless function, the `/api/subscribe` endpoint was returning a 404 error:

```
POST https://howtofund.travel/api/subscribe 404 (Not Found)
```

## Troubleshooting Steps Attempted

### Step 1: Initial Setup (Working)
- ✅ Created `api/` folder
- ✅ Created `api/subscribe.js` with MailerLite integration
- ✅ Updated HTML form to connect to `/api/subscribe` endpoint

### Step 2: First Vercel Configuration Issue
**Problem**: `vercel.json` was missing API function configuration

**Solution Attempted**: Added API build configuration to `vercel.json`:
```json
{
  "src": "api/**/*.js",
  "use": "@vercel/node"
}
```

**Result**: ❌ Still getting 404 error

### Step 3: Added Explicit API Route
**Problem**: Vercel not routing API requests properly

**Solution Attempted**: Added explicit API route to `vercel.json`:
```json
{
  "src": "/api/(.*)",
  "dest": "/api/$1"
}
```

**Result**: ❌ Still getting 404 error

### Step 4: Added Package.json to API Folder
**Problem**: Vercel not recognizing API folder as Node.js project

**Solution Attempted**: Created `api/package.json`:
```json
{
  "name": "howtofundtravel-api",
  "version": "1.0.0",
  "description": "API functions for How to Fund Travel",
  "main": "subscribe.js",
  "engines": {
    "node": "18.x"
  }
}
```

**Result**: ❌ Still getting 404 error

### Step 5: Explicit Function Configuration
**Problem**: Vercel not recognizing specific function

**Solution Attempted**: Added explicit function configuration to `vercel.json`:
```json
"functions": {
  "api/subscribe.js": {
    "runtime": "nodejs18.x"
  }
}
```

**Result**: ❌ Still getting 404 error

### Step 6: Reordered Build Configuration
**Problem**: API functions not being prioritized

**Solution Attempted**: Moved API build configuration to top of builds array in `vercel.json`

**Result**: ❌ Still getting 404 error

### Step 7: Added API-Specific Vercel.json
**Problem**: Vercel not recognizing API folder structure

**Solution Attempted**: Created `api/vercel.json`:
```json
{
  "functions": {
    "subscribe.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

**Result**: ❌ Still getting 404 error

## Current Status

As of the last troubleshooting attempt, the `/api/subscribe` endpoint is still returning a 404 error despite multiple configuration changes.

## Files Modified During Troubleshooting

1. **`vercel.json`** - Multiple iterations of configuration
2. **`api/package.json`** - Added to help Vercel recognize Node.js environment
3. **`api/vercel.json`** - Added to explicitly define functions

## Testing Methods Used

1. **Browser Console Test**:
   ```javascript
   fetch('/api/subscribe', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ email: 'test@example.com' })
   })
   ```

2. **Terminal Curl Test**:
   ```bash
   curl -X POST https://howtofund.travel/api/subscribe \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}' \
     -v
   ```

## Error Messages Encountered

1. **404 Not Found**: Primary error throughout troubleshooting
2. **"Unexpected token '{'"**: JavaScript parsing error when API returned HTML instead of JSON
3. **Vercel Error**: `x-vercel-error: NOT_FOUND`

## Potential Root Causes

1. **Project Type Mismatch**: Vercel might be treating this as a static site and ignoring API functions
2. **Configuration Conflict**: Multiple `vercel.json` files might be causing conflicts
3. **Deployment Issues**: Vercel might not be properly deploying the API functions
4. **Runtime Issues**: Node.js runtime might not be properly configured

## Next Steps to Try

1. **Check Vercel Dashboard**: Verify project type and deployment logs
2. **Simplify Configuration**: Remove multiple `vercel.json` files and use minimal configuration
3. **Alternative API Structure**: Try different folder structure or function naming
4. **Vercel CLI Testing**: Test locally with Vercel CLI to isolate deployment issues
5. **Contact Vercel Support**: If all else fails, this might be a platform-specific issue

## Lessons Learned

1. **Vercel Configuration Complexity**: Serverless functions in mixed static/API projects can be tricky
2. **Multiple Configuration Files**: Having multiple `vercel.json` files can cause conflicts
3. **Build Order Matters**: The order of build configurations can affect function recognition
4. **Testing is Critical**: Always test API endpoints after configuration changes

## Files Created/Modified

- `api/subscribe.js` - Main serverless function
- `api/package.json` - Node.js project configuration
- `api/vercel.json` - API-specific Vercel configuration
- `vercel.json` - Main Vercel configuration (multiple iterations)
- `index.html` - Updated form to connect to API

---

*This troubleshooting guide serves as a reference for future API integration issues and documents the complexity of setting up serverless functions in mixed static/API projects on Vercel.* 