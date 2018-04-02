//banner 效果
 {

	let imgs=document.querySelectorAll(".imgbox li");
	let pagers=document.querySelectorAll(".pagebox li");
	let banner=document.querySelector("#bannert");
	let next=document.querySelector(".next");
	let prev=document.querySelector(".prev");
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			for(var i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}
			//this ele pagers[index]
			this.classList.add("active");
			imgs[index].classList.add("active");
			n=index;
		}
		
	});
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		//n=n%5;
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
	
	let flag=true;
	next.onclick=function(){
		if(flag){
			flag=false;
			move();
		}
	}
	prev.onclick=function(){
		if(flag){
			flag=false;
			n-=2;
			move();
		}
	}
	imgs.forEach(function(ele,index){
		ele.addEventListener("transitionend", function(){
			flag=true;
		})
				
	})
}
//闪购部分效果
{
	const prev=document.querySelector(".buy-prev");
	const next=document.querySelector(".buy-next");
	const inner=document.querySelector(".star_inner");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===2){
			this.classList.add("disable");
		}
		if(n===3){
			n=2;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");	
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}

//为你推荐效果
{
	const prev=document.querySelector(".buy-prev1");
	const next=document.querySelector(".buy-next1");
	const inner=document.querySelector(".star_inner1");
	let n=0;
	next.onclick=function(){
		n++;
		prev.classList.remove("disable");
		if(n===3){
			this.classList.add("disable");
		}
		if(n===4){
			n=3;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
	prev.onclick=function(){
		n--;
		next.classList.remove("disable");
		if(n===0){
			this.classList.add("disable");
		}
		if(n===-1){
			n=0;
			return;
		}
		inner.style.marginLeft=-1226*n+"px";
	}
}
//内容区域
{
	function content(parent){
		const types=parent.querySelectorAll(".type");
		const goods=parent.querySelectorAll(".zhineng_bottom_right");
		// console.log(types);
		types.forEach(function(ele,index){
			ele.onmouseenter=function(){
					for(var i=0;i<types.length;i++){
						types[i].classList.remove("active");
						goods[i].classList.remove("active");
					}
					//this ele pagers[index]
					this.classList.add("active");
					goods[index].classList.add("active");
				}
		})
	}
	const contentlist=document.querySelectorAll(".dapei");
	// content(contentlist[0]);
	contentlist.forEach(function(ele){
		content(ele);
	})

}
//内容部分图书滑动效果
{	
	function wheel(parent){
	let prev=parent.querySelector(".nr_prev");
	let next=parent.querySelector(".nr_next");
	let inner=parent.querySelector(".inner");
	let contents=parent.querySelectorAll(".nrimg");
	let pagers=parent.querySelectorAll(".pager")
	let n=0;
	next.onclick=function(){
		n++;
		if(n===contents.length){
			n=contents.length-1;
			return;
		}
		inner.style.left=-296*n+"px";
		pagers[n].classList.add("active");
			// console.log(pagers[n]);
		pagers[n-1].classList.remove("active");
		obj=pagers[n];
	}
	prev.onclick=function(){
		n--;
		if(n<0){
			n=0;
			return;
		}
		inner.style.left=-296*n+"px";
		pagers[n].classList.add("active");
		pagers[n+1].classList.remove("active");
		obj=pagers[n];
	}
	let obj=pagers[0];
	pagers.forEach(function(ele,index){
		ele.onclick=function(){
			obj.classList.remove("active");
			this.classList.add("active");
			// obj=ele;
			obj=this;
			inner.style.left=-296*index+"px";
			n=index;
		}
	})
	}
	let items=document.querySelectorAll(".neirong_item");
	items.forEach(function(ele){
		wheel(ele);
	})
}
//banner延展效果
{
	let labels=document.querySelectorAll(".bannert_nav li");
	let menus=document.querySelectorAll(".menu");
	let obj=menus[0];
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//头部延展效果
{
	let nav=document.querySelectorAll(".nav_xiao");
	let box=document.querySelectorAll(".nav_xiaoguo_item");
	let bottom=document.querySelector(".nav_xiaoguo_bottom");
	nav.forEach(function(ele,index){
		ele.onmouseenter=function(){
			bottom.style.height="240px";
			bottom.style.borderTop="1px solid #ccc";
			box[index].style.display="block";
			// box[index].style.opacity="1";
			// box[index].style.height="240px";
		}
		ele.onmouseleave=function(){
			box[index].style.display="none";
			bottom.style.height="0";
			bottom.style.borderTop="0";
			// box[index].style.opacity="0";
			// box[index].style.height="0px";
		}
	})
}