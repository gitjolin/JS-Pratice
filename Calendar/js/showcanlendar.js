


   var calendar=new Date();
   // var cDate=calendar.getDate();
   // var cMonth=calendar.getMonth();
   // var cYear=calendar.getFullYear();
   // var cDay=calendar.getDay();
   var cDate;
   var cMonth;
   var cYear;
   var cDay;


function showCalender(showDate)
{
   
   // console.log("start= "+calendar);

   switch(showDate)
   {
   	case "pre":
   		cDate=calendar.getDate()-1;
   		calendar.setDate(cDate);
   		break;
   	case "next":
   		cDate=calendar.getDate()+1;
   		calendar.setDate(cDate);
   		break;

   	case "nMonth":
   		
   		cMonth=calendar.getMonth()+1;
   		calendar.setMonth(cMonth);
   		break;
   	case "pMonth":
   		cMonth=calendar.getMonth()-1;
   		calendar.setMonth(cMonth);
   		break;

   	case "nYear":
   		cYear=calendar.getFullYear()+1;
   		calendar.setYear(cYear);
   		break;
   	case "pYear":
   		cYear=calendar.getFullYear()-1;
   		calendar.setYear(cYear);
   		break;

   	default:
   		
   		break;
   }
        console.log("當前日期= "+calendar);


       
   calendar.setMonth(calendar.getMonth());
   calendar.setYear(calendar.getFullYear());

    cYear=calendar.getFullYear();
	cMonth=calendar.getMonth();
	cDate=calendar.getDate();
   
   document.getElementById("showCalender").innerHTML="<h2><center>"+cYear+"年<p>"+showMonth(cMonth)+"月"+cDate+"日<p>星期 "+showDay(calendar.getDay())+"</h2>";

  
 
}

function pDay(){
  showCalender("pre");
}

function nDay(){
	showCalender("next");
}

function nMonth(){
showCalender("nMonth");
}

function pMonth(){
showCalender("pMonth");
}

function pYear(){
showCalender("pYear");
}

function nYear(){
showCalender("nYear");
}

function showDay(cDay)
{
	var dString=['日','一','二','三','四','五','六',];

	var dayInfo=cDay%7;
	return dString[dayInfo];
}

function showMonth(cMonth)
{
	var dString=['1','2','3','4','5','6','7','8','9','10','11','12'];

	var monthInfo=cMonth%12;
	return dString[monthInfo];
}

