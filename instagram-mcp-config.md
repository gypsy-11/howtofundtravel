# Instagram MCP Server Configuration

## Installation Complete ✅

Two Instagram Model Context Protocol (MCP) servers have been successfully installed on your system:

1. **Instagram Engagement MCP** (JavaScript-based) - For engagement analysis and lead generation
2. **Instagram Business MCP** (Python-based) - For business account management and content publishing

## Available Instagram MCP Servers

### 1. Instagram Engagement MCP Server

**Features:**
- Analyze post comments for sentiment and themes
- Compare engagement metrics across accounts
- Extract demographic insights from users
- Identify potential leads based on engagement patterns
- Generate comprehensive engagement reports

**Available Tools:**
- `analyze_post_comments` - Analyze comments on Instagram posts
- `compare_accounts` - Compare engagement metrics across accounts
- `extract_demographics` - Get demographic insights from engaged users
- `identify_leads` - Find potential leads based on engagement
- `generate_engagement_report` - Create comprehensive engagement reports

### 2. Instagram Business MCP Server

**Features:**
- Get Instagram business profile information
- Retrieve recent posts and media
- Get engagement metrics and insights
- Publish new content to Instagram
- Manage connected Facebook pages

**Available Tools:**
- `get_profile_info` - Get Instagram business profile details
- `get_media_posts` - Fetch recent posts from Instagram account
- `get_media_insights` - Retrieve engagement metrics for posts
- `publish_media` - Upload and publish images/videos
- `get_account_pages` - List connected Facebook pages

## Configuration Setup

### For Instagram Engagement MCP (Quick Setup)

1. **Update your MCP configuration** with your Instagram credentials:

```json
{
  "mcpServers": {
    "instagram-engagement": {
      "command": "npx",
      "args": ["instagram-engagement-mcp"],
      "env": {
        "INSTAGRAM_USERNAME": "your_actual_instagram_username",
        "INSTAGRAM_PASSWORD": "your_actual_instagram_password"
      }
    }
  }
}
```

**⚠️ Important:** Replace `your_actual_instagram_username` and `your_actual_instagram_password` with your real Instagram credentials.

### For Instagram Business MCP (Advanced Setup)

This server requires Instagram Business API credentials. Follow these steps:

#### Step 1: Set Up Instagram Business Account
1. Convert your Instagram account to a Business account
2. Connect it to a Facebook Page you own
3. Ensure you have admin access to the Facebook Page

#### Step 2: Create Facebook App
1. Go to [developers.facebook.com](https://developers.facebook.com)
2. Create a new app (Business type)
3. Add "Instagram Basic Display" and "Instagram Graph API" products
4. Configure required permissions:
   - `instagram_basic`
   - `instagram_content_publish`
   - `instagram_manage_insights`
   - `pages_show_list`
   - `pages_read_engagement`

#### Step 3: Get API Credentials
1. **App ID and Secret:** From your Facebook app dashboard
2. **Access Token:** Generate a long-lived access token (60 days)
3. **Instagram Business Account ID:** Get from your connected Facebook page

#### Step 4: Update MCP Configuration

```json
{
  "mcpServers": {
    "instagram-business": {
      "command": "python3.11",
      "args": ["-m", "instagram_mcp_server"],
      "env": {
        "INSTAGRAM_ACCESS_TOKEN": "your_long_lived_access_token",
        "FACEBOOK_APP_ID": "your_facebook_app_id",
        "FACEBOOK_APP_SECRET": "your_facebook_app_secret",
        "INSTAGRAM_BUSINESS_ACCOUNT_ID": "your_instagram_business_account_id"
      }
    }
  }
}
```

## Usage Examples

### Using Instagram Engagement MCP

Once configured, you can ask questions like:
- "Analyze the comments on this Instagram post: [post_url]"
- "Compare engagement metrics between @account1 and @account2"
- "Extract demographic insights from users who engaged with @myaccount"
- "Identify potential leads from my recent Instagram posts"
- "Generate an engagement report for @myaccount for the last 30 days"

### Using Instagram Business MCP

Once configured, you can ask questions like:
- "Get my Instagram business profile information"
- "Show me my last 5 Instagram posts and their engagement metrics"
- "Upload this image to my Instagram with the caption 'Beautiful sunset! #photography'"
- "Get insights for my most recent Instagram post"
- "List all Facebook pages connected to my Instagram account"

## Testing the Installation

### Test Instagram Engagement MCP
```bash
npx instagram-engagement-mcp
```

### Test Instagram Business MCP
```bash
python3.11 -m instagram_mcp_server
```

Both servers should start and wait for MCP client connections.

## Security Considerations

### For Instagram Engagement MCP
- Uses Instagram Private API (not officially supported)
- Store credentials securely
- Use responsibly and in accordance with Instagram's terms of service
- Be aware of rate limits to avoid being blocked

### For Instagram Business MCP
- Uses official Instagram Graph API
- Store access tokens securely in environment variables
- Never commit credentials to version control
- Regularly rotate access tokens (every 60 days)
- Monitor token expiration dates

## Troubleshooting

### Common Issues

1. **"Invalid credentials"**
   - Verify Instagram username and password are correct
   - Check if 2FA is enabled (may require app-specific password)
   - Ensure account is not temporarily locked

2. **"Access token expired"**
   - Regenerate long-lived access token
   - Check token expiration date
   - Implement automatic token refresh

3. **"Rate limit exceeded"**
   - Wait for rate limit reset
   - Implement request queuing
   - Use batch requests when possible

4. **"Permission denied"**
   - Verify Instagram Business account setup
   - Check Facebook page connection
   - Review API permissions in Facebook app

### Debug Mode

Enable debug logging by setting:
```env
LOG_LEVEL=DEBUG
```

## Next Steps

1. **Choose which server to use first:**
   - Start with Instagram Engagement MCP for quick setup
   - Use Instagram Business MCP for official API access

2. **Update your credentials:**
   - Replace placeholder values in your MCP configuration
   - Test the connection

3. **Explore the tools:**
   - Try different analysis features
   - Experiment with content publishing
   - Generate reports and insights

## Support

- **Instagram Engagement MCP:** [GitHub Repository](https://github.com/Bob-lance/instagram-engagement-mcp)
- **Instagram Business MCP:** [GitHub Repository](https://github.com/jlbadano/ig-mcp)
- **MCP Documentation:** [Model Context Protocol](https://modelcontextprotocol.io/)

## License

Both servers are licensed under the MIT License. 