/* ************************* toggle icon navbar************************************* */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>
{
    menuIcon.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

/* ************************* Scroll Section Active Link **************************** */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>
{
    section.forEach(sec => 
    {
      let top = window.scrollY; 
      let offset = sec.offsetTop - 150;
      let height = sec. offsetHeight;
      let id = sec.getAttribute('id');
      
      if(top >= offset && top < offset + height)
      {
        navLinks.forEach.apply(links =>
        {
           links.classList.remove('active');
           document.querySelector('header nav a[href*=' + id +']').classList.add('active');
        });
      };
    });

    /* ************************* Sticky navbar **************************** */

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ************************* Remove toggle icon and navbar **************************** */

    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');


};

    /* ************************* Scroll reveal **************************** */

    ScrollReveal({ 
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    ScrollReveal().reveal('.home-content, heading', {origin:'top' });
    ScrollReveal().reveal('.home-img .services-container, .portfolio-box, .contact form', { origin:'button' });
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin:'left'});
    ScrollReveal().reveal('..home-contact p, .about-content', { origin:'right'});

        /* ************************* typed js **************************** */

        const typed = new Typed('.multiple-text', {
            strings: ['Full Stack Developer'],
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 100,
            loop: true,
        });

        document.getElementById("read-more-btn").addEventListener("click", function() {
            var fullBio = document.getElementById("full-bio");
            var readMoreBtn = document.getElementById("read-more-btn");
            if (fullBio.classList.contains("hidden")) {
                fullBio.classList.remove("hidden");
                readMoreBtn.innerText = "Read less";
            } else {
                fullBio.classList.add("hidden");
                readMoreBtn.innerText = "Read more";
            }
        });
        