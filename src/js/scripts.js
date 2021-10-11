//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

(function($) {
    "use strict"; // Start of use strict
    
    // No JS
  
  })(jQuery);

function emailNotification() {
        
    console.log('email function');
    var name = document.body.querySelector('#name').value;
    var email = document.body.querySelector('#email').value;
    var phone = document.body.querySelector('#phone').value;
    var message = document.body.querySelector('#message').value;
    console.log(name);        
    console.log(email);        
    console.log(phone);        
    console.log(message);
    //  https://ebc-email-fn.azurewebsites.net/api/EmailFunction?name=$('#email-input')[0].value
  var  response = $.getJSON('https://ebc-email-fn.azurewebsites.net/api/EmailFunction?callback=?', {
    name:name,
    email:email,
    phone:phone,
    message:message
  });
};
