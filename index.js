function takeANumber(line,name){
  if(line.indexOf(name) === -1) {
    line.push(name);
  }
  return `Welcome, ${name}. You are number ${line.indexOf(name)+1} in line.`
}

function nowServing(line){
  if(line[0]){
    let firstInLine = line[0];
    line.shift();
    return `Currently serving ${firstInLine}.`;
  } else {
    return "There is nobody waiting to be served!"
  }

}
