function accessClicked() {
    const starts = document.querySelectorAll(".stars");
    const cover = document.querySelector("#cover");
    const music = document.querySelector("#music");
    const oneko = document.querySelector("#oneko");

    starts.forEach((star) => {
        star.removeAttribute("hidden");
    });
    cover.remove();
    oneko.removeAttribute("hidden");
    music.play();
}