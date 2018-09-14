var x = 235; //Starting x coord.
var y = 1200; //Starting y coord.
var max_x = 1550; //maximum x coord.
var max_y = 1360; //maximum y coord.
var max_z = 1200;
var max_f = 235;
var xoffset = 10; //Move 10px every step
var yoffset = 10; //Move 10px every step
var TimeID;
function moveLogo() {
  x = x + xoffset;
  y = y + yoffset;


//Move the image to the new location
  document.getElementById("msucs").style.top = y+'px';
  document.getElementById("msucs").style.left = x+'px';
//if reach boundaries, reset offset vectors
  if ((x+xoffset > max_x) || (x+xoffset < max_f) || (x+xoffset < 0)) xoffset *=-1;
  if ((y+yoffset > max_y) || (y+xoffset < max_z) ||(y+yoffset < 0)) yoffset *=-1;
  TimeID = window.setTimeout('moveLogo()',100);		//call moveLogo every 100 ms
}