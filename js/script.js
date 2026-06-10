/* ===================================
   RESTED ROOT CORP — Shared JavaScript
   Propuesta C: Sauce Sagrado
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ─── HEADER SCROLL EFFECT ───
    const header = document.getElementById('site-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                header.classList.remove('site-header--transparent');
                header.classList.add('site-header--solid');
            } else {
                header.classList.remove('site-header--solid');
                header.classList.add('site-header--transparent');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // initial state
    }

    // ─── HAMBURGER MENU ───
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');
    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navList.classList.toggle('active');
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on link click
        navList.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navList.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ─── SCROLL REVEAL ANIMATIONS ───
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length > 0) {
        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -60px 0px',
            threshold: 0.15
        };

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        revealElements.forEach(el => revealObserver.observe(el));
    }

    // ─── PARALLAX HERO BACKGROUND ───
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY;
            if (scrollPos < window.innerHeight) {
                heroBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
            }
        }, { passive: true });
    }

    // ─── TESTIMONIAL CAROUSEL ───
    const slidesContainer = document.getElementById('testimonial-slides');
    const dotsContainer = document.getElementById('testimonial-dots');
    const prevBtn = document.getElementById('testimonial-prev');
    const nextBtn = document.getElementById('testimonial-next');

    if (slidesContainer && dotsContainer) {
        const slides = slidesContainer.querySelectorAll('.testimonial-carousel__slide');
        const dots = dotsContainer.querySelectorAll('.testimonial-carousel__dot');
        let currentSlide = 0;
        let autoplayInterval;

        const goToSlide = (index) => {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentSlide = index;
            slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
        };

        if (prevBtn) prevBtn.addEventListener('click', () => {
            goToSlide(currentSlide - 1);
            resetAutoplay();
        });

        if (nextBtn) nextBtn.addEventListener('click', () => {
            goToSlide(currentSlide + 1);
            resetAutoplay();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(parseInt(dot.dataset.index));
                resetAutoplay();
            });
        });

        // Autoplay
        const startAutoplay = () => {
            autoplayInterval = setInterval(() => {
                goToSlide(currentSlide + 1);
            }, 5000);
        };

        const resetAutoplay = () => {
            clearInterval(autoplayInterval);
            startAutoplay();
        };

        startAutoplay();
    }

    // ─── BUTTON RIPPLE EFFECT ───
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // ─── ACTIVE NAV LINK ───
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav__link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('nav__link--active');
        }
    });

    // ─── SMOOTH SCROLL FOR HASH LINKS ───
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

});
