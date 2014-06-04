/*
     Name:Seth Healy
     Date:06/03/14
     Class & Section:  WIA-1406
     Comments: "HTML5 Canvas Drawing"
 */


/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below

********************************************/

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

                    window.onload=function(){
                    var theCanvas=document.getElementById('Canvas');
                        if(theCanvas){
                            var ctx=theCanvas.getContext("2d");
                            if (ctx){
                                ctx.strokeStyle="black";
                                ctx.fillStyle="lightblue";
                                ctx.lineWidth=1;
                                ctx.strokeRect(0, 0, 50, 100);
                                ctx.fillRect(0,0,50,100);
                            }
                        }



/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


                    var theCanvas=document.getElementById('Canvas2');
                        if (theCanvas) {
                    var ctx = theCanvas.getContext("2d");
                    if (ctx) {
                        ctx.strokeStyle="black";
                        ctx.fillStyle="rgba(200,0,0,.5)";
                        ctx.lineWidth=1;

                        var degree =360;
                        var radians=(Math.PI/180)*degree;
                        ctx.beginPath();
                        ctx.arc(50,50,30,0,radians);
                        ctx.fill();
                        ctx.stroke();

     }
  }



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


                    var theCanvas3= document.getElementById("Canvas3");
                    if(theCanvas3){
                        var ctx= theCanvas3.getContext("2d");
                        if(ctx){
                            ctx.lineWidth=5;
                            ctx.strokeStyle="black";
                            ctx.lineJoin="round";
                            ctx.beginPath();
                            ctx.moveTo(100,100);
                            ctx.lineTo(110,60);
                            ctx.lineTo(120,90);
                            ctx.lineTo(150,100);
                            ctx.lineTo(135,120);
                            ctx.lineTo(145,170);
                            ctx.lineTo(120,150);
                            ctx.lineTo(120,150);
                            ctx.lineTo(100,170);
                            ctx.lineTo(100,125);
                            ctx.lineTo(80,100);
                            ctx.lineTo(100,100);
                            ctx.fillStyle="yellow";
                            ctx.stroke();
                            ctx.fill();
   }
  }




/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

                var theCanvas = document.getElementById('Canvas4');
                if (theCanvas) {
                    var ctx = theCanvas.getContext("2d");
                    if (ctx) {
                        ctx.strokeStyle="green";
                        ctx.lineWidth=5;

                        ctx.beginPath();
                        ctx.arc(250,150,100,1*Math.PI,0*Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(185,150,32,1*Math.PI,0*Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(250,150,32,1*Math.PI,0*Math.PI);
                        ctx.stroke();
                        ctx.beginPath();
                        ctx.arc(315,150,32,1*Math.PI,0*Math.PI);
                        ctx.stroke();

          }
      }
/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

    var theCanvas = document.getElementById('Canvas5');
    if (theCanvas) {
    var ctx = theCanvas.getContext("2d");
    if (ctx) {


            var theString="My Text is on Canvas";
            // ctx.fillText(theString,20,20);

            ctx.font="20pt Papyrus";
            ctx.textBaseline="middle";
            ctx.fillStyle="red";
            ctx.fillText(theString,150,150);


        }
    }

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

var theCanvas = document.getElementById('Canvas6');
      var cxt = theCanvas.getContext('2d');
      var imageObj = new Image();

      imageObj.onload = function() {
        cxt.drawImage(imageObj, 0, 0, 300, 200);
        cxt.drawImage(imageObj, 0, 0, imageObj.width/2, imageObj.height/2);
        cxt.drawImage(imageObj, 180, 200,300,850,10,200,100,100);
      };
        imageObj.src = 'image/logo.png';









/*******************************************
PART 7

Putting it all together.

Using a combination of all the methods.
Create a complex scene.
You must use at least 3 different methods.

********************************************/


                    var theCanvas=document.getElementById('Canvas7');
                        if (theCanvas) {
                    var ctx = theCanvas.getContext("2d");
                    if (ctx) {
                        ctx.strokeStyle="black";
                        ctx.fillStyle="blue";
                        ctx.lineWidth=1;

                        var degree =360;
                        var radians=(Math.PI/180)*degree;
                        ctx.beginPath();
                        ctx.arc(250,150,100,0,radians);
                        ctx.fill();
                        ctx.stroke();

                        ctx.lineWidth=5;
                        ctx.strokeStyle="black";
                        ctx.lineJoin="square";
                        ctx.beginPath();
                        ctx.moveTo(300,100);
                        ctx.lineTo(275,150);
                        ctx.moveTo(300,150);
                        ctx.lineTo(275,100);
                        ctx.stroke();

                        ctx.lineWidth=5;
                        ctx.strokeStyle="black";
                        ctx.lineJoin="square";
                        ctx.beginPath();
                        ctx.moveTo(230,100);
                        ctx.lineTo(205,150);
                        ctx.moveTo(230,150);
                        ctx.lineTo(205,100);
                        ctx.stroke();

                        ctx.beginPath();
                        ctx.arc(250,200,30,1*Math.PI,0*Math.PI);
                        ctx.strokeStyle="red";
                        ctx.stroke();



     }
  }








}
