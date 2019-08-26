/// <reference path="throwback2019.d.ts" />

function updateCuts() {
    let a: IVec2
    if (pointer.active) a = pointer
    else if (pointerFollowing.length) a = pointerFollowing.pop()!
    else return

    while (pointerFollowing.length) {
        let b = pointerFollowing.pop()!
        if (a.x == b.x && a.y == b.y) continue
    }
}

function render() {
    canvas.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT)

    if (pointer.active) {
        canvas.fillStyle = '#af6'
        canvas.fillRect(pointer.x - 30, pointer.y - 30, 60, 60)
    }

    updateCuts()
}
