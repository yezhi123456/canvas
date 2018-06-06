function Bird(info) {
        //图片
        this.image = info.image;
        //位置
        this.x = info.x;
        this.y = info.y;

        //context
        this.context = info.context;
        //canvas
        this.canvas = info.canvas;

        //速度
        this.speed = 0;
        //加速度
        this.aspeed = 0.0003;

        //小鸟切图的x位置
        this.imgx = 0;
        this.steps = 0;

        //小鸟的宽高
        this.w = this.image.width / 3;
        this.h = this.image.height;

        //起始时间
        this.startTime = new Date();
}

Bird.prototype = {
    draw: function() {
        //1. 把小鸟画上去
        this.context.drawImage(this.image, this.imgx, 0, this.w, this.h, this.x, this.y, this.w, this.h);

        //2. 让小鸟扇动翅膀
        this.steps += 1;
        this.imgx = this.steps % 3 * this.w;

        //3. 让小鸟加速往下掉
        //当前帧的时间， 减去起始时间，就是两帧的间隔时间
        var now = new Date();
        var time = now - this.startTime;

        //计算出两帧之间的移动的距离(s = v0*t + a*t*t/2)
        var s = this.speed * time + this.aspeed * time * time / 2;
        this.y += s;

        //算出当前帧的结束速度作为下一帧的起始速度（vt = v0+a*t）
        this.speed = this.speed + this.aspeed * time;

        //当前帧的结速时间， 是下一帧的起始时间
        this.startTime = now;
    }
}