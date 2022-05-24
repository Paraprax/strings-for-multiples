/* 
TODO:
- for multiples of 3, print "Devhaus" instead of the number - P
- for multiples of 5 print "Learning" 
- for multiples of 7 print "Model"
- for multiples of both 3 and 5, print Devhaus Learning
- for multiples of both 3 and 7, print Devhaus Model - P
- for multiples of both 5 and 7, print Learning Model - P
- for multiples of all 3, 5 and 7, print iBlüm(note the umlaut) - P
*/

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

console.log(devhaus105String());
