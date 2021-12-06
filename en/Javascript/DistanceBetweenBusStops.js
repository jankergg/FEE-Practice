/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  if (!n) {
    return 0;
  }
  if (start === destination) {
    return 0;
  }
  if (start > destination) {
    return distanceBetweenBusStops(distance, destination, start);
  }

  destination = destination > n - 1 ? destination % n : destination;

  // first way, brutal calculate
  const middle = distance.reduce((acc, val) => acc + val, 0) / 2;

  let Dis = 0;
  let index = 0;
  while (index < destination - start) {
    let next = distance[start + index];
    if (next === undefined) {
      break;
    }
    Dis += next;
    index++;
  }
  if (Dis <= middle) {
    return Dis;
  } else {
    return 2 * middle - Dis;
  }
};

const d = distanceBetweenBusStops(
  [14, 21, 8, 35, 30, 21, 28, 19, 10, 25, 16, 23, 14, 13, 0, 3, 30, 9],
  12,
  3
);
console.log(d);
