"use strict";
/// <reference path="throwback2019.d.ts" />
function lineLine(p1, p2, p3, p4) {
    const a = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
    const b = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
    return a >= 0 && a <= 1 && b >= 0 && b <= 1 ? {
        collide: true,
        x: p1.x + (a * (p2.x - p1.x)),
        y: p1.y + (a * (p2.y - p1.y)),
    } : { collide: false };
}
function lineBox(p1, p2, box) {
    let things = [];
    for (let line of [box.top, box.right, box.bottom, box.left]) {
        const a = lineLine(p1, p2, line[0], line[1]);
        if (a.collide && (!things.length ||
            things[things.length - 1].x != a.x ||
            things[things.length - 1].y != a.y))
            things.push(a);
    }
    return things;
}
