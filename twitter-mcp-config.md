# Twitter/X MCP Server Configuration

## Installation Guide

### Prerequisites
- Node.js 18+ or Python 3.11+
- Twitter Developer Account
- Twitter API v2 Access

### Step 1: Set Up Twitter Developer Account

1. **Create Twitter Developer Account:**
   - Go to [developer.twitter.com](https://developer.twitter.com)
   - Sign in with your Twitter account
   - Apply for a developer account (Basic access is sufficient)

2. **Create a Twitter App:**
   - In your developer portal, click "Create App"
   - Fill in app details:
     - **App Name**: "HowToFundTravel MCP Server"
     - **App Description**: "MCP server for Twitter analytics and content management"
   - Select "Read and Write" permissions
   - Click "Create"

3. **Get API Credentials:**
   - Go to "Keys and Tokens" tab
   - Copy your **API Key** and **API Secret**
   - Generate **Access Token** and **Access Token Secret**
   - **Important**: Keep these credentials secure!

### Step 2: Install Twitter MCP Server

#### Option A: Using npm (Recommended)
```bash
npm install -g twitter-mcp-server
```

#### Option B: Using Python
```bash
pip install twitter-mcp-server
```

### Step 3: Configuration

Create a `.env` file in your project root:

```env
# Twitter API Credentials
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here

# Optional: Bearer Token for v2 API
TWITTER_BEARER_TOKEN=your_bearer_token_here

# MCP Server Configuration
TWITTER_MCP_SERVER_NAME=twitter-mcp-server
TWITTER_MCP_SERVER_VERSION=1.0.0
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
```

### Step 4: MCP Client Configuration

Add to your MCP client configuration:

```json
{
  "mcpServers": {
    "twitter": {
      "command": "npx",
      "args": ["twitter-mcp-server"],
      "env": {
        "TWITTER_API_KEY": "your_api_key_here",
        "TWITTER_API_SECRET": "your_api_secret_here",
        "TWITTER_ACCESS_TOKEN": "your_access_token_here",
        "TWITTER_ACCESS_TOKEN_SECRET": "your_access_token_secret_here"
      }
    }
  }
}
```

## Available Tools

### 1. **Tweet Analysis Tools**
- `analyze_tweet_sentiment` - Analyze sentiment of tweets
- `get_tweet_metrics` - Get engagement metrics for tweets
- `analyze_hashtag_performance` - Track hashtag trends and performance
- `get_user_engagement` - Analyze user engagement patterns

### 2. **Content Management Tools**
- `publish_tweet` - Post new tweets with media
- `schedule_tweet` - Schedule tweets for future posting
- `get_scheduled_tweets` - View scheduled tweets
- `delete_tweet` - Delete tweets

### 3. **Research & Monitoring Tools**
- `search_tweets` - Search tweets by keywords
- `get_trending_topics` - Get trending topics by location
- `monitor_mentions` - Track brand mentions
- `analyze_competitor_activity` - Monitor competitor accounts

### 4. **Analytics Tools**
- `get_account_analytics` - Get account performance metrics
- `get_follower_insights` - Analyze follower demographics
- `track_campaign_performance` - Monitor campaign metrics
- `generate_engagement_report` - Create comprehensive reports

## Usage Examples

Once configured, you can ask questions like:
- "Analyze the sentiment of tweets mentioning 'digital nomad'"
- "What are the trending topics in travel right now?"
- "Show me engagement metrics for my last 10 tweets"
- "Search for tweets about 'funding travel' from the last week"
- "Monitor mentions of @howtofundtravel"
- "Schedule a tweet about our new travel funding guide"
- "Generate a report on our Twitter performance this month"

## Marketing Use Cases for Your Business

### 1. **Content Research**
- Monitor trending topics in travel and digital nomad communities
- Track hashtag performance for travel-related content
- Identify viral content opportunities

### 2. **Competitor Analysis**
- Monitor competitor accounts and content strategies
- Track engagement patterns of successful travel influencers
- Identify content gaps and opportunities

### 3. **Lead Generation**
- Find users asking about travel funding
- Engage with potential customers in relevant conversations
- Build relationships with travel industry professionals

### 4. **Brand Monitoring**
- Track mentions of your brand and related keywords
- Monitor sentiment around travel funding topics
- Identify PR and partnership opportunities

## Security Considerations

- Store API credentials securely in environment variables
- Never commit credentials to version control
- Use read-only tokens when possible for analysis
- Monitor API usage to stay within rate limits
- Regularly rotate access tokens

## Troubleshooting

### Common Issues:
1. **"Invalid credentials"** - Verify API keys and tokens are correct
2. **"Rate limit exceeded"** - Wait for rate limit reset or upgrade API access
3. **"Permission denied"** - Check app permissions in Twitter developer portal
4. **"API version error"** - Ensure you're using Twitter API v2

### Testing Installation:
```bash
npx twitter-mcp-server --test
```

## Next Steps

1. Set up your Twitter Developer account
2. Install the MCP server
3. Configure your credentials
4. Test with basic queries
5. Start monitoring relevant keywords and competitors 