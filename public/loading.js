window.addEventListener('DOMContentLoaded', ()=>{
    var loadingTotal = document.querySelectorAll(".main")
    loadingTotal.style.display = "none"
})
window.addEventListener('load', function() {
    var load = document.querySelector(".Loading_Page")
    load.style.display = "none"
    lessFirstLoading.forEach(section => {
        section.removeAttribute("style")
    });
})