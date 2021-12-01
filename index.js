let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebarmain");
let sidebar2 = document.querySelector("#sidebar")
let searchbtn = document.querySelector("#searchbtn");

var lastScrollTop = 0;
title = document.getElementById("title");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop){
        title.style.opacity="0";
    }else{
        title.style.opacity="1";
    }
    lastScrollTop = scrollTop
})



btn.onclick = function(){
    sidebar.classList.toggle("active");
    sidebar2.classList.toggle("active");
}

searchbtn.onclick = function(){
    sidebar.classList.toggle("active");
    sidebar2.classList.toggle("active");
}

