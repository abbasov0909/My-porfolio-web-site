window.addEventListener("scroll", function() {
    var navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed", window.scrollY > 5);
    
});

let p1_counter = 0; 
let p2_counter = 0; 
let p3_counter = 0; 
let p4_counter = 0;

window.addEventListener("scroll", function() {
            if (window.scrollY  > 594) {
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
                    if (p3_counter >= 10) {
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


function navBack(){
    var nav = document.getElementById('nav').classList.toggle("change");
}

