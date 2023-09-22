<!DOCTYPE html>
<html>
<head>
    <title>Whiteboard</title>
    <style>
        canvas {
            border: 1px solid #000;
        }
    </style>
</head>
<body>
<canvas id="whiteboard" width="800" height="600"></canvas>
<button id="drawButton">Draw</button>
<button id="eraseButton">Erase</button>
<button id="clearButton">Clear</button>
<input type="range" id="lineWidth" min="1" max="10" value="2">
<label for="lineWidth">Line Width</label>
<script src="whiteboard.js"></script>
</body>
</html>
