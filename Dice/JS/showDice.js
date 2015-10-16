function showDice(){
// 利用CTX物件來做繪圖
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

// 畫方形
// canvas物件.strokeRect(X,Y,width,height)
ctx.strokeRect(10,10,100,100);

// 畫一個圓1
ctx.beginPath(); //告訴畫布要開始畫了
ctx.arc(100,75,20,0,2*Math.PI);
ctx.stroke();

// 畫一個圓2
ctx.beginPath(); //告訴畫布要開始畫了
ctx.arc(150,75,20,0,2*Math.PI);
ctx.fillStyle="blue";
ctx.fill();

// 畫半圓1
ctx.beginPath(); //告訴畫布要開始畫了
ctx.arc(150,150,20,0,0.8*Math.PI);
ctx.closePath();
ctx.stroke();

// 畫扇形
ctx.beginPath(); //告訴畫布要開始畫了
// ctx.arc(170,170,20,0, Math.PI * 1.5);
ctx.moveTo(50,50);
ctx.arc(50, 50, 50, 0, Math.PI * 1.5,true);
ctx.closePath();
// ctx.stroke();
ctx.fillStyle="yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,50);
ctx.arc(50, 50, 50, Math.PI * 1.5, Math.PI * 2,false);
ctx.fillStyle="green";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,50);
ctx.arc(50, 50, 50, Math.PI *0.8, Math.PI *0.9,false);
ctx.fillStyle="red";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50,50);
ctx.arc(50, 50, 50, Math.PI *0.1,Math.PI *0.2 ,false);
ctx.fillStyle="orange";
ctx.fill();


// 畫弧線
ctx.beginPath(); //告訴畫布要開始畫了
ctx.arc(200,150,50,0,0.8*Math.PI);
ctx.stroke();




// ctx.MoveTo(70,80) 移動畫筆到起點
// ctx.lineTo(140,150) 劃一條線到這個點
// ctx.arc(100,100,50,0,0.8*Math.pi) 劃一個圓圈圈 (圓心x,圓心Y,半徑,弧度起點，弧度終點，終點)
// ctx.stroke(); 真正開始畫
};