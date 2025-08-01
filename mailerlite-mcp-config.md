# Mailerlite MCP Configuration Guide

## Overview
This guide helps you set up the Mailerlite MCP server to manage your email marketing campaigns and subscriber lists.

## Prerequisites
- Node.js 18+ installed
- Mailerlite API key

## Installation

### 1. Install the Mailerlite MCP Server
```bash
npm install -g mailerlite-mcp-server
```

### 2. Get Your Mailerlite API Key
1. Log in to your Mailerlite account
2. Go to Integrations > API
3. Copy your API key

### 3. Create MCP Configuration
Create a file called `mailerlite-mcp-config.json` in your MCP configs directory:

```json
{
  "mcpServers": {
    "mailerlite": {
      "command": "npx",
      "args": ["mailerlite-mcp-server"],
      "env": {
        "MAILERLITE_API_KEY": "your_api_key_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
```

## Available Operations

### Subscriber Lists
- Create new subscriber lists
- List all subscriber lists
- Update list settings
- Delete lists

### Subscribers
- Add subscribers to lists
- Remove subscribers from lists
- Update subscriber information
- Get subscriber details

### Campaigns
- Create email campaigns
- Send campaigns
- Get campaign statistics

## Usage Examples

### Create a New Subscriber List
```javascript
// Create a new list called "Nomad Parents"
{
  "name": "Nomad Parents",
  "description": "Digital nomad parents interested in family travel and remote work"
}
```

### Add Subscriber to List
```javascript
{
  "list_id": "list_id_here",
  "email": "subscriber@example.com",
  "fields": {
    "name": "John Doe",
    "country": "United States"
  }
}
```

## Troubleshooting

### Common Issues
1. **API Key Invalid**: Ensure your API key is correct and has proper permissions
2. **Rate Limiting**: Mailerlite has rate limits - wait between requests
3. **Network Issues**: Check your internet connection

### Debug Mode
Set `LOG_LEVEL` to `DEBUG` for detailed logging:
```json
"LOG_LEVEL": "DEBUG"
```

## Security Notes
- Never commit your API key to version control
- Use environment variables for sensitive data
- Regularly rotate your API keys

## Support
- Mailerlite API Documentation: https://developers.mailerlite.com/
- MCP Documentation: https://modelcontextprotocol.io/ 