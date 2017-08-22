//定义常量LI宽 WIDTH 定时器的总的时间TOTTIME 每一帧走得速度speed 定时器的timer 

//定义选择器方法，并且让根元素继承
window.$=HTMLElement.prototype=function(elem){
	return document.querySelectorAll(elem)?document.querySelectorAll(elem).length==1?document.querySelector(elem):document.querySelectorAll(elem):null;
}
console.log($(".show li"))
var carousel={
	WIDTH:0,
	TOTTIME:3000,
	speed:0,
	timer:null,
	TOTSTEP:50,
	step:0,
	curStep:0,
	init:function(){//初始化方法
		//获取每个li的宽度取整
		this.WIDTH=parseInt(getComputedStyle($(".show li")[0]).width);
		console.log(this.WIDTH);
		this.move();
		this.autoPlay()
	},
	autoPlay:function(){
		setInterval(this.move.bind(this),3000);
	},
	move:function(){
		//获取父元素的left值
		var left=parseInt(getComputedStyle($(".show")).left);
		//计算每一帧的速度
		this.speed=this.WIDTH/this.TOTSTEP;
		
			console.log(this.curStep);
			//设置定时器
			this.timer=setInterval(function(){
					//步数+1
					this.curStep+=1;
					//计算当前left的值
					left-=this.speed;
					//获取计算后的left值，赋值给父元素
					$(".show").style.left=left+"px"
					console.log(this.curStep,this.TOTSTEP);
					if(this.curStep>=this.TOTSTEP){
						clearInterval(this.timer);
					}
			}.bind(this),300);
	},
}
 window.onload=function(){
	 carousel.init();
 }