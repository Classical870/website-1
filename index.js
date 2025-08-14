const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) =>{
    btn.addEventListener('click',() => {

        const resumedetails = document.querySelectorAll('.resume-detail');


        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
            btn.classList.add('active');

        resumedetails.forEach(detail =>{
            detail.classList.remove('active');
        });
            resumedetails[idx].classList.add('active');
           
    });
});



const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
});