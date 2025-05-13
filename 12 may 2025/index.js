function onePlusAvg(x,y) {

    console.log("Done");
    return Math.round(1 + (x + y) / 2);
    
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  
  console.log("One plus average of a and b", onePlusAvg(a,b));
  console.log("One plus average of b and c", onePlusAvg(b,c));
  console.log("One plus average of a and c", onePlusAvg(c,a));