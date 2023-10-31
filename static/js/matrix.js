const canvas = document.getElementById('canv');
canvas.style.position = "absolute"
canvas.style.zIndex = "-1"
const ctx = canvas.getContext('2d');

const w = canvas.width = document.body.clientWidth;
const h = canvas.height = document.body.clientWidth;
const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

function matrix () {
    ctx.fillStyle = '#0001';
    ctx.fillRect(0, 0, w, h);
    
    ctx.fillStyle = '#0f0';
    ctx.font = '10pt monospace';
    
    ypos.forEach((y, ind) => {
        const text = String.fromCharCode(Math.random() * 128);
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
        else ypos[ind] = y + 20;
    });
}