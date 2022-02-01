function videoControl() {
    var element = document.getElementById('videoPlayer');

    document.addEventListener("fullscreenchange", function () {
        console.log("fullscreen");
        triggerLandscape(element);
    }, false);
    document.addEventListener("mozfullscreenchange", function () {
        console.log("mozfullscreen");
        triggerLandscape(element);
    }, false);
    document.addEventListener("webkitfullscreenchange", function () {
        console.log("webkitfullscreen");
        triggerLandscape(element);
    }, false);

}

function triggerLandscape(element) {
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
        makeLandscape();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
        makeLandscape();
    }
}

function makeLandscape() {
    // this works on android, not iOS
    if (screen.orientation && screen.orientation.lock) {
        screen.orientation.lock('landscape');
    }
}