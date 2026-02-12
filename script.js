// Valentine's Proposal Interactive Script
// Enhanced with crazy features to win your crush's heart! 💕

// Global variables
let noClickCount = 0;
const noBtn = document.getElementById('noBtn');
let particleInterval;
let heartShakeInterval;

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', function() {
    createHearts();
    createSparkles();
    addHeartClickEffect();
    startContinuousParticles();
    playBackgroundMusic();
    addMouseTrailEffect();
    addSecretDiscoMode();
    preventBodyScroll();
    addTypingEffect();
});

// Create floating hearts in background
function createHearts() {
    const heartsContainer = document.getElementById('hearts-bg');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 15 + 's';
        heart.style.fontSize = (Math.random() * 30 + 15) + 'px';
        heartsContainer.appendChild(heart);
    }
}

// Prevent body scroll
function preventBodyScroll() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}

// LEGENDARY: Smooth particle burst effect
function createSmoothParticleBurst(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const particles = ['💔', '😢', '🥺', '💧'];
    for (let i = 0; i < 8; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = particles[i % particles.length];
        particle.style.position = 'fixed';
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.fontSize = '24px';
        particle.style.zIndex = '9999';
        particle.style.pointerEvents = 'none';
        particle.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        document.body.appendChild(particle);
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 80;
        
        requestAnimationFrame(() => {
            particle.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.5) rotate(${360 * Math.random()}deg)`;
            particle.style.opacity = '0';
        });
        
        setTimeout(() => particle.remove(), 800);
    }
}

// LEGENDARY: Magical aura effect
function createMagicalAura(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 3; i++) {
        const aura = document.createElement('div');
        aura.style.position = 'fixed';
        aura.style.left = centerX + 'px';
        aura.style.top = centerY + 'px';
        aura.style.width = '100px';
        aura.style.height = '100px';
        aura.style.border = '3px solid rgba(255, 8, 68, 0.6)';
        aura.style.borderRadius = '50%';
        aura.style.transform = 'translate(-50%, -50%)';
        aura.style.zIndex = '9998';
        aura.style.pointerEvents = 'none';
        aura.style.animation = `auraExpand ${1 + i * 0.3}s ease-out forwards`;
        document.body.appendChild(aura);
        
        setTimeout(() => aura.remove(), 1000 + i * 300);
    }
}

// LEGENDARY: Epic heart explosion effect (replaces boring wave)
function triggerLegendaryHeartEffect() {
    const bigHeart = document.querySelector('.big-heart');
    const container = document.querySelector('.container');
    
    // Epic scale animation
    bigHeart.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    bigHeart.style.transform = 'scale(1.5) rotate(360deg)';
    
    // Radial heart explosion
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = ['💖', '💕', '💗', '💓'][Math.floor(Math.random() * 4)];
            heart.style.position = 'fixed';
            heart.style.left = bigHeart.offsetLeft + bigHeart.offsetWidth / 2 + 'px';
            heart.style.top = bigHeart.offsetTop + bigHeart.offsetHeight / 2 + 'px';
            heart.style.fontSize = '30px';
            heart.style.zIndex = '9999';
            heart.style.pointerEvents = 'none';
            heart.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            document.body.appendChild(heart);
            
            const angle = (Math.PI * 2 * i) / 20;
            const distance = 150 + Math.random() * 100;
            
            requestAnimationFrame(() => {
                heart.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(0.2) rotate(${720}deg)`;
                heart.style.opacity = '0';
            });
            
            setTimeout(() => heart.remove(), 1200);
        }, i * 30);
    }
    
    // Pulsing container
    container.classList.add('pulse-effect');
    
    setTimeout(() => {
        bigHeart.style.transform = 'scale(1) rotate(0deg)';
        container.classList.remove('pulse-effect');
    }, 1500);
}

// Mouse trail effect
function addMouseTrailEffect() {
    let lastTrailTime = 0;
    const trailDelay = 50; // ms between trails
    
    document.addEventListener('mousemove', function(e) {
        const currentTime = Date.now();
        if (currentTime - lastTrailTime < trailDelay) return;
        lastTrailTime = currentTime;
        
        const trail = document.createElement('div');
        trail.className = 'heart-trail';
        trail.innerHTML = ['❤️', '💕', '💖', '💗', '✨'][Math.floor(Math.random() * 5)];
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        document.body.appendChild(trail);
        
        setTimeout(() => trail.remove(), 1000);
    });
}

