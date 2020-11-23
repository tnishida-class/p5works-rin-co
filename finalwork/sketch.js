// 最終課題を制作しよう
// let stars;
// const Y_AXIS = 2;
// let b1, b2;
// var light = (242, 184, 128);
// var dark = (75, 48, 27);
// let c = dark;
function setup(){
  createCanvas(windowWidth, windowHeight);
  // let w = windowWidth;
  // let h = windowHeight;
  // x = w / 2 - 31;
  // y = h * 2 / 7;
  // b1 = color(0, 25, 55);
  // b2 = color(100, 149,237);
  // stars = [];
}


function draw(){
  background(150, 107, 157);
  if (mouseIsPressed == true){
    // setGradient(0, 0, windowWidth, windowHeight, b1, b2, Y_AXIS);
  // let c = light;
    let starsx = [];
    let starsy = [];
    let starsize = [];
    for(let i = 0; i < 20; i++){
    starsx[i] = random(10, windowWidth);
    starsy[i] = random(0, windowHeight);
    starsize[i] = random(1, 10);
    const sx = starsx[i];
    const sy = starsy[i];
    const sz = starsize[i];
    star(sx, sy, sz);
  }
 }
  noStroke();

  let w = windowWidth;
  let h = windowHeight;
  fill(201, 134, 134);
  rect(w / 2 - 90, h * 2 / 7, 37, h / 8);//えんとつ
  fill(62, 141, 187);
  triangle(w / 2 - 150, h / 2, w / 2, h / 4, w / 2 + 150, h / 2);//屋根
  fill(255, 244, 236);
  rect(w / 2 - 113, h / 2, 226, h / 4);//かべ
  fill(231, 207, 188);
  ellipse(w / 2 - 70, h * 5 / 8, 56);
  rect(w / 2 - 98, h * 5 / 8, 56, h / 8);//ドア
  fill(201, 134, 134);
　ellipse(w / 2 - 88, h * 2 / 3, 10);//ドアノブ

  fill(231, 207, 188);
　rect(w / 2, h * 29 / 48 - 45, 100, 90);
  if (mouseX < w / 2 + 90 && mouseY < h * 29 / 48 + 35 && mouseX > w / 2 + 10 && mouseY > h * 29 / 48 - 35){
  fill(242, 184, 128);//明かり
  }else {
　fill(75, 48, 27);//暗闇
　}　
  rect(w / 2 + 10, h * 29 / 48 - 35, 80, 70);
  fill(231, 207, 188);
  rect(w / 2 + 10, h * 29 / 48 - 5, 90, 10);
  rect(w / 2 + 45, h * 29 / 48 - 45, 10, 90);//窓のガラス戸敷居
  //明かりスイッチ
  if (mouseX < w / 2 - 83 && mouseY < h * 2 / 3 + 5 && mouseX > w / 2 - 93 && mouseY > h * 2 / 3 - 5){
    moon(w / 4, h / 4, 100);
  }
}

  //屋根の模様を描く


function moon(cx, cy, r){
  noStroke();
  fill(242, 184, 128);
  ellipse(cx, cy, r);
  fill(150, 107, 157);
  ellipse(cx - r / 4, cy - r / 4, r);

}


// function setGradient(x, y, w, h, c1, c2, axis){
//   noFill();
//   for(let i = y; y <= y + h; i++){
//     let inter = map(i, y, y + h, 0, 1);
//     let c = lerpColor(c1, c2, inter);
//     stroke(c);
//     line(x, i, x + w, i);
//   }
// }
//   for(let i = 0; i < stars.length; i++){
//   let s = stars[i];
//   star(s.sx, s.sy, s.sz);//starsの中にある箱の数だけsのセットが存在する
// }
//   let starsx = [];
//   let starsy = [];
//   let starsize = [];
//   for(let i = 0; i < 20; i++){
// starsx[i] = random(10, windowWidth);
// starsy[i] = random(0, windowHeight);
// starsize[i] = random(1, 6);
// const sx = starsx[i];
// const sy = starsy[i];
// const sz = starsize[i];
// star(sx, sy, sz);
// }
// }
// function mouseClicked(){
//   let starsx = random(10, windowWidth);
//   let starsy = random(0, windowHeight);
//   let starsize = random(1, 6);
//   const s = { sx: starsx, sy: starsy, sz: starsize };
//   stars.push(s);//pushで定義したsを追加
// }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function star(cx, cy, r){
      noStroke();
      fill(255, 244, 236);
      beginShape();
      for (let i = 0; i < 5; i++) {
        const theta =  TWO_PI * i * 2 / 5 - HALF_PI;// 1/5にすると五角形になる、-HALF_PIで頂点の位置を調節
        const x = cx + cos(theta) * r;
        const y = cy + sin(theta) * r;
        vertex(x, y);//つなぐ頂点を指定　繰り返すので5回指定
      }
      endShape(CLOSE);
    }
