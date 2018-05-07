function play(){
  document.getElementById("audio").play();
  document.getElementById("pause").style.display = 'block';
  document.getElementById("play").style.display = 'none';
}
function pause(){
  document.getElementById("audio").pause();
  document.getElementById("pause").style.display = 'none';
  document.getElementById("play").style.display = 'block';
}