// Secret disco mode (triple click the title)
function addSecretDiscoMode() {
    let clickCount = 0;
    let clickTimer;
    const title = document.querySelector('h1');
    
    title.addEventListener('click', function() {
        clickCount++;
        clearTimeout(clickTimer);
        
        if (clickCount === 3) {
            activateDiscoMode();
            clickCount = 0;
        }
        
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 500);
    });
}

function activateDiscoMode() {
    const container = document.querySelector('.container');
    const body = document.body;
    
    // Add disco effect
    container.classList.add('disco');
    body.classList.add('disco');
    
    // Create crazy effects
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.innerHTML = ['🎉', '🎊', '✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 6)];
            emoji.style.position = 'fixed';
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.top = Math.random() * 100 + '%';
            emoji.style.fontSize = (20 + Math.random() * 30) + 'px';
            emoji.style.animation = 'particleRise 2s ease-out forwards';
            emoji.style.zIndex = '9999';
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 2000);
        }, i * 50);
    }
    
    // Stop disco after 3 seconds
    setTimeout(() => {
        container.classList.remove('disco');
        body.classList.remove('disco');
    }, 3000);
}

// Typing effect for messages
function addTypingEffect() {
    const messages = document.querySelectorAll('.message p');
    messages.forEach((msg, index) => {
        const originalText = msg.innerHTML;
        msg.innerHTML = '';
        msg.style.opacity = '1';
        
        let charIndex = 0;
        const typingSpeed = 30;
        
        setTimeout(() => {
            const typeInterval = setInterval(() => {
                if (charIndex < originalText.length) {
                    msg.innerHTML = originalText.substring(0, charIndex + 1);
                    charIndex++;
                } else {
                    clearInterval(typeInterval);
                }
            }, typingSpeed);
        }, index * 800);
    });
}

// Create sparkle effects
function createSparkles() {
    const heartsContainer = document.getElementById('hearts-bg');
    for (let i = 0; i < 50; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        heartsContainer.appendChild(sparkle);
    }
}

// Add click effect to big heart
function addHeartClickEffect() {
    const bigHeart = document.querySelector('.big-heart');
    let clickCount = 0;
    
    bigHeart.addEventListener('click', function() {
        clickCount++;
        // Create burst of small hearts
        for (let i = 0; i < 15; i++) {
            const miniHeart = document.createElement('div');
            miniHeart.className = 'emoji-float';
            miniHeart.innerHTML = ['❤️', '💕', '💖', '💗', '💓', '💝'][Math.floor(Math.random() * 6)];
            miniHeart.style.left = bigHeart.offsetLeft + bigHeart.offsetWidth / 2 + 'px';
            miniHeart.style.top = bigHeart.offsetTop + bigHeart.offsetHeight / 2 + 'px';
            
            const angle = (Math.PI * 2 * i) / 15;
            const distance = 100 + Math.random() * 50;
            miniHeart.style.setProperty('--tx', Math.cos(angle) * distance + 'px');
            miniHeart.style.setProperty('--ty', Math.sin(angle) * distance + 'px');
            
            document.body.appendChild(miniHeart);
            
            setTimeout(() => miniHeart.remove(), 3000);
        }
        
        // Shake the container
        document.querySelector('.container').classList.add('shake');
        setTimeout(() => {
            document.querySelector('.container').classList.remove('shake');
        }, 500);
        
        // Secret: 5 clicks triggers LEGENDARY heart explosion!
        if (clickCount === 5) {
            triggerLegendaryHeartEffect();
            clickCount = 0;
        }
    });
}

// Continuous particle effects at bottom
function startContinuousParticles() {
    particleInterval = setInterval(() => {
        if (document.getElementById('response').style.display !== 'block') {
            createParticle();
        }
    }, 300);
}

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.innerHTML = ['💕', '✨', '⭐', '💫', '💖'][Math.floor(Math.random() * 5)];
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.bottom = '0px';
    particle.style.fontSize = (Math.random() * 20 + 15) + 'px';
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 4000);
}

