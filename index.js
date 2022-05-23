let heights = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

const getTrappingRainWater = function (array) {
  let totalWater = 0;
  for (let p = 0; p < array.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;
    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, array[leftP]);
      leftP--;
    }
    while (rightP < array.length) {
      maxRight = Math.max(maxRight, array[rightP]);
      rightP++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - array[p];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

console.log(getTrappingRainWater(heights));