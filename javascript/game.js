"use strict";
/// <reference path="throwback2019.d.ts" />
const box = new Box({ x: 200, y: 200 }, 60);
function updateCuts() {
    let a;
    if (pointer.active)
        a = pointer;
    else if (pointerFollowing.length)
        a = pointerFollowing.pop();
    else
        return;
    while (pointerFollowing.length) {
        const b = pointerFollowing.pop();
        if (a.x == b.x && a.y == b.y)
            continue;
        const things = lineBox(a, b, box);
        if (things.length && !box.collide1.collide)
            box.collide1 = things.pop();
        if (things.length && !box.collide2.collide)
            box.collide2 = things.pop();
        a = b;
    }
}
function render() {
    canvas.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
    if (pointer.active) {
        canvas.fillStyle = '#af6';
        canvas.fillRect(pointer.x - 30, pointer.y - 30, 60, 60);
    }
    updateCuts();
    box.render(canvas);
}
