/// <reference path="throwback2019.d.ts" />

function setupPointer() {
    function setPos(event: MouseEvent) {
        console.log(event.offsetX, event.offsetY)
    }

    const container = document.getElementById('container')!
    container.addEventListener('mousemove', setPos)
}
