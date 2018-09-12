$(document).ready(function() {
           $('.front').addClass('animated slideInLeft');
       });
       
       const mq = window.matchMedia( "(min-width: 680px)" );
     if(mq.matches) {
         
    var moonDraw=function(travel){
           
        with(travel){
            size(1350,750);
            var ex = 1500;
            var sx = 1500;
            draw= function() {
                background(23,7,56);
                noStroke();
                //backCloud
                fill(180,35,130);
                ellipse(560,500,40,40);
                ellipse(620,480,100,90);
                ellipse(680,490,60,60);
                ellipse(720,500,40,40);
                
                //moon
                fill(200,160,200,20);
                ellipse(ex-(mouseX/26),400-(mouseY/12),900,900);
                fill(200,160,200,5);
                ellipse(ex-(mouseX/26),400-(mouseY/12),700,700);
                fill(217, 247, 255);
                ellipse(ex-(mouseX/22),400-(mouseY/12),500,500);
                fill(200, 240, 245);
                //spot
                ellipse(sx-(mouseX/22),300-(mouseY/12),100,100);
                ellipse(sx-(mouseX/22),460-(mouseY/12),180,180);
                //firstCloud
                stroke(200,35,130);
                strokeWeight(35);
                fill(200,35,130);
                ellipse(1020,350,50,40);
                ellipse(1110,335,120,90);
                ellipse(1180,350,60,50);
                ellipse(1230,355,20,20);
                //secondCLoud
                ellipse(700,600,30,30);
                ellipse(770,580,100,90);
                ellipse(830,590,60,60);
                ellipse(880,600,40,40);
                //stars
                stroke(255, 255, 255);
                strokeWeight(6);
                point(665 -(mouseX/25),115-(mouseY/22));
                point(700 -(mouseX/25), 200-(mouseY/22));
                point(1260 -(mouseX/25),265-(mouseY/22));
                point(1200 -(mouseX/25),150-(mouseY/22));
                point(1160 -(mouseX/25),665-(mouseY/22));
                point(565 -(mouseX/25),315-(mouseY/22));
                point(500 -(mouseX/25), 400-(mouseY/22));
                point(1060 -(mouseX/25),765-(mouseY/22));
                
                if(ex>900) {
                  ex=ex-4;
                }
                if(sx>800) {
                    sx=sx-4;
                }
                    
                    }
           }
        };  
        var canvas=document.getElementById("canvas");
        var processor=new Processing(canvas, moonDraw);
         
     }
       else {
           document.getElementById('canvas').style.backgroundImage="url('images/cover1.jpg')";
           
       }