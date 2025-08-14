
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');
    const barsAnimation = document.querySelector('.bars-animation');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            navLinks.forEach(nav => nav.classList.remove('active'));

            link.classList.add('active');

            const targetId = link.getAttribute('href').substring(1)

            sections.forEach(section => section.classList.remove('active'));

             menuIcon.classList.toggle('bx-x');
            navBar.classList.toggle('active');

        
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.classList.add('active');
            }

    
            if (barsAnimation) {
                barsAnimation.classList.add('active');
            }
        });
    });
});
