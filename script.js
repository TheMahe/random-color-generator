document.getElementById('colorBtn').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.getElementById('colorDisplay').style.backgroundColor = randomColor;
    document.getElementById('colorDisplay').innerText = randomColor;
});