// Make No button run away from cursor (enhanced)
let lastMoveTime = 0;
document.addEventListener('mousemove', function(e) {
    const currentTime = Date.now();
    if (currentTime - lastMoveTime < 50) return; // Throttle for performance
    lastMoveTime = currentTime;
    
    if (noClickCount > 1 && noBtn.style.display !== 'none') {
        const rect = noBtn.getBoundingClientRect();
        const btnCenterX = rect.left + rect.width / 2;
        const btnCenterY = rect.top + rect.height / 2;
        
        const distanceX = e.clientX - btnCenterX;
        const distanceY = e.clientY - btnCenterY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // If cursor gets close, move the button away
        const activationDistance = 150 + (noClickCount * 20); // Gets harder to click
        if (distance < activationDistance) {
            noBtn.classList.add('running');
            const angle = Math.atan2(distanceY, distanceX);
            const moveDistance = activationDistance - distance + 50;
            
            let newX = btnCenterX - Math.cos(angle) * moveDistance;
            let newY = btnCenterY - Math.sin(angle) * moveDistance;
            
            // Keep button in viewport with margin
            const margin = 50;
            newX = Math.max(margin, Math.min(window.innerWidth - rect.width - margin, newX - rect.width / 2));
            newY = Math.max(margin, Math.min(window.innerHeight - rect.height - margin, newY - rect.height / 2));
            
            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
        }
    }
});

// Touch support for mobile
let touchMoveHandler = function(e) {
    if (noClickCount > 1 && noBtn.style.display !== 'none') {
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
            const moveDistance = activationDistance - distance + 40;
            
            let newX = btnCenterX - Math.cos(angle) * moveDistance;
            let newY = btnCenterY - Math.sin(angle) * moveDistance;
            
            const margin = 30;
            newX = Math.max(margin, Math.min(window.innerWidth - rect.width - margin, newX - rect.width / 2));
            newY = Math.max(margin, Math.min(window.innerHeight - rect.height - margin, newY - rect.height / 2));
            
            noBtn.style.left = newX + 'px';
            noBtn.style.top = newY + 'px';
        }
    }
};

document.addEventListener('touchmove', touchMoveHandler, { passive: true });

// Handle Yes button click
function handleYes() {
    // Stop particles
    clearInterval(particleInterval);
    
    // Hide question and buttons
    document.querySelector('.question').style.display = 'none';
    document.querySelector('.button-container').style.display = 'none';
    
    // Show response
    document.getElementById('response').style.display = 'block';
    
    // Create massive celebration
    const celebration = document.getElementById('celebration');
    celebration.style.display = 'block';
    
    // Add confetti explosion
    for (let i = 0; i < 200; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -10 + 'px';
        confetti.style.backgroundColor = ['#ff0844', '#ff758c', '#ffb3c1', '#ff69b4', '#c81e78', '#ffd700', '#ff1493'][Math.floor(Math.random() * 7)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.width = (5 + Math.random() * 10) + 'px';
        confetti.style.height = (5 + Math.random() * 10) + 'px';
        celebration.appendChild(confetti);
    }

    // Add falling roses
    for (let i = 0; i < 40; i++) {
        const rose = document.createElement('div');
        rose.className = 'rose';
        rose.innerHTML = ['🌹', '🌺', '🌸', '💐', '🌷'][Math.floor(Math.random() * 5)];
        rose.style.left = Math.random() * 100 + '%';
        rose.style.top = -50 + 'px';
        rose.style.animationDelay = Math.random() * 2 + 's';
        rose.style.animationDuration = (3 + Math.random() * 2) + 's';
        celebration.appendChild(rose);
    }
    
    // Add firework hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createFireworkHeart();
        }, i * 200);
    }
    
    // Shake and celebrate the container
    const container = document.querySelector('.container');
    container.classList.add('shake');
    setTimeout(() => {
        container.classList.remove('shake');
    }, 500);
    
    // Play success sound (vibration on mobile)
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
    
    // Create continuous heart rain for 5 seconds
    let heartRainCount = 0;
    const heartRainInterval = setInterval(() => {
        if (heartRainCount < 50) {
            const heart = document.createElement('div');
            heart.className = 'rose';
            heart.innerHTML = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = -50 + 'px';
            heart.style.animationDuration = (2 + Math.random()) + 's';
            celebration.appendChild(heart);
            heartRainCount++;
        } else {
            clearInterval(heartRainInterval);
        }
    }, 100);
}

