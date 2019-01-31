var audio1=new Audio();
var ChangeArrow1, ChangeArrow2;
var step=-1,j=-1, del=0;
var CurrentArrow="";
var Missed = false;
var FirstPress=true;
var StartPlaying;
var delay= new Array;
var Start= new Date();
var stop1,stop2, stop3;
var plus=0, minus=0;
var danceType=0;
delay[1] = 0;
var period3 = 340;

var Sources=new Array;
Sources[0]="images/left_arrow.gif";
Sources[1]='images/left_up_arrow.gif';
Sources[2]='images/left_down_arrow.gif';
Sources[3]='images/right_arrow.gif';
Sources[4]='images/right_up_arrow.gif';
Sources[5]='images/right_down_arrow.gif';
Sources[6]='images/up_arrow.gif';
Sources[7]='images/down_arrow.gif';
Sources[8]='images/left_right_arrow.gif';

var Steps1=new Array;
Steps1[0]=4;
Steps1[1]=0;
Steps1[2]=3;
Steps1[3]=1;
Steps1[4]=3;
Steps1[5]=0;

var Steps2=new Array;
Steps2[0]=4;
Steps2[1]=6;
Steps2[2]=1;
Steps2[3]=3;
Steps2[4]=2;
Steps2[5]=7;
Steps2[6]=5;
Steps2[7]=0;

var Steps3=new Array;
Steps3[0]=3;
Steps3[1]=6;
Steps3[2]=0;
Steps3[3]=6;
Steps3[4]=7;
Steps3[5]=6;
Steps3[6]=6;
Steps3[7]=7;
Steps3[8]=6;
Steps3[9]=0;
Steps3[10]=6;
Steps3[11]=3;
Steps3[12]=6;
Steps3[13]=7;
Steps3[14]=6;
Steps3[15]=6;
Steps3[16]=7;
Steps3[17]=6;
Steps3[18]=2;
Steps3[19]=4;
Steps3[20]=0;
Steps3[21]=5;
Steps3[22]=1;
Steps3[23]=3;
Steps3[24]=2;
Steps3[25]=4;
Steps3[26]=0;
Steps3[27]=5;
Steps3[28]=1;
Steps3[29]=3;
Steps3[30]=4;
Steps3[31]=5;
Steps3[32]=8;
Steps3[33]=1;
Steps3[34]=2;
Steps3[35]=8;

function Music1On()
{
	audio1.src='sounds/dance1.mp3';
	audio1.id="dance";
	audio1.play();
}
function Music2On()
{
	audio1.src='sounds/dance2.mp3';
	audio1.id="dance";
	audio1.play();
}
function Music3On()
{
	audio1.src='sounds/dance3.mp3';
	audio1.id="dance";
	audio1.play();
}

function Music1Off()
{
	audio1.pause();
}

function StopDancing()
{
	clearTimeout(ChangeArrow1);
	clearTimeout(ChangeArrow2);
	clearTimeout(stop1);
	clearTimeout(stop2);
	clearTimeout(stop3);
	Music1Off();
	minus=0;
	plus=0;
	procent=0;
	FirstPress=true;
	Missed=false;
	CurrentArrow="";
	
}

var procent=0;
function ChangeEmotion()
{
	var zz ="red";
	if (plus!=0 || minus!=0)
		procent =Math.round(plus/(plus+minus)*100);
	else
		procent=0;
	var a=-1;
//	zz="color: red";
	if (procent > 70)
		a = 0;
	if (procent > 77)
		a = 1;
	if (procent > 84)
	{
		a = 2;
		zz="yellow";
	}
	if (procent > 90)
	{
		a = 3;
		zz="green";
	}
	if (procent > 95)
		a = 4;
	switch(danceType)
	{
		case 1:
		{
			rez.style="color: "+zz+";";
			switch (a)
			{
				case 4: {mark.src="images/emotion7.png"; break;}
				case 3: {mark.src="images/emotion6.png"; break;}
				case 2: {mark.src="images/emotion3.png"; break;}
				case 1: {mark.src="images/emotion4.png"; break;}
				case 0: {mark.src="images/emotion5.png"; break;}
				default: {mark.src="images/emotion8.png"; break;}
			}
			break;
		}
		case 2:
		{
			rez2.style="color: "+zz+";";
			switch (a)
			{
				case 4: {mark2.src="images/emotion7.png"; break;}
				case 3: {mark2.src="images/emotion6.png"; break;}
				case 2: {mark2.src="images/emotion3.png"; break;}
				case 1: {mark2.src="images/emotion4.png"; break;}
				case 0: {mark2.src="images/emotion5.png"; break;}
				default: {mark2.src="images/emotion8.png"; break;}
			}
			break;
		}
		case 3:
		{
			rez3.style="color: "+zz+";";
			switch (a)
			{
				case 4: {mark3.src="images/emotion7.png"; break;}
				case 3: {mark3.src="images/emotion6.png"; break;}
				case 2: {mark3.src="images/emotion3.png"; break;}
				case 1: {mark3.src="images/emotion4.png"; break;}
				case 0: {mark3.src="images/emotion5.png"; break;}
				default: {mark3.src="images/emotion8.png"; break;}
			}
			break;
		}
	}
}

