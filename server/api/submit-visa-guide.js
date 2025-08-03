const https = require('https');

// MailerLite API configuration
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const VISA_GUIDE_GROUP_ID = '161603580674966558'; // Your visa guide download group ID

// Helper function to make HTTPS requests to MailerLite API
function makeMailerLiteRequest(endpoint, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'connect.mailerlite.com',
            path: `/api${endpoint}`,
            method: method,
            headers: {
                'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        const req = https.request(options, (res) => {
            let responseData = '';
            
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            
            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(responseData);
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(parsedData);
                    } else {
                        reject(new Error(`MailerLite API error: ${res.statusCode} - ${parsedData.message || responseData}`));
                    }
                } catch (error) {
                    reject(new Error(`Failed to parse response: ${responseData}`));
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        if (data) {
            req.write(JSON.stringify(data));
        }

        req.end();
    });
}

// Add subscriber to MailerLite group
async function addSubscriberToGroup(email, fields = {}) {
    try {
        const subscriberData = {
            email: email,
            fields: fields,
            groups: [VISA_GUIDE_GROUP_ID]
        };

        const response = await makeMailerLiteRequest('/subscribers', 'POST', subscriberData);
        return response;
    } catch (error) {
        console.error('Error adding subscriber to MailerLite:', error);
        throw error;
    }
}

// Vercel serverless function handler
module.exports = async (req, res) => {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed'
        });
    }

    try {
        const { email } = req.body;
        
        // Validate input
        if (!email) {
            return res.status(400).json({ 
                success: false, 
                message: 'Email is required' 
            });
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                message: 'Please enter a valid email address' 
            });
        }

        // Add subscriber to MailerLite group
        const subscriberData = {
            email: email,
            fields: {
                source: 'visa_guide_form',
                signup_date: new Date().toISOString()
            }
        };

        const mailerLiteResponse = await addSubscriberToGroup(email, subscriberData.fields);

        // Log successful subscription
        console.log(`Successfully added ${email} to visa guide download group`);

        // Return success response
        res.json({
            success: true,
            message: 'Thank you! Your visa guide is on its way.',
            data: {
                email: email,
                subscriber_id: mailerLiteResponse.data.id
            }
        });

    } catch (error) {
        console.error('Error processing visa guide submission:', error);
        
        // Check if it's a duplicate email error
        if (error.message && error.message.includes('already exists')) {
            return res.status(409).json({
                success: false,
                message: 'This email is already subscribed. Check your inbox for the visa guide!'
            });
        }

        res.status(500).json({
            success: false,
            message: 'Sorry, something went wrong. Please try again.'
        });
    }
}; 