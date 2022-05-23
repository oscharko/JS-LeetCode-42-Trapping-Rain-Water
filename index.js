let heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// const getTrappingRainWater = function (array) {
//   let totalWater = 0;
//   for (let p = 0; p < array.length; p++) {
//     let leftP = p,
//       rightP = p,
//       maxLeft = 0,
//       maxRight = 0;
//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, array[leftP]);
//       leftP--;
//     }
//     while (rightP < array.length) {
//       maxRight = Math.max(maxRight, array[rightP]);
//       rightP++;
//     }
//     const currentWater = Math.min(maxLeft, maxRight) - array[p];
//     if (currentWater >= 0) {
//       totalWater += currentWater;
//     }
//   }
//   return totalWater;
// };

// const getTrappingRainWater = function (a) {
//   let v = [0, a.length - 1, 0, 0, 0];
//   while (v[0] < v[1]) {
//     if (a[v[0]] <= a[v[1]]) {
//       if (a[v[0]] >= v[2]) {
//         v[2] = a[v[0]];
//       } else {
//         v[4] += v[2] - a[v[0]];
//       }
//       v[0]++;
//     } else {
//       if (a[v[1]] >= v[3]) {
//         v[3] = a[v[1]];
//       } else {
//         v[4] += v[3] - a[v[1]];
//       }
//       v[1]--;
//     }
//   }
//   return v[4];
// };

// const getTrappingRainWater = function (array) {
//   let pointerLeft = 0,
//     pointerRight = array.length - 1,
//     maxLeft = 0,
//     maxRight = 0,
//     totalWater = 0;
//   while (pointerLeft < pointerRight) {
//     if (array[pointerLeft] <= array[pointerRight]) {
//       if (array[pointerLeft] >= maxLeft) {
//         maxLeft = array[pointerLeft];
//       } else {
//         totalWater += maxLeft - array[pointerLeft];
//       }
//       pointerLeft++;
//     } else {
//       if (array[pointerRight] >= maxRight) {
//         maxRight = array[pointerRight];
//       } else {
//         totalWater += maxRight - array[pointerRight];
//       }
//       pointerRight--;
//     }
//   }
//   return totalWater;
// };

const getTrappingRainWater = function (a) {
  let v = [0, a.length - 1, 0, 0, 0];
  while (v[0] < v[1]) {
    v[3] = Math.min(a[v[0]], a[v[1]]);
    v[2] = Math.max(v[2], v[3]);
    v[4] += v[2] - v[3];
    a[v[0]] <= a[v[1]] ? v[0]++ : v[1]--;
  }

  return v[4];
};

console.log(getTrappingRainWater(heights));