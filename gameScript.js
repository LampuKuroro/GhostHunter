
//All function declaration_______________________________________________________________________________

//player and enemy_______________________________________________________________________________
var player={
	getInfo: function(){
		if(this.hp<=0){this.hp=0;}
		if(this.hp>this.maxhp){this.hp=this.maxhp;}
		return "<img src=\""+ this.img +"\" width=\"100\">" +"<p>"+ this.name+"<br> lv: "+this.lv +"<br>HP: "+ this.hp +"<br>SP: "+this.sp+"<br>Attack: "+this.atk
		+"<br>Defense: "+this.dep+"<br>"+this.des+"<br>Magic: "+this.mades;
	},
	
	getStat: function(){
		if(this.hp<=0){this.hp=0;}
		if(this.hp>this.maxhp){this.hp=this.maxhp;}
		document.getElementById("myhp").innerHTML="hp: "+ this.hp;
		document.getElementById("myhp").style.width = (this.hp/this.maxhp*100) + '%'; 
		document.getElementById("mysp").innerHTML="sp: "+this.sp;
		document.getElementById("mysp").style.width = (this.sp/this.maxsp*100) + '%'; 
		return this.name+" lv: "+this.lv;
	},
	fullheal: function(){
		this.hp=this.maxhp;
		this.sp=this.maxsp;
	},
	lvUp: function(){ 
	this.lv = this.lv+1;
	this.maxhp = this.maxhp+10;
	this.maxsp = this.maxsp+2;
	this.hp = this.maxhp;
	this.sp = this.maxsp;
	this.atk = this.atk+1;
	this.dep = this.dep+1;
	return this.name+ " level up!";}
	
}

var enemy ={
	getInfo: function(){
		if(this.hp<=0){this.hp=0;}
		if(this.hp>this.maxhp){this.hp=this.maxhp;}
		return "<img src=\""+ this.img +"\" width=\"100\">" +"<p>"+ this.name+"<br> lv: "+this.lv +"<br>HP: "+ this.hp +"<br>Attack: "+this.atk
		+"<br>Defense: "+this.dep+ "<br> Reward money: "+this.gold+"<br>"+this.des;
	},
	getStat: function(){
		if (this.hp<=0){ this.hp=0;}
		if(this.hp>this.maxhp ){this.hp=this.maxhp;}
		document.getElementById("itshp").innerHTML=this.hp;
		document.getElementById("itshp").style.width = (this.hp/this.maxhp*100) + '%'; 
		return this.name+"<br>lv: "+this.lv;
	},
	respawn: function(){
		this.hp = this.maxhp;
		return this.name+" respawned!";
	},
	getmoney: function(){
		mygold= mygold + this.gold;
	}
	
}

//MENU  function declaration_______________________________________________________________________________
function chooseEnemy(){
	document.getElementById("shop").style.display="none";
	document.getElementById("inventory").style.display="none";
	document.getElementById("bounty").style.display = "block";
}

function shop(){
	document.getElementById("bounty").style.display="none";
	document.getElementById("inventory").style.display="block";
	document.getElementById("shop").style.display = "block";
}

function inventory(){
	document.getElementById("shop").style.display="none";
	document.getElementById("bounty").style.display="none";
	document.getElementById("inventory").style.display = "block";
}

	function startBattle(){
			document.getElementById("stage").style.display = "block";
			document.getElementById("home").style.display="none";
			document.getElementById("start").style.visibility ="hidden";
			var meList = document.getElementsByName('aMe'); 
			var notmeList = document.getElementsByName('aNotme'); 
			var val = meList[0].value;
            for(i = 0; i < meList.length; i++) { 
                if(meList[i].checked) 
				 val=meList[i].value;
            }
			switch(val) {
				case "miku":
					me = miku;
					break;
				case "luka":
					me = luka;
					break;
				case "rin":
					me = rin;
					break;
				default:
					me = miku;
			}
			for(i = 0; i < notmeList.length; i++) { 
                if(notmeList[i].checked) 
				 val=notmeList[i].value;
            }
			switch(val) {
				case "ghost":
					notme = ghost;
					break;
				case "cuteG":
					notme = cuteG;
					break;
				case "coolG":
					notme = coolG;
					break;
				case "mimikyu":
					notme = mimikyu;
					break;
				default:
					notme = ghost;
			}
			document.getElementById("playerSprite").src = me.img;
			myStat.innerHTML = player.getStat.call(me);
			
			document.getElementById("enemySprite").src = notme.img;
			log.innerHTML =  notme.name +" suddenly appeared!";
			itsStat.innerHTML = enemy.getStat.call(notme);

		}
	
	
