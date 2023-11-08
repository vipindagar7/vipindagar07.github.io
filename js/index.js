const menuElements = document.querySelectorAll('.menu-links');

    menuElements.forEach(link => {
        link.addEventListener('click' , function (e) {   
            e.preventDefault()

            menuElements.forEach(link => {
            link.classList.remove('active')
            
            });

            link.classList.add('active')

            const target = link.getAttribute('href');
            const sectionElement = document.querySelector(target);
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            
            if (window.scrollY > 1) {
               console.log('scrolled')
            }



            
        })
    });


