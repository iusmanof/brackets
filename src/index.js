module.exports = function check(str, bracketsConfig) {
  const holder = [];
  const open = [];
  const close = [];
  bracketsConfig.forEach((e) => {
    open.push(e[0]);
    close.push(e[1]);
  });

  for (let i of str) {
    // loop trought all letters of expr
    if (holder.includes(i) && close.includes(i)) {
      // if  similar
      holder.splice(-1, 1);
    } else if (open.includes(i)) {
      // if its oppening bracket
      holder.push(i);
    } else if (close.includes(i)) {
      // if its closing
      const openPair = open[close.indexOf(i)]; // find his pair
      if (holder[holder.length - 1] === openPair) {
        // check if that pair is last element in array
        holder.splice(-1, 1); //if so, remove it
      } else {
        // if its not
        holder.push(i);
        break; // exit loop
      }
    }
  }
  return holder.length === 0; // return true if length is 0, otherwise false
};
