// naive string search

//loop over the long string and loop over the short string.
//if the characters do not match, break. if they do match, keep going.
//when the inner loop is completed and found match, increase the count
//return the count

function naiveStringSearch(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
  return count;
}
