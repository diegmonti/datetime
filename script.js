let utc = false;
let date = false;

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
    m = formatNumber(m);
    s = formatNumber(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    setTimeout(displayTime, 500);
}

function displayDate() {
    let now = new Date();
    let y, m, d;
    if (utc) {
        y = now.getUTCFullYear();
        m = now.getUTCMonth();
        d = now.getUTCDay();
    } else {
        y = now.getFullYear();
        m = now.getMonth();
        d = now.getDay();
    }
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

function showDate() {
    document.getElementById('flex-time').classList.add('flex-time');
    document.getElementById('flex-date').style.display = 'flex';
}

window.onload = function () {
    if (window.location.href.includes('utc=true')) {
        utc = true;
    }
    if (window.location.href.includes('date=true')) {
        date = true;
    }
    if (utc && date) {
        document.title = 'utcdatetime';
    } else if (utc && !date) {
        document.title = 'utctime';
    } else if (!utc && date) {
        document.title = 'localdatetime';
    } else {
        document.title = 'localtime';
    }
    displayTime();
    if (date) {
        showDate();
        displayDate();
    }
};
