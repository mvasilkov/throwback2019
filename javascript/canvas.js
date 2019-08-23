"use strict";
/// <reference path="throwback2019.d.ts" />
function setupCanvas(canvasId) {
    const canvas = document.getElementById(canvasId);
    canvas.width = SCREEN_WIDTH;
    canvas.height = SCREEN_HEIGHT;
    return canvas.getContext('2d');
}
