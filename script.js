var fg_image = null;
var bg_image = null;
var blank_img = null;
var bg_chooser = 0;
/*bg_chooser will change depending on the user choice 
1= file   2=color 3=transparent */
function up_fg_image(){
  var fg_can = document.getElementById("fg_can");
  var fg_file = document.getElementById("fg_file");
  fg_image = new SimpleImage(fg_file);
  fg_image.drawTo(fg_can);
}
function up_bg_image(){
  bg_chooser = 1;
  var bg_can = document.getElementById("bg_can");
  var bg_file = document.getElementById("bg_file");
  bg_image = new SimpleImage(bg_file);
  bg_image.drawTo(bg_can);
}
function color_picked(){
  bg_chooser = 2;
}
function button_clicked(){
  bg_chooser = 3;
  create_composite();
}

function create_composite(){
  if(fg_image==null || !fg_image.complete()){
    alert("A foreground image hasn't been upload or hasn't been loaded yet")
  }
  else{
  if(bg_chooser==0){
    alert("A background hasn't been chosen ")
  }}
  if(bg_chooser==1)
    {{var fg_can = document.getElementById("fg_can");
  clear_cans_wo_null();
  
  blank_img = new SimpleImage(fg_image.width,fg_image.height);
  var red ;
  var green;
  var blue;
  var x;
  var y;
  var bpix;
  for(var pix of fg_image.values()){
    red = pix.getRed();
    green = pix.getGreen();
    blue = pix.getBlue();
    x = pix.getX();
    y = pix.getY();
    if(green > (blue + red)){
      bpix = bg_image.getPixel(x,y);
      blank_img.setPixel(x,y,bpix);
    }
    else{
      blank_img.setPixel(x,y,pix);
    }
  }
  blank_img.drawTo(fg_can);}}
  if(bg_chooser==2)
    {{var fg_can = document.getElementById("fg_can");
  clear_cans_wo_null();
  var color_piker = document.getElementById("color_picker");
  
  blank_img = new SimpleImage(fg_image.width,fg_image.height);
  var red ;
  var green;
  var blue;
  var x;
  var y;
  var color = color_piker.value;
  var cpix;
      
  for(var pix of fg_image.values()){
    red = pix.getRed();
    green = pix.getGreen();
    blue = pix.getBlue();
    x = pix.getX();
    y = pix.getY();
    cpix = pix;
    if(green > (blue + red)){
      cpix.setRed(hexToRgb(color).r);
      cpix.setGreen(hexToRgb(color).g);
      cpix.setBlue(hexToRgb(color).b);
      blank_img.setPixel(x,y,cpix);
    }
    else{
      blank_img.setPixel(x,y,pix);
    }
  }
  blank_img.drawTo(fg_can);}}
  if(bg_chooser==3)
    {{var fg_can = document.getElementById("fg_can");
  clear_cans_wo_null();
  
  blank_img = new SimpleImage(fg_image.width,fg_image.height);
  var red ;
  var green;
  var blue;
  var x;
  var y;
  var tpix;
  for(var pix of fg_image.values()){
    red = pix.getRed();
    green = pix.getGreen();
    blue = pix.getBlue();
    x = pix.getX();
    y = pix.getY();
    if(green > (blue + red)){
      tpix = pix;
      tpix.setAlpha(0);
      blank_img.setPixel(x,y,tpix);
    }
    else{
      blank_img.setPixel(x,y,pix);
    }
  }
  blank_img.drawTo(fg_can);}}
  
}
function clear_cans(){
  var fg_can = document.getElementById("fg_can");
  var bg_can = document.getElementById("bg_can");
 var fg_context = fg_can.getContext("2d");
  var bg_context = bg_can.getContext("2d");
  fg_context.clearRect(0,0,fg_can.width,fg_can.height);
 bg_context.clearRect(0,0,bg_can.width,bg_can.height);
  var fg_file = document.getElementById("fg_file");
  fg_file.value=null;
  var bg_file = document.getElementById("bg_file");
  var file_name = document.getElementById("file_name");
  file_name.value = null;
  bg_file.value=null;
  fg_image = null;
  bg_image = null;
  blank_img = null;
  bg_chooser = 0;
}
function clear_cans_wo_null(){
  var fg_can = document.getElementById("fg_can");
  var bg_can = document.getElementById("bg_can");
 var fg_context = fg_can.getContext("2d");
  var bg_context = bg_can.getContext("2d");
  fg_context.clearRect(0,0,fg_can.width,fg_can.height);
 bg_context.clearRect(0,0,bg_can.width,bg_can.height);
}
/*function download_button(){
  var file_name = document.getElementById("file_name");
  if(blank_img==null){
    alert("there's no image to download ");
  }
  else{
    if(file_name.value==null){
        
      }
    else{
      var link = document.getElementById("sora");
        }
  }
}*/
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
  /*alert(hexToRgb("#0033ff").g); // "51";*/
}


