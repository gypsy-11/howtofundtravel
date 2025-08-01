# Pinterest MCP Server Configuration

## Installation Guide

### Prerequisites
- Node.js 18+
- Pinterest Developer Account
- Pinterest API Access

### Step 1: Set Up Pinterest Developer Account

1. **Create Pinterest Developer Account:**
   - Go to [developers.pinterest.com](https://developers.pinterest.com)
   - Sign in with your Pinterest account
   - Create a new app

2. **Configure Pinterest App:**
   - Fill in app details:
     - **App Name**: "HowToFundTravel Pinterest MCP"
     - **App Description**: "MCP server for Pinterest analytics and content management"
   - Select required permissions:
     - `boards:read` - Read boards
     - `boards:write` - Create and update boards
     - `pins:read` - Read pins
     - `pins:write` - Create and update pins
     - `user_accounts:read` - Read user account info

3. **Get API Credentials:**
   - Copy your **App ID** and **App Secret**
   - Generate **Access Token** with required scopes
   - **Important**: Store credentials securely!

### Step 2: Install Pinterest MCP Server

```bash
npm install -g pinterest-mcp-server
```

### Step 3: Configuration

Create a `.env` file in your project root:

```env
# Pinterest API Credentials
PINTEREST_ACCESS_TOKEN=your_access_token_here
PINTEREST_APP_ID=your_app_id_here
PINTEREST_APP_SECRET=your_app_secret_here

# Optional: Business Account ID
PINTEREST_BUSINESS_ACCOUNT_ID=your_business_account_id_here

# MCP Server Configuration
PINTEREST_MCP_SERVER_NAME=pinterest-mcp-server
PINTEREST_MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
```

### Step 4: MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "pinterest": {
      "command": "npx",
      "args": ["pinterest-mcp-server"],
      "env": {
        "PINTEREST_ACCESS_TOKEN": "your_access_token_here",
        "PINTEREST_APP_ID": "your_app_id_here",
        "PINTEREST_APP_SECRET": "your_app_secret_here"
      }
    }
  }
}
```

## Available Tools

### 1. **Board Management Tools**
- `get_boards` - Get list of your boards
- `create_board` - Create new boards
- `update_board` - Update board information
- `delete_board` - Delete boards

### 2. **Pin Management Tools**
- `create_pin` - Create new pins
- `update_pin` - Update pin information
- `get_pins` - Get pins from boards
- `delete_pin` - Delete pins

### 3. **Analytics Tools**
- `get_pin_analytics` - Get pin performance metrics
- `get_board_analytics` - Get board performance data
- `get_account_analytics` - Get account performance
- `track_traffic_sources` - Track traffic sources

### 4. **Research Tools**
- `search_pins` - Search for pins by keywords
- `get_trending_pins` - Get trending pins
- `analyze_competitor_boards` - Monitor competitor activity
- `get_related_pins` - Get related pin suggestions

### 5. **Content Discovery Tools**
- `get_suggested_pins` - Get pin suggestions
- `analyze_pin_performance` - Analyze pin performance
- `get_hashtag_suggestions` - Get hashtag recommendations
- `track_save_activity` - Track pin saves and repins

## Usage Examples

Once configured, you can ask questions like:
- "Create a pin about travel funding tips"
- "Get analytics for my travel board"
- "Search for trending travel pins"
- "Analyze the performance of my last 20 pins"
- "Create a new board for digital nomad tips"
- "Get hashtag suggestions for travel content"

## Marketing Use Cases for Your Business

### 1. **Traffic Generation**
- Drive traffic to your blog and website
- Promote affiliate products through pins
- Create visual content for travel inspiration
- Build email list through rich pins

### 2. **Content Marketing**
- Create visual travel guides and tips
- Share infographics about travel funding
- Promote your blog posts through pins
- Build brand awareness through visual content

### 3. **E-commerce Promotion**
- Showcase travel products and services
- Create product roundup pins
- Drive sales through affiliate links
- Promote your own products and services

### 4. **SEO and Discovery**
- Optimize pins for Pinterest search
- Use relevant keywords and hashtags
- Create pinnable images for blog posts
- Build backlinks through Pinterest

## Content Strategy for Pinterest

### High-Performing Content Types:
1. **Travel Infographics** - Visual travel tips and guides
2. **Destination Inspiration** - Beautiful travel photography
3. **How-to Guides** - Step-by-step visual instructions
4. **Product Roundups** - Curated product collections
5. **Quote Graphics** - Inspirational travel quotes

### Posting Schedule:
- **Optimal Times**: 8-11 PM, 2-4 PM
- **Frequency**: 5-10 pins per day
- **Content Mix**: 40% educational, 30% inspirational, 20% promotional, 10% personal

### SEO Optimization:
- Use relevant keywords in pin titles and descriptions
- Create compelling pin images
- Add relevant hashtags
- Link to relevant blog posts and products

## Security Considerations

- Store API credentials securely in environment variables
- Never commit credentials to version control
- Use minimal required permissions
- Regularly rotate access tokens
- Monitor API usage and rate limits

## Troubleshooting

### Common Issues:
1. **"Invalid credentials"** - Verify app ID, secret, an 