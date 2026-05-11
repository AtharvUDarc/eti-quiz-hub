// Google Sheets Integration - FIXED VERSION

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwqRSY6c8phkX6jAKMGpjb1g5MqsBg17atvyMxLdxHEgVA2q9dDcPTsGWKkhZPqksOXvw/exec';

// Check if student has already attempted this quiz
async function checkPreviousAttempt(rollNumber, quizName) {
    try {
        const response = await fetch(`${SHEET_URL}?action=check&rollNumber=${rollNumber}&quizName=${encodeURIComponent(quizName)}`);
        const data = await response.json();
        console.log('Check result:', data);
        return data;
    } catch (error) {
        console.error('Error checking attempt:', error);
        return {attempted: false, error: true};
    }
}

// Save quiz result - uses text/plain to avoid CORS preflight issues
async function saveQuizResult(rollNumber, quizName, score, total, percentage) {
    const date = new Date().toLocaleDateString('en-IN');
    const time = new Date().toLocaleTimeString('en-IN', {hour: '2-digit', minute: '2-digit'});
    
    try {
        const response = await fetch(SHEET_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'text/plain;charset=utf-8',
            },
            body: JSON.stringify({
                action: 'save',
                rollNumber: rollNumber,
                quizName: quizName,
                score: score,
                total: total,
                percentage: percentage,
                date: date,
                time: time
            })
        });
        
        console.log('Save sent for:', rollNumber, quizName);
        return true;
    } catch (error) {
        console.error('Error saving result:', error);
        return false;
    }
}
