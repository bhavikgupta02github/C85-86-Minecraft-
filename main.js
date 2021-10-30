c1=new fabric.Canvas("myCanvas")
px=10;
py=10;
blockw=30;
blockh=30;
Player="";
block="";

function playerupdate(){
  fabric.Image.fromURL("player.png",function(Img){
    Player=Img;
    Player.scaleToWidth(150);
    Player.scaleToHeight(150);
    Player.set({
        top:py,left:px
    });
    c1.add(Player);
  }
  );
}

function newImage(getImage){
    fabric.Image.fromURL(getImage,function(Img){
        block=Img;
        block.scaleToWidth(blockw);
        block.scaleToHeight(blockh);
        block.set({
            top:py,left:px
        });
        c1.add(block);
    }
    );
}

window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
      up();console.log("Upkey has been pressed");
    }
    if(keypress=='40'){
        down();console.log("Downkey has been pressed");
      }
    if(keypress=='37'){
        left();console.log("Leftkey has been pressed");
      }
    if(keypress=='39'){
        right();console.log("Rightkey has been pressed");
      }
    if(keypress=='87'){
        newImage("wall.jpg");console.log("W key has been pressed");
      }
    if(keypress=='71'){
        newImage("ground.png");console.log("G key has been pressed");
      }
    if(keypress=='76'){
        newImage("light_green.png");console.log("L key has been pressed");
      }
    if(keypress=='84'){
        newImage("trunk.jpg");console.log("T key has been pressed");
    }
    if(keypress=='82'){
        newImage("roof.jpg");console.log("R key has been pressed");
    }
    if(keypress=='89'){
        newImage("yellow_wall.png");console.log("Y key has been pressed");
    }
    if(keypress=='68'){
        newImage("dark_green.png");console.log("D key has been pressed");
    }
    if(keypress=='85'){
        newImage("unique.png");console.log("U key has been pressed");
    }
    if(keypress=='67'){
        newImage("cloud.jpg");console.log("C key has been pressed");
    }
}


function up(){
    if(py>=0){
        py=py-10;
        c1.remove(Player);
        playerupdate();
    }
}
function down(){
    if(py<=500){
        py=py+10;
        c1.remove(Player);
        playerupdate();
    }
}
function left(){
    if(px>=0){
        px=px-10;
        c1.remove(Player);
        playerupdate();
    }
}
function right(){
    if(px<=850){
        px=px+10;
        c1.remove(Player);
        playerupdate();
    }
}