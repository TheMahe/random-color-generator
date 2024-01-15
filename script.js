let currentBaseColor = '';

function generateRandomColor() {
    currentBaseColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return currentBaseColor;
}

function lightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

document.getElementById('solidColorBtn').addEventListener('click', function() {
    var color = generateRandomColor();
    document.getElementById('solidColorDisplay').style.backgroundColor = color;
    document.getElementById('solidColorDisplay').innerText = color;
});

document.getElementById('lighterColorBtn').addEventListener('click', function() {
    var lighterColor = lightenDarkenColor(currentBaseColor, 40);
    document.getElementById('lighterColorDisplay').style.backgroundColor = lighterColor;
    document.getElementById('lighterColorDisplay').innerText = lighterColor;
});
    
document.getElementById('darkerColorBtn').addEventListener('click', function() {
    var darkerColor = lightenDarkenColor(currentBaseColor, -40);
    document.getElementById('darkerColorDisplay').style.backgroundColor = darkerColor;
    document.getElementById('darkerColorDisplay').innerText = darkerColor;
    });
