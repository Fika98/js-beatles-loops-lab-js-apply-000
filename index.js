function theBeatlesPlay(musicians,instruments) {
let emptyArray = [];
for(let i = 0; i < musicians.length; i++) {
  emptyArray.push(musicians[i] + ' plays ' + instruments[i]);
}
return emptyArray
}

function johnLennonFacts(facts){
  let array = [];
  let count = 0;
  while (count < facts.length) {
  array.push(facts[count] + '!!!');
  count++;
}
return array
}

function iLoveTheBeatles(num) {
  let emptyArray = [];
  do {
    emptyArray.push('I love the Beatles!')
    num++;
     }while(num < 15);
     return emptyArray;
}




