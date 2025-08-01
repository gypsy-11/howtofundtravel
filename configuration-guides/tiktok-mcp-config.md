# TikTok MCP Server Configuration

## Installation Guide

### Prerequisites
- Node.js 18+
- TikTok Developer Account
- TikTok API Access

### Step 1: Set Up TikTok Developer Account

1. **Create TikTok Developer Account:**
   - Go to [developers.tiktok.com](https://developers.tiktok.com)
   - Sign in with your TikTok account
   - Create a new app

2. **Configure TikTok App:**
   - Fill in app details:
     - **App Name**: "HowToFundTravel TikTok MCP"
     - **App Description**: "MCP server for TikTok analytics and content management"
   - Select required permissions:
     - `user.info.basic` - Read basic user info
     - `video.list` - Read video list
     - `video.upload` - Upload videos
     - `video.publish` - Publish videos

3. **Get API Credentials:**
   - Copy your **Client Key** and **Client Secret**
   - Generate **Access Token** with required scopes
   - **Important**: Store credentials securely!

### Step 2: Install TikTok MCP Server

```bash
npm install -g tiktok-mcp-server
```

### Step 3: Configuration

Create a `.env` file in your project root:

```env
# TikTok API Credentials
TIKTOK_ACCESS_TOKEN=your_access_token_here
TIKTOK_CLIENT_KEY=your_client_key_here
TIKTOK_CLIENT_SECRET=your_client_secret_here

# MCP Server Configuration
TIKTOK_MCP_SERVER_NAME=tiktok-mcp-server
TIKTOK_MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
```

### Step 4: MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "tiktok": {
      "command": "npx",
      "args": ["tiktok-mcp-server"],
      "env": {
        "TIKTOK_ACCESS_TOKEN": "your_access_token_here",
        "TIKTOK_CLIENT_KEY": "your_client_key_here",
        "TIKTOK_CLIENT_SECRET": "your_client_secret_here"
      }
    }
  }
}
```

## Available Tools

### 1. **Content Management Tools**
- `upload_video` - Upload videos to TikTok
- `publish_video` - Publish videos with captions
- `get_video_list` - Get list of your videos
- `delete_video` - Delete videos

### 2. **Analytics Tools**
- `get_video_analytics` - Get video performance metrics
- `get_account_analytics` - Get account performance data
- `analyze_hashtag_performance` - Track hashtag trends
- `get_follower_insights` - Analyze follower demographics

### 3. **Research Tools**
- `search_trending_videos` - Find trending videos
- `analyze_competitor_content` - Monitor competitor activity
- `get_hashtag_suggestions` - Get hashtag recommendations
- `track_viral_content` - Monitor viral content patterns

### 4. **Engagement Tools**
- `get_comments` - Get video comments
- `respond_to_comments` - Respond to comments
- `analyze_engagement_patterns` - Track engagement trends
- `get_user_interactions` - Analyze user interactions

## Usage Examples

Once configured, you can ask questions like:
- "Upload this video to TikTok with the caption 'How we fund our family travel'"
- "Get analytics for my last 10 TikTok videos"
- "What are the trending hashtags in travel right now?"
- "Analyze the performance of my competitor's content"
- "Find viral travel content from the last week"
- "Get hashtag suggestions for travel funding content"

## Marketing Use Cases for Your Business

### 1. **Short-Form Video Content**
- Create engaging travel tips and hacks
- Share behind-the-scenes family nomad moments
- Showcase travel destinations and experiences
- Demonstrate travel funding strategies

### 2. **Trending Content Creation**
- Jump on trending hashtags and challenges
- Create viral-worthy travel content
- Participate in travel-related trends
- Build brand awareness through viral content

### 3. **Audience Engagement**
- Respond to comments and questions
- Build community through interactive content
- Create user-generated content campaigns
- Host live Q&A sessions about travel funding

### 4. **Lead Generation**
- Direct viewers to your blog and services
- Promote affiliate products through videos
- Build email list through video content
- Drive traffic to your website

## Content Strategy for TikTok

### High-Performing Content Types:
1. **Travel Tips & Hacks** - Quick, actionable advice
2. **Behind-the-Scenes** - Authentic family moments
3. **Destination Showcases** - Beautiful travel footage
4. **Educational Content** - Travel funding strategies
5. **Trending Challenges** - Participate in viral trends

### Posting Schedule:
- **Optimal Times**: 6-10 PM, 12-2 PM
- **Frequency**: 1-2 videos per day
- **Content Mix**: 40% educational, 30% entertaining, 20% trending, 10% promotional

## Security Considerations

- Store API credentials securely in environment variables
- Never commit credentials to version control
- Use minimal required permissions
- Regularly rotate access tokens
- Monitor API usage and rate limits

## Troubleshooting

### Common Issues:
1. **"Invalid credentials"** - Verify client key, secret, and access token
2. **"Permission denied"** - Check app permissions in TikTok developer portal
3. **"Rate limit exceeded"** - Wait for rate limit reset
4. **"Video upload failed"** - Check video format and size requirements

### Testing Installation:
```bash
npx tiktok-mcp-server --test
```

## Next Steps

1. Set up your TikTok Developer account
2. Install the MCP server
3. Configure your credentials
4. Test with basic video queries
5. Start creating and publishing content 