/**
 * iteration --> run statements once
 */






// Array iteration
let count = 0;
const score = [34, 45, 53, 32, 54, 67, 45];

console.log(score.length)

while (count < 7) {
    console.log(score[count]);
    count++;
}

console.log(count)

for (let i = 0; i < score.length; i++) {
    // console.log(i)
    // const score = score[i]
    console.log(score[i]); 
}
