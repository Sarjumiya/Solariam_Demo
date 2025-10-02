let icon = document.querySelector(".Customers-right span");
let videoDiv = document.querySelector(".Customers-right-video");
let closeIcon = document.querySelector(".Customers-right-video-1 i")

icon.addEventListener("click", function(){
    videoDiv.style.display = "flex";
})

closeIcon.addEventListener("click" , function(){
    videoDiv.style.display = "none";

})