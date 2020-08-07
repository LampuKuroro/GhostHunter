//Playable characters data_______________________________________
var miku ={
	name: "Miku",
	des: "A cute hunter with the obsession with leek! There's a rumor that her sweet singing voice can heal wounds and souls.",
	img: "img/miku.PNG",
	lv: 1,
	magic: "heal",
	mades: "Heal: heal a small amount of hp.",
	maxhp:100,
	hp: 100,
	maxsp: 50,
	sp: 50,
	atk: 10,
	dep: 10
}

var luka ={
	name: "Luka",
	des: "A mature hunter that is said to be an octoling in disguise. Her singing voice can easily put people to their slumber.",
	img: "img/luka.PNG",
	lv: 1,
	magic: "sleep",
	mades: "Sleep: Put enemy to sleep for 3 turns.",
	maxhp:50,
	hp: 50,
	maxsp: 50,
	sp: 50,
	atk: 15,
	dep: 5
}

var rin ={
	name: "Rin",
	des: "A little girl with bright blond hair. She has fire elemental power though.",
	img: "img/rin.PNG",
	lv: 1,
	magic: "blaze",
	mades: "Blaze: Deals a large amount of fire damage.",
	maxhp:120,
	hp: 120,
	maxsp: 20,
	sp: 20,
	atk: 10,
	dep: 2
}

//Playable enemy data___________________________________________
 var ghost ={
	 name: "Ghost",
	 des:"This is just a place holder for the enemy. Even so, he is still doing his best! Any character would be able to take hime down as long as they don't guard all the time.",
	 img: "img/ghost.PNG",
	 lv: 1,
	 maxhp:30,
	 hp: 30,
	 atk: 15,
	 dep: 10,
	 gold:100
 }
 
  var cuteG ={
	 name: "Cute Ghost",
	 des:"Despite being so cute, her atack and depense is so low that makes her barely an apponent. Hey don't bully her so much!",
	 img: "img/cuteG.PNG",
	 lv: 1,
	 maxhp:40,
	 hp: 40,
	 atk: 5,
	 dep: 5,
	 gold:50
 }
 
  var coolG ={
	 name: "Cool Ghost",
	 des:"Being a cool ghost and all he has some pretty decent attack stat. You would be able to take him down with lv 1 Luka if you're being smart about it.",
	 img: "img/coolG.PNG",
	 lv: 2,
	 maxhp:150,
	 hp: 150,
	 atk: 60,
	 dep: 5,
	 gold:1000
 }
 
   var mimikyu ={
	 name: "Mimikyu",
	 des:"A ghost and fairy type pokemon! Was implemented as your strongest enemy. I hope nintendo won't copyright strike me on this one.",
	 img: "img/mimikyu.PNG",
	 lv: 10,
	 maxhp:1500,
	 hp: 1500,
	 atk: 600,
	 dep: 500,
	 gold:100000000
 }
 //Purchasable item___________________________________________
 var mygold=0;
 
 var sHpotion ={
	 name:"Small health potion",
	 img: "img/sh.png",
	 price: 100,
	 stock:0,
	 effect: "heal",
	 pow: 30
 }
 
  var mHpotion ={
	 name:"Medium health potion",
	 img: "img/mh.png",
	 price: 300,
	 stock:0,
	 effect: "heal",
	 pow: 80
 }
  var bHpotion ={
	 name:"Big health potion",
	 img: "img/bh.png",
	 price: 500,
	 stock:0,
	 effect: "heal",
	 pow: 120
 }
 