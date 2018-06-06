function Pipe(info) {
    //上下两截的图片
    this.topImage = info.topImage;
    this.bottomImage = info.bottomImage;

    //水平位置
    this.x = info.x;

    //canvas 和 context
    this.canvas = info.canvas;
    this.context = info.context;

    //速度
    this.speed = 2;

    //管道和管道之间的间隔
    //水平方向
    this.xgap = info.xgap;
    //垂直方法
    this.ygap = info.ygap;
    //底部的间隔
    this.bgap = info.bgap;

    //管道的高度
    this.topHeight = 0;
    this.bottomHeight = 0;

    //对象创建时， 就有了高度
    this.initHeight();
}

Pipe.prototype = {
    draw: function() {
        if (this.x <= -this.topImage.width) {
            //重新计算柱子的高度
            this.initHeight();
            this.x = this.topImage.width*5 + this.xgap * 6;
        }

        //上半截柱子
        this.context.drawImage(this.topImage, this.x, 0, this.topImage.width, this.topHeight);

        //下半截柱子
        this.context.drawImage(this.bottomImage, this.x, this.topHeight+this.ygap, this.topImage.width, this.bottomHeight);
        
        //开始绘制图路径
        context.rect(this.x, 0, this.topImage.width, this.topHeight);
        context.rect(this.x, this.topHeight+this.ygap, this.topImage.width, this.bottomHeight);


        this.x -= this.speed;
    },

    //初始化柱子的高度
    initHeight: function() {
        //顶部的柱子的高度是一个150到250之间的随机数
        this.topHeight = 150 + Math.random()*100;
        this.bottomHeight = this.canvas.height - this.topHeight - this.ygap - this.bgap;
    }
}