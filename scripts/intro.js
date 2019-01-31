var audio = new Audio();

function musicOn()
{
	audio.src = 'sounds/M83 - We Own The Sky.mp3';
	audio.play();
}

function musicOff()
{
	audio.pause();
}

function preloader() {

	if (document.getElementById) {
		document.getElementById("preload-0").style.background = "url(images/background1.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-1").style.background = "url(images/background2.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-2").style.background = "url(images/background3.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-3").style.background = "url(images/background4.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-4").style.background = "url(images/background5.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-5").style.background = "url(images/background6.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-6").style.background = "url(images/background7.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-7").style.background = "url(images/background8.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-8").style.background = "url(images/background9.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-10").style.background = "url(images/background10.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-11").style.background = "url(images/background11.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-12").style.background = "url(images/background12.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-13").style.background = "url(images/background13.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-14").style.background = "url(images/background14.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-15").style.background = "url(images/background15.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-16").style.background = "url(images/background16.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-17").style.background = "url(images/background17.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-18").style.background = "url(images/background18.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-19").style.background = "url(images/background19.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-20").style.background = "url(images/background20.gif) no-repeat -9999px -9999px";
		document.getElementById("preload-21").style.background = "url(images/background21.gif) no-repeat -9999px -9999px";
		
	}
}
function addLoadEvent(func) {
	document.body.innerHTML+='<div id = "preload"></div>';
	
	for (var i = 0; i < 31; i++)
	{
		preload.innerHTML+= '<div id = "preload-' + i + '"></div>';
	}
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}


function checkName()
{
	if(name1.value != "")
		name2.disabled=false;
	else
		name2.disabled=true;
}

function hide(id)
{ 
	var elem=document.getElementById(id);
	if (elem)
	{
		elem.style="display: block; opacity: 0; transition: 1s";
		setTimeout(function(){
			elem.style.display="none";
		}, 1000);
	}	
}

function show(id)
{
	var elem=document.getElementById(id);
	if (elem)
	{
			elem.style="display: block; opacity: 0";
			setTimeout(function(){
				elem.style="display: block; opacity: 1; transition: all 1s linear;";
			}, 1000);
		
	}	
}

function changeBackground(n)
{
	//document.body.background='images/background'+n+'.gif';
	setTimeout(function(){
		switch (n)
		{
			case 1:{ document.body.style="background-image: url(images/background1.gif); transition: all 1s linear;"; break;}
			case 2:{ document.body.style="background-image: url(images/background2.gif); transition: all 1s linear;";break;}
			case 3:{ document.body.style="background-image: url(images/background3.gif); transition: all 1s linear;";break;}
			case 4:{ document.body.style="background-image: url(images/background4.gif); transition: all 1s linear;";break;}
			case 5:{ document.body.style="background-image: url(images/background5.gif); transition: all 1s linear;";break;}
			case 6:{ document.body.style="background-image: url(images/background6.gif); transition: all 1s linear;";break;}
			case 7:{ document.body.style="background-image: url(images/background7.gif); transition: all 1s ease-out;";break;}
			case 8:{ document.body.style="background-image: url(images/background8.gif); transition: all 1s ease-out;";break;}
			case 9:{ document.body.style="background-image: url(images/background9.gif); transition: all 1s ease-out;";break;}
			case 10:{ document.body.style="background-image: url(images/background10.gif); transition: all 1s ease-out;"; break;}
			case 11:{ document.body.style="background-image: url(images/background11.gif); transition: all 1s ease-out;";break;}
			case 12:{ document.body.style="background-image: url(images/background12.gif); transition: all 1s ease-out;"; break;}
			case 13:{ document.body.style="background-image: url(images/background13.gif); transition: all 1s ease-out;";break;}
			case 14:{ document.body.style="background-image: url(images/background14.gif); transition: all 1s ease-out;";break;}
			case 15:{ document.body.style="background-image: url(images/background15.gif); transition: all 1s ease-out;";break;}
			case 16:{ document.body.style="background-image: url(images/background16.gif); transition: all 1s ease-out;";break;}
			case 17:{ document.body.style="background-image: url(images/background17.gif); transition: all 1s ease-out;"; break;}
			case 18:{ document.body.style="background-image: url(images/background18.gif); transition: all 1s ease-out;";break;}
			case 19:{ document.body.style="background-image: url(images/background19.gif); transition: all 1s ease-out;";break;}
			case 20:{ document.body.style="background-image: url(images/background20.gif); transition: all 1s ease-out;";break;}
			case 21:{ document.body.style="background-image: url(images/background21.gif); transition: all 1s ease-out;";break;}
			
		}
	},1000);
}

function kachalka(n)
{
	switch(n)
	{
		case 1:
		{
			setTimeout( function() {
				document.body.style="background-image: url(images/background10.gif); transition: all 1s ease-out;"; 
				show('224'); 
			},2040);
			break;
		}
		case 2:
		{
			setTimeout( function() {
				document.body.style="background-image: url(images/background10.gif); transition: all 1s ease-out;"; 
				show('240'); 
			},4040);
			break;
		}
	}
}
		

function getName(id)
{
	var s=String(name1.value);
	var a=document.getElementById(id).innerHTML;
	switch (id)
	{
		case 1:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Марина Васильевна:</p>';
			document.getElementById(id).innerHTML+='<p><br>Привет, '+s+'!<br></p>';
			break;
		}
		case 4:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Ваня:</p>';
			document.getElementById(id).innerHTML+='<p><br>Здарова, '+s+'!<br></p>';
			break;
		}
		case 24:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Саша:</p>';
			document.getElementById(id).innerHTML+='<p><br>Здравствуй, '+s+'!<br></p>';
			break;
		}
		case 224:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Ваня:</p>';
			document.getElementById(id).innerHTML+='<p><br>Ооо, '+s+'!<br></p>';
			break;
		}
		case 237:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Ваня:</p>';
			document.getElementById(id).innerHTML+='<p><br>Конечно, '+s+', для тебя ничего не жалко.<br></p>';
			break;
		}
		case 245:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Саша:</p>';
			document.getElementById(id).innerHTML+='<p><br>Здравствуй, '+s+'!<br></p>';
			break;
		}
		case 249:
		{
			document.getElementById(id).innerHTML+='<p class="p1">Саша:</p>';
			document.getElementById(id).innerHTML+='<p><br>Мои! Спасибо, '+s+'!<br></p>';
			break;
		}
		default:
		{
			document.getElementById(id).innerHTML='<p class="p1">'+s+': ';
			document.getElementById(id).innerHTML+=a;
			break;
		}
	}
}
