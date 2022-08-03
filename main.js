const $canvas = document.querySelector("#draw")
const ctx = $canvas.getContext("2d")
const $drawWidth = document.querySelector("input")

$canvas.width = window.innerWidth
$canvas.height = window.innerHeight

ctx.strokeStyle = "#BADA55"
ctx.lineJoin = "round"
ctx.lineCap = "round"
ctx.lineWidth = 100
//ctx.globalCompositeOperation = "multiply"

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let drawWidth = 0

function draw(e) {
    if (!isDrawing) {
        return
    }
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.lineWidth = drawWidth
    lastX = ctx.beginPath(e.offsetX)
    lastY = ctx.beginPath(e.offsetY)
    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    hue++
}

$canvas.addEventListener("mousemove", draw)

$canvas.addEventListener("mousedown", () => isDrawing = true)
$canvas.addEventListener("mouseup", () => isDrawing = false)
//$canvas.addEventListener("mouseout", () => isDrawing = false)
$drawWidth.addEventListener("change", () => drawWidth = $drawWidth.value)
