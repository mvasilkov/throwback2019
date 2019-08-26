/// <reference path="throwback2019.d.ts" />

interface IVec2 {
    x: number
    y: number
}

interface IBox {
    top: [IVec2, IVec2]
    right: [IVec2, IVec2]
    bottom: [IVec2, IVec2]
    left: [IVec2, IVec2]
}

type Edge = keyof IBox

interface Collide1 extends IVec2 {
    collide: true
    x: number
    y: number
    a: number
    b: number
    edge: string
}

interface Collide2 {
    collide: false
}

type Collide = Collide1 | Collide2

function lineLine(p1: IVec2, p2: IVec2, p3: IVec2, p4: IVec2, edge: Edge): Collide {
    const a = ((p4.x - p3.x) * (p1.y - p3.y) - (p4.y - p3.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y))
    const b = ((p2.x - p1.x) * (p1.y - p3.y) - (p2.y - p1.y) * (p1.x - p3.x)) /
        ((p4.y - p3.y) * (p2.x - p1.x) - (p4.x - p3.x) * (p2.y - p1.y))

    return a >= 0 && a <= 1 && b >= 0 && b <= 1 ? {
        collide: true,
        x: p1.x + (a * (p2.x - p1.x)),
        y: p1.y + (a * (p2.y - p1.y)),
        a,
        b,
        edge,
    } : { collide: false }
}

function putCollide(a: Collide, points: Collide1[]) {
    let count
    if (a.collide && ((count = points.length) == 0 ||
        points[count - 1].x != a.x ||
        points[count - 1].y != a.y)) points.push(a)
}

function lineBox(p1: IVec2, p2: IVec2, box: IBox): Collide1[] {
    let points: Collide1[] = []

    putCollide(lineLine(p1, p2, box.top[0], box.top[1], 'top'), points)
    putCollide(lineLine(p1, p2, box.right[0], box.right[1], 'right'), points)
    putCollide(lineLine(p1, p2, box.bottom[0], box.bottom[1], 'bottom'), points)
    putCollide(lineLine(p1, p2, box.left[0], box.left[1], 'left'), points)

    return points
}
