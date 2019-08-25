/// <reference path="throwback2019.d.ts" />

function setupCanvas(canvasId: string): CanvasRenderingContext2D {
    const canvas = document.getElementById(canvasId) as HTMLCanvasElement
    canvas.width = SCREEN_WIDTH
    canvas.height = SCREEN_HEIGHT
    return canvas.getContext('2d')!
}

function setupResize() {
    const container = document.getElementById('container')!

    function setSize() {
        const rotate = innerHeight > innerWidth
        let w = rotate ? innerHeight : innerWidth
        let h = rotate ? innerWidth : innerHeight
        let scale, ws = w, hs = h

        if (w / h > SCREEN_RATIO)
            scale = (ws = h * SCREEN_RATIO) / SCREEN_WIDTH
        else
            scale = (hs = w / SCREEN_RATIO) / SCREEN_HEIGHT

        const tx = 0.5 * (w - ws) / scale
        const ty = 0.5 * (h - hs) / scale

        const t: string[] = rotate ? ['rotateZ(-90deg)'] : []
        t.push(`scale3d(${scale},${scale},1)`)
        // if (rotate) t.push(`translateX(-${SCREEN_WIDTH}px)`)
        t.push(`translate3d(${rotate ? -tx - SCREEN_WIDTH : tx}px,${ty}px,0)`)

        container.style.transform = t.join('')
    }

    addEventListener('resize', setSize)
    setSize()
}
