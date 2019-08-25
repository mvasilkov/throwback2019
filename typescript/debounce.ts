/// <reference path="throwback2019.d.ts" />

type Proc = () => void

function debounce(proc: Proc, wait: number): Proc {
    let waiting = false
    let lastCall: number

    function wrapped() {
        const sleeping = Date.now() - lastCall

        if (sleeping < wait) {
            setTimeout(wrapped, wait - sleeping)
            return
        }

        waiting = false
        proc()
    }

    return function () {
        lastCall = Date.now()

        if (waiting) return

        waiting = true
        setTimeout(wrapped, wait)
    }
}
