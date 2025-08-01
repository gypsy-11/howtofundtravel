const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Create checkout session endpoint
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { priceId, successUrl, cancelUrl } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId, // 'price_digital_nomad_parents_program'
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: successUrl + '?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl,
      metadata: {
        program: 'digital_nomad_parents',
        customer_email: req.body.customerEmail || '',
      },
      customer_email: req.body.customerEmail,
      billing_address_collection: 'required',
      allow_promotion_codes: true,
      payment_intent_data: {
        metadata: {
          program: 'digital_nomad_parents',
        },
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

// Webhook to handle successful payments
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      
      // Send welcome email with community access details
      await sendWelcomeEmail(session);
      
      // Add customer to your community platform
      await addCustomerToCommunity(session);
      
      console.log('Payment successful for session:', session.id);
      break;
      
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('Payment succeeded:', paymentIntent.id);
      break;
      
    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
});

// Function to send welcome email
async function sendWelcomeEmail(session) {
  // Implement your email sending logic here
  // You can use services like SendGrid, Mailgun, or AWS SES
  console.log('Sending welcome email to:', session.customer_details.email);
  
  // Example email content:
  const emailContent = {
    to: session.customer_details.email,
    subject: 'Welcome to Digital Nomad Parents Community! 🚀',
    html: `
      <h1>Welcome to the Digital Nomad Parents Community!</h1>
      <p>Thank you for joining our program. Here's what happens next:</p>
      
      <h2>Your Community Access</h2>
      <ul>
        <li><strong>Community Platform:</strong> You'll receive an invite to our private community within 24 hours</li>
        <li><strong>Course Access:</strong> All course materials are now available in your dashboard</li>
        <li><strong>Weekly Calls:</strong> Join our first group coaching call this week</li>
      </ul>
      
      <h2>Getting Started</h2>
      <ol>
        <li>Check your email for community platform invite</li>
        <li>Complete your profile in the community</li>
        <li>Introduce yourself to other members</li>
        <li>Start Week 1 module: "Idea Development & Market Research"</li>
      </ol>
      
      <h2>Support</h2>
      <p>If you have any questions, reach out to us at support@howtofund.travel</p>
      
      <p>We're excited to help you go from idea to income in 6 weeks!</p>
      
      <p>Best regards,<br>
      The How to Fund Travel Team</p>
    `
  };
  
  // Send email using your preferred email service
  // await sendEmail(emailContent);
}

// Function to add customer to community platform
async function addCustomerToCommunity(session) {
  // Implement your community platform integration here
  // This could be adding them to a Discord server, Slack workspace, etc.
  console.log('Adding customer to community:', session.customer_details.email);
  
  // Example: Add to Discord server
  // await addToDiscordServer(session.customer_details.email);
  
  // Example: Add to Slack workspace
  // await addToSlackWorkspace(session.customer_details.email);
}

// Success page endpoint
app.get('/success', (req, res) => {
  const sessionId = req.query.session_id;
  
  if (sessionId) {
    // Verify the session was successful
    stripe.checkout.sessions.retrieve(sessionId)
      .then(session => {
        if (session.payment_status === 'paid') {
          res.send(`
            <!DOCTYPE html>
            <html>
            <head>
              <title>Welcome to Digital Nomad Parents!</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
                .success { color: #3BAEA0; font-size: 2rem; margin-bottom: 20px; }
                .message { font-size: 1.2rem; margin-bottom: 30px; }
                .next-steps { background: #f8f9fa; padding: 30px; border-radius: 10px; max-width: 600px; margin: 0 auto; }
              </style>
            </head>
            <body>
              <div class="success">🎉 Welcome to the Community!</div>
              <div class="message">Your payment was successful and you're now part of our Digital Nomad Parents program.</div>
              
              <div class="next-steps">
                <h2>What happens next?</h2>
                <ul style="text-align: left;">
                  <li>Check your email for community platform access</li>
                  <li>Join our private community within 24 hours</li>
                  <li>Start Week 1: Idea Development & Market Research</li>
                  <li>Connect with other families in the program</li>
                </ul>
                
                <p style="margin-top: 30px;">
                  <a href="/" style="background: #3BAEA0; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px;">
                    Return to Home
                  </a>
                </p>
              </div>
            </body>
            </html>
          `);
        } else {
          res.redirect('/digital-nomad-parents?error=payment_failed');
        }
      })
      .catch(error => {
        console.error('Error retrieving session:', error);
        res.redirect('/digital-nomad-parents?error=verification_failed');
      });
  } else {
    res.redirect('/digital-nomad-parents');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; 