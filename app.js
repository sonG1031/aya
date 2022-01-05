const cntText = document.querySelector("#cnt-num");
const minsub = document.querySelector("img");
const page = document.querySelector("body");
const audio = new Audio();
let cnt = 0;
let state = false;

audio.src = "sounds/헉.mp3";
cntText.innerHTML = `${cnt}`;

function isMobile() {
    let user = navigator.userAgent;
    let is_mobile = false;
    if (
        user.indexOf("iPhone") > -1 ||
        user.indexOf("Android") > -1 ||
        user.indexOf("iPad") > -1 ||
        user.indexOf("iPod") > -1
    ) {
        is_mobile = true;
    }
    return is_mobile;
}

function changeImgDown() {
    audio.play();
    cnt += 1;
    minsub.src = "img/after.png";
    cntText.innerHTML = `+${cnt}`;
}
function changeImgUp() {
    minsub.src = "img/before.png";
}

function changeImgKeydown() {
    if (!state) {
        audio.play();
        state = true;
        cnt += 1;
        minsub.src = "img/after.png";
        cntText.innerHTML = `+${cnt}`;
    }
}
function changeImgKeyup() {
    minsub.src = "img/before.png";
    state = false;
}

if (isMobile()) {
    page.addEventListener("touchstart", changeImgDown);
    page.addEventListener("touchend", changeImgUp);
} else {
    page.addEventListener("mousedown", changeImgDown);
    page.addEventListener("mouseup", changeImgUp);
    page.addEventListener("keydown", changeImgKeydown);
    page.addEventListener("keyup", changeImgKeyup);
}
