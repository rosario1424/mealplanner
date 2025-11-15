const fs = require('fs');

const logger = async (req, res, next) => {
    console.log(`${req.method}  ${req.url}`);
    console.log('Body:', req.body);
    console.log('Cookies:', req.cookies);
    console.log('--------------------------');

    // write log to a file
    const logEntry = `${new Date().toISOString()} - ${req.method} ${req.url} - Body: ${JSON.stringify(req.body)} - Cookies: ${JSON.
    stringify(req.cookies)}\n`;

    const currentDate = new Date().toISOString().split('T')[0];
    
    fs.appendFile(`./logs/${currentDate}).log`, logEntry, (err) => {
        if (err) {
            console.error('Failed to write log:, err');
        }
    });

    next();
}

module.exports = logger;