# LinkedIn MCP Server Configuration

## Installation Guide

### Prerequisites
- Python 3.11+
- LinkedIn Developer Account
- LinkedIn API Access

### Step 1: Set Up LinkedIn Developer Account

1. **Create LinkedIn Developer Account:**
   - Go to [developer.linkedin.com](https://developer.linkedin.com)
   - Sign in with your LinkedIn account
   - Create a new app

2. **Configure LinkedIn App:**
   - Fill in app details:
     - **App Name**: "HowToFundTravel LinkedIn MCP"
     - **App Description**: "MCP server for LinkedIn analytics and content management"
   - Select required permissions:
     - `r_liteprofile` - Read basic profile
     - `r_emailaddress` - Read email address
     - `w_member_social` - Write posts
     - `r_organization_social` - Read organization posts
     - `w_organization_social` - Write organization posts

3. **Get API Credentials:**
   - Copy your **Client ID** and **Client Secret**
   - Generate **Access Token** with required scopes
   - **Important**: Store credentials securely!

### Step 2: Install LinkedIn MCP Server

```bash
pip install linkedin-mcp-server
```

### Step 3: Configuration

Create a `.env` file in your project root:

```env
# LinkedIn API Credentials
LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_ACCESS_TOKEN=your_access_token_here

# Optional: Organization ID (for company page management)
LINKEDIN_ORGANIZATION_ID=your_org_id_here

# MCP Server Configuration
LINKEDIN_MCP_SERVER_NAME=linkedin-mcp-server
LINKEDIN_MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
```

### Step 4: MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "linkedin": {
      "command": "python3.11",
      "args": ["-m", "linkedin_mcp_server"],
      "env": {
        "LINKEDIN_CLIENT_ID": "your_client_id_here",
        "LINKEDIN_CLIENT_SECRET": "your_client_secret_here",
        "LINKEDIN_ACCESS_TOKEN": "your_access_token_here"
      }
    }
  }
}
```

## Available Tools

### 1. **Profile Management Tools**
- `get_profile_info` - Get LinkedIn profile information
- `get_network_connections` - Get connection list
- `analyze_profile_views` - Track profile view analytics
- `update_profile_section` - Update profile sections

### 2. **Content Management Tools**
- `publish_post` - Publish new LinkedIn posts
- `schedule_post` - Schedule posts for future
- `get_published_posts` - Get your published posts
- `delete_post` - Delete posts

### 3. **Company Page Tools** (if you have a company page)
- `get_company_info` - Get company page information
- `publish_company_post` - Publish to company page
- `get_company_analytics` - Get company page analytics
- `manage_company_content` - Manage company page content

### 4. **Research & Analytics Tools**
- `search_people` - Search for people by criteria
- `search_companies` - Search for companies
- `get_post_analytics` - Get post performance metrics
- `analyze_industry_trends` - Track industry conversations

### 5. **Networking Tools**
- `send_connection_request` - Send connection requests
- `get_pending_connections` - Get pending connection requests
- `analyze_network_growth` - Track network growth
- `find_mutual_connections` - Find mutual connections

## Usage Examples

Once configured, you can ask questions like:
- "Get my LinkedIn profile information"
- "Publish a post about our new travel funding guide"
- "Search for professionals in the travel industry"
- "Analyze the performance of my last 5 posts"
- "Find companies in the digital nomad space"
- "Track my profile view analytics this month"
- "Schedule a post about remote work opportunities"

## Marketing Use Cases for Your Business

### 1. **B2B Lead Generation**
- Connect with travel industry professionals
- Target remote work and digital nomad communities
- Build relationships with potential partners

### 2. **Content Distribution**
- Share educational content about travel funding
- Publish thought leadership articles
- Cross-promote your blog and social media content

### 3. **Professional Networking**
- Connect with other entrepreneurs in the travel space
- Join relevant LinkedIn groups and discussions
- Build authority in the digital nomad community

### 4. **Industry Research**
- Monitor conversations in travel and remote work
- Track competitor activity and content strategies
- Identify partnership and collaboration opportunities

### 5. **Recruitment** (if you plan to hire)
- Find talented professionals interested in remote work
- Post job opportunities for your business
- Build a talent pipeline

## Content Strategy for LinkedIn

### High-Performing Content Types:
1. **Educational Posts** - Share travel funding tips and strategies
2. **Behind-the-Scenes** - Show your family's nomad journey
3. **Industry Insights** - Share data and trends about remote work
4. **Success Stories** - Highlight client or personal success stories
5. **Professional Tips** - Share business and career advice

### Posting Schedule:
- **Optimal Times**: Tuesday-Thursday, 8-10 AM or 5-6 PM
- **Frequency**: 2-3 posts per week
- **Content Mix**: 40% educational, 30% personal, 20% industry news, 10% promotional

## Security Considerations

- Store API credentials securely in environment variables
- Never commit credentials to version control
- Use minimal required permissions
- Regularly rotate access tokens
- Monitor API usage and rate limits

## Troubleshooting

### Common Issues:
1. **"Invalid credentials"** - Verify client ID, secret, and access token
2. **"Permission denied"** - Check app permissions in LinkedIn developer portal
3. **"Rate limit exceeded"** - Wait for rate limit reset
4. **"Organization access denied"** - Verify company page admin access

### Testing Installation:
```bash
python3.11 -m linkedin_mcp_server --test
```

## Next Steps

1. Set up your LinkedIn Developer account
2. Install the MCP server
3. Configure your credentials
4. Test with basic profile queries
5. Start publishing content and building connections 