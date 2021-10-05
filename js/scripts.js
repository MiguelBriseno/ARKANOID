'use strict'
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 100, 20);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(80, 80, 5, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "white";
ctx.stroke();
ctx.closePath();