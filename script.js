// Valentine's Proposal - Minimal & Elegant Version
// Simple, clean, and romantic 💕

let noClickCount = 0;
let heartClickCount = 0;
const noBtn = document.getElementById('noBtn');

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    createBackgroundHearts();
    preventBodyScroll();
    initHeartClickEvent();
});

// Heart click event - shows "Chirkut" after 5 clicks
function initHeartClickEvent() {
    const bigHeart = document.querySelector('.big-heart');
    
    bigHeart.addEventListener('click', function() {
        heartClickCount++;
        
        // Add bounce effect on each click
        bigHeart.style.transform = 'scale(0.9)';
        setTimeout(() => {
            bigHeart.style.transform = 'scale(1)';
        }, 100);
        
        // After 5 clicks, show "Chirkut" text
        if (heartClickCount === 5) {
            showChirkutText();
            heartClickCount = 0; // Reset counter
        }
    });
}

// Show "Chirkut" text with lovely animation
function showChirkutText() {
    const chirkutDiv = document.createElement('div');
    chirkutDiv.className = 'chirkut-text';
    chirkutDiv.textContent = 'Chirkut';
    document.body.appendChild(chirkutDiv);
    
    // Remove after animation completes (2 seconds)
    setTimeout(() => {
        chirkutDiv.remove();
    }, 2000);
}

