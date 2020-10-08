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

function displayDate() {
    let now = new Date();
    let y = now.getFullYear();
    let m = now.getMonth();
    let d = now.getDay();
    m = formatNumber(m);
    d = formatNumber(d);
    document.getElementById('date').innerHTML = y + "-" + m + "-" + d;
    setTimeout(displayDate, 500);
}

function formatNumber(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

window.onload = function () {
    displayTime();
    displayDate();
};
