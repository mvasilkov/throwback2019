/// <reference path="throwback2019.d.ts" />

class Box implements IBox {
    p1: IVec2
    p2: IVec2
    p3: IVec2
    p4: IVec2

    top: [IVec2, IVec2]
    right: [IVec2, IVec2]
    bottom: [IVec2, IVec2]
    left: [IVec2, IVec2]

    collide1: Collide
    collide2: Collide

    constructor(pos: IVec2, size: number) {
        this.p1 = { x: pos.x - size, y: pos.y - size }
        this.p2 = { x: pos.x + size, y: pos.y - size }
        this.p3 = { x: pos.x + size, y: pos.y + size }
        this.p4 = { x: pos.x - size, y: pos.y + size }

        this.top = [this.p1, this.p2]
        this.right = [this.p2, this.p3]
        this.bottom = [this.p3, this.p4]
        this.left = [this.p4, this.p1]

        this.collide1 = { collide: false }
        this.collide2 = { collide: false }
    }

    render(canvas: CanvasRenderingContext2D) {
        canvas.fillStyle = '#707070'
        canvas.fillRect(this.p1.x, this.p1.y, this.p3.x - this.p1.x, this.p3.y - this.p1.y)

        canvas.fillStyle = '#f77'
        if (this.collide1.collide)
            canvas.fillRect(this.collide1.x - 10, this.collide1.y - 10, 20, 20)
        if (this.collide2.collide)
            canvas.fillRect(this.collide2.x - 10, this.collide2.y - 10, 20, 20)

        if (this.collide1.collide && this.collide2.collide) {
            canvas.lineWidth = 2
            canvas.strokeStyle = '#f77'
            canvas.moveTo(this.collide1.x, this.collide1.y)
            canvas.lineTo(this.collide2.x, this.collide2.y)
            canvas.stroke()
        }
    }
}
