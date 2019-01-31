const N_GIRLS = 15;
const N_CHOOSINGS = 5;
const MAX_N_CHOOSING_PHRASES = 5;
const CHOOSING_LADY_ACT = 10;
const BAD_LADY_ACT = 11;
const CHOOSE_HI_TO_SASHA_ACT = 14;
const PLEASE_TO_SASHA_ACT = 15;
const HANDSOME_TO_SASHA_ACT = 16;
const NORM_TO_SASHA_ACT = 17;
const FIRST_DANCE_ACT = 26;
const CHOOSE_BYE_TO_MARINA = 35;
const GOOD_BYE_TO_MARINA = 36;
const BAD_BYE_TO_MARINA = 37;
const SECOND_DANCE_ACT = 72;

function show(id) {
	var elem = document.getElementById(id);
	if (elem) {
		elem.style.display = "block";
		elem.style.opacity = 0;
		setTimeout(function() {
			elem.style.opacity = 1;
			elem.style.transition = "opacity 1s";
		}, 100);
	}
}

function hide(id) {
	var elem = document.getElementById(id);
	if (elem) {
		elem.style.opacity = 0;
		elem.style.transition = "opacity 1s";
	}
	setTimeout(function(){
		elem.style.display = "none";
	}, 1000);
}

function eventListenersOn() {
	for (var i = 0; i < arguments.length; i++) {
		var event = arguments[i];
		setTimeout(function() {
			window.addEventListener(arguments[0], Action.switch, false);
		}, 50, event);
	}
}

function eventListenersOff() {
	for (var i = 0; i < arguments.length; i++) {
		window.removeEventListener(arguments[i], Action.switch, false);
	}
}

function addSwitchBackground() {
	var switchBackground = document.getElementById("switchBackground");
	switchBackground.style.opacity = 1;
	switchBackground.style.transition = "1s";
}

function removeSwitchBackground() {
	var switchBackground = document.getElementById("switchBackground");
	switchBackground.style.opacity = 0;
	switchBackground.style.transition = "1s";
}

function checkName() {
	var nameText = document.getElementById("nameText");
	var nameButton = document.getElementById("nameButton");
	
	if(nameText.value != "") {
		nameButton.disabled = false;
		return true;
	} else {
		nameButton.disabled = true;
		return false;
	}
}

function fontsCalc() {
	var fontSize = Math.sqrt(window.innerWidth) / 2;
	document.body.style.fontSize = fontSize + "pt"; 
}
	
function choosingLady() { // NADO DOPISATTTTTTTTT
	removeSwitchBackground();
		
	var ladiesTable = document.getElementById("ladiesTable");
	for (var i = 1; i <= N_GIRLS; i++) {
		ladiesTable.innerHTML += "";
		if (i == 14) {
		
		}
			
		if (i % 5 == 0) {
			ladiesTable.innerHTML += "";
		}
	}
	addSwitchBackground();
	currAct++;
} //-----------------------------------------

function choosing(nMessages, messages) {
	eventListenersOff("keydown", "click");
	setTimeout(function() {
		var elem = document.getElementById(Action.current);
		if (!elem) {
			document.body.innerHTML += "<div id='" + Action.current + "' class = 'choosing'></div>";
			elem = document.getElementById(Action.current);
		}
		elem.innerHTML = "";
		for (var i = 0; i < nMessages; i++) {
			elem.innerHTML += "<p onClick=\"setCurrentAct(" + messages[i].next + "); Action.switch('null'); eventListenersOn('keydown', 'click');\">" + messages[i].message + "</p>";
		}
		show(Action.current); 
	}, 1000);
}

function showGym(time) {
	eventListenersOff("keydown", "click");
	removeSwitchBackground();
	setTimeout(function() {
		addSwitchBackground();
		eventListenersOn("keydown", "click");
		setCurrentAct(Action.list[Action.current].next);
		Action.switch("null");
	}, time);
}

function changeBackground(background) {
	if (background != currentBackgroundImage) { 
		document.body.style.backgroundImage = "url('images/" + background + "')";
		document.body.style.backgroundSize = "cover"; 
		document.body.style.transition = "1s ease-out";
		currentBackgroundImage = Action.list[Action.current].background;
	}	
}

function readName(event) {
	if (event == null || event.keyCode == 13) {
		if (player.name == "" && checkName()) {
			window.removeEventListener("keydown", readName, false);
			player.name = nameText.value;
			setTimeout(startGame, 100);
		}
	}
}

