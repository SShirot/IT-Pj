// JavaScript code for drawing, erasing, clearing, and adjusting line width on the whiteboard
const canvas = document.getElementById('whiteboard');
const context = canvas.getContext('2d');
let drawing = false;
let erasing = false;
let lineWidth = 2; // Default line width

// Event listeners to handle drawing and erasing
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

// Event listeners for switching between drawing and erasing
document.getElementById('drawButton').addEventListener('click', () => {
    erasing = false;
    context.strokeStyle = 'black'; // Set color back to black (drawing color)
});
document.getElementById('eraseButton').addEventListener('click', () => {
    erasing = true;
    context.strokeStyle = 'white'; // Set color to white (background color, erasing)
});

// Event listener for clearing the canvas
document.getElementById('clearButton').addEventListener('click', clearCanvas);

// Event listener for adjusting line width
document.getElementById('lineWidth').addEventListener('input', (e) => {
    lineWidth = e.target.value;
    context.lineWidth = lineWidth;
    // Update line width display (optional)
    document.querySelector('label[for="lineWidth"]').textContent = `Line Width: ${lineWidth}`;
});

function startDrawing(e) {
    drawing = true;
    context.beginPath();
    context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
}

function stopDrawing() {
    drawing = false;
    context.closePath();
}

function draw(e) {
    if (!drawing) return;
    if (erasing) {
        // When erasing, draw with white color to "erase" lines
        context.strokeStyle = 'white';
    } else {
        context.strokeStyle = 'black'; // Set color back to black (drawing color)
    }
    context.lineWidth = lineWidth;
    context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    context.stroke();
}

function clearCanvas() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}
