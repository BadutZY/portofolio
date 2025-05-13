// Toggle Navigation
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        const navLinksItems = document.querySelectorAll('.nav-links li a');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });

        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Scroll to section
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Active Navigation Link
        const sections = document.querySelectorAll('section');
        
        window.addEventListener('scroll', () => {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                
                if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id');
                }
            });
            
            navLinksItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Back to Top Button
        const backToTopButton = document.querySelector('.back-to-top');
        
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Fade In Animation
        const fadeElements = document.querySelectorAll('.fade-in');
        
        function checkFade() {
            fadeElements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const viewportHeight = window.innerHeight;
                
                if (elementPosition < viewportHeight - 100) {
                    element.classList.add('show');
                }
            });
        }
        
        window.addEventListener('scroll', checkFade);
        window.addEventListener('load', checkFade);

        // Typing Effect
        const typingElement = document.querySelector('.hero-content h1 span');
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        function typing() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        
        setTimeout(typing, 1000);