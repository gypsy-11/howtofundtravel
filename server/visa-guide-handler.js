const express = require('express');
const cors = require('cors');
const https = require('https');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

// Visa guide form submission endpoint
app.post('/submit-visa-guide', async (req, res) => {
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
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'ok', 
        service: 'visa-guide-handler',
        timestamp: new Date().toISOString()
    });
});

// Start server
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Visa guide handler server running on port ${PORT}`);
    console.log(`Health check: http://localhost:${PORT}/health`);
    console.log(`Visa guide endpoint: http://localhost:${PORT}/submit-visa-guide`);
});

module.exports = app; 