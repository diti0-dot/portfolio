        document.addEventListener('DOMContentLoaded', function() {
            const navItems = document.querySelectorAll('.nav-item');
            const contentSections = document.querySelectorAll('.content-section');
            
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove active classes
                    navItems.forEach(nav => nav.classList.remove('active'));
                    contentSections.forEach(section => {
                        section.classList.remove('active');
                    });
                    
                    // Add active class to clicked item and corresponding section
                    this.classList.add('active');
                    const targetId = this.getAttribute('data-target');
                    document.getElementById(targetId).classList.add('active');
                });
            });
            
            // Add more doodle decorations randomly
            const doodles = ['✏️', '📝', '📖', '🎨', '💡', '✨'];
            const sidebar = document.querySelector('.sidebar');
            for (let i = 0; i < 3; i++) {
                const doodle = document.createElement('div');
                doodle.className = 'doodle-decoration';
                doodle.style.top = Math.random() * 80 + 10 + '%';
                doodle.style.left = Math.random() * 80 + 10 + '%';
                doodle.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
                doodle.style.fontSize = Math.random() * 20 + 30 + 'px';
                doodle.textContent = doodles[Math.floor(Math.random() * doodles.length)];
                doodle.style.opacity = 0.1 + Math.random() * 0.1;
                sidebar.appendChild(doodle);
            }
        });
