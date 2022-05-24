//string-generating function:
const devhaus105String = () => {
  let output = "";

  //generate a string of #'s 1 - 105:
  for (var i = 1; i <= 105; i++) {
    //swap key numbers with words:
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      output = output.concat(`iBlüm,`);
    } else if (i % 5 == 0 && i % 7 == 0) {
      output = output.concat(`Learning Model,`);
    } else if (i % 3 == 0 && i % 7 == 0) {
      output = output.concat(`Devhaus Model,`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      output = output.concat(`Devhaus Learning,`);
    } else if (i % 7 == 0) {
      output = output.concat(`Model,`);
    } else if (i % 5 == 0) {
      output = output.concat(`Learning,`);
    } else if (i % 3 == 0) {
      output = output.concat(`Devhaus,`);
    } else {
      output = output.concat(`${i},`);
    }
  }

  //trim off the last comma:
  output = output.slice(0, -1);
  return output;
};

//main calling function
const main = () => {
  console.log(devhaus105String());
};

main();
