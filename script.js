let headerjs = document.getElementById('header');
let togglebutton = document.getElementById('toggleburger');
let slidenavbar = document.getElementById('slide-navbar');
let footeroverlay = document.getElementById('footer-overlay')

togglebutton.addEventListener('click', function(){
    
    slidenavbar.classList.add('appear');
    
    

    // document.addEventListener('mouseup', function(e) {
    //     var container = document.getElementById('overlay');
    //     if (!container.contains(e.target)) {
    //         headerjs.classList.remove('disappear');
    //         slidenavbar.classList.remove('appear');
    //         footeroverlay.classList.remove('appear');
    //     }
    // });


})