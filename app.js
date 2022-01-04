const cntText = document.querySelector("#cnt-num");
const minsub = document.querySelector("img");
const page = document.querySelector("body");

let cnt = 0;

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
    cnt += 1;
    minsub.src = "img/after.png";
    cntText.innerHTML = `+${cnt}`;
}
function changeImgUp() {
    minsub.src = "img/before.png";
}

if (isMobile()) {
    page.addEventListener("touchstart", changeImgDown);
    page.addEventListener("touchend", changeImgUp);
} else {
    page.addEventListener("mousedown", changeImgDown);
    page.addEventListener("mouseup", changeImgUp);
    page.addEventListener("keypress", changeImgDown);
    page.addEventListener("keyup", changeImgUp);
}
