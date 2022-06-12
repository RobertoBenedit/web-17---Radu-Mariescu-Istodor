class Road {
=======
    contructor(x, width, laneCount = 3) {
>>>>>>> refs/remotes/origin/master
        this.x = x;
        this.width = width;
        this.laneCount = laneCount;

        this.left = x - width / 2;
<<<<<<< HEAD
       this.right = x + width / 2;
    }

    draw(ctx) {
        ctx.fillStyle = "black";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
=======
        this.right = x + width / 2;
    }/remotes/origin/master
}
