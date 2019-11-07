function duplicateEncode(word){
  var a = word.toLowerCase();
  var str = '';
  var freq = {};
  for (let i = 0; i < a.length; i++) {
    var charactor = a.charAt(i);
    if (freq[charactor]) {
    freq[charactor] ++;
    } else {
    freq[charactor] = 1;
    }
  }
  for (let i = 0; i < a.length; i ++) {
  var charactor = a.charAt(i);
  if (freq[charactor] > 1) {
  str += ')';
  } else {
  str += '(';
  }
  }
  
  return str;
};
