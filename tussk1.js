const x = 0.5;
const e = 0.001; // Precision threshold
let sum = Math.sin(x); // Start with sin(x)
let term = Math.sin(x); // First term
let n = 1;

while (Math.abs(sum) >= e) {
    // Ensure sum itself becomes < 0.001
    term *= Math.sin(x) / n; // Compute next term
    sum += ((n % 2 === 0 ? 1 : -1) * term) / (n + 1); // Alternating sum
    n += 1;
}

console.log('Final Sum:', sum);

-----------------------------------------
//tusk 2 -7
const RandomArrey = [2, 2, 2];
const EDEDI_Orta = arr => {
  let sum = 0;
  arr.map(item => {
    sum += item;
  });
  console.log('cvb:', sum / arr.length);
};
EDEDI_Orta(RandomArrey);

--------------------------------------------
//tusk 3 -7
let d3foultArrey= [[1,2,3],[4,5,6],[7,8,9]]
function Sum_of_Numbers(arrey){
    arrey.map((item,i)=>{
        if(i%2===0&&i!==0){
            let sum=0
            item.map((item)=>{
                sum+=item
            })
              console.log(sum)

        }
        
        
    })
  
}
Sum_of_Numbers(d3foultArrey)
