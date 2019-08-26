"use strict";
/// <reference path="throwback2019.d.ts" />
function lineLine(p1, p2, p3, p4) {
    const a = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
    const b = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y));
    return a >= 0 && a <= 1 && b >= 0 && b <= 1 ?
        { x: p1.x + (a * (p2.x - p1.x)), y: p1.y + (a * (p2.y - p1.y)) } : null;
}
