/// <reference path="throwback2019.d.ts" />

function mainloop() {
    requestAnimationFrame(mainloop)

    render()
}

function startMainloop() {
    requestAnimationFrame(mainloop)
}