function ChangeArrows1()
{
	ChangeArrow2=setInterval(function(){ j++; if (Missed == true) {minus++;}if(j==6) j=0; step=Steps1[j]; ChangeEmotion(); rez.innerHTML="Точность - "+String(procent)+"%"; Missed=true; },445);
	ChangeArrow1=setInterval(function(){ arrow.src=Sources[step]; }, 445);
}
function ChangeArrows2()
{
	ChangeArrow2=setInterval(function(){ j++; if (Missed == true) {minus++;} if(j==8) j=0; step=Steps2[j]; ChangeEmotion(); rez2.innerHTML="Точность - "+String(procent)+"%"; Missed=true; },370);
	ChangeArrow1=setInterval(function(){ arrow2.src=Sources[step]; }, 370);
}
function ChangeArrows3()
{
	ChangeArrow2=setInterval(function(){ j++; if (Missed == true) {minus++;} if(j==36) j=0; step=Steps3[j];  ChangeEmotion();  rez3.innerHTML="Точность - "+String(procent)+"%"; Missed=true; },period3);
	ChangeArrow1=setInterval(function(){ arrow3.src=Sources[step]; }, period3);
}


function getChar(event)
{
  if (event.which == null)
  {
    if (event.keyCode < 32)
		return null;
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0)
  {
    if (event.which < 32)
		return null;
    return String.fromCharCode(event.which);
  }
  return null;
}

function comboKeys ()
{
	var now=new Date();
	delay[del]=now-StartPlaying;
	del++;
	if(del == 2)
		del=0;
	if (Math.abs(delay[1] - delay[0]) >= 40)
		CompareSteps();
	else
	{
		delay[0]=delay[1];
		delay[1]=delay[0];
	}
}

function getArrow(event)
{
	switch(event.keyCode)
	{
		case 37: {if (CurrentArrow.indexOf("left")==-1) CurrentArrow+="left"; break;}
		case 38: {if (CurrentArrow.indexOf("up")==-1)CurrentArrow+="up"; break;}
		case 39: {if (CurrentArrow.indexOf("right")==-1)CurrentArrow+="right"; break;}
		case 40: {if (CurrentArrow.indexOf("down")==-1)CurrentArrow+="down"; break;}
		default: {CurrentArrow+=""; break;}
	}
	if (FirstPress == true)
	{
		StartPlaying=new Date()
		FirstPress=false;
	}
	var now=new Date();
	delay[del]=now-StartPlaying;
	del++;
	if(del == 2)
		del=0;
	setTimeout(comboKeys,40);
}

function CompareSteps()
{
	switch(step)
	{
		case 0: {if (CurrentArrow == "left") {plus++;} else {minus++;} break;}
		case 1: {if (CurrentArrow == "leftup" || CurrentArrow == "upleft") {plus++;} else {minus++;} break;}
		case 2: {if (CurrentArrow == "leftdown"  || CurrentArrow == "downleft") {plus++;} else {minus++;} break;}
		case 3: {if (CurrentArrow == "right") { plus++;} else { minus++;} break;}
		case 4: {if (CurrentArrow == "rightup"  || CurrentArrow == "upright") {plus++;} else { minus++;} break;}
		case 5: {if (CurrentArrow == "rightdown" || CurrentArrow == "downright") { plus++;} else { minus++;} break;}
		case 6: {if (CurrentArrow == "up") {plus++;} else { minus++;} break;}
		case 7: {if (CurrentArrow == "down") {plus++;} else { minus++;} break;}
		case 8: {if (CurrentArrow == "leftright"  || CurrentArrow == "rightleft") {plus++;} else {minus++;} break;}
		default: {break;}
	}
	Missed=false;
}

function deleteArrow(event)
{
	var s="";
	switch(event.keyCode)
	{
		case 37: {s="left"; break;}
		case 38: {s="up"; break;}
		case 39: {s="right"; break;}
		case 40: {s="down"; break;}
	}
	CurrentArrow=CurrentArrow.replace(s,'');
}

var rId="right", rnumb=0, lId="left", lnumb=0, uId="up", unumb=0, dId="down", dnumb=0;

