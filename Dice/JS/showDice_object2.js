// 這是一個畫骰子的範例，利用物件來畫骰子

// 宣告使用的變數
    var rStartX=10;  //預設開始位置X
	var rStartY=10;  //預設開始位置Y
	var rWidth=50;   //預設方框寬度
	var rHeight=50;   //預設方框高度
	var currentX=0;
	var currentY=0; 
	var clickFlag=false;//紀錄click button的狀態
	var Interval; //宣告暫停執行的方法

function randomNumer()
{
clickFlag=!clickFlag;
showDisc2(clickFlag);
}


function showDisc2(clickFlag){

	var c=document.getElementById("myCanvas2");
	var ctx=c.getContext("2d");
	// ctx.clearRect(0,0,c.width,c.height);

	var height=c.height;
	var width=c.width;
	var diceWH=100;
	rWidth=diceWH;
	rHeight=diceWH;  

	var rStartX=width/2;  //預設開始位置X
	var rStartY=height/2;

	var pWidth=10;
	var myObj=new object_point();

	if(clickFlag)
	{	    
	    	Interval=setInterval(function(){drawSelection(c,ctx,width,height,diceWH);}, 500);    
 	}else
 	{
 			self.clearInterval(Interval);
 	}
};

function drawSelection(c,ctx,width,height,diceWH)
{
	 ctx.clearRect(0,0,c.width,c.height);
	 var discNumber=Math.floor(Math.random()*(6-1+1)+1);
	 var discNumber2=Math.floor(Math.random()*(6-1+1)+1);

	 var color=setColor(discNumber);
	 var color2=setColor(discNumber2);
	  
	 ctx.strokeStyle=color;
	 ctx.strokeRect((width/6)-(diceWH/6),(height/2)-(diceWH/2),diceWH,diceWH);	
	 drawPoint2(ctx,(width/6)-(diceWH/6),(height/2)-(diceWH/2),discNumber,10,color);
	//   drawPoint2(畫布,x,y,discNumber,color);
	ctx.font = "18px Arial";
	ctx.fillText("Your Number: "+discNumber,20,20);
	
	 ctx.strokeStyle=color2;
	 ctx.strokeRect(((width/6)-(diceWH/6))*5,(height/2)-(diceWH/2),diceWH,diceWH);	
	 drawPoint2(ctx,((width/6)-(diceWH/6))*5,(height/2)-(diceWH/2),discNumber2,10,color2);
	 ctx.fillText("Owner Number:"+discNumber2,200,20)

	if(discNumber > discNumber2)
	{
		ctx.fillStyle=color;
		ctx.fillText("You Win!",150,40)
	}else if(discNumber==discNumber2){
		ctx.fillStyle="black";
		ctx.fillText("Tie!",150,40)
	}else{
		ctx.fillStyle=color2;
		ctx.fillText("Owner Win!",150,40)}

}

function getCanvas(canvasName)
{
	var c=document.getElementById(canvasName);
	var ctx=c.getContext("2d");
	return ctx;
}

// ==================  建立物件 ==================

	function object_point()
	{    
	   this.rStartY=70;
	   var width=rWidth;
	   var height=rHeight;
	};

	object_point.prototype.draw=function(ctx,x){
	   this.rStartX=xStartx(x);
	   var color=setColor(x);
	   drawRect(ctx,this.rStartX,this.rStartY,rWidth,rHeight);
	   drawPoint2(ctx,this.rStartX,this.rStartY,x,5,color);

	};

// ==================  畫出骰子 1 - 6 ==================

