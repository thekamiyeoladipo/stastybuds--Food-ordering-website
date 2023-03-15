// Active Navbar
let nav = document.querySelector("navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    }else {
        nav.classList.remove("scroll-on")
    }
}

 

// Navbar Toggle
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

 


// Counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
            
        }, step);

    }
    counter("count-1", 0, 1028, 3000);
    counter("count-2", 100, 500, 2500);
    counter("count-3", 0, 3200, 3000);
    counter("count-4", 0, 1028, 3000);
 
});