function setCurrentAct(act) {
	Action.previous = Action.current;
	Action.current = act;
}

function startGame() {
	Music.on('mainTheme');
	nameText = document.getElementById("nameText");
	nameButton = document.getElementById("nameButton");
	
	nameText.disabled = true;
	nameButton.disabled = true;
	Action.calc();
	hide("getName");
	addSwitchBackground();
	Action.switch("null");
	eventListenersOn("keydown", "click");
}

var Music = new Object();
Music.mainTheme = new Audio();
Music.firstDance = new Audio();
Music.secondDance = new Audio();
Music.thirdDance = new Audio();
Music.mainTheme.src = 'sounds/M83 - We Own The Sky.mp3';
Music.firstDance.src = 'sounds/dance1.mp3';
Music.secondDance.src = 'sounds/dance2.mp3';
Music.thirdDance.src = 'sounds/dance3.mp3';

Music.on = function(song) {
	this[song].play();
}
Music.off = function(song) {
	this[song].pause();
}

var choosingPhrases = new Array();
for (var i = 0; i < N_CHOOSINGS; i++) {
	choosingPhrases[i] = new Array();
	for (var j = 0; j < MAX_N_CHOOSING_PHRASES; j++) {
		choosingPhrases[i][j] = new Object();
		choosingPhrases[i][j].message = "";
		choosingPhrases[i][j].next = 0;
	}
}

Action = new Object();
Action.list = new Array();
Action.current = 0;
Action.previous = 0;
Action.calced = 0;
Action.add = function(type, person, message, background, next) {
	this.list[Action.calced] = new Object();
	this.list[Action.calced].type = type;
	this.list[Action.calced].person = person;
	this.list[Action.calced].message = message;
	this.list[Action.calced].background = background;
	this.list[Action.calced].next = next;
	Action.calced++;
}

