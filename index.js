const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

//set the canvas sized, or else defalut = 300px*150px
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;




canvas.addEventListener('click', function (e) {
    console.log(e.x, e.y);

    ctx.beginPath();
    ctx.rect(e.x, e.y, 50, 50);
    ctx.stroke();
});
