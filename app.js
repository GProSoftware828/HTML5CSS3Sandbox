//All of this is for canvas tags in html which also are areas of the screen with
//size/attribute details in html and css.

    //Create a rect to change bkgd color
    var c1 = document.getElementById('canvas1');
    var c1x = c1.getContext('2d');

    c1x.fillStyle = 'white';
    c1x.fillRect(0,0,300,300);
    //0 from left, 0 from top, width, height

    //Create a line
    var c2 = document.getElementById('canvas2');
    var c2x = c2.getContext('2d');

    //Starting point
    c2x.moveTo(0,0);
    //Ending point
    c2x.lineTo(200, 100);
    c2x.stroke();
    //0 from left, 0 from top, width, height

    //Circle
    var c3 = document.getElementById('canvas3');
    var c3x = c3.getContext('2d');
    c3x.beginPath();
    c3x.arc(100,100,50,0,2*Math.PI);
    c3x.stroke();
    //c3x.arc(width,height,radius,startangle,endangle)

    //Text w/ color and placement
  var c4 = document.getElementById('canvas3');
  var c4x = c4.getContext('2d');
  c4x.font = '20px Arial';
  c4x.fillStyle = "red";
  c4x.textAlign = "left";
  c4x.fillText('Testing text', 10, 30); //can use strokeText to make it from lines

  //Images
  var c5 = document.getElementById('canvas5');
  var c5x = c5.getContext('2d');
  var img1 = document.getElementById('canvas_img');
  c5x.drawImage(img1, 0, 0, 150, 270);

  var c9 = document.getElementById('box-sizing');
  var c9x = c9.getContext('2d');
  c9x.font = '20px Arial';
  c9x.fillStyle = "red";
  /* c9x.textAlign = 'center'; doesn't relate alignment to canvas view- it's to something behind it */
  c9x.fillText('Hello world', 10, 30); //can use strokeText to make it from lines
