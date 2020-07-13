const DECODER = new TextDecoder("utf-8");
const API_URL = "https://jsonplaceholder.typicode.com/comments";

fetch(API_URL).then((res) => {
  res.json().then((finalRes) => {
    console.log(finalRes);
  });
});

fetch(API_URL).then((res) => {
  res.body
    .getReader()
    .read()
    .then(({ value, done }) => {
      console.log(DECODER.decode(value));
    });
});
