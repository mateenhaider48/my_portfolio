// Track project views
function trackProjectView(projectName) {
    fetch('/api/track-project-view', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ project_name: projectName })
    }).catch(error => console.error('Error tracking view:', error));
}

// Newsletter subscription
async function subscribeNewsletter(email) {
    try {
        const response = await fetch('/api/subscribe-newsletter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email })
        });
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return { success: false, error: 'Network error' };
    }
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Page load animations
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in animation to elements
    const elements = document.querySelectorAll('.project-card, .skill-category');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100);
        }, index * 100);
    });
});