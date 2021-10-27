// Formatter: format displaying info on modal

export const langFormatter = (obj) => {
  let output = [];
  for (let p in obj) {
    output.push(obj[p]);
  }
  output.join(", ");
  return output;
};

export const currencyFormatter = (obj) => {
  let output = [];
  for (let p in obj) {
    output.push(obj[p].name);
    output.push(`(${obj[p].symbol})`);
  }
  output.join("");
  return output;
};
