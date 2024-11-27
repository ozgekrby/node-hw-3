function circleArea(r) {
  const area = Math.PI * r * r;
  console.log(`The area of a circle with radius ${r} is: ${area.toFixed(2)}`);
}
function circleCircumference(r) {
  const circumference = 2 * Math.PI * r;
  console.log(`The circumference of a circle with radius ${r} is: ${circumference.toFixed(2)}`);
}

module.exports={circleArea,circleCircumference};