Action.calc = function() {
	this.add("", "Марина Васильевна", "Уже май, совсем скоро выпускной! Нужно обязательно станцевать вальс, ведь это самая запоминающаяся часть выпускного вечера!", "marina.gif", 1);
	this.add("", player.name, "Я даже не знаю с чего начать..", "marina.gif", 2);
	this.add("", "Марина Васильевна", "Спроси у Вани, я думаю, он будет рад помочь.", "marina.gif", 3);
	this.add("", player.name, "Эй, Ваня!", "vanya.gif", 4);
	this.add("", "Ваня", "Здарова, " + player.name + "!", "vanya.gif", 5);
	this.add("", player.name, "Марина Васильевна сказала мне танцевать вальс, а я не знаю с чего начать! Помоги.", "vanya.gif", 6);
	this.add("", "Ваня", "Для начала найди партнёршу.", "vanya.gif", 7);
	this.add("", "Ваня", "У меня есть одна знакомая, которую ты можешь попробовать пригласить. Наверное, она сейчас в столовой.", "vanya.gif", 8);	
	this.add("", player.name, "Как я её найду?", "vanya.gif", 9);
	this.add("", "Ваня", "Она зеленоглазая блондинка. Сегодня я видел её. Она в зелёной кофточке с красными украшениями.", "vanya.gif", 10);
	this.add("ladies", null, null, "dark_forest.gif", 11); // CHOOSING_LADY_ACT = 10
	this.add("", "Ваня", "Чувааак, кого ты себе выбрал??", "vanya.gif", 10); // BAD_LADY_ACT = 11
	this.add("", "Саша", "Привет.", "sasha-hi.gif", 13);
	this.add("", "Ваня", "Расскажи ей, какой ты мужественный. Так ты её покоришь", "vanya.gif", 14);
	choosingPhrases[0][0].message = "Потанцуй со мной, пожалуйста, меня в младшей школе обижали.";
	choosingPhrases[0][0].next = PLEASE_TO_SASHA_ACT;
	choosingPhrases[0][1].message = "Я делаю 25 на брусьях!";
	choosingPhrases[0][1].next = HANDSOME_TO_SASHA_ACT;
	choosingPhrases[0][2].message = "Привет, не хочешь потанцевать со мной?";
	choosingPhrases[0][2].next = NORM_TO_SASHA_ACT;
	this.add("choosing", 3, choosingPhrases[0], "sasha-hi.gif", 14); // CHOOSE_HI_TO_SASHA_ACT = 14
	this.add("", player.name, "Потанцуй со мной, пожалуйста, меня в младшей школе обижали.", "sasha-hi.gif", 18); // PLEASE_TO_SASHA_ACT = 15
	this.add("", player.name, "Я делаю 25 на брусьях!", "sasha-hi.gif", 19); // HANDSOME_TO_SASHA_ACT = 16
	this.add("", player.name, "Привет, не хочешь потанцевать со мной?", "sasha-hi.gif", 20); // NORM_TO_SASHA_ACT = 17
	this.add("", "Саша", "Мне очень жаль.", "sasha-bad.gif", 21);
	this.add("", "Саша", "Ну и как дела в качалке?", "sasha-bad.gif", 21);
	this.add("", "Саша", "А давай. Пойдём к Артёму, запишемся.", "sasha-good.gif", 22);
	this.add("", player.name, "Что-то я сделал не так..", "dark_forest.gif", 14);
	this.add("", "Артём", "Здравствуйте, ребята! Вы как раз вовремя. Сегодня у нас первая репетиция.", "artem.gif", 23);
	this.add("", "Артём", "Ничего сложного, нужно всего лишь научиться шагать в ритме вальса.", "artem.gif", 24);
	this.add("", "Артём", "И да. Никто пока не терял здесь монетки, поэтому не стоит внимательно смотреть в пол.", "artem.gif", 25);
	choosingPhrases[1][0].message = "Попробовать";
	choosingPhrases[1][0].next = FIRST_DANCE_ACT;
	this.add("choosing", 1, choosingPhrases[1], "artem.gif", 25);
	this.add("dance", 1, null, "dark_forest.gif", null);	// FIRST_DANCE_ACT = 26
	this.add("", "Артём", "Хорошо.", "artem.gif", 29);
	this.add("", "Артём", "Плохо.", "artem.gif", 30);
	this.add("", "Марина Васильевна", "Как успехи?", "marina.gif", 31);
	this.add("", "Марина Васильевна", "Как успехи?", "marina.gif", 32);
	this.add("", player.name, "Лучше не бывает! Спасибо, что посоветовали танцевать вальс.", "marina.gif", 33);
	this.add("", player.name, "Так себе.", "marina.gif", 34);
	this.add("", "Марина Васильевна", "Ещё бы! Я знаю, о чём говорю.", "marina.gif", 35);
	this.add("", "Марина Васильевна", "Ещё не вечер.", "marina.gif", 35);
	choosingPhrases[2][0].message = "Пойду в тренажёрку. До свидания!";
	choosingPhrases[2][0].next = GOOD_BYE_TO_MARINA;
	choosingPhrases[2][1].message = "Пойду прогуляюсь. До свидания!";
	choosingPhrases[2][1].next = GOOD_BYE_TO_MARINA;
	choosingPhrases[2][2].message = "Можно вам сейчас Shopping рассказать?";
	choosingPhrases[2][2].next = BAD_BYE_TO_MARINA;
	this.add("choosing", 3, choosingPhrases[2], "marina.gif", 35); // CHOOSE_BYE_TO_MARINA = 35
	this.add("", "Марина Васильевна", "Всего доброго!", "marina.gif", 38); // GOOD_BYE_TO_MARINA = 36
	this.add("", "Марина Васильевна", "У меня планы на вечер, давай в другой раз.", "marina.gif", 35); // BAD_BYE_TO_MARINA = 37
	this.add("show_kachalka", 2000, null, "gym.gif", 39);
	this.add("", "Ваня", "Ооо, " + player.name + "!", "vanya-smile.gif", 40);
	this.add("", player.name, "Привет, Ваня.", "vanya-smile.gif", 41);
	this.add("", "Ваня", "Решил подкачаться?", "vanya-laugh.gif", 42);
	this.add("", player.name, "Да, нужно бы привести себя в форму. Я же в четвертом заходе.", "vanya-laugh.gif", 43);
	this.add("", "Ваня", "Красавчик.", "vanya-smile.gif", 44);
	this.add("", "Ваня", "Хочешь расскажу кое-что?", "vanya-smile.gif", 45);
	this.add("", player.name, "Давай.", "vanya-smile.gif", 46);
	this.add("", "Ваня", "Походу вчера в качалку приходили какие-то телочки.", "vanya-look.gif", 47);
	this.add("", player.name, "Ууу.", "vanya-look.gif", 48);
	this.add("", "Ваня", "Смотри, что я нашёл.", "earrings.gif", 49);
	this.add("", player.name, "Серёжки?", "vanya-smile.gif", 50);
	this.add("", "Ваня", "Да", "vanya-smile.gif", 51);
	this.add("", player.name, "Стоп, Ваня. Кажется, я знаю, чьи это. Можешь дать их мне?", "vanya-smile.gif", 52);
	this.add("", "Ваня", "Конечно, " + player.name + ", для тебя ничего не жалко.", "vanya-smile.gif", 53);
	this.add("", "Ваня", "Что ж, хватит трепаться, пора качаться.", "vanya-smile.gif", 54);
	this.add("", player.name, "За дело!", "vanya-smile.gif", 55);
	this.add("show_kachalka", 4000, null, "gym.gif", 56);
	this.add("", player.name, "Уфф.", "vanya-smile.gif", 57);
	this.add("", "Ваня", "Уже уходишь?", "vanya-look.gif", 58);
	this.add("", player.name, "Да, спасибо за тренировку.", "vanya-look.gif", 59);
	this.add("", "Ваня", "Всегда пожалуйста. Удачи!", "vanya-smile.gif", 60);
	this.add("", player.name, "Пока.", "vanya-smile.gif", 61);
	this.add("", "Саша", "Здравствуй, " + player.name + "!", "no-earrings.gif", 62);
	this.add("", player.name, "Привет. Как дела?", "no-earrings.gif", 63);
	this.add("", "Саша", "Я потеряла свои серёжки. Ты их не видел случайно?", "sasha-sad.gif", 64);
	this.add("", player.name, "Может и видел. Это не твои случайно?", "sasha-sad.gif", 65);
	this.add("", "Саша", "Мои! Спасибо, " + player.name + "!", "sasha-happy.gif", 66);
	this.add("", player.name, "Брось, пустяки.", "sasha-happy.gif", 67);
	this.add("", "Саша", "У нас скоро репетиция. Пойдём?", "sasha-happy.gif", 68);
	this.add("", player.name, "Да.", "sasha-happy.gif", 69);
	this.add("", "Артём", "Всем привет. С каждым разом вас всё больше. Сегодня попробуем танцевать в парах.", "artem.gif", 70);
	this.add("", "Артём", "Поехали. Раз-два-три, два-два-три..", "artem.gif", 71);
	choosingPhrases[3][0].message = "Танцевать";
	choosingPhrases[3][0].next = SECOND_DANCE_ACT;
	this.add("choosing", 1, choosingPhrases[1], "artem.gif", 72); 
	this.add("dance", null, null, "dark_forest.gif", null); // SECOND_DANCE_ACT = 72
	
}

