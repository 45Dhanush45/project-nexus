const sideNav = document.getElementById("side-nav");
const cross = document.getElementById("crs-mark");
const bar = document.getElementById("bar");

bar.addEventListener("click", ()=>{
    sideNav.style.display ="flex";
    bar.style.display ="none";
    cross.style.display ="flex";
})

cross.addEventListener("click", () => {
    sideNav.style.display = "none";
    bar.style.display ="flex";
    cross.style.display ="none"

});






