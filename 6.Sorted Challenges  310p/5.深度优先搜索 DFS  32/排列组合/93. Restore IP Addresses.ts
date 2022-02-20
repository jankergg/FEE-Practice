//@ts-nocheck
function restoreIpAddresses(s) {
  const res = [];
  dfs(s, res, 0, "", 0);
  return res;
}

// idx: current visit number
// restored: current solution
// length of current valid ip sections
function dfs(ip, solutions, idx, restored, count) {
  if (count > 4) return;
  if (count === 4 && idx === ip.length) {
    solutions.push(restored);
    return;
  }

  for (let i = 1; i < 4; i++) {
    if (idx + i > ip.length) break;
    let s = ip.substring(idx, idx + i);
    if ((s.indexOf("0") === 0 && s.length > 1) || (i == 3 && parseInt(s) >= 256)) continue;
    dfs(ip, solutions, idx + i, restored + s + (count == 3 ? "" : "."), count + 1);
  }
}
console.log(restoreIpAddresses("101023"));
