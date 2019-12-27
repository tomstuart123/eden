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