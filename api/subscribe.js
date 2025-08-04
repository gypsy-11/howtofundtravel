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

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`
      },
      body: JSON.stringify({
        email: email
      })
    });

    if (response.ok) {
      return res.status(200).json({ message: 'Successfully subscribed!' });
    } else {
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error subscribing to newsletter' });
  }
}