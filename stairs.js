//Stairs.js

var lines = 3;
var hashtag = "#";
for (var i=0; i<= lines; i++){
  document.write(hashtag);
  document.write("<br/>");
  hashtag += "#";
}
for (i=0; i<lines; i++){
  for (j=lines; j > i; j--){
    document.write("#");
  }
  document.write("<br/>");
}
