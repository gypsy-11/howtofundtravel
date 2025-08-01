const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Store waitlist data (in production, use a database)
const WAITLIST_FILE = path.join(__dirname, 'waitlist.json');

// Initialize waitlist file if it doesn't exist
async function initializeWaitlistFile() {
    try {
        await fs.access(WAITLIST_FILE);
    } catch {
        await fs.writeFile(WAITLIST_FILE, JSON.stringify([], null, 2));
    }
}

// Load waitlist data
async function loadWaitlist() {
    try {
        const data = await fs.readFile(WAITLIST_FILE, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error loading waitlist:', error);
        return [];
    }
}

// Save waitlist data
async function saveWaitlist(waitlist) {
    try {
        await fs.writeFile(WAITLIST_FILE, JSON.stringify(waitlist, null, 2));
    } catch (error) {
        console.error('Error saving waitlist:', error);
        throw error;
    }
}

// Send welcome email (placeholder - replace with your email service)
async function sendWelcomeEmail(firstName, email) {
    console.log(`Sending welcome email to ${firstName} (${email})`);
    
    // In production, integrate with your email service (SendGrid, Mailgun, etc.)
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
        to: email,
        from: 'noreply@howtofund.travel',
        subject: 'Welcome to the Digital Nomad Parents Waitlist! 🚀',
        html: `
            <h1>Welcome to the Waitlist, ${firstName}!</h1>
            <p>Thank you for joining our exclusive waitlist for the Digital Nomad Parents Program.</p>
            
            <h2>What happens next?</h2>
            <ul>
                <li>You'll be among the first to know when we launch</li>
                <li>Exclusive early bird pricing (saving $100+ off regular price)</li>
                <li>Priority access to our private community</li>
                <li>Bonus resources while you wait</li>
            </ul>
            
            <h2>While you wait...</h2>
            <p>Check out our blog for tips on funding family travel: <a href="https://howtofund.travel/blog">howtofund.travel/blog</a></p>
            
            <p>We're excited to help you go from idea to income!</p>
            
            <p>Best regards,<br>
            The How to Fund Travel Team</p>
        `
    };
    
    try {
        await sgMail.send(msg);
        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
    */
    
    // For now, just log the email details
    console.log(`Welcome email would be sent to ${firstName} (${email})`);
}

// Join waitlist endpoint
app.post('/join-waitlist', async (req, res) => {
    try {
        const { firstName, email, source } = req.body;
        
        // Validate input
        if (!firstName || !email) {
            return res.status(400).json({ 
                success: false, 
                error: 'First name and email are required' 
            });
        }
        
        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please enter a valid email address' 
            });
        }
        
        // Load existing waitlist
        const waitlist = await loadWaitlist();
        
        // Check if email already exists
        const existingEntry = waitlist.find(entry => entry.email.toLowerCase() === email.toLowerCase());
        if (existingEntry) {
            return res.status(400).json({ 
                success: false, 
                error: 'This email is already on our waitlist!' 
            });
        }
        
        // Add new entry
        const newEntry = {
            firstName: firstName.trim(),
            email: email.toLowerCase().trim(),
            source: source || 'unknown',
            joinedAt: new Date().toISOString(),
            waitlistNumber: waitlist.length + 1
        };
        
        waitlist.push(newEntry);
        
        // Save updated waitlist
        await saveWaitlist(waitlist);
        
        // Send welcome email
        await sendWelcomeEmail(firstName, email);
        
        // Log the signup
        console.log(`New waitlist signup: ${firstName} (${email}) - #${newEntry.waitlistNumber}`);
        
        res.json({ 
            success: true, 
            message: 'Successfully joined waitlist',
            waitlistNumber: newEntry.waitlistNumber
        });
        
    } catch (error) {
        console.error('Error joining waitlist:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to join waitlist. Please try again.' 
        });
    }
});

// Get waitlist stats (for admin purposes)
app.get('/waitlist-stats', async (req, res) => {
    try {
        const waitlist = await loadWaitlist();
        
        res.json({
            success: true,
            totalSignups: waitlist.length,
            recentSignups: waitlist.slice(-10), // Last 10 signups
            sources: waitlist.reduce((acc, entry) => {
                acc[entry.source] = (acc[entry.source] || 0) + 1;
                return acc;
            }, {})
        });
    } catch (error) {
        console.error('Error getting waitlist stats:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Failed to get waitlist stats' 
        });
    }
});

// Initialize and start server
async function startServer() {
    await initializeWaitlistFile();
    
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
        console.log(`Waitlist server running on port ${PORT}`);
        console.log(`- POST /join-waitlist - Join the waitlist`);
        console.log(`- GET /waitlist-stats - View waitlist statistics`);
    });
}

startServer().catch(console.error);

module.exports = app; 