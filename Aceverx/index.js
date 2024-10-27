const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});
const headingsAll = document.querySelectorAll(".headings .heading");
const imgone = document.querySelector("#img1");
const imgtwo = document.querySelector("#img2");
const imgthree = document.querySelector("#img3");
const line = document.querySelector('.line')
const updateimg = (index) =>{
    imgone.style.display = 'none';
    imgtwo.style.display = 'none';
    imgthree.style.display = 'none';
    if (index === 0) {
        imgone.style.display = "block";
    } else if (index === 1) {
        imgtwo.style.display = "block";
    } else {
        imgthree.style.display = "block";
    }
    line.style.top = `${index * 60}px`;
};
headingsAll.forEach((heading, index) => {
    heading.addEventListener('click', () => {
        updateimg(index);
    });
});


function navscroll(){
    let lastScrollTap = 0;
    const navBar = document.querySelector('.nav-bar');
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset;
        
        if (scrollTop > lastScrollTap)   // Scrolling down
        {   
            navBar.style.top = "-100px";  // Hide navbar
        } 
        else  // Scrolling up
        {
            navBar.style.top = "0";  // Show navbar
        }
        lastScrollTap = scrollTop;
    });
}  navscroll();


    function swiper(){
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 50,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
    }
    swiper();

    const menuIcon = document.querySelector(".menu-icon"); // Select the menu icon
    const menubox = document.querySelector(".menu-box"); // Select the menu box
    const closebtn = document.querySelector(".close")
    const openmenu = ()=>
    {
    if(menubox === "0")
    {menubox.style.left = "-100px";}
    else
    {menubox.style.left = "0";}
    }
    menuIcon.addEventListener("click",(openmenu));
    const closebar = ()=>
    {
        if(menubox.style.left = "0")
        {menubox.style.left = "-250px";}
        else
        {menubox.style.left = "0";}
    }
    closebtn.addEventListener("click",(closebar));





