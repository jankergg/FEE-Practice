/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  const n = distance.length;
  if (!n) { return 0 }
  if (start === destination) { return 0 }
  start = start % n;
  destination = destination % n;

  // first, brutal calculate
  const middle = distance.reduce((acc, val) => (acc + val), 0) / 2;

  let p1 = start;
  let p2 = destination;
  let cw = 0;
  let cc = 0;
  let res = 0;
  while (true) {
    // clockwise
    cw += distance[p1 % n];
    p1 = (p1 + 1) % n;
    if (p1 === destination) {
      res = cw;
      break;
    }
    // counter-clickwise
    cc += distance[p2 % n];
    p2 = (p2 + 1) % n;
    if (p2 === start) {
      res = cc;
      break;
    }
  }
  return res;
};
const d = distanceBetweenBusStops([14, 21, 8, 35, 30, 21, 28, 19, 10, 25, 16, 23, 14, 13, 0, 3, 30, 9],
  12,
  3);
const f = distanceBetweenBusStops([1, 2, 3, 4], 0, 3)
console.log(d, f);