function putDownArrow(id)
{
	var arrowLeft, arrowSrc, arrowTop=0, currID;
	var c = id.charAt(0);
	switch(c)
	{
		case 'l':{arrowLeft=9;  arrowSrc="images/left.png"; lnumb++; lId="left"+String(lnumb); currID=lId; break;}
		case 'u':{arrowLeft=82;  arrowSrc="images/up.png"; unumb++; uId="up"+String(unumb); currID=uId;break;}
		case 'd':{arrowLeft=155;  arrowSrc="images/down.png"; dnumb++; dId="down"+String(dnumb); currID=dId;break;}
		case 'r':{arrowLeft=228; arrowSrc="images/right.png"; rnumb++; rId="right"+String(rnumb); currID=rId;break;}
	}
	switch(danceType)
	{
		case 1:
		{
			document.getElementById('spawn').innerHTML+='<img id="'+currID+'">';
			var img1 = document.getElementById(currID);
			img1.src=arrowSrc;
			img1.style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: 0pt;";
			
			var puttingDown = setInterval(function() {
				arrowTop+=2;
				document.getElementById(currID).style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: "+arrowTop+"pt;";
				if (arrowTop == 400)
					clearTimeout(puttingDown);
			}, 10);
			break;
		}
		case 2:
		{
			document.getElementById('spawn2').innerHTML+='<img id="'+currID+'">';
			var img1 = document.getElementById(currID);
			img1.src=arrowSrc;
			img1.style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: 0pt;";
			
			var puttingDown = setInterval(function() {
				arrowTop+=2;
				document.getElementById(currID).style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: "+arrowTop+"pt;";
				if (arrowTop == 400)
					clearTimeout(puttingDown);
			}, 10);
			break;
		}
		case 3:
		{
			document.getElementById('spawn3').innerHTML+='<img id="'+currID+'">';
			var img1 = document.getElementById(currID);
			img1.src=arrowSrc;
			img1.style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: 0pt;";
			
			var puttingDown = setInterval(function() {
				arrowTop+=2;
				document.getElementById(currID).style="position: absolute; opacity:0.5; left: "+arrowLeft+"pt; top: "+arrowTop+"pt;";
				if (arrowTop == 400)
					clearTimeout(puttingDown);
			}, 10);
			break;
		}
	}
}
	

function streliVniz1()
{
	setTimeout(putDownArrow, 0, rId);
	setTimeout(putDownArrow,0,uId);
	setTimeout(putDownArrow, 445, lId);
	setTimeout(putDownArrow,445*2,rId);
	setTimeout(putDownArrow, 445*3, lId);
	setTimeout(putDownArrow, 445*3, uId);
	setTimeout(putDownArrow,445*4,rId);
	setTimeout(putDownArrow, 445*5, lId);
}	
function streliVniz2()
{
	setTimeout(putDownArrow, 0, rId);
	setTimeout(putDownArrow,0,uId);
	setTimeout(putDownArrow, 370, uId);
	setTimeout(putDownArrow,370*2,lId);
	setTimeout(putDownArrow, 370*2, uId);
	setTimeout(putDownArrow, 370*3, rId);
	setTimeout(putDownArrow, 370*4, dId);
	setTimeout(putDownArrow,370*4, lId);
	setTimeout(putDownArrow, 370*5, dId);
	setTimeout(putDownArrow, 370*6, rId);
	setTimeout(putDownArrow, 370*6, dId);
	setTimeout(putDownArrow, 370*7, lId);
}
function streliVniz3()
{
	setTimeout(putDownArrow, 0, rId);
	setTimeout(putDownArrow,period3,uId);
	setTimeout(putDownArrow, period3*2, lId);
	setTimeout(putDownArrow, period3*3,uId);
	setTimeout(putDownArrow, period3*4, dId);
	setTimeout(putDownArrow, period3*5, uId);
	setTimeout(putDownArrow, period3*6, uId);
	setTimeout(putDownArrow, period3*7, dId);
	setTimeout(putDownArrow, period3*8, uId);
	setTimeout(putDownArrow, period3*9, lId);
	setTimeout(putDownArrow, period3*10, uId);
	setTimeout(putDownArrow, period3*11, rId);
	setTimeout(putDownArrow, period3*12, uId);
	setTimeout(putDownArrow, period3*13, dId);
	setTimeout(putDownArrow, period3*14, uId);
	setTimeout(putDownArrow, period3*15, uId);
	setTimeout(putDownArrow, period3*16, dId);
	setTimeout(putDownArrow, period3*17, uId);
	setTimeout(putDownArrow, period3*18, lId);
	setTimeout(putDownArrow, period3*18, dId);
	setTimeout(putDownArrow, period3*19, uId);
	setTimeout(putDownArrow, period3*19, rId);
	setTimeout(putDownArrow, period3*20, lId);
	setTimeout(putDownArrow, period3*21, dId);
	setTimeout(putDownArrow, period3*21, rId);
	setTimeout(putDownArrow, period3*22, lId);
	setTimeout(putDownArrow, period3*22, uId);
	setTimeout(putDownArrow, period3*23, rId);		
	setTimeout(putDownArrow, period3*24, lId);
	setTimeout(putDownArrow, period3*24, dId);
	setTimeout(putDownArrow, period3*25, uId);
	setTimeout(putDownArrow, period3*25, rId);
	setTimeout(putDownArrow, period3*26, lId);
	setTimeout(putDownArrow, period3*27, dId);
	setTimeout(putDownArrow, period3*27, rId);
	setTimeout(putDownArrow, period3*28, lId);
	setTimeout(putDownArrow, period3*28, uId);
	setTimeout(putDownArrow, period3*29, rId);	
	setTimeout(putDownArrow, period3*30, uId);
	setTimeout(putDownArrow, period3*30, rId);
	setTimeout(putDownArrow, period3*31, dId);
	setTimeout(putDownArrow, period3*31, rId);
	setTimeout(putDownArrow, period3*32, lId);
	setTimeout(putDownArrow, period3*32, rId);
	setTimeout(putDownArrow, period3*33, uId);
	setTimeout(putDownArrow, period3*33, lId);
	setTimeout(putDownArrow, period3*34, dId);
	setTimeout(putDownArrow, period3*34, lId);
	setTimeout(putDownArrow, period3*35, lId);
	setTimeout(putDownArrow, period3*35, rId);
}


