//@ts-nocheck

// data structures:
/*
由于同一时间，一个人只能checkIn一次， 所以checkInMap可以用来放某个人的checkIn状态
另外，由于checkOut时，已经确定了某次行程的结束，所以我们可以确定这次行程的起始和总耗时,用`${start}_${end}`作为Key
checkInMap = {id: {stationName, time}}
checkOutMap = {[start+end]: [time]}
*/

var UndergroundSystem = function () {
  this.checkInMap = new Map();
  this.checkOutMap = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function (id, stationName, t) {
  this.checkInMap.set(id, [stationName, t]);
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function (id, stationName, t) {
  const checkIn = this.checkInMap.get(id);
  const totalTime = t - checkIn[1];
  const route = checkIn + "_" + stationName;
  const routeValue = this.checkOutMap.get(route) || [];
  routeValue.push(totalTime);
  this.checkOutMap.set(route, routeValue);
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function (startStation, endStation) {
  const route = startStation + "_" + endStation;
  const routeValue = this.checkOutMap.get(route);
  return routeValue.reduce((acc, val) => acc + val, 0) / routeValue.length;
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
