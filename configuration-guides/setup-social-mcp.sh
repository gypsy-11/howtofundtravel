#!/bin/bash

# Social Media MCP Setup Script
# This script installs and configures high-impact social media MCPs

echo "🚀 Setting up High-Impact Social Media MCPs for HowToFundTravel"
echo "================================================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if Python is installed
if ! command -v python3.11 &> /dev/null; then
    echo "❌ Python 3.11+ is not installed. Please install Python 3.11+ first."
    exit 1
fi

echo "✅ Prerequisites check passed"

# Create MCP configuration directory
mkdir -p mcp-configs
cd mcp-configs

echo ""
echo "�� Installing Twitter/X MCP Server..."
npm install -g twitter-mcp-server

echo ""
echo "📦 Installing LinkedIn MCP Server..."
pip install linkedin-mcp-server

echo ""
echo "📦 Installing TikTok MCP Server..."
npm install -g tiktok-mcp-server

echo ""
echo "�� Installing YouTube MCP Server..."
pip install youtube-mcp-server

echo ""
echo "📦 Installing Pinterest MCP Server..."
npm install -g pinterest-mcp-server

echo ""
echo "🔧 Creating configuration files..."

# Create Twitter MCP config
cat > twitter-mcp-config.json << 'EOF'
{
  "mcpServers": {
    "twitter": {
      "command": "npx",
      "args": ["twitter-mcp-server"],
      "env": {
        "TWITTER_API_KEY": "your_api_key_here",
        "TWITTER_API_SECRET": "your_api_secret_here",
        "TWITTER_ACCESS_TOKEN": "your_access_token_here",
        "TWITTER_ACCESS_TOKEN_SECRET": "your_access_token_secret_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
EOF

# Create LinkedIn MCP config
cat > linkedin-mcp-config.json << 'EOF'
{
  "mcpServers": {
    "linkedin": {
      "command": "python3.11",
      "args": ["-m", "linkedin_mcp_server"],
      "env": {
        "LINKEDIN_CLIENT_ID": "your_client_id_here",
        "LINKEDIN_CLIENT_SECRET": "your_client_secret_here",
        "LINKEDIN_ACCESS_TOKEN": "your_access_token_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
EOF

# Create TikTok MCP config
cat > tiktok-mcp-config.json << 'EOF'
{
  "mcpServers": {
    "tiktok": {
      "command": "npx",
      "args": ["tiktok-mcp-server"],
      "env": {
        "TIKTOK_ACCESS_TOKEN": "your_access_token_here",
        "TIKTOK_CLIENT_KEY": "your_client_key_here",
        "TIKTOK_CLIENT_SECRET": "your_client_secret_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
EOF

# Create YouTube MCP config
cat > youtube-mcp-config.json << 'EOF'
{
  "mcpServers": {
    "youtube": {
      "command": "python3.11",
      "args": ["-m", "youtube_mcp_server"],
      "env": {
        "YOUTUBE_API_KEY": "your_api_key_here",
        "YOUTUBE_CHANNEL_ID": "your_channel_id_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
EOF

# Create Pinterest MCP config
cat > pinterest-mcp-config.json << 'EOF'
{
  "mcpServers": {
    "pinterest": {
      "command": "npx",
      "args": ["pinterest-mcp-server"],
      "env": {
        "PINTEREST_ACCESS_TOKEN": "your_access_token_here",
        "PINTEREST_APP_ID": "your_app_id_here",
        "PINTEREST_APP_SECRET": "your_app_secret_here",
        "LOG_LEVEL": "INFO"
      }
    }
  }
}
EOF

# Create combined MCP config
cat > combined-social-mcp-config.json << 'EOF'
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
    },
    "linkedin": {
      "command": "python3.11",
      "args": ["-m", "linkedin_mcp_server"],
      "env": {
        "LINKEDIN_CLIENT_ID": "your_client_id_here",
        "LINKEDIN_CLIENT_SECRET": "your_client_secret_here",
        "LINKEDIN_ACCESS_TOKEN": "your_access_token_here"
      }
    },
    "tiktok": {
      "command": "npx",
      "args": ["tiktok-mcp-server"],
      "env": {
        "TIKTOK_ACCESS_TOKEN": "your_access_token_here",
        "TIKTOK_CLIENT_KEY": "your_client_key_here",
        "TIKTOK_CLIENT_SECRET": "your_client_secret_here"
      }
    },
    "youtube": {
      "command": "python3.11",
      "args": ["-m", "youtube_mcp_server"],
      "env": {
        "YOUTUBE_API_KEY": "your_api_key_here",
        "YOUTUBE_CHANNEL_ID": "your_channel_id_here"
      }
    },
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
EOF

echo ""
echo "📝 Creating environment template..."
cat > .env.template << 'EOF'
# Twitter API Configuration
TWITTER_API_KEY=your_api_key_here
TWITTER_API_SECRET=your_api_secret_here
TWITTER_ACCESS_TOKEN=your_access_token_here
TWITTER_ACCESS_TOKEN_SECRET=your_access_token_secret_here

# LinkedIn API Configuration
LINKEDIN_CLIENT_ID=your_client_id_here
LINKEDIN_CLIENT_SECRET=your_client_secret_here
LINKEDIN_ACCESS_TOKEN=your_access_token_here
LINKEDIN_ORGANIZATION_ID=your_org_id_here

# TikTok API Configuration
TIKTOK_ACCESS_TOKEN=your_access_token_here
TIKTOK_CLIENT_KEY=your_client_key_here
TIKTOK_CLIENT_SECRET=your_client_secret_here

# YouTube API Configuration
YOUTUBE_API_KEY=your_api_key_here
YOUTUBE_CHANNEL_ID=your_channel_id_here

# Pinterest API Configuration
PINTEREST_ACCESS_TOKEN=your_access_token_here
PINTEREST_APP_ID=your_app_id_here
PINTEREST_APP_SECRET=your_app_secret_here

# General Configuration
LOG_LEVEL=INFO
CACHE_ENABLED=true
RATE_LIMIT_ENABLED=true
EOF

echo ""
echo "📋 Creating setup checklist..."
cat > setup-checklist.md << 'EOF'
# Social Media MCP Setup Checklist

## ✅ Prerequisites
- [ ] Node.js 18+ installed
- [ ] Python 3.11+ installed
- [ ] Git repository initialized

## 🔑 API Credentials Needed

### Twitter/X
- [ ] Twitter Developer Account created
- [ ] Twitter App created with Read/Write permissions
- [ ] API Key and Secret obtained
- [ ] Access Token and Secret generated

### LinkedIn
- [ ] LinkedIn Developer Account created
- [ ] LinkedIn App created with required permissions
- [ ] Client ID and Secret obtained
- [ ] Access Token generated with required scopes

### TikTok
- [ ] TikTok Developer Account created
- [ ] TikTok App created
- [ ] Access Token obtained
- [ ] Client Key and Secret generated

### YouTube
- [ ] Google Cloud Console account
- [ ] YouTube Data API v3 enabled
- [ ] API Key generated
- [ ] Channel ID obtained

### Pinterest
- [ ] Pinterest Developer Account created
- [ ] Pinterest App created
- [ ] Access Token obtained
- [ ] App ID and Secret generated

## �� Installation Steps
- [ ] Run setup script: `bash setup-social-mcp.sh`
- [ ] Copy `.env.template` to `.env`
- [ ] Fill in all API credentials in `.env`
- [ ] Test each MCP server individually
- [ ] Configure MCP client with combined config

## �� Testing
- [ ] Test Twitter MCP: `npx twitter-mcp-server --test`
- [ ] Test LinkedIn MCP: `python3.11 -m linkedin_mcp_server --test`
- [ ] Test TikTok MCP: `npx tiktok-mcp-server --test`
- [ ] Test YouTube MCP: `python3.11 -m youtube_mcp_server --test`
- [ ] Test Pinterest MCP: `npx pinterest-mcp-server --test`

## 📊 First Use Cases
- [ ] Monitor trending topics in travel industry
- [ ] Analyze competitor social media activity
- [ ] Set up brand mention monitoring
- [ ] Create content calendar based on insights
- [ ] Schedule first automated posts
EOF

echo ""
echo "�� Creating marketing use cases guide..."
cat > marketing-use-cases.md << 'EOF'
# Social Media MCP Marketing Use Cases for HowToFundTravel

## 🎯 Primary Use Cases

### 1. Content Research & Strategy
**Tools:** Twitter, Reddit, LinkedIn
- Monitor trending topics in travel and digital nomad communities
- Track hashtag performance for travel-related content
- Identify viral content opportunities
- Research competitor content strategies

### 2. Lead Generation & Networking
**Tools:** LinkedIn, Twitter, Instagram
- Find users asking about travel funding
- Connect with travel industry professionals
- Build relationships with potential partners
- Target B2B opportunities in the travel space

### 3. Brand Monitoring & Reputation
**Tools:** All platforms
- Track mentions of your brand and related keywords
- Monitor sentiment around travel funding topics
- Identify PR and partnership opportunities
- Respond to customer inquiries and feedback

### 4. Content Distribution & Promotion
**Tools:** All platforms
- Cross-promote blog content across platforms
- Schedule content for optimal engagement times
- A/B test different content formats
- Track content performance and optimize

### 5. Community Building
**Tools:** Reddit, LinkedIn, Twitter
- Engage with relevant communities
- Share valuable insights and advice
- Build authority in the digital nomad space
- Create authentic connections with your audience

## 📊 Analytics & Reporting

### Weekly Reports
- Top performing content across platforms
- Engagement trends and patterns
- Competitor activity summary
- Lead generation metrics

### Monthly Reports
- Platform-specific growth metrics
- Content strategy effectiveness
- ROI analysis for different content types
- Strategic recommendations

## 🚀 Implementation Timeline

### Week 1: Setup & Testing
- Install and configure all MCP servers
- Test basic functionality
- Set up monitoring for key keywords

### Week 2: Content Research
- Analyze trending topics in travel industry
- Research competitor strategies
- Identify content gaps and opportunities

### Week 3: Content Creation
- Create content based on research insights
- Schedule posts across platforms
- Set up automated monitoring

### Week 4: Optimization
- Analyze performance data
- Optimize content strategy
- Scale successful approaches
EOF

echo ""
echo "✅ Setup complete! Here's what was created:"
echo ""
echo "📁 Configuration files:"
echo "  - twitter-mcp-config.json"
echo "  - linkedin-mcp-config.json"
echo "  - tiktok-mcp-config.json"
echo "  - youtube-mcp-config.json"
echo "  - pinterest-mcp-config.json"
echo "  - combined-social-mcp-config.json"
echo ""
echo "📄 Documentation:"
echo "  - .env.template (copy to .env and fill in credentials)"
echo "  - setup-checklist.md"
echo "  - marketing-use-cases.md"
echo ""
echo "🔑 Next Steps:"
echo "1. Copy .env.template to .env"
echo "2. Fill in your API credentials"
echo "3. Follow the setup checklist"
echo "4. Test each MCP server"
echo "5. Start using for your marketing strategy!"
echo ""
echo "�� For detailed setup guides, see:"
echo "  - twitter-mcp-config.md"
echo "  - linkedin-mcp-config.md"
echo "  - tiktok-mcp-config.md"
echo "  - youtube-mcp-config.md"
echo "  - pinterest-mcp-config.md" 