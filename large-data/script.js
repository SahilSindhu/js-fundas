function start() {
  let largeArray = [];
  let time = 0;
  window.setInterval(() => {
    time = time + 1;
    console.log(time);
  }, 1000);
  largeArray = createData(largeArray);
  let x = largeArray.filter((ele, i) => {
    i === 1000000;
  });
  console.log("largedata computed");
  console.log(x);
}

function createData(arr) {
  for (let i = 0; i <= 100000000; i++) {
    arr.push(i);
  }

  return arr;
}
