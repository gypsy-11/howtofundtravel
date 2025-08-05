export default async function handler(req, res) {
  console.log('Method:', req.method);
  console.log('Body:', req.body);
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Job bookmarks lead magnet group ID
  const JOB_BOOKMARKS_GROUP_ID = '161870683514603166';

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        groups: [JOB_BOOKMARKS_GROUP_ID],
        fields: {
          source: 'job_bookmarks_lead_magnet',
          signup_date: new Date().toISOString(),
          lead_magnet: 'job_sites_bookmarks'
        }
      })
    });

    if (response.ok) {
      console.log(`Successfully added ${email} to job bookmarks group`);
      return res.status(200).json({ 
        message: 'Successfully subscribed!',
        redirectUrl: '/thank-you-job-bookmarks.html'
      });
    } else {
      const errorData = await response.json();
      console.error('MailerLite API error:', errorData);
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    console.error('Error subscribing to job bookmarks:', error);
    return res.status(500).json({ message: 'Error processing your request' });
  }
} 