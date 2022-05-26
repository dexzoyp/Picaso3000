var phase = 0;
var rayCount = 3;

function locateRay(number, count, x, y, phase) {
    return [x + Math.cos(number / count * 2 * Math.PI + phase / 10) * 20 * (3 * Math.sin(phase)),
    y + Math.sin(number / count * 2 * Math.PI + phase / 10) * 20 * (3 * Math.sin(phase))];
}

function drawSymBrush(mouseX, mouseY) {
    phase += Math.PI / 20;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(oldP[0], oldP[1]);
    ctx.lineTo(mouseX, mouseY);
    ctx.stroke();
    for (i = 0; i < rayCount; i++) {
        p1 = locateRay(i, rayCount, oldP[0], oldP[1], phase - Math.PI / 20);
        p2 = locateRay(i, rayCount, mouseX, mouseY, phase);
        ctx.strokeStyle = `rgb(
            ${i * 45 + mouseY / 2},
            ${255 - i * 25},
            ${150 - i * 25 + mouseX / 2})`;
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
    }
    oldP = [mouseX, mouseY];
}