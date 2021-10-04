const subcc = document.getElementById('subcc');
function reloadPage() {
    document.getElementById('load-page').style.width = "100%";
    document.getElementById('load-page').style.left = "0";
    setTimeout(() => {
        document.getElementById('load-page').style.width = "0%";
        document.getElementById('load-page').removeAttribute("style", "left");
        document.getElementById('load-page').style.right = "0";
    }, 1000);
    for (let x = 0; x < subcc.childElementCount; x++) {
        subcc.children[x].style.display = "none";
    }
}
window.addEventListener('load', function(){
    setTimeout(() => {
        document.getElementById('onload-category').style.display = "none";
    }, 1000);
    document.getElementById('funtions-category').style.display = "flex";
});
