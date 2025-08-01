# Reddit MCP Server Configuration

## Installation Complete ✅

The Reddit Model Context Protocol (MCP) server has been successfully installed on your system.

**Installation Details:**
- Python 3.11.13 installed via Homebrew
- Reddit MCP server version 0.2.0 installed
- All dependencies installed successfully

## Available Tools

The Reddit MCP server provides the following tools:

1. **`get_frontpage_posts`** - Get hot posts from Reddit frontpage
   - Optional: `limit` (1-100, default: 10)

2. **`get_subreddit_info`** - Get information about a subreddit
   - Required: `subreddit_name` (e.g., 'Python', 'news')

3. **`get_subreddit_hot_posts`** - Get hot posts from a specific subreddit
   - Required: `subreddit_name`
   - Optional: `limit` (1-100, default: 10)

4. **`get_subreddit_new_posts`** - Get new posts from a specific subreddit
   - Required: `subreddit_name`
   - Optional: `limit` (1-100, default: 10)

5. **`get_subreddit_top_posts`** - Get top posts from a specific subreddit
   - Required: `subreddit_name`
   - Optional: `limit` (1-100, default: 10)
   - Optional: `time` ('hour', 'day', 'week', 'month', 'year', 'all')

6. **`get_subreddit_rising_posts`** - Get rising posts from a specific subreddit
   - Required: `subreddit_name`
   - Optional: `limit` (1-100, default: 10)

7. **`get_post_content`** - Get detailed content of a specific post
   - Required: `post_id`
   - Optional: `comment_limit` (1-100, default: 10)
   - Optional: `comment_depth` (1-10, default: 3)

8. **`get_post_comments`** - Get comments from a post
   - Required: `post_id`
   - Optional: `limit` (1-100, default: 10)

## Configuration for Different MCP Clients

### For Claude.app

Add to your Claude settings:

```json
{
  "mcpServers": {
    "reddit": {
      "command": "python3.11",
      "args": ["-m", "mcp_server_reddit"]
    }
  }
}
```

### For Zed

Add to your Zed settings.json:

```json
{
  "context_servers": {
    "mcp-server-reddit": {
      "command": "python3.11",
      "args": ["-m", "mcp_server_reddit"]
    }
  }
}
```

### For Other MCP Clients

Use this command to run the server:
```bash
python3.11 -m mcp_server_reddit
```

## Example Usage

Once configured, you can ask questions like:
- "What are the current hot posts on Reddit's frontpage?"
- "Tell me about the r/ClaudeAI subreddit"
- "What are the hot posts in the r/ClaudeAI subreddit?"
- "Show me the newest posts from r/ClaudeAI"
- "What are the top posts of all time in r/ClaudeAI?"
- "What posts are trending in r/ClaudeAI right now?"
- "Get the full content and comments of this Reddit post: [post_url]"
- "Summarize the comments on this Reddit post: [post_url]"

## Testing the Installation

To test that the server is working, run:
```bash
python3.11 -m mcp_server_reddit
```

The server should start and wait for MCP client connections.

## Troubleshooting

If you encounter issues:

1. **Python version**: Make sure you're using Python 3.11 or higher
2. **Path issues**: Use the full path to python3.11 if needed
3. **Permissions**: The server uses Reddit's public API, so no authentication is required
4. **Debugging**: Use the MCP inspector for debugging:
   ```bash
   npx @modelcontextprotocol/inspector python3.11 -m mcp_server_reddit
   ```

## License

The Reddit MCP server is licensed under the MIT License. 