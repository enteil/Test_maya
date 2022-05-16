//TODO

function counts(teamA, teamB) {
  let arr = [];

  for (let i = 0; i < teamB.length; i++) {
    let count = 0;
    const item = teamB[i];
    for (let j = 0; j < teamA.length; j++) {
      const item2 = teamA[j];
      if (item >= item2) {
        count = count + 1;
      }
    }
    arr.push(count);
  }
  return arr;
}

(function main() {
  let teamA = [2, 10, 5, 4, 8];
  let teamB = [3, 1, 7, 8];
  let result = counts(teamA, teamB);
  console.log(result);
})();
