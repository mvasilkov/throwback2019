"use strict";
/// <reference path="throwback2019.d.ts" />
const pointer = {
    active: false,
    x: 0,
    y: 0,
};
const pointerFollowing = [];
function setupPointer() {
    function setPos(event) {
        if (pointer.active)
            pointerFollowing.push({ x: pointer.x, y: pointer.y });
        else
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
