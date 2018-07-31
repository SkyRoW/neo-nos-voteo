export function stringFromArray(data) {
  const count = data.length;
  let str = '';

  for( let index = 0; index < count; index += 1) {
    str += String.fromCharCode(data[index]);
  }

  return str;
}

export function stringFromHex(str1) {
  const hex  = str1.toString();
  let str = '';
  for (let n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}
