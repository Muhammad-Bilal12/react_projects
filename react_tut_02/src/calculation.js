function addNum(a, b) {
  return a + b;
}

function subNum(a, b) {
  return a - b;
}
function mulNum(a, b) {
  return a * b;
}
function divNum(a, b) {
  return (a / b).toFixed(2);
}

export default addNum;
export { subNum, mulNum, divNum };
