document.addEventListener('DOMContentLoaded', () => {
    // 2. FAQ Accordion (Click Expand)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        questionBtn.addEventListener('click', () => {
            const isOpen = item.classList.contains('is-open');

            // Fecha todos os outros primeiro
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('is-open');
                otherItem.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Se não estava aberto, abre o clicado
            if (!isOpen) {
                item.classList.add('is-open');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

    // 3. Timeline Progress (Scroll Cinematico)
    const timelineNodes = document.querySelectorAll('.timeline-node');
    const timelineProgress = document.getElementById('timeline-progress');
    const timelineContainer = document.querySelector('.timeline-line');

    if (timelineNodes.length > 0 && timelineProgress && timelineContainer) {

        // Observer para Node points
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else if (entry.boundingClientRect.top > 0) {
                    // Remove estado se subiu o scroll
                    entry.target.classList.remove('is-active');
                }
            });
        }, {
            root: null,
            rootMargin: "-50% 0px -50% 0px" // Trigger center of viewport
        });

        timelineNodes.forEach(node => timelineObserver.observe(node));

        // Listener de Scroll para Linha Progressiva
        window.addEventListener('scroll', () => {
            const containerRect = timelineContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // O progresso vai guiado pelo centro da tela
            const scrollProgress = ((viewportHeight / 2) - containerRect.top) / containerRect.height;
            const percentage = Math.max(0, Math.min(100, scrollProgress * 100));
            timelineProgress.style.height = percentage + '%';
        }, { passive: true });

        // Força chamada inicial caso recarregue no meio da página
        window.dispatchEvent(new Event('scroll'));
    }

    // 4. Vanilla Tilt Effect for Bonus Pills (Cursor Mouse Parallax)
    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', handleTilt);
        el.addEventListener('mouseleave', resetTilt);
    });

    function handleTilt(e) {
        const item = e.currentTarget;
        const rect = item.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -5; // Max 5 deg
        const rotateY = ((x - centerX) / centerX) * 5;

        item.style.transform = `perspective(1000px) translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }

    function resetTilt(e) {
        const item = e.currentTarget;
        item.style.transform = `perspective(1000px) translateY(0) rotateX(0deg) rotateY(0deg)`;

        // Restaura caso perca o hover e remova o hover effect do css regular
        setTimeout(() => {
            if (!item.matches(':hover')) {
                item.style.transform = '';
            }
        }, 300);
    }

    // 5. Oferta Countdown Timer (15 Minutes Loop)
    const countdownEl = document.getElementById('countdown');
    if (countdownEl) {
        let timeInSeconds = 15 * 60; // 15 minutos em segundos

        function updateTimer() {
            const minutes = Math.floor(timeInSeconds / 60);
            const seconds = timeInSeconds % 60;

            countdownEl.innerHTML = `
                <div class="time-block"><span>${String(minutes).padStart(2, '0')}</span><small>MIN</small></div>
                <span class="colon">:</span>
                <div class="time-block"><span>${String(seconds).padStart(2, '0')}</span><small>SEG</small></div>
            `;

            if (timeInSeconds > 0) {
                timeInSeconds--;
            } else {
                timeInSeconds = 15 * 60; // Loopback start when hits 0
            }
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    }

    // 6. Sistema Inteligente de Partículas (Performance Focus via Observer)
    const particulasContainer = document.getElementById('particulas-bg');
    if (particulasContainer) {
        let isSystemActive = false;

        const particleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !isSystemActive) {
                    isSystemActive = true;
                    // Gera 25 partículas distribuídas em pontos aleatórios
                    for (let i = 0; i < 25; i++) {
                        setTimeout(() => {
                            const particle = document.createElement('div');
                            particle.classList.add('particle');

                            // Propriedades randomizadas para caos estético natural
                            const size = Math.random() * 4 + 1; // Entre 1px e 5px
                            particle.style.width = size + 'px';
                            particle.style.height = size + 'px';

                            particle.style.left = Math.random() * 100 + '%';

                            const duration = Math.random() * 10 + 10; // 10s a 20s de animação
                            particle.style.animationDuration = duration + 's';

                            const delay = Math.random() * 5;
                            particle.style.animationDelay = delay + 's';

                            particulasContainer.appendChild(particle);

                            // Auto-limpeza após conclusão da jornada visual para aliviar memory bind
                            setTimeout(() => { particle.remove(); }, (duration + delay) * 1000);
                        }, i * 200); // Deploy fracionado para não engolar a CPU (1 de cada vez)
                    }
                }
            });
        }, { threshold: 0.1 });

        particleObserver.observe(document.querySelector('.por-que'));
    }
});