// Create firework heart effect
function createFireworkHeart() {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * (window.innerHeight * 0.7);
    
    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.innerHTML = '💕';
        particle.style.position = 'fixed';
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        particle.style.fontSize = '20px';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1001';
        
        const angle = (Math.PI * 2 * i) / 12;
        const velocity = 100 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.animation = 'none';
        document.body.appendChild(particle);
        
        let opacity = 1;
        let currentX = x;
        let currentY = y;
        let frame = 0;
        
        const animate = () => {
            frame++;
            currentX += tx / 30;
            currentY += ty / 30 + frame * 0.5; // Gravity effect
            opacity -= 0.02;
            
            particle.style.left = currentX + 'px';
            particle.style.top = currentY + 'px';
            particle.style.opacity = opacity;
            
            if (opacity > 0) {
                requestAnimationFrame(animate);
            } else {
                particle.remove();
            }
        };
        
        animate();
    }
}

// Smooth pulse effect (replaces laggy screen shake)
function smoothPulse() {
    const container = document.querySelector('.container');
    container.style.animation = 'none';
    setTimeout(() => {
        container.style.animation = '';
    }, 10);
    
    // Add smooth scale effect
    container.classList.add('pulse-effect');
    setTimeout(() => {
        container.classList.remove('pulse-effect');
    }, 600);
}

// Handle No button click
function handleNo() {
    noClickCount++;
    
    // Smooth pulse instead of laggy shake
    smoothPulse();
    
    const messages = [
        "Wait! Think again 🥺",
        "Are you really sure? 💔",
        "My heart is breaking... 😢",
        "Please reconsider! 💔",
        "One more chance? 🥺",
        "I'll be the BEST Valentine! 💝",
        "Pretty please? 🙏✨",
        "You're breaking my heart! 💔😭"
    ];

    const yesBtn = document.querySelector('.yes-btn');
    const question = document.querySelector('.question');
    
    // Shake container on every No click
    document.querySelector('.container').classList.add('shake');
    setTimeout(() => {
        document.querySelector('.container').classList.remove('shake');
    }, 500);
    
    // Add glitch effect to question
    if (noClickCount >= 3) {
        question.classList.add('glitch');
        setTimeout(() => {
            question.classList.remove('glitch');
        }, 300);
    }
    
    // Create sad particles
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const sadEmoji = document.createElement('div');
            sadEmoji.className = 'emoji-float';
            sadEmoji.innerHTML = ['💔', '😢', '😭', '🥺'][Math.floor(Math.random() * 4)];
            sadEmoji.style.position = 'fixed';
            sadEmoji.style.left = noBtn.offsetLeft + noBtn.offsetWidth / 2 + 'px';
            sadEmoji.style.top = noBtn.offsetTop + 'px';
            sadEmoji.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
            sadEmoji.style.setProperty('--ty', -100 + 'px');
            document.body.appendChild(sadEmoji);
            
            setTimeout(() => sadEmoji.remove(), 3000);
        }, i * 100);
    }

    // Progressive changes based on click count
    if (noClickCount === 1) {
        noBtn.textContent = messages[0];
        yesBtn.style.transform = 'scale(1.2)';
    } else if (noClickCount === 2) {
        noBtn.textContent = messages[1];
        yesBtn.style.transform = 'scale(1.4)';
        noBtn.style.fontSize = '16px';
    } else if (noClickCount === 3) {
        noBtn.textContent = messages[2];
        yesBtn.style.transform = 'scale(1.6)';
        noBtn.style.fontSize = '14px';
        // Start running away behavior
    } else if (noClickCount === 4) {
        noBtn.textContent = messages[3];
        yesBtn.style.transform = 'scale(1.8)';
        noBtn.style.fontSize = '12px';
    } else if (noClickCount === 5) {
        noBtn.textContent = messages[4];
        yesBtn.style.transform = 'scale(2.1)';
        noBtn.style.fontSize = '11px';
        noBtn.style.padding = '10px 20px';
    } else if (noClickCount === 6) {
        noBtn.textContent = messages[5];
        yesBtn.style.transform = 'scale(2.4)';
        noBtn.style.fontSize = '9px';
        noBtn.style.padding = '8px 15px';
    } else if (noClickCount === 7) {
        noBtn.textContent = messages[6];
        yesBtn.style.transform = 'scale(2.7)';
        noBtn.style.opacity = '0.5';
        noBtn.style.fontSize = '8px';
    } else if (noClickCount >= 8) {
        // ULTIMATE TRICK: No button explodes and Yes gets huge!
        noBtn.style.display = 'none';
        
        // Create explosion effect
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = '💥';
            particle.style.position = 'fixed';
            particle.style.left = noBtn.offsetLeft + 'px';
            particle.style.top = noBtn.offsetTop + 'px';
            particle.style.fontSize = '30px';
            particle.style.zIndex = '9999';
            const angle = (Math.PI * 2 * i) / 20;
            const velocity = 100 + Math.random() * 50;
            particle.style.animation = `particleRise ${1 + Math.random()}s ease-out forwards`;
            document.body.appendChild(particle);
            setTimeout(() => particle.remove(), 1500);
        }
        
        yesBtn.textContent = 'I KNEW you would say Yes! 💕';
        yesBtn.style.transform = 'scale(3)';
        yesBtn.classList.add('wave', 'neon-glow');
        
        // Smooth legendary transition
        smoothPulse();
        createMagicalAura(yesBtn);
        
        // Automatically click Yes after 1.5 seconds
        setTimeout(() => {
            handleYes();
        }, 1500);
    }
    
    // Create smooth particle burst instead of vibration
    createSmoothParticleBurst(noBtn);
}

