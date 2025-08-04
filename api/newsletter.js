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

  // General newsletter group ID
  const GENERAL_NEWSLETTER_GROUP_ID = '161603576977688029';

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email,
        groups: [GENERAL_NEWSLETTER_GROUP_ID],
        fields: {
          source: 'general_newsletter_signup',
          signup_date: new Date().toISOString()
        }
      })
    });

    if (response.ok) {
      console.log(`Successfully added ${email} to general newsletter group`);
      return res.status(200).json({ message: 'Successfully subscribed to newsletter!' });
    } else {
      const errorData = await response.json();
      console.error('MailerLite API error:', errorData);
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
}