function goodend1()
{
	setTimeout(StopDancing(),1500);
	show('0.1');
	hide('16.1');
	show('16.2');
	changeBackground(5);

}
	
function badend1()
{
	setTimeout(StopDancing(),1500);
	show('0.1');
	hide('16.1');
	show('16.3');
	changeBackground(5);
}

function end2()
{
	setTimeout(StopDancing(),1500);
	show('0,1');
	hide('40.1');
	show('40.2');
	changeBackground(5);
}

function end3()
{
	setTimeout(StopDancing(),1500);
	show('0,1');
	hide('60.1');
	show('60.2');
	changeBackground(5);
}

function dance1()
{
	Music1On();
	danceType=1;
	document.body.style="background-image: url(images/background3.gif)";
	document.getElementById('input1').focus();
	setTimeout(ChangeArrows1,4800);
    setTimeout(function(){
	  stop1 = setInterval(streliVniz1,445*6);
    },700);
	setTimeout(function() {
		progline.src="images/progress25.png";
	},15000);
	setTimeout(function() {
		progline.src="images/progress50.png";
	},30000);
	setTimeout(function() {
		progline.src="images/progress75.png";
	},45000);
	setTimeout(function() {
		clearTimeout(stop1);
	},57800);
	setTimeout(function() {
		
		progline.src="images/progress100.png";
		if (procent > 85)
			goodend1();
		else
			badend1();
	},60000);
}	

function dance2()
{
	Music2On();
	danceType=2;
	FirstPress=true;
	Missed=false;
	CurrentArrow="";
	j=-1;
	document.body.style="background-image: url(images/background3.gif)";
	document.getElementById('input2').focus();
	progline.src="images/progress0.png";
	setTimeout(ChangeArrows2,9000);
    setTimeout(function(){
	  stop2 = setInterval(streliVniz2,370*8);
    },4600);
	setTimeout(function() {
		progline2.src="images/progress25.png";
	},15000);
	setTimeout(function() {
		progline2.src="images/progress50.png";
	},30000);
	setTimeout(function() {
		progline2.src="images/progress75.png";
	},45000);
	setTimeout(function() {
		clearTimeout(stop2);
	},57800);
	setTimeout(function() {
		progline2.src="images/progress100.png";
		end2();
	},60000);
}	

function dance3()
{
  Music3On();
  danceType = 3;
  FirstPress=true;
  Missed=false;
  CurrentArrow="";
  minus=0;
  j=-1;
  document.body.style="background-image: url(images/background3.gif)";
  document.getElementById('input3').focus();
  progline.src="images/progress0.png";
  setTimeout(ChangeArrows3,30200);
  setTimeout(function(){
	  stop3 = setInterval(streliVniz3,period3*36)
  },16500);
  setTimeout(function() {
		progline3.src="images/progress25.png";
	},40000);
  setTimeout(function() {
		progline3.src="images/progress50.png";
	},55000);
  setTimeout(function() {
		progline3.src="images/progress75.png";
	},70000);
	setTimeout(function() {
		clearTimeout(stop3);
	},78000);
  setTimeout(function() {
		progline3.src="images/progress100.png";
		end3();
	},85000);
}
