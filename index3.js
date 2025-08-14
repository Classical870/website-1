/* const navLinks =  document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sectionLink = document.querySelector('section');

const activePage = () => {
    const  header = document.querySelector('header');
    const barsBox = document.querySelector('bars-animation');
    

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    
    navLinks.forEach(Link =>{
        Link.classList.remove('active');
    });
    

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    },1100);
}


navLinks.forEach((Link,idx) => {
    Link.addEventListener('click',() =>{
        if (!Link.classList.contains('active')) {
            activePage();

            Link.classList.add('active');
        }
    });
});


logoLink.addEventListener('click', () =>{
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');
    }
});

*/

