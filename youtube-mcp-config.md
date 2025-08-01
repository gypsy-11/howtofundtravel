# YouTube MCP Server Configuration

## Installation Guide

### Prerequisites
- Python 3.11+
- Google Cloud Console Account
- YouTube Data API v3 Access

### Step 1: Set Up Google Cloud Console

1. **Create Google Cloud Project:**
   - Go to [console.cloud.google.com](https://console.cloud.google.com)
   - Create a new project or select existing
   - Enable billing (required for API access)

2. **Enable YouTube Data API v3:**
   - Go to "APIs & Services" > "Library"
   - Search for "YouTube Data API v3"
   - Click "Enable"

3. **Create API Credentials:**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your **API Key**
   - **Important**: Restrict the API key to YouTube Data API v3

### Step 2: Install YouTube MCP Server

```bash
pip install youtube-mcp-server
```

### Step 3: Configuration

Create a `.env` file in your project root:

```env
# YouTube API Configuration
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_CHANNEL_ID=your_channel_id_here

# Optional: OAuth2 for channel management
YOUTUBE_CLIENT_ID=your_client_id_here
YOUTUBE_CLIENT_SECRET=your_client_secret_here
YOUTUBE_REFRESH_TOKEN=your_refresh_token_here

# MCP Server Configuration
YOUTUBE_MCP_SERVER_NAME=youtube-mcp-server
YOUTUBE_MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
```

### Step 4: MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "youtube": {
      "command": "python3.11",
      "args": ["-m", "youtube_mcp_server"],
      "env": {
        "YOUTUBE_API_KEY": "your_api_key_here",
        "YOUTUBE_CHANNEL_ID": "your_channel_id_here"
      }
    }
  }
}
```

## Available Tools

### 1. **Channel Management Tools**
- `get_channel_info` - Get channel information
- `get_channel_analytics` - Get channel performance metrics
- `update_channel_settings` - Update channel settings
- `get_channel_statistics` - Get subscriber and view counts

### 2. **Video Management Tools**
- `upload_video` - Upload videos to YouTube
- `update_video_metadata` - Update video title, description, tags
- `get_video_list` - Get list of your videos
- `delete_video` - Delete videos

### 3. **Analytics Tools**
- `get_video_analytics` - Get video performance metrics
- `get_playlist_analytics` - Get playlist performance
- `analyze_viewer_demographics` - Get viewer demographics
- `track_engagement_metrics` - Track likes, comments, shares

### 4. **Research Tools**
- `search_videos` - Search for videos by keywords
- `get_trending_videos` - Get trending videos by category
- `analyze_competitor_channels` - Monitor competitor activity
- `get_related_videos` - Get related video suggestions

### 5. **Comment Management Tools**
- `get_video_comments` - Get video comments
- `respond_to_comments` - Respond to comments
- `moderate_comments` - Moderate comment section
- `analyze_comment_sentiment` - Analyze comment sentiment

## Usage Examples

Once configured, you can ask questions like:
- "Get my YouTube channel analytics for the last 30 days"
- "Upload this video with the title 'How to Fund Family Travel'"
- "What are the trending videos in the travel category?"
- "Analyze the performance of my last 10 videos"
- "Get comments on my latest video"
- "Search for videos about digital nomad lifestyle"

## Marketing Use Cases for Your Business

### 1. **Educational Content Creation**
- Create comprehensive travel funding guides
- Share step-by-step tutorials
- Build authority through long-form content
- Monetize through YouTube Partner Program

### 2. **SEO and Traffic Generation**
- Drive traffic to your blog and website
- Rank for travel-related keywords
- Build backlinks through video content
- Create evergreen educational content

### 3. **Community Building**
- Engage with viewers through comments
- Create community-focused content
- Host live Q&A sessions
- Build relationships with subscribers

### 4. **Affiliate Marketing**
- Promote travel products and services
- Include affiliate links in video descriptions
- Create product review videos
- Drive sales through video content

## Content Strategy for YouTube

### High-Performing Content Types:
1. **Educational Guides** - Comprehensive how-to videos
2. **Travel Vlogs** - Behind-the-scenes family travel
3. **Product Reviews** - Honest reviews of travel products
4. **Q&A Sessions** - Answer viewer questions
5. **Case Studies** - Real examples of travel funding success

### Posting Schedule:
- **Optimal Times**: Tuesday-Thursday, 2-4 PM
- **Frequency**: 1-2 videos per week
- **Video Length**: 10-20 minutes for educational content

### SEO Optimization:
- Use relevant keywords in titles and descriptions
- Create compelling thumbnails
- Add timestamps for longer videos
- Include relevant tags and categories

## Security Considerations

- Store API credentials securely in environment variables
- Never commit credentials to version control
- Restrict API key to specific APIs and domains
- Monitor API usage and quotas
- Regularly review and rotate credentials

## Troubleshooting

### Common Issues:
1. **"API key invalid"** - Verify API key and restrictions
2. **"Quota exceeded"** - Check API usage and quotas
3. **"Channel not found"** - Verify channel ID is correct
4. **"Permission denied"** - Check OAuth2 scopes and permissions

### Testing Installation:
```bash
python3.11 -m youtube_mcp_server --test
```

## Next Steps

1. Set up your Google Cloud Console account
2. Enable YouTube Data API v3
3. Install the MCP server
4. Configure your credentials
5. Test with basic channel queries
6. Start creating and uploading content 