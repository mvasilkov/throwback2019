"use strict";
/// <reference path="throwback2019.d.ts" />
const pointer = {
    active: false,
    x: 0,
    y: 0,
};
function setupPointer() {
    function setPos(event) {
        pointer.active = true;
        pointer.x = event.offsetX;
        pointer.y = event.offsetY;
    }
    function clearPos(_event) {
        pointer.active = false;
    }
    const canvas = document.getElementById('canvas');
    canvas.addEventListener('mouseenter', setPos);
    canvas.addEventListener('mouseleave', clearPos);
    canvas.addEventListener('mousemove', setPos);
}