// Optional: Add subtle background music (commented out - uncomment to enable)
function playBackgroundMusic() {
    // Uncomment the lines below to add background music
    // Create an audio element for background ambiance (user can add their own romantic music file)
    /*
    const audio = new Audio('romantic-music.mp3'); // Add your music file
    audio.loop = true;
    audio.volume = 0.3;
    
    // Play on first user interaction
    document.body.addEventListener('click', function playOnce() {
        audio.play().catch(e => console.log('Audio play failed:', e));
        document.body.removeEventListener('click', playOnce);
    }, { once: true });
    */
}

// Add floating emojis around Yes button on hover
document.querySelector('.yes-btn').addEventListener('mouseenter', function(e) {
    if (Math.random() > 0.3) { // 70% chance to trigger
        createFloatingEmojis(e.target);
    }
});

function createFloatingEmojis(button) {
    const emojis = ['💕', '💖', '💗', '💓', '💝', '✨', '⭐'];
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const emoji = document.createElement('div');
            emoji.className = 'emoji-float';
            emoji.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.position = 'fixed';
            emoji.style.left = button.offsetLeft + button.offsetWidth / 2 + 'px';
            emoji.style.top = button.offsetTop + button.offsetHeight / 2 + 'px';
            emoji.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
            emoji.style.setProperty('--ty', -(50 + Math.random() * 50) + 'px');
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 3000);
        }, i * 100);
    }
}

// Prevent accidental page refresh
window.addEventListener('beforeunload', function(e) {
    if (document.getElementById('response').style.display === 'block') {
        return; // Allow leaving after successful proposal
    }
    e.preventDefault();
    e.returnValue = '';
    return 'Are you sure you want to leave? Your Valentine is waiting! 💕';
});

// Add keyboard support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && document.getElementById('response').style.display !== 'block') {
        handleYes();
    }
});

// Easter egg: Konami code for MEGA heart attack!
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        // MEGA Easter egg activated!
        activateDiscoMode();
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = ['💖', '💕', '💗', '💓', '💝', '❤️'][Math.floor(Math.random() * 6)];
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = -50 + 'px';
                heart.style.fontSize = (20 + Math.random() * 40) + 'px';
                heart.style.animation = 'rose-fall 3s linear';
                heart.style.zIndex = '999';
                document.body.appendChild(heart);
                
                setTimeout(() => heart.remove(), 3000);
            }, i * 30);
        }
        
        // Make everything glow
        document.querySelector('.container').classList.add('neon-glow');
        setTimeout(() => {
            document.querySelector('.container').classList.remove('neon-glow');
        }, 3000);
        
        konamiCode = [];
    }
});

