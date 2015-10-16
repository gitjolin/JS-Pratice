
	
	var cvs=document.getElementById('drawArea');
	var ctx=cvs.getContext('2d');
	window.onload=CreateColor();
	window.onload=draw();

//for 行動裝置 

// document.body.addEventListener('touchmove', function(event)
//  { event.preventDefault(); }, false); 

    //顯示顏色的區塊
	function CreateColor()
	{
		var selectColor=document.getElementById('selectColorBlock');
		var colorArray=['#000000','#FF0000','#FFFF00','#00FF00','#FF8000','#804000','#0080FF','#800080','#C0C0C0','#008040'];

		for (var x in colorArray)
		{
			var colorbox=document.createElement('div');
			colorbox.class='colorBlock';
			colorbox.className='colorBlock';
			colorbox.id='colorbox'+x;
			colorbox.style.backgroundColor=colorArray[x] ;
			selectColor.appendChild(colorbox);
		}
	}

// 顯示選擇的顏色
      var selectedcolor='#000000';

	  var colors = document.querySelectorAll('div.colorBlock');
        for (var key = 0 ; key < colors.length; key++) {
            colors[key].addEventListener('click', function () {
                selectedcolor = this.style.backgroundColor; //選擇的畫筆顏色

                var show=document.getElementById('showColor');

                // ctx.strokeStyle=selectedcolor ;

                show.style.backgroundColor= selectedcolor;
            }, false);

        }

//顯示選擇畫筆粗細
	 var penPanel=document.getElementById('selectPenPanel');
	 var penSizeArray=['4','7','10','15'];

	 for (var y in penSizeArray)
	 {
	 	var penbox=document.createElement('div');
		 	penbox.className='penbox';
		 	penbox.id='penbox'+y;
		 	penPanel.appendChild(penbox);

		 	var addPenbox=document.getElementById('penbox'+y);
		 	
		 	var penSize=document.createElement('div');
		 	penSize.className='penblock';
		 	// penbox.style.borderStyle='solid';
		 	penSize.style.width=penSizeArray[y]+'px';
		 	penSize.style.height=penSizeArray[y]+'px';

		 	penSize.id='pen'+y;
		   addPenbox.appendChild(penSize);
	 }

//選擇的畫筆Size
var selectedPen=document.querySelectorAll('div.penblock');
// var selectedPenSize1 ;
var selectedPenSize=2;

 for (var penKey = 0 ; penKey < selectedPen.length; penKey++) 
 		{
            selectedPen[penKey].addEventListener('click', function () {
               var selectedPenSize = this.style.width; 
               ctx.lineWidth=parseInt(selectedPenSize);
            }, false);
		}


	//根據USER的選擇畫圖
	
	// var listentag=false;

	//橡皮擦
	var drawStyleTag='line';
	var erasetag=false;

	 document.getElementById('drawStyle0').addEventListener('click',function(){
	 		
	 	// document.getElementById('drawStyleicon0').style.backgroundColor='#FFFFBF';
	 	// alert(document.getElementById('drawStyleicon0').style.backgroundColor);
    		console.log("我選了橡皮擦!");
    		// drawLine('#FFFFFF');
    		drawStyleTag="line";
    		erasetag=true;
    		draw();
        },false);
	
	//隨意畫圖
	document.getElementById('drawStyle1').addEventListener('click',function(){
		 	console.log("我選了隨便畫!");
		 		// document.getElementById('drawStyleicon1').style.backgroundColor='#FFFFBF';
			// alert("我現在的顏色是"+ selectedcolor);
			drawStyleTag="line";
			erasetag=false;
	    	draw();
	},false);

	//畫方形
	 document.getElementById('drawStyle2').addEventListener('click',function(){
	 		// document.getElementById('drawStyleicon2').style.backgroundColor='#FFFFBF';
	 	  console.log("我選了畫方形(填滿)!");
	 	  drawStyleTag="square";
	 	  erasetag=false;
	       draw();
	 	},false);
//畫圓形

document.getElementById('drawStyle3').addEventListener('click',function(){
		// document.getElementById('drawStyleicon3').style.backgroundColor='#FFFFBF';
console.log("我選了畫圓形");
  drawStyleTag="circle";
	 	  erasetag=false;
	       draw();
},false);


// 畫線、橡皮擦 判斷顏色
function getcolor()
{
	if(erasetag)
    		{ctx.strokeStyle='#FFFFFF';}
    	else
    	{
    		ctx.strokeStyle=selectedcolor;
    		ctx.fillStyle=selectedcolor;
    	}
}

var listentag=false;

