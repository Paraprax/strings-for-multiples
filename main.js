//string-generating function:
const devhaus105String = () => {
  let output = "";

  const concatter = (string) => {
    output = output.concat(string);
  };

  //generate a string of #'s 1 - 105:
  for (var i = 1; i <= 105; i++) {
    //swap key numbers with words:
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      //3,5,7
      concatter(`iBlüm,`);
    } else if (i % 5 == 0 && i % 7 == 0) {
      //5,7
      concatter(`Learning Model,`);
    } else if (i % 3 == 0 && i % 7 == 0) {
      //3,7
      concatter(`Devhaus Model,`);
    } else if (i % 3 == 0 && i % 5 == 0) {
      //3,5
      concatter(`Devhaus Learning,`);
    } else if (i % 7 == 0) {
      //7
      concatter(`Model,`);
    } else if (i % 5 == 0) {
      //5
      concatter(`Learning,`);
    } else if (i % 3 == 0) {
      //3
      concatter(`Devhaus,`);
    } else {
      concatter(`${i},`);
    }
  }

  //trim off the trailing comma:
  output = output.slice(0, -1);
  return output;
};

//main calling function
const main = () => {
  console.log(devhaus105String());
};

main();
