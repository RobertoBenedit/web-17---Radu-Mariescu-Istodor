// @ts-nocheck
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = 200;

const car = new Car(100, 100, 30, 50);
car.draw(ctx);
