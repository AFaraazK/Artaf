const canvas = document.getElementById('draw_window');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isDrawing = false;
let lineWidth = 5;

const draw = (e) => {
    if (!isDrawing) {
        return;
    }

    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
};

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;

    const rect = canvas.getBoundingClientRect();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
    ctx.stroke();
    ctx.beginPath();
});

canvas.addEventListener('mousemove', draw);