function drawDown(localx,localy)
{
	getcolor();
			ctx.beginPath();
			listentag=true;
			var currentOffset=cvs.getBoundingClientRect();
			if(drawStyleTag=="line")
			{
				
				var x=localx-currentOffset.left;
				var y=localy-currentOffset.top;
				ctx.moveTo(x,y);
				showMouseInfo(x,y);
			}else if(drawStyleTag=="square")
			{
				x_start=localx-currentOffset.left;
				y_start=localy-currentOffset.top;
				
				showMouseInfo(x_start,y_start);
			}else if(drawStyleTag=="circle")
			{
			 x_start=localx-currentOffset.left;
 			 y_start=localy-currentOffset.top;
 			showMouseInfo(x_start,y_start);
			}

}

function drawMove(localx,localy)
{
	if(listentag)
			{
				getcolor();
				var currentOffset=cvs.getBoundingClientRect();
				if(drawStyleTag=="line")
				{
					
	           		var x=localx-currentOffset.left;
					var y=localy-currentOffset.top;
					
					ctx.lineTo(x,y);
					ctx.stroke();
					showMouseInfo(x,y);
				}
				else if(drawStyleTag=="square")
				{
					
	           		x_progress=localx-currentOffset.left;
					y_progress=localy-currentOffset.top;

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

           		x_progress=localx-currentOffset.left;
 				y_progress=localy-currentOffset.top;
 				getcolor();
				diameter=Math.sqrt(Math.pow(x_progress-x_start,2)+Math.pow(y_progress-y_start,2));//求直徑

 				 ctx.arc(x_start, y_start, diameter, 0, 2*Math.PI);
 				 ctx.fill();
				showMouseInfo(x_progress,y_progress);

				}
				


			}
}

function drawUp(localx,localy)
{
	listentag=false;
		var currentOffset=cvs.getBoundingClientRect();
		// alert(listentag);
				if(drawStyleTag=="line")
				{
	           		var x=localx-currentOffset.left;
					var y=localy-currentOffset.top;
					getcolor();
					ctx.moveTo(x,y);
					showMouseInfo(x,y);
				}
				else if(drawStyleTag=="square")
				{
           			x_end=localx-currentOffset.left;
					y_end=localy-currentOffset.top;
				   ctx.fillRect (x_start, y_start, x_end-x_start, y_end-y_start);   
				   x_temp=0;
					y_temp=0;
					showMouseInfo(x_end,y_end);
				}
				else if(drawStyleTag=="circle")
				{
					// var currentOffset=cvs.getBoundingClientRect();
           		x_end=localx-currentOffset.left;
 				y_end=localy-currentOffset.top;
 	   			var diameter=Math.sqrt(Math.pow(x_end-x_start,2)+Math.pow(y_end-y_start,2));//求直徑
 	   			getcolor();
 				ctx.fillStyle=selectedcolor;
 				ctx.arc(x_start, y_start, diameter, 0, 2*Math.PI);
 				ctx.fill();
		 		showMouseInfo(x_end,y_end);
				}
}

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
     
 	 var x_progress=0;
     var y_progress=0;

	var listentag=false;

//touch 事件
cvs.addEventListener('touchstart',function(event){

	
		drawDown(event.changedTouches[0].pageX,event.changedTouches[0].pageY);
		},false);

cvs.addEventListener('touchmove',function(event){
	 
		drawMove(event.changedTouches[0].pageX,event.changedTouches[0].pageY);
	},false);

cvs.addEventListener('touchend',function(event){
		drawUp(event.changedTouches[0].pageX,event.changedTouches[0].pageY);
	},false);
//mouse 事件

	cvs.addEventListener('mousedown',function(event){
		drawDown(event.clientX,event.clientY);
		},false);


	cvs.addEventListener('mousemove',function(event){
		drawMove(event.clientX,event.clientY);
	},false);

	cvs.addEventListener('mouseup',function(event){
		drawUp(event.clientX,event.clientY);
	},false);


cvs.addEventListener('mouseout',function(event){

	listentag=false;
	x_temp=0;
	y_temp=0;
},false);
}





// 擷取滑鼠位置資訊
	function showMouseInfo(mouseX,mouseY) 
	{
		var showMouse=document.getElementById('mousePosition');
		var mouseMsg="X\t" +mouseX+"\t,Y:\t"+mouseY;
		showMouse.innerHTML=mouseMsg;
	}

	// 觸發清空畫布事件

	// document.getElementById('ClearPanel').addEventListener('click',function (){
	// 	var cvs=document.getElementById('drawArea');
	// 	var ctx=cvs.getContext('2d');
 // 		 ctx.clearRect(0, 0, cvs.width, cvs.height);

	// },false);

	function clearPaint(){

		var cvs=document.getElementById('drawArea');
		var ctx=cvs.getContext('2d');
 		 ctx.clearRect(0, 0, cvs.width, cvs.height);
	}

