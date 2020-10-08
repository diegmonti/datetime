function displayTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    m = formatNumber(m);
    s = formatNumber(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(displayTime, 500);
}

function stopwatchToggle() {

}

function stopwatchReset() {

}

function formatNumber(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function () {
    displayTime();
};
