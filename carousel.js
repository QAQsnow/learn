//定义常量LI宽 WIDTH 定时器的总的时间TOTTIME 每一帧走得速度speed 定时器的timer 

//定义选择器方法，并且让根元素继承
window.$=HTMLElement.prototype=function(elem){
	var sel=document.querySelector,
		selAll=document.querySelectorAll;
	return selAll(elem)?selAll(elem).length==1?sel(elem):selAll(elem):null;
}

var carousel={
	WIDTH:0,
	TOTTIME:3000,
	speed:0,
	timer:null,
	TOTSTEP:50,
	step:0,
	init:function(){//初始化方法
		//获取每个li的宽度取整
		this.WIDTH=parseInt($(".show li")[0].style.width);
		
	},
	move:function(){
		//获取图片展示的left值
		var left=$(".show")[0].style.left;
		//计算每一帧的速度
		var this.speed=this.TOTTIME/this.TOTSTEP;
		//记录走了的步数
		var curStep=0;
		//图片开始移动
		
		//判断走过的步数是否大于总步数
		if(curStep>this.TOTSTEP){
			
		}
	},
}
 