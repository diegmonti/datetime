function displayTime() {
    let now = new Date();
    let h, m, s;
    if (window.location.href.includes('utc=true')) {
        document.title = 'utctime';
        h = now.getUTCHours();
        m = now.getUTCMinutes();
        s = now.getUTCSeconds();
    } else {
        h = now.getHours();
        m = now.getMinutes();
        s = now.getSeconds();
    }
    m = formatNumber(m);
    s = formatNumber(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(displayTime, 500);
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
