const devhaus105String = () => {
  let output = "";

  //generate a string of #'s 1 - 105:
  for (var i = 1; i <= 105; i++) {
    output = output.concat(`${i},`);
  }

  //trim off the last comma:
  output = output.slice(0, -1);
  return output;
};

console.log(devhaus105String());
