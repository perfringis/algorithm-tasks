const solution = (input, markers) => {
    let i = 0;
    while(i < input.length) {

        input[i].replace(input[i], '');

        i++;
    }
    console.log(input)
};

console.log(
  solution("apples, plums % and bananas\npears\noranges !applesauce", [
    "%",
    "!",
  ])
);

// TODO finish it