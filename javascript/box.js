"use strict";
/// <reference path="throwback2019.d.ts" />
class Box {
    constructor(pos, size) {
        this.p1 = { x: pos.x - size, y: pos.y - size };
        this.p2 = { x: pos.x + size, y: pos.y - size };
        this.p3 = { x: pos.x + size, y: pos.y + size };
        this.p4 = { x: pos.x - size, y: pos.y + size };
        this.top = [this.p1, this.p2];
        this.right = [this.p2, this.p3];
        this.bottom = [this.p3, this.p4];
        this.left = [this.p4, this.p1];
        this.collide1 = { collide: false };
        this.collide2 = { collide: false };
        this.dead = false;
    }
    putCollide(a) {
        if (this.dead)
            return;
        if (this.collide1.collide) {
            if (Math.pow((this.collide1.x - a.x), 2) + Math.pow((this.collide1.y - a.y), 2) > 9) {
                this.collide2 = a;
                this.dead = true;
            }
        }
        else
            this.collide1 = a;
    }
    collidePoint(collide) {
        const p1 = this[collide.edge][0];
        const p2 = this[collide.edge][1];
        return {
            x: p1.x + (collide.b * (p2.x - p1.x)),
            y: p1.y + (collide.b * (p2.y - p1.y)),
        };
    }
    render(canvas) {
        canvas.fillStyle = '#707070';
        canvas.fillRect(this.p1.x, this.p1.y, this.p3.x - this.p1.x, this.p3.y - this.p1.y);
        canvas.fillStyle = '#f77';
        // if (this.collide1.collide)
        //     canvas.fillRect(this.collide1.x - 10, this.collide1.y - 10, 20, 20)
        // if (this.collide2.collide)
        //     canvas.fillRect(this.collide2.x - 10, this.collide2.y - 10, 20, 20)
        if (this.collide1.collide) {
            const p = this.collidePoint(this.collide1);
            canvas.fillRect(p.x - 10, p.y - 10, 20, 20);
        }
        if (this.collide2.collide) {
            const p = this.collidePoint(this.collide2);
            canvas.fillRect(p.x - 10, p.y - 10, 20, 20);
        }
        if (this.collide1.collide && this.collide2.collide) {
            canvas.lineWidth = 2;
            canvas.strokeStyle = '#f77';
            canvas.moveTo(this.collide1.x, this.collide1.y);
            canvas.lineTo(this.collide2.x, this.collide2.y);
            canvas.stroke();
        }
    }
}
