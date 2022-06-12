<<<<<<< HEAD
// draw a road for cars
class Road {
    contructor(x, width, laneCount = 3) {
=======
class Road {
    constructor(x, width, laneCount) {
>>>>>>> fbabfcb26b8bd5cb0cbbef2f87a900d2caa3e861
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
<<<<<<< HEAD
=======
        this.right = x + width / 2;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
>>>>>>> fbabfcb26b8bd5cb0cbbef2f87a900d2caa3e861
    }
}
