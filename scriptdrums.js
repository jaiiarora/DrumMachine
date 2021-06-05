console.log("Hello");
console.log("Script File");
/*var padOne = new Audio('SD0025.mp3');
padOne.load();
padOne.play();*/
var allbox = document.getElementsByClassName("box");
var ln = allbox.length;
var pad = [];
pad.push(new Audio('music/1.mp3'));
pad.push(new Audio('music/2.mp3'));
pad.push(new Audio('music/3.mp3'));
pad.push(new Audio('music/4.mp3'));
pad.push(new Audio('music/5.mp3'));
pad.push(new Audio('music/6.mp3'));
pad.push(new Audio('music/7.mp3'));
pad.push(new Audio('music/8.mp3'));
pad.push(new Audio('music/9.mp3'));
allbox[0].onclick = function () {
  pad[0].load();
  pad[0].play();
};
allbox[1].onclick = function () {
  pad[1].load();
  pad[1].play();
};
allbox[2].onclick = function () {
  pad[2].load();
  pad[2].play();
};
allbox[3].onclick = function () {
  pad[3].load();
  pad[3].play();
};
allbox[4].onclick = function () {
  pad[4].load();
  pad[4].play();
};
allbox[5].onclick = function () {
  pad[5].load();
  pad[5].play();
};
allbox[6].onclick = function () {
  pad[6].load();
  pad[6].play();
};
allbox[7].onclick = function () {
  pad[7].load();
  pad[7].play();
};
allbox[8].onclick = function () {
  pad[8].load();
  pad[8].play();
};