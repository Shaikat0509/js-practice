function multiplicationTable(number) {
  for (i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(number + " X " + i + " = " + result);
  }
};

multiplicationTable(5);
