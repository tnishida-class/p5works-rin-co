// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    let x = j + i;
    if (x % 2 == 1) {
      fill(176, 196, 222);
      // ellipse(size * i + width / 16, size * j + width / 16, size * i, size * j);
    } else {
      noFill();
    }
    rect(size * i, size * j, size, size);
    let a = size * i + width / 16;
    let b = size * j + width / 16;
     if (x % 2 == 1 && j < 3) {
     fill(255, 99, 71);
     }
     else if (x % 2 == 1 && j >= 5) {
     fill(25, 25, 112);
     } else {
     noFill();
     }
    ellipse(a, b, size - 5, size - 5);
  }
  }
}
