//{image: , }
function Sky(info) {
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
Sky.prototype = {
    draw: function() {
        console.log("绘制天空");
        //对象走出舞台
        if (this.x <= -this.image.width) {
            this.x = this.image.width;
        }

        this.context.drawImage(this.image, this.x, 0);
        this.x -= this.speed;
    }
}