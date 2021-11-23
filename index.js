let btn = document.querySelector("#btn");
let sidebar = document.querySelector(".sidebarmain");
let searchbtn = document.querySelector("#searchbtn");

btn.onclick = function(){
    sidebar.classList.toggle("active");
}

searchbtn.onclick = function(){
    sidebar.classList.toggle("active");
}
