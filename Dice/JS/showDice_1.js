// 這是一個畫骰子的範例，
// 目前只用到簡單的function

function showDice(){
// 利用CTX物件來做繪圖
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// 畫方形
// canvas物件.strokeRect(X,Y,width,height)




function drawRect(x,y,width,height){

ctx.strokeStyle="red";
ctx.strokeRect(x,y,width,height);	
}


function drawPoint2(rx,ry,pNumber){

   switch(pNumber)
   {
   	case 1:
   		drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,"red");  //把點畫在中間
   	break;

   	case 2:
   		drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,"blue"); //左上角的點
   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,"blue"); //右下角的點
   	break;

   	case 3:
	   	drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,"green"); //中間
	   	drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,"green");  //左上
   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,"green"); //右下
   	break;

   	case 4:
	   	drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,"orange"); //左上
	   	drawPoint((rWidth/3)*2+rx,(rHeight/3)+ry,5,0,"orange"); //右上
   		drawPoint((rWidth/3)+rx,(rHeight/3)*2+ry,5,0,"orange"); // 左下
   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,"orange"); //右下
   	break;

   	case 5:
   		drawPoint((rWidth/3)+rx,(rHeight/3)+ry,5,0,"purple"); //左上
	   	drawPoint((rWidth/3)*2+rx,(rHeight/3)+ry,5,0,"purple");//右上
   		drawPoint((rWidth/3)+rx,(rHeight/3)*2+ry,5,0,"purple"); //左下
   		drawPoint((rWidth/3)*2+rx,(rHeight/3)*2+ry,5,0,"purple");//右下
   		drawPoint((rWidth/2)+rx,(rHeight/2)+ry,5,0,"purple"); //中間
   	break;

   	case 6:
		drawPoint((rWidth/3)+rx,(rHeight/4)+ry,5,0,"yellow");  //左上 
	   	drawPoint((rWidth/3)*2+rx,(rHeight/4)+ry,5,0,"yellow"); //右上

	    drawPoint((rWidth/3)+rx,(rHeight/4)*3+ry,5,0,"yellow"); //左下
	    drawPoint((rWidth/3)*2+rx,(rHeight/4)*3+ry,5,0,"yellow");//右下
   		
   		drawPoint((rWidth/3)+rx,(rHeight/4)*2+ry,5,0,"yellow"); //左中
   		drawPoint((rWidth/3)*2+rx,(rHeight/4)*2+ry,5,0,"yellow"); //右中
   		 
   	break;
   }


}


function drawPoint(px,py,width,start,color)
{
	ctx.beginPath(); //告訴畫布要開始畫了
	ctx.arc(px,py,width,start,2*Math.PI);
	// ctx.stroke();
	ctx.fillStyle=color;
	ctx.fill();
}

var rStartX=10;  //預設開始位置X
var rStartY=10;  //預設開始位置Y
var rWidth=50;   //預設方框寬度
var rHeight=50;   //預設方框高度
var currentX=0;
var currentY=0;

// 畫 1 點
drawRect(rStartX,rStartY,rWidth,rHeight);
drawPoint2(rStartX,rStartY,1);

// 畫 2 點
currentY=rStartY;
currentX=rStartX+rWidth+5;

drawRect(currentX,currentY,rWidth,rHeight);
drawPoint2(currentX,currentY,2);


// 畫3點;
currentX=rStartX+rWidth*2+5*2;
currentY=rStartY;

drawRect(currentX,currentY,rWidth,rHeight);
drawPoint2(currentX,currentY,3);


// 畫4點 
currentX=rStartX+rWidth*3+5*3;
currentY=rStartY;

drawRect(currentX,currentY,rWidth,rHeight);
drawPoint2(currentX,currentY,4);


// 畫5點 

currentX=rStartX+rWidth*4+5*4;
currentY=rStartY;

drawRect(currentX,currentY,rWidth,rHeight);
drawPoint2(currentX,currentY,5);


// 畫6點

currentX=rStartX+rWidth*5+5*5;
currentY=rStartY;

drawRect(currentX,currentY,rWidth,rHeight);
drawPoint2(currentX,currentY,6);


// 畫一個圓1

// // 畫一個圓2
// ctx.beginPath(); //告訴畫布要開始畫了
// ctx.arc(150,75,20,0,2*Math.PI);
// ctx.fillStyle="blue";
// ctx.fill();

// // 畫半圓1
// ctx.beginPath(); //告訴畫布要開始畫了
// ctx.arc(150,150,20,0,0.8*Math.PI);
// ctx.closePath();
// ctx.stroke();

// // 畫扇形
// ctx.beginPath(); //告訴畫布要開始畫了
// // ctx.arc(170,170,20,0, Math.PI * 1.5);
// ctx.moveTo(50,50);
// ctx.arc(50, 50, 50, 0, Math.PI * 1.5,true);
// ctx.closePath();
// // ctx.stroke();
// ctx.fillStyle="yellow";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.arc(50, 50, 50, Math.PI * 1.5, Math.PI * 2,false);
// ctx.fillStyle="green";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.arc(50, 50, 50, Math.PI *0.8, Math.PI *0.9,false);
// ctx.fillStyle="red";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.arc(50, 50, 50, Math.PI *0.1,Math.PI *0.2 ,false);
// ctx.fillStyle="orange";
// ctx.fill();


// // 畫弧線
// ctx.beginPath(); //告訴畫布要開始畫了
// ctx.arc(200,150,50,0,0.8*Math.PI);
// ctx.stroke();




// ctx.MoveTo(70,80) 移動畫筆到起點
// ctx.lineTo(140,150) 劃一條線到這個點
// ctx.arc(100,100,50,0,0.8*Math.pi) 劃一個圓圈圈 (圓心x,圓心Y,半徑,弧度起點，弧度終點，終點)
// ctx.stroke(); 真正開始畫
};