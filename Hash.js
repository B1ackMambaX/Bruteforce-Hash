let fs = require('fs');
let arg = process.argv;
let text = fs.readFileSync(arg[2]);
text = text.toString();
let pattern = fs.readFileSync(arg[3]);
pattern = pattern.toString();
let matchIndexes = [];
let patternHash = 0;
let substringHash =0;

function FindMatches(substring) {
    for (let j = 0; j < pattern.length; j++){
        if (pattern[j] != substring[j]){
            return false;
        }
    }
    return true;
}

for(let i = 0; i < pattern.length; i++){
    patternHash += pattern.charCodeAt(i);
    substringHash += text.charCodeAt(i);
}
console.time('Time');
for (let i = 0; i < text.length - pattern.length; i++){
    if (patternHash == substringHash){
        if (FindMatches(text.substring(i, i + pattern.length))){
            matchIndexes.push(i+1);
          }
    }
    substringHash -= text.charCodeAt(i);
    substringHash += text.charCodeAt(i + pattern.length);
}
console.timeEnd('Time');
console.log(`Number of matches: ${matchIndexes.length}`);