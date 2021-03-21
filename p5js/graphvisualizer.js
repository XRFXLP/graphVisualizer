const graph  = {1: [2, 3, 13, 14], 2: [1, 3, 4, 14], 3: [1, 2, 4, 5], 4: [2, 3, 5, 6], 5: [3, 4, 6, 7], 6: [4, 5, 7, 8], 7: [5, 6, 8, 9], 8: [6, 7, 9, 10], 9: [7, 8, 10, 11], 10: [8, 9, 11, 12], 11: [9, 10, 12, 13], 12: [10, 11, 13, 14], 13: [1, 11, 12, 14], 14: [1, 2, 12, 13]};



function getRandom(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}

function distance(a, b){ 
  return Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));
}

function setup() {
  createCanvas(1368, 730);
  background(255);
  
  let points = [];
  textSize(40);
  while(points.length < Object.keys(graph).length){
      let y = getRandom(50, 1200);
      let x = getRandom(50, 650);
      fill(255);
      stroke(255);
      if(points.every(a => distance(a, [y, x]) > 100)){
        points.push([y,x]);
      }
  }
  
  let MAP = {};
  fill(0);
  for(let i in graph){
       MAP[i] = points.shift();
       ellipse(MAP[i][0], MAP[i][1], 20, 20);
  }
  stroke(0);
  for(let i in graph){
    fill(20, 20, 25);
    textSize(22);
    strokeWeight(1);
    text(i, MAP[i][0] - 10, MAP[i][1] - 10);
    strokeWeight(4);
    for(let j of graph[i]){
      line(MAP[i][0], MAP[i][1], MAP[j][0], MAP[j][1]);
    }
  }
  
  
}


function draw() {
  
}