// Secret: Type "LOVE" to trigger special effect
let typedKeys = [];
document.addEventListener('keypress', function(e) {
    typedKeys.push(e.key.toLowerCase());
    typedKeys = typedKeys.slice(-4);
    
    if (typedKeys.join('') === 'love') {
        // Love spell activated!
        const yesBtn = document.querySelector('.yes-btn');
        yesBtn.classList.add('wave', 'neon-glow');
        yesBtn.style.transform = 'scale(2)';
        
        // Rain hearts
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.innerHTML = '💕';
                heart.style.position = 'fixed';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.top = -30 + 'px';
                heart.style.fontSize = '25px';
                heart.style.animation = 'rose-fall 2s linear';
                heart.style.zIndex = '999';
                document.body.appendChild(heart);
                setTimeout(() => heart.remove(), 2000);
            }, i * 100);
        }
        
        setTimeout(() => {
            yesBtn.classList.remove('wave', 'neon-glow');
        }, 3000);
        
        typedKeys = [];
    }
});

// Smooth scroll behavior and prevent unwanted scrolling
window.addEventListener('load', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.style.overflow = 'hidden';
});

// Double click anywhere for surprise
let doubleClickTimer;
let clickCounter = 0;

document.addEventListener('click', function(e) {
    clickCounter++;
    
    if (clickCounter === 1) {
        doubleClickTimer = setTimeout(() => {
            clickCounter = 0;
        }, 300);
    } else if (clickCounter === 2) {
        clearTimeout(doubleClickTimer);
        clickCounter = 0;
        
        // Create surprise burst at click location
        if (!e.target.closest('button')) {
            for (let i = 0; i < 10; i++) {
                const surprise = document.createElement('div');
                surprise.innerHTML = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
                surprise.style.position = 'fixed';
                surprise.style.left = e.clientX + 'px';
                surprise.style.top = e.clientY + 'px';
                surprise.style.fontSize = '20px';
                surprise.style.zIndex = '9999';
                surprise.style.animation = 'particleRise 1.5s ease-out forwards';
                document.body.appendChild(surprise);
                setTimeout(() => surprise.remove(), 1500);
            }
        }
    }
});

// Hold space bar for 2 seconds for mega effect
let spaceHoldTimer;
let spacePressed = false;

document.addEventListener('keydown', function(e) {
    if (e.code === 'Space' && !spacePressed) {
        spacePressed = true;
        e.preventDefault();
        spaceHoldTimer = setTimeout(() => {
            // Mega space effect!
            activateDiscoMode();
            shakeScreen();
            
            // Explosion of everything!
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const emoji = ['💖', '💕', '✨', '💫', '🌟', '⭐', '💗', '💓'][Math.floor(Math.random() * 8)];
                    const el = document.createElement('div');
                    el.innerHTML = emoji;
                    el.style.position = 'fixed';
                    el.style.left = Math.random() * 100 + '%';
                    el.style.top = Math.random() * 100 + '%';
                    el.style.fontSize = (15 + Math.random() * 30) + 'px';
                    el.style.animation = 'particleRise 2s ease-out forwards';
                    el.style.zIndex = '9999';
                    document.body.appendChild(el);
                    setTimeout(() => el.remove(), 2000);
                }, i * 20);
            }
        }, 2000);
    }
});

document.addEventListener('keyup', function(e) {
    if (e.code === 'Space') {
        clearTimeout(spaceHoldTimer);
        spacePressed = false;
    }
});

// Mobile: Shake device for effect (if supported)
if (window.DeviceMotionEvent) {
    let lastShake = 0;
    let shakeThreshold = 15;
    
    window.addEventListener('devicemotion', function(e) {
        const acc = e.accelerationIncludingGravity;
        const currentTime = new Date().getTime();
        
        if ((currentTime - lastShake) > 1000) {
            const deltaX = Math.abs(acc.x);
            const deltaY = Math.abs(acc.y);
            const deltaZ = Math.abs(acc.z);
            
            if (deltaX > shakeThreshold || deltaY > shakeThreshold || deltaZ > shakeThreshold) {
                lastShake = currentTime;
                
                // Device shaken! Create effect
                shakeScreen();
                for (let i = 0; i < 15; i++) {
                    setTimeout(() => {
                        const heart = document.createElement('div');
                        heart.innerHTML = '💕';
                        heart.style.position = 'fixed';
                        heart.style.left = Math.random() * 100 + '%';
                        heart.style.top = -30 + 'px';
                        heart.style.fontSize = '25px';
                        heart.style.animation = 'rose-fall 2s linear';
                        heart.style.zIndex = '999';
                        document.body.appendChild(heart);
                        setTimeout(() => heart.remove(), 2000);
                    }, i * 100);
                }
            }
        }
    });
}
