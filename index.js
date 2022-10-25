countEl=document.getElementById('count-el');
let count=0;
function increment(){
  count+=1
  countEl.textContent=count
};

decrementEl=document.getElementById('decrement-btn');
function decrement(){
  countEl.textContent=count - 1
  count<=0;
  count-=1
};

saveEl=document.getElementById('save-el');
function save(){
  console.log(count)
  let countStr=count+" : "
  saveEl.textContent+=countStr
  countEl.textContent=0
  count=0
};

resetEl=document.getElementById('reset-btn');
function reset(){
  saveEl.textContent='Entries:-  '
  countEl.textContent=0
  count=0
};

