// Types of functions :- 

// 1) take value in parameter and return value

   onePlusAvg =(x,y)=>{
  return  Math.round(1 + (x + y) / 2)
}

console.log("One plus average of a and c", onePlusAvg(8,10));

// 2) No  value in parameter  and return  no value

const hello=()=>{
  console.log("Hey how are you. I am fine yaar Thanks");
}
hello();

// 3) returning but not taking 


const helo=()=>{
  console.log("Hey how are you. I am fine yaar Thanks");
  return hii;
}
let v =helo();

console.log(v);

// 4) taking parameter but not returning 


const hi=()=>{
  console.log("Hey how are you. I am fine yaar Thanks");
}
let a =hi();

console.log(a);
