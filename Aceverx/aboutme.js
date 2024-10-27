// Initialize Locomotive Scroll
// Initialize Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true,
});




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