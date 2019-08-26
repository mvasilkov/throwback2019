/// <reference path="throwback2019.d.ts" />

function render() {
    canvas.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

    if (pointer.active) {
        canvas.fillStyle = '#af6'
        canvas.fillRect(pointer.x - 30, pointer.y - 30, 60, 60)
    }
}
