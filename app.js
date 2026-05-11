// Main App JavaScript

// Share on WhatsApp
function shareOnWhatsApp() {
    const url = window.location.href;
    const text = "🎯 Check out ETI Quiz Hub! Practice quizzes for all units with instant results and PDF download. Perfect for exam prep! 🚀";
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text + "\n\n" + url)}`;
    window.open(whatsappUrl, '_blank');
}

// Copy Link
function copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✅ Link Copied!';
        btn.style.background = '#10B981';
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy link. Please copy manually: ' + url);
    });
}

// Smooth scroll
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
