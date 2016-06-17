var vid = document.getElementById("video-bg");
var pauseButton = document.querySelector("#pause-icon");

vid.play();

vid.addEventListener('ended', function() {
    vid.pause();
});

pauseButton.addEventListener("click", function() {
    if (vid.paused) {
        vid.play();
        pauseButton.setAttribute('icon', 'av:pause');
    } else {
        vid.pause();
        pauseButton.setAttribute('icon', 'av:play-arrow');
    }
});
