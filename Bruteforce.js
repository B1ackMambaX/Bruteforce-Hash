let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync(arg[2]);
text = text.toString();
let pattern = fs.readFileSync(arg[3]);
pattern = pattern.toString();
let matchIndexes = [];
//console.log(text);
//console.log(pattern);
function FindMatches(substring) {
    for (let j = 0; j < pattern.length; j++){
        if (pattern[j] != substring[j]){
            return false;
        }
    }
    return true;
}

console.time('Time');
for (let i = 0; i <= text.length - pattern.length; i++){
  if (FindMatches(text.substring(i, i + pattern.length))){
    matchIndexes.push(i+1);
  }
}
//console.log(matchIndexes);
console.timeEnd('Time');
console.log(`Number of matches: ${matchIndexes.length}`);