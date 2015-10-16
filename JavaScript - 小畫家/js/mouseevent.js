//==== 畫圖的滑鼠事件監聽=================
var x_temp=0;
var y_temp=0;

function draw()
{
	// alert(drawStyleTag);
	var listentag=false;
     var x_start=0;
     var y_start=0;
     var x_end=0;
     var y_end=0;
     // var x_temp=0;
     // var y_temp=0;
 	 var x_progress=0;
     var y_progress=0;

	var listentag=false;

//touch 事件
cvs.addEventListener('touchstart',function(event){
		drawDown();
		},false);

cvs.addEventListener('touchmove',function(event){
	  event.preventDefault();
		drawMove();
	},false);

cvs.addEventListener('touchend',function(event){
		drawUp();
	},false);


//mouse 事件
	cvs.addEventListener('mousedown',function(event){
		drawDown();
		},false);


	cvs.addEventListener('mousemove',function(event){
		drawMove();
	},false);

	cvs.addEventListener('mouseup',function(event){
		drawUp();
	},false);


cvs.addEventListener('mouseout',function(event){

	listentag=false;
	x_temp=0;
	y_temp=0;
},false);
}



var listentag=false;

function drawDown()
{
	getcolor();
			ctx.beginPath();
			listentag=true;
			var currentOffset=cvs.getBoundingClientRect();
			if(drawStyleTag=="line")
			{
				
				var x=event.clientX-currentOffset.left;
				var y=event.clientY-currentOffset.top;
				ctx.moveTo(x,y);
				showMouseInfo(x,y);
			}else if(drawStyleTag=="square")
			{
				x_start=event.clientX-currentOffset.left;
				y_start=event.clientY-currentOffset.top;
				
				showMouseInfo(x_start,y_start);
			}else if(drawStyleTag=="circle")
			{
			 x_start=event.clientX-currentOffset.left;
 			 y_start=event.clientY-currentOffset.top;
 			showMouseInfo(x_start,y_start);
			}

}

function drawMove()
{
	if(listentag)
			{
				
				getcolor();
				var currentOffset=cvs.getBoundingClientRect();
				if(drawStyleTag=="line")
				{
					
	           		var x=event.clientX-currentOffset.left;
					var y=event.clientY-currentOffset.top;
					
					ctx.lineTo(x,y);
					ctx.stroke();
					showMouseInfo(x,y);
				}
				else if(drawStyleTag=="square")
				{
					
	           		x_progress=event.clientX-currentOffset.left;
					y_progress=event.clientY-currentOffset.top;

					if(y_progress < y_temp || x_progress < x_temp)
					{
						ctx.fillStyle='#FFFFFF';
			   			ctx.fillRect (x_start, y_start, x_temp-x_start+1, y_temp-y_start+1);  

		   				ctx.fillStyle=selectedcolor;
		   			ctx.fillRect (x_start, y_start, x_progress-x_start, y_progress-y_start);  
					}
					else
					{
		   			ctx.fillRect (x_start, y_start, x_progress-x_start, y_progress-y_start);   
			   		}
			   		x_temp=x_progress;
					y_temp=y_progress;
					showMouseInfo(x_progress,y_progress);
				}
				else if(drawStyleTag=="circle")
				{

           		x_progress=event.clientX-currentOffset.left;
 				y_progress=event.clientY-currentOffset.top;
 				getcolor();
				diameter=Math.sqrt(Math.pow(x_progress-x_start,2)+Math.pow(y_progress-y_start,2));//求直徑

 				 // ctx.arc(x_start, y_start, diameter, 0, 2*Math.PI);
 				 ctx.arc(x_progress, y_progress, diameter, 0, 2*Math.PI);
 				 console.log("x_start:"+x_start+",y_start"+y_start);
 				 console.log("x_progress:"+x_progress+",y_progress"+y_progress);
 				 ctx.fill();
				showMouseInfo(x_progress,y_progress);

				}
				


			}
}

function drawUp()
{
	listentag=false;
		var currentOffset=cvs.getBoundingClientRect();
		// alert(listentag);
				if(drawStyleTag=="line")
				{
	           		var x=event.clientX-currentOffset.left;
					var y=event.clientY-currentOffset.top;
					getcolor();
					ctx.moveTo(x,y);
					showMouseInfo(x,y);
				}
				else if(drawStyleTag=="square")
				{
           			x_end=event.clientX-currentOffset.left;
					y_end=event.clientY-currentOffset.top;
				   ctx.fillRect (x_start, y_start, x_end-x_start, y_end-y_start);   
				   x_temp=0;
					y_temp=0;
					showMouseInfo(x_end,y_end);
				}
				else if(drawStyleTag=="circle")
				{
					// var currentOffset=cvs.getBoundingClientRect();
           		x_end=event.clientX-currentOffset.left;
 				y_end=event.clientY-currentOffset.top;
 	   			var diameter=Math.sqrt(Math.pow(x_end-x_start,2)+Math.pow(y_end-y_start,2));//求直徑
 	   			getcolor();
 				ctx.fillStyle=selectedcolor;
 				// ctx.arc(x_start, y_start, diameter, 0, 2*Math.PI);
 				 ctx.arc(x_end, y_end, diameter, 0, 2*Math.PI);
 				ctx.fill();
		 		showMouseInfo(x_end,y_end);
				}
}




// 擷取滑鼠位置資訊
	function showMouseInfo(mouseX,mouseY) 
	{
		var showMouse=document.getElementById('mousePosition');
		var mouseMsg="X\t" +mouseX+"\t,Y:\t"+mouseY;
		showMouse.innerHTML=mouseMsg;
	}
