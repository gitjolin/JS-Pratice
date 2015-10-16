// 這是一個畫骰子的範例，
// 定義物件

// =================  js 定義物件的寫法  ==========================
// var myObj = new Object();
// myObj.name = "Fred";
// myObj.age = 42;

// myObj.getAge = 
//     function () {
//         return this.age;
//     };

// document.write(myObj.name);
// document.write("<br/>");
// document.write(myObj.age);
// document.write("<br/>");
// document.write(myObj.getAge());

// // Output:
// // Fred
// // 42
// // 42


// =================== js 中定義物件 2 ============================
// http://www.dotblogs.com.tw/regionbbs/archive/2012/05/03/introduce.to.javascript.oop.aspx
// 在 JavaScript 中，要宣告物件很簡單，不過和我們寫 C#/Java 時的認知不太一樣：
//    1:  function myObject()
//    2:  {
//    3:      // object declarations.
//    4:  }

// 在 myObject 中宣告的變數基本上就是物件導向封裝 (encapsulation) 中所要求的成員變數 (member variable)，這個變數在外界是無法存取的，外界也不需要知道這個變數的存在，若是要對它控制，我們可以使用 get/set 的方法來做：
//    1:  function myObject() {
//    2:   
//    3:      var _pi = 3.14159;
//    4:   
//    5:      this.getPI = function () { return _pi; }
//    6:      this.setPI = function (v) { _pi = v; }
//    7:   
//    8:  }

// 1:  function myObject() {
//    2:   
//    3:      var _pi = 3.14159;
//    4:   
//    5:      // public method.
//    6:      this.getPI = function () { return _pi; }
//    7:      this.setPI = function (v) { _pi = v; }
//    8:   
//    9:      // private method.
//   10:      function internalMethod(x) {
//   11:          return x * 2;
//   12:      }
//   13:   
//   14:  }

// 有了方法，當然也可以有屬性 (Property)，和宣告方法很像，不過在 JavaScript 中，屬性有自己的變數儲存空間，也就是說，在物件中宣告同名的變數和屬性時，呼叫方式會有所不同，得到的結果也會有所不同。
//    1:  function myObject() {
//    2:   
//    3:      // field
//    4:      var _pi = 3.14159;
//    5:   
//    6:      // property
//    7:      this.pi = _pi;
//    8:   
//    9:      // public method.
//   10:      this.getPI = function () { return _pi; }
//   11:      this.setPI = function (v) { _pi = v; }
//   12:   
//   13:      // private method
//   14:      function internalMethod(x) {
//   15:          return x * 2;
//   16:      }
//   17:   
//   18:  }

// 事件 (Event)
// 1:  function myObject() {
//    2:   
//    3:      var _pi = 3.14159;
//    4:   
//    5:      // event
//    6:      this.OnAfterAddValue = null;
//    7:      this.pi = _pi;
//    8:   
//    9:      this.getPI = function () { return _pi; }
//   10:      this.setPI = function (v) { _pi = v; }
//   11:   
//   12:      this.addValue = function (x, y) {
//   13:          return x + y;
//   14:      };
//   15:   
//   16:      this.addValueInternal = function (x, y) {
//   17:          document.writeln("invoke in addValueInternal(): " + internalMethod(x + y) + "<br />");
//   18:   
//   19:          // fire event
//   20:          if (this.OnAfterAddValue != null && (typeof this.OnAfterAddValue === "function")) {
//   21:              this.OnAfterAddValue();
//   22:          }
//   23:   
//   24:      };
//   25:   
//   26:      this.getValue = function (x) {
//   27:          return _pi * x;
//   28:      };
//   29:   
//   30:      function internalMethod(x) {
//   31:          return x * 2;
//   32:      }
//   33:   
//   34:  }

function showDice(){
// 利用CTX物件來做繪圖
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");

	//  ==================  畫骰子的框框  ==================
	function drawRect(x,y,width,height){

	// 畫方形
	// canvas物件.strokeRect(X,Y,width,height)

	ctx.strokeStyle="red";
	ctx.strokeRect(x,y,width,height);	
	}
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
	}
	object_point.prototype.draw=function(x){
		
	   this.rStartX=xStartx(x);
	   var color=setColor(x);
	   drawRect(this.rStartX,this.rStartY,rWidth,rHeight);
	   drawPoint2(this.rStartX,this.rStartY,x,color);

	};

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



	var myObj=new object_point();
	myObj.draw(1);
	myObj.draw(2);
	myObj.draw(3);
	myObj.draw(4);
	myObj.draw(5);
	myObj.draw(6);


// // 畫 1 點
// drawRect(rStartX,rStartY,rWidth,rHeight);
// drawPoint2(rStartX,rStartY,1);

// // 畫 2 點
// currentY=rStartY;
// currentX=rStartX+rWidth+5;

// drawRect(currentX,currentY,rWidth,rHeight);
// drawPoint2(currentX,currentY,2);


// // 畫3點;
// currentX=rStartX+rWidth*2+5*2;
// currentY=rStartY;

// drawRect(currentX,currentY,rWidth,rHeight);
// drawPoint2(currentX,currentY,3);


// // 畫4點 
// currentX=rStartX+rWidth*3+5*3;
// currentY=rStartY;

// drawRect(currentX,currentY,rWidth,rHeight);
// drawPoint2(currentX,currentY,4);


// // 畫5點 

// currentX=rStartX+rWidth*4+5*4;
// currentY=rStartY;

// drawRect(currentX,currentY,rWidth,rHeight);
// drawPoint2(currentX,currentY,5);


// // 畫6點

// currentX=rStartX+rWidth*5+5*5;
// currentY=rStartY;

// drawRect(currentX,currentY,rWidth,rHeight);
// drawPoint2(currentX,currentY,6);





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