function showDice(){
// 利用CTX物件來做繪圖
	var ctx=getCanvas("myCanvas");
	// var ctx=c.getContext("2d");

	var myObj=new object_point();
	myObj.draw(ctx,1);
	myObj.draw(ctx,2);
	myObj.draw(ctx,3);
	myObj.draw(ctx,4);
	myObj.draw(ctx,5);
	myObj.draw(ctx,6);



};
//  ==================  畫骰子的框框  ==================
	function drawRect(ctx,x,y,width,height){
	// 畫方形
	// canvas物件.strokeRect(X,Y,width,height)
	ctx.strokeStyle="red";
	ctx.strokeRect(x,y,width,height);	
	};

	// ================== 設定顏色  ==================
	function setColor(x)
	{
		switch(x)
		{
			case 1:
				return "red";
			break;
			case 2:
				return "blue";
			break;
			case 3:
				return "skyblue";
			break;

			case 4:
				return "orange";
			break;

			case 5:
				return "green";
			break;

			case 6:
				return "purple";
			break;

			default:
				alert("are you kidding me?");
			break;

		};
	}

	// ================== 設定橫向起點(x) ==================
	function xStartx(x)
	{
		switch (x)
		{
			case 1:
			return rStartX;
			break;

			case 2:
			return rStartX+rWidth+5;
			break;

			case 3:
			return rStartX+rWidth*2+5*2;
			break;

			case 4:
			return rStartX+rWidth*3+5*3;
			break;

			case 5:
			return rStartX+rWidth*4+5*4;
			break;

			case 6:
			return rStartX+rWidth*5+5*5;
			break;

			default:
			alert("please check your value!");
			break;

		};

	}

	//  ================== 劃出骰子 ===========================
	function drawPoint2(ctx,rx,ry,pNumber,pWidth,color){
		// alert(rx+","+ry+","+pNumber+","+color+","+rWidth+","+rHeight);
	   switch(pNumber)
	   {
	   	case 1:
	   		// alert("case - " + pNumber);
	   		drawPoint(ctx,(rWidth/2)+rx,(rHeight/2)+ry,pWidth,0,color);  //把點畫在中間
	   	break;

	   	case 2:
	   		drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)+ry,pWidth,0,color); //左上角的點
	   		drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)*2+ry,pWidth,0,color); //右下角的點
	   	break;

	   	case 3:
		   	drawPoint(ctx,(rWidth/2)+rx,(rHeight/2)+ry,pWidth,0,color); //中間
		   	drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)+ry,pWidth,0,color);  //左上
	   		drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)*2+ry,pWidth,0,color); //右下
	   	break;

	   	case 4:
		   	drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)+ry,pWidth,0,color); //左上
		   	drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)+ry,pWidth,0,color); //右上
	   		drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)*2+ry,pWidth,0,color); // 左下
	   		drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)*2+ry,pWidth,0,color); //右下
	   	break;

	   	case 5:
	   		drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)+ry,pWidth,0,color); //左上
		   	drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)+ry,pWidth,0,color);//右上
	   		drawPoint(ctx,(rWidth/3)+rx,(rHeight/3)*2+ry,pWidth,0,color); //左下
	   		drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/3)*2+ry,pWidth,0,color);//右下
	   		drawPoint(ctx,(rWidth/2)+rx,(rHeight/2)+ry,pWidth,0,color); //中間
	   	break;

	   	case 6:
			drawPoint(ctx,(rWidth/3)+rx,(rHeight/4)+ry,pWidth,0,color);  //左上 
		   	drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/4)+ry,pWidth,0,color); //右上

		    drawPoint(ctx,(rWidth/3)+rx,(rHeight/4)*3+ry,pWidth,0,color); //左下
		    drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/4)*3+ry,pWidth,0,color);//右下
	   		
	   		drawPoint(ctx,(rWidth/3)+rx,(rHeight/4)*2+ry,pWidth,0,color); //左中
	   		drawPoint(ctx,(rWidth/3)*2+rx,(rHeight/4)*2+ry,pWidth,0,color); //右中
	   		 
	   	break;
	   }


	}

	// ================== 畫骰子上的點點  ==================

	function drawPoint(ctx,px,py,width,start,color)
	{
		ctx.beginPath(); //告訴畫布要開始畫了
		ctx.arc(px,py,width,start,2*Math.PI);
		ctx.fillStyle=color;
		ctx.fill();
	}