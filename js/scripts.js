/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
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


function switch_lang() {
    let lang = getComputedStyle(document.getElementById("lang"), ':before').getPropertyValue('content');
    console.log("switching to: " + lang);
    if (lang === '"Ру"') {
        document.getElementsByTagName('html')[0].lang = 'en';
        document.getElementById("nav_name").innerHTML = "Sergey Kardash";
        document.getElementById("left_nav").innerHTML = `<li class="nav-item" ><a class="nav-link js-scroll-trigger about_link" href="#page-top" name="first_nav_link">About</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>`;
        // document.getElementsByName("first_nav_link")[0].classList.add("active");
        document.querySelectorAll(".about_link")[0].classList.add("active");
    } else {
        document.getElementsByTagName('html')[0].lang = 'ru';
        document.getElementById("nav_name").innerHTML = "Сергей Кардаш";
        document.getElementById("left_nav").innerHTML = `<li class="nav-item"><a class="nav-link js-scroll-trigger about_link" href="#page-top" name="first_nav_link">Кто я?</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Опыт</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Образование</a></li>
            <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Навыки</a></li>`;
        // document.getElementsByName("first_nav_link")[0].classList.add("active");
        document.querySelectorAll(".about_link")[0].classList.add("active");
    }
}

var my_number = "79775263853";
function whatsapp_link() {
    var md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile()) {
        // console.log("phone detected");
        // alert("you use phone!");
        document.getElementById("whatsapp_link").href = "whatsapp://send?phone=" + my_number;
    } else {
        // console.log("desktop detected");
        document.getElementById("whatsapp_link").href = "https://web.whatsapp.com/send?phone=" + my_number
        // https://web.whatsapp.com/send?phone=79775263853"

        // document.getElementById("whatsapp_link").href = "https://wa.me/" + my_number;
    }
};
whatsapp_link();

function findGetParameter(parameterName) {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

if (findGetParameter("lang") == 'ru') {
    document.getElementById('a').checked = true; // set toggle bar to Russian
    switch_lang();
} else if (findGetParameter("lang") == 'en') {
} else {
    //detect automatically
    var requestUrl = "http://ip-api.com/json";
    $.ajax({
        url: requestUrl,
        type: 'GET',
        success: function (json) {
            console.log("My country is: " + json.country);
            if (json.country === "Russia") {
                // console.log("Home, sweet home");
                document.getElementById('a').checked = true; // set toggle bar to Russian
                switch_lang();
            } else {
                // console.log("Hey foreigner, welcome!");
            }
        },
        error: function (err) {
            console.log("Request failed, error= " + err);
        }
    });
}
