# MailerLite Subscriber Groups

| Group ID | Group Name | Active Subscribers | Created Date | Description |
|----------|------------|-------------------|--------------|-------------|
| `161977862879970899` | ai-tools-bookmarks | 0 | 2025-08-06 | AI tools bookmarks lead magnet |
| `161603584243270734` | digital nomad AI marketing | 0 | 2025-08-02 | Digital nomad AI marketing campaigns |
| `161603576977688029` | general newsletter | 3 | 2025-08-02 | Main newsletter list |
| `161603587551528458` | girls in business AI marketing | 0 | 2025-08-02 | Women in business AI marketing |
| `163135495112492044` | HowToFundTravelOldSubscribers | 38 | 2025-08-19 | Legacy subscribers from old system |
| `161870683514603166` | remote-work-lead | 4 | 2025-08-05 | Remote work job sites lead magnet |
| `161603580674966558` | visa guide download | 0 | 2025-08-02 | Visa guide download lead magnet |

## Usage Notes

- **Most Active Group**: `HowToFundTravelOldSubscribers` with 38 subscribers
- **Main Newsletter**: `general newsletter` with 3 active subscribers
- **Lead Magnets**: Several groups for different lead magnets (AI tools, remote work, visa guide)
- **Marketing Segments**: Separate groups for different marketing campaigns

## API Usage

When adding subscribers via API, use the appropriate group ID:

```javascript
const subscriberData = {
  email: "user@example.com",
  fields: {
    source: "lead-magnet-name"
  },
  groups: ["161603576977688029"] // general newsletter group
};
```

## Last Updated

Generated on: 2025-01-27
Total Groups: 7
