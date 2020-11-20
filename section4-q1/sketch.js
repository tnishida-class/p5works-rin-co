// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;//%←割った数の余り、つまりcountは1から99の間
let size = 50;

  // size = 50 * sin(count) + 50;←速すぎた
  if (count <= 50) { size += 10; }
 else { size -= 10; }
  // 半径が大きくなったり小さくなったりすればいい

  ellipse(width / 2, height / 2, size);
}
