let utc = false;
let date = false;
let stopwatch = false;

function displayTime() {
    let now = new Date();
    let h, m, s;
    if (utc) {
        h = now.getUTCHours();
        m = now.getUTCMinutes();
        s = now.getUTCSeconds();
    } else {
        h = now.getHours();
        m = now.getMinutes();
        s = now.getSeconds();
    }
    printTime(h, m, s);
    setTimeout(displayTime, 500);
}

function displayDate() {
    let now = new Date();
    let y, m, d;
    if (utc) {
        y = now.getUTCFullYear();
        m = now.getUTCMonth() + 1;
        d = now.getUTCDate();
    } else {
        y = now.getFullYear();
        m = now.getMonth() + 1;
        d = now.getDate();
    }
    m = formatNumber(m);
    d = formatNumber(d);
    document.getElementById('date').innerHTML = y + "-" + m + "-" + d;
    setTimeout(displayDate, 500);
}

function displayStopwatch() {
    let diff = (new Date() - stopwatch) / 1000;
    let h, m, s;
    h = Math.floor((diff / 3600) % 24) ;
    m = Math.floor((diff / 60) % 60);
    s = Math.floor(diff % 60);
    printTime(h, m, s);
    setTimeout(displayStopwatch, 500);
}

function printTime(h, m, s) {
    h = formatNumber(h);
    m = formatNumber(m);
    s = formatNumber(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
}

function formatNumber(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function showDate() {
    document.getElementById('flex-time').classList.add('flex-time');
    document.getElementById('flex-date').style.display = 'flex';
}

window.onload = function () {
    if (window.location.href.includes('stopwatch=true')) {
        stopwatch = new Date();
    }
    if (window.location.href.includes('utc=true')) {
        utc = true;
    }
    if (window.location.href.includes('date=true')) {
        date = true;
    }
    if (stopwatch) {
        document.title = 'stopwatch';
    } else if (utc && date) {
        document.title = 'utcdatetime';
    } else if (utc && !date) {
        document.title = 'utctime';
    } else if (!utc && date) {
        document.title = 'localdatetime';
    } else {
        document.title = 'localtime';
    }
    if (stopwatch) {
        displayStopwatch();
    } else {
        displayTime();
        if (date) {
            showDate();
            displayDate();
        }
    }
};
