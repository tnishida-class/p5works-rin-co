// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
   noFill();
   // let x = i * 10 + 10;
   if ( i * 10 + 10 < 60) {
     stroke(0, 0, 255);//青色
   }
   else {
     stroke(255, 0, 0);//赤色
   }
ellipse(50, 50, i * 10 + 10, i * 10 + 10);
 // else {
     // stroke(255, 0, 0);//赤色
     // ellipse(50, 50, x, x);
// }
}
}








    //for(let i = 5; i < 10; i++){
      // stroke(255, 0, 0);//赤色
      // ellipse(10, 10, i);
     // }
      // for(let j = 0; j < 5; i++){
      // stroke(0, 0, 255);//青色
      // ellipse(10, 10, j);
      // BLANK[1]
