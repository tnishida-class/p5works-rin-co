// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(300, 200);
  background(0, 51, 153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;　//θ=360°の1/12の角度
    let x = 150 + cos(theta) * 75; //ｘ＝中心のx座標+cosθ*半径
    let y = 100 + sin(theta) * 75; //ｙ＝中心のy座標+cosθ*半径
    // ここまでで12個の点を円形に並べた
  // ellipse(x, y, 10);　//o(x, y)、半径10の円を描画
  fill(255, 204, 0);
  star(x, y, 11);
}
}

function star(cx, cy, r){
      // push();
      noStroke();
      // fill(255, 255, 0);
      beginShape();
      for (let i = 0; i < 5; i++) {
        const theta =  TWO_PI * i * 2 / 5 - HALF_PI;// 1/5にすると五角形になる、-HALF_PIで頂点の位置を調節
        const x = cx + cos(theta) * r;
        const y = cy + sin(theta) * r;
        vertex(x, y);//つなぐ頂点を指定　繰り返すので5回指定
      }
      endShape(CLOSE);
      // pop();
    }
