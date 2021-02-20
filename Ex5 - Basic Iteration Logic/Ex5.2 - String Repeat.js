function repeat_str(num, str){
  res = '';
  for (let i = 0; i < num; i++){
    res += str
  }
  return res;
}

console.log(repeat_str(5, 'A'));