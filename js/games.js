

function categoryGames() {
    document.getElementById('onload-category').style.display = "flex";
    setTimeout(() => {
        document.getElementById('games-category').style.display = "flex";
        document.getElementById('onload-category').style.display = "none";
    }, 1000);
    document.getElementById('title-Page').innerHTML = "Juegos";
}