//BATTLE function declaration_______________________________________________________________________________


	function attack(){
		log.innerHTML = me.name+" Attack!"
		notme.hp = Math.round(notme.hp-me.atk*(1- notme.dep/100));
		itsStat.innerHTML = enemy.getStat.call(notme);
		if(notme.hp <= 0){
			itsStat.innerHTML = enemy.getStat.call(notme);
			setTimeout(win,500);
		}else{
			setTimeout(counter,700);
			}
	}
	
	function guard(){
		log.innerHTML = me.name+" guard!"
		var tempt=me.dep;
		me.dep= me.dep*3;
		setTimeout(counter,700);
		setTimeout(function(){
			me.dep= tempt;
		},800);
	}
	var sleep=0;
	function magic(){
		if(me.sp>=10){
		log.innerHTML = me.name+" use "+ me.magic+"!";
		me.sp = me.sp -10;
		player.getStat.call(me);
		switch(me.magic) {
				case "heal":
					me.hp = Math.round(me.hp+(me.maxsp * 0.5));
					player.getStat.call(me);
					break;
				case "sleep":
					sleep=3;
					break;
				case "blaze":
					notme.hp = Math.round(notme.hp-me.maxsp*(1- notme.dep/100));
					itsStat.innerHTML = enemy.getStat.call(notme);
					break;
				default:
					log.innerHTML = "Somthing is wrong!";
			}
		setTimeout(counter,700);}
		else{log.innerHTML = "You don't have enough sp to perform!";}
	}
		
		function win(){
			log.innerHTML ="You won!";
			mygold = mygold +notme.gold;
			document.getElementById("enemySprite").src = "img/space.png";
			setTimeout(function(){
				log.innerHTML = player.lvUp.call(me);
				myStat.innerHTML = player.getStat.call(me);
			},1000);
			setTimeout(function(){
				document.getElementById("restart").style.visibility = "visible";
				document.getElementById("stop").style.visibility = "visible";
			},2000);
			
		}
		
		function lose(){
			log.innerHTML = me.name+" is knocked out!";
			document.getElementById("playerSprite").src = "img/space.png";
			setTimeout(function(){
				document.getElementById("restart").style.visibility = "visible";
				document.getElementById("stop").style.visibility = "visible";
			},500);
			
		}
		function counter(){
			if(sleep==0){
			log.innerHTML = notme.name+" strike back!";
			me.hp = Math.round(me.hp-notme.atk*(1- me.dep/100));
			myStat.innerHTML = player.getStat.call(me);
			if(me.hp<=0){
				myStat.innerHTML = player.getStat.call(me);
				setTimeout(lose,500);
			}}
			else{
				log.innerHTML = notme.name+" is asleep";
				sleep--;
			}
		}
	
function goHome(){
	enemy.respawn.call(notme);
	player.fullheal.call(me);
	money.innerHTML ="Money: "+mygold;
	document.getElementById("home").style.display="block";
	document.getElementById("stage").style.display="none";
	document.getElementById("start").style.visibility ="visible";
	document.getElementById("restart").style.visibility = "hidden";
	document.getElementById("stop").style.visibility = "hidden";
}

function start(){
			log.innerHTML = enemy.respawn.call(notme);
			document.getElementById("playerSprite").src = me.img;
			player.fullheal.call(me);
			myStat.innerHTML = player.getStat.call(me);
			document.getElementById("enemySprite").src = notme.img;
			itsStat.innerHTML = enemy.getStat.call(notme);
			document.getElementById("restart").style.visibility = "hidden";
			document.getElementById("stop").style.visibility = "hidden";
		} 	

function updateLog(x){
	log.innerHTML =x;
}
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function onNotme() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").innerHTML = enemy.getInfo.call(notme);
}
function off() {
  document.getElementById("overlay").style.display = "none";
}

function onme() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("overlay").innerHTML = player.getInfo.call(me);
}