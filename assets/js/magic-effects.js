/**
 * Magic Effects for Gran Biblioteca
 * Includes:
 * 1. Particle System (Fireflies/Dust) - Optimized for mobile
 * 2. Custom Cursor - Desktop only
 */

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initCustomCursor();
});

function initParticles() {
    // Create canvas overlay
    const canvas = document.createElement('canvas');
    canvas.id = 'magic-particles';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '0'; // Behind content but in front of bg
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];

    // Reduce particle count on mobile for performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.alpha = Math.random() * 0.5;
            this.fading = Math.random() > 0.5;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.fading) {
                this.alpha -= 0.005;
                if (this.alpha <= 0) {
                    this.alpha = 0;
                    this.fading = false;
                    this.reset();
                }
            } else {
                this.alpha += 0.005;
                if (this.alpha >= 0.5) this.fading = true;
            }

            if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
                this.reset();
            }
        }

        draw() {
            ctx.fillStyle = `rgba(200, 200, 255, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        resize();
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        animate();
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resize();
        // Re-check mobile status on resize if needed, but let's keep it simple
    });

    init();
}

function initCustomCursor() {
    // Disable on mobile/touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const cursor = document.createElement('div');
    cursor.classList.add('magic-cursor');
    document.body.appendChild(cursor);

    const follower = document.createElement('div');
    follower.classList.add('magic-cursor-follower');
    document.body.appendChild(follower);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;

        // Add a slight delay for the follower
        setTimeout(() => {
            follower.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        }, 50);
    });

    // Add visual states for clickable elements
    const clickables = document.querySelectorAll('a, button, .cursor-pointer');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovering');
            follower.classList.add('hovering');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovering');
            follower.classList.remove('hovering');
        });
    });
}
