// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);
  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
   // noStroke();
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
   if (i % 2 == 1) {
   fill(255);
   }else {
   fill(blue);
   }
  rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  // noStroke();
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  // noStroke();
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  rect(0, 2 * d, size, d);
  rect(2 * d, 0, d, size);
}
