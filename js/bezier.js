let canvas = document.querySelector('#canvas')
let display = document.querySelector('#display')
canvas.setAttribute('width', canvas.parentElement.offsetWidth)
canvas.setAttribute('height', canvas.parentElement.scrollHeight)
let ctx = canvas.getContext("2d")
let path = ctx.beginPath()
//ctx.quadraticCurve
//ctx.moveTo(20, 20);
//ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
ctx.stroke();
let ppPoints = []
let addPointTo = e => {
    if (e.touches.length > 0) {
        let touch = e.touches[0]
        display.innerHTML = touch.clientX + " " + touch.clientY
        if (ppPoints.length < 6) {
            ppPoints.push(touch.clientX)
            ppPoints.push(touch.clientY)
        }
        if (ppPoints.length == 6) {
            console.log(ppPoints)
            ctx.bezierCurveTo.apply(ctx, ppPoints)
            ctx.stroke()
            ppPoints.splice(0, ppPoints.length - 4)
        }
    }
}
window.addEventListener("touchstart", addPointTo, false)
        //window.addEventListener("touchmove", addPointTo, false)
        // window.addEventListener("resize",()=>{
        //     canvas.setAttribute('width',canvas.offsetWidth)
        // },false)