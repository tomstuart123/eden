// TO DO
    // FRONT END
        // Pre-load
            // Splash page - EdenCup - Love yourself and the planet
        // HeaderSection
            // Add nav bar - Either dropdown or sections
        // URGENT About section
            // Update Text
        // URGENT Shop section
            // update text
            // Add menstrual cup definition
        // URGENT BENEFITS / HOW TO / Contact
            // update text
        // Switch Toggle
        // Toggle animation / button animation 
        // Proper contact form
        // Quote section input
        //

    // BACK END
        // pay for shopify
        // style page
        // link it all together

const portfolioApp = {};

portfolioApp.pageLoad = function () {
}

portfolioApp.events = function () {
    // in skills section, toggle the developer skillset for the product skill set on click
    $('#switch1').on('click', function (event) {
        // toggle the titles first
        // console.log('clocked')
        // $('.skills__subHeaderOne').toggleClass('skills__subHeader--active');
        // $('.skills__subHeaderOne').toggleClass('skills__subHeader');
        // // then toggle the skills themselves and progress bars
        $('.benefitSection__toggleSectionOne').toggleClass('visuallyHidden');
        $('.benefitSection__toggleSectionTwo').toggleClass('visuallyHidden');
    })
    const $hamburger = $(".hamburger");
    const $dropdown = $(".dropdown");
    $hamburger.on("click", function (e) {
        console.log('clicked')
        $hamburger.toggleClass("is-active");
        $dropdown.toggleClass('dropdown-start')
    });

    // in portfolio section, toggle the developer portfolio for the product one on click
}


portfolioApp.init = function () {
    portfolioApp.events();
    portfolioApp.pageLoad();
}

// run init in jquery
$(function () {
    portfolioApp.init();
});