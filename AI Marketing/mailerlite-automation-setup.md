# MailerLite Automation Setup Guide

## Overview
This guide will help you set up automated welcome emails for both your Digital Nomads and Women in Business subscriber groups.

## Step 1: Create Email Templates

### For Digital Nomads Group (Group ID: 160813998579648469)

1. **Log into MailerLite**
2. **Go to Templates → Create Template**
3. **Name it:** "Digital Nomads Welcome Email"
4. **Use the content from:** `digital-nomads-welcome-email.md`
5. **Personalization tags to add:**
   - `{subscriber.name}` for [First Name]
   - `{subscriber.fields.business_type}` for business type
   - `{subscriber.date_created}` for signup date

### For Women in Business Group (Group ID: 161514707486770950)

1. **Create another template**
2. **Name it:** "Women in Business Welcome Email"
3. **Use the content from:** `women-in-business-welcome-email.md`
4. **Same personalization tags as above**

## Step 2: Set Up Automation Workflows

### Digital Nomads Automation

1. **Go to Automations → Create Automation**
2. **Name:** "Digital Nomads Welcome Series"
3. **Trigger:** When someone joins group "Digital Nomads"
4. **Add these emails in sequence:**

#### Email 1: Welcome Email (Immediate)
- **Template:** Digital Nomads Welcome Email
- **Send:** Immediately when they join
- **Subject:** "🎉 Welcome to the Nomad Community - Your Freedom Starts Here"

#### Email 2: Webinar Details (24 hours later)
- **Template:** Create new template with webinar details
- **Send:** 24 hours after joining
- **Subject:** "📅 Your AI Marketing Webinar Details - Save the Date!"

#### Email 3: Pre-Webinar Prep (3 days before webinar)
- **Template:** Create new template with prep materials
- **Send:** 3 days before webinar date
- **Subject:** "🚀 Pre-Webinar Prep: Get 10x More Value From Tomorrow's Session"

### Women in Business Automation

1. **Create another automation**
2. **Name:** "Women in Business Welcome Series"
3. **Trigger:** When someone joins group "Girls in Business"
4. **Add these emails in sequence:**

#### Email 1: Welcome Email (Immediate)
- **Template:** Women in Business Welcome Email
- **Send:** Immediately when they join
- **Subject:** "🎉 Welcome to the Girls in Business Community!"

#### Email 2: Masterclass Details (24 hours later)
- **Template:** Create new template with masterclass details
- **Send:** 24 hours after joining
- **Subject:** "💪 Your AI Marketing Masterclass Details - Save the Date!"

#### Email 3: Pre-Masterclass Questionnaire (2 days after joining)
- **Template:** Create new template with questionnaire
- **Send:** 2 days after joining
- **Subject:** "🎯 Quick 2-Minute Questionnaire to Customize Your Masterclass"

## Step 3: Update Your Landing Pages

### Update nomad-ai-marketing-landing.html

In the JavaScript section, update the GROUP_ID:

```javascript
const GROUP_ID = '160813998579648469'; // Digital Nomads group ID
```

### Update women-ai-marketing-landing.html

In the JavaScript section, update the GROUP_ID:

```javascript
const GROUP_ID = '161514707486770950'; // Girls in Business group ID
```

## Step 4: Test Your Automation

1. **Create test subscribers** in each group
2. **Verify emails are sent** with correct timing
3. **Check personalization** is working correctly
4. **Test unsubscribe functionality**

## Step 5: Additional Email Templates to Create

### For Digital Nomads:
- Webinar reminder (1 day before)
- Post-webinar follow-up
- Resource delivery email
- Community invitation

### For Women in Business:
- Masterclass reminder (1 day before)
- Post-masterclass follow-up
- Resource delivery email
- Community invitation

## Step 6: Analytics & Optimization

### Track These Metrics:
- **Open rates** for each email
- **Click-through rates** on links
- **Webinar/masterclass attendance**
- **Unsubscribe rates**
- **Reply rates** (engagement)

### Optimization Tips:
- **A/B test subject lines** for better open rates
- **Test different send times** for your audience
- **Monitor engagement** and adjust content accordingly
- **Personalize based on business type** from form data

## Step 7: Advanced Features (Optional)

### Conditional Logic
- Send different content based on business type
- Different follow-up sequences for different engagement levels
- Geographic targeting for nomads

### Integration Opportunities
- Connect with your calendar system for automatic webinar scheduling
- Integrate with your CRM for lead scoring
- Connect with social media for community building

## Troubleshooting

### Common Issues:
1. **Emails not sending:** Check automation is active
2. **Wrong group assignment:** Verify group IDs in landing pages
3. **Personalization not working:** Check field names match subscriber data
4. **Timing issues:** Verify timezone settings

### Support Resources:
- MailerLite Help Center
- Email deliverability best practices
- Automation workflow optimization

## Next Steps

1. **Implement the basic automation** (Steps 1-3)
2. **Test thoroughly** (Step 4)
3. **Create additional email templates** (Step 5)
4. **Monitor and optimize** (Step 6)
5. **Add advanced features** as needed (Step 7)

This setup will give you a professional, automated welcome experience that's tailored to each audience's specific needs and pain points. 