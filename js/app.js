window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        var navScroll = document.getElementById('nav');
        navScroll.classList.add("fixed");
    } else {
        navScroll = document.getElementById('nav');
        navScroll.classList.remove("fixed");
    }


});

let p1_counter = 0;
let p2_counter = 0;
let p3_counter = 0;
let p4_counter = 0;

window.addEventListener("scroll", function () {
    if (window.scrollY > 594) {
        let p_1 = setInterval(() => {
            if (p1_counter >= 95) {
                clearInterval(p_1)
            } else {
                document.querySelectorAll('.progress-bar')[0].style.width = `${p1_counter++}%`;
            }
        }, 100)
        let p_2 = setInterval(() => {
            if (p2_counter >= 85) {
                clearInterval(p_2)
            } else {
                document.querySelectorAll('.progress-bar')[1].style.width = `${p2_counter++}%`;
            }
        }, 100)
        let p_3 = setInterval(() => {
            if (p3_counter >= 95) {
                clearInterval(p_3)
            } else {
                document.querySelectorAll('.progress-bar')[2].style.width = `${p3_counter++}%`;
            }
        }, 100)
        let p_4 = setInterval(() => {
            if (p4_counter >= 100) {
                clearInterval(p_4)
            } else {
                document.querySelectorAll('.progress-bar')[3].style.width = `${p4_counter++}%`;
            }
        }, 100)
    }

    console.log(window.pageYOffset)
});


function navBack() {
    var nav = document.getElementById('nav').classList.toggle("change");
}

var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function () {
    if (this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}