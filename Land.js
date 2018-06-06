//{image: , }
function Land(info) {
    //图片
    this.image = info.image;
    //位置
    this.x = info.x;
    //context
    this.context = info.context;
    //canvas
    this.canvas = info.canvas;
    //速度
    this.speed = 2;
}

// 给天空类添加方法
Land.prototype = {
    draw: function() {
        //对象走出舞台
        if (this.x <= -this.image.width) {
            this.x = this.image.width*3;
        }

        this.context.drawImage(this.image, this.x, this.canvas.height-this.image.height);
        this.x -= this.speed;

        //创建陆地的路径
        this.context.rect(this.x, this.canvas.height-this.image.height, this.image.width, this.image.height);
    }
}