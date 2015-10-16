

// function promptBox(){
// 	// document.getElementById("show").innerHTML="HA HA HA";
// 	var name=prompt("please input your name");
// 	document.getElementById("show").innerHTML=name;
// };

// function confirmBox(){
// 	var selection=confirm("apple is red?");
// 	var currentString=document.getElementById("show");
// 		if(selection){
// 			document.getElementById("show").innerHTML=currentString.innerHTML +"<br> Good Job!You are right!";
// 		}else{
// 			document.getElementById("show").innerHTML=currentString.innerHTML +"oh oh ! please try again.";
// 		}
// };


function showCalender(showDate)
{
   var calendar=new Date();
   var cDate=calendar.getDate();
   var cMonth=calendar.getMonth()+1;
   var cYear=calendar.getFullYear();
   var cDay=calendar.getDay();

   switch(showDate)
   {
   	case "pre":
   		cDate=cDate-1;
   		break;
   	case "next":
   		cDate=cDate+1;
   		break;
   	default:
   		cDate=cDate;
   		break;
   }
   document.getElementById("showCalender").innerHTML="<h2><center>"+cYear+"年<p>"+cMonth+"月"+cDate+"日<p>星期 "+cDay+"</h2>";
}

function pDay(){
  showCalender("pre");
}

function nDay(){
	showCalender("next");
}