function dance(number) {
	removeSwitchBackground();
	eventListenersOff("keydown", "click");
	var danceBlock = document.getElementById("danceFloor");
	danceBlock.style.display = "block";
	Music.off("mainTheme");
	Music.on("firstDance");
	dance1();
	
}

Action.switch = function(event) {
	if (event.type == "keydown") {
		if (event.keyCode != 13) {
			return;
		}
	}	
	
	if (Action.current != 0) { // first act
		hide(Action.previous);
	}
	
	if (Action.list[Action.current].type != "") {
		changeBackground(Action.list[Action.current].background);
		if (Action.list[Action.current].type == "ladies") {  // act with Vanya's girls -----------------------
			choosingLady();
		} else if (Action.list[Action.current].type == "choosing") { // choose smth -----------------------
			choosing(Action.list[Action.current].person, Action.list[Action.current].message); 
		} else if (Action.list[Action.current].type == "show_kachalka") { // show sport gym -----------------------
			showGym(Action.list[Action.current].person);
		} else if (Action.list[Action.current].type == "dance") { // dancing ---------------------------
			dance(Action.list[Action.current].person);
		}
			
		return;
	}
	changeBackground(Action.list[Action.current].background); // change background image
	eventListenersOff("keydown", "click");
	setTimeout(function() {
		if (Action.list[Action.current].person != null) {
			document.body.innerHTML += "<div id='" + Action.current + "' class='text'> <p class='text-person'>" + Action.list[Action.current].person + ":</p> <p><br>" + Action.list[Action.current].message + "</p> </div>"; 
		}
		show(Action.current);
		eventListenersOn("keydown", "click");
		Action.previous = Action.current;
		Action.current = Action.list[Action.current].next;
	}, 1000);
}

var player = new Object();
player.name = "";

var currentBackgroundImage = "";

window.addEventListener("keydown", readName, false);
