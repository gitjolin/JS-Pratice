// 這是一個畫骰子的範例，利用物件來畫骰子
function randomNumer()
{
// alert(Math.floor(Math.random()*6));
var cNumber=Math.floor(Math.random()*(6-1+1)+1);
alert(cNumber);

showDisc2(cNumber);
}

function showDisc2(discNumber){

	var c=document.getElementById("myCanvas2");
	var ctx=c.getContext("2d");
	ctx.strokeStyle="green";

	var height=c.height;
	var width=c.width;
	var diceWH=100;

	var rStartX=width/2;  //預設開始位置X
	var rStartY=height/2;

	ctx.strokeStyle="green";
	ctx.strokeRect((width/2)-(diceWH/2),(height/2)-(diceWH/2),diceWH,diceWH);	

	// alert(c.width+","+c.height);
};

function getCanvas(canvasName)
{
	var c=document.getElementById(canvasName);
	var ctx=c.getContext("2d");
	return ctx;


}


function showDice(){
// 利用CTX物件來做繪圖
	var ctx=getCanvas("myCanvas");
	// var ctx=c.getContext("2d");

	
	// ================== 畫骰子上的點點  ==================

	function drawPoint(px,py,width,start,color)
	{
		ctx.beginPath(); //告訴畫布要開始畫了
		ctx.arc(px,py,width,start,2*Math.PI);
		ctx.fillStyle=color;
		ctx.fill();
	}

	var rStartX=10;  //預設開始位置X
	var rStartY=10;  //預設開始位置Y
	var rWidth=50;   //預設方框寬度
	var rHeight=50;   //預設方框高度
	var currentX=0;
	var currentY=0;

	//  ================== 劃出骰子 ===========================

	function drawPoint2(rx,ry,pNumber,color){

	   switch(pNumber)
	   {
	   	case 1:
	   		drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,color);  //把點畫在中間
	   	break;

	   	case 2:
	   		drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,color); //左上角的點
	   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,color); //右下角的點
	   	break;

	   	case 3:
		   	drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,color); //中間
		   	drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,color);  //左上
	   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,color); //右下
	   	break;

	   	case 4:
		   	drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,color); //左上
		   	drawPoint((rWidth/3)*2+rx,(rHeight/3)+ry,5,0,color); //右上
	   		drawPoint((rWidth/3)+rx,(rHeight/3)*2+ry,5,0,color); // 左下
	   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,color); //右下
	   	break;

	   	case 5:
	   		drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,color); //左上
		   	drawPoint((rWidth/3)*2+rx,(rHeight/3)+ry,5,0,color);//右上
	   		drawPoint((rWidth/3)+rx,(rHeight/3)*2+ry,5,0,color); //左下
	   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,color);//右下
	   		drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,color); //中間
	   	break;

	   	case 6:
			drawPoint((rWidth/3)+rx,(rHeight/4)+ry,5,0,color);  //左上 
		   	drawPoint((rWidth/3)*2+rx,(rHeight/4)+ry,5,0,color); //右上

		    drawPoint((rWidth/3)+rx,(rHeight/4)*3+ry,5,0,color); //左下
		    drawPoint((rWidth/3)*2+rx,(rHeight/4)*3+ry,5,0,color);//右下
	   		
	   		drawPoint((rWidth/3)+rx,(rHeight/4)*2+ry,5,0,color); //左中
	   		drawPoint((rWidth/3)*2+rx,(rHeight/4)*2+ry,5,0,color); //右中
	   		 
	   	break;
	   }


	}
	// ==================  建立物件 ==================

	function object_point()
	{
	      
	   this.rStartY=70;
	   var width=rWidth;
	   var height=rHeight;
	};

	object_point.prototype.draw=function(x){
		
	   this.rStartX=xStartx(x);
	   var color=setColor(x);
	   drawRect(ctx,this.rStartX,this.rStartY,rWidth,rHeight);
	   drawPoint2(this.rStartX,this.rStartY,x,color);

	};

	
	}



	var myObj=new object_point();
	myObj.draw(1);
	myObj.draw(2);
	myObj.draw(3);
	myObj.draw(4);
	myObj.draw(5);
	myObj.draw(6);



};

//  ==================  畫骰子的框框  ==================
	function drawRect(ctx,x,y,width,height){
	// 畫方形
	// canvas物件.strokeRect(X,Y,width,height)
	ctx.strokeStyle="red";
	ctx.strokeRect(x,y,width,height);	
	};

// ==================  設定骰子的顏色  ==================
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
				return "yellow";
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