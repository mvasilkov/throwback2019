"use strict";
/// <reference path="throwback2019.d.ts" />
function debounce(proc, wait) {
    let waiting = false;
    let lastCall;
    function wrapped() {
        const sleeping = Date.now() - lastCall;
        if (sleeping < wait) {
            setTimeout(wrapped, wait - sleeping);
            return;
        }
        waiting = false;
        proc();
    }
    return function () {
        lastCall = Date.now();
        if (waiting)
            return;
        waiting = true;
        setTimeout(wrapped, wait);
    };
}
