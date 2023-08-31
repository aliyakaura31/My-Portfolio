const profilePic = document.querySelector('.profile_pic');

profilePic.addEventListener('contextmenu', (e) => {
    e.preventDefault();
})

profilePic.addEventListener("mousedown", (e) => {
    e.preventDefault();
})
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    let top = window.scrollY;
    let header = document.querySelector('header');
    header.classList.toggle('sticky', top > 100);
    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                // document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            let activeLink = document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            if(activeLink) {
                activeLink.classList.add('active');
            }
        }

    });

    
}