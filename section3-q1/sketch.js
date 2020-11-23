// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46", 70, 130, 180, 199, 21, 78);
}

function balloon(t, a, b, c, d, e, f){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(a, b, c);
  noStroke();
  rect(0, 0, w + p * 2, h + p * 2);
  let x = w + p * 2;
  let y = h + p * 2;
  triangle(x / 2 - p * 2, y, x / 2 + p * 2, y, x / 2 + p * 2, y + y / 2);
  fill(d, e, f);
  text(t, p, h + p);//テキストを表示　text("TEXT", x座標, y座標);
}