// Create gentle floating hearts in background (reduced from 30 to 15)
function createBackgroundHearts() {
    const heartsContainer = document.getElementById('hearts-bg');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 20 + 's';
        heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Prevent body scroll
function preventBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// Handle Yes button click
function handleYes(e) {
    if (e) e.preventDefault();
    
    // Hide question and buttons with smooth transition
    const question = document.querySelector('.question');
    const buttonContainer = document.querySelector('.button-container');
    
    question.style.transition = 'opacity 0.3s ease';
    buttonContainer.style.transition = 'opacity 0.3s ease';
    question.style.opacity = '0';
    buttonContainer.style.opacity = '0';
    
    setTimeout(() => {
        question.style.display = 'none';
        buttonContainer.style.display = 'none';
        
        // Show response
        const response = document.getElementById('response');
        response.style.display = 'block';
        response.style.opacity = '0';
        setTimeout(() => {
            response.style.opacity = '1';
        }, 50);
    }, 300);
    
    // Create celebration
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';
    
    // Add confetti (reduced from 200 to 80)
    for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = ['#db7093', '#ff69b4', '#ffb3c1', '#ffc0cb'][Math.floor(Math.random() * 4)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.width = (5 + Math.random() * 8) + 'px';
        confetti.style.height = (5 + Math.random() * 8) + 'px';
        celebration.appendChild(confetti);
    }

    // Add falling roses (reduced from 40 to 20)
    for (let i = 0; i < 20; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.innerHTML = '🌹';
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = -50 + 'px';
        rose.style.animationDelay = Math.random() * 2 + 's';
        rose.style.animationDuration = (3 + Math.random() * 2) + 's';
        celebration.appendChild(rose);
    }
    
    // Gentle glow effect instead of transform scale
    const container = document.querySelector('.container');
    container.classList.add('pulse-effect');
    setTimeout(() => {
        container.classList.remove('pulse-effect');
    }, 500);
    
    // Auto-clear celebration after 8 seconds
    setTimeout(() => {
        celebration.style.transition = 'opacity 1s ease-out';
        celebration.style.opacity = '0';
        
        setTimeout(() => {
            celebration.innerHTML = '';
            celebration.style.display = 'none';
            celebration.style.opacity = '1';
        }, 1000);
    }, 8000);
}

// Handle No button click
function handleNo(e) {
    if (e) e.preventDefault();
    
    noClickCount++;
    
    // Gentle glow effect instead of transform scale
    const container = document.querySelector('.container');
    container.classList.add('pulse-effect');
    setTimeout(() => {
        container.classList.remove('pulse-effect');
    }, 500);
    
    const messages = [
        "Are you sure? 🥺",
        "Please reconsider 💔",
        "Think about it? 🙏",
        "Maybe... Yes? 💕",
        "One more chance? 💝",
        "Pretty please? ✨",
        "I'll be amazing! 💖",
        "Please? 🥺💕"
    ];

    const yesBtn = document.querySelector('.yes-btn');
    
    // Progressive changes based on click count
    if (noClickCount === 1) {
        noBtn.textContent = messages[0];
        yesBtn.style.transform = 'scale(1.15)';
    } else if (noClickCount === 2) {
        noBtn.textContent = messages[1];
        yesBtn.style.transform = 'scale(1.3)';
        noBtn.style.fontSize = '16px';
    } else if (noClickCount === 3) {
        noBtn.textContent = messages[2];
        yesBtn.style.transform = 'scale(1.5)';
        noBtn.style.fontSize = '15px';
    } else if (noClickCount === 4) {
        noBtn.textContent = messages[3];
        yesBtn.style.transform = 'scale(1.7)';
        noBtn.style.fontSize = '14px';
    } else if (noClickCount === 5) {
        noBtn.textContent = messages[4];
        yesBtn.style.transform = 'scale(1.9)';
        noBtn.style.fontSize = '13px';
    } else if (noClickCount === 6) {
        noBtn.textContent = messages[5];
        yesBtn.style.transform = 'scale(2.2)';
        noBtn.style.fontSize = '12px';
        noBtn.style.opacity = '0.7';
    } else if (noClickCount >= 7) {
        // No button disappears, Yes button becomes huge
        noBtn.style.display = 'none';
        
        yesBtn.textContent = 'Yes! 💕';
        yesBtn.style.transform = 'scale(2.5)';
        
        // Auto-select Yes after 2 seconds
        setTimeout(() => {
            handleYes();
        }, 2000);
    }
}

// Make No button run away from cursor (simplified)
let lastMoveTime = 0;
document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastMoveTime < 50) return;
    lastMoveTime = currentTime;
    
    if (noClickCount > 2 && noBtn.style.display !== 'none') {
        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - btnCenterX;
        const distanceY = e.clientY - btnCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        const activationDistance = 120 + (noClickCount * 15);
        if (distance < activationDistance) {
            noBtn.classList.add('running');
            const angle = Math.atan2(distanceY, distanceX);
            const moveDistance = activationDistance - distance + 40;
            
            let newX = btnCenterX - Math.cos(angle) * moveDistance;
            let newY = btnCenterY - Math.sin(angle) * moveDistance;
            
            // Keep button within viewport
            const margin = 80;
            const maxX = window.innerWidth - rect.width - margin;
            const maxY = window.innerHeight - rect.height - margin;
            
            newX = Math.max(margin, Math.min(maxX, newX - rect.width / 2));
            newY = Math.max(margin, Math.min(maxY, newY - rect.height / 2));
            
            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
        }
    }
});

// Touch support for mobile
document.addEventListener('touchmove', function(e) {
    if (noClickCount > 2 && noBtn.style.display !== 'none') {
        const touch = e.touches[0];
        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const distanceX = touch.clientX - btnCenterX;
        const distanceY = touch.clientY - btnCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        const activationDistance = 100 + (noClickCount * 15);
        if (distance < activationDistance) {
            noBtn.classList.add('running');
            const angle = Math.atan2(distanceY, distanceX);
            const moveDistance = activationDistance - distance + 35;
            
            let newX = btnCenterX - Math.cos(angle) * moveDistance;
            let newY = btnCenterY - Math.sin(angle) * moveDistance;
            
            const margin = 60;
            const maxX = window.innerWidth - rect.width - margin;
            const maxY = window.innerHeight - rect.height - margin;
            
            newX = Math.max(margin, Math.min(maxX, newX - rect.width / 2));
            newY = Math.max(margin, Math.min(maxY, newY - rect.height / 2));
            
            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
        }
    }
}, { passive: true });
